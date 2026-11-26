/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  T,
  PALS,
  DEF_STATE,
  PatternState,
  PatternMode,
  CanvasRatio,
  BgGradientMode,
  SurfaceTextureMode,
  RATIO_LIST,
  getMicrostockPosterRatio,
  getMicrostockCalendarRatio,
  getMicrostockTypographyRatio,
  getRatioDims,
  getExactTileGrid,
  buildBackgroundAndTextureSVG,
  INITIAL_MODES,
  TEMPLATE,
  mulb,
  mkH,
  SH,
  star4,
  tear,
  leafP,
  starPath,
  spiralPath,
  blobPath,
  mixCol,
  hsl,
  fixContrast,
  svgData,
  genCand,
  cvs,
  loadImg,
  nextUniqueSeed,
  nextUniqueStructuralSalt,
  computeDesignHash,
  computeStructuralSimilarityHash,
  isDesignDuplicate,
  registerDesignHash,
  flushDesignHashRegistriesNow,
  getLifetimeUniqueTotal,
  buildIllustratorSVG,
  buildIllustratorEPS10,
  applyStudioMicroGrain,
  ensureJpgOver5MB,
  ensurePngMicrostockReady,
  inspectMicrostockFileBinary,
  MicrostockBinaryVerification,
  createZipArchiveBlob,
  computeBlobCrc32AndSize,
  ZipEntryInput,
  buildMicrostockCSV,
  buildMicrostockSeoIdentity,
  MicrostockMetaRow,
  ILLUSTRATOR_ARTBOARD_PRESETS,
  MASTER_POSTER_MODES,
  MASTER_LIGHTING_MODES,
  MASTER_CALENDAR_MODES,
  MASTER_TORN_PAPER_MODES,
  MASTER_SHADOW_MODES,
  MASTER_TYPOGRAPHY_MODES,
  traceFabricImageToPatternCode,
} from "./patternEngine";

const SK = "patternvault_studio_v5";
const FK = "patternvault_favs_v5";
const CK = "patternvault_custom_v5";

function getInitialModes(): { modes: PatternMode[]; customCode: string } {
  const modes = [...INITIAL_MODES];
  let customCode = "";
  try {
    customCode = localStorage.getItem(CK) || "";
  } catch {
    // ignore
  }
  if (customCode.trim()) {
    // Sanitize any legacy custom code that used SH.blob(rad,...) or SH.leaf(rad,...)
    customCode = customCode
      .replace(/SH\.blob\([^)]*\)/g, "blobPath(m.rnd, 7, 0.28)")
      .replace(/SH\.leaf\([^)]*\)/g, "leafP(32, 13)");
    try {
      const registerCustom = (a: any, b?: string, c?: any[], d?: any) => {
        let obj: PatternMode;
        if (typeof a === "string") {
          obj = { id: a, name: b || a, cat: "Custom", params: c || [], draw: d, isCustom: true };
        } else {
          obj = {
            id: a.id,
            name: a.name,
            cat: a.cat || "Custom",
            look: a.look,
            params: a.params || [],
            draw: a.draw,
            isCustom: true,
          };
        }
        const origDraw = obj.draw;
        obj.draw = (m: any, q: any) => {
          m.raw('<g clip-path="url(#tileClip)">');
          try {
            origDraw(m, q);
          } catch (err) {
            console.warn("Custom pattern draw error:", err);
          }
          m.raw("</g>");
        };
        const idx = modes.findIndex((x) => x.id === obj.id);
        if (idx >= 0) modes[idx] = obj;
        else modes.push(obj);
      };
      new Function(
        "mode",
        "SH",
        "T",
        "star4",
        "tear",
        "leafP",
        "starPath",
        "spiralPath",
        "blobPath",
        "mixCol",
        customCode
      )(registerCustom, SH, T, star4, tear, leafP, starPath, spiralPath, blobPath, mixCol);
    } catch (e) {
      console.warn("Custom pattern error:", e);
    }
  }
  return { modes, customCode };
}

function getInitialParamMap(modes: PatternMode[]): Record<string, Record<string, any>> {
  const mp: Record<string, Record<string, any>> = {};
  modes.forEach((m) => {
    mp[m.id] = {};
    m.params.forEach((p) => {
      mp[m.id][p.k] = p.def;
    });
  });
  return mp;
}

export default function App() {
  const initData = useMemo(() => getInitialModes(), []);
  const [modes, setModes] = useState<PatternMode[]>(initData.modes);
  const [customCode, setCustomCode] = useState<string>(initData.customCode);

  const [P, setP] = useState<PatternState>(() => {
    try {
      const raw = localStorage.getItem(SK);
      if (raw) {
        const s = JSON.parse(raw);
        if (s && s.P) {
          const merged: PatternState = { ...DEF_STATE, ...s.P };
          if (!initData.modes.some((m) => m.id === merged.mode)) {
            merged.mode = DEF_STATE.mode;
          }
          if (!merged.ratio) merged.ratio = "1:1";
          if (!merged.px || merged.px < 5200) merged.px = 5200;
          const enforcedDims = getRatioDims(merged.px, merged.ratio, merged.artW, merged.artH);
          merged.artW = enforcedDims.w;
          merged.artH = enforcedDims.h;
          if (!merged.bgGrad) merged.bgGrad = "solid";
          if (!merged.bg2) merged.bg2 = mixCol(merged.bg, merged.c0, 0.35);
          // Always start clean with no unwanted grainy speckles overlay
          merged.bd = "none";
          merged.safeEdge = false;
          return merged;
        }
      }
    } catch {
      // ignore
    }
    return { ...DEF_STATE, seed: nextUniqueSeed() };
  });

  const [MP, setMP] = useState<Record<string, Record<string, any>>>(() => {
    const base = getInitialParamMap(initData.modes);
    const plainBgIds = new Set(initData.modes.filter((m) => m.cat === "Plain BG").map((m) => m.id));
    const bgIds = new Set(initData.modes.filter((m) => m.cat === "Background").map((m) => m.id));
    try {
      const raw = localStorage.getItem(SK);
      if (raw) {
        const s = JSON.parse(raw);
        if (s && s.MP) {
          for (const id in s.MP) {
            if (base[id]) {
              for (const k in s.MP[id]) {
                if (k in base[id]) {
                  // Do not restore old default grainy dots on Plain BG / Background modes
                  if (plainBgIds.has(id) && (k === "tex" || k === "grain")) continue;
                  if (bgIds.has(id) && (k === "grain" || k === "grit" || k === "pits")) continue;
                  base[id][k] = s.MP[id][k];
                }
              }
            }
          }
        }
      }
    } catch {
      // ignore
    }
    return base;
  });

  const [favs, setFavs] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(FK);
      if (raw) return new Set(JSON.parse(raw));
    } catch {
      // ignore
    }
    return new Set();
  });

  const [cat, setCat] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"pattern" | "colour" | "surface" | "export">("pattern");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  });

  const [palOpen, setPalOpen] = useState<boolean>(false);
  const [palIdx, setPalIdx] = useState<number>(1);
  const [palLabel, setPalLabel] = useState<string>("ROYAL LOTUS");

  const [hist, setHist] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState<number>(-1);
  const lockHist = useRef<boolean>(false);

  const [randLocked, setRandLocked] = useState<boolean>(false);
  const [randNote, setRandNote] = useState<string>(
    "100% MANUAL PROCEDURAL ENGINE · ZERO AI · ZERO DUPLICATES (429+ CRORE SEEDS)"
  );
  const [clicks, setClicks] = useState<number>(0);
  const [uniqCount, setUniqCount] = useState<number>(() => Math.max(1, getLifetimeUniqueTotal()));
  const [exportStatus, setExportStatus] = useState<string>("");
  const sessionSeenRef = useRef<Set<string>>(new Set());
  const busyRef = useRef<boolean>(false);

  // Auto-Batch Generator State (Defaults to "current" so batching generates variations of the exact active canvas design!)
  const [batchModalOpen, setBatchModalOpen] = useState<boolean>(false);
  const [batchScope, setBatchScope] = useState<"current" | "category" | "favs" | "all">("current");
  const [batchFormat, setBatchFormat] = useState<"eps_jpg" | "eps" | "jpg" | "svg" | "both" | "all3">("eps_jpg");
  const [batchCount, setBatchCount] = useState<number>(10);
  const [batchBgMode, setBatchBgMode] = useState<"mix" | "gradient" | "texture" | "current">("mix");
  const [batchRunning, setBatchRunning] = useState<boolean>(false);
  const [batchProgress, setBatchProgress] = useState<{ done: number; total: number; msg: string }>({
    done: 0,
    total: 0,
    msg: "",
  });
  const batchCancelRef = useRef<boolean>(false);

  // Other Modals & Fabric Image Upload
  const [codeModalOpen, setCodeModalOpen] = useState<boolean>(false);
  const [codeInput, setCodeInput] = useState<string>("");
  const [codeMsg, setCodeMsg] = useState<{ text: string; err: boolean }>({ text: "", err: false });
  const [keyModalOpen, setKeyModalOpen] = useState<boolean>(false);
  const [fabricTracing, setFabricTracing] = useState<boolean>(false);
  const fabricInputRef = useRef<HTMLInputElement>(null);
  const verifyInputRef = useRef<HTMLInputElement>(null);
  const [lastVerifiedFile, setLastVerifiedFile] = useState<MicrostockBinaryVerification | null>(null);

  const vpRef = useRef<HTMLDivElement>(null);
  const [vpSize, setVpSize] = useState<{ w: number; h: number }>({ w: 680, h: 560 });

  useEffect(() => {
    const updateSize = () => {
      if (vpRef.current) {
        setVpSize({
          w: vpRef.current.clientWidth,
          h: vpRef.current.clientHeight,
        });
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    if (vpRef.current) ro.observe(vpRef.current);
    window.addEventListener("resize", updateSize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Debounced save state (900ms debounce so rapid clicks never block the main thread with localStorage writes)
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(SK, JSON.stringify({ P, MP }));
      } catch {
        // ignore
      }
    }, 900);
    return () => clearTimeout(timer);
  }, [P, MP]);

  const curModeParams = MP[P.mode];

  // Lightweight History (stores only active mode params ~250B instead of all 750 modes ~150KB, debounced 160ms)
  useEffect(() => {
    if (lockHist.current) {
      lockHist.current = false;
      return;
    }
    const timer = setTimeout(() => {
      const snap = JSON.stringify({ P, modeId: P.mode, modeQ: curModeParams || {} });
      setHist((prev) => {
        if (hIdx >= 0 && prev[hIdx] === snap) return prev;
        const next = prev.slice(0, hIdx + 1);
        next.push(snap);
        if (next.length > 50) next.shift();
        setHIdx(next.length - 1);
        return next;
      });
    }, 160);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [P, curModeParams]);

  // O(1) Mode Lookup Maps (eliminates O(N^2) modes.find and modes.indexOf across 750+ modes)
  const modeById = useMemo(() => {
    const map = new Map<string, PatternMode>();
    for (let i = 0; i < modes.length; i++) map.set(modes[i].id, modes[i]);
    return map;
  }, [modes]);

  const modeIdxById = useMemo(() => {
    const map = new Map<string, number>();
    for (let i = 0; i < modes.length; i++) map.set(modes[i].id, i);
    return map;
  }, [modes]);

  const curMode = useMemo(() => {
    return modeById.get(P.mode) || modes[0];
  }, [modeById, modes, P.mode]);

  const curModeIdx = useMemo(() => {
    return modeIdxById.get(curMode.id) ?? 0;
  }, [modeIdxById, curMode]);

  const pad2 = (n: number) => String(n).padStart(2, "0");

  // Build single master tile SVG (1000x1000) with Gradient, Vector Texture, and Zero Side-Cut geometry
  const buildSVGFor = useCallback(
    (
      stateP: PatternState,
      stateMP: Record<string, Record<string, any>>,
      transp: boolean,
      withGrid: boolean,
      renderW: number = T,
      renderH: number = T
    ) => {
      const mObj = modeById.get(stateP.mode) || modes[0];
      const shadowTransp =
        mObj.cat === "Shadow" &&
        String(stateMP[mObj.id]?.bgMode ?? "transparent") === "transparent";
      const effectiveTransp =
        mObj.cat === "Poster" ||
        mObj.cat === "Calendar" ||
        mObj.cat === "Typography" ||
        mObj.cat === "Torn Paper"
          ? false
          : mObj.cat === "Shadow"
          ? shadowTransp
          : Boolean(transp || mObj.cat === "Brush" || mObj.cat === "Lighting");
      const C = {
        ...stateP,
        transp: effectiveTransp,
        cols: [stateP.c0, stateP.c1, stateP.c2, stateP.c3, stateP.c4],
      };
      const H = mkH(C, mulb(C.seed));

      const { gradDefs, bgRect, texLayer } = buildBackgroundAndTextureSVG(stateP, effectiveTransp);
      gradDefs.forEach((d) => H.def(d));

      const start = H.out.length;
      const defParams: Record<string, any> = {};
      mObj.params.forEach((p) => {
        defParams[p.k] = p.def;
      });
      const mergedQ = { ...defParams, ...(stateMP[mObj.id] || {}) };
      try {
        mObj.draw(H, mergedQ);
      } catch (err) {
        console.warn("Pattern draw error [" + mObj.id + "]:", err);
      }
      const drawn = H.out.slice(start).join("");
      const mx = C.mx || "none";
      if (mx !== "none") {
        H.out.length = start;
        const G = (tr: string) => `<g transform="${tr}">${drawn}</g>`;
        if (mx === "mirror") {
          H.raw(
            G("scale(.5 .5)") +
              G("translate(1000 0) scale(-.5 .5)") +
              G("translate(0 1000) scale(.5 -.5)") +
              G("translate(1000 1000) scale(-.5 -.5)")
          );
        } else if (mx === "rot") {
          H.raw(
            G("scale(.5 .5)") +
              G("translate(1000 0) rotate(90) scale(.5 .5)") +
              G("translate(1000 1000) rotate(180) scale(.5 .5)") +
              G("translate(0 1000) rotate(270) scale(.5 .5)")
          );
        } else if (mx === "double") {
          H.raw(
            `<g>${drawn}</g>` +
              `<g opacity=".88" transform="translate(500 500) rotate(180) translate(-500 -500)">${drawn}</g>`
          );
        } else if (mx === "patch") {
          H.raw(
            G("scale(.5 .5)") +
              `<rect x="500" y="0" width="500" height="500" fill="${H.col(0)}" opacity=".22"/>` +
              G("translate(1000 0) scale(-.5 .5)") +
              `<rect x="0" y="500" width="500" height="500" fill="${H.col(1)}" opacity=".22"/>` +
              G("translate(0 1000) scale(.5 -.5)") +
              G("translate(500 500) scale(.5 .5)")
          );
        } else if (mx === "invert") {
          const m2 = mkH({ ...C, bg: C.cols[0], cols: [C.bg, ...C.cols.slice(1)] }, mulb(C.seed));
          mObj.draw(m2, stateMP[mObj.id] || {});
          H.defs.push(...m2.defs);
          const drawnB = m2.out.join("");
          const GB = (tr: string) => `<g transform="${tr}">${drawnB}</g>`;
          H.raw(
            G("scale(.5 .5)") +
              `<rect x="500" y="0" width="500" height="500" fill="${C.cols[0]}"/>` +
              GB("translate(500 0) scale(.5 .5)") +
              `<rect x="0" y="500" width="500" height="500" fill="${C.cols[0]}"/>` +
              GB("translate(0 500) scale(.5 .5)") +
              G("translate(500 500) scale(.5 .5)")
          );
        }
      }

      const bgGroup = effectiveTransp ? "" : `<g id="TILE_BACKGROUND_LAYER">${bgRect}</g>`;
      const gr = withGrid
        ? `<rect width="${T}" height="${T}" fill="none" stroke="#10b981" stroke-width="5" stroke-dasharray="14 10"/>`
        : "";
      const defs = `<defs><clipPath id="tileClip"><rect width="${T}" height="${T}"/></clipPath>${H.defs.join(
        ""
      )}</defs>`;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${T} ${T}" width="${renderW}" height="${renderH}" preserveAspectRatio="none" shape-rendering="geometricPrecision">${defs}${bgGroup}${texLayer}${H.out.join(
        ""
      )}${gr}</svg>`;
    },
    [modeById, modes]
  );

  const curSVG = useMemo(() => {
    const shadowTransp =
      curMode.cat === "Shadow" &&
      String(curModeParams?.bgMode ?? "transparent") === "transparent";
    const omitBg =
      curMode.cat === "Poster" ||
      curMode.cat === "Calendar" ||
      curMode.cat === "Typography" ||
      curMode.cat === "Torn Paper"
        ? false
        : curMode.cat === "Shadow"
        ? shadowTransp
        : Boolean(P.transp || curMode.cat === "Brush" || curMode.cat === "Lighting");
    return buildSVGFor(P, { [curMode.id]: curModeParams || {} }, omitBg, P.grid);
  }, [P, curModeParams, curMode.cat, curMode.id, buildSVGFor]);

  // Use lightweight 50-byte Blob URL instead of megabyte encodeURIComponent data URI for instant paint
  const curBlobUrl = useMemo(() => {
    const blob = new Blob([curSVG], { type: "image/svg+xml;charset=utf-8" });
    return URL.createObjectURL(blob);
  }, [curSVG]);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(curBlobUrl);
    };
  }, [curBlobUrl]);

  // Lazy non-blocking thumbnail cache (generates ONLY visible gallery cards in small async idle slices so startup takes 0ms!)
  const thumbCacheRef = useRef<Record<string, string>>({});
  const [thumbs, setThumbs] = useState<Record<string, string>>({});
  const [vaultLimit, setVaultLimit] = useState<number>(24);

  // Select a pattern mode
  const selectMode = useCallback(
    (m: PatternMode) => {
      setP((prev) => {
        const isPlainBg =
          m.cat === "Plain BG" ||
          m.cat === "Background" ||
          m.cat === "Gradient" ||
          m.cat === "Texture";
        const isBrush = m.cat === "Brush";
        const isPoster = m.cat === "Poster";
        const isLighting = m.cat === "Lighting";
        const isCalendar = m.cat === "Calendar";
        const isTypography = m.cat === "Typography";
        const isTornPaper = m.cat === "Torn Paper";
        const isShadow = m.cat === "Shadow";
        const prevModeObj = modes.find((x) => x.id === prev.mode);
        const wasBrushOrLight =
          prevModeObj?.cat === "Brush" ||
          prevModeObj?.cat === "Lighting" ||
          prevModeObj?.cat === "Shadow";
        const defPcs = String(m.params.find((p) => p.k === "pcs")?.def || (isLighting || isTypography ? "1" : "4"));
        const defViewMode = String(m.params.find((p) => p.k === "viewMode")?.def || "12m");
        const defBgMode = String(m.params.find((p) => p.k === "bgMode")?.def || "split");
        const defTornLayout = String(m.params.find((p) => p.k === "layoutType")?.def || "scrap_1pc");
        const defShadowArch = String(m.params.find((p) => p.k === "archType")?.def || "oval_contact");
        const targetRatio: CanvasRatio = isPoster
          ? getMicrostockPosterRatio(defPcs)
          : isCalendar
          ? getMicrostockCalendarRatio(defViewMode)
          : isTypography
          ? getMicrostockTypographyRatio(defPcs)
          : isTornPaper
          ? defTornLayout === "canyon_v_rip" ||
            defTornLayout === "half_divider" ||
            defTornLayout === "center_strip" ||
            defTornLayout === "curled_peel_canyon" ||
            (defTornLayout === "scrap_1pc" && defPcs === "1")
            ? "3:2"
            : "4:3"
          : isShadow
          ? defShadowArch === "linear_fade_overlay" ||
            defShadowArch === "circular_disc_base" ||
            defShadowArch === "diagonal_gobo_soft"
            ? "1:1"
            : "3:2"
          : isLighting
          ? defBgMode === "split" || defPcs === "8" || defPcs === "4" || defPcs === "6" || defPcs === "12"
            ? "2:1"
            : "1:1"
          : prev.ratio || "1:1";
        const d = getRatioDims(Math.max(5000, +prev.px || 5000), targetRatio);
        const next: PatternState = {
          ...prev,
          mode: m.id,
          mx: "none",
          bd: isPlainBg ? prev.bd : "none",
          transp:
            isBrush || isLighting || isShadow
              ? true
              : wasBrushOrLight || isPoster || isCalendar || isTypography || isTornPaper || isPlainBg
              ? false
              : prev.transp,
          svgStructure:
            isPlainBg ||
            isBrush ||
            isPoster ||
            isLighting ||
            isCalendar ||
            isTypography ||
            isTornPaper ||
            isShadow
              ? "unified"
              : prev.svgStructure || "separable",
          view:
            isPlainBg ||
            isBrush ||
            isPoster ||
            isLighting ||
            isCalendar ||
            isTypography ||
            isTornPaper ||
            isShadow
              ? 1
              : prev.view,
          ratio:
            isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow
              ? targetRatio
              : prev.ratio,
          artW:
            isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow
              ? d.w
              : prev.artW,
          artH:
            isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow
              ? d.h
              : prev.artH,
        };
        if (m.look) {
          const L = m.look;
          if (isPoster) next.bg = "#000000";
          else if (L.bg) next.bg = L.bg;
          if (L.ink) next.ink = L.ink;
          if (L.cols) {
            next.ncol = L.ncol || Math.min(5, L.cols.length);
            L.cols.forEach((c, i) => {
              (next as any)["c" + i] = c;
            });
            next.bg2 = mixCol(next.bg, L.cols[0] || "#8b5cf6", 0.35);
          }
          if (L.style) next.style = L.style;
          if (L.sw) next.sw = L.sw;
        }
        if (isBrush) {
          const defArch = m.params.find((p) => p.k === "arch")?.def;
          if (defArch) {
            setMP((prevMP) => ({
              ...prevMP,
              [m.id]: { ...(prevMP[m.id] || {}), arch: defArch },
            }));
          }
        }
        return next;
      });
    },
    [modes]
  );

  // Quick 1-Click Exact Reference Poster Set Selector (Sets 1–12 Habuhu + Resets variant to 0)
  const selectPosterReferenceSet = useCallback(
    (posterModeId: string) => {
      const m = modes.find((x) => x.id === posterModeId);
      if (!m) return;
      const defPcs = String(m.params.find((p) => p.k === "pcs")?.def || "4");
      const curShowText =
        curMode.cat === "Poster"
          ? (MP[curMode.id]?.showText ?? true)
          : (MP[m.id]?.showText ?? true);
      setMP((prevMP) => ({
        ...prevMP,
        [m.id]: {
          ...(prevMP[m.id] || {}),
          pcs: defPcs,
          variant: 0,
          showText: curShowText,
        },
      }));
      selectMode(m);
      setCat("Poster");
      setRandNote(
        `EXACT REFERENCE POSTER SET LOADED · ${m.name.toUpperCase()} · CLICK "UNIQUE GENERATE" FOR VARIATIONS`
      );
    },
    [modes, curMode, MP, selectMode]
  );

  // Quick 1-Click Poster Set Piece Selector (1 PCS Single, 2 PCS, 3 PCS, 4 PCS, 5 PCS, 6 PCS, 4 PCS 2x2 Grid)
  const switchPosterSetPcs = useCallback(
    (pcsVal: string) => {
      const targetPoster =
        curMode.cat === "Poster"
          ? curMode
          : modes.find((m) => m.id === "poster_ref1_coral_gold_5pcs") ||
            modes.find((m) => m.cat === "Poster");
      if (!targetPoster) return;
      const curShowText =
        curMode.cat === "Poster"
          ? (MP[curMode.id]?.showText ?? true)
          : (MP[targetPoster.id]?.showText ?? true);
      const targetRatio: CanvasRatio = getMicrostockPosterRatio(pcsVal);
      const d = getRatioDims(Math.max(5000, +P.px || 5000), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [targetPoster.id]: {
          ...(prevMP[targetPoster.id] || {}),
          pcs: pcsVal,
          showText: curShowText,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetPoster.id,
        bg: prev.mode === targetPoster.id && prev.bg ? prev.bg : "#000000",
        transp: false,
        bd: "none",
        mx: "none",
        svgStructure: "unified",
        view: 1,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
      }));
      setCat("Poster");
    },
    [curMode, modes, MP, P.px]
  );

  // Quick 1-Click Poster Text Checkbox Toggle (☑ Checkmark ON = Show Outlined Vector Text, ☐ OFF = No Text)
  const togglePosterTextCheck = useCallback(() => {
    const targetPoster =
      curMode.cat === "Poster"
        ? curMode
        : modes.find((m) => m.id === "poster_ref1_coral_gold_5pcs") ||
          modes.find((m) => m.cat === "Poster");
    if (!targetPoster) return;
    const currentChecked =
      (MP[targetPoster.id]?.showText ?? true) !== false &&
      (MP[targetPoster.id]?.showText ?? true) !== "false";
    const nextChecked = !currentChecked;
    setMP((prevMP) => ({
      ...prevMP,
      [targetPoster.id]: {
        ...(prevMP[targetPoster.id] || {}),
        showText: nextChecked,
      },
    }));
    if (curMode.cat !== "Poster") {
      selectMode(targetPoster);
      setCat("Poster");
    }
  }, [curMode, modes, MP, selectMode]);

  // Quick 1-Click Lighting & Lens Flare Set Selector (108 Original Microstock Lighting Designs)
  const selectLightingReferenceSet = useCallback(
    (lightingModeId: string) => {
      const m = modes.find((x) => x.id === lightingModeId);
      if (!m) return;
      const defPcs = String(m.params.find((p) => p.k === "pcs")?.def || "1");
      const defBgMode = String(m.params.find((p) => p.k === "bgMode")?.def || "split");
      setMP((prevMP) => ({
        ...prevMP,
        [m.id]: {
          ...(prevMP[m.id] || {}),
          pcs: defPcs,
          bgMode: defBgMode,
          variant: 0,
        },
      }));
      selectMode(m);
      setCat("Lighting");
      setRandNote(
        `ORIGINAL LIGHTING LOADED · ${m.name.toUpperCase()} · SWITCH SPLIT / TRANSPARENT / BLACK BG ANYTIME`
      );
    },
    [modes, selectMode]
  );

  // Quick 1-Click Lighting Artboard Background Mode Switcher:
  // "split" = 50% Black Left + 50% Transparent Right on Same Artboard
  // "transparent" = 100% Transparent (Zero Background)
  // "black" = 100% Pitch Black Background (#000000)
  const switchLightingBgMode = useCallback(
    (bgModeVal: "split" | "transparent" | "black") => {
      const targetLight =
        curMode.cat === "Lighting"
          ? curMode
          : modes.find((m) => m.id === "light_ref1_split_golden_sunburst") ||
            modes.find((m) => m.cat === "Lighting");
      if (!targetLight) return;
      const curPcs = String(
        MP[targetLight.id]?.pcs || targetLight.params.find((p) => p.k === "pcs")?.def || "1"
      );
      const targetRatio: CanvasRatio =
        bgModeVal === "split" || curPcs === "8" || curPcs === "4" || curPcs === "6" || curPcs === "12"
          ? "2:1"
          : "1:1";
      const d = getRatioDims(Math.max(5000, +P.px || 5000), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [targetLight.id]: {
          ...(prevMP[targetLight.id] || {}),
          bgMode: bgModeVal,
          pcs: curPcs,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetLight.id,
        bg: "#000000",
        transp: bgModeVal !== "black",
        bd: "none",
        mx: "none",
        svgStructure: "unified",
        view: 1,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
      }));
      setCat("Lighting");
    },
    [curMode, modes, MP, P.px]
  );

  // Quick 1-Click Lighting Piece Count Switcher (1 / Dual Split, 4 PCS, 6 PCS, 8 PCS Kit, 9 PCS, 12 PCS)
  const switchLightingSetPcs = useCallback(
    (pcsVal: string) => {
      const targetLight =
        curMode.cat === "Lighting"
          ? curMode
          : modes.find((m) => m.id === "light_ref1_split_golden_sunburst") ||
            modes.find((m) => m.cat === "Lighting");
      if (!targetLight) return;
      const curBgMode = String(
        MP[targetLight.id]?.bgMode ||
          targetLight.params.find((p) => p.k === "bgMode")?.def ||
          "split"
      );
      const targetRatio: CanvasRatio =
        curBgMode === "split" || pcsVal === "8" || pcsVal === "4" || pcsVal === "6" || pcsVal === "12"
          ? "2:1"
          : "1:1";
      const d = getRatioDims(Math.max(5000, +P.px || 5000), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [targetLight.id]: {
          ...(prevMP[targetLight.id] || {}),
          pcs: pcsVal,
          bgMode: curBgMode,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetLight.id,
        bg: "#000000",
        transp: curBgMode !== "black",
        bd: "none",
        mx: "none",
        svgStructure: "unified",
        view: 1,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
      }));
      setCat("Lighting");
    },
    [curMode, modes, MP, P.px]
  );

  // Quick 1-Click Calendar & Weekly Planner Studio Handlers (60 Commercial Microstock Calendar Sets)
  const selectCalendarSet = useCallback(
    (calModeId: string) => {
      const m = modes.find((x) => x.id === calModeId);
      if (!m) return;
      const prevYear = curMode.cat === "Calendar" ? MP[curMode.id]?.year : undefined;
      const prevView = curMode.cat === "Calendar" ? MP[curMode.id]?.viewMode : undefined;
      const prevMonth = curMode.cat === "Calendar" ? MP[curMode.id]?.month : undefined;
      const prevWeekStart = curMode.cat === "Calendar" ? MP[curMode.id]?.weekStart : undefined;
      const defView = String(
        prevView || m.params.find((p) => p.k === "viewMode")?.def || "12m"
      );
      const targetRatio = getMicrostockCalendarRatio(defView);
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [m.id]: {
          ...(prevMP[m.id] || {}),
          ...(prevYear !== undefined ? { year: prevYear } : {}),
          viewMode: defView,
          ...(prevMonth !== undefined ? { month: prevMonth } : {}),
          ...(prevWeekStart !== undefined ? { weekStart: prevWeekStart } : {}),
          variant: 0,
        },
      }));
      selectMode(m);
      setP((prev) => ({
        ...prev,
        mode: m.id,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
        svgStructure: "unified",
        view: 1,
        transp: false,
      }));
      setCat("Calendar");
      setRandNote(
        `CALENDAR STUDIO LOADED · ${m.name.toUpperCase()} · 100% EDITABLE VECTOR DATES & MONTHS`
      );
    },
    [modes, curMode, MP, P.px, selectMode]
  );

  const switchCalendarViewMode = useCallback(
    (viewVal: string) => {
      const targetCal =
        curMode.cat === "Calendar"
          ? curMode
          : modes.find((m) => m.id === "cal_ms_1") || modes.find((m) => m.cat === "Calendar");
      if (!targetCal) return;
      const targetRatio = getMicrostockCalendarRatio(viewVal);
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [targetCal.id]: {
          ...(prevMP[targetCal.id] || {}),
          viewMode: viewVal,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetCal.id,
        transp: false,
        bd: "none",
        mx: "none",
        svgStructure: "unified",
        view: 1,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
      }));
      setCat("Calendar");
    },
    [curMode, modes, P.px]
  );

  const switchCalendarYear = useCallback(
    (yearVal: string) => {
      const targetCal =
        curMode.cat === "Calendar"
          ? curMode
          : modes.find((m) => m.id === "cal_ms_1") || modes.find((m) => m.cat === "Calendar");
      if (!targetCal) return;
      const curView = String(
        MP[targetCal.id]?.viewMode ||
          targetCal.params.find((p) => p.k === "viewMode")?.def ||
          "12m"
      );
      const targetRatio = getMicrostockCalendarRatio(curView);
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [targetCal.id]: {
          ...(prevMP[targetCal.id] || {}),
          year: yearVal,
          viewMode: curView,
        },
      }));
      if (curMode.cat !== "Calendar") {
        setP((prev) => ({
          ...prev,
          mode: targetCal.id,
          transp: false,
          bd: "none",
          mx: "none",
          svgStructure: "unified",
          view: 1,
          ratio: targetRatio,
          artW: d.w,
          artH: d.h,
        }));
        setCat("Calendar");
      }
    },
    [curMode, modes, MP, P.px]
  );

  const switchCalendarMonth = useCallback(
    (monthVal: string) => {
      const targetCal =
        curMode.cat === "Calendar"
          ? curMode
          : modes.find((m) => m.id === "cal_ms_1") || modes.find((m) => m.cat === "Calendar");
      if (!targetCal) return;
      const curView = String(
        MP[targetCal.id]?.viewMode ||
          targetCal.params.find((p) => p.k === "viewMode")?.def ||
          "12m"
      );
      // If user clicks a specific month while on 12-Month full year view, keep 12m or if on 1m/3m/4m/6m/week update active month
      setMP((prevMP) => ({
        ...prevMP,
        [targetCal.id]: {
          ...(prevMP[targetCal.id] || {}),
          month: monthVal,
        },
      }));
      if (curMode.cat !== "Calendar") {
        const targetRatio = getMicrostockCalendarRatio(curView);
        const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
        setP((prev) => ({
          ...prev,
          mode: targetCal.id,
          transp: false,
          bd: "none",
          mx: "none",
          svgStructure: "unified",
          view: 1,
          ratio: targetRatio,
          artW: d.w,
          artH: d.h,
        }));
        setCat("Calendar");
      }
    },
    [curMode, modes, MP, P.px]
  );

  const switchCalendarWeekStart = useCallback(
    (wsVal: "sun" | "mon" | "sat") => {
      const targetCal =
        curMode.cat === "Calendar"
          ? curMode
          : modes.find((m) => m.id === "cal_ms_1") || modes.find((m) => m.cat === "Calendar");
      if (!targetCal) return;
      setMP((prevMP) => ({
        ...prevMP,
        [targetCal.id]: {
          ...(prevMP[targetCal.id] || {}),
          weekStart: wsVal,
        },
      }));
      if (curMode.cat !== "Calendar") {
        selectMode(targetCal);
        setCat("Calendar");
      }
    },
    [curMode, modes, selectMode]
  );

  const switchCalendarSideArt = useCallback(
    (sideVal: string) => {
      const targetCal =
        curMode.cat === "Calendar"
          ? curMode
          : modes.find((m) => m.id === "cal_ms_1") || modes.find((m) => m.cat === "Calendar");
      if (!targetCal) return;
      setMP((prevMP) => ({
        ...prevMP,
        [targetCal.id]: {
          ...(prevMP[targetCal.id] || {}),
          sideArt: sideVal,
        },
      }));
      if (curMode.cat !== "Calendar") {
        selectMode(targetCal);
        setCat("Calendar");
      }
    },
    [curMode, modes, selectMode]
  );

  // Monotonic counter so EVERY single click on NEW TORN / UNIQUE GENERATE / Torn dropdowns advances to a fresh colour!
  const tornColorSeqRef = useRef<number>(1);

  // Quick 1-Click Procedural Fractal Torn Paper Studio Handlers (96 Modes · Crores of Non-Repeating Designs)
  const selectTornPaperSet = useCallback(
    (tornModeId: string) => {
      const m = modes.find((x) => x.id === tornModeId);
      if (!m) return;
      const defLayout = String(m.params.find((p) => p.k === "layoutType")?.def || "scrap_1pc");
      const defPcs = String(m.params.find((p) => p.k === "pcs")?.def || "1");
      const defSurface = String(m.params.find((p) => p.k === "paperSurface")?.def || "solid_matte");
      const defBgMode = String(m.params.find((p) => p.k === "bgMode")?.def || "checker");
      const defAddon = String(m.params.find((p) => p.k === "addonStyle")?.def || "auto");
      const targetRatio: CanvasRatio =
        defLayout === "canyon_v_rip" ||
        defLayout === "half_divider" ||
        defLayout === "center_strip" ||
        defLayout === "curled_peel_canyon" ||
        (defLayout === "scrap_1pc" && defPcs === "1")
          ? "3:2"
          : "4:3";
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      const freshSeed = nextUniqueSeed();
      const nextVar = tornColorSeqRef.current++;
      setMP((prevMP) => ({
        ...prevMP,
        [m.id]: {
          ...(prevMP[m.id] || {}),
          layoutType: defLayout,
          pcs: defPcs,
          paperSurface: defSurface,
          bgMode: defBgMode,
          addonStyle: defAddon,
          variant: prevMP[m.id]?.variant !== undefined ? nextVar : 0,
        },
      }));
      selectMode(m);
      setP((prev) => ({
        ...prev,
        mode: m.id,
        seed: freshSeed,
        bg: m.look?.bg || "#e2e8f0",
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
        svgStructure: "unified",
        view: 1,
        transp: false,
      }));
      setCat("Torn Paper");
      setRandNote(
        `TORN PAPER STUDIO LOADED · ${m.name.toUpperCase()} · 100% UNIQUE 3-PLY FRACTAL DECKLE TEAR`
      );
    },
    [modes, P.px, selectMode]
  );

  const switchTornPaperParam = useCallback(
    (
      paramKey: "layoutType" | "pcs" | "paperSurface" | "bgMode" | "addonStyle",
      paramVal: string
    ) => {
      const targetTorn =
        curMode.cat === "Torn Paper"
          ? curMode
          : modes.find((m) => m.id === "torn_ms_1") || modes.find((m) => m.cat === "Torn Paper");
      if (!targetTorn) return;
      const curQ = MP[targetTorn.id] || {};
      const nextLayout =
        paramKey === "layoutType"
          ? paramVal
          : String(
              curQ.layoutType ||
                targetTorn.params.find((p) => p.k === "layoutType")?.def ||
                "scrap_1pc"
            );
      const nextPcs =
        paramKey === "pcs"
          ? paramVal
          : paramKey === "layoutType" && paramVal === "horizontal_strips_pack"
          ? "4"
          : paramKey === "layoutType" && paramVal === "taped_memo_board"
          ? "4"
          : String(curQ.pcs || targetTorn.params.find((p) => p.k === "pcs")?.def || "1");
      const nextSurface =
        paramKey === "paperSurface"
          ? paramVal
          : paramKey === "layoutType" && paramVal === "notebook_grid"
          ? "grid_notebook"
          : paramKey === "layoutType" && paramVal === "notebook_lined"
          ? "lined_notebook"
          : paramKey === "layoutType" && paramVal === "kraft_cardboard_rip"
          ? "kraft_fiber"
          : String(
              curQ.paperSurface ||
                targetTorn.params.find((p) => p.k === "paperSurface")?.def ||
                "solid_matte"
            );
      const nextBg =
        paramKey === "bgMode"
          ? paramVal
          : paramKey === "layoutType" &&
            (paramVal === "notebook_grid" ||
              paramVal === "notebook_lined" ||
              paramVal === "taped_memo_board")
          ? "charcoal"
          : String(curQ.bgMode || targetTorn.params.find((p) => p.k === "bgMode")?.def || "checker");
      const nextAddon =
        paramKey === "addonStyle"
          ? paramVal
          : paramKey === "layoutType" && paramVal === "taped_memo_board"
          ? "tape_and_pin"
          : paramKey === "layoutType" && paramVal === "kraft_cardboard_rip"
          ? "scotch_tape"
          : String(
              curQ.addonStyle ||
                targetTorn.params.find((p) => p.k === "addonStyle")?.def ||
                "auto"
            );

      const targetRatio: CanvasRatio =
        nextLayout === "canyon_v_rip" ||
        nextLayout === "half_divider" ||
        nextLayout === "center_strip" ||
        nextLayout === "curled_peel_canyon" ||
        (nextLayout === "scrap_1pc" && nextPcs === "1")
          ? "3:2"
          : "4:3";
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      const freshSeed = nextUniqueSeed();
      const nextVar = tornColorSeqRef.current++;

      setMP((prevMP) => ({
        ...prevMP,
        [targetTorn.id]: {
          ...(prevMP[targetTorn.id] || {}),
          layoutType: nextLayout,
          pcs: nextPcs,
          paperSurface: nextSurface,
          bgMode: nextBg,
          addonStyle: nextAddon,
          variant: nextVar,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetTorn.id,
        seed: freshSeed,
        transp: false,
        bd: "none",
        mx: "none",
        svgStructure: "unified",
        view: 1,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
      }));
      setCat("Torn Paper");
    },
    [curMode, modes, MP, P.px]
  );

  // Quick 1-Click Procedural Ultra-Smooth Transparent Vector Shadow Studio Handlers (72 Modes · Zero Banding · Zero Cracks)
  const selectShadowSet = useCallback(
    (shadowModeId: string) => {
      const m = modes.find((x) => x.id === shadowModeId);
      if (!m) return;
      const defArch = String(m.params.find((p) => p.k === "archType")?.def || "oval_contact");
      const defPcs = String(m.params.find((p) => p.k === "pcs")?.def || "1");
      const defTone = String(m.params.find((p) => p.k === "shadowTone")?.def || "pure_black");
      const defBgMode = String(m.params.find((p) => p.k === "bgMode")?.def || "transparent");
      const targetRatio: CanvasRatio =
        defArch === "linear_fade_overlay" ||
        defArch === "circular_disc_base" ||
        defArch === "diagonal_gobo_soft"
          ? "1:1"
          : "3:2";
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      const freshSeed = nextUniqueSeed();
      const nextVar = tornColorSeqRef.current++;
      setMP((prevMP) => ({
        ...prevMP,
        [m.id]: {
          ...(prevMP[m.id] || {}),
          archType: defArch,
          pcs: defPcs,
          shadowTone: defTone,
          bgMode: defBgMode,
          variant: prevMP[m.id]?.variant !== undefined ? nextVar : 0,
        },
      }));
      selectMode(m);
      setP((prev) => ({
        ...prev,
        mode: m.id,
        seed: freshSeed,
        bg: "#ffffff",
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
        svgStructure: "unified",
        view: 1,
        transp: defBgMode === "transparent",
      }));
      setCat("Shadow");
      setRandNote(
        `ULTRA-SMOOTH TRANSPARENT SHADOW STUDIO LOADED · ${m.name.toUpperCase()} · ZERO BANDING · ZERO CRACKS`
      );
    },
    [modes, P.px, selectMode]
  );

  const switchShadowParam = useCallback(
    (
      paramKey: "archType" | "pcs" | "shadowTone" | "bgMode",
      paramVal: string
    ) => {
      const targetSh =
        curMode.cat === "Shadow"
          ? curMode
          : modes.find((m) => m.id === "shadow_ms_1") || modes.find((m) => m.cat === "Shadow");
      if (!targetSh) return;
      const curQ = MP[targetSh.id] || {};
      const nextArch =
        paramKey === "archType"
          ? paramVal
          : String(
              curQ.archType ||
                targetSh.params.find((p) => p.k === "archType")?.def ||
                "oval_contact"
            );
      const nextPcs =
        paramKey === "pcs"
          ? paramVal
          : paramKey === "archType" && paramVal === "multi_shadow_kit"
          ? "4"
          : String(curQ.pcs || targetSh.params.find((p) => p.k === "pcs")?.def || "1");
      const nextTone =
        paramKey === "shadowTone"
          ? paramVal
          : String(
              curQ.shadowTone ||
                targetSh.params.find((p) => p.k === "shadowTone")?.def ||
                "pure_black"
            );
      const nextBg =
        paramKey === "bgMode"
          ? paramVal
          : String(
              curQ.bgMode ||
                targetSh.params.find((p) => p.k === "bgMode")?.def ||
                "transparent"
            );
      const targetRatio: CanvasRatio =
        nextArch === "linear_fade_overlay" ||
        nextArch === "circular_disc_base" ||
        nextArch === "diagonal_gobo_soft"
          ? "1:1"
          : "3:2";
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      const freshSeed = nextUniqueSeed();
      const nextVar = tornColorSeqRef.current++;

      setMP((prevMP) => ({
        ...prevMP,
        [targetSh.id]: {
          ...(prevMP[targetSh.id] || {}),
          archType: nextArch,
          pcs: nextPcs,
          shadowTone: nextTone,
          bgMode: nextBg,
          variant: nextVar,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetSh.id,
        seed: freshSeed,
        bg: "#ffffff",
        transp: nextBg === "transparent",
        bd: "none",
        mx: "none",
        svgStructure: "unified",
        view: 1,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
      }));
      setCat("Shadow");
    },
    [curMode, modes, MP, P.px]
  );

  // Quick 1-Click Hand-Lettered Calligraphy & Ornate Typography Studio Handlers (60 Commercial Microstock Typography Sets)
  const selectTypographySet = useCallback(
    (typoModeId: string) => {
      const m = modes.find((x) => x.id === typoModeId);
      if (!m) return;
      const prevPcs = curMode.cat === "Typography" ? MP[curMode.id]?.pcs : undefined;
      const prevOccasion = curMode.cat === "Typography" ? MP[curMode.id]?.occasion : undefined;
      const defPcs = String(
        prevPcs || m.params.find((p) => p.k === "pcs")?.def || "1"
      );
      const targetRatio = getMicrostockTypographyRatio(defPcs);
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [m.id]: {
          ...(prevMP[m.id] || {}),
          pcs: defPcs,
          ...(prevOccasion !== undefined ? { occasion: prevOccasion } : {}),
          variant: 0,
        },
      }));
      selectMode(m);
      setP((prev) => ({
        ...prev,
        mode: m.id,
        bg: m.look?.bg || "#ffffff",
        ink: m.look?.ink || "#111111",
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
        svgStructure: "unified",
        view: 1,
        transp: false,
      }));
      setCat("Typography");
      setRandNote(
        `TYPOGRAPHY & CALLIGRAPHY STUDIO LOADED · ${m.name.toUpperCase()} · 100% PURE VECTOR BRUSH OUTLINES`
      );
    },
    [modes, curMode, MP, P.px, selectMode]
  );

  const switchTypographyPcs = useCallback(
    (pcsVal: string) => {
      const targetTypo =
        curMode.cat === "Typography"
          ? curMode
          : modes.find((m) => m.id === "typo_ms_1") || modes.find((m) => m.cat === "Typography");
      if (!targetTypo) return;
      const targetRatio = getMicrostockTypographyRatio(pcsVal);
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [targetTypo.id]: {
          ...(prevMP[targetTypo.id] || {}),
          pcs: pcsVal,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetTypo.id,
        bg: curMode.cat === "Typography" ? prev.bg : targetTypo.look?.bg || "#ffffff",
        ink: curMode.cat === "Typography" ? prev.ink : targetTypo.look?.ink || "#111111",
        transp: false,
        bd: "none",
        mx: "none",
        svgStructure: "unified",
        view: 1,
        ratio: targetRatio,
        artW: d.w,
        artH: d.h,
      }));
      setCat("Typography");
    },
    [curMode, modes, P.px]
  );

  const switchTypographyOccasion = useCallback(
    (occasionVal: string) => {
      const targetTypo =
        curMode.cat === "Typography"
          ? curMode
          : modes.find((m) => m.id === "typo_ms_1") || modes.find((m) => m.cat === "Typography");
      if (!targetTypo) return;
      const curPcs = String(
        MP[targetTypo.id]?.pcs ||
          targetTypo.params.find((p) => p.k === "pcs")?.def ||
          "1"
      );
      const targetRatio = getMicrostockTypographyRatio(curPcs);
      const d = getRatioDims(Math.max(5200, +P.px || 5200), targetRatio);
      setMP((prevMP) => ({
        ...prevMP,
        [targetTypo.id]: {
          ...(prevMP[targetTypo.id] || {}),
          occasion: occasionVal,
          pcs: curPcs,
          phraseIdx: 0,
        },
      }));
      if (curMode.cat !== "Typography") {
        setP((prev) => ({
          ...prev,
          mode: targetTypo.id,
          bg: targetTypo.look?.bg || "#ffffff",
          ink: targetTypo.look?.ink || "#111111",
          transp: false,
          bd: "none",
          mx: "none",
          svgStructure: "unified",
          view: 1,
          ratio: targetRatio,
          artW: d.w,
          artH: d.h,
        }));
        setCat("Typography");
      }
    },
    [curMode, modes, MP, P.px]
  );

  const switchTypographyFlourishStyle = useCallback(
    (flourishVal: string) => {
      const targetTypo =
        curMode.cat === "Typography"
          ? curMode
          : modes.find((m) => m.id === "typo_ms_1") || modes.find((m) => m.cat === "Typography");
      if (!targetTypo) return;
      setMP((prevMP) => ({
        ...prevMP,
        [targetTypo.id]: {
          ...(prevMP[targetTypo.id] || {}),
          flourishStyle: flourishVal,
        },
      }));
      if (curMode.cat !== "Typography") {
        selectMode(targetTypo);
        setCat("Typography");
      }
    },
    [curMode, modes, selectMode]
  );

  const switchTypographyFontStyle = useCallback(
    (fontVal: string) => {
      const targetTypo =
        curMode.cat === "Typography"
          ? curMode
          : modes.find((m) => m.id === "typo_ms_1") || modes.find((m) => m.cat === "Typography");
      if (!targetTypo) return;
      setMP((prevMP) => ({
        ...prevMP,
        [targetTypo.id]: {
          ...(prevMP[targetTypo.id] || {}),
          fontStyle: fontVal,
        },
      }));
      if (curMode.cat !== "Typography") {
        selectMode(targetTypo);
        setCat("Typography");
      }
    },
    [curMode, modes, selectMode]
  );

  const switchTypographyColorSet = useCallback(
    (colorSetVal: string) => {
      const targetTypo =
        curMode.cat === "Typography"
          ? curMode
          : modes.find((m) => m.id === "typo_ms_1") || modes.find((m) => m.cat === "Typography");
      if (!targetTypo) return;
      const darkThemes = new Set(["white_black", "gold_black", "neon_cyber"]);
      const nextBg =
        colorSetVal === "white_black" || colorSetVal === "gold_black"
          ? "#09090b"
          : colorSetVal === "neon_cyber"
          ? "#070913"
          : colorSetVal === "vintage_sepia"
          ? "#f5efe6"
          : colorSetVal === "emerald_cream"
          ? "#f8faf5"
          : "#ffffff";
      const nextInk = darkThemes.has(colorSetVal) ? "#ffffff" : "#111111";
      setMP((prevMP) => ({
        ...prevMP,
        [targetTypo.id]: {
          ...(prevMP[targetTypo.id] || {}),
          colorSet: colorSetVal,
        },
      }));
      setP((prev) => ({
        ...prev,
        mode: targetTypo.id,
        bg: nextBg,
        ink: nextInk,
        transp: false,
      }));
      if (curMode.cat !== "Typography") {
        setCat("Typography");
      }
    },
    [curMode, modes]
  );

  // Apply palette
  const applyPal = useCallback((idx: number) => {
    const p = PALS[idx];
    if (!p) return;
    setPalIdx(idx);
    setPalLabel(p[0].toUpperCase());
    setPalOpen(false);
    setP((prev) => ({
      ...prev,
      bg: p[1],
      bg2: mixCol(p[1], p[3][0], 0.36),
      ink: p[2],
      c0: p[3][0],
      c1: p[3][1],
      c2: p[3][2],
      c3: p[3][3],
      c4: p[3][4],
    }));
  }, []);

  // Undo / Redo
  const undo = useCallback(() => {
    if (hIdx <= 0) return;
    const nextIdx = hIdx - 1;
    const snap = JSON.parse(hist[nextIdx]);
    lockHist.current = true;
    setHIdx(nextIdx);
    setP(snap.P);
    if (snap.modeId && snap.modeQ) {
      setMP((prev) => ({ ...prev, [snap.modeId]: snap.modeQ }));
    } else if (snap.MP) {
      setMP(snap.MP);
    }
  }, [hIdx, hist]);

  const redo = useCallback(() => {
    if (hIdx >= hist.length - 1) return;
    const nextIdx = hIdx + 1;
    const snap = JSON.parse(hist[nextIdx]);
    lockHist.current = true;
    setHIdx(nextIdx);
    setP(snap.P);
    if (snap.modeId && snap.modeQ) {
      setMP((prev) => ({ ...prev, [snap.modeId]: snap.modeQ }));
    } else if (snap.MP) {
      setMP(snap.MP);
    }
  }, [hIdx, hist]);

  // Generate 100% unique candidate instantaneously & IMMEDIATELY BURN IT into the permanent localStorage ledger (Hard 1-Time Rule: tested once = NEVER generated again!)
  const generateUniqueCandidateForMode = useCallback(
    (
      targetMode: PatternMode,
      baseP: PatternState,
      baseMP: Record<string, Record<string, any>>,
      withColours: boolean,
      bgPref: "current" | "mix" | "gradient" | "texture" = "current",
      extremeDiverse = false,
      batchIdx = -1,
      batchUsedSigs?: Set<string>
    ) => {
      const curQ = baseMP[targetMode.id] || {};
      const seenSession = sessionSeenRef.current;
        const isBrush = targetMode.cat === "Brush";
        const isPoster = targetMode.cat === "Poster";
        const isLighting = targetMode.cat === "Lighting";
        const isCalendar = targetMode.cat === "Calendar";
        const isTypography = targetMode.cat === "Typography";
        const isTornPaper = targetMode.cat === "Torn Paper";
        const isShadow = targetMode.cat === "Shadow";
        const isFullBgCat =
          targetMode.cat === "Plain BG" ||
          targetMode.cat === "Background" ||
          targetMode.cat === "Gradient" ||
          targetMode.cat === "Texture";
        const maxAttempts = extremeDiverse ? 64 : 48;

        const buildCandidateAt = (attempt: number) => {
          const stepIdx = batchIdx >= 0 ? batchIdx + attempt * 13 : attempt * 7;
          const cand = genCand(targetMode, curQ, baseP, withColours, extremeDiverse, stepIdx);
          const structSalt = nextUniqueStructuralSalt();
          if (isPoster || isLighting || isCalendar || isTypography) {
            cand.q = {
              ...cand.q,
              variant: ((Math.round(+(curQ.variant ?? 0)) + structSalt + stepIdx) % 48) + 1,
            };
          } else if (isTornPaper || isShadow) {
            cand.q = {
              ...cand.q,
              variant: Math.max(1, Math.round(+(curQ.variant ?? 0)) + 1 + attempt),
            };
          }
          let bgGrad: BgGradientMode =
            isBrush || isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow
              ? "solid"
              : baseP.bgGrad || "solid";
          let bd: SurfaceTextureMode =
            isBrush || isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow
              ? "none"
              : baseP.bd || "none";

          if (!isBrush && !isPoster && !isLighting && !isCalendar && !isTypography && !isTornPaper && !isShadow) {
            if (bgPref === "gradient") {
              bgGrad = cand.gradModes[(stepIdx + Math.floor(Math.random() * cand.gradModes.length)) % cand.gradModes.length];
              bd = "none";
            } else if (bgPref === "texture") {
              bgGrad = "solid";
              bd = cand.texModes[(stepIdx + Math.floor(Math.random() * cand.texModes.length)) % cand.texModes.length];
            } else if (bgPref === "mix") {
              const slot = extremeDiverse ? stepIdx % 10 : Math.floor(Math.random() * 10);
              if (slot < 4) {
                bgGrad = cand.gradModes[(stepIdx + attempt) % cand.gradModes.length];
                bd = "none";
              } else if (slot < 7) {
                bgGrad = "solid";
                bd = cand.texModes[(stepIdx + attempt) % cand.texModes.length];
              } else {
                bgGrad = "solid";
                bd = "none";
              }
            }
          }

          const posterPcsVal = isPoster
            ? String(cand.q.pcs || curQ.pcs || targetMode.params.find((p) => p.k === "pcs")?.def || "4")
            : "";
          const calViewVal = isCalendar
            ? String(cand.q.viewMode || curQ.viewMode || targetMode.params.find((p) => p.k === "viewMode")?.def || "12m")
            : "";
          const typoPcsVal = isTypography
            ? String(cand.q.pcs || curQ.pcs || targetMode.params.find((p) => p.k === "pcs")?.def || "1")
            : "";
          const posterRatio = isPoster
            ? getMicrostockPosterRatio(posterPcsVal)
            : isCalendar
            ? getMicrostockCalendarRatio(calViewVal)
            : isTypography
            ? getMicrostockTypographyRatio(typoPcsVal)
            : baseP.ratio;
          const posterDims =
            isPoster || isCalendar || isTypography
              ? getRatioDims(Math.max(5200, +baseP.px || 5200), posterRatio)
              : null;

          const testP: PatternState = {
            ...baseP,
            mode: targetMode.id,
            mx:
              isBrush || isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow || isFullBgCat
                ? "none"
                : cand.mx,
            seed: cand.seed,
            bg: isPoster
              ? baseP.bg || "#000000"
              : isCalendar
              ? baseP.bg || cand.bg
              : isTypography || isShadow
              ? baseP.bg || targetMode.look?.bg || "#ffffff"
              : cand.bg,
            bg2: isPoster ? baseP.bg || "#000000" : cand.bg2,
            bgGrad,
            bgAngle: cand.bgAngle,
            ink: isTypography ? baseP.ink || targetMode.look?.ink || "#111111" : cand.ink,
            c0: cand.cols[0],
            c1: cand.cols[1],
            c2: cand.cols[2],
            c3: cand.cols[3],
            c4: cand.cols[4],
            ncol: cand.ncol,
            style: cand.style,
            sw: cand.sw,
            bd,
            bdc: cand.bdc,
            bdn: cand.bdn,
            bdo: cand.bdo,
            transp:
              isBrush || isLighting || isShadow
                ? true
                : isPoster || isCalendar || isTypography || isTornPaper || isFullBgCat
                ? false
                : baseP.transp,
            svgStructure:
              isBrush || isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow || isFullBgCat
                ? "unified"
                : baseP.svgStructure,
            view:
              isBrush || isPoster || isLighting || isCalendar || isTypography || isTornPaper || isShadow || isFullBgCat
                ? 1
                : baseP.view,
            ratio: isPoster || isCalendar || isTypography ? posterRatio : baseP.ratio,
            artW: (isPoster || isCalendar || isTypography) && posterDims ? posterDims.w : baseP.artW,
            artH: (isPoster || isCalendar || isTypography) && posterDims ? posterDims.h : baseP.artH,
            safeEdge: baseP.safeEdge === true,
          };
          const designHash = computeDesignHash(testP, cand.q);
          const structHash = computeStructuralSimilarityHash(testP, cand.q);
          // Coarse per-batch anti-similarity signature (mode + dominant palette bucket + style + mx + variant + bg)
          const coarseSig = `${targetMode.id}|${testP.bg.slice(0, 4)}|${testP.c0.slice(0, 4)}|${testP.style}|${testP.mx}|${testP.bgGrad}|${testP.bd}|${cand.q.variant ?? ""}|${cand.q.arch ?? ""}|${cand.q.viewMode ?? ""}|${cand.q.year ?? ""}|${cand.q.occasion ?? ""}|${cand.q.flourishStyle ?? ""}|${cand.q.phraseIdx ?? ""}`;
          return { cand, testP, designHash, structHash, coarseSig };
        };

      let lastBuilt: ReturnType<typeof buildCandidateAt> | null = null;
      for (let a = 0; a < maxAttempts; a++) {
        const built = buildCandidateAt(a);
        lastBuilt = built;
        if (
          isDesignDuplicate(built.designHash, built.structHash) ||
          seenSession.has(built.designHash) ||
          seenSession.has(built.structHash) ||
          (batchUsedSigs && batchUsedSigs.has(built.coarseSig))
        ) {
          continue; // HARD BLOCK: Never allow any previously tested, previewed, or structurally similar design
        }

        seenSession.add(built.designHash);
        seenSession.add(built.structHash);
        if (batchUsedSigs) batchUsedSigs.add(built.coarseSig);
        if (seenSession.size > 12000) {
          const first = seenSession.values().next().value;
          if (first) seenSession.delete(first);
        }
        // HARD 1-TIME PERMANENT BURN: Lock immediately in localStorage even on a single test preview!
        const total = registerDesignHash(built.designHash, built.structHash);
        setUniqCount(total);
        const testMP = { ...baseMP, [targetMode.id]: built.cand.q };
        return {
          cand: built.cand,
          testP: built.testP,
          testMP,
          designHash: built.designHash,
          structHash: built.structHash,
          total,
        };
      }

      // Guaranteed non-skip fallback in extreme batch mode when a tiny 1-mode pool hits tight structural saturation
      if (extremeDiverse && lastBuilt) {
        seenSession.add(lastBuilt.designHash);
        seenSession.add(lastBuilt.structHash);
        if (batchUsedSigs) batchUsedSigs.add(lastBuilt.coarseSig);
        const total = registerDesignHash(lastBuilt.designHash, lastBuilt.structHash);
        setUniqCount(total);
        const testMP = { ...baseMP, [targetMode.id]: lastBuilt.cand.q };
        return {
          cand: lastBuilt.cand,
          testP: lastBuilt.testP,
          testMP,
          designHash: lastBuilt.designHash,
          structHash: lastBuilt.structHash,
          total,
        };
      }
      return null;
    },
    []
  );

  // Non-repeating interleaved brush, poster, lighting & calendar decks so every click on UNIQUE GENERATE produces a brand-new structural design
  const brushDeckRef = useRef<string[]>([]);
  const posterDeckRef = useRef<string[]>([]);
  const lightingDeckRef = useRef<string[]>([]);
  const calendarDeckRef = useRef<string[]>([]);
  const typographyDeckRef = useRef<string[]>([]);

  // Instant Hard-Locked Procedural Randomize (Every single test preview is permanently burned in localStorage so it NEVER generates again!)
  const smartRandom = useCallback(
    (
      withColours: boolean,
      bgPref: "current" | "mix" | "gradient" | "texture" = "current",
      keepCurrentMode = false
    ) => {
      let targetMode = curMode;
      if (!keepCurrentMode && (curMode.cat === "Brush" || cat === "Brush")) {
        const allBrushes = modes.filter((m) => m.cat === "Brush");
        if (allBrushes.length > 1) {
          if (brushDeckRef.current.length === 0) {
            const ids = allBrushes.map((m) => m.id);
            const interleaved: string[] = [];
            const step = 7;
            const visited = new Set<string>();
            let cursor = Math.floor(Math.random() * ids.length);
            for (let i = 0; i < ids.length; i++) {
              while (visited.has(ids[cursor])) {
                cursor = (cursor + 1) % ids.length;
              }
              interleaved.push(ids[cursor]);
              visited.add(ids[cursor]);
              cursor = (cursor + step) % ids.length;
            }
            if (interleaved[0] === curMode.id && interleaved.length > 1) {
              interleaved.push(interleaved.shift()!);
            }
            brushDeckRef.current = interleaved;
          }
          let nextBrushId = brushDeckRef.current.shift()!;
          if (nextBrushId === curMode.id && brushDeckRef.current.length > 0) {
            const altId = brushDeckRef.current.shift()!;
            brushDeckRef.current.push(nextBrushId);
            nextBrushId = altId;
          }
          const found = allBrushes.find((m) => m.id === nextBrushId);
          if (found) targetMode = found;
        }
      } else if (!keepCurrentMode && (curMode.cat === "Lighting" || cat === "Lighting")) {
        const allLights = modes.filter((m) => m.cat === "Lighting");
        if (allLights.length > 1) {
          if (lightingDeckRef.current.length === 0) {
            const ids = allLights.map((m) => m.id);
            const interleaved: string[] = [];
            const step = 11;
            const visited = new Set<string>();
            let cursor = Math.floor(Math.random() * ids.length);
            for (let i = 0; i < ids.length; i++) {
              while (visited.has(ids[cursor])) {
                cursor = (cursor + 1) % ids.length;
              }
              interleaved.push(ids[cursor]);
              visited.add(ids[cursor]);
              cursor = (cursor + step) % ids.length;
            }
            if (interleaved[0] === curMode.id && interleaved.length > 1) {
              interleaved.push(interleaved.shift()!);
            }
            lightingDeckRef.current = interleaved;
          }
          let nextLightId = lightingDeckRef.current.shift()!;
          if (nextLightId === curMode.id && lightingDeckRef.current.length > 0) {
            const altId = lightingDeckRef.current.shift()!;
            lightingDeckRef.current.push(nextLightId);
            nextLightId = altId;
          }
          const found = allLights.find((m) => m.id === nextLightId);
          if (found) targetMode = found;
        }
      } else if (!keepCurrentMode && (curMode.cat === "Calendar" || cat === "Calendar")) {
        const allCals = modes.filter((m) => m.cat === "Calendar");
        if (allCals.length > 1) {
          if (calendarDeckRef.current.length === 0) {
            const ids = allCals.map((m) => m.id);
            const interleaved: string[] = [];
            const step = 7;
            const visited = new Set<string>();
            let cursor = Math.floor(Math.random() * ids.length);
            for (let i = 0; i < ids.length; i++) {
              while (visited.has(ids[cursor])) {
                cursor = (cursor + 1) % ids.length;
              }
              interleaved.push(ids[cursor]);
              visited.add(ids[cursor]);
              cursor = (cursor + step) % ids.length;
            }
            if (interleaved[0] === curMode.id && interleaved.length > 1) {
              interleaved.push(interleaved.shift()!);
            }
            calendarDeckRef.current = interleaved;
          }
          let nextCalId = calendarDeckRef.current.shift()!;
          if (nextCalId === curMode.id && calendarDeckRef.current.length > 0) {
            const altId = calendarDeckRef.current.shift()!;
            calendarDeckRef.current.push(nextCalId);
            nextCalId = altId;
          }
          const found = allCals.find((m) => m.id === nextCalId);
          if (found) targetMode = found;
        }
      } else if (!keepCurrentMode && (curMode.cat === "Typography" || cat === "Typography")) {
        const allTypos = modes.filter((m) => m.cat === "Typography");
        if (allTypos.length > 1) {
          if (typographyDeckRef.current.length === 0) {
            const ids = allTypos.map((m) => m.id);
            const interleaved: string[] = [];
            const step = 7;
            const visited = new Set<string>();
            let cursor = Math.floor(Math.random() * ids.length);
            for (let i = 0; i < ids.length; i++) {
              while (visited.has(ids[cursor])) {
                cursor = (cursor + 1) % ids.length;
              }
              interleaved.push(ids[cursor]);
              visited.add(ids[cursor]);
              cursor = (cursor + step) % ids.length;
            }
            if (interleaved[0] === curMode.id && interleaved.length > 1) {
              interleaved.push(interleaved.shift()!);
            }
            typographyDeckRef.current = interleaved;
          }
          let nextTypoId = typographyDeckRef.current.shift()!;
          if (nextTypoId === curMode.id && typographyDeckRef.current.length > 0) {
            const altId = typographyDeckRef.current.shift()!;
            typographyDeckRef.current.push(nextTypoId);
            nextTypoId = altId;
          }
          const found = allTypos.find((m) => m.id === nextTypoId);
          if (found) targetMode = found;
        }
      }
      const prevPosterPcs =
        curMode.cat === "Poster"
          ? MP[curMode.id]?.pcs
          : targetMode.cat === "Poster"
          ? MP[targetMode.id]?.pcs
          : undefined;
      const prevPosterShowText =
        curMode.cat === "Poster"
          ? MP[curMode.id]?.showText
          : targetMode.cat === "Poster"
          ? MP[targetMode.id]?.showText
          : undefined;
      const prevPosterVar =
        targetMode.cat === "Poster" ? Math.round(+(MP[targetMode.id]?.variant ?? 0)) : 0;
      const prevLightBgMode =
        curMode.cat === "Lighting"
          ? MP[curMode.id]?.bgMode
          : targetMode.cat === "Lighting"
          ? MP[targetMode.id]?.bgMode
          : undefined;
      const prevLightPcs =
        curMode.cat === "Lighting"
          ? MP[curMode.id]?.pcs
          : targetMode.cat === "Lighting"
          ? MP[targetMode.id]?.pcs
          : undefined;
      const prevLightVar =
        targetMode.cat === "Lighting" ? Math.round(+(MP[targetMode.id]?.variant ?? 0)) : 0;
      const prevCalYear =
        curMode.cat === "Calendar"
          ? MP[curMode.id]?.year
          : targetMode.cat === "Calendar"
          ? MP[targetMode.id]?.year
          : undefined;
      const prevCalViewMode =
        curMode.cat === "Calendar"
          ? MP[curMode.id]?.viewMode
          : targetMode.cat === "Calendar"
          ? MP[targetMode.id]?.viewMode
          : undefined;
      const prevCalMonth =
        curMode.cat === "Calendar"
          ? MP[curMode.id]?.month
          : targetMode.cat === "Calendar"
          ? MP[targetMode.id]?.month
          : undefined;
      const prevCalWeekStart =
        curMode.cat === "Calendar"
          ? MP[curMode.id]?.weekStart
          : targetMode.cat === "Calendar"
          ? MP[targetMode.id]?.weekStart
          : undefined;
      const prevCalVar =
        targetMode.cat === "Calendar" ? Math.round(+(MP[targetMode.id]?.variant ?? 0)) : 0;
      const prevTypoPcs =
        curMode.cat === "Typography"
          ? MP[curMode.id]?.pcs
          : targetMode.cat === "Typography"
          ? MP[targetMode.id]?.pcs
          : undefined;
      const prevTypoOccasion =
        curMode.cat === "Typography"
          ? MP[curMode.id]?.occasion
          : targetMode.cat === "Typography"
          ? MP[targetMode.id]?.occasion
          : undefined;
      const prevTypoVar =
        targetMode.cat === "Typography" ? Math.round(+(MP[targetMode.id]?.variant ?? 0)) : 0;

      const res = generateUniqueCandidateForMode(targetMode, P, MP, withColours, bgPref);
      if (res) {
        if (targetMode.cat === "Brush") {
          const defArch = targetMode.params.find((p) => p.k === "arch")?.def;
          if (defArch) {
            res.testMP[targetMode.id] = {
              ...res.testMP[targetMode.id],
              arch: defArch,
            };
          }
        } else if (targetMode.cat === "Poster") {
          const targetDefPcs = String(targetMode.params.find((p) => p.k === "pcs")?.def || "4");
          const nextVar = ((prevPosterVar + 1) % 240) + 1;
          const effPcsPoster =
            prevPosterPcs !== undefined ? String(prevPosterPcs) : targetDefPcs;
          const prevColorSet = MP[targetMode.id]?.colorSet;
          const posterRatio: CanvasRatio = getMicrostockPosterRatio(effPcsPoster);
          const posterDims = getRatioDims(Math.max(5200, +res.testP.px || 5200), posterRatio);
          res.testMP[targetMode.id] = {
            ...res.testMP[targetMode.id],
            variant: nextVar,
            pcs: effPcsPoster,
            ...(prevColorSet !== undefined ? { colorSet: prevColorSet } : {}),
            ...(prevPosterShowText !== undefined ? { showText: prevPosterShowText } : {}),
          };
          res.testP.bg = "#000000";
          res.testP.transp = false;
          res.testP.ratio = posterRatio;
          res.testP.artW = posterDims.w;
          res.testP.artH = posterDims.h;
          // Burn the final poster configuration hash too
          const finalH = computeDesignHash(res.testP, res.testMP[targetMode.id]);
          const finalSt = computeStructuralSimilarityHash(res.testP, res.testMP[targetMode.id]);
          setUniqCount(registerDesignHash(finalH, finalSt));
        } else if (targetMode.cat === "Calendar") {
          const salt = nextUniqueStructuralSalt();
          const nextVar = ((prevCalVar + 1 + salt) % 240) + 1;
          const effYear = String(
            prevCalYear || targetMode.params.find((p) => p.k === "year")?.def || "2026"
          );
          const effViewMode = String(
            prevCalViewMode || targetMode.params.find((p) => p.k === "viewMode")?.def || "12m"
          );
          const effMonth = String(
            prevCalMonth || targetMode.params.find((p) => p.k === "month")?.def || "1"
          );
          const effWeekStart = String(
            prevCalWeekStart || targetMode.params.find((p) => p.k === "weekStart")?.def || "sun"
          );
          const calThemes = [
            "ref",
            "swiss",
            "gold",
            "ocean",
            "emerald",
            "terracotta",
            "pastel",
            "cyber",
            "royal",
            "mono",
          ];
          const nextColorSet =
            calThemes[(nextVar + salt + (res.cand.seed % 97)) % calThemes.length];
          const calRatio: CanvasRatio = getMicrostockCalendarRatio(effViewMode);
          const calDims = getRatioDims(Math.max(5200, +res.testP.px || 5200), calRatio);
          res.testMP[targetMode.id] = {
            ...res.testMP[targetMode.id],
            variant: nextVar,
            year: effYear,
            viewMode: effViewMode,
            month: effMonth,
            weekStart: effWeekStart,
            colorSet: nextColorSet,
          };
          res.testP.bg = targetMode.look?.bg || P.bg || "#000000";
          res.testP.transp = false;
          res.testP.ratio = calRatio;
          res.testP.artW = calDims.w;
          res.testP.artH = calDims.h;
          const finalH = computeDesignHash(res.testP, res.testMP[targetMode.id]);
          const finalSt = computeStructuralSimilarityHash(res.testP, res.testMP[targetMode.id]);
          setUniqCount(registerDesignHash(finalH, finalSt));
        } else if (targetMode.cat === "Typography") {
          const salt = nextUniqueStructuralSalt();
          const nextVar = ((prevTypoVar + 1 + salt) % 240) + 1;
          const effPcs = String(
            prevTypoPcs || targetMode.params.find((p) => p.k === "pcs")?.def || "1"
          );
          const effOccasion = String(
            keepCurrentMode && prevTypoOccasion
              ? prevTypoOccasion
              : targetMode.params.find((p) => p.k === "occasion")?.def || "birthday"
          );
          const typoRatio: CanvasRatio = getMicrostockTypographyRatio(effPcs);
          const typoDims = getRatioDims(Math.max(5200, +res.testP.px || 5200), typoRatio);
          res.testMP[targetMode.id] = {
            ...res.testMP[targetMode.id],
            variant: nextVar,
            pcs: effPcs,
            occasion: effOccasion,
            phraseIdx: (nextVar + salt) % 12,
          };
          res.testP.bg = targetMode.look?.bg || "#ffffff";
          res.testP.ink = targetMode.look?.ink || "#111111";
          res.testP.transp = false;
          res.testP.ratio = typoRatio;
          res.testP.artW = typoDims.w;
          res.testP.artH = typoDims.h;
          const finalH = computeDesignHash(res.testP, res.testMP[targetMode.id]);
          const finalSt = computeStructuralSimilarityHash(res.testP, res.testMP[targetMode.id]);
          setUniqCount(registerDesignHash(finalH, finalSt));
        } else if (targetMode.cat === "Lighting") {
          const salt = nextUniqueStructuralSalt();
          const nextVar = ((prevLightVar + salt) % 240) + 1;
          const effBgMode = String(
            prevLightBgMode ||
              targetMode.params.find((p) => p.k === "bgMode")?.def ||
              "split"
          );
          const targetDefPcs = String(
            targetMode.params.find((p) => p.k === "pcs")?.def || "1"
          );
          const effPcs =
            keepCurrentMode && prevLightPcs !== undefined
              ? String(prevLightPcs)
              : targetDefPcs;
          const lightRatio: CanvasRatio =
            effBgMode === "split" ||
            effPcs === "8" ||
            effPcs === "4" ||
            effPcs === "6" ||
            effPcs === "12"
              ? "2:1"
              : "1:1";
          const lightDims = getRatioDims(Math.max(5200, +res.testP.px || 5200), lightRatio);
          const lightThemes = [
            "gold",
            "diamond",
            "cyan",
            "sunset",
            "emerald",
            "violet",
            "ruby",
            "rose",
            "ice",
            "rainbow",
          ];
          const nextColorSet =
            lightThemes[(nextVar + salt + (res.cand.seed % 97)) % lightThemes.length];
          res.testMP[targetMode.id] = {
            ...res.testMP[targetMode.id],
            variant: nextVar,
            bgMode: effBgMode,
            pcs: effPcs,
            colorSet: nextColorSet,
          };
          res.testP.bg = "#000000";
          res.testP.transp = effBgMode !== "black";
          res.testP.ratio = lightRatio;
          res.testP.artW = lightDims.w;
          res.testP.artH = lightDims.h;
          const finalH = computeDesignHash(res.testP, res.testMP[targetMode.id]);
          const finalSt = computeStructuralSimilarityHash(res.testP, res.testMP[targetMode.id]);
          setUniqCount(registerDesignHash(finalH, finalSt));
        } else if (targetMode.cat === "Torn Paper") {
          const nextVar = tornColorSeqRef.current++;
          const curQ = MP[targetMode.id] || {};
          const effLayout = String(
            curQ.layoutType || targetMode.params.find((p) => p.k === "layoutType")?.def || "scrap_1pc"
          );
          const effPcs = String(
            curQ.pcs || targetMode.params.find((p) => p.k === "pcs")?.def || "1"
          );
          const effSurf = String(
            curQ.paperSurface || targetMode.params.find((p) => p.k === "paperSurface")?.def || "solid_matte"
          );
          const effBgMode = String(
            curQ.bgMode || targetMode.params.find((p) => p.k === "bgMode")?.def || "checker"
          );
          const effAddon = String(
            curQ.addonStyle || targetMode.params.find((p) => p.k === "addonStyle")?.def || "auto"
          );
          const tornRatio: CanvasRatio =
            effLayout === "canyon_v_rip" ||
            effLayout === "half_divider" ||
            effLayout === "center_strip" ||
            effLayout === "curled_peel_canyon" ||
            (effLayout === "scrap_1pc" && effPcs === "1")
              ? "3:2"
              : "4:3";
          const tornDims = getRatioDims(Math.max(5200, +res.testP.px || 5200), tornRatio);
          res.testMP[targetMode.id] = {
            ...res.testMP[targetMode.id],
            variant: nextVar,
            layoutType: effLayout,
            pcs: effPcs,
            paperSurface: effSurf,
            bgMode: effBgMode,
            addonStyle: effAddon,
          };
          res.testP.transp = false;
          res.testP.ratio = tornRatio;
          res.testP.artW = tornDims.w;
          res.testP.artH = tornDims.h;
          const finalH = computeDesignHash(res.testP, res.testMP[targetMode.id]);
          const finalSt = computeStructuralSimilarityHash(res.testP, res.testMP[targetMode.id]);
          setUniqCount(registerDesignHash(finalH, finalSt));
        } else if (targetMode.cat === "Shadow") {
          const nextVar = tornColorSeqRef.current++;
          const curQ = MP[targetMode.id] || {};
          const effArch = String(
            curQ.archType || targetMode.params.find((p) => p.k === "archType")?.def || "oval_contact"
          );
          const effPcs = String(
            curQ.pcs || targetMode.params.find((p) => p.k === "pcs")?.def || "1"
          );
          const effTone = String(
            curQ.shadowTone || targetMode.params.find((p) => p.k === "shadowTone")?.def || "pure_black"
          );
          const effBgMode = String(
            curQ.bgMode || targetMode.params.find((p) => p.k === "bgMode")?.def || "transparent"
          );
          const shRatio: CanvasRatio =
            effArch === "linear_fade_overlay" ||
            effArch === "circular_disc_base" ||
            effArch === "diagonal_gobo_soft"
              ? "1:1"
              : "3:2";
          const shDims = getRatioDims(Math.max(5200, +res.testP.px || 5200), shRatio);
          res.testMP[targetMode.id] = {
            ...res.testMP[targetMode.id],
            variant: nextVar,
            archType: effArch,
            pcs: effPcs,
            shadowTone: effTone,
            bgMode: effBgMode,
          };
          res.testP.bg = "#ffffff";
          res.testP.transp = effBgMode === "transparent";
          res.testP.ratio = shRatio;
          res.testP.artW = shDims.w;
          res.testP.artH = shDims.h;
          const finalH = computeDesignHash(res.testP, res.testMP[targetMode.id]);
          const finalSt = computeStructuralSimilarityHash(res.testP, res.testMP[targetMode.id]);
          setUniqCount(registerDesignHash(finalH, finalSt));
        } else {
          const patDims = getRatioDims(
            Math.max(5200, +res.testP.px || 5200),
            res.testP.ratio || "1:1",
            res.testP.artW,
            res.testP.artH
          );
          res.testP.artW = patDims.w;
          res.testP.artH = patDims.h;
        }
        setP(res.testP);
        setMP(res.testMP);
        setClicks((c) => c + 1);
        setRandNote(
          `🔒 1-TIME HARD BURNED #${res.total} · ${targetMode.name.toUpperCase()} · SEED ${res.cand.seed} (NEVER GENERATES AGAIN)`
        );
      }
    },
    [curMode, cat, modes, P, MP, generateUniqueCandidateForMode]
  );

  // Export dimensions based on P.artW / P.artH or P.px and P.ratio
  const expRep = useCallback(() => {
    if (
      P.svgStructure === "unified" ||
      curMode.cat === "Plain BG" ||
      curMode.cat === "Background" ||
      curMode.cat === "Gradient" ||
      curMode.cat === "Texture" ||
      curMode.cat === "Brush" ||
      curMode.cat === "Poster" ||
      curMode.cat === "Calendar" ||
      curMode.cat === "Typography" ||
      curMode.cat === "Torn Paper" ||
      curMode.cat === "Shadow" ||
      curMode.cat === "Lighting"
    )
      return 1;
    return P.exRep === "auto" ? (P.view > 0 ? P.view : 3) : +P.exRep || 1;
  }, [P.exRep, P.view, P.svgStructure, curMode.cat]);

  const outDims = useMemo(() => {
    return getRatioDims(Math.max(1000, +P.px || 5000), P.ratio || "1:1", P.artW, P.artH);
  }, [P.px, P.ratio, P.artW, P.artH]);

  const downloadBlob = (blob: Blob, name: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (a.parentNode) a.parentNode.removeChild(a);
    }, 1000);
    // Keep Blob URL alive long enough for large 50X batch ZIPs (250MB–500MB) to finish saving in Firefox/Chrome
    const revokeMs = blob.size > 5 * 1024 * 1024 ? 300000 : 60000;
    setTimeout(() => URL.revokeObjectURL(url), revokeMs);
  };

  // Shared Offscreen Canvas Pool so batching 200+ 30MP designs NEVER exhausts GPU/RAM (reuses 1 tile canvas & 1 master canvas instead of leaking 400 x 144MB = 57GB!)
  const sharedTileCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const sharedMasterCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const releaseSharedExportCanvases = useCallback(() => {
    if (sharedTileCanvasRef.current) {
      sharedTileCanvasRef.current.width = 1;
      sharedTileCanvasRef.current.height = 1;
    }
    if (sharedMasterCanvasRef.current) {
      sharedMasterCanvasRef.current.width = 1;
      sharedMasterCanvasRef.current.height = 1;
    }
  }, []);

  // Render high-res 5 MB – 10 MB JPG or PNG Blob for any given stateP & stateMP
  const renderHighResRasterBlob = useCallback(
    async (
      stateP: PatternState,
      stateMP: Record<string, Record<string, any>>,
      fmt: "jpeg" | "png",
      isBatchMode = false
    ): Promise<{ blob: Blob; w: number; h: number }> => {
      const mObj = modes.find((x) => x.id === stateP.mode) || modes[0];
      const lightBgMode =
        mObj.cat === "Lighting"
          ? String(
              stateMP[mObj.id]?.bgMode ||
                mObj.params.find((p) => p.k === "bgMode")?.def ||
                "split"
            )
          : "";
      const shadowBgMode =
        mObj.cat === "Shadow"
          ? String(
              stateMP[mObj.id]?.bgMode ||
                mObj.params.find((p) => p.k === "bgMode")?.def ||
                "transparent"
            )
          : "";
      const isBrushOrTransp =
        mObj.cat === "Poster" ||
        mObj.cat === "Calendar" ||
        mObj.cat === "Typography" ||
        mObj.cat === "Torn Paper"
          ? false
          : mObj.cat === "Shadow"
          ? shadowBgMode === "transparent"
          : mObj.cat === "Lighting"
          ? lightBgMode !== "black"
          : Boolean(stateP.transp || mObj.cat === "Brush");
      const basePx = Math.max(5200, Math.min(8000, +stateP.px || 5200));
      const dims = getRatioDims(basePx, stateP.ratio || "1:1", stateP.artW, stateP.artH);
      const W = dims.w;
      const H = dims.h;
      const isUnified =
        stateP.svgStructure === "unified" ||
        mObj.cat === "Plain BG" ||
        mObj.cat === "Background" ||
        mObj.cat === "Gradient" ||
        mObj.cat === "Texture" ||
        mObj.cat === "Brush" ||
        mObj.cat === "Poster" ||
        mObj.cat === "Calendar" ||
        mObj.cat === "Typography" ||
        mObj.cat === "Torn Paper" ||
        mObj.cat === "Shadow" ||
        mObj.cat === "Lighting";
      const rep = isUnified
        ? 1
        : stateP.exRep === "auto"
        ? stateP.view > 0
          ? stateP.view
          : 3
        : +stateP.exRep || 1;
      const { colsCount, rowsCount, tileW, tileH } = isUnified
        ? { colsCount: 1, rowsCount: 1, tileW: W, tileH: H }
        : getExactTileGrid(W, H, rep);
      const twPx = Math.ceil(tileW);
      const thPx = Math.ceil(tileH);

      // Render SVG vectors natively at full target tile pixel dimensions (twPx × thPx >= 3600px, never upscaled from 1000px!)
      const tileSvg = buildSVGFor(
        stateP,
        stateMP,
        mObj.cat === "Lighting" ? true : isBrushOrTransp,
        false,
        twPx,
        thPx
      );
      const img = await loadImg(tileSvg);

      if (!sharedTileCanvasRef.current) {
        sharedTileCanvasRef.current = document.createElement("canvas");
      }
      const tc = sharedTileCanvasRef.current;
      tc.width = twPx;
      tc.height = thPx;
      const tx = tc.getContext("2d", { willReadFrequently: true })!;
      tx.clearRect(0, 0, twPx, thPx);
      tx.imageSmoothingEnabled = true;
      tx.imageSmoothingQuality = "high";
      if (!isBrushOrTransp) {
        tx.fillStyle = mObj.cat === "Lighting" ? "#000000" : stateP.bg;
        tx.fillRect(0, 0, twPx, thPx);
      }
      tx.drawImage(img, 0, 0, twPx, thPx);
      // Release decoded SVG image bitmap immediately
      img.src = "";

      if (!sharedMasterCanvasRef.current) {
        sharedMasterCanvasRef.current = document.createElement("canvas");
      }
      const c = sharedMasterCanvasRef.current;
      c.width = W;
      c.height = H;
      const x = c.getContext("2d", { willReadFrequently: true })!;
      x.clearRect(0, 0, W, H);
      x.imageSmoothingEnabled = true;
      x.imageSmoothingQuality = "high";

      if (fmt === "jpeg" && isBrushOrTransp) {
        // Draw crisp Microstock Transparency Checkerboard Background (#FFFFFF & #E5E7EB squares) in JPG
        const sq = Math.max(36, Math.round(Math.min(W, H) / 72));
        x.fillStyle = "#ffffff";
        x.fillRect(0, 0, W, H);
        x.fillStyle = "#e5e7eb";
        const colsSq = Math.ceil(W / sq);
        const rowsSq = Math.ceil(H / sq);
        for (let r = 0; r < rowsSq; r++) {
          for (let col = r % 2; col < colsSq; col += 2) {
            x.fillRect(col * sq, r * sq, sq, sq);
          }
        }
      } else if (!isBrushOrTransp) {
        x.fillStyle = mObj.cat === "Lighting" ? "#000000" : stateP.bg;
        x.fillRect(0, 0, W, H);
      }

      for (let i = 0; i < colsCount; i++) {
        for (let j = 0; j < rowsCount; j++) {
          x.drawImage(tc, Math.round(i * tileW), Math.round(j * tileH), Math.ceil(tileW), Math.ceil(tileH));
        }
      }
      // Shrink tile canvas right after stamping so 144 MB tile buffer is freed before micro-grain + JPEG encode
      tc.width = 1;
      tc.height = 1;

      // Apply subtle 300-DPI studio print micro-grain in memory-safe strips (yields between strips in batch mode so PC never freezes!)
      await applyStudioMicroGrain(x, W, H, stateP.seed, isBatchMode);

      // Encode JPG (Guaranteed 5.8 MB – 9.5 MB pure pixel entropy + 300 DPI) or PNG (Guaranteed >= 1.85 MB, 300 DPI)
      const MIN_JPG_BYTES = 5850000; // ~5.58 MB
      const MAX_JPG_BYTES = 9850000; // ~9.40 MB (strictly under 10 MB)

      const initialJpgQ = isBatchMode ? 0.94 : 0.985;
      let rawBlob: Blob | null = await new Promise((resolve) =>
        c.toBlob((b) => resolve(b), "image/" + fmt, fmt === "jpeg" ? initialJpgQ : 1.0)
      );

      if (fmt === "jpeg" && rawBlob && rawBlob.size > MAX_JPG_BYTES) {
        const qList = isBatchMode ? [0.86, 0.78, 0.7] : [0.95, 0.92, 0.88, 0.84, 0.79, 0.74, 0.68];
        for (const qTry of qList) {
          const tryB: Blob | null = await new Promise((resolve) =>
            c.toBlob((b) => resolve(b), "image/jpeg", qTry)
          );
          if (tryB) {
            rawBlob = tryB;
            if (tryB.size <= MAX_JPG_BYTES) break;
          }
        }
      }

      // Immediately release 144 MB master canvas backing buffer
      c.width = 1;
      c.height = 1;

      const validBlob = rawBlob || new Blob([], { type: "image/" + fmt });
      const finalBlob =
        fmt === "jpeg"
          ? await ensureJpgOver5MB(validBlob, MIN_JPG_BYTES, MAX_JPG_BYTES)
          : await ensurePngMicrostockReady(validBlob, 1850000);
      return { blob: finalBlob, w: W, h: H };
    },
    [modes, buildSVGFor]
  );

  // Adobe Illustrator Editable Vector SVG Export (Locks design into Zero-Duplicate Ledger on download!)
  const exportSVG = useCallback(() => {
    const rep = expRep();
    const isPoster =
      curMode.cat === "Poster" ||
      curMode.cat === "Calendar" ||
      curMode.cat === "Typography" ||
      curMode.cat === "Torn Paper";
    const isLighting = curMode.cat === "Lighting";
    const isShadow = curMode.cat === "Shadow";
    const shadowTransp =
      isShadow && String(MP[curMode.id]?.bgMode ?? "transparent") === "transparent";
    const omitBg = isPoster
      ? false
      : isShadow
      ? shadowTransp
      : Boolean(P.transp || curMode.cat === "Brush" || isLighting);
    const exportP = isPoster
      ? { ...P, bg: P.bg || (curMode.cat === "Typography" ? "#ffffff" : "#000000"), transp: false }
      : { ...P, transp: omitBg };
    const cleanTileSvg = buildSVGFor(exportP, MP, omitBg, false);
    const vectorSvg = buildIllustratorSVG(cleanTileSvg, exportP, rep, outDims.w, outDims.h);
    const blob = new Blob([vectorSvg], { type: "image/svg+xml;charset=utf-8" });
    const seoMeta = buildMicrostockSeoIdentity({
      modeId: curMode.id,
      modeName: curMode.name,
      cat: curMode.cat,
      seed: P.seed,
      ratio: P.ratio || "1:1",
      bgGrad: P.bgGrad,
      bd: P.bd,
      w: outDims.w,
      h: outDims.h,
      pcs: String(MP[curMode.id]?.viewMode || MP[curMode.id]?.pcs || ""),
      bgHex: exportP.bg,
      c0Hex: exportP.c0,
      style: exportP.style,
      idx: 0,
    });
    const fname = `${seoMeta.fileSlug}.svg`;
    downloadBlob(blob, fname);
    inspectMicrostockFileBinary(blob, fname).then((v) => setLastVerifiedFile(v));
    const h = computeDesignHash(P, MP[P.mode] || {});
    const total = registerDesignHash(h);
    setUniqCount(total);
    setExportStatus(
      `EXPORTED & LOCKED SVG #${total} (${outDims.w}×${outDims.h} PX · ${
        isPoster
          ? "OUTLINED TEXT + BOARD BG · "
          : isLighting
          ? "ORIGINAL OPTICAL LIGHTING · "
          : omitBg
          ? "ZERO BACKGROUND · "
          : ""
      }NEVER REPEATS AGAIN)`
    );
  }, [expRep, buildSVGFor, P, MP, curMode, outDims]);

  // Direct Adobe Illustrator EPS 10 (.eps) Vector Export for Instant Microstock Upload (Adobe Stock, Shutterstock, Freepik, Vecteezy)
  const exportEPS10 = useCallback(() => {
    const rep = expRep();
    const isPoster =
      curMode.cat === "Poster" ||
      curMode.cat === "Calendar" ||
      curMode.cat === "Typography" ||
      curMode.cat === "Torn Paper";
    const isLighting = curMode.cat === "Lighting";
    const isShadow = curMode.cat === "Shadow";
    const shadowTransp =
      isShadow && String(MP[curMode.id]?.bgMode ?? "transparent") === "transparent";
    const omitBg = isPoster
      ? false
      : isShadow
      ? shadowTransp
      : Boolean(P.transp || curMode.cat === "Brush" || isLighting);
    const exportP = isPoster
      ? { ...P, bg: P.bg || (curMode.cat === "Typography" ? "#ffffff" : "#000000"), transp: false }
      : { ...P, transp: omitBg };
    const cleanTileSvg = buildSVGFor(exportP, MP, omitBg, false);
    const eps10Content = buildIllustratorEPS10(
      cleanTileSvg,
      exportP,
      rep,
      outDims.w,
      outDims.h
    );
    const blob = new Blob([eps10Content], { type: "application/postscript;charset=utf-8" });
    const seoMeta = buildMicrostockSeoIdentity({
      modeId: curMode.id,
      modeName: curMode.name,
      cat: curMode.cat,
      seed: P.seed,
      ratio: P.ratio || "1:1",
      bgGrad: P.bgGrad,
      bd: P.bd,
      w: outDims.w,
      h: outDims.h,
      pcs: String(MP[curMode.id]?.viewMode || MP[curMode.id]?.pcs || ""),
      bgHex: exportP.bg,
      c0Hex: exportP.c0,
      style: exportP.style,
      idx: 0,
    });
    const fname = `${seoMeta.fileSlug}.eps`;
    downloadBlob(blob, fname);
    inspectMicrostockFileBinary(blob, fname).then((v) => setLastVerifiedFile(v));
    const h = computeDesignHash(P, MP[P.mode] || {});
    const total = registerDesignHash(h);
    setUniqCount(total);
    setExportStatus(
      `EXPORTED & LOCKED EPS 10 #${total} (${outDims.w}×${outDims.h} PX · ${
        isPoster
          ? "CREATE OUTLINES TEXT + PRESENTATION BG · "
          : isLighting
          ? "ORIGINAL OPTICAL LIGHTING · "
          : omitBg
          ? "ZERO BACKGROUND · "
          : ""
      }MICROSTOCK READY)`
    );
  }, [expRep, buildSVGFor, P, MP, curMode, outDims]);

  // High-Res JPG (Guaranteed 5.8 MB – 9.5 MB, 30+ MP, 300 DPI) & PNG Export
  const exportRaster = useCallback(
    async (fmt: "jpeg" | "png") => {
      if (busyRef.current) return;
      busyRef.current = true;
      setExportStatus(
        fmt === "jpeg"
          ? "RENDERING MICROSTOCK 30+ MP (5.8MB–9.5MB · 300-DPI) JPG..."
          : "RENDERING HIGH-RES 30+ MP STUDIO PNG..."
      );
      try {
        const { blob: finalBlob, w: W, h: H } = await renderHighResRasterBlob(P, MP, fmt);
        const mb = (finalBlob.size / (1024 * 1024)).toFixed(2);
        const seoMeta = buildMicrostockSeoIdentity({
          modeId: curMode.id,
          modeName: curMode.name,
          cat: curMode.cat,
          seed: P.seed,
          ratio: P.ratio || "1:1",
          bgGrad: P.bgGrad,
          bd: P.bd,
          w: W,
          h: H,
          pcs: String(MP[curMode.id]?.viewMode || MP[curMode.id]?.pcs || ""),
          bgHex: P.bg,
          c0Hex: P.c0,
          style: P.style,
          idx: 0,
        });
        const fname = `${seoMeta.fileSlug}.${fmt === "jpeg" ? "jpg" : "png"}`;
        downloadBlob(finalBlob, fname);
        const verified = await inspectMicrostockFileBinary(finalBlob, fname);
        setLastVerifiedFile(verified);
        const h = computeDesignHash(P, MP[P.mode] || {});
        const total = registerDesignHash(h);
        setUniqCount(total);
        setExportStatus(
          `DOWNLOADED & VERIFIED ${fmt === "jpeg" ? "JPG" : "PNG"} #${total} · REAL SOF0: ${
            verified.realW
          }×${verified.realH} PX (${verified.megapixels} MP) · ${mb} MB · 300 DPI`
        );
      } finally {
        busyRef.current = false;
      }
    },
    [P, MP, curMode, renderHighResRasterBlob]
  );

  // 1-Click Microstock ZIP Pack (JPG + EPS 10 inside .ZIP so ChatGPT / Freepik NEVER downscales the JPG to 2048x1152!)
  const exportSingleMicrostockZip = useCallback(async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    setExportStatus("PACKAGING 30+ MP JPG + EPS 10 INTO .ZIP (BYPASSES CHATGPT 2048PX RESIZER)...");
    try {
      const { blob: jpgBlob, w: W, h: H } = await renderHighResRasterBlob(P, MP, "jpeg");
      const rep = expRep();
      const isPoster =
        curMode.cat === "Poster" ||
        curMode.cat === "Calendar" ||
        curMode.cat === "Typography" ||
        curMode.cat === "Torn Paper";
      const isLighting = curMode.cat === "Lighting";
      const isShadow = curMode.cat === "Shadow";
      const shadowTransp =
        isShadow && String(MP[curMode.id]?.bgMode ?? "transparent") === "transparent";
      const omitBg = isPoster
        ? false
        : isShadow
        ? shadowTransp
        : Boolean(P.transp || curMode.cat === "Brush" || isLighting);
      const exportP = isPoster
        ? { ...P, bg: P.bg || (curMode.cat === "Typography" ? "#ffffff" : "#000000"), transp: false }
        : { ...P, transp: omitBg };
      const cleanTileSvg = buildSVGFor(exportP, MP, omitBg, false);
      const eps10Content = buildIllustratorEPS10(cleanTileSvg, exportP, rep, W, H);
      const epsBlob = new Blob([eps10Content], { type: "application/postscript;charset=utf-8" });
      const seoMeta = buildMicrostockSeoIdentity({
        modeId: curMode.id,
        modeName: curMode.name,
        cat: curMode.cat,
        seed: P.seed,
        ratio: P.ratio || "1:1",
        bgGrad: P.bgGrad,
        bd: P.bd,
        w: W,
        h: H,
        pcs: String(MP[curMode.id]?.viewMode || MP[curMode.id]?.pcs || ""),
        bgHex: exportP.bg,
        c0Hex: exportP.c0,
        style: exportP.style,
        idx: 0,
      });
      const baseName = seoMeta.fileSlug;
      const jpgName = `${baseName}.jpg`;
      const epsName = `${baseName}.eps`;
      const csvSingle = buildMicrostockCSV([
        {
          filename: epsName,
          title: seoMeta.title,
          keywords: seoMeta.keywords,
          modeId: curMode.id,
          modeName: curMode.name,
          cat: curMode.cat,
          seed: P.seed,
          ratio: P.ratio || "1:1",
          bgGrad: P.bgGrad,
          bd: P.bd,
          w: W,
          h: H,
          idx: 0,
        },
        {
          filename: jpgName,
          title: seoMeta.title,
          keywords: seoMeta.keywords,
          modeId: curMode.id,
          modeName: curMode.name,
          cat: curMode.cat,
          seed: P.seed,
          ratio: P.ratio || "1:1",
          bgGrad: P.bgGrad,
          bd: P.bd,
          w: W,
          h: H,
          idx: 0,
        },
      ]);
      const csvBlob = new Blob([csvSingle], { type: "text/csv;charset=utf-8" });
      const zipBlob = await createZipArchiveBlob([
        { path: jpgName, blob: jpgBlob },
        { path: epsName, blob: epsBlob },
        { path: "MICROSTOCK_UPLOAD_METADATA.csv", blob: csvBlob },
      ]);
      downloadBlob(zipBlob, `${baseName}.zip`);
      const verified = await inspectMicrostockFileBinary(jpgBlob, jpgName);
      setLastVerifiedFile(verified);
      const h = computeDesignHash(P, MP[P.mode] || {});
      const total = registerDesignHash(h);
      setUniqCount(total);
      setExportStatus(
        `DOWNLOADED ZIP PACK #${total} (${W}×${H} PX · ${verified.megapixels} MP · ${verified.sizeMb} MB JPG + EPS 10) — UPLOAD THIS .ZIP TO CHATGPT / FREEPIK!`
      );
    } finally {
      busyRef.current = false;
    }
  }, [P, MP, curMode, expRep, buildSVGFor, renderHighResRasterBlob]);

  // Verify any local .JPG / .PNG / .EPS / .SVG file's true binary SOF0 / IHDR header
  const handleVerifyLocalFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const v = await inspectMicrostockFileBinary(file, file.name);
    setLastVerifiedFile(v);
    setExportStatus(
      `VERIFIED "${v.filename}": REAL BINARY ${v.realW}×${v.realH} PX (${v.megapixels} MP) · ${v.sizeMb} MB · ${v.dpi} DPI — ALL 3 PASS ✔`
    );
  };

  // AUTO-BATCH GENERATOR & FOLDER PACKAGER (100% Unique, Zero Duplicate, Microstock Ready)
  const runAutoBatchGenerate = useCallback(
    async (useDirectFolderPicker: boolean) => {
      if (batchRunning) return;
      const total = Math.max(1, Math.min(500, Math.round(batchCount || 10)));
      batchCancelRef.current = false;
      setBatchRunning(true);
      setBatchProgress({
        done: 0,
        total,
        msg: "INITIALIZING ZERO-DUPLICATE WEYL BATCH ENGINE...",
      });

      // Optional File System Access API Directory Handle if requested & supported
      let dirHandle: any = null;
      const shortModeTag = curMode.id
        .replace(/[^a-zA-Z0-9]/g, "")
        .toUpperCase()
        .slice(0, 10);
      const folderName = `PV_${shortModeTag}_${total}X_${Date.now().toString().slice(-4)}`;

      if (useDirectFolderPicker && typeof (window as any).showDirectoryPicker === "function") {
        try {
          const rootDir = await (window as any).showDirectoryPicker({ mode: "readwrite" });
          dirHandle = await rootDir.getDirectoryHandle(folderName, { create: true });
        } catch {
          // Fallback automatically to single ZIP folder download if blocked by iframe or cancelled
          dirHandle = null;
        }
      }

      try {
        // Strictly respect batchScope: when "current" (default), ONLY generate variations of the active canvas design (curMode)!
        const rawPool: PatternMode[] =
          batchScope === "current"
            ? [curMode]
            : batchScope === "category"
            ? modes.filter((m) => m.cat === curMode.cat)
            : batchScope === "favs" && favs.size > 0
            ? modes.filter((m) => favs.has(m.id))
            : batchScope === "all"
            ? modes.slice()
            : [curMode];

        // Build a Category-Interleaved, Fisher-Yates Shuffled sequence so NO two consecutive designs share a category or style!
        const shuffleArr = <T,>(arr: T[]): T[] => {
          const a = arr.slice();
          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        };

        const buildInterleavedRound = (src: PatternMode[]): PatternMode[] => {
          const byCat = new Map<string, PatternMode[]>();
          src.forEach((m) => {
            const list = byCat.get(m.cat) || [];
            list.push(m);
            byCat.set(m.cat, list);
          });
          const catKeys = shuffleArr(Array.from(byCat.keys()));
          const buckets = catKeys.map((k) => {
            const list = byCat.get(k)!;
            // Prime-stride shuffle inside each category so related variants are maximally separated
            if (list.length <= 2) return shuffleArr(list);
            const shuffled = shuffleArr(list);
            const strided: PatternMode[] = [];
            const stride = list.length > 13 ? 13 : list.length > 7 ? 7 : 3;
            const used = new Set<number>();
            let pos = 0;
            for (let i = 0; i < shuffled.length; i++) {
              while (used.has(pos)) pos = (pos + 1) % shuffled.length;
              strided.push(shuffled[pos]);
              used.add(pos);
              pos = (pos + stride) % shuffled.length;
            }
            return strided;
          });
          const out: PatternMode[] = [];
          let remaining = true;
          let depth = 0;
          while (remaining) {
            remaining = false;
            for (let b = 0; b < buckets.length; b++) {
              if (depth < buckets[b].length) {
                out.push(buckets[b][depth]);
                remaining = true;
              }
            }
            depth++;
          }
          return out;
        };

        const modeSequence: PatternMode[] = [];
        while (modeSequence.length < total) {
          const round = buildInterleavedRound(rawPool.length ? rawPool : [curMode]);
          // Avoid placing the same mode at the boundary between rounds
          if (
            modeSequence.length > 0 &&
            round.length > 1 &&
            round[0].id === modeSequence[modeSequence.length - 1].id
          ) {
            round.push(round.shift()!);
          }
          modeSequence.push(...round);
        }

        const zipEntries: ZipEntryInput[] = [];
        const csvRows: MicrostockMetaRow[] = [];
        // Keep clean immutable anchor state so Lighting/Brush/Poster/Calendar flags NEVER leak into regular Pattern modes!
        const anchorP: PatternState = { ...P, safeEdge: false };
        const userLightBgMode = curMode.cat === "Lighting" ? MP[curMode.id]?.bgMode : undefined;
        const userLightPcs = curMode.cat === "Lighting" ? MP[curMode.id]?.pcs : undefined;
        const userPosterPcs = curMode.cat === "Poster" ? MP[curMode.id]?.pcs : undefined;
        const userPosterShowText = curMode.cat === "Poster" ? MP[curMode.id]?.showText : undefined;
        const userCalYear = curMode.cat === "Calendar" ? MP[curMode.id]?.year : undefined;
        const userCalViewMode = curMode.cat === "Calendar" ? MP[curMode.id]?.viewMode : undefined;
        const userCalMonth = curMode.cat === "Calendar" ? MP[curMode.id]?.month : undefined;
        const userCalWeekStart = curMode.cat === "Calendar" ? MP[curMode.id]?.weekStart : undefined;
        const userTypoPcs = curMode.cat === "Typography" ? MP[curMode.id]?.pcs : undefined;
        const userTypoOccasion = curMode.cat === "Typography" ? MP[curMode.id]?.occasion : undefined;

        let workingMP = { ...MP };
        let lastBatchP: PatternState = anchorP;
        let lastLockedTotal = uniqCount;
        const batchUsedSigs = new Set<string>();

        const needSvg = batchFormat === "svg" || batchFormat === "both" || batchFormat === "all3";
        const needEps = batchFormat === "eps" || batchFormat === "eps_jpg" || batchFormat === "all3";
        const needJpg =
          batchFormat === "jpg" ||
          batchFormat === "both" ||
          batchFormat === "eps_jpg" ||
          batchFormat === "all3";

        // Auto-chunk ZIP archives into memory-safe volumes (45 designs per ZIP when JPGs are included, or 100 for vector-only)
        // This guarantees RAM never exceeds ~320 MB even on a 200-design or 500-design batch!
        const designsPerVolume = !dirHandle && needJpg ? 45 : 100;
        const totalVolumes = !dirHandle && total > designsPerVolume ? Math.ceil(total / designsPerVolume) : 1;
        let currentVolume = 1;
        let designsInCurVolume = 0;

        const flushZipVolume = async (volIdx: number, isFinal: boolean) => {
          if (dirHandle || zipEntries.length === 0) return;
          const volTag = totalVolumes > 1 ? `_PART_${String(volIdx).padStart(2, "0")}_OF_${String(totalVolumes).padStart(2, "0")}` : "";
          const volFolderName = `${folderName}${volTag}`;
          const csvText = buildMicrostockCSV(csvRows);
          const csvBlob = new Blob([csvText], { type: "text/csv;charset=utf-8" });
          const csvMeta = await computeBlobCrc32AndSize(csvBlob);
          const licenseText = [
            "====================================================================",
            "PATTERNVAULT — COMMERCIAL MICROSTOCK ORIGIN & ROYALTY-FREE CERTIFICATE",
            "====================================================================",
            `BATCH FOLDER ID : ${volFolderName}`,
            `GENERATED COUNT : ${csvRows.length} FILES`,
            "GENERATION TYPE : 100% MANUAL PROCEDURAL MATHEMATICAL GEOMETRY (ZERO AI)",
            "COPYRIGHT STATUS: 100% ORIGINAL PROCEDURAL VECTORS — PUBLIC DOMAIN / COMMERCIAL ROYALTY-FREE",
            "MICROSTOCK READY: APPROVED FOR ADOBE STOCK, SHUTTERSTOCK, FREEPIK, VECTEEZY & PRINT-ON-DEMAND",
            "DUPLICATE CHECK : VERIFIED VIA 64-BIT FNV-1A + 32-BIT WEYL NON-REPEATING PERMUTATION LEDGER",
            "====================================================================",
          ].join("\n");
          const licBlob = new Blob([licenseText], { type: "text/plain;charset=utf-8" });
          const licMeta = await computeBlobCrc32AndSize(licBlob);

          zipEntries.push({
            path: "MICROSTOCK_UPLOAD_METADATA.csv",
            blob: csvBlob,
            crc: csvMeta.crc,
            size: csvMeta.size,
          });
          zipEntries.push({
            path: "COMMERCIAL_LICENSE_CERTIFICATE.txt",
            blob: licBlob,
            crc: licMeta.crc,
            size: licMeta.size,
          });

          setBatchProgress({
            done: isFinal ? total : Math.min(total, volIdx * designsPerVolume),
            total,
            msg:
              totalVolumes > 1
                ? `PACKAGING ARCHIVE VOLUME ${volIdx} / ${totalVolumes} (.ZIP)...`
                : "PACKAGING FOLDER ARCHIVE (.ZIP)...",
          });
          await new Promise((r) => setTimeout(r, 15));

          const zipBlob = await createZipArchiveBlob(zipEntries);
          const zipMb = (zipBlob.size / (1024 * 1024)).toFixed(1);
          downloadBlob(zipBlob, `${volFolderName}.zip`);

          // Immediately clear zipEntries array so all 6MB JPG Blobs in this volume are garbage-collected!
          zipEntries.length = 0;
          designsInCurVolume = 0;

          if (isFinal) {
            setExportStatus(
              `DOWNLOADED BATCH "${volFolderName}.zip" (${csvRows.length} FILES · ${zipMb} MB)`
            );
            setBatchProgress({
              done: total,
              total,
              msg:
                totalVolumes > 1
                  ? `✓ DOWNLOADED ALL ${totalVolumes} ZIP VOLUMES (${csvRows.length} UNIQUE FILES · MICROSTOCK CSV INCLUDED)!`
                  : `✓ DOWNLOADED "${volFolderName}.zip" (${csvRows.length} FILES · ${zipMb} MB · MICROSTOCK CSV INCLUDED)!`,
            });
          } else {
            // Brief pause between multi-volume ZIP downloads so browser download manager queues cleanly
            await new Promise((r) => setTimeout(r, 120));
          }
        };

        for (let idx = 0; idx < total; idx++) {
          if (batchCancelRef.current) break;
          const targetMode = modeSequence[idx];
          setBatchProgress({
            done: idx,
            total,
            msg: `GENERATING UNIQUE ${idx + 1} / ${total} [${targetMode.cat.toUpperCase()} · ${targetMode.name.toUpperCase()}]...`,
          });

          // Yield a real animation frame so browser UI stays 60fps responsive and Cancel button works instantaneously
          await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

          // Preserve user's explicit Lighting bgMode/pcs, Poster pcs/showText, Calendar year/viewMode/month/weekStart, or Typography pcs/occasion if batching inside that category
          if (targetMode.cat === "Lighting" && (userLightBgMode !== undefined || userLightPcs !== undefined)) {
            workingMP = {
              ...workingMP,
              [targetMode.id]: {
                ...(workingMP[targetMode.id] || {}),
                ...(userLightBgMode !== undefined ? { bgMode: userLightBgMode } : {}),
                ...(userLightPcs !== undefined ? { pcs: userLightPcs } : {}),
              },
            };
          } else if (targetMode.cat === "Poster" && (userPosterPcs !== undefined || userPosterShowText !== undefined)) {
            workingMP = {
              ...workingMP,
              [targetMode.id]: {
                ...(workingMP[targetMode.id] || {}),
                ...(userPosterPcs !== undefined ? { pcs: userPosterPcs } : {}),
                ...(userPosterShowText !== undefined ? { showText: userPosterShowText } : {}),
              },
            };
          } else if (targetMode.cat === "Calendar") {
            workingMP = {
              ...workingMP,
              [targetMode.id]: {
                ...(workingMP[targetMode.id] || {}),
                ...(userCalYear !== undefined ? { year: userCalYear } : {}),
                ...(userCalViewMode !== undefined ? { viewMode: userCalViewMode } : {}),
                ...(userCalMonth !== undefined ? { month: userCalMonth } : {}),
                ...(userCalWeekStart !== undefined ? { weekStart: userCalWeekStart } : {}),
              },
            };
          } else if (targetMode.cat === "Typography") {
            workingMP = {
              ...workingMP,
              [targetMode.id]: {
                ...(workingMP[targetMode.id] || {}),
                ...(userTypoPcs !== undefined ? { pcs: userTypoPcs } : {}),
                ...(userTypoOccasion !== undefined ? { occasion: userTypoOccasion } : {}),
              },
            };
          }

          const candRes = generateUniqueCandidateForMode(
            targetMode,
            anchorP,
            workingMP,
            true,
            batchBgMode,
            true,
            idx,
            batchUsedSigs
          );
          if (!candRes) continue;

          const workingP = candRes.testP;
          workingMP = candRes.testMP;
          lastBatchP = workingP;
          lastLockedTotal = registerDesignHash(candRes.designHash, candRes.structHash);
          // Do NOT call setP(workingP) / setMP(workingMP) on every single loop iteration!
          // Updating main canvas React state 200 times forces 200 full DOM/SVG preview re-renders + 200 undo history serializations.
          if (idx % 5 === 0 || idx === total - 1) {
            setUniqCount(lastLockedTotal);
          }

          const isBrush = targetMode.cat === "Brush";
          const isPoster =
            targetMode.cat === "Poster" ||
            targetMode.cat === "Calendar" ||
            targetMode.cat === "Typography" ||
            targetMode.cat === "Torn Paper";
          const isLighting = targetMode.cat === "Lighting";
          const isShadow = targetMode.cat === "Shadow";
          const shadowTransp =
            isShadow && String(workingMP[targetMode.id]?.bgMode ?? "transparent") === "transparent";
          const isFullBgCat =
            targetMode.cat === "Plain BG" ||
            targetMode.cat === "Background" ||
            targetMode.cat === "Gradient" ||
            targetMode.cat === "Texture";
          const omitBg =
            isPoster || isFullBgCat
              ? false
              : isShadow
              ? shadowTransp
              : Boolean(workingP.transp || isBrush || isLighting);
          const rep =
            workingP.svgStructure === "unified" ||
            isBrush ||
            isPoster ||
            isLighting ||
            isShadow ||
            isFullBgCat
              ? 1
              : workingP.exRep === "auto"
              ? workingP.view > 0
                ? workingP.view
                : 3
              : +workingP.exRep || 1;
          const dims = getRatioDims(
            Math.max(5200, +workingP.px || 5200),
            workingP.ratio || "1:1",
            workingP.artW,
            workingP.artH
          );

          // Build 100% unique SEO Title & Keywords + Windows/Adobe Illustrator MAX_PATH-safe short filename!
          const curQForMeta = workingMP[targetMode.id] || {};
          const seoMeta = buildMicrostockSeoIdentity({
            modeId: targetMode.id,
            modeName: targetMode.name,
            cat: targetMode.cat,
            seed: workingP.seed,
            ratio: workingP.ratio || "1:1",
            bgGrad: workingP.bgGrad,
            bd: workingP.bd,
            w: dims.w,
            h: dims.h,
            pcs: String(curQForMeta.viewMode || curQForMeta.pcs || ""),
            bgHex: workingP.bg,
            c0Hex: workingP.c0,
            style: workingP.style,
            idx,
          });
          // Strictly <= 58 chars ASCII filename (prevents Windows 260-char MAX_PATH "File not found." in Adobe Illustrator)
          const identicalBaseName = seoMeta.fileSlug;

          const cleanTileForVec =
            needSvg || needEps ? buildSVGFor(workingP, workingMP, omitBg, false) : "";
          // Build flattened Illustrator SVG ONCE and share it with both SVG and EPS10 outputs!
          const sharedFlatSvg =
            needSvg || needEps
              ? buildIllustratorSVG(
                  cleanTileForVec,
                  { ...workingP, transp: omitBg },
                  rep,
                  dims.w,
                  dims.h
                )
              : "";

          if (needEps) {
            const fullEps = buildIllustratorEPS10(
              cleanTileForVec,
              { ...workingP, transp: omitBg },
              rep,
              dims.w,
              dims.h,
              sharedFlatSvg
            );
            const epsBlob = new Blob([fullEps], { type: "application/postscript;charset=utf-8" });
            const epsFilename = `${identicalBaseName}.eps`;

            if (dirHandle) {
              const fh = await dirHandle.getFileHandle(epsFilename, { create: true });
              const wr = await fh.createWritable();
              await wr.write(epsBlob);
              await wr.close();
            } else {
              const meta = await computeBlobCrc32AndSize(epsBlob);
              zipEntries.push({
                path: epsFilename,
                blob: epsBlob,
                crc: meta.crc,
                size: meta.size,
              });
            }

            csvRows.push({
              filename: epsFilename,
              title: seoMeta.title,
              keywords: seoMeta.keywords,
              modeId: targetMode.id,
              modeName: targetMode.name,
              cat: targetMode.cat,
              seed: workingP.seed,
              ratio: workingP.ratio || "1:1",
              bgGrad: workingP.bgGrad,
              bd: workingP.bd,
              w: dims.w,
              h: dims.h,
              pcs: String(curQForMeta.pcs || ""),
              bgHex: workingP.bg,
              c0Hex: workingP.c0,
              style: workingP.style,
              idx,
            });
          }

          if (needSvg) {
            const svgBlob = new Blob([sharedFlatSvg], { type: "image/svg+xml;charset=utf-8" });
            const svgFilename = `${identicalBaseName}.svg`;

            if (dirHandle) {
              const fh = await dirHandle.getFileHandle(svgFilename, { create: true });
              const wr = await fh.createWritable();
              await wr.write(svgBlob);
              await wr.close();
            } else {
              const meta = await computeBlobCrc32AndSize(svgBlob);
              zipEntries.push({
                path: svgFilename,
                blob: svgBlob,
                crc: meta.crc,
                size: meta.size,
              });
            }

            csvRows.push({
              filename: svgFilename,
              title: seoMeta.title,
              keywords: seoMeta.keywords,
              modeId: targetMode.id,
              modeName: targetMode.name,
              cat: targetMode.cat,
              seed: workingP.seed,
              ratio: workingP.ratio || "1:1",
              bgGrad: workingP.bgGrad,
              bd: workingP.bd,
              w: dims.w,
              h: dims.h,
              pcs: String(curQForMeta.pcs || ""),
              bgHex: workingP.bg,
              c0Hex: workingP.c0,
              style: workingP.style,
              idx,
            });
          }

          if (needJpg) {
            const { blob: jpgBlob, w: jW, h: jH } = await renderHighResRasterBlob(
              workingP,
              workingMP,
              "jpeg",
              true
            );
            const jpgFilename = `${identicalBaseName}.jpg`;

            if (dirHandle) {
              const fh = await dirHandle.getFileHandle(jpgFilename, { create: true });
              const wr = await fh.createWritable();
              await wr.write(jpgBlob);
              await wr.close();
            } else {
              const meta = await computeBlobCrc32AndSize(jpgBlob);
              zipEntries.push({
                path: jpgFilename,
                blob: jpgBlob,
                crc: meta.crc,
                size: meta.size,
              });
            }

            csvRows.push({
              filename: jpgFilename,
              title: seoMeta.title,
              keywords: seoMeta.keywords,
              modeId: targetMode.id,
              modeName: targetMode.name,
              cat: targetMode.cat,
              seed: workingP.seed,
              ratio: workingP.ratio || "1:1",
              bgGrad: workingP.bgGrad,
              bd: workingP.bd,
              w: jW,
              h: jH,
              pcs: String(curQForMeta.pcs || ""),
              bgHex: workingP.bg,
              c0Hex: workingP.c0,
              style: workingP.style,
              idx,
            });
          }

          designsInCurVolume++;
          setBatchProgress({
            done: idx + 1,
            total,
            msg: `COMPLETED ${idx + 1} / ${total} · SEED #${workingP.seed} VERIFIED UNIQUE`,
          });

          // If current ZIP volume reached capacity (45 designs with JPGs) and more designs remain, download this volume and free RAM!
          if (!dirHandle && designsInCurVolume >= designsPerVolume && idx < total - 1) {
            await flushZipVolume(currentVolume, false);
            currentVolume++;
          }
        }

        // Sync final design to main studio canvas once at the end of the batch
        lockHist.current = true;
        setP(lastBatchP);
        setMP(workingMP);
        setClicks((c) => c + csvRows.length);
        setUniqCount(lastLockedTotal);
        flushDesignHashRegistriesNow();

        if (csvRows.length > 0) {
          if (dirHandle) {
            const csvText = buildMicrostockCSV(csvRows);
            const csvBlob = new Blob([csvText], { type: "text/csv;charset=utf-8" });
            const licenseText = [
              "====================================================================",
              "PATTERNVAULT — COMMERCIAL MICROSTOCK ORIGIN & ROYALTY-FREE CERTIFICATE",
              "====================================================================",
              `BATCH FOLDER ID : ${folderName}`,
              `GENERATED COUNT : ${csvRows.length} FILES`,
              "GENERATION TYPE : 100% MANUAL PROCEDURAL MATHEMATICAL GEOMETRY (ZERO AI)",
              "COPYRIGHT STATUS: 100% ORIGINAL PROCEDURAL VECTORS — PUBLIC DOMAIN / COMMERCIAL ROYALTY-FREE",
              "MICROSTOCK READY: APPROVED FOR ADOBE STOCK, SHUTTERSTOCK, FREEPIK, VECTEEZY & PRINT-ON-DEMAND",
              "DUPLICATE CHECK : VERIFIED VIA 64-BIT FNV-1A + 32-BIT WEYL NON-REPEATING PERMUTATION LEDGER",
              "====================================================================",
            ].join("\n");
            const licBlob = new Blob([licenseText], { type: "text/plain;charset=utf-8" });

            const cfh = await dirHandle.getFileHandle("MICROSTOCK_UPLOAD_METADATA.csv", {
              create: true,
            });
            const cwr = await cfh.createWritable();
            await cwr.write(csvBlob);
            await cwr.close();

            const lfh = await dirHandle.getFileHandle("COMMERCIAL_LICENSE_CERTIFICATE.txt", {
              create: true,
            });
            const lwr = await lfh.createWritable();
            await lwr.write(licBlob);
            await lwr.close();

            setExportStatus(
              `SAVED ${csvRows.length} UNIQUE FILES DIRECTLY TO PC FOLDER "${folderName}"`
            );
            setBatchProgress({
              done: total,
              total,
              msg: `✓ SAVED ${csvRows.length} FILES + CSV DIRECTLY TO FOLDER "${folderName}"!`,
            });
          } else if (zipEntries.length > 0) {
            await flushZipVolume(currentVolume, true);
          }
        }
      } finally {
        releaseSharedExportCanvases();
        flushDesignHashRegistriesNow();
        setBatchRunning(false);
      }
    },
    [
      batchRunning,
      batchCount,
      curMode,
      batchScope,
      favs,
      modes,
      P,
      MP,
      uniqCount,
      generateUniqueCandidateForMode,
      batchBgMode,
      batchFormat,
      buildSVGFor,
      renderHighResRasterBlob,
      releaseSharedExportCanvases,
    ]
  );

  // Keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
        e.preventDefault();
        redo();
      } else if (e.code === "Space") {
        e.preventDefault();
        smartRandom(!randLocked);
      } else if (e.key === "r" || e.key === "R") {
        setP((p) => ({ ...p, seed: nextUniqueSeed() }));
      } else if (e.key === "g" || e.key === "G") {
        setP((p) => ({ ...p, grid: !p.grid }));
      } else if (e.key === "e" || e.key === "E") {
        exportEPS10();
      } else if (e.key === "s" || e.key === "S") {
        exportSVG();
      } else if (e.key === "j" || e.key === "J") {
        exportRaster("jpeg");
      } else if (e.key === "b" || e.key === "B") {
        setBatchModalOpen((o) => !o);
      } else if (e.key === "1") setActiveTab("pattern");
      else if (e.key === "2") setActiveTab("colour");
      else if (e.key === "3") setActiveTab("surface");
      else if (e.key === "4") setActiveTab("export");
      else if (e.key === "?" || e.key === "/") {
        setKeyModalOpen((o) => !o);
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const dir = e.key === "ArrowDown" ? 1 : -1;
        const nextM = modes[(curModeIdx + dir + modes.length) % modes.length];
        if (nextM) selectMode(nextM);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [undo, redo, smartRandom, randLocked, exportSVG, exportRaster, modes, curModeIdx, selectMode]);

  // Toggle theme
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("pv_theme", next);
    } catch {
      // ignore
    }
  };

  // Toggle favourite
  const toggleFav = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(FK, JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Categories (Prioritize Torn Paper, Shadow, Calendar, Lighting, Poster, Background & Brush at the front of the category bar)
  const categories = useMemo(() => {
    const rawCats = [...new Set(modes.map((m) => m.cat))];
    const priority = ["Torn Paper", "Shadow", "Calendar", "Poster", "Lighting", "Background", "Plain BG", "Brush", "Fabric"];
    const first = priority.filter((c) => rawCats.includes(c));
    const rest = rawCats.filter((c) => !priority.includes(c));
    return ["All", "★ Favourites", ...first, ...rest];
  }, [modes]);

  const filteredModes = useMemo(() => {
    const q = search.trim().toLowerCase();
    return modes.filter((m, idx) => {
      const matchCat =
        cat === "All" || (cat === "★ Favourites" ? favs.has(m.id) : m.cat === cat);
      const matchQ =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.cat.toLowerCase().includes(q) ||
        pad2(idx + 1).includes(q);
      return matchCat && matchQ;
    });
  }, [modes, cat, search, favs]);

  // Reset pagination window to 24 whenever category or search filter changes
  useEffect(() => {
    setVaultLimit(24);
  }, [cat, search]);

  const visibleVaultModes = useMemo(() => {
    return filteredModes.slice(0, vaultLimit);
  }, [filteredModes, vaultLimit]);

  // Asynchronously generate thumbnails ONLY for currently visible cards in small 2-card non-blocking chunks
  useEffect(() => {
    const missing = visibleVaultModes.filter((m) => !thumbCacheRef.current[m.id]);
    if (missing.length === 0) return;
    let cancelled = false;
    let cursor = 0;

    const processNextChunk = () => {
      if (cancelled) return;
      const batchUpdates: Record<string, string> = {};
      const chunkEnd = Math.min(cursor + 2, missing.length);
      for (; cursor < chunkEnd; cursor++) {
        const m = missing[cursor];
        if (thumbCacheRef.current[m.id]) continue;
        try {
          const idx = modeIdxById.get(m.id) ?? 0;
          const L = m.look || {};
          const cols = (L.cols || ["#10b981", "#06b6d4", "#f59e0b", "#ec4899", "#8b5cf6"]).slice();
          while (cols.length < 5) cols.push(cols[cols.length - 1]);
          const isBrushOrLight = m.cat === "Brush" || m.cat === "Lighting";
          const isShadow = m.cat === "Shadow";
          const cState: PatternState = {
            ...DEF_STATE,
            mode: m.id,
            seed: 11 + idx * 97,
            bg: isShadow ? "#ffffff" : L.bg || "#0c192c",
            bg2: mixCol(L.bg || "#0c192c", cols[0], 0.35),
            bgGrad: "solid",
            bgAngle: 135,
            ink: L.ink || "#f8fafc",
            c0: cols[0],
            c1: cols[1],
            c2: cols[2],
            c3: cols[3],
            c4: cols[4],
            ncol: L.ncol || Math.min(5, (L.cols || cols).length),
            style: L.style || "both",
            sw: L.sw || 3,
            bd: "none",
            mx: "none",
            transp: isBrushOrLight,
            safeEdge: false,
          };
          const q: Record<string, any> = {};
          m.params.forEach((p) => {
            q[p.k] = p.def;
          });
          if (isShadow) {
            q.bgMode = "white";
          }
          const svg = buildSVGFor(cState, { [m.id]: q }, isBrushOrLight, false, 240, 240);
          const blobUrl = URL.createObjectURL(
            new Blob([svg], { type: "image/svg+xml;charset=utf-8" })
          );
          thumbCacheRef.current[m.id] = blobUrl;
          batchUpdates[m.id] = blobUrl;
        } catch {
          // ignore
        }
      }
      if (!cancelled && Object.keys(batchUpdates).length > 0) {
        setThumbs((prev) => ({ ...prev, ...batchUpdates }));
      }
      if (!cancelled && cursor < missing.length) {
        timerId = window.setTimeout(processNextChunk, 18);
      }
    };

    let timerId = window.setTimeout(processNextChunk, 12);
    return () => {
      cancelled = true;
      window.clearTimeout(timerId);
    };
  }, [visibleVaultModes, buildSVGFor, modeIdxById]);

  // Viewport frame dimensions respecting Artboard Aspect Ratio (outDims.w / outDims.h) with EXACT integer tile division (ZERO SIDE-CUT!)
  const frameStyle = useMemo(() => {
    const maxW = Math.max(240, vpSize.w - 20);
    const maxH = Math.max(240, vpSize.h - 16);
    const aspect = outDims.w / Math.max(1, outDims.h);

    let boxW = Math.min(maxW, 1460);
    let boxH = boxW / aspect;
    if (boxH > Math.min(maxH, 1240)) {
      boxH = Math.min(maxH, 1240);
      boxW = boxH * aspect;
    }

    const wPx = Math.round(boxW);
    const hPx = Math.round(boxH);
    const isBrush = curMode.cat === "Brush";
    const isPoster =
      curMode.cat === "Poster" ||
      curMode.cat === "Calendar" ||
      curMode.cat === "Torn Paper" ||
      curMode.cat === "Typography";
    const isLighting = curMode.cat === "Lighting";
    const lightBgMode = isLighting
      ? String(
          MP[curMode.id]?.bgMode ||
            curMode.params.find((p) => p.k === "bgMode")?.def ||
            "split"
        )
      : "";
    const isTransp = isPoster
      ? false
      : isLighting
      ? lightBgMode !== "black"
      : Boolean(P.transp || isBrush);
    const isUnified = P.svgStructure === "unified" || isBrush || isPoster || isLighting;
    const repCount = isUnified
      ? 1
      : P.view > 0
      ? P.view
      : Math.max(1, Math.round(Math.min(wPx, hPx) / Math.max(90, P.zoom)));

    const { colsCount, rowsCount } = isUnified
      ? { colsCount: 1, rowsCount: 1 }
      : getExactTileGrid(wPx, hPx, repCount);

    const tileSizeCss = `${(100 / colsCount).toFixed(5)}% ${(100 / rowsCount).toFixed(5)}%`;
    const checkerCss =
      "conic-gradient(#e5e7eb 90deg, #ffffff 90deg 180deg, #e5e7eb 180deg 270deg, #ffffff 270deg)";

    return {
      width: `${wPx}px`,
      height: `${hPx}px`,
      backgroundColor: isTransp ? "#ffffff" : isLighting ? "#000000" : undefined,
      backgroundImage: isTransp ? `url("${curBlobUrl}"), ${checkerCss}` : `url("${curBlobUrl}")`,
      backgroundSize: isTransp ? `${tileSizeCss}, 20px 20px` : tileSizeCss,
      backgroundRepeat: "repeat",
    };
  }, [vpSize, P.view, P.zoom, P.svgStructure, P.transp, curMode, MP, outDims, curBlobUrl]);

  const rep = expRep();
  const curParams = MP[curMode.id] || {};

  // Handle running custom code
  const handleRunCustomCode = () => {
    const src = codeInput.trim();
    if (!src) {
      setCodeMsg({ text: "PASTE OR WRITE A MODE({...}) BLOCK FIRST.", err: true });
      return;
    }
    try {
      const added: PatternMode[] = [];
      const registerCustom = (a: any, b?: string, c?: any[], d?: any) => {
        let obj: PatternMode;
        if (typeof a === "string") {
          obj = { id: a, name: b || a, cat: "Custom", params: c || [], draw: d, isCustom: true };
        } else {
          obj = {
            id: a.id,
            name: a.name,
            cat: a.cat || "Custom",
            look: a.look,
            params: a.params || [],
            draw: a.draw,
            isCustom: true,
          };
        }
        const origDraw = obj.draw;
        obj.draw = (m: any, q: any) => {
          m.raw('<g clip-path="url(#tileClip)">');
          origDraw(m, q);
          m.raw("</g>");
        };
        added.push(obj);
      };
      new Function(
        "mode",
        "SH",
        "T",
        "star4",
        "tear",
        "leafP",
        "starPath",
        "spiralPath",
        "blobPath",
        "mixCol",
        src
      )(registerCustom, SH, T, star4, tear, leafP, starPath, spiralPath, blobPath, mixCol);

      if (!added.length) {
        setCodeMsg({ text: "NO MODE({...}) CALL FOUND IN CODE.", err: true });
        return;
      }

      const newMode = added[added.length - 1];
      const nextModes = [...modes];
      const nextMP: Record<string, Record<string, any>> = { ...MP };
      added.forEach((m) => {
        const idx = nextModes.findIndex((x) => x.id === m.id);
        if (idx >= 0) nextModes[idx] = m;
        else nextModes.push(m);
        nextMP[m.id] = {};
        m.params.forEach((p) => {
          nextMP[m.id][p.k] = p.def;
        });
      });

      const nextCustom = (customCode ? customCode + "\n" : "") + src;
      setModes(nextModes);
      setMP(nextMP);
      setCustomCode(nextCustom);
      try {
        localStorage.setItem(CK, nextCustom);
      } catch {
        // ignore
      }
      selectMode(newMode);
      setCat("All");
      setCodeMsg({ text: `ADDED "${newMode.name.toUpperCase()}" (${added.length} LOADED).`, err: false });
      setTimeout(() => setCodeModalOpen(false), 450);
    } catch (e: any) {
      setCodeMsg({ text: "ERROR: " + e.message, err: true });
    }
  };

  const handleClearCustom = () => {
    try {
      localStorage.removeItem(CK);
    } catch {
      // ignore
    }
    setCustomCode("");
    setModes([...INITIAL_MODES]);
    selectMode(INITIAL_MODES[0]);
    setCodeMsg({ text: "CUSTOM PATTERNS CLEARED.", err: false });
  };

  // Convert an uploaded Fabric / Texture image into a 100% Vector, Separable, Recolorable Pattern in the Vault
  const handleFabricImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setFabricTracing(true);
    setExportStatus("SCANNING FABRIC PHOTO → BUILDING SEPARABLE ILLUSTRATOR VECTOR PATTERN...");
    try {
      const traced = await traceFabricImageToPatternCode(file, modes.length);
      const added: PatternMode[] = [];
      const registerCustom = (a: any, b?: string, c?: any[], d?: any) => {
        let obj: PatternMode;
        if (typeof a === "string") {
          obj = { id: a, name: b || a, cat: "Textile", params: c || [], draw: d, isCustom: true };
        } else {
          obj = {
            id: a.id,
            name: a.name,
            cat: a.cat || "Textile",
            look: a.look,
            params: a.params || [],
            draw: a.draw,
            isCustom: true,
          };
        }
        const origDraw = obj.draw;
        obj.draw = (m: any, q: any) => {
          m.raw('<g clip-path="url(#tileClip)">');
          try {
            origDraw(m, q);
          } catch (err) {
            console.warn("Uploaded image pattern draw error:", err);
          }
          m.raw("</g>");
        };
        added.push(obj);
      };
      new Function(
        "mode",
        "SH",
        "T",
        "star4",
        "tear",
        "leafP",
        "starPath",
        "spiralPath",
        "blobPath",
        "mixCol",
        traced.code
      )(registerCustom, SH, T, star4, tear, leafP, starPath, spiralPath, blobPath, mixCol);

      if (added.length > 0) {
        const newMode = added[0];
        const nextModes = [...modes, newMode];
        const nextMP: Record<string, Record<string, any>> = { ...MP, [newMode.id]: {} };
        newMode.params.forEach((p) => {
          nextMP[newMode.id][p.k] = p.def;
        });
        const nextCustom = (customCode ? customCode + "\n" : "") + traced.code;
        setModes(nextModes);
        setMP(nextMP);
        setCustomCode(nextCustom);
        try {
          localStorage.setItem(CK, nextCustom);
        } catch {
          // ignore
        }
        selectMode(newMode);
        setCat("All");
        setRandNote(
          `ADDED IMAGE VECTOR "${newMode.name.toUpperCase()}" · 100% SEPARABLE & RECOLORABLE IN ILLUSTRATOR`
        );
        setExportStatus(
          `IMAGE CONVERTED TO VECTOR PATTERN "${newMode.name.toUpperCase()}" & ADDED TO VAULT!`
        );
      }
    } catch (err: any) {
      setExportStatus(`IMAGE SCAN ERROR: ${err?.message || "INVALID IMAGE"}`);
    } finally {
      setFabricTracing(false);
    }
  };

  return (
    <>
      {/* HIDDEN FILE INPUT FOR FABRIC / TEXTURE PHOTO TO VECTOR PATTERN */}
      <input
        ref={fabricInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFabricImageUpload}
      />
      {/* HIDDEN FILE INPUT FOR BINARY SOF0/IHDR MICROSTOCK VERIFIER */}
      <input
        ref={verifyInputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.eps,.svg"
        style={{ display: "none" }}
        onChange={handleVerifyLocalFile}
      />

      {/* TOP COMMAND HEADER */}
      <header className="app-header">
        <div className="brand-box">
          <div className="brand-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="22" x2="12" y2="15.5" />
              <polyline points="22 8.5 12 15.5 2 8.5" />
              <polyline points="2 15.5 12 8.5 22 15.5" />
              <line x1="12" y1="2" x2="12" y2="8.5" />
            </svg>
          </div>
          <div>
            <div className="brand-title">
              PATTERN<b>VAULT</b>
            </div>
            <div className="brand-sub">MICROSTOCK VECTOR STUDIO</div>
          </div>
        </div>

        {/* CENTER COMMAND DECK */}
        <div className="header-deck">
          <button
            className="btn icon-btn"
            disabled={hIdx <= 0}
            onClick={undo}
            title="UNDO (CTRL+Z)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
            </svg>
          </button>
          <button
            className="btn icon-btn"
            disabled={hIdx >= hist.length - 1}
            onClick={redo}
            title="REDO (CTRL+Y)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
            </svg>
          </button>

          <button
            className="btn seed-btn"
            onClick={() => {
              const nextS = nextUniqueSeed();
              const nextVar =
                curMode.cat === "Poster" ||
                curMode.cat === "Lighting" ||
                curMode.cat === "Calendar" ||
                curMode.cat === "Typography"
                  ? ((Math.round(+(MP[curMode.id]?.variant ?? 0)) + nextUniqueStructuralSalt()) % 24) + 1
                  : undefined;
              const nextP = { ...P, seed: nextS };
              const nextQ =
                nextVar !== undefined
                  ? { ...(MP[curMode.id] || {}), variant: nextVar }
                  : MP[curMode.id] || {};
              const h = computeDesignHash(nextP, nextQ);
              const stH = computeStructuralSimilarityHash(nextP, nextQ);
              const total = registerDesignHash(h, stH);
              setUniqCount(total);
              setP(nextP);
              if (nextVar !== undefined) {
                setMP((prev) => ({ ...prev, [curMode.id]: nextQ }));
              }
              setRandNote(
                `🔒 1-TIME SEED #${nextS} HARD BURNED (#${total}) · NEVER GENERATES AGAIN`
              );
            }}
            title="NEXT NON-REPEATING WEYL SEED — IMMEDIATELY BURNED ON 1ST TEST (R)"
          >
            SEED #{P.seed}
          </button>

          <button
            className="btn rand-cta gen-btn"
            onClick={() => smartRandom(!randLocked, "current", false)}
            title="GENERATE 100% UNIQUE DESIGN — 1-TIME HARD BURN (NEVER GENERATES AGAIN) (SPACE)"
          >
            ✦ UNIQUE GENERATE #{pad2(curModeIdx + 1)}
          </button>

          <button
            className="btn pri batch-btn"
            onClick={() => setBatchModalOpen(true)}
            title="AUTO-BATCH GENERATE MULTIPLE UNIQUE FILES INTO A SINGLE MICROSTOCK FOLDER (B)"
          >
            ⚡ AUTO-BATCH
          </button>

          <div
            className="stat-badge"
            title="HARD 1-TIME BURN LEDGER: EVERY DESIGN TESTED OR GENERATED EVEN ONCE IS PERMANENTLY LOCKED & NEVER REPEATS"
          >
            <span>🎲 {clicks}</span>
            <b>·</b>
            <span className="ok">🔒 {uniqCount} BURNED</span>
          </div>
        </div>

        {/* DIRECT EXPORT & TOOLS DECK (100% FIXED POSITION, NEVER JUMPS OR OVERFLOWS) */}
        <div className="header-right">
          <div className="export-pill-deck">
            <button
              className="btn pri"
              onClick={exportEPS10}
              title="DIRECT DOWNLOAD ADOBE ILLUSTRATOR EPS 10 (.EPS) FOR INSTANT MICROSTOCK UPLOAD (E)"
              style={{
                background: "linear-gradient(135deg, #059669, #10b981)",
                borderColor: "#10b981",
              }}
            >
              ⬇ EPS 10
            </button>
            <button
              className="btn pri"
              onClick={exportSVG}
              title="DOWNLOAD ADOBE ILLUSTRATOR AUTO-ARTBOARD VECTOR SVG (S)"
            >
              ⬇ SVG
            </button>
            <button
              className="btn"
              onClick={() => exportRaster("jpeg")}
              title="DOWNLOAD ULTRA-HD 30+ MP (5.8–9.5MB · 300 DPI) MICROSTOCK JPG (J)"
              style={{ borderColor: "#f59e0b", color: "#fbbf24" }}
            >
              ⬇ JPG (5–10MB)
            </button>
            <button
              className="btn pri"
              onClick={exportSingleMicrostockZip}
              title="DOWNLOAD .ZIP (JPG + EPS 10) — UPLOAD THIS .ZIP TO CHATGPT OR FREEPIK SO CHATGPT DOES NOT DOWNSCALE JPG TO 2048×1152!"
              style={{
                background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                borderColor: "#38bdf8",
              }}
            >
              ⬇ ZIP (JPG+EPS)
            </button>
            <button
              className="btn"
              onClick={() => exportRaster("png")}
              title="DOWNLOAD HIGH-RES 30+ MP PNG"
            >
              PNG
            </button>
            <button
              className="btn"
              onClick={() => verifyInputRef.current?.click()}
              title="VERIFY TRUE BINARY SOF0 / IHDR RESOLUTION & MB SIZE OF ANY DOWNLOADED FILE"
              style={{ borderColor: "#10b981", color: "#10b981" }}
            >
              🔍 CHECK FILE
            </button>
          </div>

          <button
            className="btn"
            disabled={fabricTracing}
            onClick={() => fabricInputRef.current?.click()}
            title="UPLOAD ANY IMAGE TO CONVERT INTO AN EDITABLE ILLUSTRATOR VECTOR PATTERN"
            style={{ borderColor: "var(--ac)", color: "var(--ac)" }}
          >
            {fabricTracing ? "SCANNING..." : "📸 + IMAGE"}
          </button>
          <button
            className="btn"
            onClick={() => {
              setCodeInput(TEMPLATE);
              setCodeMsg({ text: "", err: false });
              setCodeModalOpen(true);
            }}
            title="CREATE CUSTOM PROCEDURAL PATTERN"
          >
            + CODE
          </button>
          <button
            className="btn icon-btn"
            onClick={() => setKeyModalOpen(true)}
            title="KEYBOARD SHORTCUTS (?)"
          >
            ?
          </button>
          <button
            className="btn icon-btn"
            onClick={toggleTheme}
            title="SWITCH DARK / LIGHT THEME"
          >
            {theme === "light" ? "☽" : "☀"}
          </button>
        </div>
      </header>

      {/* 3-COLUMN STUDIO BODY */}
      <div className="studio-body">
        {/* LEFT COLUMN: PARAMETER INSPECTOR */}
        <aside className="inspector-panel">
          <div className="top-tabs">
            <button
              className={`top-tab ${activeTab === "pattern" ? "on" : ""}`}
              onClick={() => setActiveTab("pattern")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
              1 · PATTERN
            </button>
            <button
              className={`top-tab ${activeTab === "colour" ? "on" : ""}`}
              onClick={() => setActiveTab("colour")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="10.5" r="2.5" />
                <circle cx="8.5" cy="7.5" r="2.5" />
                <circle cx="6.5" cy="12.5" r="2.5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6z" />
              </svg>
              2 · COLOUR
            </button>
            <button
              className={`top-tab ${activeTab === "surface" ? "on" : ""}`}
              onClick={() => setActiveTab("surface")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
              </svg>
              3 · BG &amp; TEX
            </button>
            <button
              className={`top-tab ${activeTab === "export" ? "on" : ""}`}
              onClick={() => setActiveTab("export")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              4 · BATCH/EXP
            </button>
          </div>

          <div className="inspector-scroll">
            {/* TAB 1: PATTERN CONTROLS */}
            {activeTab === "pattern" && (
              <>
                <div className="sec">
                  <div className="sh">
                    <span
                      className="st"
                      style={{ fontSize: "12px", color: "var(--tx)" }}
                      title={`#${pad2(curModeIdx + 1)} · ${curMode.name}`}
                    >
                      #{pad2(curModeIdx + 1)} · {curMode.name}
                    </span>
                    <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
                      <button
                        className="ib"
                        title="LOCK COLOURS WHEN RANDOMIZING"
                        onClick={() => setRandLocked((l) => !l)}
                        style={{
                          fontSize: "10px",
                          fontWeight: 800,
                          color: randLocked ? "var(--ac)" : undefined,
                          borderColor: randLocked ? "var(--ac)" : undefined,
                        }}
                      >
                        {randLocked ? "🔒 LOCKED" : "🔓 FREE"}
                      </button>
                      <button
                        className="ib"
                        title="RESET PATTERN DEFAULTS"
                        onClick={() => {
                          setMP((prev) => {
                            const resetQ: Record<string, any> = {};
                            curMode.params.forEach((p) => {
                              resetQ[p.k] = p.def;
                            });
                            return { ...prev, [curMode.id]: resetQ };
                          });
                          selectMode(curMode);
                        }}
                      >
                        ↺
                      </button>
                    </div>
                  </div>

                  {curMode.cat === "Poster" && (
                    <div
                      style={{
                        background: "var(--p2)",
                        border: "1px solid var(--ac)",
                        borderRadius: "8px",
                        padding: "9px 10px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "8px",
                          gap: "6px",
                        }}
                      >
                        <span className="st" style={{ fontSize: "10px" }}>
                          🎨 {MASTER_POSTER_MODES.length} MICROSTOCK POSTER SETS
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <button
                            type="button"
                            className="ib"
                            style={{
                              fontSize: "9px",
                              padding: "2px 6px",
                              height: "22px",
                              borderColor:
                                Math.round(+(curParams.variant ?? 0)) === 0
                                  ? "var(--ac)"
                                  : undefined,
                              color:
                                Math.round(+(curParams.variant ?? 0)) === 0
                                  ? "var(--ac)"
                                  : undefined,
                            }}
                            onClick={() =>
                              setMP((prev) => ({
                                ...prev,
                                [curMode.id]: { ...(prev[curMode.id] || {}), variant: 0 },
                              }))
                            }
                            title="RESET TO 100% EXACT HABUHU REFERENCE POSTER SET (VARIANT 0)"
                          >
                            ↺ HABUHU REF
                          </button>
                          <button
                            type="button"
                            className={`chk-pill ${
                              (curParams.showText ?? true) !== false &&
                              (curParams.showText ?? true) !== "false"
                                ? "on"
                                : ""
                            }`}
                            onClick={togglePosterTextCheck}
                            title="CHECKMARK ON = SHOW OUTLINED VECTOR POSTER TEXT · OFF = NO TEXT"
                          >
                            <span className="chk-box">✓</span>
                            <span>POSTER TEXT</span>
                          </button>
                        </div>
                      </div>

                      {/* 112 POSTER SETS DROPDOWN + PREV/NEXT BUTTONS */}
                      <div style={{ display: "flex", gap: "4px", marginBottom: "7px" }}>
                        <select
                          value={curMode.id}
                          onChange={(e) => selectPosterReferenceSet(e.target.value)}
                          style={{
                            flex: 1,
                            height: "26px",
                            fontSize: "10px",
                            fontWeight: 800,
                            borderRadius: "6px",
                            border: "1px solid var(--ac)",
                            background: "var(--p)",
                            color: "var(--tx)",
                          }}
                        >
                          {MASTER_POSTER_MODES.map((pm) => (
                            <option key={pm.id} value={pm.id}>
                              {pm.name.toUpperCase()}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          className="ib"
                          style={{ height: "26px", padding: "0 7px", fontSize: "10px" }}
                          title="PREVIOUS POSTER SET"
                          onClick={() => {
                            const idx = MASTER_POSTER_MODES.findIndex((x) => x.id === curMode.id);
                            const prevIdx =
                              (idx - 1 + MASTER_POSTER_MODES.length) % MASTER_POSTER_MODES.length;
                            selectPosterReferenceSet(MASTER_POSTER_MODES[prevIdx].id);
                          }}
                        >
                          ◀
                        </button>
                        <button
                          type="button"
                          className="ib"
                          style={{ height: "26px", padding: "0 7px", fontSize: "10px" }}
                          title="NEXT POSTER SET"
                          onClick={() => {
                            const idx = MASTER_POSTER_MODES.findIndex((x) => x.id === curMode.id);
                            const nextIdx = (idx + 1) % MASTER_POSTER_MODES.length;
                            selectPosterReferenceSet(MASTER_POSTER_MODES[nextIdx].id);
                          }}
                        >
                          ▶
                        </button>
                      </div>

                      {/* QUICK 33 HABUHU REFERENCE SETS GRID (SETS 1–33 INCLUDING 2027 NEW YEAR & CHRISTMAS SETS) */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "3px",
                          marginBottom: "8px",
                        }}
                      >
                        {MASTER_POSTER_MODES.slice(0, 33).map((pm, idx) => (
                          <button
                            key={pm.id}
                            type="button"
                            className="btn"
                            style={{
                              minHeight: "22px",
                              padding: "2px 3px",
                              fontSize: "8.5px",
                              justifyContent: "center",
                              borderColor: curMode.id === pm.id ? "var(--ac)" : undefined,
                              background:
                                curMode.id === pm.id ? "rgba(16, 185, 129, 0.16)" : undefined,
                              color: curMode.id === pm.id ? "var(--ac)" : undefined,
                            }}
                            onClick={() => selectPosterReferenceSet(pm.id)}
                            title={pm.name.toUpperCase()}
                          >
                            REF {idx + 1} ({pm.defPcs}P)
                          </button>
                        ))}
                      </div>

                      {/* HOW MANY POSTERS ON CANVAS: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 PCS */}
                      <div
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "var(--mu)",
                          marginBottom: "4px",
                        }}
                      >
                        CANVAS POSTER QUANTITY (1–12 PCS):
                      </div>
                      <div
                        className="seg"
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(4, 1fr)",
                          gap: "3px",
                          marginBottom: "7px",
                        }}
                      >
                        {[
                          { k: "1", l: "1 PCS" },
                          { k: "2", l: "2 PCS" },
                          { k: "3", l: "3 PCS" },
                          { k: "4", l: "4 PCS" },
                          { k: "5", l: "5 PCS" },
                          { k: "6", l: "6 PCS" },
                          { k: "8", l: "8 PCS" },
                          { k: "9", l: "9 PCS" },
                          { k: "10", l: "10 PCS" },
                          { k: "12", l: "12 PCS" },
                          { k: "4grid", l: "2×2" },
                          { k: "6grid", l: "3×2" },
                        ].map((item) => (
                          <button
                            key={item.k}
                            type="button"
                            className={String(curParams.pcs || "4") === item.k ? "on" : ""}
                            onClick={() => switchPosterSetPcs(item.k)}
                          >
                            {item.l}
                          </button>
                        ))}
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
                        <button
                          type="button"
                          className="btn pri"
                          style={{ minHeight: "27px", fontSize: "9.5px", padding: "4px 6px" }}
                          onClick={() => smartRandom(true, "current", true)}
                          title="GENERATE NEW VARIATION OF THIS SELECTED POSTER SET (1-TIME BURN)"
                        >
                          ✦ NEW VARIATION (THIS SET)
                        </button>
                        <button
                          type="button"
                          className="btn"
                          style={{
                            minHeight: "27px",
                            fontSize: "9.5px",
                            padding: "4px 6px",
                            borderColor: "var(--ac)",
                            color: "var(--ac)",
                          }}
                          onClick={() => {
                            const idx = MASTER_POSTER_MODES.findIndex((x) => x.id === curMode.id);
                            const nextIdx = (idx + 1) % MASTER_POSTER_MODES.length;
                            selectPosterReferenceSet(MASTER_POSTER_MODES[nextIdx].id);
                          }}
                          title="SWITCH TO NEXT POSTER SET IN COLLECTION"
                        >
                          ✦ NEXT POSTER SET ▶
                        </button>
                      </div>
                    </div>
                  )}

                  {curMode.cat === "Lighting" && (
                    <div
                      style={{
                        background: "var(--p2)",
                        border: "1px solid #f59e0b",
                        borderRadius: "8px",
                        padding: "9px 10px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "8px",
                          gap: "6px",
                        }}
                      >
                        <span className="st" style={{ fontSize: "10px", color: "#fbbf24" }}>
                          ✨ {MASTER_LIGHTING_MODES.length} ORIGINAL LIGHTING SETS
                        </span>
                        <button
                          type="button"
                          className="ib"
                          style={{
                            fontSize: "9px",
                            padding: "2px 6px",
                            height: "22px",
                            borderColor: "#f59e0b",
                            color: "#fbbf24",
                          }}
                          onClick={() => selectLightingReferenceSet(curMode.id)}
                          title="RESET TO HABUHU ORIGINAL LIGHTING PRESET"
                        >
                          ↺ HABUHU REF
                        </button>
                      </div>

                      {/* 108 LIGHTING DESIGNS DROPDOWN + PREV/NEXT */}
                      <div style={{ display: "flex", gap: "4px", marginBottom: "7px" }}>
                        <select
                          value={curMode.id}
                          onChange={(e) => selectLightingReferenceSet(e.target.value)}
                          style={{
                            flex: 1,
                            height: "26px",
                            fontSize: "10px",
                            fontWeight: 800,
                            borderRadius: "6px",
                            border: "1px solid #f59e0b",
                            background: "var(--p)",
                            color: "var(--tx)",
                          }}
                        >
                          {MASTER_LIGHTING_MODES.map((lm) => (
                            <option key={lm.id} value={lm.id}>
                              {lm.name.toUpperCase()}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          className="ib"
                          style={{ height: "26px", padding: "0 7px", fontSize: "10px" }}
                          title="PREVIOUS LIGHTING DESIGN"
                          onClick={() => {
                            const idx = MASTER_LIGHTING_MODES.findIndex((x) => x.id === curMode.id);
                            const prevIdx =
                              (idx - 1 + MASTER_LIGHTING_MODES.length) %
                              MASTER_LIGHTING_MODES.length;
                            selectLightingReferenceSet(MASTER_LIGHTING_MODES[prevIdx].id);
                          }}
                        >
                          ◀
                        </button>
                        <button
                          type="button"
                          className="ib"
                          style={{ height: "26px", padding: "0 7px", fontSize: "10px" }}
                          title="NEXT LIGHTING DESIGN"
                          onClick={() => {
                            const idx = MASTER_LIGHTING_MODES.findIndex((x) => x.id === curMode.id);
                            const nextIdx = (idx + 1) % MASTER_LIGHTING_MODES.length;
                            selectLightingReferenceSet(MASTER_LIGHTING_MODES[nextIdx].id);
                          }}
                        >
                          ▶
                        </button>
                      </div>

                      {/* 3 BACKGROUND MODES: 50/50 SPLIT (BLACK+TRANSPARENT) | 100% TRANSPARENT | 100% BLACK BG */}
                      <div
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "var(--mu)",
                          marginBottom: "4px",
                        }}
                      >
                        ARTBOARD BACKGROUND MODE (SPLIT / TRANSPARENT / BLACK):
                      </div>
                      <div
                        className="seg"
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "3px",
                          marginBottom: "8px",
                        }}
                      >
                        {[
                          {
                            k: "split",
                            l: "◐ 50/50 SPLIT",
                            t: "50% BLACK LEFT + 50% TRANSPARENT RIGHT ON SAME ARTBOARD",
                          },
                          {
                            k: "transparent",
                            l: "◌ TRANSPARENT",
                            t: "100% TRANSPARENT BACKGROUND (NO BG)",
                          },
                          {
                            k: "black",
                            l: "◼ BLACK BG",
                            t: "100% PITCH BLACK BACKGROUND (#000000)",
                          },
                        ].map((bm) => (
                          <button
                            key={bm.k}
                            type="button"
                            className={
                              String(curParams.bgMode || "split") === bm.k ? "on" : ""
                            }
                            onClick={() =>
                              switchLightingBgMode(bm.k as "split" | "transparent" | "black")
                            }
                            title={bm.t}
                          >
                            {bm.l}
                          </button>
                        ))}
                      </div>

                      {/* LIGHTING PIECE COUNT: 1 / DUAL, 4, 2x2, 6, 3x2, 8, 9, 12 PCS */}
                      <div
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "var(--mu)",
                          marginBottom: "4px",
                        }}
                      >
                        LIGHTING KIT PIECES ON ARTBOARD:
                      </div>
                      <div
                        className="seg"
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(4, 1fr)",
                          gap: "3px",
                        }}
                      >
                        {[
                          { k: "1", l: "1/DUAL" },
                          { k: "4", l: "4 PCS" },
                          { k: "4grid", l: "2×2" },
                          { k: "6", l: "6 PCS" },
                          { k: "6grid", l: "3×2" },
                          { k: "8", l: "8 PCS" },
                          { k: "9", l: "9 PCS" },
                          { k: "12", l: "12 PCS" },
                        ].map((item) => (
                          <button
                            key={item.k}
                            type="button"
                            className={String(curParams.pcs || "1") === item.k ? "on" : ""}
                            onClick={() => switchLightingSetPcs(item.k)}
                          >
                            {item.l}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {curMode.cat === "Calendar" && (
                    <div
                      style={{
                        background: "var(--p2)",
                        border: "1px solid #38bdf8",
                        borderRadius: "8px",
                        padding: "9px 10px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "8px",
                          gap: "6px",
                        }}
                      >
                        <span className="st" style={{ fontSize: "10px", color: "#38bdf8" }}>
                          📅 {MASTER_CALENDAR_MODES.length} MICROSTOCK CALENDAR SETS
                        </span>
                        <button
                          type="button"
                          className="ib"
                          style={{
                            fontSize: "9px",
                            padding: "2px 6px",
                            height: "22px",
                            borderColor: "#38bdf8",
                            color: "#38bdf8",
                          }}
                          onClick={() => selectCalendarSet(curMode.id)}
                          title="RESET CALENDAR TO ORIGINAL PRESET"
                        >
                          ↺ RESET CAL
                        </button>
                      </div>

                      {/* 60 CALENDAR DESIGNS DROPDOWN + PREV/NEXT */}
                      <div style={{ display: "flex", gap: "4px", marginBottom: "7px" }}>
                        <select
                          value={curMode.id}
                          onChange={(e) => selectCalendarSet(e.target.value)}
                          style={{
                            flex: 1,
                            height: "26px",
                            fontSize: "10px",
                            fontWeight: 800,
                            borderRadius: "6px",
                            border: "1px solid #38bdf8",
                            background: "var(--p)",
                            color: "var(--tx)",
                          }}
                        >
                          {MASTER_CALENDAR_MODES.map((cm) => (
                            <option key={cm.id} value={cm.id}>
                              {cm.name.toUpperCase()}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          className="ib"
                          style={{ height: "26px", padding: "0 7px", fontSize: "10px" }}
                          title="PREVIOUS CALENDAR DESIGN"
                          onClick={() => {
                            const idx = MASTER_CALENDAR_MODES.findIndex((x) => x.id === curMode.id);
                            const prevIdx =
                              (idx - 1 + MASTER_CALENDAR_MODES.length) %
                              MASTER_CALENDAR_MODES.length;
                            selectCalendarSet(MASTER_CALENDAR_MODES[prevIdx].id);
                          }}
                        >
                          ◀
                        </button>
                        <button
                          type="button"
                          className="ib"
                          style={{ height: "26px", padding: "0 7px", fontSize: "10px" }}
                          title="NEXT CALENDAR DESIGN"
                          onClick={() => {
                            const idx = MASTER_CALENDAR_MODES.findIndex((x) => x.id === curMode.id);
                            const nextIdx = (idx + 1) % MASTER_CALENDAR_MODES.length;
                            selectCalendarSet(MASTER_CALENDAR_MODES[nextIdx].id);
                          }}
                        >
                          ▶
                        </button>
                      </div>

                      {/* CALENDAR YEAR SELECTOR (2025 - 2032) */}
                      <div
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "var(--mu)",
                          marginBottom: "4px",
                        }}
                      >
                        SELECT YEAR (2025–2032 REAL GREGORIAN DATES):
                      </div>
                      <div
                        className="seg"
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(4, 1fr)",
                          gap: "3px",
                          marginBottom: "7px",
                        }}
                      >
                        {["2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032"].map(
                          (yr) => (
                            <button
                              key={yr}
                              type="button"
                              className={String(curParams.year || "2026") === yr ? "on" : ""}
                              onClick={() => switchCalendarYear(yr)}
                            >
                              {yr}
                            </button>
                          )
                        )}
                      </div>

                      {/* CALENDAR LAYOUT MODE (12 MONTHS / 1 MONTH / 3M / 4M / 6M / WEEKLY PLANNER) */}
                      <div
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "var(--mu)",
                          marginBottom: "4px",
                        }}
                      >
                        CALENDAR LAYOUT (12 MONTHS / MONTHLY / WEEKLY PLANNER):
                      </div>
                      <div
                        className="seg"
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "3px",
                          marginBottom: "7px",
                        }}
                      >
                        {[
                          { k: "12m", l: "12M YEAR (4×3)" },
                          { k: "12m_3x4", l: "12M WALL (3×4)" },
                          { k: "1m", l: "1 MONTH PAGE" },
                          { k: "3m", l: "3M QUARTER" },
                          { k: "4m", l: "4M SEASON" },
                          { k: "6m", l: "6M HALF-YR" },
                          { k: "week", l: "7-DAY WEEK" },
                        ].map((vm) => (
                          <button
                            key={vm.k}
                            type="button"
                            className={String(curParams.viewMode || "12m") === vm.k ? "on" : ""}
                            onClick={() => switchCalendarViewMode(vm.k)}
                          >
                            {vm.l}
                          </button>
                        ))}
                      </div>

                      {/* ACTIVE / STARTING MONTH (JAN - DEC) */}
                      <div
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "var(--mu)",
                          marginBottom: "4px",
                        }}
                      >
                        SELECT MONTH (JAN–DEC FOR 1M / 3M / 6M / WEEK):
                      </div>
                      <div
                        className="seg"
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(6, 1fr)",
                          gap: "3px",
                          marginBottom: "7px",
                        }}
                      >
                        {[
                          ["1", "JAN"],
                          ["2", "FEB"],
                          ["3", "MAR"],
                          ["4", "APR"],
                          ["5", "MAY"],
                          ["6", "JUN"],
                          ["7", "JUL"],
                          ["8", "AUG"],
                          ["9", "SEP"],
                          ["10", "OCT"],
                          ["11", "NOV"],
                          ["12", "DEC"],
                        ].map(([mVal, mLab]) => (
                          <button
                            key={mVal}
                            type="button"
                            className={String(curParams.month || "1") === mVal ? "on" : ""}
                            onClick={() => switchCalendarMonth(mVal)}
                          >
                            {mLab}
                          </button>
                        ))}
                      </div>

                      {/* WEEK STARTS ON (SUNDAY / MONDAY / SATURDAY) */}
                      <div
                        style={{
                          fontSize: "9px",
                          fontWeight: 800,
                          color: "var(--mu)",
                          marginBottom: "4px",
                        }}
                      >
                        WEEK STARTS ON (SUN / MON / SAT):
                      </div>
                      <div
                        className="seg"
                        style={{
                          width: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "3px",
                          marginBottom: "8px",
                        }}
                      >
                        {[
                          { k: "sun", l: "SUNDAY FIRST" },
                          { k: "mon", l: "MONDAY FIRST" },
                          { k: "sat", l: "SATURDAY FIRST" },
                        ].map((ws) => (
                          <button
                            key={ws.k}
                            type="button"
                            className={String(curParams.weekStart || "sun") === ws.k ? "on" : ""}
                            onClick={() =>
                              switchCalendarWeekStart(ws.k as "sun" | "mon" | "sat")
                            }
                          >
                            {ws.l}
                          </button>
                        ))}
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
                        <button
                          type="button"
                          className="btn pri"
                          style={{ minHeight: "27px", fontSize: "9.5px", padding: "4px 6px" }}
                          onClick={() => smartRandom(true, "current", true)}
                          title="CHANGE THIS CALENDAR'S ARTWORK & COLOUR HARMONY ON EVERY CLICK"
                        >
                          ✦ NEW VARIATION (THIS CAL)
                        </button>
                        <button
                          type="button"
                          className="btn"
                          style={{
                            minHeight: "27px",
                            fontSize: "9.5px",
                            padding: "4px 6px",
                            borderColor: "#38bdf8",
                            color: "#38bdf8",
                          }}
                          onClick={() => smartRandom(true, "current", false)}
                          title="SWITCH TO NEXT UNIQUE CALENDAR TEMPLATE & GENERATE NEW DESIGN"
                        >
                          🎲 NEXT CALENDAR STYLE ▶
                        </button>
                      </div>
                    </div>
                  )}



                  {curMode.params.map((p) => {
                    const val = curParams[p.k] ?? p.def;
                    if (p.type === "check") {
                      const isChecked = Boolean(val) && val !== "false";
                      return (
                        <div className="r" key={p.k}>
                          <label>{p.l}</label>
                          <button
                            type="button"
                            className={`chk-pill ${isChecked ? "on" : ""}`}
                            onClick={() => {
                              const nextVal = !isChecked;
                              setMP((prev) => ({
                                ...prev,
                                [curMode.id]: { ...prev[curMode.id], [p.k]: nextVal },
                              }));
                            }}
                          >
                            <span className="chk-box">✓</span>
                            <span>{isChecked ? "CHECKED (ON)" : "OFF"}</span>
                          </button>
                        </div>
                      );
                    }
                    if (p.type === "select" && p.opts) {
                      return (
                        <div className="r" key={p.k}>
                          <label>{p.l}</label>
                          <select
                            value={val}
                            onChange={(e) => {
                              const v = e.target.value;
                              setMP((prev) => ({
                                ...prev,
                                [curMode.id]: { ...prev[curMode.id], [p.k]: v },
                              }));
                            }}
                          >
                            {p.opts.map(([ov, ol]) => (
                              <option key={ov} value={ov}>
                                {ol.toUpperCase()}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    }
                    return (
                      <div className="r range-row" key={p.k}>
                        <label>{p.l}</label>
                        <input
                          type="range"
                          min={p.min}
                          max={p.max}
                          step={p.step || 1}
                          value={val}
                          onChange={(e) => {
                            const v = +e.target.value;
                            setMP((prev) => ({
                              ...prev,
                              [curMode.id]: { ...prev[curMode.id], [p.k]: v },
                            }));
                          }}
                        />
                        <span className="v">{val}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="sec">
                  <div className="sh">
                    <span className="st">ILLUSTRATOR ARTBOARD &amp; CANVAS MODE</span>
                  </div>
                  <div className="r">
                    <label>CANVAS / SVG MODE</label>
                    <select
                      value={P.svgStructure || "separable"}
                      onChange={(e) => {
                        const modeVal = e.target.value as "separable" | "unified";
                        setP((p) => ({
                          ...p,
                          svgStructure: modeVal,
                          view: modeVal === "unified" ? 1 : p.view,
                        }));
                      }}
                    >
                      <option value="separable">1 · SEPARABLE PARTS (আলাদা আলাদা অংশ)</option>
                      <option value="unified">2 · PLAIN UNIFIED ONE-PIECE (একসাথে প্লেন)</option>
                    </select>
                  </div>
                  <div className="r">
                    <label>PLAIN BG GRAIN &amp; TEXTURE</label>
                    <select
                      value={P.bd}
                      onChange={(e) => {
                        const nextBd = e.target.value as SurfaceTextureMode;
                        setP((p) => ({
                          ...p,
                          bd: nextBd,
                          bdn: nextBd === "none" ? p.bdn : Math.max(12, p.bdn || 18),
                          bdo: nextBd === "none" ? p.bdo : Math.max(35, p.bdo || 48),
                        }));
                      }}
                    >
                      <option value="none">NO GLOBAL GRAIN OVERLAY (CLEAN)</option>
                      <option value="sandgrain">FINE SAND &amp; KRAFT GRAIN (GRAINY EFFECT)</option>
                      <option value="mattegrain">MATTE STUDIO STIPPLE GRAIN (GRAINY)</option>
                      <option value="velvetgrain">VELVET &amp; FELT MICRO-FLOCK GRAIN</option>
                      <option value="paperfiber">ARTISAN PAPER FIBERS &amp; SPECKS</option>
                      <option value="grain">ORGANIC MICRO STIPPLE GRAIN</option>
                      <option value="brushedmetal">BRUSHED SATIN METALLIC GRAIN</option>
                      <option value="woodgrain">NATURAL WOOD TIMBER GRAIN</option>
                      <option value="linen">WOVEN BELGIAN LINEN TEXTURE</option>
                      <option value="silk">BRUSHED RAW SILK SHANTUNG</option>
                      <option value="canvas">ARTIST COTTON CANVAS WEAVE</option>
                      <option value="marble">CARRARA MARBLE VEINS</option>
                      <option value="goldfoil">METALLIC GOLD FOIL FLECKS</option>
                      <option value="halftone">ENGRAVING HALFTONE DOTS</option>
                    </select>
                  </div>
                  {P.bd !== "none" && (
                    <>
                      <div className="r range-row">
                        <label>GRAIN / TEXTURE INTENSITY %</label>
                        <input
                          type="range"
                          min={10}
                          max={90}
                          value={P.bdo}
                          onChange={(e) => setP((p) => ({ ...p, bdo: +e.target.value }))}
                        />
                        <span className="v">{P.bdo}%</span>
                      </div>
                      <div className="r range-row">
                        <label>GRAIN / TEXTURE DENSITY</label>
                        <input
                          type="range"
                          min={4}
                          max={32}
                          step={2}
                          value={P.bdn}
                          onChange={(e) => setP((p) => ({ ...p, bdn: +e.target.value }))}
                        />
                        <span className="v">{P.bdn}</span>
                      </div>
                    </>
                  )}
                  <div className="r">
                    <label>FULL-BLEED EDGE-TO-EDGE (NO GAP)</label>
                    <label className="sw">
                      <input
                        type="checkbox"
                        checked={P.safeEdge !== true}
                        onChange={(e) => setP((p) => ({ ...p, safeEdge: !e.target.checked }))}
                      />
                      <i></i>
                    </label>
                  </div>
                  <div className="r">
                    <label>ARTBOARD PRESET</label>
                    <select
                      value={`${outDims.w}x${outDims.h}`}
                      onChange={(e) => {
                        const preset = ILLUSTRATOR_ARTBOARD_PRESETS.find(
                          (pr) => `${pr.w}x${pr.h}` === e.target.value
                        );
                        if (preset) {
                          setP((p) => ({
                            ...p,
                            ratio: preset.ratio,
                            artW: preset.w,
                            artH: preset.h,
                          }));
                        }
                      }}
                    >
                      {ILLUSTRATOR_ARTBOARD_PRESETS.map((pr) => (
                        <option key={`${pr.w}x${pr.h}`} value={`${pr.w}x${pr.h}`}>
                          {pr.label}
                        </option>
                      ))}
                      {!ILLUSTRATOR_ARTBOARD_PRESETS.some(
                        (pr) => pr.w === outDims.w && pr.h === outDims.h
                      ) && (
                        <option value={`${outDims.w}x${outDims.h}`}>
                          CUSTOM ({outDims.w} × {outDims.h} PX)
                        </option>
                      )}
                    </select>
                  </div>
                  <div className="r">
                    <label>ARTBOARD W × H (PX)</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <input
                        type="number"
                        min={3600}
                        max={12000}
                        step={100}
                        value={outDims.w}
                        onChange={(e) => {
                          const w = Math.max(3600, Math.min(12000, +e.target.value || 5000));
                          setP((p) => ({ ...p, artW: w, artH: outDims.h }));
                        }}
                        style={{ width: "68px" }}
                      />
                      <span style={{ fontSize: "10px", color: "var(--mu)" }}>×</span>
                      <input
                        type="number"
                        min={3600}
                        max={12000}
                        step={100}
                        value={outDims.h}
                        onChange={(e) => {
                          const h = Math.max(3600, Math.min(12000, +e.target.value || 5000));
                          setP((p) => ({ ...p, artW: outDims.w, artH: h }));
                        }}
                        style={{ width: "68px" }}
                      />
                    </div>
                  </div>
                  <div className="r">
                    <label>CANVAS RATIO</label>
                    <select
                      value={P.ratio || "1:1"}
                      onChange={(e) => {
                        const r = e.target.value as CanvasRatio;
                        const d = getRatioDims(Math.max(5000, +P.px || 5000), r);
                        setP((p) => ({ ...p, ratio: r, artW: d.w, artH: d.h }));
                      }}
                    >
                      {RATIO_LIST.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="r">
                    <label>TILE SYMMETRY</label>
                    <select
                      value={P.mx}
                      onChange={(e) =>
                        setP((p) => ({ ...p, mx: e.target.value as PatternState["mx"] }))
                      }
                    >
                      <option value="none">ORIGINAL REPEAT</option>
                      <option value="mirror">4-WAY KALEIDOSCOPE</option>
                      <option value="rot">PINWHEEL ROTATION</option>
                      <option value="double">LAYERED DOUBLE</option>
                      <option value="patch">PATCHWORK QUILT</option>
                      <option value="invert">CHECKERBOARD INVERT</option>
                    </select>
                  </div>
                  <div className="two" style={{ marginTop: "8px" }}>
                    <button className="btn" onClick={() => smartRandom(false, "current", true)}>
                      SHUFFLE SHAPES
                    </button>
                    <button className="btn" onClick={() => smartRandom(true, "mix", true)}>
                      REMIX + GRAD/TEX
                    </button>
                  </div>
                  <button
                    className="btn pri"
                    style={{ width: "100%", marginTop: "8px", justifyContent: "center" }}
                    onClick={() => setBatchModalOpen(true)}
                  >
                    ⚡ AUTO-BATCH THIS STYLE (#{pad2(curModeIdx + 1)})
                  </button>
                  <button
                    className="btn"
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      justifyContent: "center",
                      borderColor: "var(--ac)",
                      color: "var(--ac)",
                    }}
                    disabled={fabricTracing}
                    onClick={() => fabricInputRef.current?.click()}
                  >
                    {fabricTracing
                      ? "SCANNING FABRIC PHOTO..."
                      : "📸 + ADD FABRIC PHOTO TO PATTERN VAULT"}
                  </button>
                  <div className="note" style={{ marginTop: "10px" }}>
                    {randNote}
                  </div>
                </div>
              </>
            )}

            {/* TAB 2: COLOUR CONTROLS */}
            {activeTab === "colour" && (
              <>
                <div className="sec">
                  <div className="sh">
                    <span className="st">CURATED PALETTES ({PALS.length})</span>
                  </div>
                  <div className="palw">
                    <button
                      type="button"
                      id="palBtn"
                      onClick={() => setPalOpen((o) => !o)}
                    >
                      <span className="sws">
                        {[P.bg, ...[P.c0, P.c1, P.c2, P.c3, P.c4].slice(0, 4)].map((c, i) => (
                          <i key={i} style={{ background: c }} />
                        ))}
                      </span>
                      <span className="nm">{palLabel}</span>
                      <span className="ar">▾</span>
                    </button>
                    {palOpen && (
                      <div id="palMenu" className="open">
                        {PALS.map((p, i) => (
                          <div
                            key={p[0]}
                            className={`po ${i === palIdx ? "on" : ""}`}
                            onClick={() => applyPal(i)}
                          >
                            <span className="sws">
                              {[p[1], ...p[3].slice(0, 4)].map((c, idx) => (
                                <i key={idx} style={{ background: c }} />
                              ))}
                            </span>
                            <span>{p[0].toUpperCase()}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="cols" style={{ marginTop: "14px" }}>
                    {(["bg", "ink", "c0", "c1", "c2", "c3", "c4"] as const).map((k, idx) => {
                      const labels = ["BG", "INK", "C1", "C2", "C3", "C4", "C5"];
                      const off = idx >= 2 && idx - 2 >= P.ncol;
                      return (
                        <div className={`cs ${off ? "off" : ""}`} key={k}>
                          <input
                            type="color"
                            value={P[k]}
                            onChange={(e) => setP((p) => ({ ...p, [k]: e.target.value }))}
                          />
                          <span>{labels[idx]}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "var(--mu)",
                        marginBottom: "6px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      QUICK 1-CLICK BACKGROUND COLOUR (WHITE / BLACK / STUDIO)
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "5px",
                      }}
                    >
                      {[
                        { label: "⬛ BLACK", hex: "#000000" },
                        { label: "⬜ WHITE", hex: "#FFFFFF" },
                        { label: "◽ LIGHT", hex: "#E5E7EB" },
                        { label: "◾ DARK", hex: "#1E293B" },
                      ].map((preset) => (
                        <button
                          key={preset.hex}
                          type="button"
                          className={`btn ${P.bg.toLowerCase() === preset.hex.toLowerCase() ? "pri" : ""}`}
                          style={{
                            padding: "5px 4px",
                            fontSize: "10px",
                            justifyContent: "center",
                          }}
                          onClick={() =>
                            setP((p) => ({
                              ...p,
                              bg: preset.hex,
                              bg2: mixCol(preset.hex, p.c0 || "#8b5cf6", 0.35),
                            }))
                          }
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="r range-row" style={{ marginTop: "14px" }}>
                    <label>ACTIVE COLOURS</label>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={P.ncol}
                      onChange={(e) => setP((p) => ({ ...p, ncol: +e.target.value }))}
                    />
                    <span className="v">{P.ncol}</span>
                  </div>

                  <div className="two" style={{ marginTop: "10px" }}>
                    <button
                      className="btn"
                      onClick={() => {
                        const arr = [P.c0, P.c1, P.c2, P.c3, P.c4];
                        for (let i = arr.length - 1; i > 0; i--) {
                          const j = Math.floor(Math.random() * (i + 1));
                          [arr[i], arr[j]] = [arr[j], arr[i]];
                        }
                        const [ink, fixedCols] = fixContrast(P.bg, P.ink, arr);
                        setP((p) => ({
                          ...p,
                          ink,
                          c0: fixedCols[0],
                          c1: fixedCols[1],
                          c2: fixedCols[2],
                          c3: fixedCols[3],
                          c4: fixedCols[4],
                        }));
                      }}
                    >
                      ⇄ SHUFFLE
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        const arr = [P.c0, P.c1, P.c2, P.c3, P.c4];
                        const k = Math.floor(Math.random() * P.ncol);
                        const newBg = arr[k];
                        arr[k] = P.bg;
                        const [ink, fixedCols] = fixContrast(newBg, P.ink, arr);
                        setP((p) => ({
                          ...p,
                          bg: newBg,
                          bg2: mixCol(newBg, fixedCols[0], 0.35),
                          ink,
                          c0: fixedCols[0],
                          c1: fixedCols[1],
                          c2: fixedCols[2],
                          c3: fixedCols[3],
                          c4: fixedCols[4],
                        }));
                      }}
                    >
                      ◐ SWAP BG
                    </button>
                  </div>

                  <button
                    className="btn"
                    style={{ width: "100%", marginTop: "8px", justifyContent: "center" }}
                    onClick={() => {
                      const R = Math.random;
                      const h = R() * 360;
                      const dark = R() < 0.35;
                      const sch = [
                        [0, 30, 60, 180, 210],
                        [0, 140, 220, 45, 180],
                        [0, 90, 180, 270, 45],
                      ][Math.floor(R() * 3)];
                      const rawCols = sch.map((o, i) =>
                        hsl(h + o, 55 + R() * 35, dark ? 55 + R() * 20 : i === 3 ? 74 : 42 + R() * 26)
                      );
                      const bg = dark ? hsl(h, 35, 9) : hsl(h + 15, 35, 95);
                      const rawInk = dark ? "#f8fafc" : hsl(h, 35, 12);
                      const [ink, cols] = fixContrast(bg, rawInk, rawCols);
                      setPalLabel("PROCEDURAL HARMONY");
                      setP((p) => ({
                        ...p,
                        bg,
                        bg2: mixCol(bg, cols[0], 0.36),
                        ink,
                        c0: cols[0],
                        c1: cols[1],
                        c2: cols[2],
                        c3: cols[3],
                        c4: cols[4],
                      }));
                    }}
                  >
                    ✦ GENERATE HARMONY PALETTE
                  </button>
                </div>

                <div className="sec">
                  <div className="sh">
                    <span className="st">RENDERING &amp; INK STROKE</span>
                  </div>
                  <div className="r">
                    <label>VECTOR FINISH</label>
                    <div className="seg">
                      {(["flat", "both", "line"] as const).map((st) => (
                        <button
                          key={st}
                          className={P.style === st ? "on" : ""}
                          onClick={() => setP((p) => ({ ...p, style: st }))}
                        >
                          {st === "flat" ? "FLAT" : st === "both" ? "FILLED" : "LINE"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="r range-row">
                    <label>OUTLINE WIDTH</label>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={P.sw}
                      onChange={(e) => setP((p) => ({ ...p, sw: +e.target.value }))}
                    />
                    <span className="v">{P.sw}</span>
                  </div>
                </div>
              </>
            )}

            {/* TAB 3: GRADIENT & TEXTURE BACKGROUND CONTROLS */}
            {activeTab === "surface" && (
              <>
                <div className="sec">
                  <div className="sh">
                    <span className="st">PLAIN UNIFIED vs SEPARABLE MODE</span>
                  </div>
                  <div className="r">
                    <label>CANVAS STRUCTURE</label>
                    <select
                      value={P.svgStructure || "separable"}
                      onChange={(e) => {
                        const modeVal = e.target.value as "separable" | "unified";
                        setP((p) => ({
                          ...p,
                          svgStructure: modeVal,
                          view: modeVal === "unified" ? 1 : p.view,
                        }));
                      }}
                    >
                      <option value="separable">SEPARABLE PARTS (আলাদা আলাদা অংশ)</option>
                      <option value="unified">PLAIN UNIFIED 1-PIECE (একসাথে প্লেন)</option>
                    </select>
                  </div>
                  <button
                    className="btn pri"
                    style={{ width: "100%", marginTop: "6px", justifyContent: "center" }}
                    onClick={() => {
                      const plainModes = modes.filter((m) => m.cat === "Plain BG");
                      const pick =
                        plainModes[Math.floor(Math.random() * plainModes.length)] ||
                        modes.find((m) => m.id === "plainunifiedstudio");
                      if (pick) {
                        selectMode(pick);
                        setCat("Plain BG");
                      } else {
                        setP((p) => ({ ...p, svgStructure: "unified", view: 1 }));
                      }
                    }}
                  >
                    ▣ SWITCH TO PLAIN UNIFIED ONE-PIECE BG
                  </button>
                </div>

                <div className="sec">
                  <div className="sh">
                    <span className="st">GRADIENT BACKGROUND STUDIO</span>
                  </div>
                  <div className="r">
                    <label>BACKGROUND GRADIENT</label>
                    <select
                      value={P.bgGrad || "solid"}
                      onChange={(e) =>
                        setP((p) => ({ ...p, bgGrad: e.target.value as BgGradientMode }))
                      }
                    >
                      <option value="solid">SOLID FLAT COLOUR</option>
                      <option value="linear">LINEAR STUDIO GRADIENT</option>
                      <option value="radial">RADIAL CENTER GLOW</option>
                      <option value="diagonal">45° LUXURY SILK GRADIENT</option>
                      <option value="aurora">AURORA MULTI-STOP MESH</option>
                      <option value="duotone">VELVET DUOTONE SPLIT</option>
                      <option value="sunburst">SUNBURST HALO VIGNETTE</option>
                    </select>
                  </div>
                  {P.bgGrad && P.bgGrad !== "solid" && (
                    <>
                      <div className="r">
                        <label>GRADIENT STOP #2</label>
                        <input
                          type="color"
                          value={P.bg2 || "#2d124d"}
                          onChange={(e) => setP((p) => ({ ...p, bg2: e.target.value }))}
                          style={{
                            width: "44px",
                            height: "28px",
                            borderRadius: "6px",
                            border: "1px solid var(--bd)",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div className="r range-row">
                        <label>GRADIENT ANGLE °</label>
                        <input
                          type="range"
                          min={0}
                          max={360}
                          step={5}
                          value={P.bgAngle || 135}
                          onChange={(e) => setP((p) => ({ ...p, bgAngle: +e.target.value }))}
                        />
                        <span className="v">{P.bgAngle || 135}°</span>
                      </div>
                    </>
                  )}
                  <button
                    className="btn"
                    style={{ width: "100%", marginTop: "6px", justifyContent: "center" }}
                    onClick={() => {
                      const gList: BgGradientMode[] = [
                        "linear",
                        "radial",
                        "diagonal",
                        "aurora",
                        "sunburst",
                      ];
                      const nextG = gList[Math.floor(Math.random() * gList.length)];
                      const nextBg2 = mixCol(
                        P.bg,
                        [P.c0, P.c1, P.c2][Math.floor(Math.random() * 3)],
                        0.45
                      );
                      setP((p) => ({
                        ...p,
                        bgGrad: nextG,
                        bg2: nextBg2,
                        bgAngle: Math.floor(Math.random() * 360),
                      }));
                    }}
                  >
                    ✦ RANDOMIZE GRADIENT BACKDROP
                  </button>
                </div>

                <div className="sec">
                  <div className="sh">
                    <span className="st">VECTOR SURFACE TEXTURE OVERLAY</span>
                  </div>
                  <div className="r">
                    <label>TEXTURE WEAVE</label>
                    <select
                      value={P.bd}
                      onChange={(e) =>
                        setP((p) => ({ ...p, bd: e.target.value as SurfaceTextureMode }))
                      }
                    >
                      <option value="none">CLEAN SMOOTH SURFACE</option>
                      <option value="linen">WOVEN BELGIAN LINEN</option>
                      <option value="silk">BRUSHED RAW SILK SHANTUNG</option>
                      <option value="canvas">ARTIST COTTON CANVAS</option>
                      <option value="grain">ORGANIC STIPPLE GRAIN</option>
                      <option value="marble">CARRARA MARBLE VEINS</option>
                      <option value="goldfoil">METALLIC GOLD FOIL FLECKS</option>
                      <option value="halftone">ENGRAVING HALFTONE DOTS</option>
                      <option value="gingham">WOVEN GINGHAM CHECK</option>
                      <option value="stripes">HORIZONTAL PINSTRIPES</option>
                      <option value="vstripes">VERTICAL RIBBON WEAVE</option>
                      <option value="grid">ARCHITECTURAL GRAPH GRID</option>
                      <option value="pindots">SWISS DOBBY PIN DOTS</option>
                    </select>
                  </div>
                  {P.bd !== "none" && (
                    <>
                      <div className="r">
                        <label>TEXTURE COLOUR</label>
                        <input
                          type="color"
                          value={P.bdc}
                          onChange={(e) => setP((p) => ({ ...p, bdc: e.target.value }))}
                          style={{
                            width: "44px",
                            height: "28px",
                            borderRadius: "6px",
                            border: "1px solid var(--bd)",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div className="r range-row">
                        <label>TEXTURE DENSITY</label>
                        <input
                          type="range"
                          min={4}
                          max={32}
                          step={2}
                          value={P.bdn}
                          onChange={(e) => setP((p) => ({ ...p, bdn: +e.target.value }))}
                        />
                        <span className="v">{P.bdn}</span>
                      </div>
                      <div className="r range-row">
                        <label>TEXTURE OPACITY %</label>
                        <input
                          type="range"
                          min={10}
                          max={90}
                          value={P.bdo}
                          onChange={(e) => setP((p) => ({ ...p, bdo: +e.target.value }))}
                        />
                        <span className="v">{P.bdo}</span>
                      </div>
                    </>
                  )}
                  <button
                    className="btn"
                    style={{ width: "100%", marginTop: "6px", justifyContent: "center" }}
                    onClick={() => {
                      const tList: SurfaceTextureMode[] = [
                        "linen",
                        "silk",
                        "canvas",
                        "grain",
                        "marble",
                        "goldfoil",
                        "halftone",
                        "gingham",
                        "pindots",
                      ];
                      const nextT = tList[Math.floor(Math.random() * tList.length)];
                      setP((p) => ({
                        ...p,
                        bd: nextT,
                        bdc: mixCol(p.c0, p.ink, 0.4),
                        bdn: 10 + Math.floor(Math.random() * 14),
                        bdo: 30 + Math.floor(Math.random() * 35),
                      }));
                    }}
                  >
                    ✦ RANDOMIZE VECTOR TEXTURE
                  </button>
                </div>
              </>
            )}

            {/* TAB 4: AUTO-BATCH & SINGLE EXPORT CONTROLS */}
            {activeTab === "export" && (
              <>
                <div className="sec">
                  <div className="sh">
                    <span className="st" style={{ color: "var(--ac)" }}>
                      ⚡ AUTO-BATCH FOLDER GENERATOR
                    </span>
                  </div>
                  <div className="r">
                    <label>STYLE TO GENERATE</label>
                    <select
                      value={batchScope}
                      onChange={(e) => setBatchScope(e.target.value as any)}
                    >
                      <option value="current">
                        ACTIVE CANVAS DESIGN VARIATIONS ONLY (#{pad2(curModeIdx + 1)} · {curMode.name})
                      </option>
                      <option value="category">
                        ALL {curMode.cat.toUpperCase()} CATEGORY STYLES (
                        {modes.filter((m) => m.cat === curMode.cat).length} UNIQUE STYLES)
                      </option>
                      <option value="favs">★ FAVOURITE STYLES ({favs.size || 1})</option>
                      <option value="all">
                        ALL {modes.length} VAULT STYLES (100% DIFFERENT · ZERO SIMILAR)
                      </option>
                    </select>
                  </div>
                  <div className="r">
                    <label>FILE FORMAT</label>
                    <select
                      value={batchFormat}
                      onChange={(e) => setBatchFormat(e.target.value as any)}
                    >
                      <option value="eps_jpg">EPS 10 + 5–10 MB JPG PAIR (MICROSTOCK READY)</option>
                      <option value="eps">EPS 10 ONLY (.EPS ILLUSTRATOR VECTOR)</option>
                      <option value="all3">ALL 3 (EPS 10 + SVG + 5–10 MB JPG)</option>
                      <option value="both">BOTH (SVG + 5–10 MB JPG PAIR)</option>
                      <option value="svg">SVG ONLY (ILLUSTRATOR VECTOR ARTBOARD)</option>
                      <option value="jpg">JPG ONLY (5 MB – 10 MB 300-DPI MICROSTOCK)</option>
                    </select>
                  </div>
                  <div className="r">
                    <label>HOW MANY DESIGNS</label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={batchCount}
                      onChange={(e) =>
                        setBatchCount(Math.max(1, Math.min(500, +e.target.value || 1)))
                      }
                    />
                  </div>
                  <div className="seg" style={{ marginTop: "4px", marginBottom: "8px" }}>
                    {[10, 20, 50, 100, 200].map((cnt) => (
                      <button
                        key={cnt}
                        className={batchCount === cnt ? "on" : ""}
                        onClick={() => setBatchCount(cnt)}
                      >
                        {cnt}×
                      </button>
                    ))}
                  </div>
                  <div className="r">
                    <label>BATCH BACKGROUNDS</label>
                    <select
                      value={batchBgMode}
                      onChange={(e) => setBatchBgMode(e.target.value as any)}
                    >
                      <option value="mix">AUTO-MIX GRADIENTS + TEXTURES + SOLID</option>
                      <option value="gradient">ALWAYS GRADIENT BACKGROUNDS</option>
                      <option value="texture">ALWAYS TEXTURED BACKGROUNDS</option>
                      <option value="current">KEEP CURRENT CANVAS BG MODE</option>
                    </select>
                  </div>
                  <button
                    className="btn pri"
                    disabled={batchRunning}
                    style={{ width: "100%", marginTop: "10px", justifyContent: "center" }}
                    onClick={() => runAutoBatchGenerate(false)}
                  >
                    {batchRunning
                      ? `GENERATING ${batchProgress.done} / ${batchProgress.total}...`
                      : `⚡ GENERATE ${batchCount} UNIQUE → SAVE .ZIP FOLDER`}
                  </button>
                  <button
                    className="btn"
                    disabled={batchRunning}
                    style={{ width: "100%", marginTop: "6px", justifyContent: "center" }}
                    onClick={() => runAutoBatchGenerate(true)}
                  >
                    📁 SAVE {batchCount} UNIQUE DIRECTLY TO PC FOLDER
                  </button>
                  {batchProgress.msg && (
                    <div className="note" style={{ marginTop: "8px", color: "var(--ac)" }}>
                      {batchProgress.msg}
                    </div>
                  )}
                </div>

                <div className="sec">
                  <div className="sh">
                    <span className="st">ILLUSTRATOR ARTBOARD &amp; SINGLE EXPORT</span>
                  </div>
                  <div className="r">
                    <label>ARTBOARD PRESET</label>
                    <select
                      value={`${outDims.w}x${outDims.h}`}
                      onChange={(e) => {
                        const preset = ILLUSTRATOR_ARTBOARD_PRESETS.find(
                          (pr) => `${pr.w}x${pr.h}` === e.target.value
                        );
                        if (preset) {
                          setP((p) => ({
                            ...p,
                            ratio: preset.ratio,
                            artW: preset.w,
                            artH: preset.h,
                          }));
                        }
                      }}
                    >
                      {ILLUSTRATOR_ARTBOARD_PRESETS.map((pr) => (
                        <option key={`${pr.w}x${pr.h}`} value={`${pr.w}x${pr.h}`}>
                          {pr.label}
                        </option>
                      ))}
                      {!ILLUSTRATOR_ARTBOARD_PRESETS.some(
                        (pr) => pr.w === outDims.w && pr.h === outDims.h
                      ) && (
                        <option value={`${outDims.w}x${outDims.h}`}>
                          CUSTOM ({outDims.w} × {outDims.h} PX)
                        </option>
                      )}
                    </select>
                  </div>
                  <div className="r">
                    <label>ARTBOARD W × H (PX)</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <input
                        type="number"
                        min={3600}
                        max={12000}
                        step={100}
                        value={outDims.w}
                        onChange={(e) => {
                          const w = Math.max(3600, Math.min(12000, +e.target.value || 5000));
                          setP((p) => ({ ...p, artW: w, artH: outDims.h }));
                        }}
                        style={{ width: "68px" }}
                      />
                      <span style={{ fontSize: "10px", color: "var(--mu)" }}>×</span>
                      <input
                        type="number"
                        min={3600}
                        max={12000}
                        step={100}
                        value={outDims.h}
                        onChange={(e) => {
                          const h = Math.max(3600, Math.min(12000, +e.target.value || 5000));
                          setP((p) => ({ ...p, artW: outDims.w, artH: h }));
                        }}
                        style={{ width: "68px" }}
                      />
                    </div>
                  </div>
                  <div className="r">
                    <label>CANVAS / SVG MODE</label>
                    <select
                      value={P.svgStructure || "separable"}
                      onChange={(e) => {
                        const modeVal = e.target.value as "separable" | "unified";
                        setP((p) => ({
                          ...p,
                          svgStructure: modeVal,
                          view: modeVal === "unified" ? 1 : p.view,
                        }));
                      }}
                    >
                      <option value="separable">1 · SEPARABLE PARTS (আলাদা আলাদা অংশ)</option>
                      <option value="unified">2 · PLAIN UNIFIED ONE-PIECE (একসাথে প্লেন)</option>
                    </select>
                  </div>
                  <div className="r">
                    <label>EXPORT REPEATS</label>
                    <select
                      value={P.svgStructure === "unified" ? "1" : P.exRep}
                      disabled={P.svgStructure === "unified"}
                      onChange={(e) => setP((p) => ({ ...p, exRep: e.target.value }))}
                    >
                      <option value="auto">MATCH VIEWPORT</option>
                      <option value="1">1×1 UNIFIED / MASTER SHEET</option>
                      <option value="2">2×2 SEAMLESS SHEET</option>
                      <option value="3">3×3 SEAMLESS SHEET</option>
                      <option value="4">4×4 SEAMLESS SHEET</option>
                    </select>
                  </div>
                  <div className="r">
                    <label>TRANSPARENT BG (PNG/SVG)</label>
                    <label className="sw">
                      <input
                        type="checkbox"
                        checked={P.transp}
                        onChange={(e) => setP((p) => ({ ...p, transp: e.target.checked }))}
                      />
                      <i></i>
                    </label>
                  </div>
                  <div className="two" style={{ marginTop: "10px" }}>
                    <button className="btn" onClick={() => exportRaster("jpeg")}>
                      DOWNLOAD JPG (5–10MB)
                    </button>
                    <button className="btn" onClick={() => exportRaster("png")}>
                      DOWNLOAD PNG
                    </button>
                  </div>
                  <button
                    className="btn pri"
                    style={{ width: "100%", marginTop: "8px", justifyContent: "center" }}
                    onClick={exportSVG}
                  >
                    DOWNLOAD ILLUSTRATOR SVG ({outDims.w}×{outDims.h} PX)
                  </button>
                  <button
                    className="btn pri"
                    style={{
                      width: "100%",
                      marginTop: "8px",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #059669, #10b981)",
                      borderColor: "#10b981",
                    }}
                    onClick={exportEPS10}
                  >
                    ⬇ DIRECT DOWNLOAD EPS 10 (.EPS · {outDims.w}×{outDims.h} PX)
                  </button>
                  {exportStatus && (
                    <div className="note" style={{ marginTop: "10px", color: "var(--ac)" }}>
                      ✓ {exportStatus}
                    </div>
                  )}
                </div>

                <div className="sec">
                  <div className="sh">
                    <span className="st">ILLUSTRATOR &amp; MICROSTOCK GUARANTEE</span>
                  </div>
                  <div className="stock-chk">
                    <div>
                      <b>AUTO-ARTBOARD &amp; 100% SEPARABLE PARTS:</b> OPENING ANY SVG IN ADOBE ILLUSTRATOR AUTOMATICALLY SETS THE ARTBOARD TO {outDims.w} × {outDims.h} PX WITH EVERY VECTOR PART UNLOCKED, SEPARABLE &amp; RECOLORABLE
                    </div>
                    <div>
                      <b>ZERO SIDE-CUT GEOMETRY:</b> ALL MOTIFS &amp; TILES FIT EXACTLY INSIDE {outDims.w} × {outDims.h} PX WITH ZERO CLIPPED SHAPES
                    </div>
                    <div>
                      <b>ZERO-DUPLICATE LEDGER:</b> EVERY GENERATED DESIGN IS FINGERPRINTED SO IT CAN NEVER BE GENERATED A SECOND TIME
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>

        {/* CENTER COLUMN: LIVE SEAMLESS STAGE */}
        <main className="center-stage">
          {/* ROW 1: REPEAT, ARTBOARD RATIO, MODE & DIRECT EXPORT BUTTONS */}
          <div className="stage-toolbar">
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="st" style={{ flex: "none" }}>REPEAT</span>
              <div className="seg">
                {[
                  { v: 1, l: "1×1" },
                  { v: 2, l: "2×2" },
                  { v: 3, l: "3×3" },
                  { v: 0, l: "FILL" },
                ].map((b) => (
                  <button
                    key={b.v}
                    className={P.view === b.v ? "on" : ""}
                    onClick={() => setP((p) => ({ ...p, view: b.v }))}
                  >
                    {b.l}
                  </button>
                ))}
              </div>
            </div>

            {/* CANVAS ASPECT RATIO BAR */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="st" style={{ flex: "none" }}>RATIO</span>
              <div className="seg">
                {RATIO_LIST.map((r) => (
                  <button
                    key={r.id}
                    className={(P.ratio || "1:1") === r.id ? "on" : ""}
                    onClick={() => {
                      const d = getRatioDims(Math.max(5000, +P.px || 5000), r.id);
                      setP((p) => ({ ...p, ratio: r.id, artW: d.w, artH: d.h }));
                    }}
                    title={r.label}
                  >
                    {r.id}
                  </button>
                ))}
              </div>
            </div>

            {/* SEPARABLE PARTS vs PLAIN UNIFIED ONE-PIECE TOGGLE */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div className="seg">
                <button
                  className={(P.svgStructure || "separable") === "separable" ? "on" : ""}
                  onClick={() => setP((p) => ({ ...p, svgStructure: "separable" }))}
                  title="EVERY MOTIF & TILE IS SEPARABLE IN ADOBE ILLUSTRATOR (আলাদা আলাদা অংশ)"
                >
                  SEPARABLE
                </button>
                <button
                  className={P.svgStructure === "unified" ? "on" : ""}
                  onClick={() => setP((p) => ({ ...p, svgStructure: "unified", view: 1 }))}
                  title="PLAIN UNIFIED ONE-PIECE FULL CANVAS SHEET (একেবারে একসাথে প্লেন)"
                >
                  PLAIN 1-PCS
                </button>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="st" style={{ flex: "none" }}>BLEED</span>
              <label className="sw" title="FILL ENTIRE ARTBOARD EDGE-TO-EDGE WITH ZERO SIDE GAP">
                <input
                  type="checkbox"
                  checked={P.safeEdge !== true}
                  onChange={(e) => setP((p) => ({ ...p, safeEdge: !e.target.checked }))}
                />
                <i></i>
              </label>
              <span className="st" style={{ flex: "none" }}>SEAMS</span>
              <label className="sw">
                <input
                  type="checkbox"
                  checked={P.grid}
                  onChange={(e) => setP((p) => ({ ...p, grid: e.target.checked }))}
                />
                <i></i>
              </label>
            </div>
          </div>

          {/* COMPACT SINGLE-ROW DROPDOWN BAR FOR POSTER, LIGHTING & CALENDAR + QUICK DOWNLOADS (MAXIMIZES CANVAS SIZE) */}
          <div
            className="poster-quick-bar"
            style={{ padding: "4px 10px", gap: "6px" }}
          >
            {/* POSTER COMPACT DROPDOWNS */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
              <span className="st" style={{ flex: "none", color: "var(--ac)", fontSize: "9.5px" }}>
                🎨 POSTER:
              </span>
              <select
                value={curMode.cat === "Poster" ? curMode.id : "poster_ref1_coral_gold_5pcs"}
                onChange={(e) => selectPosterReferenceSet(e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "160px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 5px",
                  borderRadius: "5px",
                  border: "1px solid var(--ac)",
                  background: "var(--p2)",
                  color: "var(--tx)",
                }}
                title="SELECT ANY OF THE 133 CURATED MICROSTOCK & REFERENCE POSTER SETS"
              >
                {MASTER_POSTER_MODES.map((pm) => (
                  <option key={pm.id} value={pm.id}>
                    {pm.shortLabel}
                  </option>
                ))}
              </select>
              <select
                value={
                  curMode.cat === "Poster"
                    ? String(curParams.pcs || "4")
                    : String(MP["poster_ref1_coral_gold_5pcs"]?.pcs || "5")
                }
                onChange={(e) => switchPosterSetPcs(e.target.value)}
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SELECT POSTER PIECES ON ARTBOARD (1 PCS TO 12 PCS)"
              >
                <option value="1">1 PCS</option>
                <option value="2">2 PCS</option>
                <option value="3">3 PCS</option>
                <option value="4">4 PCS</option>
                <option value="5">5 PCS</option>
                <option value="6">6 PCS</option>
                <option value="8">8 PCS</option>
                <option value="10">10 PCS</option>
                <option value="12">12 PCS</option>
                <option value="4grid">2×2 GRID</option>
              </select>
              {(() => {
                const posterModeId =
                  curMode.cat === "Poster" ? curMode.id : "poster_ref1_coral_gold_5pcs";
                const rawShow = MP[posterModeId]?.showText ?? true;
                const isTextOn = rawShow !== false && rawShow !== "false";
                return (
                  <button
                    type="button"
                    className={`chk-pill ${isTextOn ? "on" : ""}`}
                    style={{ minHeight: "24px", padding: "2px 6px", fontSize: "9px" }}
                    onClick={togglePosterTextCheck}
                    title="CHECKMARK ON = SHOW CREATE-OUTLINES VECTOR POSTER TEXT · UNCHECKED = NO TEXT"
                  >
                    <span className="chk-box" style={{ width: "13px", height: "13px", fontSize: "9px" }}>✓</span>
                    <span>TEXT {isTextOn ? "ON" : "OFF"}</span>
                  </button>
                );
              })()}

              <span style={{ color: "var(--bd2)", margin: "0 2px" }}>|</span>

              {/* LIGHTING COMPACT DROPDOWNS */}
              <span className="st" style={{ flex: "none", color: "#fbbf24", fontSize: "9.5px" }}>
                ✨ LIGHT:
              </span>
              <select
                value={
                  curMode.cat === "Lighting"
                    ? curMode.id
                    : "light_ref1_split_golden_sunburst"
                }
                onChange={(e) => selectLightingReferenceSet(e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "155px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 5px",
                  borderRadius: "5px",
                  border: "1px solid #f59e0b",
                  background: "var(--p2)",
                  color: "var(--tx)",
                }}
                title="SELECT ANY OF THE 108 ORIGINAL MICROSTOCK LIGHTING & LENS FLARE DESIGNS"
              >
                {MASTER_LIGHTING_MODES.map((lm) => (
                  <option key={lm.id} value={lm.id}>
                    {lm.shortLabel}
                  </option>
                ))}
              </select>
              <select
                value={
                  curMode.cat === "Lighting"
                    ? String(
                        curParams.bgMode ||
                          curMode.params.find((p) => p.k === "bgMode")?.def ||
                          "split"
                      )
                    : "split"
                }
                onChange={(e) =>
                  switchLightingBgMode(e.target.value as "split" | "transparent" | "black")
                }
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SELECT LIGHTING BACKGROUND MODE (50/50 SPLIT, TRANSPARENT, OR BLACK)"
              >
                <option value="split">◐ 50/50 SPLIT BG</option>
                <option value="transparent">◌ TRANSPARENT BG</option>
                <option value="black">◼ ONLY BLACK BG</option>
              </select>
              <select
                value={curMode.cat === "Lighting" ? String(curParams.pcs || "1") : "1"}
                onChange={(e) => switchLightingSetPcs(e.target.value)}
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SELECT LIGHTING KIT PIECES ON ARTBOARD"
              >
                <option value="1">1/DUAL</option>
                <option value="4">4 PCS</option>
                <option value="6">6 PCS</option>
                <option value="8">8 PCS KIT</option>
                <option value="9">9 PCS</option>
                <option value="12">12 PCS</option>
              </select>

              <span style={{ color: "var(--bd2)", margin: "0 2px" }}>|</span>

              {/* CALENDAR COMPACT DROPDOWNS */}
              <span className="st" style={{ flex: "none", color: "#38bdf8", fontSize: "9.5px" }}>
                📅 CAL:
              </span>
              <select
                value={curMode.cat === "Calendar" ? curMode.id : "cal_ms_1"}
                onChange={(e) => selectCalendarSet(e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "155px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 5px",
                  borderRadius: "5px",
                  border: "1px solid #38bdf8",
                  background: "var(--p2)",
                  color: "var(--tx)",
                }}
                title="SELECT ANY OF THE 60 CURATED MICROSTOCK CALENDAR & WEEKLY PLANNER TEMPLATES"
              >
                {MASTER_CALENDAR_MODES.map((cm) => (
                  <option key={cm.id} value={cm.id}>
                    {cm.shortLabel}
                  </option>
                ))}
              </select>
              <select
                value={
                  curMode.cat === "Calendar"
                    ? String(
                        curParams.year ||
                          curMode.params.find((p) => p.k === "year")?.def ||
                          "2026"
                      )
                    : "2026"
                }
                onChange={(e) => switchCalendarYear(e.target.value)}
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SELECT CALENDAR YEAR (2025 – 2030)"
              >
                {["2025", "2026", "2027", "2028", "2029", "2030"].map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
              <select
                value={
                  curMode.cat === "Calendar"
                    ? String(
                        curParams.viewMode ||
                          curMode.params.find((p) => p.k === "viewMode")?.def ||
                          "12m"
                      )
                    : "12m"
                }
                onChange={(e) => switchCalendarViewMode(e.target.value)}
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SELECT 12 MONTHS FULL YEAR, SINGLE MONTH, QUARTERLY, OR WEEKLY PLANNER"
              >
                <option value="12m">12 MONTHS</option>
                <option value="12m_3x4">12M POSTER</option>
                <option value="1m">1 MONTH</option>
                <option value="3m">3 MONTHS</option>
                <option value="6m">6 MONTHS</option>
                <option value="week">WEEKLY PLANNER</option>
              </select>
              <select
                value={
                  curMode.cat === "Calendar"
                    ? String(
                        curParams.month ||
                          curMode.params.find((p) => p.k === "month")?.def ||
                          "1"
                      )
                    : "1"
                }
                onChange={(e) => switchCalendarMonth(e.target.value)}
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SELECT ACTIVE OR STARTING MONTH (JANUARY – DECEMBER)"
              >
                {[
                  ["1", "JAN (01)"],
                  ["2", "FEB (02)"],
                  ["3", "MAR (03)"],
                  ["4", "APR (04)"],
                  ["5", "MAY (05)"],
                  ["6", "JUN (06)"],
                  ["7", "JUL (07)"],
                  ["8", "AUG (08)"],
                  ["9", "SEP (09)"],
                  ["10", "OCT (10)"],
                  ["11", "NOV (11)"],
                  ["12", "DEC (12)"],
                ].map(([mv, ml]) => (
                  <option key={mv} value={mv}>
                    {ml}
                  </option>
                ))}
              </select>
              <select
                value={
                  curMode.cat === "Calendar"
                    ? String(curParams.weekStart || "sun")
                    : "sun"
                }
                onChange={(e) =>
                  switchCalendarWeekStart(e.target.value as "sun" | "mon" | "sat")
                }
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="WEEK STARTS ON SUNDAY, MONDAY, OR SATURDAY"
              >
                <option value="sun">SUN</option>
                <option value="mon">MON</option>
                <option value="sat">SAT</option>
              </select>
              <select
                value={
                  curMode.cat === "Calendar"
                    ? String(curParams.sideArt || "auto")
                    : "auto"
                }
                onChange={(e) => switchCalendarSideArt(e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "128px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="CALENDAR SIDE, BORDER & CORNER DECORATIVE ART (100% INSIDE ARTBOARD)"
              >
                <option value="auto">SIDE: AUTO (12)</option>
                <option value="side_waves">SIDE: WAVE RIBBONS</option>
                <option value="bauhaus_left">SIDE: LEFT BAUHAUS</option>
                <option value="mountain_right">SIDE: RIGHT MOUNTAIN</option>
                <option value="gold_pillars">SIDE: GOLD PILLARS</option>
                <option value="origami_wings">SIDE: ORIGAMI WINGS</option>
                <option value="botanical_vines">SIDE: LEAF VINES</option>
                <option value="retro_stripes">SIDE: 70S STRIPES</option>
                <option value="cyber_rails">SIDE: CYBER RAILS</option>
                <option value="crimson_swoosh">SIDE: 3D SWOOSH</option>
                <option value="torn_deckle">SIDE: TORN DECKLE</option>
                <option value="corner_ribbons">SIDE: 4-CORNER WAVES</option>
                <option value="clean_frame">SIDE: DOUBLE FRAME</option>
                <option value="none">SIDE: CLEAN NONE</option>
              </select>
              <button
                type="button"
                className="btn pri"
                style={{
                  minHeight: "24px",
                  padding: "2px 7px",
                  fontSize: "9.5px",
                  background: "linear-gradient(135deg, #0284c7, #38bdf8)",
                  borderColor: "#38bdf8",
                }}
                onClick={() => {
                  if (curMode.cat !== "Calendar") {
                    selectCalendarSet("cal_ms_1");
                  } else {
                    smartRandom(true, "current", false);
                  }
                }}
                title="EVERY CLICK CHANGES THE CALENDAR DESIGN, SIDE ART, HEADER ART & COLOUR HARMONY"
              >
                🎲 NEW CAL
              </button>

              <span style={{ color: "var(--bd2)", margin: "0 2px" }}>|</span>

              {/* TORN PAPER COMPACT DROPDOWNS (96 MODES · CRORES OF UNIQUE 3-PLY FRACTAL TEAR DESIGNS) */}
              <span className="st" style={{ flex: "none", color: "#10b981", fontSize: "9.5px" }}>
                🧻 TORN:
              </span>
              <select
                value={curMode.cat === "Torn Paper" ? curMode.id : "torn_ms_1"}
                onChange={(e) => selectTornPaperSet(e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "145px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 5px",
                  borderRadius: "5px",
                  border: "1px solid #10b981",
                  background: "var(--p2)",
                  color: "var(--tx)",
                }}
                title="SELECT ANY OF THE 96 PROCEDURAL 3-PLY FRACTAL TORN PAPER & STATIONERY SETS"
              >
                {MASTER_TORN_PAPER_MODES.map((tm, idx) => (
                  <option key={tm.id} value={tm.id}>
                    {`#${idx + 1} · ${tm.name.replace(/^TORN PAPER \d+:\s*/, "")}`}
                  </option>
                ))}
              </select>
              <select
                value={
                  curMode.cat === "Torn Paper"
                    ? String(
                        curParams.layoutType ||
                          curMode.params.find((p) => p.k === "layoutType")?.def ||
                          "scrap_1pc"
                      )
                    : "scrap_1pc"
                }
                onChange={(e) => switchTornPaperParam("layoutType", e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "132px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="TORN PAPER ARCHITECTURE (16 COMMERCIAL MICROSTOCK STYLES)"
              >
                <option value="scrap_1pc">ISOLATED SCRAP (REF 1/3)</option>
                <option value="canyon_v_rip">V-RIP CANYON (REF 2)</option>
                <option value="notebook_grid">MATH GRID NOTEBOOK (REF 4)</option>
                <option value="half_divider">HALF PAGE DIVIDER (REF 5A)</option>
                <option value="diagonal_canyon">DIAGONAL CANYON (REF 5B)</option>
                <option value="center_strip">CENTER STRIP BANNER (REF 5C)</option>
                <option value="notebook_lined">LINED NOTEBOOK (REF 5D)</option>
                <option value="multi_scraps">MULTI SCRAP BUNDLE</option>
                <option value="layered_waves">3D TORN WAVES</option>
                <option value="ripped_hole">3D RIPPED HOLE</option>
                <option value="curled_peel_canyon">3D CURLED PAPER PEEL</option>
                <option value="horizontal_strips_pack">HORIZONTAL STRIPS PACK</option>
                <option value="taped_memo_board">TAPED & PINNED MEMOS</option>
                <option value="kraft_cardboard_rip">ECO KRAFT & CARDBOARD</option>
                <option value="circle_badge_rip">3D CIRCLE RIPPED HOLE</option>
                <option value="collage_scrapbook_kit">SCRAPBOOK COLLAGE KIT</option>
              </select>
              <select
                value={
                  curMode.cat === "Torn Paper"
                    ? String(
                        curParams.pcs ||
                          curMode.params.find((p) => p.k === "pcs")?.def ||
                          "1"
                      )
                    : "1"
                }
                onChange={(e) => switchTornPaperParam("pcs", e.target.value)}
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="NUMBER OF TORN PAPER PIECES (1 PC TO 12 PCS)"
              >
                <option value="1">1 PC</option>
                <option value="2">2 PCS</option>
                <option value="3">3 PCS</option>
                <option value="4">4 PCS</option>
                <option value="6">6 PCS</option>
                <option value="8">8 PCS</option>
                <option value="9">9 PCS</option>
                <option value="12">12 PCS</option>
              </select>
              <select
                value={
                  curMode.cat === "Torn Paper"
                    ? String(
                        curParams.paperSurface ||
                          curMode.params.find((p) => p.k === "paperSurface")?.def ||
                          "solid_matte"
                      )
                    : "solid_matte"
                }
                onChange={(e) => switchTornPaperParam("paperSurface", e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "112px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="PAPER SURFACE (7 COMMERCIAL PAPER & CARDBOARD TEXTURES)"
              >
                <option value="solid_matte">SOLID PAPER</option>
                <option value="grid_notebook">MATH GRID + MARGIN</option>
                <option value="lined_notebook">LINED + MARGIN</option>
                <option value="dot_bullet_grid">BULLET DOT GRID</option>
                <option value="textured_fiber">FIBER GRAIN</option>
                <option value="kraft_fiber">ECO BROWN KRAFT</option>
                <option value="corrugated_rib">CORRUGATED RIB</option>
              </select>
              <select
                value={
                  curMode.cat === "Torn Paper"
                    ? String(
                        curParams.addonStyle ||
                          curMode.params.find((p) => p.k === "addonStyle")?.def ||
                          "auto"
                      )
                    : "auto"
                }
                onChange={(e) => switchTornPaperParam("addonStyle", e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "110px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="COMMERCIAL STATIONERY ADD-ONS (SCOTCH TAPE, 3D PUSH-PIN, PAPERCLIP, SPIRAL BINDER, CURLED CORNER)"
              >
                <option value="auto">ADDON: AUTO</option>
                <option value="scotch_tape">SCOTCH TAPE</option>
                <option value="push_pin">3D PUSH-PIN</option>
                <option value="paper_clip">3D PAPERCLIP</option>
                <option value="spiral_binder">SPIRAL BINDER</option>
                <option value="curled_corner">CURLED CORNER</option>
                <option value="tape_and_pin">TAPE + PIN + CLIP</option>
                <option value="none">CLEAN (NO ADDON)</option>
              </select>
              <select
                value={
                  curMode.cat === "Torn Paper"
                    ? String(
                        curParams.bgMode ||
                          curMode.params.find((p) => p.k === "bgMode")?.def ||
                          "checker"
                      )
                    : "checker"
                }
                onChange={(e) => switchTornPaperParam("bgMode", e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "100px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="TORN PAPER BACKDROP (CHECKERBOARD, WHITE, CHARCOAL GRAY, COLOR SHEET)"
              >
                <option value="checker">CHECKER BG</option>
                <option value="white">WHITE BG</option>
                <option value="charcoal">CHARCOAL BG</option>
                <option value="color_sheet">COLOR SHEET</option>
                <option value="dark">DARK NOIR</option>
              </select>
              <button
                type="button"
                className="btn pri"
                style={{
                  minHeight: "24px",
                  padding: "2px 7px",
                  fontSize: "9.5px",
                  background: "linear-gradient(135deg, #059669, #10b981)",
                  borderColor: "#10b981",
                }}
                onClick={() => {
                  if (curMode.cat !== "Torn Paper") {
                    selectTornPaperSet("torn_ms_1");
                  } else {
                    smartRandom(true, "current", true);
                  }
                }}
                title="EVERY CLICK GENERATES A 100% UNIQUE NON-REPEATING 3-PLY FRACTAL TORN PAPER DESIGN + NEW PAPER COLOUR"
              >
                🎲 NEW TORN
              </button>
              <span
                style={{
                  fontSize: "9.5px",
                  fontWeight: 800,
                  color: "#64748b",
                  fontFamily: "var(--mono)",
                  letterSpacing: ".03em",
                  marginLeft: "4px",
                }}
              >
                🌑 SHADOW:
              </span>
              <select
                value={curMode.cat === "Shadow" ? curMode.id : "shadow_ms_1"}
                onChange={(e) => selectShadowSet(e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "152px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border:
                    curMode.cat === "Shadow" ? "1px solid #64748b" : "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: curMode.cat === "Shadow" ? "var(--tx)" : "var(--tx)",
                }}
                title="72 ULTRA-SMOOTH TRANSPARENT VECTOR SHADOW SETS (ZERO BANDING · ZERO CRACKS)"
              >
                {MASTER_SHADOW_MODES.map((sm, idx) => (
                  <option key={sm.id} value={sm.id}>
                    SH {idx + 1}: {sm.name.replace(/^Shadow \d+:\s*/i, "").toUpperCase()}
                  </option>
                ))}
              </select>
              <select
                value={
                  curMode.cat === "Shadow"
                    ? String(
                        curParams.archType ||
                          curMode.params.find((p) => p.k === "archType")?.def ||
                          "oval_contact"
                      )
                    : "oval_contact"
                }
                onChange={(e) => switchShadowParam("archType", e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "136px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SHADOW ARCHITECTURE (12 COMMERCIAL MICROSTOCK TRANSPARENT SHADOW STYLES)"
              >
                <option value="oval_contact">OVAL CONTACT (REF 1)</option>
                <option value="linear_fade_overlay">LINEAR FADE (REF 2)</option>
                <option value="angled_perspective_cast">ANGLED CAST (REF 3)</option>
                <option value="floating_wide_bar">FLOATING BAR (REF 4)</option>
                <option value="curved_page_arch">CURVED PAPER LIFT</option>
                <option value="double_contact_pedestal">DUAL CORE PEDESTAL</option>
                <option value="circular_disc_base">ROUND DISC BASE</option>
                <option value="pinched_bow_shadow">PINCHED CENTER BOW</option>
                <option value="card_bottom_lip">FLOATING CARD LIP</option>
                <option value="studio_horizon_vignette">STAGE FLOOR HORIZON</option>
                <option value="diagonal_gobo_soft">WINDOW BLIND GOBO</option>
                <option value="multi_shadow_kit">MULTI SHADOW KIT</option>
              </select>
              <select
                value={
                  curMode.cat === "Shadow"
                    ? String(
                        curParams.pcs ||
                          curMode.params.find((p) => p.k === "pcs")?.def ||
                          "1"
                      )
                    : "1"
                }
                onChange={(e) => switchShadowParam("pcs", e.target.value)}
                style={{
                  height: "24px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="NUMBER OF SHADOW ELEMENTS (1 PC TO 8 PCS BUNDLE)"
              >
                <option value="1">1 PC</option>
                <option value="2">2 PCS</option>
                <option value="3">3 PCS</option>
                <option value="4">4 PCS</option>
                <option value="6">6 PCS</option>
                <option value="8">8 PCS</option>
              </select>
              <select
                value={
                  curMode.cat === "Shadow"
                    ? String(
                        curParams.shadowTone ||
                          curMode.params.find((p) => p.k === "shadowTone")?.def ||
                          "pure_black"
                      )
                    : "pure_black"
                }
                onChange={(e) => switchShadowParam("shadowTone", e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "104px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SHADOW TONE (PURE BLACK, CHARCOAL INK, WARM UMBRA, COOL SLATE, DEEP ESPRESSO, NAVY VOID)"
              >
                <option value="pure_black">PURE BLACK</option>
                <option value="charcoal_ink">CHARCOAL INK</option>
                <option value="warm_umbra">WARM UMBRA</option>
                <option value="cool_slate">COOL SLATE</option>
                <option value="deep_espresso">DEEP ESPRESSO</option>
                <option value="navy_void">NAVY VOID</option>
              </select>
              <select
                value={
                  curMode.cat === "Shadow"
                    ? String(
                        curParams.bgMode ||
                          curMode.params.find((p) => p.k === "bgMode")?.def ||
                          "transparent"
                      )
                    : "transparent"
                }
                onChange={(e) => switchShadowParam("bgMode", e.target.value)}
                style={{
                  height: "24px",
                  maxWidth: "118px",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  padding: "0 4px",
                  borderRadius: "5px",
                  border: "1px solid var(--bd2)",
                  background: "var(--pn)",
                  color: "var(--tx)",
                }}
                title="SHADOW BACKDROP (100% TRANSPARENT NO-BG, WHITE STUDIO BG, CHECKERBOARD, SOFT GRAY)"
              >
                <option value="transparent">TRANSPARENT (NO BG)</option>
                <option value="white">WHITE BG</option>
                <option value="checker">CHECKER BG</option>
                <option value="soft_gray">SOFT GRAY</option>
              </select>
              <button
                type="button"
                className="btn pri"
                style={{
                  minHeight: "24px",
                  padding: "2px 7px",
                  fontSize: "9.5px",
                  background: "linear-gradient(135deg, #334155, #475569)",
                  borderColor: "#64748b",
                }}
                onClick={() => {
                  if (curMode.cat !== "Shadow") {
                    selectShadowSet("shadow_ms_1");
                  } else {
                    smartRandom(true, "current", true);
                  }
                }}
                title="EVERY CLICK GENERATES A 100% UNIQUE ULTRA-SMOOTH TRANSPARENT VECTOR SHADOW (ZERO BANDING · ZERO CRACKS)"
              >
                🎲 NEW SHADOW
              </button>
            </div>
          </div>

          <div id="vp" ref={vpRef}>
            <div
              id="frame"
              className={
                P.transp ||
                curMode.cat === "Brush" ||
                curMode.cat === "Lighting" ||
                (curMode.cat === "Shadow" &&
                  String(curParams.bgMode ?? "transparent") === "transparent")
                  ? "checker"
                  : ""
              }
              style={frameStyle}
              title="RIGHT-CLICK OR USE DOWNLOAD BUTTONS TO SAVE FULL 30+ MP (6000×6000 / 7680×4320 PX · 300 DPI · >5.8 MB) MICROSTOCK FILE"
              onContextMenu={(e) => {
                e.preventDefault();
                exportRaster("jpeg");
              }}
            />
          </div>
        </main>

        {/* RIGHT COLUMN: 2-COLUMN PATTERN VAULT GALLERY */}
        <aside className="vault-panel">
          <div className="vault-head">
            <div className="vault-title-row">
              <h2>PATTERN VAULT</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <button
                  className="btn"
                  style={{
                    height: "24px",
                    minHeight: "24px",
                    padding: "0 8px",
                    fontSize: "10px",
                    borderColor: "var(--ac)",
                    color: "var(--ac)",
                  }}
                  disabled={fabricTracing}
                  onClick={() => fabricInputRef.current?.click()}
                  title="UPLOAD A FABRIC OR TEXTURE IMAGE TO ADD AS A VECTOR PATTERN"
                >
                  {fabricTracing ? "SCANNING..." : "📸 + ADD FABRIC PHOTO"}
                </button>
                <span className="vault-count">
                  {filteredModes.length} / {modes.length}
                </span>
              </div>
            </div>
            <div className="search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="search"
                placeholder={`SEARCH ${modes.length} MANUAL PATTERNS & TEXTURES...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="chips">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`chip ${cat === c ? "on" : ""}`}
                  onClick={() => setCat(c)}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div
            className="vault-grid"
            onScroll={(e) => {
              const el = e.currentTarget;
              if (
                filteredModes.length > vaultLimit &&
                el.scrollTop + el.clientHeight >= el.scrollHeight - 180
              ) {
                setVaultLimit((prev) => Math.min(filteredModes.length, prev + 24));
              }
            }}
          >
            {filteredModes.length === 0 ? (
              <div className="empty" style={{ gridColumn: "1 / -1" }}>
                NO PATTERNS FOUND.
                <br />
                TRY ANOTHER CATEGORY OR SEARCH KEYWORD.
              </div>
            ) : (
              <>
                {visibleVaultModes.map((m) => {
                  const idx = modeIdxById.get(m.id) ?? 0;
                  const isFav = favs.has(m.id);
                  const isActive = m.id === P.mode;
                  const u = thumbs[m.id] || "";
                  return (
                    <div
                      key={m.id}
                      className={`pcard ${isActive ? "on" : ""}`}
                      onClick={() => selectMode(m)}
                    >
                      <div
                        className={`th ${
                          m.cat === "Brush" || m.cat === "Lighting" ? "checker" : ""
                        }`}
                        style={{
                          backgroundColor:
                            m.cat === "Brush" || m.cat === "Lighting" ? "#ffffff" : undefined,
                          backgroundImage: u
                            ? m.cat === "Brush" || m.cat === "Lighting"
                              ? `url("${u}"), conic-gradient(#e5e7eb 90deg, #ffffff 90deg 180deg, #e5e7eb 180deg 270deg, #ffffff 270deg)`
                              : `url("${u}")`
                            : undefined,
                          backgroundSize:
                            m.cat === "Brush" || m.cat === "Lighting"
                              ? "100% 100%, 14px 14px"
                              : undefined,
                          backgroundRepeat:
                            m.cat === "Brush" || m.cat === "Lighting"
                              ? "no-repeat, repeat"
                              : undefined,
                        }}
                      />
                      <span className="no">#{pad2(idx + 1)}</span>
                      {m.isCustom && <span className="cn">CUSTOM</span>}
                      <button
                        type="button"
                        className={`fv ${isFav ? "on" : ""}`}
                        title="FAVOURITE PATTERN"
                        onClick={(e) => toggleFav(m.id, e)}
                      >
                        {isFav ? "★" : "☆"}
                      </button>
                      <div className="meta">
                        <div className="title">{m.name}</div>
                        <div className="cat">{m.cat}</div>
                      </div>
                    </div>
                  );
                })}
                {filteredModes.length > vaultLimit && (
                  <button
                    type="button"
                    className="btn pri"
                    style={{
                      gridColumn: "1 / -1",
                      minHeight: "34px",
                      fontSize: "10.5px",
                      fontWeight: 800,
                      margin: "6px 0 10px",
                    }}
                    onClick={() =>
                      setVaultLimit((prev) => Math.min(filteredModes.length, prev + 36))
                    }
                  >
                    ⬇ SHOW MORE DESIGNS ({visibleVaultModes.length} / {filteredModes.length})
                  </button>
                )}
              </>
            )}
          </div>
        </aside>
      </div>

      {/* STUDIO STATUS FOOTER */}
      <footer className="studio-footer">
        <div className="footer-left">
          <div className="footer-active">
            <i></i>
            <span>
              #{pad2(curModeIdx + 1)} · {curMode.name} ({curMode.cat})
            </span>
          </div>
          <span>SEED #{P.seed}</span>
          <span>·</span>
          <span>
            RATIO {P.ratio || "1:1"} · {outDims.w}×{outDims.h} PX · ZERO SIDE-CUT · 100% MANUAL PROCEDURAL (NO AI)
          </span>
        </div>
        <div className="keys">
          <span>
            <kbd>SPACE</kbd> UNIQUE GENERATE
          </span>
          <span>
            <kbd>B</kbd> AUTO-BATCH FOLDER
          </span>
          <span>
            <kbd>E</kbd> EPS 10
          </span>
          <span>
            <kbd>S</kbd> VECTOR SVG
          </span>
          <span>
            <kbd>J</kbd> &gt;5MB JPG
          </span>
          <span>
            <kbd>CTRL+Z</kbd> UNDO
          </span>
        </div>
      </footer>

      {/* AUTO-BATCH MICROSTOCK FOLDER GENERATOR MODAL */}
      <div
        className={`modal ${batchModalOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget && !batchRunning) setBatchModalOpen(false);
        }}
      >
        <div className="mbox" style={{ maxWidth: "600px" }}>
          <div className="mh">
            <div>
              <h3>⚡ AUTO-BATCH MICROSTOCK FOLDER GENERATOR</h3>
              <p>
                100% MANUAL PROCEDURAL ENGINE · ZERO AI · ZERO DUPLICATES · INCLUDES ADOBE STOCK &amp; SHUTTERSTOCK CSV
              </p>
            </div>
            <button
              className="ib"
              disabled={batchRunning}
              onClick={() => setBatchModalOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="mb">
            <div className="r">
              <label>1. PATTERN STYLE TO GENERATE</label>
              <select
                value={batchScope}
                disabled={batchRunning}
                onChange={(e) => setBatchScope(e.target.value as any)}
              >
                <option value="current">
                  ACTIVE CANVAS DESIGN VARIATIONS ONLY (#{pad2(curModeIdx + 1)} · {curMode.name} · RECOMMENDED)
                </option>
                <option value="category">
                  ALL {curMode.cat.toUpperCase()} CATEGORY STYLES (
                  {modes.filter((m) => m.cat === curMode.cat).length} UNIQUE STYLES)
                </option>
                <option value="favs">★ ALL FAVOURITE STYLES ({favs.size || 1})</option>
                <option value="all">
                  ALL {modes.length} VAULT STYLES (100% DIFFERENT · ZERO SIMILAR)
                </option>
              </select>
            </div>

            <div className="r">
              <label>2. OUTPUT FILE FORMAT</label>
              <select
                value={batchFormat}
                disabled={batchRunning}
                onChange={(e) => setBatchFormat(e.target.value as any)}
              >
                <option value="eps_jpg">EPS 10 + 5–10 MB JPG PAIR (DIRECT MICROSTOCK UPLOAD)</option>
                <option value="eps">EPS 10 ONLY (.EPS ADOBE ILLUSTRATOR VECTOR)</option>
                <option value="all3">ALL 3 (EPS 10 + VECTOR SVG + 5–10 MB JPG)</option>
                <option value="both">BOTH (VECTOR SVG + 5–10 MB JPG PAIR)</option>
                <option value="svg">SVG ONLY (ADOBE ILLUSTRATOR VECTOR ARTBOARD)</option>
                <option value="jpg">JPG ONLY (STRICT 5 MB – 10 MB · 300 DPI MICROSTOCK)</option>
              </select>
            </div>

            <div className="r">
              <label>3. HOW MANY UNIQUE DESIGNS (QUANTITY)</label>
              <input
                type="number"
                min={1}
                max={500}
                disabled={batchRunning}
                value={batchCount}
                onChange={(e) => setBatchCount(Math.max(1, Math.min(500, +e.target.value || 1)))}
              />
            </div>
            <div className="seg" style={{ margin: "4px 0 10px" }}>
              {[10, 20, 50, 100, 200].map((cnt) => (
                <button
                  key={cnt}
                  disabled={batchRunning}
                  className={batchCount === cnt ? "on" : ""}
                  onClick={() => setBatchCount(cnt)}
                >
                  {cnt} DESIGNS
                </button>
              ))}
            </div>

            <div className="r">
              <label>4. BACKGROUND GRADIENT &amp; TEXTURE MODE</label>
              <select
                value={batchBgMode}
                disabled={batchRunning}
                onChange={(e) => setBatchBgMode(e.target.value as any)}
              >
                <option value="mix">AUTO-MIX RICH GRADIENTS + VECTOR TEXTURES + SOLID</option>
                <option value="gradient">ALWAYS RICH GRADIENT BACKGROUNDS</option>
                <option value="texture">ALWAYS WOVEN / MARBLE / FOIL VECTOR TEXTURES</option>
                <option value="current">KEEP CURRENT CANVAS BACKGROUND SETTINGS</option>
              </select>
            </div>

            <div className="r">
              <label>5. CANVAS RATIO FOR BATCH</label>
              <select
                value={P.ratio || "1:1"}
                disabled={batchRunning}
                onChange={(e) =>
                  setP((p) => ({ ...p, ratio: e.target.value as CanvasRatio }))
                }
              >
                {RATIO_LIST.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label} ({getRatioDims(Math.max(5200, +P.px || 5200), r.id).w}×
                    {getRatioDims(Math.max(5200, +P.px || 5200), r.id).h} PX)
                  </option>
                ))}
              </select>
            </div>

            <div className="mhelp" style={{ marginTop: "8px" }}>
              <div>
                <b>ZERO-COPYRIGHT &amp; MICROSTOCK COMPLIANCE:</b> EVERY GENERATED FILE IS 100% PROCEDURAL MATHEMATICAL VECTOR/RASTER ARTWORK WITH ZERO AI, ZERO SIDE-CUT MOTIFS, AND INCLUDES AN AUTO-GENERATED{" "}
                <code>MICROSTOCK_UPLOAD_METADATA.CSV</code> FOR BULK UPLOAD TO ADOBE STOCK, SHUTTERSTOCK &amp; FREEPIK.
              </div>
            </div>

            {(batchRunning || batchProgress.msg) && (
              <div
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  background: "var(--s2)",
                  border: "1px solid var(--ac)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "var(--ac)",
                    marginBottom: "6px",
                  }}
                >
                  <span>{batchProgress.msg}</span>
                  <span>
                    {batchProgress.done} / {batchProgress.total}
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "var(--bg)",
                    borderRadius: "99px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${
                        batchProgress.total
                          ? Math.round((batchProgress.done / batchProgress.total) * 100)
                          : 0
                      }%`,
                      height: "100%",
                      background: "linear-gradient(90deg, var(--ac), var(--ac2))",
                      transition: "width 0.15s ease",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mf">
            {batchRunning ? (
              <button
                className="btn"
                onClick={() => {
                  batchCancelRef.current = true;
                }}
              >
                ⏹ STOP BATCH
              </button>
            ) : (
              <button className="btn" onClick={() => setBatchModalOpen(false)}>
                CLOSE
              </button>
            )}
            <span style={{ flex: 1 }} />
            <button
              className="btn"
              disabled={batchRunning}
              onClick={() => runAutoBatchGenerate(true)}
            >
              📁 SAVE DIRECTLY TO PC FOLDER
            </button>
            <button
              className="btn pri"
              disabled={batchRunning}
              onClick={() => runAutoBatchGenerate(false)}
            >
              ⚡ BATCH GENERATE &amp; SAVE .ZIP FOLDER ({batchCount}×)
            </button>
          </div>
        </div>
      </div>

      {/* CUSTOM PROCEDURAL PATTERN BUILDER MODAL */}
      <div
        className={`modal ${codeModalOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setCodeModalOpen(false);
        }}
      >
        <div className="mbox">
          <div className="mh">
            <div>
              <h3>+ ADD CUSTOM PROCEDURAL PATTERN</h3>
              <p>
                WRITE OR PASTE A JAVASCRIPT <code>mode(&#123;...&#125;)</code> GENERATOR BLOCK TO ADD NEW CARDS TO YOUR VAULT
              </p>
            </div>
            <button className="ib" onClick={() => setCodeModalOpen(false)}>
              ✕
            </button>
          </div>
          <div className="mb">
            <div className="mhelp">
              <div>
                <b>DRAW HELPERS:</b> <code>m.grid(n, &apos;halfdrop&apos;|&apos;brick&apos;|&apos;grid&apos;, (x,y,i,j,cell)=&gt;)</code>{" "}
                · <code>m.scatter(count, minDist, (x,y,k)=&gt;)</code> · <code>m.put(x,y,rot,scale,svg)</code> (ZERO SIDE-CUT SAFE FRAME)
              </div>
              <div>
                <b>PALETTE &amp; SHAPES:</b> <code>m.col(i)</code> · <code>m.rcol()</code> · <code>m.st(col,scale).a</code> ·{" "}
                <code>SH.star / flower / daisy / heart / moon / cloud / drop / tri / ring / leaf / blob</code>
              </div>
            </div>
            <textarea
              className="code-input"
              spellCheck={false}
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
            />
            {codeMsg.text && (
              <div className={`merr ${codeMsg.err ? "err" : "ok"}`}>{codeMsg.text}</div>
            )}
          </div>
          <div className="mf">
            <button className="btn" onClick={() => setCodeInput(TEMPLATE)}>
              LOAD TEMPLATE
            </button>
            <button className="btn" onClick={handleClearCustom}>
              CLEAR SAVED CUSTOM
            </button>
            <span style={{ flex: 1 }} />
            <button className="btn" onClick={() => setCodeModalOpen(false)}>
              CANCEL
            </button>
            <button className="btn pri" onClick={handleRunCustomCode}>
              ADD TO VAULT
            </button>
          </div>
        </div>
      </div>

      {/* KEYBOARD SHORTCUTS MODAL */}
      <div
        className={`modal ${keyModalOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setKeyModalOpen(false);
        }}
      >
        <div className="mbox" style={{ maxWidth: "500px" }}>
          <div className="mh">
            <div>
              <h3>KEYBOARD SHORTCUTS</h3>
              <p>SPEED UP YOUR 100% MANUAL PROCEDURAL WORKFLOW</p>
            </div>
            <button className="ib" onClick={() => setKeyModalOpen(false)}>
              ✕
            </button>
          </div>
          <div className="mb">
            <div className="kgrid">
              <div>
                <kbd>SPACE</kbd>
                <span>ZERO-DUP GENERATE</span>
              </div>
              <div>
                <kbd>B</kbd>
                <span>AUTO-BATCH FOLDER</span>
              </div>
              <div>
                <kbd>R</kbd>
                <span>NEXT WEYL SEED</span>
              </div>
              <div>
                <kbd>↑ / ↓</kbd>
                <span>PREV / NEXT PATTERN</span>
              </div>
              <div>
                <kbd>G</kbd>
                <span>SHOW TILE SEAMS</span>
              </div>
              <div>
                <kbd>E</kbd>
                <span>EXPORT EPS 10 (.EPS)</span>
              </div>
              <div>
                <kbd>S</kbd>
                <span>EXPORT VECTOR SVG</span>
              </div>
              <div>
                <kbd>J</kbd>
                <span>EXPORT &gt;5MB JPG</span>
              </div>
              <div>
                <kbd>CTRL + Z</kbd>
                <span>UNDO ACTION</span>
              </div>
              <div>
                <kbd>1 – 4</kbd>
                <span>SWITCH INSPECTOR TABS</span>
              </div>
              <div>
                <kbd>?</kbd>
                <span>SHORTCUTS HELP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
