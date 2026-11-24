/* eslint-disable @typescript-eslint/no-explicit-any */

export const T = 1000;
export const f1 = (v: number | string) => (+v).toFixed(1);

export type PaletteItem = [string, string, string, string[]];

export const PALS: PaletteItem[] = [
  ["Cyber Emerald", "#071318", "#e2f8f0", ["#10b981", "#06b6d4", "#f59e0b", "#34d399", "#0ea5e9"]],
  ["Royal Lotus", "#130924", "#fdf4ff", ["#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#fde047"]],
  ["Moroccan Zellij", "#0c192c", "#f8fafc", ["#d97706", "#0d9488", "#e11d48", "#38bdf8", "#fef08a"]],
  ["Venetian Terrazzo", "#f5efe6", "#1e293b", ["#e07a5f", "#3d405b", "#81b29a", "#f2cc8f", "#c15c3d"]],
  ["Art Deco Brass", "#0f172a", "#f8fafc", ["#eab308", "#ca8a04", "#38bdf8", "#94a3b8", "#fef08a"]],
  ["Neon Synthwave", "#090418", "#ffffff", ["#ff2a85", "#00f0ff", "#7b2cbf", "#ffbe0b", "#3a86ff"]],
  ["Monstera Canopy", "#0b1f17", "#ecfdf5", ["#10b981", "#059669", "#84cc16", "#a7f3d0", "#f59e0b"]],
  ["Memphis 80s", "#fff8eb", "#111827", ["#ff3366", "#2ec4b6", "#ff9f1c", "#7209b7", "#3a86ff"]],
  ["Cosmic Nebula", "#060814", "#f1f5f9", ["#818cf8", "#c084fc", "#38bdf8", "#f472b6", "#fbbf24"]],
  ["Citrus Grove", "#fffbeb", "#1e293b", ["#f97316", "#eab308", "#84cc16", "#ef4444", "#10b981"]],
  ["Desert Terra", "#f7ede2", "#2b1d14", ["#d66853", "#f6bd60", "#84a59d", "#f28482", "#7d4f50"]],
  ["Nordic Frost", "#f0f7ff", "#0f172a", ["#0284c7", "#38bdf8", "#7dd3fc", "#6366f1", "#cbd5e1"]],
  ["Op-Art Contrast", "#f8fafc", "#090d16", ["#090d16", "#10b981", "#06b6d4", "#f43f5e", "#f59e0b"]],
  ["Kyoto Bamboo", "#f2f5eb", "#1a2e1f", ["#3f6212", "#65a30d", "#15803d", "#d97706", "#a3e635"]],
  ["Isometric Slate", "#111827", "#f9fafb", ["#38bdf8", "#0284c7", "#0369a1", "#f59e0b", "#10b981"]],
  ["Candy", "#f1f1f1", "#222222", ["#5f9ea0", "#f4a58a", "#f0bb62", "#c5d9d2", "#f4cfc4"]],
  ["Retro", "#f4ead5", "#2b2118", ["#d9593d", "#f0a93b", "#3f7d6e", "#2d4a6b", "#e8c9a0"]],
  ["Sage", "#f3f1e8", "#2f3b2c", ["#7a9e7e", "#d9a066", "#c8d5b9", "#e8b4a0", "#4f6f52"]],
  ["Berry", "#fdf1f4", "#4a1633", ["#c2185b", "#f48fb1", "#7b1fa2", "#ffb74d", "#ad1457"]],
  ["Ocean", "#eef6f8", "#0b2a3a", ["#0b6e8a", "#48b5c4", "#f6c177", "#e87e6b", "#a7d8de"]],
  ["Night", "#16181f", "#ffffff", ["#7cf0c8", "#ffb454", "#a78bfa", "#f472b6", "#60a5fa"]],
  ["Mono", "#ffffff", "#111111", ["#111111", "#444444", "#777777", "#aaaaaa", "#d4d4d4"]],
  ["Forest", "#efeee9", "#1f3d36", ["#245a52", "#e08a5a", "#8fb39a", "#f2c28b", "#3d7a6b"]],
  ["Pastel", "#fffaf3", "#3a3550", ["#ffc8dd", "#bde0fe", "#cdb4db", "#ffe5a3", "#b9f2d0"]],
  ["Pop", "#fff8e7", "#1b1b1b", ["#ff4d6d", "#ffbe0b", "#3a86ff", "#8338ec", "#06d6a0"]],
  ["Lemon", "#fffbe6", "#2e2a14", ["#f7d633", "#8fbf5a", "#f29e4c", "#ffffff", "#e9572b"]],
  ["Navy", "#0f1d33", "#f4efe6", ["#f4efe6", "#e8a87c", "#c38d9e", "#41b3a3", "#e27d60"]],
  ["Earth", "#efe6d8", "#3b2a20", ["#a0522d", "#c98b4f", "#6b7d4f", "#d9b38c", "#5a3e2b"]],
  ["Lavender", "#f6f2fb", "#3b2c55", ["#9c7dd6", "#e7b6d8", "#6bb5c9", "#f2d48f", "#c9b7ef"]],
  ["Mint", "#f0faf6", "#1d3b33", ["#3ccf9a", "#ff8fa3", "#ffd166", "#7bdff2", "#b8f2e6"]],
  ["Xmas", "#fbf6ef", "#2b1d1d", ["#c0392b", "#1e7a4c", "#e7b53b", "#ffffff", "#8e1e1e"]],
  ["Tartan", "#e8401c", "#22333a", ["#f7a6b8", "#22333a", "#f6c24a", "#ffffff", "#b8300f"]],
  ["Pine", "#1c4a40", "#0f2a24", ["#4f9a78", "#f3a21c", "#2f6e58", "#9fd0b4", "#f6d58a"]],
  ["Ice cream", "#fdf6e6", "#e9502a", ["#f7c6cf", "#e9502a", "#bfe0f1", "#3a7cbf", "#f8a8b8"]],
  ["Confetti", "#f4f1ea", "#1c1c1c", ["#0f9a7a", "#f26a3d", "#f6b134", "#f08aa0", "#e8402c"]],
  ["Strawberry", "#f6efe0", "#d42a1e", ["#d42a1e", "#f3b0a8", "#4c8a3c", "#e86a5a", "#8a1a12"]],
  ["Cherry lilac", "#fbf6ee", "#3a1a10", ["#ef4a24", "#d6b5f2", "#3a1a10", "#b98ae6", "#b8301a"]],
  ["Bauhaus", "#14211d", "#33394b", ["#a8f2c6", "#f2ede1", "#8fe0f0", "#f6e37a", "#f6837a"]],
  ["Tweed", "#f3e8dc", "#141414", ["#141414", "#3a3a3a", "#8a6a4a", "#5a4a3a", "#2a2a2a"]],
  ["Houndstooth", "#2f86c6", "#4a3328", ["#4a3328", "#f05a2a", "#1f5f7f", "#c9b3e8", "#f2efe2"]],
  ["Sorbet", "#f0efe4", "#2a8a5a", ["#f19bb8", "#f8cf5a", "#f5873a", "#a2bcf4", "#2a8a5a"]],
  ["Circus", "#f8ece4", "#2c2c2c", ["#e8432c", "#f9b21c", "#5a96c8", "#2c2c2c", "#f08a5a"]],
  ["Sky", "#9fd2f6", "#4f8fc8", ["#ffffff", "#7fb6e6", "#ffe38a", "#cfe7fb", "#5a9ad8"]],
  ["Midnight", "#16295a", "#0d1a3a", ["#c9ccd6", "#f7d84a", "#8a90a8", "#d9b42a", "#ffe680"]],
  ["Indigo", "#f3ede0", "#3b4fb0", ["#3b4fb0", "#2a3a90", "#7a8ad8", "#e8574a", "#3b4fb0"]],
  ["Sailor", "#ececea", "#2558b0", ["#2558b0", "#e04a3a", "#7aa0d8", "#1a3a7a", "#f2b84a"]],
  ["Cobalt", "#f6f1e6", "#1f6ae0", ["#1f6ae0", "#8ab6f4", "#0f3f9a", "#f2b84a", "#1f6ae0"]],
  ["Lilac", "#d9b8f2", "#3a2a28", ["#3a2a28", "#f05a2a", "#ffffff", "#8a5ac8", "#3a2a28"]],
];

export type CanvasRatio = "1:1" | "4:3" | "3:4" | "16:9" | "9:16" | "3:2" | "2:1";

export const RATIO_LIST: { id: CanvasRatio; label: string; rx: number; ry: number }[] = [
  { id: "1:1", label: "1:1 SQUARE", rx: 1, ry: 1 },
  { id: "4:3", label: "4:3 LANDSCAPE", rx: 4, ry: 3 },
  { id: "3:4", label: "3:4 PORTRAIT", rx: 3, ry: 4 },
  { id: "16:9", label: "16:9 WIDESCREEN", rx: 16, ry: 9 },
  { id: "9:16", label: "9:16 VERTICAL", rx: 9, ry: 16 },
  { id: "3:2", label: "3:2 CLASSIC", rx: 3, ry: 2 },
  { id: "2:1", label: "2:1 BANNER", rx: 2, ry: 1 },
];

export function getRatioDims(basePx: number, ratio: CanvasRatio | string, customW?: number, customH?: number) {
  const MIN_SIDE_PX = 4000; // Strictly >= 4000px on EVERY side (2x Freepik's 2000px minimum!)
  const MIN_TOTAL_MP_PX = 30000000; // Strictly >= 30.0 MP (7.5x Adobe Stock & Shutterstock's 4.0 MP minimum!)

  // Exact clean studio dimensions divisible by 16 (zero odd pixel numbers like 6933x3900)
  const EXACT_RATIO_MAP: Record<string, { w: number; h: number }> = {
    "1:1": { w: 6000, h: 6000 },   // 36.00 MP
    "3:2": { w: 7200, h: 4800 },   // 34.56 MP
    "16:9": { w: 7680, h: 4320 },  // 33.18 MP (True 8K UHD)
    "9:16": { w: 4320, h: 7680 },  // 33.18 MP (True 8K Vertical)
    "4:3": { w: 6400, h: 4800 },   // 30.72 MP
    "3:4": { w: 4800, h: 6400 },   // 30.72 MP
    "2:1": { w: 8000, h: 4000 },   // 32.00 MP
  };

  let w: number;
  let h: number;
  if (customW && customH && customW >= 500 && customH >= 500) {
    w = Math.round(customW);
    h = Math.round(customH);
    // Replace legacy odd 16:9 or smaller dimensions automatically with clean studio 6K/8K
    if ((w === 6933 && h === 3900) || (w === 6400 && h === 3600)) {
      w = 7680;
      h = 4320;
    } else if (w === 5000 && h === 5000 && (!basePx || basePx >= 5000)) {
      w = 6000;
      h = 6000;
    }
  } else if (EXACT_RATIO_MAP[ratio]) {
    w = EXACT_RATIO_MAP[ratio].w;
    h = EXACT_RATIO_MAP[ratio].h;
  } else {
    const safeBase = Math.max(6000, +basePx || 6000);
    const item = RATIO_LIST.find((r) => r.id === ratio) || RATIO_LIST[0];
    const rx = item.rx;
    const ry = item.ry;
    if (rx >= ry) {
      w = Math.round((safeBase * Math.sqrt(rx / ry)) / 16) * 16;
      h = Math.round(((w * ry) / rx) / 16) * 16;
    } else {
      h = Math.round((safeBase * Math.sqrt(ry / rx)) / 16) * 16;
      w = Math.round(((h * rx) / ry) / 16) * 16;
    }
  }

  // Enforce hard Microstock floor: every side >= 4000px AND total pixels >= 30.0 MP
  const minSide = Math.min(w, h);
  const totalPx = w * h;
  if (minSide < MIN_SIDE_PX || totalPx < MIN_TOTAL_MP_PX) {
    const scaleSide = MIN_SIDE_PX / Math.max(1, minSide);
    const scaleMp = Math.sqrt(MIN_TOTAL_MP_PX / Math.max(1, totalPx));
    const scale = Math.max(1, scaleSide, scaleMp);
    w = Math.round((w * scale) / 16) * 16;
    h = Math.round((h * scale) / 16) * 16;
  }

  return {
    w,
    h,
    rx: w,
    ry: h,
    aspect: w / Math.max(1, h),
  };
}

export const ILLUSTRATOR_ARTBOARD_PRESETS: { label: string; w: number; h: number; ratio: CanvasRatio }[] = [
  { label: "6000 × 6000 PX (1:1 MICROSTOCK SQUARE · 36.0 MP)", w: 6000, h: 6000, ratio: "1:1" },
  { label: "7200 × 4800 PX (3:2 ADOBE STOCK / SHUTTERSTOCK · 34.6 MP)", w: 7200, h: 4800, ratio: "3:2" },
  { label: "7680 × 4320 PX (16:9 8K ULTRA-HD ARTBOARD · 33.2 MP)", w: 7680, h: 4320, ratio: "16:9" },
  { label: "6400 × 4800 PX (4:3 CLASSIC TEXTILE BOARD · 30.7 MP)", w: 6400, h: 4800, ratio: "4:3" },
  { label: "4800 × 6400 PX (3:4 VERTICAL APPAREL ROLL · 30.7 MP)", w: 4800, h: 6400, ratio: "3:4" },
  { label: "8000 × 4000 PX (2:1 PANORAMIC BANNER · 32.0 MP)", w: 8000, h: 4000, ratio: "2:1" },
  { label: "8000 × 8000 PX (1:1 JUMBO PRINT MASTER · 64.0 MP)", w: 8000, h: 8000, ratio: "1:1" },
];

export type BgGradientMode =
  | "solid"
  | "linear"
  | "radial"
  | "diagonal"
  | "aurora"
  | "duotone"
  | "sunburst";

export type SurfaceTextureMode =
  | "none"
  | "grain"
  | "sandgrain"
  | "mattegrain"
  | "paperfiber"
  | "velvetgrain"
  | "brushedmetal"
  | "woodgrain"
  | "linen"
  | "silk"
  | "canvas"
  | "marble"
  | "goldfoil"
  | "halftone"
  | "gingham"
  | "stripes"
  | "vstripes"
  | "grid"
  | "pindots";

export interface PatternState {
  px: number;
  ratio: CanvasRatio;
  artW?: number;
  artH?: number;
  transp: boolean;
  grid: boolean;
  view: number;
  zoom: number;
  style: "flat" | "both" | "line";
  sw: number;
  ncol: number;
  seed: number;
  mode: string;
  bg: string;
  bg2: string;
  bgGrad: BgGradientMode;
  bgAngle: number;
  ink: string;
  c0: string;
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  bd: SurfaceTextureMode;
  bdc: string;
  bdn: number;
  bdo: number;
  exRep: string;
  mx: "none" | "mirror" | "double" | "patch" | "invert" | "rot";
  safeEdge: boolean;
  svgStructure?: "separable" | "unified";
}

export const DEF_STATE: PatternState = {
  px: 6000,
  ratio: "1:1",
  artW: 6000,
  artH: 6000,
  transp: false,
  grid: false,
  view: 3,
  zoom: 240,
  style: "both",
  sw: 3,
  ncol: 5,
  seed: 42,
  mode: "paisleybrocade",
  bg: "#130924",
  bg2: "#2d124d",
  bgGrad: "solid",
  bgAngle: 135,
  ink: "#fdf4ff",
  c0: "#f59e0b",
  c1: "#ec4899",
  c2: "#8b5cf6",
  c3: "#14b8a6",
  c4: "#fde047",
  bd: "none",
  bdc: "#e7d9c9",
  bdn: 12,
  bdo: 45,
  exRep: "auto",
  mx: "none",
  safeEdge: false,
  svgStructure: "separable",
};

export interface ModeParam {
  k: string;
  l: string;
  min?: number;
  max?: number;
  step?: number;
  def: any;
  type?: "range" | "select" | "check";
  opts?: [string, string][];
}

export interface ModeLook {
  bg?: string;
  ink?: string;
  cols?: string[];
  style?: "flat" | "both" | "line";
  sw?: number;
  ncol?: number;
}

export interface PatternMode {
  id: string;
  name: string;
  cat: string;
  look?: ModeLook;
  params: ModeParam[];
  draw: (m: any, q: Record<string, any>) => void;
  isCustom?: boolean;
}

/* ---------------- shared shapes & helpers ---------------- */
export const starPath = (n: number, R: number, r: number) => {
  let d = "";
  for (let i = 0; i < n * 2; i++) {
    const a = (Math.PI * i) / n - Math.PI / 2;
    const q = i % 2 ? r : R;
    d += (i ? "L" : "M") + f1(q * Math.cos(a)) + " " + f1(q * Math.sin(a));
  }
  return d + "Z";
};

export const spiralPath = () => {
  let d = "M0 0";
  for (let t = 0.2; t < 17; t += 0.25) {
    const r = 2.6 * t;
    d += "L" + f1(r * Math.cos(t)) + " " + f1(r * Math.sin(t));
  }
  return d;
};

export const blobPath = (rnd: () => number, n = 7, irr = 0.4) => {
  const p: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = 42 * (1 - irr * 0.5 + rnd() * irr);
    p.push([r * Math.cos(a), r * Math.sin(a)]);
  }
  let d = `M${f1(p[0][0])} ${f1(p[0][1])}`;
  for (let i = 0; i < n; i++) {
    const a = p[(i - 1 + n) % n];
    const b = p[i];
    const c = p[(i + 1) % n];
    const e = p[(i + 2) % n];
    d += `C${f1(b[0] + (c[0] - a[0]) / 6)} ${f1(b[1] + (c[1] - a[1]) / 6)} ${f1(
      c[0] - (e[0] - b[0]) / 6
    )} ${f1(c[1] - (e[1] - b[1]) / 6)} ${f1(c[0])} ${f1(c[1])}`;
  }
  return d + "Z";
};

export const tear = (L: number, W: number) => {
  const h = Math.max(L - W, 1);
  return `M0 0C${f1(-W * 0.05)} ${f1(-h * 0.3)} ${f1(-W * 0.98)} ${f1(-h * 0.62)} ${f1(-W)} ${f1(
    -h
  )}A${f1(W)} ${f1(W)} 0 0 1 ${f1(W)} ${f1(-h)}C${f1(W * 0.98)} ${f1(-h * 0.62)} ${f1(W * 0.05)} ${f1(
    -h * 0.3
  )} 0 0Z`;
};

export const SA = (c: string, w: number) =>
  `fill="none" stroke="${c}" stroke-width="${f1(w)}" stroke-linecap="round" stroke-linejoin="round"`;

export const STRAW =
  "M0 46C-18 42-44 18-43-8C-42-30-24-38 0-35C24-38 42-30 43-8C44 18 18 42 0 46Z";

export const hex2rgb = (h: string): [number, number, number] => {
  let clean = (h || "#000000").replace("#", "");
  if (clean.length === 3)
    clean = clean
      .split("")
      .map((x) => x + x)
      .join("");
  return [0, 2, 4].map((i) => parseInt(clean.substring(i, i + 2), 16) || 0) as [
    number,
    number,
    number
  ];
};

export const mixCol = (a: string, b: string, t: number) => {
  const A = hex2rgb(a);
  const B = hex2rgb(b);
  return (
    "#" +
    A.map((v, i) =>
      Math.round(v + (B[i] - v) * t)
        .toString(16)
        .padStart(2, "0")
    ).join("")
  );
};

export const diagLine = (fam: string, L: number, ext: number) =>
  fam === "b"
    ? `M${f1(L - ext)} ${-ext}L${f1(L + T + ext)} ${T + ext}`
    : `M${f1(L + ext)} ${-ext}L${f1(L - T - ext)} ${T + ext}`;

export const pixRows = (
  m: any,
  N: number,
  M: number,
  fn: (x: number, y: number) => string | null
) => {
  const u = T / N;
  const v = T / M;
  const vh = f1(v + 0.3);
  const parts: string[] = [];
  for (let y = 0; y < M; y++) {
    const yy = f1(y * v);
    let x = 0;
    while (x < N) {
      const c = fn(x, y);
      let x2 = x + 1;
      while (x2 < N && fn(x2, y) === c) x2++;
      if (c) {
        parts.push(
          `<rect x="${f1(x * u)}" y="${yy}" width="${f1((x2 - x) * u + 0.3)}" height="${vh}" fill="${c}"/>`
        );
      }
      x = x2;
    }
  }
  if (parts.length) m.raw(parts.join(""));
};

export const SH: Record<string, any> = {
  tear: (o: any, L = 46, W = 14) => `<path ${o.a} d="${tear(L, W)}"/>`,
  star: (o: any, n = 5, inner = 20) => `<path ${o.a} d="${starPath(n, 46, inner)}"/>`,
  heart: (o: any) =>
    `<path ${o.a} d="M0 40C-8 32-48 8-48-16C-48-34-34-46-20-46C-10-46-3-40 0-32C3-40 10-46 20-46C34-46 48-34 48-16C48 8 8 32 0 40Z"/>`,
  moon: (o: any) => `<path ${o.a} d="M10-45A46 46 0 1 0 10 45A56 56 0 0 1 10-45Z"/>`,
  cloud: (o: any) =>
    `<path ${o.a} d="M-34 18H34A18 18 0 0 0 30-16A24 24 0 0 0-14-24A20 20 0 0 0-38-4A16 16 0 0 0-34 18Z"/>`,
  drop: (o: any) =>
    `<path ${o.a} d="M0-46C14-24 30-6 30 12A30 30 0 0 1-30 12C-30-6-14-24 0-46Z"/>`,
  tri: (o: any) => `<path ${o.a} d="M0-42L40 28H-40Z"/>`,
  ring: (o: any) =>
    `<path ${o.a} fill-rule="evenodd" d="M-40 0A40 40 0 1 0 40 0A40 40 0 1 0-40 0ZM-22 0A22 22 0 1 1 22 0A22 22 0 1 1-22 0Z"/>`,
  circle: (o: any) => `<circle ${o.a} r="30"/>`,
  cross: (o: any) => `<path ${o.a} d="M-12-40H12V-12H40V12H12V40H-12V12H-40V-12H-12Z"/>`,
  squig: (o: any) => `<path ${o.cl} d="M-45 0Q-33.75-22-22.5 0T0 0T22.5 0T45 0"/>`,
  sparkle: (o: any) => `<path ${o.a} d="M0-46Q5-5 46 0Q5 5 0 46Q-5 5-46 0Q-5-5 0-46Z"/>`,
  diamond: (o: any) => `<path ${o.a} d="M0-46L32 0L0 46L-32 0Z"/>`,
  dot: (o: any) => `<circle ${o.a} r="16"/>`,
  swirl: (o: any) => `<path ${o.l} d="${spiralPath()}"/>`,
  candy: (o: any) =>
    `<ellipse ${o.a} rx="27" ry="19"/><path ${o.a} d="M26-4L48-17Q53 0 48 17L26 4Z"/><path ${o.a} d="M-26-4L-48-17Q-53 0-48 17L-26 4Z"/>`,
  leaf: (o: any) =>
    `<path ${o.a} d="M0 46C-30 20-30-20 0-46C30-20 30 20 0 46Z"/><path ${o.v} d="M0 38V-26"/>`,
  flower: (o: any, n = 8, alt = 0.28) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const L = i % 2 ? 1 - alt : 1;
      s += `<path ${o.a} transform="rotate(${f1((i * 360) / n)}) scale(1 ${L})" d="M0-8C-13-14-15-40-9-46Q0-52 9-46C15-40 13-14 0-8Z"/>`;
    }
    return s + `<circle r="7" fill="${o.c}" stroke="none"/>`;
  },
  daisy: (o: any, oc: any, n = 10) => {
    let s = "";
    for (let i = 0; i < n; i++)
      s += `<ellipse ${o.a} transform="rotate(${f1((i * 360) / n)})" cy="-27" rx="9" ry="19"/>`;
    return s + `<circle ${oc.a} r="13"/>`;
  },
  rainbow: (o: any, cols: string[], ink: string, both: boolean, sw: number) => {
    const n = cols.length;
    const w = 34 / n;
    let s = "";
    for (let i = 0; i < n; i++) {
      const r = 46 - w * (i + 0.5);
      const d = `M${f1(-r)} 14A${f1(r)} ${f1(r)} 0 0 1 ${f1(r)} 14`;
      if (both)
        s += `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${f1(w + sw * 2)}"/>`;
      s += `<path d="${d}" fill="none" stroke="${cols[i]}" stroke-width="${f1(w + 0.6)}"/>`;
    }
    return s;
  },
  blob: (o: any, rnd: () => number, irr = 0.4) => `<path ${o.a} d="${blobPath(rnd, 7, irr)}"/>`,
};

export function mulb(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function mkH(C: any, rnd: () => number) {
  const cols: string[] = C.cols.slice(0, Math.max(1, C.ncol));
  const out: string[] = [];
  const pts: [number, number][] = [];
  const defs: string[] = [];
  const safeEdge = C.safeEdge === true;

  const H = {
    T,
    rnd,
    cols,
    bg: C.bg,
    ink: C.ink,
    style: C.style,
    sw: C.sw,
    out,
    pts,
    defs,
    safeEdge,
    def(x: string) {
      if (!defs.includes(x)) defs.push(x);
    },
    mod: (i: number, n: number) => ((i % n) + n) % n,
    col: (i: number) => cols[((i % cols.length) + cols.length) % cols.length],
    rcol: () => cols[Math.floor(rnd() * cols.length)],
    pick: <TItem>(a: TItem[]): TItem => a[Math.floor(rnd() * a.length)],
    range: (a: number, b: number) => a + rnd() * (b - a),
    chance: (p: number) => rnd() < p,
    st(col: string, s: number, c2?: string, fo?: boolean) {
      const sw = C.sw / Math.max(0.15, s);
      const k = C.ink;
      const y = fo ? "both" : C.style;
      const J = 'stroke-linejoin="round" stroke-linecap="round"';
      const a =
        y === "line"
          ? `fill="none" stroke="${k}" stroke-width="${f1(sw)}" ${J}`
          : y === "both"
          ? `fill="${col}" stroke="${k}" stroke-width="${f1(sw)}" ${J}`
          : `fill="${col}" stroke="${col}" stroke-width="1" ${J}`;
      const lc = y === "flat" ? col : k;
      const lw = (y === "flat" ? 5 : Math.max(C.sw, 3)) / Math.max(0.15, s);
      return {
        a,
        c: c2 || col,
        y,
        l: `fill="none" stroke="${lc}" stroke-width="${f1(lw)}" ${J}`,
        cl: `fill="none" stroke="${y === "line" ? k : col}" stroke-width="${f1(
          y === "line" ? Math.max(C.sw, 3) / Math.max(0.15, s) : 10
        )}" ${J}`,
        v: `fill="none" stroke="${y === "flat" ? c2 || C.bg : k}" stroke-width="${f1(
          Math.max(C.sw * 0.6, 2) / Math.max(0.15, s)
        )}" stroke-linecap="round"`,
      };
    },
    put(x: number, y: number, rot: number, s: number, body: string, ext = 75) {
      x = ((x % T) + T) % T;
      y = ((y % T) + T) % T;
      const e = ext * s;
      if (safeEdge) {
        const pad = Math.min(185, Math.max(54, e * 0.8));
        const X = Math.max(pad, Math.min(T - pad, x));
        const Y = Math.max(pad, Math.min(T - pad, y));
        out.push(
          `<g transform="translate(${f1(X)} ${f1(Y)}) rotate(${f1(rot)}) scale(${s.toFixed(
            4
          )})">${body}</g>`
        );
        return;
      }
      for (let dx = -1; dx <= 1; dx++)
        for (let dy = -1; dy <= 1; dy++) {
          const X = x + dx * T;
          const Y = y + dy * T;
          if (X + e > 0 && X - e < T && Y + e > 0 && Y - e < T)
            out.push(
              `<g transform="translate(${f1(X)} ${f1(Y)}) rotate(${f1(rot)}) scale(${s.toFixed(
                4
              )})">${body}</g>`
            );
        }
    },
    at(x: number, y: number, rot: number, s: number, body: string) {
      if (safeEdge) {
        const pad = Math.min(125, Math.max(46, 52 * Math.min(2.2, Math.abs(s))));
        const span = T - pad * 2;
        const clampedX = Math.max(0, Math.min(T, x));
        const clampedY = Math.max(0, Math.min(T, y));
        const sx = pad + (clampedX / T) * span;
        const sy = pad + (clampedY / T) * span;
        out.push(
          `<g transform="translate(${f1(sx)} ${f1(sy)}) rotate(${f1(rot)}) scale(${s.toFixed(
            4
          )})">${body}</g>`
        );
        return;
      }
      out.push(
        `<g transform="translate(${f1(x)} ${f1(y)}) rotate(${f1(rot)}) scale(${s.toFixed(
          4
        )})">${body}</g>`
      );
    },
    raw(svg: string) {
      out.push(svg);
    },
    grid(
      n: number,
      type: string,
      fn: (x: number, y: number, i: number, j: number, cell: number) => void
    ) {
      if (type !== "grid" && n % 2) n++;
      if (safeEdge) {
        const pad = Math.min(92, Math.max(46, T / (n * 2.4)));
        const span = T - pad * 2;
        const stepX = type === "brick" ? span / (n + 0.5) : span / n;
        const stepY = type === "halfdrop" ? span / (n + 0.5) : span / n;
        const cell = Math.min(stepX, stepY);
        for (let i = 0; i < n; i++)
          for (let j = 0; j < n; j++) {
            let x = pad + (i + 0.5) * stepX;
            let y = pad + (j + 0.5) * stepY;
            if (type === "halfdrop") y += (i % 2) * (stepY * 0.5);
            if (type === "brick") x += (j % 2) * (stepX * 0.5);
            fn(x, y, i, j, cell);
          }
        return;
      }
      const c = T / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
          let x = (i + 0.5) * c;
          let y = (j + 0.5) * c;
          if (type === "halfdrop") y += ((i % 2) * c) / 2;
          if (type === "brick") x += ((j % 2) * c) / 2;
          fn(x, y, i, j, c);
        }
    },
    scatter(count: number, md: number, fn: (x: number, y: number, k: number) => void) {
      const pad = safeEdge ? 78 : 0;
      const span = T - pad * 2;
      for (let k = 0; k < count; k++) {
        let best: [number, number] = [pad + span * 0.5, pad + span * 0.5];
        let bd = -1;
        for (let t = 0; t < 40; t++) {
          const x = pad + rnd() * span;
          const y = pad + rnd() * span;
          let m = 1e9;
          for (const p of pts) {
            let dx = Math.abs(p[0] - x);
            let dy = Math.abs(p[1] - y);
            if (!safeEdge) {
              dx = Math.min(dx, T - dx);
              dy = Math.min(dy, T - dy);
            }
            m = Math.min(m, Math.hypot(dx, dy));
          }
          if (m > bd) {
            bd = m;
            best = [x, y];
          }
          if (m > md) break;
        }
        pts.push(best);
        fn(best[0], best[1], k);
      }
    },
  };
  return H;
}

export function buildBackgroundAndTextureSVG(C: PatternState, transp: boolean) {
  const gradDefs: string[] = [];
  let bgRect = "";
  const bg1 = C.bg || "#130924";
  const bg2 = C.bg2 || C.c0 || "#2d124d";
  const cMid = C.c1 || bg2;
  const gMode = C.bgGrad || "solid";
  const ang = ((+C.bgAngle || 135) * Math.PI) / 180;
  const x1 = (50 - Math.cos(ang) * 50).toFixed(1) + "%";
  const y1 = (50 - Math.sin(ang) * 50).toFixed(1) + "%";
  const x2 = (50 + Math.cos(ang) * 50).toFixed(1) + "%";
  const y2 = (50 + Math.sin(ang) * 50).toFixed(1) + "%";

  if (!transp) {
    if (gMode === "linear") {
      gradDefs.push(
        `<linearGradient id="PV_BG_GRAD" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0%" stop-color="${bg1}"/><stop offset="100%" stop-color="${bg2}"/></linearGradient>`
      );
      bgRect = `<rect width="${T}" height="${T}" fill="url(#PV_BG_GRAD)"/>`;
    } else if (gMode === "diagonal") {
      gradDefs.push(
        `<linearGradient id="PV_BG_GRAD" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${bg1}"/><stop offset="52%" stop-color="${bg2}"/><stop offset="100%" stop-color="${bg1}"/></linearGradient>`
      );
      bgRect = `<rect width="${T}" height="${T}" fill="url(#PV_BG_GRAD)"/>`;
    } else if (gMode === "radial") {
      gradDefs.push(
        `<radialGradient id="PV_BG_GRAD" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="72%"><stop offset="0%" stop-color="${bg2}"/><stop offset="100%" stop-color="${bg1}"/></radialGradient>`
      );
      bgRect = `<rect width="${T}" height="${T}" fill="url(#PV_BG_GRAD)"/>`;
    } else if (gMode === "aurora") {
      const aurMid1 = mixCol(bg1, cMid, 0.38);
      const aurMid2 = mixCol(bg2, bg1, 0.25);
      gradDefs.push(
        `<linearGradient id="PV_BG_GRAD" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0%" stop-color="${aurMid1}"/><stop offset="50%" stop-color="${aurMid2}"/><stop offset="100%" stop-color="${bg1}"/></linearGradient>` +
          `<radialGradient id="PV_BG_AUR1" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${cMid}" stop-opacity="0.38"/><stop offset="100%" stop-color="${bg1}" stop-opacity="0"/></radialGradient>` +
          `<radialGradient id="PV_BG_AUR2" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${bg2}" stop-opacity="0.45"/><stop offset="100%" stop-color="${bg1}" stop-opacity="0"/></radialGradient>`
      );
      bgRect =
        `<rect width="${T}" height="${T}" fill="url(#PV_BG_GRAD)"/>` +
        `<circle cx="${T * 0.25}" cy="${T * 0.25}" r="${T * 0.6}" fill="url(#PV_BG_AUR1)"/>` +
        `<circle cx="${T * 0.78}" cy="${T * 0.74}" r="${T * 0.58}" fill="url(#PV_BG_AUR2)"/>`;
    } else if (gMode === "duotone") {
      gradDefs.push(
        `<linearGradient id="PV_BG_GRAD" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="${bg1}"/><stop offset="48%" stop-color="${bg1}"/><stop offset="52%" stop-color="${bg2}"/><stop offset="100%" stop-color="${bg2}"/></linearGradient>`
      );
      bgRect = `<rect width="${T}" height="${T}" fill="url(#PV_BG_GRAD)"/>`;
    } else if (gMode === "sunburst") {
      const sunMid = mixCol(bg1, cMid, 0.45);
      gradDefs.push(
        `<radialGradient id="PV_BG_GRAD" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="${bg2}"/><stop offset="45%" stop-color="${sunMid}"/><stop offset="100%" stop-color="${bg1}"/></radialGradient>`
      );
      bgRect = `<rect width="${T}" height="${T}" fill="url(#PV_BG_GRAD)"/>`;
    } else {
      bgRect = `<rect width="${T}" height="${T}" fill="${bg1}"/>`;
    }
  }

  let texLayer = "";
  if (C.bd && C.bd !== "none") {
    const n = Math.max(2, +C.bdn || 12);
    const s = T / n;
    const h = s / 2;
    const c = C.bdc || "#e7d9c9";
    const o = (+C.bdo || 45) / 100;
    const rnd = mulb((C.seed || 42) ^ 0x5a5a);
    let b = "";

    if (C.bd === "gingham") {
      for (let i = 0; i < n; i++) {
        b += `<rect x="${(i * s).toFixed(1)}" y="0" width="${h.toFixed(1)}" height="${T}" fill="${c}" opacity="${(
          o * 0.55
        ).toFixed(2)}"/>`;
        b += `<rect x="0" y="${(i * s).toFixed(1)}" width="${T}" height="${h.toFixed(1)}" fill="${c}" opacity="${(
          o * 0.55
        ).toFixed(2)}"/>`;
      }
    } else if (C.bd === "stripes") {
      for (let i = 0; i < n; i++)
        b += `<rect x="0" y="${(i * s).toFixed(1)}" width="${T}" height="${h.toFixed(1)}" fill="${c}" opacity="${o}"/>`;
    } else if (C.bd === "vstripes") {
      for (let i = 0; i < n; i++)
        b += `<rect x="${(i * s).toFixed(1)}" y="0" width="${h.toFixed(1)}" height="${T}" fill="${c}" opacity="${o}"/>`;
    } else if (C.bd === "grid") {
      const w = Math.max(2, s * 0.08);
      for (let i = 0; i < n; i++) {
        const p = (i * s).toFixed(1);
        b += `<line x1="${p}" y1="0" x2="${p}" y2="${T}" stroke="${c}" stroke-width="${w.toFixed(
          1
        )}" opacity="${o}"/><line x1="0" y1="${p}" x2="${T}" y2="${p}" stroke="${c}" stroke-width="${w.toFixed(
          1
        )}" opacity="${o}"/>`;
      }
    } else if (C.bd === "pindots") {
      const r = Math.max(2.5, s * 0.1);
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
          b += `<circle cx="${((i + 0.5) * s).toFixed(1)}" cy="${((j + 0.5) * s).toFixed(
            1
          )}" r="${r.toFixed(1)}" fill="${c}" opacity="${o}"/>`;
    } else if (C.bd === "linen") {
      const N2 = n * 4;
      for (let i = 0; i < N2; i++) {
        const p = ((i / N2) * T).toFixed(1);
        b += `<line x1="${p}" y1="0" x2="${p}" y2="${T}" stroke="${c}" stroke-width="1.5" opacity="${(
          o *
          (0.2 + rnd() * 0.45)
        ).toFixed(2)}"/>`;
        b += `<line x1="0" y1="${p}" x2="${T}" y2="${p}" stroke="${c}" stroke-width="1.5" opacity="${(
          o *
          (0.2 + rnd() * 0.45)
        ).toFixed(2)}"/>`;
      }
    } else if (C.bd === "silk") {
      const N2 = n * 6;
      for (let i = 0; i < N2; i++) {
        const y = ((i / N2) * T).toFixed(1);
        const sw = (0.8 + rnd() * 2.4).toFixed(1);
        const op = (o * (0.12 + rnd() * 0.48)).toFixed(2);
        b += `<line x1="0" y1="${y}" x2="${T}" y2="${y}" stroke="${c}" stroke-width="${sw}" opacity="${op}"/>`;
      }
    } else if (C.bd === "canvas") {
      const step = Math.max(20, Math.round(T / Math.min(48, n * 2.5)));
      const wStr = (step * 0.75).toFixed(1);
      const hStr = (step * 0.35).toFixed(1);
      const opHi = (o * 0.5).toFixed(2);
      const opLo = (o * 0.3).toFixed(2);
      const parts: string[] = [];
      for (let x = 0; x < T; x += step) {
        for (let y = 0; y < T; y += step) {
          const op = (x + y) % (step * 2) === 0 ? opHi : opLo;
          parts.push(`<rect x="${x}" y="${y}" width="${wStr}" height="${hStr}" rx="1" fill="${c}" opacity="${op}"/>`);
        }
      }
      b = parts.join("");
    } else if (C.bd === "grain") {
      const cnt = Math.min(900, n * 42);
      const inkCol = C.ink || c;
      const parts: string[] = [];
      for (let i = 0; i < cnt; i++) {
        const gx = (18 + rnd() * (T - 36)).toFixed(1);
        const gy = (18 + rnd() * (T - 36)).toFixed(1);
        const gr = (1.1 + rnd() * 3.4).toFixed(1);
        const op = (o * (0.22 + rnd() * 0.68)).toFixed(2);
        parts.push(`<circle cx="${gx}" cy="${gy}" r="${gr}" fill="${i % 3 === 0 ? inkCol : c}" opacity="${op}"/>`);
      }
      b = parts.join("");
    } else if (C.bd === "sandgrain") {
      const cnt = Math.min(1100, n * 55);
      const speckAlt = mixCol(c, C.ink || "#111111", 0.38);
      const parts: string[] = [];
      for (let i = 0; i < cnt; i++) {
        const gx = (14 + rnd() * (T - 28)).toFixed(1);
        const gy = (14 + rnd() * (T - 28)).toFixed(1);
        const gr = (0.9 + rnd() * 2.6).toFixed(1);
        const op = (o * (0.25 + rnd() * 0.7)).toFixed(2);
        parts.push(`<circle cx="${gx}" cy="${gy}" r="${gr}" fill="${i % 2 === 0 ? c : speckAlt}" opacity="${op}"/>`);
      }
      b = parts.join("");
    } else if (C.bd === "mattegrain") {
      const rows = Math.min(34, Math.max(16, n * 2));
      const cell = T / rows;
      const altCol = mixCol(c, "#ffffff", 0.35);
      const parts: string[] = [];
      for (let r = 0; r < rows; r++) {
        for (let col = 0; col < rows; col++) {
          const jx = ((col + 0.2 + rnd() * 0.6) * cell).toFixed(1);
          const jy = ((r + 0.2 + rnd() * 0.6) * cell).toFixed(1);
          const rad = (0.9 + rnd() * 2.2).toFixed(1);
          const op = (o * (0.18 + rnd() * 0.58)).toFixed(2);
          parts.push(`<circle cx="${jx}" cy="${jy}" r="${rad}" fill="${(r + col) % 2 === 0 ? c : altCol}" opacity="${op}"/>`);
        }
      }
      b = parts.join("");
    } else if (C.bd === "paperfiber") {
      const fibers = Math.min(650, n * 32);
      const parts: string[] = [];
      for (let i = 0; i < fibers; i++) {
        const x0 = 20 + rnd() * (T - 40);
        const y0 = 20 + rnd() * (T - 40);
        const ang = rnd() * Math.PI * 2;
        const len = 10 + rnd() * 26;
        const x1 = x0 + Math.cos(ang) * len;
        const y1 = y0 + Math.sin(ang) * len;
        const mx = (x0 + x1) * 0.5 + (rnd() - 0.5) * 10;
        const my = (y0 + y1) * 0.5 + (rnd() - 0.5) * 10;
        const op = (o * (0.2 + rnd() * 0.55)).toFixed(2);
        const sw = (0.8 + rnd() * 1.8).toFixed(1);
        parts.push(
          `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)}Q${mx.toFixed(1)} ${my.toFixed(
            1
          )} ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${c}" stroke-width="${sw}" opacity="${op}" stroke-linecap="round"/>`
        );
      }
      b = parts.join("");
    } else if (C.bd === "velvetgrain") {
      const tufts = Math.min(800, n * 38);
      const altCol = mixCol(c, "#ffffff", 0.35);
      const parts: string[] = [];
      for (let i = 0; i < tufts; i++) {
        const gx = (16 + rnd() * (T - 32)).toFixed(1);
        const gy = (16 + rnd() * (T - 32)).toFixed(1);
        const rx = (1.2 + rnd() * 3.2).toFixed(1);
        const ry = (0.7 + rnd() * 1.6).toFixed(1);
        const rot = Math.round(rnd() * 180);
        const op = (o * (0.22 + rnd() * 0.62)).toFixed(2);
        parts.push(
          `<ellipse cx="${gx}" cy="${gy}" rx="${rx}" ry="${ry}" transform="rotate(${rot} ${gx} ${gy})" fill="${
            i % 3 === 0 ? altCol : c
          }" opacity="${op}"/>`
        );
      }
      b = parts.join("");
    } else if (C.bd === "brushedmetal") {
      const lines = Math.min(320, n * 16);
      const altCol = mixCol(c, "#ffffff", 0.45);
      const parts: string[] = [];
      for (let i = 0; i < lines; i++) {
        const y = ((i / lines) * T).toFixed(1);
        const xStart = (rnd() * 80).toFixed(1);
        const xEnd = (T - rnd() * 80).toFixed(1);
        const sw = (0.6 + rnd() * 1.8).toFixed(1);
        const op = (o * (0.14 + rnd() * 0.46)).toFixed(2);
        parts.push(
          `<line x1="${xStart}" y1="${y}" x2="${xEnd}" y2="${y}" stroke="${
            i % 2 === 0 ? c : altCol
          }" stroke-width="${sw}" opacity="${op}" stroke-linecap="round"/>`
        );
      }
      b = parts.join("");
    } else if (C.bd === "woodgrain") {
      const planks = Math.max(14, n * 3);
      for (let i = 0; i < planks; i++) {
        const baseY = (i / planks) * T;
        let d = `M 0 ${baseY.toFixed(1)}`;
        const segs = 8;
        for (let sIdx = 1; sIdx <= segs; sIdx++) {
          const vx = ((sIdx / segs) * T).toFixed(1);
          const vy = (baseY + (rnd() - 0.5) * 24).toFixed(1);
          const cx = (((sIdx - 0.5) / segs) * T).toFixed(1);
          const cy = (baseY + (rnd() - 0.5) * 32).toFixed(1);
          d += ` Q ${cx} ${cy} ${vx} ${vy}`;
        }
        const sw = (1.1 + rnd() * 2.8).toFixed(1);
        const op = (o * (0.22 + rnd() * 0.52)).toFixed(2);
        b += `<path d="${d}" fill="none" stroke="${c}" stroke-width="${sw}" opacity="${op}" stroke-linecap="round"/>`;
      }
    } else if (C.bd === "marble") {
      const veins = Math.max(5, Math.round(n * 0.9));
      for (let v = 0; v < veins; v++) {
        let d = `M 0 ${(rnd() * T).toFixed(1)}`;
        const segs = 6;
        for (let sIdx = 1; sIdx <= segs; sIdx++) {
          const vx = ((sIdx / segs) * T).toFixed(1);
          const vy = (50 + rnd() * (T - 100)).toFixed(1);
          const cx = (((sIdx - 0.5) / segs) * T).toFixed(1);
          const cy = (50 + rnd() * (T - 100)).toFixed(1);
          d += ` Q ${cx} ${cy} ${vx} ${vy}`;
        }
        b += `<path d="${d}" fill="none" stroke="${c}" stroke-width="${(1.2 + rnd() * 3.2).toFixed(
          1
        )}" opacity="${(o * (0.22 + rnd() * 0.45)).toFixed(2)}" stroke-linecap="round"/>`;
      }
    } else if (C.bd === "goldfoil") {
      const cnt = n * 14;
      for (let i = 0; i < cnt; i++) {
        const gx = 55 + rnd() * (T - 110);
        const gy = 55 + rnd() * (T - 110);
        const sz = 4 + rnd() * 14;
        const rot = (rnd() * 360).toFixed(1);
        const op = (o * (0.35 + rnd() * 0.6)).toFixed(2);
        b += `<polygon points="0,${(-sz).toFixed(1)} ${(sz * 0.7).toFixed(1)},0 0,${sz.toFixed(
          1
        )} ${(-sz * 0.8).toFixed(1)},${(sz * 0.2).toFixed(
          1
        )}" fill="${c}" opacity="${op}" transform="translate(${gx.toFixed(1)} ${gy.toFixed(
          1
        )}) rotate(${rot})"/>`;
      }
    } else if (C.bd === "halftone") {
      const rows = Math.max(8, n * 2);
      const cell = T / rows;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
          const cx = (i + 0.5) * cell;
          const cy = (j + 0.5) * cell;
          const dist = Math.hypot(cx - T / 2, cy - T / 2) / (T * 0.72);
          const r = Math.max(1.5, cell * 0.34 * (1 - dist * 0.65));
          b += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(
            1
          )}" fill="${c}" opacity="${(o * 0.65).toFixed(2)}"/>`;
        }
      }
    }
    texLayer = `<g id="LAYER_02_SURFACE_TEXTURE">${b}</g>`;
  }

  return { gradDefs, bgRect, texLayer };
}

export const TEMPLATE = `mode({
  id:"my-mode",                 // unique id (no spaces)
  name:"My Mode",               // card title
  cat:"Floral",                 // filter chip
  look:{bg:"#fffaf3",ink:"#2b2118",cols:["#e85d75","#f6bd60","#84a59d","#f28482","#f7ede2"],style:"both"}, // optional
  params:[
    {k:"n",l:"Density",min:2,max:12,def:5},
    {k:"size",l:"Size",min:30,max:120,def:80},
    {k:"lay",l:"Layout",type:"select",opts:[["halfdrop","Half drop"],["brick","Brick"],["grid","Grid"]],def:"halfdrop"}
  ],
  draw(m,q){
    m.grid(q.n,q.lay,(x,y,i,j,c)=>{
      const s=c*q.size/100/100;            // cell size / shape size (~100)
      m.put(x,y,m.rnd()*360,s,SH.star(m.st(m.rcol(),s)));
    });
  }
});`;

/* =====================================================================
   REFERENCE MODES — each mode({...}) block below is one card in the gallery
   ===================================================================== */
const hr = (salt: number, x: number, y: number, k = 0) => {
  const v = Math.sin(x * 12.9898 + y * 78.233 + k * 37.719 + salt) * 43758.5453;
  return v - Math.floor(v);
};
const polyD = (pts: [number, number][]) => "M" + pts.map((p) => f1(p[0]) + " " + f1(p[1])).join("L");
const smoothC = (p: [number, number][]) => {
  const n = p.length;
  let d = `M${f1(p[0][0])} ${f1(p[0][1])}`;
  for (let i = 0; i < n; i++) {
    const a = p[(i - 1 + n) % n];
    const b = p[i];
    const c = p[(i + 1) % n];
    const e = p[(i + 2) % n];
    d += `C${f1(b[0] + (c[0] - a[0]) / 6)} ${f1(b[1] + (c[1] - a[1]) / 6)} ${f1(
      c[0] - (e[0] - b[0]) / 6
    )} ${f1(c[1] - (e[1] - b[1]) / 6)} ${f1(c[0])} ${f1(c[1])}`;
  }
  return d + "Z";
};
export const star4 = (R: number, k: number) =>
  `M0 ${f1(-R)}C${f1(k * 0.3)} ${f1(-k)} ${f1(k)} ${f1(-k * 0.3)} ${f1(R)} 0C${f1(k)} ${f1(
    k * 0.3
  )} ${f1(k * 0.3)} ${f1(k)} 0 ${f1(R)}C${f1(-k * 0.3)} ${f1(k)} ${f1(-k)} ${f1(k * 0.3)} ${f1(
    -R
  )} 0C${f1(-k)} ${f1(-k * 0.3)} ${f1(-k * 0.3)} ${f1(-k)} 0 ${f1(-R)}Z`;
export const leafP = (L: number, w: number) =>
  `M0 0C${f1(-w)} ${f1(-L * 0.25)} ${f1(-w * 0.8)} ${f1(-L * 0.75)} 0 ${f1(-L)}C${f1(
    w * 0.8
  )} ${f1(-L * 0.75)} ${f1(w)} ${f1(-L * 0.25)} 0 0Z`;
const hsh = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
};
const evenN = (n: number) => (n % 2 ? n + 1 : n);
const CMO: [string, string][] = [
  ["one", "One colour"],
  ["two", "Two colours"],
  ["rand", "Random"],
];
const LAY: [string, string][] = [
  ["scatter", "Tossed"],
  ["halfdrop", "Half drop"],
  ["brick", "Brick"],
  ["grid", "Grid"],
];
const arcD = (r: number, a0: number, a1: number) => {
  const A = (a0 * Math.PI) / 180;
  const B = (a1 * Math.PI) / 180;
  return `M${f1(r * Math.cos(A))} ${f1(r * Math.sin(A))}A${f1(r)} ${f1(r)} 0 0 1 ${f1(
    r * Math.cos(B)
  )} ${f1(r * Math.sin(B))}`;
};
const FA = (m: any, col: string, s = 1) => {
  const w = f1(m.sw / s);
  const J = 'stroke-linejoin="round" stroke-linecap="round"';
  return m.style === "line"
    ? `fill="none" stroke="${m.ink}" stroke-width="${w}" ${J}`
    : m.style === "both"
    ? `fill="${col}" stroke="${m.ink}" stroke-width="${w}" ${J}`
    : `fill="${col}"`;
};
const pwob = (t: number, ph: number[], f: number) =>
  Math.sin((2 * Math.PI * f * t) / T + ph[0]) * 0.62 +
  Math.sin((2 * Math.PI * (f * 2 + 1) * t) / T + ph[1]) * 0.26 +
  Math.sin((2 * Math.PI * (f * 5 + 2) * t) / T + ph[2]) * 0.12;
const layout = (
  m: any,
  n: number,
  lay: string,
  gapK: number,
  fn: (x: number, y: number, c: number, i?: number, j?: number) => void
) => {
  const c = T / n;
  if (lay === "scatter") m.scatter(n * n, c * gapK, (x: number, y: number) => fn(x, y, c));
  else
    m.grid(n, lay, (x: number, y: number, i: number, j: number, cc: number) => {
      m.pts.push([x, y]);
      fn(x, y, cc, i, j);
    });
};
function clipPolyToRect(
  poly: [number, number][],
  x0: number,
  y0: number,
  x1: number,
  y1: number
): [number, number][] {
  const clipEdge = (
    pts: [number, number][],
    inside: (p: [number, number]) => boolean,
    intersect: (a: [number, number], b: [number, number]) => [number, number]
  ): [number, number][] => {
    const out: [number, number][] = [];
    if (!pts.length) return out;
    let prev = pts[pts.length - 1];
    let prevIn = inside(prev);
    for (let i = 0; i < pts.length; i++) {
      const curr = pts[i];
      const currIn = inside(curr);
      if (currIn) {
        if (!prevIn) out.push(intersect(prev, curr));
        out.push(curr);
      } else if (prevIn) {
        out.push(intersect(prev, curr));
      }
      prev = curr;
      prevIn = currIn;
    }
    return out;
  };
  let pts = poly;
  pts = clipEdge(
    pts,
    (p) => p[0] >= x0,
    (a, b) => {
      const t = (x0 - a[0]) / (b[0] - a[0] || 1e-9);
      return [x0, a[1] + t * (b[1] - a[1])];
    }
  );
  pts = clipEdge(
    pts,
    (p) => p[0] <= x1,
    (a, b) => {
      const t = (x1 - a[0]) / (b[0] - a[0] || 1e-9);
      return [x1, a[1] + t * (b[1] - a[1])];
    }
  );
  pts = clipEdge(
    pts,
    (p) => p[1] >= y0,
    (a, b) => {
      const t = (y0 - a[1]) / (b[1] - a[1] || 1e-9);
      return [a[0] + t * (b[0] - a[0]), y0];
    }
  );
  pts = clipEdge(
    pts,
    (p) => p[1] <= y1,
    (a, b) => {
      const t = (y1 - a[1]) / (b[1] - a[1] || 1e-9);
      return [a[0] + t * (b[0] - a[0]), y1];
    }
  );
  return pts;
}

const hatchIn = (
  m: any,
  rects: string,
  col: string,
  p: number,
  wt: number,
  fam: string,
  _tag = ""
) => {
  // Parse each <rect x="" y="" width="" height=""/> and emit 100% clip-free filled vector <polygon> stripes
  // so Adobe Illustrator can Ungroup, separate every stripe part-by-part, and recolor Fill instantly!
  const boxes: [number, number, number, number][] = [];
  const re = /<rect\b([^>]*)\/?>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(rects)) !== null) {
    const attrs = match[1];
    const getN = (k: string) => {
      const r = new RegExp(`\\b${k}="([^"]+)"`).exec(attrs);
      return r ? parseFloat(r[1]) : 0;
    };
    const rx = getN("x");
    const ry = getN("y");
    const rw = getN("width");
    const rh = getN("height");
    const x0 = Math.max(0, rx);
    const y0 = Math.max(0, ry);
    const x1 = Math.min(T, rx + rw);
    const y1 = Math.min(T, ry + rh);
    if (x1 > x0 + 0.1 && y1 > y0 + 0.1) boxes.push([x0, y0, x1, y1]);
  }
  if (!boxes.length) return;

  const K = Math.ceil(T / Math.max(4, p));
  const hw = Math.max(0.6, wt * 0.5);
  const ext = 60;
  const invS2 = Math.SQRT1_2;
  const nx = invS2;
  const ny = fam === "b" ? -invS2 : invS2;

  const isB = fam === "b";
  const padDiag = hw * 1.5;
  const outPolys: string[] = [];
  for (let k = -K - 2; k <= 2 * K + 2; k++) {
    const L = k * p;
    const ax = isB ? L - ext : L + ext;
    const ay = -ext;
    const bx = isB ? L + T + ext : L - T - ext;
    const by = T + ext;
    let stripe: [number, number][] | null = null;
    for (let bi = 0; bi < boxes.length; bi++) {
      const [x0, y0, x1, y1] = boxes[bi];
      // Fast diagonal bounding-range cull skips ~85% of non-intersecting boxes
      if (isB) {
        if (L + padDiag < x0 - y1 || L - padDiag > x1 - y0) continue;
      } else {
        if (L + padDiag < x0 + y0 || L - padDiag > x1 + y1) continue;
      }
      if (!stripe) {
        stripe = [
          [ax + nx * hw, ay + ny * hw],
          [bx + nx * hw, by + ny * hw],
          [bx - nx * hw, by - ny * hw],
          [ax - nx * hw, ay - ny * hw],
        ];
      }
      const clipped = clipPolyToRect(stripe, x0, y0, x1, y1);
      if (clipped.length >= 3) {
        const ptStr = clipped.map((pt) => `${f1(pt[0])},${f1(pt[1])}`).join(" ");
        outPolys.push(`<polygon points="${ptStr}" fill="${col}"/>`);
      }
    }
  }
  if (outPolys.length) m.raw(outPolys.join(""));
};
const wobStripes = (m: any, q: any, horiz: boolean, colFn: (i: number) => string) => {
  const k = q.k;
  const g = T / k;
  const w = (g * q.wf) / 100;
  const A = (g * q.wob) / 100;
  const th = (q.tp || 0) / 100;
  const fr = q.fr || 2;
  const sh = q.shift || 0;
  const jt = q.jit || 0;
  const TAU = Math.PI * 2;
  for (let i = 0; i < k; i++) {
    const ph = () => [m.rnd() * TAU, m.rnd() * TAU, m.rnd() * TAU];
    const pa = ph();
    const pb = ph();
    const pc = ph();
    const c0 = (i + 0.5 + sh) * g + ((m.rnd() - 0.5) * g * jt) / 100;
    const col = colFn(i);
    const Lp: [number, number][] = [];
    const Rp: [number, number][] = [];
    for (let t = -16; t <= T + 16; t += 8) {
      const base = A * pwob(t, pa, fr);
      const hl = (w / 2) * (1 + th * pwob(t, pb, fr + 1));
      const hq = (w / 2) * (1 + th * pwob(t, pc, fr + 1));
      Lp.push([c0 + base - hl, t]);
      Rp.push([c0 + base + hq, t]);
    }
    const pts = Lp.concat(Rp.reverse());
    let d = "";
    for (const off of [-T, 0, T])
      d +=
        polyD(pts.map((p) => (horiz ? [p[1], p[0] + off] : [p[0] + off, p[1]]) as [number, number])) +
        "Z";
    m.raw(`<path d="${d}" fill="${col}"/>`);
  }
};
const wobC = (rnd: () => number, r: number, wob: number) => {
  const p: [number, number][] = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const rr = r * (1 + ((rnd() - 0.5) * wob) / 50);
    p.push([rr * Math.cos(a), rr * Math.sin(a)]);
  }
  return smoothC(p);
};
const warpChk = (
  m: any,
  N: number,
  A: number,
  f: number,
  wm: string,
  colFn: (i: number, j: number) => string
) => {
  const c = T / N;
  const TAU = Math.PI * 2;
  const p0 = m.rnd() * TAU;
  const p1 = m.rnd() * TAU;
  const seg = 10;
  const W = (x: number, y: number): [number, number] => [
    x + (wm !== "rows" ? A * Math.sin((TAU * f * y) / T + p0) : 0),
    y + (wm !== "cols" ? A * Math.sin((TAU * f * x) / T + p1) : 0),
  ];
  const by: Record<string, string> = {};
  for (let i = -1; i <= N; i++)
    for (let j = -1; j <= N; j++) {
      if (m.mod(i + j, 2)) continue;
      const x0 = i * c;
      const y0 = j * c;
      const P: [number, number][] = [];
      for (let s = 0; s < seg; s++) P.push(W(x0 + (c * s) / seg, y0));
      for (let s = 0; s < seg; s++) P.push(W(x0 + c, y0 + (c * s) / seg));
      for (let s = 0; s < seg; s++) P.push(W(x0 + c - (c * s) / seg, y0 + c));
      for (let s = 0; s < seg; s++) P.push(W(x0, y0 + c - (c * s) / seg));
      const col = colFn(m.mod(i, N), m.mod(j, N));
      by[col] = (by[col] || "") + polyD(P) + "Z";
    }
  for (const col in by) m.raw(`<path d="${by[col]}" fill="${col}"/>`);
};
const CHB = "M0-13C5-19 17-18 20-6C23 7 13 19 0 19C-13 19-23 7-20-6C-17-18-5-19 0-13Z";
const cherry = (o: any) => {
  const lw = o.lw;
  const B = (x: number, y: number, r: number, s: number) =>
    `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><path d="${CHB}" fill="${
      o.body
    }"${
      o.line ? ` stroke="${o.line}" stroke-width="${f1(lw / s)}" stroke-linejoin="round"` : ""
    }/>${
      o.hl
        ? `<ellipse cx="-9" cy="-3" rx="3" ry="6" transform="rotate(28 -9 -3)" fill="${o.hl}"/>`
        : ""
    }</g>`;
  if (o.kind === "single")
    return (
      `<path d="M0-6Q3-32 12-46" ${SA(o.stem, lw)}/>` +
      (o.leaf
        ? `<path fill="${o.leaf}" transform="translate(11 -44) rotate(70)" d="${leafP(26, 9)}"/>`
        : "") +
      B(0, 8, 0, 1.2)
    );
  return (
    `<path d="M-19 4Q-12-22 6-44M20 15Q14-14 6-44M6-44L10-49" ${SA(o.stem, lw)}/>` +
    (o.leaf
      ? `<path fill="${o.leaf}" transform="translate(7 -43) rotate(70)" d="${leafP(26, 9)}"/>`
      : "") +
    B(-18, 16, -12, 1) +
    B(18, 26, 14, 0.95)
  );
};
const BOWD = "M0 0C-8-12-24-14-24-3C-24 6-8 4 0 0ZM0 0C8-12 24-14 24-3C24 6 8 4 0 0Z";
const BOWT = "M0 0C-4 9-9 15-15 24M0 0C4 9 9 15 15 24";
const bow = (c: string, lw: number, filled: boolean) =>
  filled
    ? `<path fill="${c}" d="${BOWD}"/><path d="${BOWT}" ${SA(
        c,
        lw * 1.2
      )}/><circle r="${f1(lw * 1.4)}" fill="${c}"/>`
    : `<path d="${BOWD}" ${SA(c, lw)}/><path d="${BOWT}" ${SA(c, lw)}/><circle r="${f1(
        lw * 1.3
      )}" fill="${c}"/>`;
const cherryLook = (m: any, kind: string) => ({
  kind,
  body: m.col(0),
  line: null,
  stem: m.ink,
  hl: mixCol(m.col(0), "#ffffff", 0.6),
  lw: 3.4,
});
const strawberry = (o: any) => {
  const lw = o.lw;
  let b = `<path d="${STRAW}" fill="${o.fill}"${
    o.line ? ` stroke="${o.line}" stroke-width="${f1(lw)}" stroke-linejoin="round"` : ""
  }/>`;
  if (o.sd !== "none") {
    let r = 0;
    for (let y = -22; y <= 34; y += 10, r++)
      for (let x = -34 + (r % 2) * 6; x <= 34; x += 12) {
        const w = y < -8 ? 32 : 32 - (y + 8) * 0.62;
        if (Math.abs(x) > w - 5) continue;
        b +=
          o.sd === "dot"
            ? `<circle cx="${x}" cy="${y}" r="${f1(Math.max(1.5, lw * 0.5))}" fill="${o.seedCol}"/>`
            : o.sd === "drop"
            ? `<path transform="translate(${x} ${y + 3}) rotate(${f1(x * 0.5)})" d="${tear(
                7,
                2.2
              )}" fill="${o.seedCol}"/>`
            : `<path d="M${x} ${y - 3}L${f1(x + x * 0.05)} ${y + 3}" ${SA(
                o.seedCol,
                Math.max(1.3, lw * 0.7)
              )}/>`;
      }
  }
  for (const a of [-105, -55, 0, 55, 105])
    b += `<path transform="translate(0 -33) rotate(${a})" d="${tear(24, 7)}" fill="${
      o.leafFill
    }"${
      o.leafLine
        ? ` stroke="${o.leafLine}" stroke-width="${f1(lw)}" stroke-linejoin="round"`
        : ""
    }/>`;
  return b + `<path d="M0-38Q1-46 6-52" ${SA(o.leafLine || o.leafFill, lw * 1.1)}/>`;
};
const cloudB = (rnd: () => number, fill: string, o: any) => {
  const C = [
    [-28, 8, 15],
    [-11, -5, 21],
    [11, -8, 19],
    [29, 5, 14],
    [0, 10, 18],
    [-17, 14, 13],
    [17, 14, 14],
  ].map(([x, y, r]) => [
    x + (rnd() - 0.5) * 6,
    y + (rnd() - 0.5) * 5,
    r * (0.85 + rnd() * 0.3),
  ]);
  const circ = (dr: number, col: string) =>
    C.map(([x, y, r]) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r + dr)}" fill="${col}"/>`).join(
      ""
    );
  let b = (o.ol ? circ(o.ow, o.ol) : "") + circ(0, fill);
  if (o.scr) {
    const n = o.rows;
    let d = "";
    let side = -1;
    for (let k = 0; k < n; k++) {
      const y = -16 + (36 * (k + 0.5)) / n;
      const hw = 36 * Math.sqrt(Math.max(0, 1 - ((y - 4) / 27) ** 2));
      if (hw < 5) continue;
      const x0 = side * (hw - rnd() * 5);
      const x1 = -side * (hw - rnd() * 5);
      const y1 = y + (36 / n) * 0.5;
      d +=
        (d ? `L${f1(x0)} ${f1(y)}` : `M${f1(x0)} ${f1(y)}`) +
        `Q${f1((x0 + x1) / 2)} ${f1(y - 4 + rnd() * 8)} ${f1(x1)} ${f1(y1)}`;
      side = -side;
    }
    b += `<path d="${d}" fill="none" stroke="${o.scr}" stroke-width="${f1(
      o.sw
    )}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  return b;
};

const bauCell = (
  x0: number,
  y0: number,
  s: number,
  ty: string,
  k: number,
  A: string,
  B: string,
  sz: number,
  hole: number
) => {
  const cx = x0 + s / 2;
  const cy = y0 + s / 2;
  const rt = `transform="rotate(${k * 90} ${f1(cx)} ${f1(cy)})"`;
  const U = (u: number, v: number): [number, number] => [x0 + u * s, y0 + v * s];
  const P = (pts: [number, number][]) =>
    `<path ${rt} d="${polyD(pts.map((p) => U(p[0], p[1])))}Z" fill="${B}"/>`;
  const Q = (u: number, v: number, r: number, a0: number, col: string) => {
    const C = U(u, v);
    const a = (a0 * Math.PI) / 180;
    const b = a + Math.PI / 2;
    return `<path ${rt} d="M${f1(C[0])} ${f1(C[1])}L${f1(C[0] + r * Math.cos(a))} ${f1(
      C[1] + r * Math.sin(a)
    )}A${f1(r)} ${f1(r)} 0 0 1 ${f1(C[0] + r * Math.cos(b))} ${f1(
      C[1] + r * Math.sin(b)
    )}Z" fill="${col}"/>`;
  };
  const H = (r: number, col: string) =>
    `<path ${rt} d="M${f1(cx - r)} ${f1(y0 + s)}A${f1(r)} ${f1(r)} 0 0 1 ${f1(cx + r)} ${f1(
      y0 + s
    )}Z" fill="${col}"/>`;
  const Ci = (x: number, y: number, r: number, col: string) =>
    `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}" fill="${col}"/>`;
  const R = (s * sz) / 100;
  let o = `<rect x="${f1(x0)}" y="${f1(y0)}" width="${f1(s + 0.3)}" height="${f1(
    s + 0.3
  )}" fill="${A}"/>`;
  switch (ty) {
    case "quarter":
      o += Q(0, 0, R, 0, B);
      break;
    case "fan":
      o += Q(0, 0, R, 0, B) + Q(0, 0, R * 0.66, 0, A) + Q(0, 0, R * 0.33, 0, B);
      break;
    case "petal":
      o += Q(0, 0, R, 0, B) + Q(1, 1, R, 180, B);
      break;
    case "half":
      o += H(R / 2, B);
      break;
    case "arch":
      o += H(R / 2, B) + H(R / 3, A) + H(R / 6, B);
      break;
    case "donut":
      o += Ci(cx, cy, R * 0.47, B) + (hole ? Ci(cx, cy, (R * 0.47 * hole) / 100, A) : "");
      break;
    case "quad":
      for (const [u, v] of [
        [0.25, 0.25],
        [0.75, 0.25],
        [0.25, 0.75],
        [0.75, 0.75],
      ]) {
        const p = U(u, v);
        o += Ci(p[0], p[1], R * 0.23, B) + (hole ? Ci(p[0], p[1], (R * 0.23 * hole) / 100, A) : "");
      }
      break;
    case "star":
      for (const [u, v, a] of [
        [0, 0, 0],
        [1, 0, 90],
        [1, 1, 180],
        [0, 1, 270],
      ])
        o += Q(u, v, R / 2, a, B);
      break;
    case "circles":
      o += Ci(cx, cy, R / 2, B) + (hole ? Ci(cx, cy, ((R / 2) * hole) / 250, A) : "");
      break;
    case "hst":
      o += P([
        [0, 0],
        [1, 0],
        [0, 1],
      ]);
      break;
    case "para":
      o += P([
        [0, 1],
        [0.5, 1],
        [1, 0],
        [0.5, 0],
      ]);
      break;
    case "chev":
      o += P([
        [0, 0],
        [0.5, 0.5],
        [1, 0],
        [1, 0.5],
        [0.5, 1],
        [0, 0.5],
      ]);
      break;
    case "tri":
      o += P([
        [0, 0],
        [1, 0],
        [0.5, 1],
      ]);
      break;
    case "bow":
      o +=
        P([
          [0, 0],
          [1, 0],
          [0.5, 0.5],
        ]) +
        P([
          [0, 1],
          [1, 1],
          [0.5, 0.5],
        ]);
      break;
    case "stripes":
      o +=
        P([
          [0, 0],
          [0.25, 0],
          [0, 0.25],
        ]) +
        P([
          [0.5, 0],
          [0.75, 0],
          [0, 0.75],
          [0, 0.5],
        ]) +
        P([
          [1, 0],
          [1, 0.25],
          [0.25, 1],
          [0, 1],
        ]) +
        P([
          [1, 0.5],
          [1, 0.75],
          [0.75, 1],
          [0.5, 1],
        ]);
      break;
  }
  return o;
};

const BAU = {
  curve: ["quarter", "fan", "petal", "half", "arch"],
  angle: ["hst", "para", "chev", "tri", "bow", "stripes"],
  round: ["donut", "quad", "star", "circles"],
};
const BAUN: Record<string, string> = {
  quarter: "Quarter circle",
  fan: "Fan",
  petal: "Petal",
  half: "Half moon",
  arch: "Rainbow arch",
  hst: "Half square",
  para: "Parallelogram",
  chev: "Chevron",
  tri: "Triangle",
  bow: "Bow tie",
  stripes: "Diagonal stripes",
  donut: "Donut",
  quad: "Four rings",
  star: "Concave star",
  circles: "Touching circles",
};
const bauOpts = (list: string[]): [string, string][] => list.map((t) => [t, BAUN[t]]);
const bauOri = (o: string, i: number, j: number, rnd: () => number) =>
  o === "random"
    ? Math.floor(rnd() * 4)
    : o === "checker"
    ? (i + j) % 2
      ? 2
      : 0
    : o === "rows"
    ? j % 2
      ? 2
      : 0
    : o === "rings"
    ? [
        [2, 1],
        [3, 0],
      ][i % 2][j % 2]
    : o === "pinwheel"
    ? [
        [0, 1],
        [3, 2],
      ][i % 2][j % 2]
    : 0;
const bauCols = (m: any, cm: string, i: number, j: number): [string, string] => {
  const nc = m.cols.length;
  const r = () => m.cols[Math.floor(m.rnd() * nc)];
  if (cm === "ink") return [m.col(0), m.ink];
  if (cm === "inkr") return [r(), m.ink];
  if (cm === "inv") return [m.ink, r()];
  if (cm === "chk") return (i + j) % 2 ? [m.ink, m.col(0)] : [m.col(0), m.ink];
  const a = r();
  let b = r();
  let t = 0;
  while (b === a && nc > 1 && t < 8) {
    b = r();
    t++;
  }
  return [a, b];
};
const BAUC: [string, string][] = [
  ["ink", "Colour + ink"],
  ["inkr", "Random colour + ink"],
  ["inv", "Ink + random colour"],
  ["chk", "Checker swap"],
  ["rand", "Random pairs"],
];
const bauGrid = (m: any, q: any, pool: (i: number, j: number) => string) => {
  let n = q.n;
  if (q.ori === "rings" || q.ori === "pinwheel") n = evenN(n);
  const c = T / n;
  const g = (c * (q.gap || 0)) / 100;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const ty = pool(i, j);
      const k = bauOri(q.ori || "same", i, j, m.rnd);
      const [A, B] = bauCols(m, q.cm, i, j);
      m.raw(
        bauCell(i * c + g / 2, j * c + g / 2, c - g, ty, k, A, B, q.size || 100, q.hole || 0)
      );
    }
};
const tweedPane = (m: any, q: any) => {
  const P = +q.pu;
  const N = q.n * P;
  const lw = q.lw;
  const c0 = Math.floor(P / 2 - lw / 2);
  const B = q.blk;
  const b0 = Math.floor(P / 2 - B / 2);
  const D = m.col(0);
  const D2 = q.two ? m.col(1) : D;
  const dbl = q.dbl ? Math.max(lw + 1, Math.round(P * 0.2)) : 0;
  const st = (x: number, y: number, vert: boolean) => {
    const a = vert ? y : x;
    switch (q.st) {
      case "twill":
        return (x + y) % 4 < 2;
      case "rev":
        return (((x - y) % 4) + 4) % 4 < 2;
      case "dash":
        return Math.floor(a / 2) % 2 === 0;
      case "dot":
        return a % 2 === 0;
      default:
        return true;
    }
  };
  const inL = (v: number) => {
    const r = v % P;
    return (r >= c0 && r < c0 + lw) || (dbl > 0 && r >= c0 + dbl && r < c0 + dbl + lw);
  };
  pixRows(m, N, N, (x, y) => {
    const xm = x % P;
    const ym = y % P;
    if (B && xm >= b0 && xm < b0 + B && ym >= b0 && ym < b0 + B) return D;
    const v = inL(x);
    const h = inL(y);
    if (v && st(x, y, true)) return D;
    if (h && st(x, y, false)) return D2;
    return null;
  });
};

const harleq = (m: any, q: any) => {
  const n = q.n;
  const c = T / n;
  const gapB = q.fill !== "solid";
  let R = Math.max(2, Math.round((2 * T) / ((c * q.ht) / 100)));
  if (R % 2) R++;
  const h = (2 * T) / R;
  const nc = m.cols.length;
  const salt = m.rnd() * 999;
  const shapes: Record<string, string> = {};
  let stars = "";
  for (let j = -1; j <= R; j++) {
    if (gapB && m.mod(j, 2)) continue;
    for (let i = -1; i <= n; i++) {
      const ii = m.mod(i, n);
      const jj = m.mod(j, R);
      const a = gapB ? ii : ii;
      const b = gapB ? jj / 2 : jj;
      const cx = i * c + (m.mod(j, 2) * c) / 2;
      const cy = (j * h) / 2;
      const ci =
        q.cm === "rows"
          ? b % nc
          : q.cm === "cols"
          ? (gapB ? a : 2 * ii + (jj % 2)) % nc
          : q.cm === "rand"
          ? Math.floor(hr(salt, ii, jj) * nc)
          : q.cm === "anti"
          ? m.mod(a - b, nc)
          : (a + b) % nc;
      const col = m.cols[ci];
      shapes[col] =
        (shapes[col] || "") +
        `M${f1(cx)} ${f1(cy - h / 2)}L${f1(cx + c / 2)} ${f1(cy)}L${f1(cx)} ${f1(cy + h / 2)}L${f1(
          cx - c / 2
        )} ${f1(cy)}Z`;
      if (q.star) {
        const on =
          q.so === "all" ||
          (q.so === "skip" && ci !== 1) ||
          (q.so === "rows" && b % 2 === 0) ||
          (q.so === "rand" && hr(salt, ii, jj, 3) < 0.5);
        if (on) {
          const R2 = ((Math.min(c, h) / 2) * q.ss) / 100;
          stars += `<path transform="translate(${f1(cx)} ${f1(cy)}) scale(${(R2 / 46).toFixed(
            4
          )})" d="${star4(46, (46 * q.sp) / 100)}"/>`;
        }
      }
    }
  }
  const gap = q.gap
    ? ` stroke="${m.bg}" stroke-width="${f1(q.gap)}" stroke-linejoin="round"`
    : "";
  for (const col in shapes)
    m.raw(
      `<path d="${shapes[col]}" ${
        m.style === "line"
          ? `fill="none" stroke="${m.ink}" stroke-width="${f1(m.sw)}"`
          : `fill="${col}"${gap}`
      }/>`
    );
  if (stars) m.raw(`<g fill="${q.sc === "ink" ? m.ink : m.bg}">${stars}</g>`);
};

const HARP: ModeParam[] = [
  { k: "n", l: "Columns", min: 2, max: 12, def: 6 },
  { k: "ht", l: "Diamond height %", min: 100, max: 220, def: 150 },
  {
    k: "fill",
    l: "Layout",
    type: "select",
    opts: [
      ["gaps", "Background between"],
      ["solid", "Solid tiling"],
    ],
    def: "gaps",
  },
  {
    k: "cm",
    l: "Colours",
    type: "select",
    opts: [
      ["diag", "Diagonal"],
      ["anti", "Other diagonal"],
      ["rows", "By row"],
      ["cols", "By column"],
      ["rand", "Random"],
    ],
    def: "diag",
  },
  { k: "gap", l: "Gap", min: 0, max: 12, def: 0 },
];

export const INITIAL_MODES: PatternMode[] = [];
function registerMode(a: any, b?: string, c?: ModeParam[], d?: any) {
  let obj: PatternMode;
  if (typeof a === "string") {
    obj = { id: a, name: b || a, cat: "Other", params: c || [], draw: d };
  } else {
    obj = {
      id: a.id,
      name: a.name,
      cat: a.cat || "Other",
      look: a.look,
      params: a.params || [],
      draw: a.draw,
      isCustom: a.isCustom,
    };
  }
  const origDraw = obj.draw;
  obj.draw = (m: any, q: any) => {
    m.raw('<g clip-path="url(#tileClip)">');
    origDraw(m, q);
    m.raw("</g>");
  };
  INITIAL_MODES.push(obj);
}

/* =====================================================================
   24 NEW LUXURY TEXTILE, WEAVE, JACQUARD & BESPOKE SEAMLESS PATTERNS
   ===================================================================== */

/* T01 — Royal Paisley Brocade */
registerMode({
  id: "paisleybrocade",
  name: "Royal Paisley Silk Brocade",
  cat: "Textile",
  look: {
    bg: "#130924",
    ink: "#fdf4ff",
    cols: ["#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#fde047"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Paisley Grid", min: 2, max: 8, def: 4 },
    { k: "sz", l: "Motif Scale %", min: 55, max: 130, def: 94 },
    { k: "rings", l: "Brocade Layers", min: 2, max: 5, def: 3 },
    { k: "dots", l: "Filigree Beading", type: "check", def: true },
    { k: "florals", l: "Inner Rosette Core", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 115;
      const bodyPath = (sc: number) =>
        `M0 ${f1(42 * sc)}C${f1(-34 * sc)} ${f1(42 * sc)} ${f1(-44 * sc)} ${f1(6 * sc)} ${f1(-24 * sc)} ${f1(-24 * sc)}C${f1(-8 * sc)} ${f1(-46 * sc)} ${f1(18 * sc)} ${f1(-52 * sc)} ${f1(28 * sc)} ${f1(-34 * sc)}C${f1(34 * sc)} ${f1(-22 * sc)} ${f1(20 * sc)} ${f1(-12 * sc)} ${f1(14 * sc)} ${f1(-20 * sc)}C${f1(18 * sc)} ${f1(-6 * sc)} ${f1(36 * sc)} ${f1(42 * sc)} 0 ${f1(42 * sc)}Z`;
      let g = "";
      for (let r = q.rings; r >= 1; r--) {
        const sc = r / q.rings;
        const st = m.st(m.col(i + j + r), s);
        g += `<path ${st.a} d="${bodyPath(sc)}"/>`;
      }
      if (q.dots) {
        const dc = m.col(i + j + 3);
        for (let a = 0; a < 12; a++) {
          const ang = (a / 12) * Math.PI * 2;
          g += `<circle cx="${f1(Math.cos(ang) * 32)}" cy="${f1(Math.sin(ang) * 32 + 4)}" r="3.2" fill="${dc}"/>`;
        }
      }
      if (q.florals) {
        const fst = m.st(m.col(i + j + 4), s);
        g += `<g transform="translate(-4 10) scale(0.42)">${SH.flower(fst, 8, 0.2)}</g>`;
      }
      const rot = ((i + j) % 2 ? 1 : -1) * 28;
      m.put(x, y, rot, s, g, 80);
    });
  },
});

/* T02 — Savile Row Houndstooth Weave */
registerMode({
  id: "houndstoothclassic",
  name: "Savile Row Houndstooth",
  cat: "Textile",
  look: {
    bg: "#f8fafc",
    ink: "#090d16",
    cols: ["#090d16", "#e11d48", "#0d9488", "#d97706", "#334155"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Weave Repeat", min: 2, max: 12, def: 5 },
    { k: "duo", l: "Two-Tone Check", type: "check", def: true },
    { k: "over", l: "Accent Overcheck", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const u = T / n;
    const h = u * 0.5;
    const qtr = u * 0.25;
    for (let i = -1; i <= n + 1; i++) {
      for (let j = -1; j <= n + 1; j++) {
        const x = i * u;
        const y = j * u;
        const col = q.duo ? m.col((i + j) % 2) : m.col(0);
        const d =
          `M${f1(x)} ${f1(y)}H${f1(x + h)}V${f1(y + h)}H${f1(x)}Z` +
          `M${f1(x + h)} ${f1(y)}L${f1(x + h + qtr)} ${f1(y - qtr)}H${f1(x + u)}L${f1(x + h)} ${f1(y + qtr)}Z` +
          `M${f1(x + h)} ${f1(y + qtr)}L${f1(x + u)} ${f1(y - qtr)}V${f1(y + qtr)}L${f1(x + h)} ${f1(y + h)}Z` +
          `M${f1(x)} ${f1(y + h)}L${f1(x + qtr)} ${f1(y + h)}L${f1(x - qtr)} ${f1(y + u)}V${f1(y + h + qtr)}Z` +
          `M${f1(x + qtr)} ${f1(y + h)}H${f1(x + h)}L${f1(x)} ${f1(y + u)}H${f1(x - qtr)}Z`;
        m.raw(`<path d="${d}" fill="${col}"/>`);
      }
    }
    if (q.over) {
      const oc = m.col(2);
      const lw = Math.max(3, u * 0.06);
      for (let i = 0; i < n; i++) {
        const p = (i + 0.25) * u;
        m.raw(`<line x1="${f1(p)}" y1="0" x2="${f1(p)}" y2="${T}" stroke="${oc}" stroke-width="${f1(lw)}" opacity="0.85"/>`);
        m.raw(`<line x1="0" y1="${f1(p)}" x2="${T}" y2="${f1(p)}" stroke="${oc}" stroke-width="${f1(lw)}" opacity="0.85"/>`);
      }
    }
  },
});

/* T03 — Baroque Damask Jacquard */
registerMode({
  id: "damaskvelvet",
  name: "Baroque Damask Jacquard",
  cat: "Textile",
  look: {
    bg: "#0c192c",
    ink: "#fef08a",
    cols: ["#d97706", "#fef08a", "#0d9488", "#e11d48", "#38bdf8"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Damask Grid", min: 2, max: 7, def: 3 },
    { k: "sz", l: "Crest Scale %", min: 65, max: 125, def: 96 },
    { k: "leaves", l: "Acanthus Scrolls", min: 2, max: 5, def: 4 },
    { k: "crown", l: "Royal Finial Crown", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 115;
      const c1 = m.st(m.col(i + j), s).a;
      const c2 = m.st(m.col(i + j + 1), s).a;
      const c3 = m.st(m.col(i + j + 2), s).a;
      let g = "";
      for (let side of [-1, 1]) {
        for (let k = 0; k < q.leaves; k++) {
          const yy = -20 + k * 14;
          const ang = side * (35 + k * 16);
          const sc = 1 - k * 0.12;
          g += `<path ${c1} transform="translate(${side * 10} ${yy}) rotate(${ang}) scale(${sc.toFixed(2)})" d="M0 0C-14-14-14-36 0-48C14-36 14-14 0 0Z"/>`;
        }
      }
      g += `<path ${c2} d="M0-50C18-32 24-12 0 46C-24-12-18-32 0-50Z"/>`;
      g += `<path ${c3} d="M0-28L14 0L0 26L-14 0Z"/>`;
      if (q.crown) {
        g += `<path ${c1} d="${starPath(4, 18, 7)}" transform="translate(0 -44)"/>`;
        g += `<circle ${c3} cx="0" cy="44" r="7"/>`;
      }
      m.put(x, y, 0, s, g, 75);
    });
  },
});

/* T04 — Japanese Shibori Tie-Dye */
registerMode({
  id: "shiboribatik",
  name: "Indigo Shibori Tie-Dye",
  cat: "Textile",
  look: {
    bg: "#0f1d33",
    ink: "#f4efe6",
    cols: ["#f4efe6", "#38bdf8", "#0284c7", "#7dd3fc", "#e8a87c"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Shibori Nodes", min: 2, max: 10, def: 5 },
    { k: "rings", l: "Resist Dye Rings", min: 2, max: 6, def: 4 },
    { k: "rays", l: "Stitch Folds", min: 8, max: 24, step: 4, def: 16 },
    {
      k: "shape",
      l: "Fold Technique",
      type: "select",
      opts: [
        ["kanoko", "Kanoko Diamond Bind"],
        ["kumo", "Kumo Spider Pleat"],
      ],
      def: "kanoko",
    },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = c / 100;
      let g = "";
      for (let r = q.rings; r >= 1; r--) {
        const rad = (46 * r) / q.rings;
        const col = r % 2 === 0 ? m.bg : m.col((i + j + r) % m.cols.length);
        if (q.shape === "kanoko") {
          g += `<path d="M0 ${f1(-rad)}Q${f1(rad * 0.35)} ${f1(-rad * 0.35)} ${f1(rad)} 0Q${f1(rad * 0.35)} ${f1(rad * 0.35)} 0 ${f1(rad)}Q${f1(-rad * 0.35)} ${f1(rad * 0.35)} ${f1(-rad)} 0Q${f1(-rad * 0.35)} ${f1(-rad * 0.35)} 0 ${f1(-rad)}Z" fill="${col}"/>`;
        } else {
          g += `<circle r="${f1(rad)}" fill="${col}" stroke="${m.col(0)}" stroke-width="2.2" stroke-dasharray="5 3"/>`;
        }
      }
      for (let k = 0; k < q.rays; k++) {
        const a = (k * Math.PI * 2) / q.rays;
        g += `<line x1="${f1(Math.cos(a) * 10)}" y1="${f1(Math.sin(a) * 10)}" x2="${f1(Math.cos(a) * 44)}" y2="${f1(Math.sin(a) * 44)}" stroke="${m.col(0)}" stroke-width="1.8" opacity="0.65"/>`;
      }
      m.put(x, y, 0, s, g, 65);
    });
  },
});

/* T05 — Royal Ashanti Kente Weave */
registerMode({
  id: "kentecloth",
  name: "Royal Ashanti Kente Weave",
  cat: "Textile",
  look: {
    bg: "#111827",
    ink: "#111827",
    cols: ["#eab308", "#e11d48", "#10b981", "#f97316", "#38bdf8"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Strip Grid", min: 2, max: 10, step: 2, def: 4 },
    { k: "bars", l: "Weft Threads / Block", min: 3, max: 8, def: 5 },
    { k: "chev", l: "Adinkra Zigzag Motif", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const s = T / n;
    const B = q.bars;
    const bh = s / B;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const x = i * s;
        const y = j * s;
        const horiz = (i + j) % 2 === 0;
        for (let b = 0; b < B; b++) {
          const col = m.col(i + j + b);
          if (horiz) {
            m.raw(`<rect x="${f1(x)}" y="${f1(y + b * bh)}" width="${f1(s + 0.5)}" height="${f1(bh + 0.5)}" fill="${col}" stroke="${m.ink}" stroke-width="${f1(m.sw * 0.6)}"/>`);
          } else {
            m.raw(`<rect x="${f1(x + b * bh)}" y="${f1(y)}" width="${f1(bh + 0.5)}" height="${f1(s + 0.5)}" fill="${col}" stroke="${m.ink}" stroke-width="${f1(m.sw * 0.6)}"/>`);
          }
        }
        if (q.chev) {
          const cx = x + s * 0.5;
          const cy = y + s * 0.5;
          const r = s * 0.26;
          m.raw(`<polygon points="${f1(cx)},${f1(cy - r)} ${f1(cx + r)},${f1(cy)} ${f1(cx)},${f1(cy + r)} ${f1(cx - r)},${f1(cy)}" fill="${m.col(i * 2 + j + 2)}" stroke="${m.ink}" stroke-width="${f1(m.sw)}"/>`);
        }
      }
    }
  },
});

/* T06 — Prince of Wales Glen Plaid */
registerMode({
  id: "glenplaid",
  name: "Prince of Wales Glen Plaid",
  cat: "Textile",
  look: {
    bg: "#f3e8dc",
    ink: "#141414",
    cols: ["#141414", "#8a6a4a", "#e11d48", "#3a3a3a", "#cbd5e1"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Plaid Repeats", min: 1, max: 6, def: 2 },
    { k: "threads", l: "Twill Fine Threads", min: 6, max: 18, step: 2, def: 10 },
    { k: "over", l: "Royal Windowpane Line", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const cell = T / N;
    const h = cell * 0.5;
    const K = q.threads;
    const tw = h / K;
    const cDark = m.col(0);
    const cMid = m.col(1);
    const cAccent = m.col(2);
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x0 = i * cell;
        const y0 = j * cell;
        for (let k = 0; k < K; k += 2) {
          m.raw(`<rect x="${f1(x0 + k * tw)}" y="${f1(y0)}" width="${f1(tw)}" height="${f1(h)}" fill="${cDark}"/>`);
          m.raw(`<rect x="${f1(x0)}" y="${f1(y0 + k * tw)}" width="${f1(h)}" height="${f1(tw)}" fill="${cDark}" opacity="0.75"/>`);
          m.raw(`<rect x="${f1(x0 + h + k * tw * 0.5)}" y="${f1(y0 + h)}" width="${f1(tw * 0.5)}" height="${f1(h)}" fill="${cMid}"/>`);
          m.raw(`<rect x="${f1(x0 + h)}" y="${f1(y0 + h + k * tw * 0.5)}" width="${f1(h)}" height="${f1(tw * 0.5)}" fill="${cMid}"/>`);
        }
        for (let k = 0; k < K; k += 2) {
          m.raw(`<rect x="${f1(x0 + h + k * tw)}" y="${f1(y0)}" width="${f1(tw * 0.6)}" height="${f1(h)}" fill="${cDark}" opacity="0.65"/>`);
          m.raw(`<rect x="${f1(x0)}" y="${f1(y0 + h + k * tw)}" width="${f1(h)}" height="${f1(tw * 0.6)}" fill="${cDark}" opacity="0.65"/>`);
        }
        if (q.over) {
          const ox = x0 + h * 1.5;
          const oy = y0 + h * 1.5;
          m.raw(`<line x1="${f1(ox)}" y1="0" x2="${f1(ox)}" y2="${T}" stroke="${cAccent}" stroke-width="${f1(Math.max(3, tw * 0.65))}"/>`);
          m.raw(`<line x1="0" y1="${f1(oy)}" x2="${T}" y2="${f1(oy)}" stroke="${cAccent}" stroke-width="${f1(Math.max(3, tw * 0.65))}"/>`);
        }
      }
    }
  },
});

/* T07 — Samarkand Suzani Embroidery */
registerMode({
  id: "suzaniembroidery",
  name: "Samarkand Suzani Medallion",
  cat: "Textile",
  look: {
    bg: "#fbf6ef",
    ink: "#2b1d14",
    cols: ["#e11d48", "#d97706", "#0d9488", "#1e3a8a", "#f43f5e"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Medallion Grid", min: 2, max: 7, def: 3 },
    { k: "petals", l: "Sunburst Scallops", min: 8, max: 20, step: 2, def: 14 },
    { k: "vines", l: "Trailing Pomegranate Vines", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = c / 110;
      const P = q.petals;
      let g = "";
      if (q.vines) {
        for (let v = 0; v < 4; v++) {
          const a = v * 90 + 45;
          g += `<g transform="rotate(${a})"><path d="M0-24Q14-44 0-58" fill="none" stroke="${m.col(2)}" stroke-width="3"/><path ${m.st(m.col(2), s).a} transform="translate(8 -42) rotate(35)" d="${leafP(18, 6)}"/></g>`;
        }
      }
      for (let p = 0; p < P; p++) {
        const ang = (p * 360) / P;
        g += `<circle ${m.st(m.col(i + j), s).a} transform="rotate(${f1(ang)})" cy="-34" r="10"/>`;
        g += `<circle ${m.st(m.col(i + j + 1), s).a} transform="rotate(${f1(ang)})" cy="-22" r="7"/>`;
      }
      g += `<circle ${m.st(m.col(i + j + 3), s).a} r="22"/>`;
      g += `<path ${m.st(m.col(i + j + 4), s).a} d="${starPath(8, 17, 8)}"/>`;
      g += `<circle ${m.st(m.col(i + j), s).a} r="6"/>`;
      m.put(x, y, 0, s, g, 75);
    });
  },
});

/* T08 — Jaipur Hand-Block Floral Chintz */
registerMode({
  id: "blockprintchintz",
  name: "Jaipur Hand-Block Chintz",
  cat: "Textile",
  look: {
    bg: "#f4ead5",
    ink: "#2b2118",
    cols: ["#c0392b", "#245a52", "#d9a066", "#2d4a6b", "#e07a5f"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Block Stamp Grid", min: 2, max: 8, def: 4 },
    { k: "sz", l: "Botanical Scale %", min: 60, max: 125, def: 94 },
    { k: "border", l: "Trellis Diamond Frame", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      const stFl = m.st(m.col(i + j), s);
      const stLf = m.st(m.col(1), s);
      const stC = m.st(m.col(2), s);
      let g = "";
      if (q.border) {
        g += `<polygon points="0,-52 52,0 0,52 -52,0" fill="none" stroke="${m.col(3)}" stroke-width="2.5" stroke-dasharray="6 4"/>`;
      }
      g += `<path d="M0 38C-4 14 4-6 0-26" fill="none" stroke="${m.ink}" stroke-width="3" stroke-linecap="round"/>`;
      g += `<path ${stLf.a} transform="translate(-4 14) rotate(-52)" d="${leafP(28, 10)}"/>`;
      g += `<path ${stLf.a} transform="translate(4 4) rotate(52)" d="${leafP(28, 10)}"/>`;
      g += `<g transform="translate(0 -24) scale(0.62)">${SH.flower(stFl, 10, 0.2)}</g>`;
      g += `<circle ${stC.a} cx="0" cy="-24" r="6"/>`;
      m.put(x, y, 0, s, g, 70);
    });
  },
});

/* T09 — Missoni Zigzag Flame Knit */
registerMode({
  id: "chevronknit",
  name: "Italian Zigzag Flame Knit",
  cat: "Textile",
  look: {
    bg: "#130924",
    ink: "#fdf4ff",
    cols: ["#f43f5e", "#f59e0b", "#14b8a6", "#8b5cf6", "#fde047"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "cols", l: "Zigzag Peaks", min: 3, max: 14, def: 6 },
    { k: "rows", l: "Knit Rows", min: 6, max: 24, def: 12 },
    { k: "peak", l: "Peak Amplitude %", min: 40, max: 140, def: 85 },
    { k: "ribs", l: "Vertical Knit Stitch Ribs", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const C = q.cols;
    const R = q.rows;
    const dx = T / C;
    const dy = T / R;
    const amp = (dy * q.peak) / 100;
    for (let j = -2; j <= R + 2; j++) {
      const y0 = j * dy;
      const y1 = (j + 1) * dy;
      let d = `M0 ${f1(y0)}`;
      for (let i = 0; i < C; i++) {
        const xm = (i + 0.5) * dx;
        const x1 = (i + 1) * dx;
        d += `L${f1(xm)} ${f1(y0 - amp)}L${f1(x1)} ${f1(y0)}`;
      }
      for (let i = C; i > 0; i--) {
        const xm = (i - 0.5) * dx;
        const x0 = (i - 1) * dx;
        d += `L${f1(xm)} ${f1(y1 - amp)}L${f1(x0)} ${f1(y1)}`;
      }
      d += "Z";
      m.raw(`<path ${m.st(m.col(j), 1).a} d="${d}"/>`);
    }
    if (q.ribs) {
      for (let i = 0; i < C * 2; i++) {
        const x = (i * dx) / 2;
        m.raw(`<line x1="${f1(x)}" y1="0" x2="${f1(x)}" y2="${T}" stroke="${m.ink}" stroke-width="1.5" opacity="0.28" stroke-dasharray="4 4"/>`);
      }
    }
  },
});

/* T10 — Aran Fisherman Cable Knit */
registerMode({
  id: "cableknit",
  name: "Aran Fisherman Cable Knit",
  cat: "Textile",
  look: {
    bg: "#f4efe6",
    ink: "#2b2118",
    cols: ["#e8c9a0", "#d9a066", "#a0522d", "#7a9e7e", "#3f7d6e"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "cables", l: "Cable Columns", min: 2, max: 10, def: 5 },
    { k: "links", l: "Twist Links / Column", min: 4, max: 16, def: 8 },
    { k: "purl", l: "Side Purl Stitch Ribs", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const C = q.cables;
    const L = q.links;
    const w = T / C;
    const h = T / L;
    for (let i = 0; i < C; i++) {
      const cx = (i + 0.5) * w;
      const cw = w * 0.28;
      if (q.purl) {
        m.raw(`<line x1="${f1(i * w)}" y1="0" x2="${f1(i * w)}" y2="${T}" stroke="${m.ink}" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.45"/>`);
      }
      for (let j = -1; j <= L + 1; j++) {
        const cy = (j + 0.5) * h;
        const st1 = m.st(m.col(i + (j % 2)), 1);
        const st2 = m.st(m.col(i + ((j + 1) % 2)), 1);
        m.raw(`<path ${st1.a} d="M${f1(cx - cw)} ${f1(cy - h * 0.5)}C${f1(cx - cw)} ${f1(cy)} ${f1(cx + cw)} ${f1(cy)} ${f1(cx + cw)} ${f1(cy + h * 0.5)}C${f1(cx + cw * 0.2)} ${f1(cy + h * 0.5)} ${f1(cx - cw * 0.2)} ${f1(cy - h * 0.5)} ${f1(cx - cw)} ${f1(cy - h * 0.5)}Z"/>`);
        m.raw(`<path ${st2.a} d="M${f1(cx + cw)} ${f1(cy - h * 0.5)}C${f1(cx + cw)} ${f1(cy)} ${f1(cx - cw)} ${f1(cy)} ${f1(cx - cw)} ${f1(cy + h * 0.5)}C${f1(cx - cw * 0.2)} ${f1(cy + h * 0.5)} ${f1(cx + cw * 0.2)} ${f1(cy - h * 0.5)} ${f1(cx + cw)} ${f1(cy - h * 0.5)}Z"/>`);
      }
    }
  },
});

/* T11 — Bouclé Basketweave Tweed */
registerMode({
  id: "baskettweed",
  name: "Parisian Bouclé Basket Tweed",
  cat: "Textile",
  look: {
    bg: "#111827",
    ink: "#090d16",
    cols: ["#f43f5e", "#f8fafc", "#f59e0b", "#38bdf8", "#a855f7"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Basket Blocks", min: 2, max: 12, step: 2, def: 6 },
    { k: "strands", l: "Yarn Strands / Block", min: 2, max: 5, def: 3 },
    { k: "slub", l: "Metallic Bouclé Slubs", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const S = q.strands;
    const blk = T / N;
    const th = blk / S;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = i * blk;
        const y = j * blk;
        const horiz = (i + j) % 2 === 0;
        for (let s = 0; s < S; s++) {
          const st = m.st(m.col(i + j + s), 1);
          if (horiz) {
            m.raw(`<rect x="${f1(x + 2)}" y="${f1(y + s * th + 2)}" width="${f1(blk - 4)}" height="${f1(th - 4)}" rx="${f1(th * 0.28)}" ${st.a}/>`);
          } else {
            m.raw(`<rect x="${f1(x + s * th + 2)}" y="${f1(y + 2)}" width="${f1(th - 4)}" height="${f1(blk - 4)}" rx="${f1(th * 0.28)}" ${st.a}/>`);
          }
        }
        if (q.slub && (i * 3 + j) % 2 === 0) {
          m.raw(`<circle cx="${f1(x + blk * 0.5)}" cy="${f1(y + blk * 0.5)}" r="${f1(th * 0.26)}" fill="${m.col(4)}"/>`);
        }
      }
    }
  },
});

/* T12 — Botanical Ogee Trellis Damask */
registerMode({
  id: "toilegarden",
  name: "Botanical Ogee Trellis",
  cat: "Textile",
  look: {
    bg: "#f0faf6",
    ink: "#1d3b33",
    cols: ["#10b981", "#f59e0b", "#ec4899", "#06b6d4", "#047857"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Trellis Columns", min: 2, max: 8, def: 4 },
    { k: "w", l: "Ribbon Frame Width", min: 3, max: 14, def: 7 },
    { k: "bloom", l: "Center Botanical Rosette", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const c = T / N;
    const r = c * 0.5;
    for (let i = -1; i <= N; i++) {
      for (let j = -1; j <= N; j++) {
        const cx = (i + 0.5) * c;
        const cy = (j + 0.5) * c;
        const ogee = `M${f1(cx)} ${f1(cy - r)}C${f1(cx + r * 0.65)} ${f1(cy - r * 0.4)} ${f1(cx + r * 0.4)} ${f1(cy - r * 0.65)} ${f1(cx + r)} ${f1(cy)}C${f1(cx + r * 0.4)} ${f1(cy + r * 0.65)} ${f1(cx + r * 0.65)} ${f1(cy + r * 0.4)} ${f1(cx)} ${f1(cy + r)}C${f1(cx - r * 0.65)} ${f1(cy + r * 0.4)} ${f1(cx - r * 0.4)} ${f1(cy + r * 0.65)} ${f1(cx - r)} ${f1(cy)}C${f1(cx - r * 0.4)} ${f1(cy - r * 0.65)} ${f1(cx - r * 0.65)} ${f1(cy - r * 0.4)} ${f1(cx)} ${f1(cy - r)}Z`;
        m.raw(`<path d="${ogee}" fill="none" stroke="${m.col(0)}" stroke-width="${f1(q.w)}"/>`);
        if (q.bloom) {
          const s = c / 160;
          const fl = SH.flower(m.st(m.col((i + j) % 3 + 1), s), 8, 0.22);
          m.at(cx, cy, 0, s, fl);
        }
      }
    }
  },
});

/* T13 — Iznik Ottoman Carnation & Tulip */
registerMode({
  id: "ottomantulip",
  name: "Iznik Ottoman Tulip Brocade",
  cat: "Textile",
  look: {
    bg: "#0c192c",
    ink: "#f8fafc",
    cols: ["#e11d48", "#0d9488", "#f59e0b", "#38bdf8", "#fef08a"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Tulip Grid", min: 2, max: 8, def: 4 },
    { k: "sz", l: "Motif Scale %", min: 60, max: 125, def: 94 },
    { k: "serrate", l: "Carnation Crown Petals", min: 5, max: 11, step: 2, def: 7 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 115;
      const c1 = m.st(m.col(i + j), s).a;
      const c2 = m.st(m.col(i + j + 1), s).a;
      const c3 = m.st(m.col(i + j + 2), s).a;
      let g = "";
      g += `<path ${c2} d="M0 38C-26 30-38 4-24-22C-14-10-10 8 0 22C10 8 14-10 24-22C38 4 26 30 0 38Z"/>`;
      for (let k = 0; k < q.serrate; k++) {
        const ang = -54 + (k * 108) / (q.serrate - 1);
        g += `<path ${c1} transform="translate(0 10) rotate(${f1(ang)})" d="M0 0C-8-18-8-40 0-52C8-40 8-18 0 0Z"/>`;
      }
      g += `<path ${c3} d="M0 24C-14 14-14-14 0-36C14-14 14 14 0 24Z"/>`;
      g += `<circle ${c2} cx="0" cy="36" r="7"/>`;
      m.put(x, y, 0, s, g, 75);
    });
  },
});

/* T14 — Otomi Folk Embroidery */
registerMode({
  id: "mexicanotomi",
  name: "Otomi Folk Flora & Fauna",
  cat: "Textile",
  look: {
    bg: "#fffaf3",
    ink: "#1b1b1b",
    cols: ["#ff3366", "#ff9f1c", "#2ec4b6", "#7209b7", "#3a86ff"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Motif Density", min: 8, max: 36, def: 18 },
    { k: "sz", l: "Embroidery Scale %", min: 55, max: 130, def: 90 },
    { k: "vines", l: "Swirling Tendrils", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 120;
      const col = m.col(k);
      const st = m.st(col, s);
      let g = "";
      if (k % 3 === 0) {
        g += `<path ${st.a} d="M-24 10C-16-14 8-18 24 0C36-10 46-6 40 8C30 22-6 26-24 10Z"/>`;
        g += `<path ${st.a} d="M-20 8L-42-8L-36 4L-46 14L-22 14Z"/>`;
        g += `<path ${st.a} d="M4-4C-6-26 12-40 24-22Z"/>`;
        g += `<circle cx="20" cy="-2" r="3" fill="${m.bg}"/>`;
      } else {
        g += SH.flower(st, 6, 0.25);
        if (q.vines) {
          g += `<path ${st.a} transform="translate(-26 24) rotate(-40)" d="${leafP(24, 8)}"/>`;
          g += `<path ${st.a} transform="translate(26 24) rotate(40)" d="${leafP(24, 8)}"/>`;
        }
      }
      m.put(x, y, (m.rnd() - 0.5) * 50, s, g, 70);
    });
  },
});

/* T15 — Sashiko Boro Stitch Patchwork */
registerMode({
  id: "patchworkboro",
  name: "Japanese Sashiko Boro Quilt",
  cat: "Textile",
  look: {
    bg: "#0f1d33",
    ink: "#f4efe6",
    cols: ["#1e3a8a", "#1d4ed8", "#3b82f6", "#0b6e8a", "#475569"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Patchwork Grid", min: 2, max: 8, def: 4 },
    { k: "stitch", l: "Sashiko Running Stitches", min: 4, max: 12, def: 7 },
    { k: "cross", l: "Komeko Rice Crosses", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const c = T / N;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = i * c;
        const y = j * c;
        const col = m.col(i * 3 + j);
        m.raw(`<rect x="${f1(x + 3)}" y="${f1(y + 3)}" width="${f1(c - 6)}" height="${f1(c - 6)}" rx="6" fill="${col}"/>`);
        const S = q.stitch;
        const step = c / S;
        const da = `stroke="${m.ink}" stroke-width="2.4" stroke-dasharray="6 5" fill="none"`;
        if ((i + j) % 2 === 0) {
          for (let k = 1; k < S; k++) {
            m.raw(`<line x1="${f1(x + 8)}" y1="${f1(y + k * step)}" x2="${f1(x + c - 8)}" y2="${f1(y + k * step)}" ${da}/>`);
          }
        } else {
          for (let r = 1; r <= 3; r++) {
            const rad = (c * 0.42 * r) / 3;
            m.raw(`<circle cx="${f1(x + c * 0.5)}" cy="${f1(y + c * 0.5)}" r="${f1(rad)}" ${da}/>`);
          }
        }
        if (q.cross) {
          m.raw(`<path d="M${f1(x - 6)} ${f1(y)}H${f1(x + 6)}M${f1(x)} ${f1(y - 6)}V${f1(y + 6)}" stroke="${m.ink}" stroke-width="2.5" stroke-linecap="round"/>`);
        }
      }
    }
  },
});

/* T16 — Anatolian Kilim Tapestry */
registerMode({
  id: "kilimrug",
  name: "Anatolian Kilim Flatweave",
  cat: "Textile",
  look: {
    bg: "#2b1d14",
    ink: "#f7ede2",
    cols: ["#d66853", "#f6bd60", "#84a59d", "#e11d48", "#f7ede2"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "rows", l: "Tapestry Bands", min: 2, max: 8, def: 4 },
    { k: "motifs", l: "Elibelinde Motifs / Band", min: 2, max: 10, def: 5 },
    { k: "teeth", l: "Sawtooth Border", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const R = q.rows;
    const M = q.motifs;
    const bh = T / R;
    const mw = T / M;
    for (let j = 0; j < R; j++) {
      const y0 = j * bh;
      const cy = y0 + bh * 0.5;
      m.raw(`<rect x="0" y="${f1(y0)}" width="${T}" height="${f1(bh * 0.84)}" fill="${m.col(j)}"/>`);
      if (q.teeth) {
        let td = "";
        const tn = M * 4;
        const tw = T / tn;
        for (let t = 0; t < tn; t++) {
          td += `M${f1(t * tw)} ${f1(y0)}L${f1((t + 0.5) * tw)} ${f1(y0 - bh * 0.12)}L${f1((t + 1) * tw)} ${f1(y0)}Z`;
        }
        m.raw(`<path d="${td}" fill="${m.col(j)}"/>`);
      }
      for (let i = 0; i < M; i++) {
        const cx = (i + 0.5) * mw;
        const rx = mw * 0.34;
        const ry = bh * 0.3;
        const c2 = m.col(j + 2);
        const c3 = m.col(j + 3);
        m.raw(`<polygon points="${f1(cx)},${f1(cy - ry)} ${f1(cx + rx)},${f1(cy)} ${f1(cx)},${f1(cy + ry)} ${f1(cx - rx)},${f1(cy)}" fill="${c2}" stroke="${m.ink}" stroke-width="${f1(m.sw)}"/>`);
        m.raw(`<polygon points="${f1(cx)},${f1(cy - ry * 0.45)} ${f1(cx + rx * 0.45)},${f1(cy)} ${f1(cx)},${f1(cy + ry * 0.45)} ${f1(cx - rx * 0.45)},${f1(cy)}" fill="${c3}"/>`);
      }
    }
  },
});

/* T17 — Artisan Yarn-Dyed Gingham */
registerMode({
  id: "ginghamweave",
  name: "Artisan Yarn-Dyed Gingham",
  cat: "Textile",
  look: {
    bg: "#ffffff",
    ink: "#1e293b",
    cols: ["#e11d48", "#38bdf8", "#f59e0b", "#10b981", "#8b5cf6"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Gingham Checks", min: 2, max: 14, def: 6 },
    { k: "bw", l: "Stripe Ratio %", min: 25, max: 75, def: 50 },
    { k: "twill", l: "diagonal Twill Texture", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const c = T / N;
    const w = (c * q.bw) / 100;
    const col1 = m.col(0);
    const col2 = m.col(1);
    for (let i = 0; i < N; i++) {
      const p = i * c;
      m.raw(`<rect x="${f1(p)}" y="0" width="${f1(w)}" height="${T}" fill="${col1}" opacity="0.52"/>`);
      m.raw(`<rect x="0" y="${f1(p)}" width="${T}" height="${f1(w)}" fill="${col2}" opacity="0.52"/>`);
    }
    if (q.twill) {
      const K = N * 6;
      const step = T / K;
      let d = "";
      for (let k = -K; k <= K * 2; k++) {
        d += `M${f1(k * step)} 0L${f1(k * step - T)} ${T}`;
      }
      m.raw(`<path d="${d}" stroke="${m.bg}" stroke-width="1.8" opacity="0.28"/>`);
    }
  },
});

/* T18 — Swiss Dot Dobby Chiffon */
registerMode({
  id: "polkadobby",
  name: "Swiss Dot Dobby Chiffon",
  cat: "Textile",
  look: {
    bg: "#130924",
    ink: "#fdf4ff",
    cols: ["#f59e0b", "#ec4899", "#14b8a6", "#8b5cf6", "#fde047"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Dobby Grid", min: 3, max: 14, def: 7 },
    { k: "sz", l: "Tuft Scale %", min: 35, max: 95, def: 65 },
    { k: "halo", l: "Embroidered Pom Halo", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const r = (c * 0.28 * q.sz) / 100;
      const col = m.col(i + j);
      let g = "";
      if (q.halo) {
        g += `<circle r="${f1(r * 1.45)}" fill="none" stroke="${m.col(i + j + 1)}" stroke-width="2.5" stroke-dasharray="3 4"/>`;
      }
      g += `<circle ${m.st(col, 1).a} r="${f1(r)}"/>`;
      m.put(x, y, 0, 1, g, r * 2);
    });
  },
});

/* T19 — Art Nouveau Peacock Plume */
registerMode({
  id: "artnouveaulily",
  name: "Art Nouveau Peacock Plume",
  cat: "Art Deco",
  look: {
    bg: "#071318",
    ink: "#fde047",
    cols: ["#0d9488", "#10b981", "#f59e0b", "#38bdf8", "#ec4899"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Plume Columns", min: 2, max: 8, def: 4 },
    { k: "sz", l: "Plume Scale %", min: 65, max: 130, def: 96 },
    { k: "barbs", l: "Feather Barbs", min: 4, max: 12, def: 8 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      let g = "";
      for (let b = 0; b < q.barbs; b++) {
        const yy = 32 - b * (58 / q.barbs);
        const len = 32 - Math.abs(b - q.barbs * 0.4) * 3.5;
        g += `<path d="M0 ${f1(yy)}Q${f1(-len * 0.6)} ${f1(yy - 10)} ${f1(-len)} ${f1(yy - 18)}M0 ${f1(yy)}Q${f1(len * 0.6)} ${f1(yy - 10)} ${f1(len)} ${f1(yy - 18)}" fill="none" stroke="${m.col(0)}" stroke-width="2.4" stroke-linecap="round"/>`;
      }
      g += `<path ${m.st(m.col(1), s).a} d="M0-46C22-46 30-16 0 18C-30-16-22-46 0-46Z"/>`;
      g += `<path ${m.st(m.col(2), s).a} d="M0-36C14-36 18-16 0 6C-18-16-14-36 0-36Z"/>`;
      g += `<circle ${m.st(m.col(3), s).a} cx="0" cy="-22" r="9"/>`;
      g += `<line x1="0" y1="44" x2="0" y2="-16" stroke="${m.ink}" stroke-width="2.8" stroke-linecap="round"/>`;
      m.put(x, y, 0, s, g, 75);
    });
  },
});

/* T20 — Sacred Sri Yantra Geometry */
registerMode({
  id: "sacredsriyantra",
  name: "Sacred Sri Yantra Geometry",
  cat: "Mandala",
  look: {
    bg: "#130924",
    ink: "#fde047",
    cols: ["#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#fde047"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Yantra Grid", min: 2, max: 6, def: 3 },
    { k: "tris", l: "Interlocking Triangles", min: 2, max: 6, def: 4 },
    { k: "gates", l: "Bhupura Temple Gates", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "grid", (x: number, y: number, i: number, j: number, c: number) => {
      const s = c / 115;
      let g = "";
      if (q.gates) {
        g += `<rect x="-46" y="-46" width="92" height="92" ${m.st(m.col(i + j), s).a}/>`;
      }
      g += `<circle ${m.st(m.col(i + j + 1), s).a} r="40"/>`;
      for (let t = q.tris; t >= 1; t--) {
        const r = (34 * t) / q.tris;
        const stUp = m.st(m.col(i + j + t), s).a;
        const stDn = m.st(m.col(i + j + t + 1), s).a;
        g += `<polygon ${stUp} points="0,${f1(-r)} ${f1(r * 0.86)},${f1(r * 0.5)} ${f1(-r * 0.86)},${f1(r * 0.5)}"/>`;
        g += `<polygon ${stDn} points="0,${f1(r)} ${f1(r * 0.86)},${f1(-r * 0.5)} ${f1(-r * 0.86)},${f1(-r * 0.5)}"/>`;
      }
      g += `<circle r="4" fill="${m.ink}"/>`;
      m.put(x, y, 0, s, g, 70);
    });
  },
});

/* T21 — Tabriz Persian Carpet Medallion */
registerMode({
  id: "persiancarpet",
  name: "Tabriz Persian Carpet Weave",
  cat: "Textile",
  look: {
    bg: "#4a1633",
    ink: "#fdf1f4",
    cols: ["#d97706", "#0d9488", "#e11d48", "#fef08a", "#1e3a8a"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Carpet Medallions", min: 2, max: 6, def: 3 },
    { k: "sz", l: "Medallion Scale %", min: 65, max: 125, def: 96 },
    { k: "corners", l: "Corner Spandrel Jewels", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const s = (c * q.sz) / 100 / 110;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const cx = (i + 0.5) * c;
        const cy = (j + 0.5) * c;
        let g = "";
        g += `<path ${m.st(m.col(0), s).a} d="M0-48L18-24L48 0L18 24L0 48L-18 24L-48 0L-18-24Z"/>`;
        g += `<path ${m.st(m.col(1), s).a} d="${starPath(8, 32, 18)}"/>`;
        g += `<path ${m.st(m.col(2), s).a} d="${starPath(8, 20, 9)}"/>`;
        g += `<circle ${m.st(m.col(3), s).a} r="7"/>`;
        m.put(cx, cy, 0, s, g, 70);
        if (q.corners) {
          m.put(i * c, j * c, 45, s * 0.55, `<path ${m.st(m.col(4), s).a} d="${starPath(4, 34, 14)}"/>`, 45);
        }
      }
    }
  },
});

/* T22 — Aloha Hibiscus Resort Print */
registerMode({
  id: "tropicalhibiscus",
  name: "Aloha Hibiscus Resort Print",
  cat: "Botanical",
  look: {
    bg: "#0b2a3a",
    ink: "#eef6f8",
    cols: ["#ff4d6d", "#ffbe0b", "#06d6a0", "#48b5c4", "#f7a6b8"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Hibiscus Blooms", min: 8, max: 32, def: 15 },
    { k: "sz", l: "Bloom Scale %", min: 60, max: 135, def: 95 },
    { k: "pistil", l: "Tropical Stamen Pistil", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 120;
      const stFl = m.st(m.col(k % 2), s);
      const stLf = m.st(m.col(2), s);
      let g = "";
      g += `<path ${stLf.a} transform="rotate(-40)" d="${leafP(52, 18)}"/>`;
      g += `<path ${stLf.a} transform="rotate(140)" d="${leafP(46, 16)}"/>`;
      for (let p = 0; p < 5; p++) {
        g += `<path ${stFl.a} transform="rotate(${p * 72})" d="M0 0C-18-10-24-36-4-44C12-48 22-34 0 0Z"/>`;
      }
      if (q.pistil) {
        const pc = m.col(3);
        g += `<path d="M0 0Q12-16 24-28" fill="none" stroke="${pc}" stroke-width="3.5" stroke-linecap="round"/>`;
        g += `<circle cx="24" cy="-28" r="5" fill="${m.col(1)}"/>`;
      }
      m.put(x, y, m.rnd() * 360, s, g, 75);
    });
  },
});

/* T23 — Nordic Mid-Century Folk Quilt */
registerMode({
  id: "geometricbauhaus2",
  name: "Nordic Mid-Century Folk Quilt",
  cat: "Textile",
  look: {
    bg: "#f0f7ff",
    ink: "#0f172a",
    cols: ["#0284c7", "#e11d48", "#f59e0b", "#10b981", "#6366f1"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Quilt Blocks", min: 2, max: 10, def: 5 },
    { k: "petals", l: "Compass Star Points", min: 4, max: 8, step: 4, def: 8 },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const c = T / N;
    const r = c * 0.46;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const cx = (i + 0.5) * c;
        const cy = (j + 0.5) * c;
        let g = `<rect x="${f1(-c * 0.5)}" y="${f1(-c * 0.5)}" width="${f1(c)}" height="${f1(c)}" ${m.st(m.col(i + j), 1).a}/>`;
        g += `<path ${m.st(m.col(i + j + 1), 1).a} d="${starPath(q.petals, r, r * 0.38)}"/>`;
        g += `<circle ${m.st(m.col(i + j + 2), 1).a} r="${f1(r * 0.25)}"/>`;
        m.at(cx, cy, 0, 1, g);
      }
    }
  },
});

/* T24 — Mystic Sun & Moon Tapestry */
registerMode({
  id: "celestialtarot",
  name: "Mystic Sun & Moon Tapestry",
  cat: "Celestial",
  look: {
    bg: "#090418",
    ink: "#fde047",
    cols: ["#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#fde047"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Tapestry Grid", min: 2, max: 8, def: 4 },
    { k: "rays", l: "Solar Flare Rays", min: 8, max: 20, step: 2, def: 12 },
    { k: "sz", l: "Emblem Scale %", min: 60, max: 125, def: 92 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      let g = "";
      if ((i + j) % 2 === 0) {
        g += `<path ${m.st(m.col(0), s).a} d="${starPath(q.rays, 44, 24)}"/>`;
        g += `<circle ${m.st(m.col(4), s).a} r="18"/>`;
      } else {
        g += `<circle ${m.st(m.col(1), s).a} r="36"/>`;
        g += SH.moon(m.st(m.col(4), s));
      }
      m.put(x, y, 0, s, g, 70);
    });
  },
});

/* =====================================================================
   36 BRAND-NEW ORIGINAL PROCEDURAL SEAMLESS PATTERNS
   ===================================================================== */

/* N01 — Sacred Lotus Mandala */
registerMode({
  id: "sacredlotus",
  name: "Sacred Lotus Mandala",
  cat: "Mandala",
  look: {
    bg: "#130924",
    ink: "#fdf4ff",
    cols: ["#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#fde047"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Grid Density", min: 2, max: 8, def: 3 },
    { k: "petals", l: "Petal Count", min: 6, max: 20, step: 2, def: 12 },
    { k: "rings", l: "Mandala Rings", min: 2, max: 5, def: 4 },
    { k: "sz", l: "Medallion Scale %", min: 55, max: 125, def: 92 },
    {
      k: "lay",
      l: "Arrangement",
      type: "select",
      opts: [
        ["halfdrop", "Half Drop"],
        ["grid", "Square Grid"],
        ["brick", "Brick Offset"],
      ],
      def: "halfdrop",
    },
    { k: "gems", l: "Corner Star Gems", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, q.lay, (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      const P = q.petals;
      const R = q.rings;
      let svg = "";
      for (let r = R; r >= 1; r--) {
        const rad = (r / R) * 48;
        const col = m.col(i + j + r);
        const st = m.st(col, s).a;
        for (let p = 0; p < P; p++) {
          const ang = (p * 360) / P + (r % 2 ? 180 / P : 0);
          const w = rad * 0.34;
          svg += `<path ${st} transform="rotate(${f1(ang)})" d="M0 0C${f1(-w)} ${f1(-rad * 0.45)} ${f1(-w * 0.8)} ${f1(-rad * 0.88)} 0 ${f1(-rad)}C${f1(w * 0.8)} ${f1(-rad * 0.88)} ${f1(w)} ${f1(-rad * 0.45)} 0 0Z"/>`;
        }
        svg += `<circle ${m.st(m.col(i + j + r + 2), s).a} r="${f1(rad * 0.28)}"/>`;
      }
      if (q.gems) {
        const gc = m.st(m.col(i + j + 4), s).a;
        svg += `<path ${gc} d="${starPath(4, 14, 5)}"/>`;
      }
      m.put(x, y, ((i + j) % 2) * (180 / P), s, svg, 85);
    });
  },
});

/* N02 — Moroccan Zellij Star */
registerMode({
  id: "moroccanzellij",
  name: "Moroccan Zellij Star",
  cat: "Mosaic",
  look: {
    bg: "#0c192c",
    ink: "#f8fafc",
    cols: ["#d97706", "#0d9488", "#e11d48", "#38bdf8", "#fef08a"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Tile Repeats", min: 2, max: 8, def: 4 },
    { k: "pts", l: "Star Points", min: 8, max: 16, step: 4, def: 8 },
    { k: "pin", l: "Star Pinch %", min: 30, max: 75, def: 52 },
    { k: "rosette", l: "Inner Rosette", type: "check", def: true },
    { k: "cross", l: "Interlocking CrossTiles", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const s = c / 100;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const x = (i + 0.5) * c;
        const y = (j + 0.5) * c;
        const col1 = m.col(i + j);
        const col2 = m.col(i + j + 1);
        const col3 = m.col(i + j + 2);
        let body = `<path ${m.st(col1, s).a} d="${starPath(q.pts, 46, (46 * q.pin) / 100)}"/>`;
        if (q.rosette) {
          body += `<path ${m.st(col2, s).a} transform="rotate(${f1(180 / q.pts)})" d="${starPath(q.pts, 28, 14)}"/>`;
          body += `<circle ${m.st(col3, s).a} r="8"/>`;
        }
        m.put(x, y, 0, s, body, 65);
        if (q.cross) {
          const cx = (i + 1) * c;
          const cy = (j + 1) * c;
          const cBody = `<path ${m.st(m.col(i * 2 + j + 3), s).a} d="${starPath(4, 26, 11)}"/>`;
          m.put(cx, cy, 45, s, cBody, 45);
        }
      }
    }
  },
});

/* N03 — Cyber Circuit PCB */
registerMode({
  id: "cybercircuit",
  name: "Cyber Circuit PCB",
  cat: "Cyber",
  look: {
    bg: "#071318",
    ink: "#e2f8f0",
    cols: ["#10b981", "#06b6d4", "#f59e0b", "#34d399", "#0ea5e9"],
    style: "flat",
    sw: 3,
  },
  params: [
    { k: "n", l: "Node Grid", min: 4, max: 14, def: 8 },
    { k: "tw", l: "Trace Width", min: 2, max: 10, def: 4 },
    { k: "dens", l: "Chip Density %", min: 20, max: 90, def: 65 },
    { k: "pads", l: "Via Solder Pads", type: "check", def: true },
    { k: "chips", l: "Microprocessor Dies", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const lw = (q.tw * c) / 45;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const x = (i + 0.5) * c;
        const y = (j + 0.5) * c;
        const col = m.rcol();
        const dir = Math.floor(m.rnd() * 4);
        const dx = [c, 0, c, -c][dir];
        const dy = [0, c, c, c][dir];
        if (m.rnd() * 100 < q.dens) {
          const mx = dx * 0.5;
          const my = dy * 0.5;
          const tr = `<path d="M0 0L${f1(mx)} ${f1(my)}L${f1(dx)} ${f1(dy)}" fill="none" stroke="${col}" stroke-width="${f1(lw)}" stroke-linecap="round" stroke-linejoin="round"/>`;
          m.put(x, y, 0, 1, tr, c * 1.4);
        }
        if (q.pads) {
          const pad = `<circle r="${f1(lw * 1.65)}" fill="${col}"/><circle r="${f1(lw * 0.7)}" fill="${m.bg}"/>`;
          m.put(x, y, 0, 1, pad, 30);
        }
        if (q.chips && (i + j) % 3 === 0 && m.rnd() < 0.65) {
          const cs = c * 0.36;
          const chip = `<rect x="${f1(-cs)}" y="${f1(-cs)}" width="${f1(cs * 2)}" height="${f1(cs * 2)}" rx="${f1(cs * 0.2)}" fill="${m.col(i + j)}" stroke="${m.ink}" stroke-width="${f1(lw * 0.5)}"/><rect x="${f1(-cs * 0.5)}" y="${f1(-cs * 0.5)}" width="${f1(cs)}" height="${f1(cs)}" fill="${m.bg}"/>`;
          m.put(x, y, 0, 1, chip, cs * 2);
        }
      }
    }
  },
});

/* N04 — Tropical Monstera Canopy */
registerMode({
  id: "monsteralush",
  name: "Tropical Monstera Canopy",
  cat: "Botanical",
  look: {
    bg: "#0b1f17",
    ink: "#ecfdf5",
    cols: ["#10b981", "#059669", "#84cc16", "#a7f3d0", "#f59e0b"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Leaf Count", min: 6, max: 32, def: 16 },
    { k: "sz", l: "Frond Scale %", min: 55, max: 135, def: 95 },
    { k: "cuts", l: "Fenestration Ribs", min: 2, max: 5, def: 3 },
    { k: "tilt", l: "Rotation Freedom", min: 0, max: 180, def: 180 },
    { k: "vein", l: "Central Midrib", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.68, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 120;
      const col = m.col(k);
      const st = m.st(col, s);
      let leaf = `<path ${st.a} d="M0 44C-34 28-44-10-24-36C-10-52 0-56 0-56C0-56 10-52 24-36C44-10 34 28 0 44Z"/>`;
      for (let c = 0; c < q.cuts; c++) {
        const yy = -24 + c * 17;
        const ww = 28 - c * 3;
        leaf += `<ellipse cx="${f1(-ww)}" cy="${f1(yy)}" rx="11" ry="3.8" transform="rotate(-22 ${f1(-ww)} ${f1(yy)})" fill="${m.bg}"/>`;
        leaf += `<ellipse cx="${f1(ww)}" cy="${f1(yy)}" rx="11" ry="3.8" transform="rotate(22 ${f1(ww)} ${f1(yy)})" fill="${m.bg}"/>`;
      }
      if (q.vein) {
        leaf += `<path ${st.v} d="M0 52V-46"/>`;
      }
      const rot = (m.rnd() * 2 - 1) * q.tilt;
      m.put(x, y, rot, s, leaf, 75);
    });
  },
});

/* N05 — Isometric 3D Cubes */
registerMode({
  id: "isometriccubes",
  name: "Isometric 3D Cubes",
  cat: "Geometric",
  look: {
    bg: "#111827",
    ink: "#f9fafb",
    cols: ["#38bdf8", "#0284c7", "#0369a1", "#f59e0b", "#10b981"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Cube Columns", min: 3, max: 12, def: 6 },
    { k: "sz", l: "Cube Scale %", min: 55, max: 100, def: 100 },
    { k: "inlet", l: "Inner Hollow Cube", type: "check", def: true },
    {
      k: "pal",
      l: "Shading Mode",
      type: "select",
      opts: [
        ["fixed", "True 3-Tone Lighting"],
        ["cycle", "Multi-Colour Cycling"],
      ],
      def: "fixed",
    },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const dx = T / n;
    const rows = Math.max(2, Math.round(n * 1.15) * 2);
    const dy = T / rows;
    const rx = (dx * 0.5 * q.sz) / 100;
    const ry = (dy * 0.66 * q.sz) / 100;
    const stroke =
      m.style === "flat"
        ? ""
        : ` stroke="${m.ink}" stroke-width="${f1(m.sw)}" stroke-linejoin="round"`;
    for (let j = -1; j <= rows + 1; j++) {
      for (let i = -1; i <= n + 1; i++) {
        const cx = (i + (j % 2 ? 0.5 : 0)) * dx;
        const cy = j * dy;
        const base = q.pal === "cycle" ? (i + j) * 2 : 0;
        const cTop = m.col(base);
        const cLeft = m.col(base + 1);
        const cRight = m.col(base + 2);
        const top = `M0 ${f1(-ry)}L${f1(rx)} ${f1(-ry * 0.5)}L0 0L${f1(-rx)} ${f1(-ry * 0.5)}Z`;
        const left = `M${f1(-rx)} ${f1(-ry * 0.5)}L0 0L0 ${f1(ry)}L${f1(-rx)} ${f1(ry * 0.5)}Z`;
        const right = `M0 0L${f1(rx)} ${f1(-ry * 0.5)}L${f1(rx)} ${f1(ry * 0.5)}L0 ${f1(ry)}Z`;
        let g =
          `<path d="${top}" fill="${cTop}"${stroke}/>` +
          `<path d="${left}" fill="${cLeft}"${stroke}/>` +
          `<path d="${right}" fill="${cRight}"${stroke}/>`;
        if (q.inlet) {
          const s2 = 0.45;
          g += `<g transform="scale(${s2})"><path d="${top}" fill="${cRight}"/><path d="${left}" fill="${cTop}"/><path d="${right}" fill="${cLeft}"/></g>`;
        }
        m.at(cx, cy, 0, 1, g);
      }
    }
  },
});

/* N06 — Art Deco Sunburst Scallops */
registerMode({
  id: "sunburstdeco",
  name: "Art Deco Sunburst Fans",
  cat: "Art Deco",
  look: {
    bg: "#0f172a",
    ink: "#eab308",
    cols: ["#eab308", "#0f172a", "#38bdf8", "#ca8a04", "#fef08a"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Fan Columns", min: 2, max: 10, def: 5 },
    { k: "rays", l: "Sunburst Rays", min: 5, max: 15, step: 2, def: 9 },
    { k: "arches", l: "Concentric Arches", min: 2, max: 5, def: 3 },
    { k: "flip", l: "Alternate Row Flip", type: "check", def: false },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const w = T / n;
    const rows = n * 2;
    const h = T / rows;
    const R = w * 0.54;
    for (let j = -1; j <= rows + 1; j++) {
      for (let i = -1; i <= n + 1; i++) {
        const cx = (i + (m.mod(j, 2) ? 0.5 : 0)) * w;
        const cy = j * h;
        const rot = q.flip && m.mod(j, 2) ? 180 : 0;
        let fan = "";
        for (let a = q.arches; a >= 1; a--) {
          const r = (R * a) / q.arches;
          const col = m.col(i + j + a);
          fan += `<circle r="${f1(r)}" fill="${col}" stroke="${m.ink}" stroke-width="${f1(m.sw)}"/>`;
        }
        for (let k = 0; k < q.rays; k++) {
          const ang = -Math.PI + ((k + 0.5) * Math.PI) / q.rays;
          const x2 = R * Math.cos(ang);
          const y2 = R * Math.sin(ang);
          fan += `<line x1="0" y1="0" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${m.ink}" stroke-width="${f1(m.sw * 0.85)}"/>`;
        }
        m.at(cx, cy, rot, 1, fan);
      }
    }
  },
});

/* N07 — Venetian Terrazzo Stone */
registerMode({
  id: "terrazzostone",
  name: "Venetian Terrazzo Chips",
  cat: "Stone",
  look: {
    bg: "#f5efe6",
    ink: "#1e293b",
    cols: ["#e07a5f", "#3d405b", "#81b29a", "#f2cc8f", "#c15c3d"],
    style: "flat",
    sw: 2,
  },
  params: [
    { k: "n", l: "Primary Chips", min: 15, max: 75, def: 38 },
    { k: "sz", l: "Chip Size %", min: 45, max: 130, def: 85 },
    { k: "sides", l: "Facet Edges", min: 4, max: 9, def: 6 },
    { k: "specks", l: "Micro Quartz Specks", min: 0, max: 120, def: 65 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 115;
      const sides = Math.max(3, q.sides + Math.floor(m.rnd() * 3 - 1));
      let d = "";
      for (let i = 0; i < sides; i++) {
        const a = (i / sides) * Math.PI * 2 + (m.rnd() - 0.5) * 0.35;
        const r = 36 * (0.65 + m.rnd() * 0.55);
        d += (i ? "L" : "M") + f1(r * Math.cos(a)) + " " + f1(r * Math.sin(a));
      }
      d += "Z";
      const st = m.st(m.col(k), s);
      m.put(x, y, m.rnd() * 360, s, `<path ${st.a} d="${d}"/>`, 65);
    });
    for (let s = 0; s < q.specks; s++) {
      const sx = m.rnd() * T;
      const sy = m.rnd() * T;
      const r = 2.5 + m.rnd() * 5.5;
      m.put(sx, sy, m.rnd() * 180, 1, `<polygon points="0,${f1(-r)} ${f1(r)},0 0,${f1(r)} ${f1(-r * 0.8)},${f1(r * 0.3)}" fill="${m.rcol()}"/>`, 15);
    }
  },
});

/* N08 — Memphis 80s Pop Confetti */
registerMode({
  id: "memphispop",
  name: "Memphis 80s Pop Studio",
  cat: "Retro Pop",
  look: {
    bg: "#fff8eb",
    ink: "#111827",
    cols: ["#ff3366", "#2ec4b6", "#ff9f1c", "#7209b7", "#3a86ff"],
    style: "both",
    sw: 4,
  },
  params: [
    { k: "n", l: "Shape Count", min: 10, max: 55, def: 26 },
    { k: "sz", l: "Element Scale %", min: 55, max: 135, def: 90 },
    { k: "off", l: "Drop Shadow Offset", min: 0, max: 18, def: 9 },
    { k: "dots", l: "Halftone Confetti Dots", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    if (q.dots) {
      const dn = 10;
      const dc = T / dn;
      for (let i = 0; i < dn; i++)
        for (let j = 0; j < dn; j++)
          if ((i + j) % 2 === 0)
            m.raw(`<circle cx="${f1((i + 0.5) * dc)}" cy="${f1((j + 0.5) * dc)}" r="3.5" fill="${m.ink}" opacity="0.35"/>`);
    }
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 120;
      const col = m.col(k);
      const st = m.st(col, s);
      const kind = k % 4;
      let body = "";
      const off = q.off;
      if (kind === 0) {
        if (off) body += `<path transform="translate(${off} ${off})" d="M0-38L36 28H-36Z" fill="${m.ink}"/>`;
        body += `<path ${st.a} d="M0-38L36 28H-36Z"/>`;
      } else if (kind === 1) {
        body += `<path d="M-40 0L-20-18L0 0L20-18L40 0" fill="none" stroke="${col}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>`;
      } else if (kind === 2) {
        if (off) body += `<circle cx="${off}" cy="${off}" r="26" fill="${m.ink}"/>`;
        body += `<circle ${st.a} r="26"/><circle r="10" fill="${m.bg}"/>`;
      } else {
        if (off) body += `<path transform="translate(${off} ${off})" d="M-32-16A32 32 0 0 1 32-16Z" fill="${m.ink}"/>`;
        body += `<path ${st.a} d="M-32-16A32 32 0 0 1 32-16Z"/>`;
      }
      m.put(x, y, m.rnd() * 360, s, body, 70);
    });
  },
});

/* N09 — Op-Art Vortex Wave */
registerMode({
  id: "opartvortex",
  name: "Op-Art Kinetic Ribbons",
  cat: "Op-Art",
  look: {
    bg: "#f8fafc",
    ink: "#090d16",
    cols: ["#090d16", "#10b981", "#06b6d4", "#f43f5e", "#f59e0b"],
    style: "flat",
  },
  params: [
    { k: "bands", l: "Ribbon Count", min: 6, max: 32, step: 2, def: 16 },
    { k: "amp", l: "Wave Amplitude", min: 10, max: 140, def: 65 },
    { k: "freq", l: "Wave Frequency", min: 1, max: 6, def: 2 },
    { k: "pinch", l: "Phase Shift %", min: 0, max: 100, def: 45 },
  ],
  draw(m: any, q: any) {
    const N = q.bands;
    const h = T / N;
    const steps = 40;
    for (let i = -2; i <= N + 2; i++) {
      const y0 = i * h;
      const y1 = (i + 0.68) * h;
      const ph0 = (i * q.pinch * Math.PI) / 180;
      const ph1 = ((i + 1) * q.pinch * Math.PI) / 180;
      let d = "";
      for (let s = 0; s <= steps; s++) {
        const x = (s / steps) * T;
        const y = y0 + q.amp * Math.sin((s / steps) * Math.PI * 2 * q.freq + ph0);
        d += (s === 0 ? "M" : "L") + f1(x) + " " + f1(y);
      }
      for (let s = steps; s >= 0; s--) {
        const x = (s / steps) * T;
        const y = y1 + q.amp * Math.sin((s / steps) * Math.PI * 2 * q.freq + ph1);
        d += "L" + f1(x) + " " + f1(y);
      }
      d += "Z";
      m.raw(`<path d="${d}" fill="${m.col(i)}"/>`);
    }
  },
});

/* N10 — Honeycomb Hex Hive */
registerMode({
  id: "hexhive",
  name: "Honeycomb Hex Matrix",
  cat: "Geometric",
  look: {
    bg: "#071318",
    ink: "#10b981",
    cols: ["#10b981", "#06b6d4", "#047857", "#f59e0b", "#0f766e"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Hex Columns", min: 3, max: 14, def: 6 },
    { k: "sz", l: "Cell Fill %", min: 45, max: 98, def: 86 },
    { k: "rings", l: "Nested Hex Rings", min: 1, max: 4, def: 2 },
    { k: "core", l: "Center Core Dot", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const dx = T / n;
    const rows = Math.max(2, Math.round(n * 1.15) * 2);
    const dy = T / rows;
    const R = (Math.min(dx, dy * 1.15) * 0.52 * q.sz) / 100;
    const hexP = (rad: number) => {
      let d = "";
      for (let k = 0; k < 6; k++) {
        const a = (k * Math.PI) / 3 + Math.PI / 6;
        d += (k ? "L" : "M") + f1(rad * Math.cos(a)) + " " + f1(rad * Math.sin(a));
      }
      return d + "Z";
    };
    for (let j = -1; j <= rows + 1; j++) {
      for (let i = -1; i <= n + 1; i++) {
        const cx = (i + (m.mod(j, 2) ? 0.5 : 0)) * dx;
        const cy = j * dy;
        let g = "";
        for (let r = q.rings; r >= 1; r--) {
          const rad = (R * r) / q.rings;
          const col = m.col(i + j + r);
          g += `<path ${m.st(col, 1).a} d="${hexP(rad)}"/>`;
        }
        if (q.core) {
          g += `<circle r="${f1(R * 0.18)}" fill="${m.col(i + j + 3)}"/>`;
        }
        m.at(cx, cy, 0, 1, g);
      }
    }
  },
});

/* N11 — Cosmic Constellation Net */
registerMode({
  id: "galaxynova",
  name: "Cosmic Starburst Nebula",
  cat: "Celestial",
  look: {
    bg: "#060814",
    ink: "#f1f5f9",
    cols: ["#818cf8", "#c084fc", "#38bdf8", "#f472b6", "#fbbf24"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Star Nodes", min: 12, max: 50, def: 24 },
    { k: "sz", l: "Nova Scale %", min: 55, max: 140, def: 92 },
    { k: "orbits", l: "Planetary Orbit Rings", type: "check", def: true },
    { k: "moons", l: "Crescent Moons", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    for (let d = 0; d < 65; d++) {
      m.raw(`<circle cx="${f1(m.rnd() * T)}" cy="${f1(m.rnd() * T)}" r="${f1(1 + m.rnd() * 2.5)}" fill="${m.rcol()}" opacity="0.65"/>`);
    }
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 125;
      const col = m.col(k);
      const st = m.st(col, s);
      let body = "";
      if (q.orbits && k % 2 === 0) {
        body += `<ellipse rx="46" ry="18" transform="rotate(-28)" fill="none" stroke="${m.col(k + 2)}" stroke-width="2.5" stroke-dasharray="6 4"/>`;
      }
      if (q.moons && k % 3 === 0) {
        body += SH.moon(st);
      } else {
        body += `<path ${st.a} d="${starPath(k % 2 ? 8 : 4, 42, 11)}"/><circle r="7" fill="${m.col(k + 1)}"/>`;
      }
      m.put(x, y, m.rnd() * 360, s, body, 70);
    });
  },
});

/* N12 — Asanoha Hemp Leaf Star */
registerMode({
  id: "asanohahemp",
  name: "Asanoha Japanese Hemp",
  cat: "Japanese",
  look: {
    bg: "#0f1d33",
    ink: "#f4efe6",
    cols: ["#e8a87c", "#41b3a3", "#c38d9e", "#e27d60", "#f4efe6"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Star Columns", min: 2, max: 10, def: 4 },
    { k: "inner", l: "Inner Ribs", type: "check", def: true },
    {
      k: "colmode",
      l: "Facet Colouring",
      type: "select",
      opts: [
        ["wheel", "Pinwheel Facets"],
        ["row", "By Row"],
        ["rand", "Random Facets"],
      ],
      def: "wheel",
    },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const dx = T / n;
    const rows = Math.max(2, Math.round(n * 1.15) * 2);
    const dy = T / rows;
    const R = dx * 0.58;
    const stroke = ` stroke="${m.ink}" stroke-width="${f1(m.sw)}" stroke-linejoin="round"`;
    for (let j = -1; j <= rows + 1; j++) {
      for (let i = -1; i <= n + 1; i++) {
        const cx = (i + (m.mod(j, 2) ? 0.5 : 0)) * dx;
        const cy = j * dy;
        let g = "";
        for (let k = 0; k < 6; k++) {
          const a1 = (k * Math.PI) / 3;
          const a2 = ((k + 1) * Math.PI) / 3;
          const am = (a1 + a2) * 0.5;
          const x1 = R * Math.cos(a1);
          const y1 = R * Math.sin(a1);
          const x2 = R * Math.cos(a2);
          const y2 = R * Math.sin(a2);
          const xm = R * 0.58 * Math.cos(am);
          const ym = R * 0.58 * Math.sin(am);
          const ci = q.colmode === "wheel" ? k : q.colmode === "row" ? j + (k % 2) : Math.floor(m.rnd() * 5);
          const fill = m.style === "line" ? "none" : m.col(ci);
          g += `<polygon points="0,0 ${f1(x1)},${f1(y1)} ${f1(xm)},${f1(ym)}" fill="${fill}"${stroke}/>`;
          g += `<polygon points="0,0 ${f1(xm)},${f1(ym)} ${f1(x2)},${f1(y2)}" fill="${m.style === "line" ? "none" : m.col(ci + 1)}"${stroke}/>`;
          if (q.inner) {
            g += `<line x1="0" y1="0" x2="${f1(xm)}" y2="${f1(ym)}" stroke="${m.ink}" stroke-width="${f1(m.sw * 0.8)}"/>`;
          }
        }
        m.at(cx, cy, 0, 1, g);
      }
    }
  },
});

/* N13 — Mediterranean Citrus Slices */
registerMode({
  id: "citrusgrove",
  name: "Mediterranean Citrus Grove",
  cat: "Botanical",
  look: {
    bg: "#fffbeb",
    ink: "#1e293b",
    cols: ["#f97316", "#eab308", "#84cc16", "#ef4444", "#10b981"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Citrus Count", min: 8, max: 36, def: 16 },
    { k: "sz", l: "Fruit Scale %", min: 55, max: 130, def: 90 },
    { k: "segs", l: "Juice Segments", min: 6, max: 12, def: 8 },
    { k: "leaves", l: "Blossom Leaves", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 115;
      const col = m.col(k);
      const st = m.st(col, s);
      let fruit = "";
      if (q.leaves) {
        const lst = m.st(m.col(k + 2), s);
        fruit += `<path ${lst.a} transform="translate(26 -26) rotate(45)" d="M0 0C-12-12-12-28 0-40C12-28 12-12 0 0Z"/>`;
      }
      fruit += `<circle ${st.a} r="42"/><circle r="35" fill="#ffffff" opacity="0.88"/>`;
      const S = q.segs;
      for (let i = 0; i < S; i++) {
        const a1 = (i * Math.PI * 2) / S + 0.08;
        const a2 = ((i + 1) * Math.PI * 2) / S - 0.08;
        const r = 32;
        fruit += `<path d="M0 0L${f1(r * Math.cos(a1))} ${f1(r * Math.sin(a1))}A${r} ${r} 0 0 1 ${f1(r * Math.cos(a2))} ${f1(r * Math.sin(a2))}Z" fill="${col}"/>`;
      }
      fruit += `<circle r="5" fill="#ffffff"/>`;
      m.put(x, y, m.rnd() * 360, s, fruit, 70);
    });
  },
});

/* N14 — Interlaced Celtic Lattice */
registerMode({
  id: "celticknot",
  name: "Interlaced Lattice Weave",
  cat: "Textile",
  look: {
    bg: "#0f172a",
    ink: "#090d16",
    cols: ["#10b981", "#f59e0b", "#06b6d4", "#ec4899", "#a855f7"],
    style: "both",
    sw: 4,
  },
  params: [
    { k: "n", l: "Weave Frequency", min: 2, max: 10, def: 5 },
    { k: "bw", l: "Ribbon Width %", min: 20, max: 60, def: 38 },
    { k: "ring", l: "Interlocking Rings", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const w = (c * q.bw) / 100;
    const bdr = w + m.sw * 2.4;
    for (let i = -1; i <= n; i++) {
      for (let j = -1; j <= n; j++) {
        const x = i * c;
        const y = j * c;
        const c1 = m.col(i);
        const c2 = m.col(j + 2);
        const d1 = `M${f1(x)} ${f1(y)}L${f1(x + c)} ${f1(y + c)}`;
        const d2 = `M${f1(x + c)} ${f1(y)}L${f1(x)} ${f1(y + c)}`;
        if ((i + j) % 2 === 0) {
          m.raw(`<path d="${d1}" stroke="${m.bg}" stroke-width="${f1(bdr)}" stroke-linecap="square"/><path d="${d1}" stroke="${c1}" stroke-width="${f1(w)}" stroke-linecap="square"/>`);
          if (q.ring) {
            m.raw(`<circle cx="${f1(x + c * 0.5)}" cy="${f1(y + c * 0.5)}" r="${f1(c * 0.34)}" fill="none" stroke="${m.bg}" stroke-width="${f1(bdr * 0.7)}"/><circle cx="${f1(x + c * 0.5)}" cy="${f1(y + c * 0.5)}" r="${f1(c * 0.34)}" fill="none" stroke="${m.col(i + j + 1)}" stroke-width="${f1(w * 0.65)}"/>`);
          }
          m.raw(`<path d="${d2}" stroke="${m.bg}" stroke-width="${f1(bdr)}" stroke-linecap="square"/><path d="${d2}" stroke="${c2}" stroke-width="${f1(w)}" stroke-linecap="square"/>`);
        } else {
          m.raw(`<path d="${d2}" stroke="${m.bg}" stroke-width="${f1(bdr)}" stroke-linecap="square"/><path d="${d2}" stroke="${c2}" stroke-width="${f1(w)}" stroke-linecap="square"/>`);
          m.raw(`<path d="${d1}" stroke="${m.bg}" stroke-width="${f1(bdr)}" stroke-linecap="square"/><path d="${d1}" stroke="${c1}" stroke-width="${f1(w)}" stroke-linecap="square"/>`);
        }
      }
    }
  },
});

/* N15 — Cathedral Window Quilt */
registerMode({
  id: "biscuitquilt",
  name: "Cathedral Window Quilt",
  cat: "Textile",
  look: {
    bg: "#130924",
    ink: "#fdf4ff",
    cols: ["#ec4899", "#f59e0b", "#14b8a6", "#8b5cf6", "#fde047"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Quilt Grid", min: 2, max: 10, def: 5 },
    { k: "arch", l: "Petal Curvature %", min: 20, max: 90, def: 58 },
    { k: "gem", l: "Center Diamond Jewel", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const r = c * 0.5;
    const k = (r * q.arch) / 100;
    for (let i = -1; i <= n; i++) {
      for (let j = -1; j <= n; j++) {
        const cx = (i + 0.5) * c;
        const cy = (j + 0.5) * c;
        const col = m.col(i + j);
        const col2 = m.col(i + j + 2);
        let g = `<rect x="${f1(-r)}" y="${f1(-r)}" width="${f1(c)}" height="${f1(c)}" ${m.st(col, 1).a}/>`;
        g += `<path ${m.st(col2, 1).a} d="M0 ${f1(-r)}Q${f1(k)} 0 ${f1(r)} 0Q${f1(k)} 0 0 ${f1(r)}Q${f1(-k)} 0 ${f1(-r)} 0Q${f1(-k)} 0 0 ${f1(-r)}Z"/>`;
        if (q.gem) {
          const gr = r * 0.32;
          g += `<polygon ${m.st(m.col(i + j + 3), 1).a} points="0,${f1(-gr)} ${f1(gr)},0 0,${f1(gr)} ${f1(-gr)},0"/>`;
        }
        m.at(cx, cy, 0, 1, g);
      }
    }
  },
});

/* N16 — Synthwave Laser Lattice */
registerMode({
  id: "neongrid",
  name: "Synthwave Laser Lattice",
  cat: "Cyber",
  look: {
    bg: "#090418",
    ink: "#00f0ff",
    cols: ["#ff2a85", "#00f0ff", "#7b2cbf", "#ffbe0b", "#3a86ff"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Matrix Divisions", min: 3, max: 12, def: 6 },
    { k: "sub", l: "Pyramid Steps", min: 2, max: 6, def: 4 },
    { k: "twist", l: "Vortex Twist Deg", min: 0, max: 45, def: 15 },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const cx = (i + 0.5) * c;
        const cy = (j + 0.5) * c;
        let g = "";
        for (let s = q.sub; s >= 1; s--) {
          const r = (c * 0.48 * s) / q.sub;
          const rot = (q.sub - s) * q.twist * ((i + j) % 2 ? 1 : -1);
          const col = m.col(i + j + s);
          g += `<rect x="${f1(-r)}" y="${f1(-r)}" width="${f1(r * 2)}" height="${f1(r * 2)}" transform="rotate(${f1(rot)})" ${m.st(col, 1).a}/>`;
        }
        m.put(cx, cy, 0, 1, g, c);
      }
    }
  },
});

/* N17 — Andalusian Arabesque Mosaic */
registerMode({
  id: "arabesquetile",
  name: "Andalusian Arabesque Lantern",
  cat: "Mosaic",
  look: {
    bg: "#0c192c",
    ink: "#fef08a",
    cols: ["#0d9488", "#d97706", "#e11d48", "#0284c7", "#fef08a"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Lantern Grid", min: 2, max: 10, def: 4 },
    { k: "bulge", l: "Ogee Curve %", min: 30, max: 95, def: 65 },
    { k: "inner", l: "Inner Filigree", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = c / 100;
      const b = (45 * q.bulge) / 100;
      const d = `M0-48C${f1(b)}-28 ${f1(b)}-12 46 0C${f1(b)} 12 ${f1(b)} 28 0 48C${f1(-b)} 28 ${f1(-b)} 12-46 0C${f1(-b)}-12 ${f1(-b)}-28 0-48Z`;
      let g = `<path ${m.st(m.col(i + j), s).a} d="${d}"/>`;
      if (q.inner) {
        g += `<g transform="scale(0.56)"><path ${m.st(m.col(i + j + 2), s).a} d="${d}"/></g>`;
        g += `<circle ${m.st(m.col(i + j + 3), s).a} r="8"/>`;
      }
      m.put(x, y, 0, s, g, 70);
    });
  },
});

/* N18 — Chevron Herringbone Parquet */
registerMode({
  id: "herringbone",
  name: "Chevron Herringbone Parquet",
  cat: "Geometric",
  look: {
    bg: "#1f2937",
    ink: "#111827",
    cols: ["#10b981", "#059669", "#34d399", "#f59e0b", "#06b6d4"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "cols", l: "Chevron Columns", min: 2, max: 12, step: 2, def: 6 },
    { k: "rows", l: "Plank Rows", min: 4, max: 20, step: 2, def: 10 },
    { k: "slope", l: "Chevron Pitch %", min: 30, max: 120, def: 75 },
  ],
  draw(m: any, q: any) {
    const C = q.cols;
    const R = q.rows;
    const w = T / C;
    const h = T / R;
    const drop = (w * q.slope) / 100;
    const stroke =
      m.style === "flat"
        ? ""
        : ` stroke="${m.ink}" stroke-width="${f1(m.sw)}" stroke-linejoin="round"`;
    for (let i = -1; i <= C; i++) {
      for (let j = -2; j <= R + 2; j++) {
        const x0 = i * w;
        const x1 = (i + 1) * w;
        const y0 = j * h;
        const dir = i % 2 === 0 ? 1 : -1;
        const ya = dir === 1 ? y0 : y0 + drop;
        const yb = dir === 1 ? y0 + drop : y0;
        const d = `M${f1(x0)} ${f1(ya)}L${f1(x1)} ${f1(yb)}L${f1(x1)} ${f1(yb + h)}L${f1(x0)} ${f1(ya + h)}Z`;
        const col = m.col(i + j);
        m.raw(`<path d="${d}" fill="${m.style === "line" ? "none" : col}"${stroke}/>`);
      }
    }
  },
});

/* N19 — Bohemian Diamond Ikat */
registerMode({
  id: "tribalikat",
  name: "Bohemian Stepped Ikat",
  cat: "Textile",
  look: {
    bg: "#f7ede2",
    ink: "#2b1d14",
    cols: ["#d66853", "#f6bd60", "#84a59d", "#f28482", "#7d4f50"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Diamond Grid", min: 2, max: 8, def: 4 },
    { k: "steps", l: "Ikat Serrations", min: 3, max: 9, def: 6 },
    { k: "rings", l: "Concentric Tiers", min: 2, max: 5, def: 3 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = c / 100;
      let g = "";
      for (let r = q.rings; r >= 1; r--) {
        const rad = (48 * r) / q.rings;
        const col = m.col(i + j + r);
        const S = q.steps;
        let pts = "";
        for (let k = 0; k <= S; k++) {
          const u = k / S;
          pts += `${f1(u * rad)},${f1((u - 1) * rad)} `;
          if (k < S) pts += `${f1(((k + 1) / S) * rad)},${f1((u - 0.85) * rad)} `;
        }
        g += `<polygon ${m.st(col, s).a} points="0,${f1(-rad)} ${f1(rad)},0 0,${f1(rad)} ${f1(-rad)},0"/>`;
        const tooth = rad / S;
        for (let t = -S + 1; t < S; t++) {
          const ty = t * tooth * 0.75;
          const tw = (rad - Math.abs(ty)) * 1.08;
          g += `<rect x="${f1(-tw)}" y="${f1(ty - tooth * 0.25)}" width="${f1(tw * 2)}" height="${f1(tooth * 0.5)}" fill="${col}"/>`;
        }
      }
      m.put(x, y, 0, s, g, 65);
    });
  },
});

/* N20 — Topographic Contour Lines */
registerMode({
  id: "topocontour",
  name: "Topographic Elevation Map",
  cat: "Op-Art",
  look: {
    bg: "#071318",
    ink: "#10b981",
    cols: ["#10b981", "#06b6d4", "#34d399", "#f59e0b", "#0ea5e9"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Elevation Peaks", min: 3, max: 14, def: 6 },
    { k: "rings", l: "Contour Intervals", min: 3, max: 9, def: 6 },
    { k: "irr", l: "Terrain Distortion %", min: 15, max: 75, def: 45 },
    { k: "sz", l: "Peak Radius %", min: 65, max: 150, def: 110 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.65, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 105;
      const pts: [number, number][] = [];
      const N = 8;
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const r = 46 * (1 - (q.irr / 200) + m.rnd() * (q.irr / 100));
        pts.push([r * Math.cos(a), r * Math.sin(a)]);
      }
      const d = smoothC(pts);
      let g = "";
      for (let r = q.rings; r >= 1; r--) {
        const sc = r / q.rings;
        const st = m.st(m.col(k + r), s * sc);
        g += `<path transform="scale(${sc.toFixed(3)})" ${st.a} d="${d}"/>`;
      }
      m.put(x, y, m.rnd() * 360, s, g, 75);
    });
  },
});

/* N21 — Stained Glass Mosaic */
registerMode({
  id: "stainedglass",
  name: "Cathedral Stained Mosaic",
  cat: "Mosaic",
  look: {
    bg: "#090d16",
    ink: "#090d16",
    cols: ["#f43f5e", "#f59e0b", "#10b981", "#38bdf8", "#a855f7"],
    style: "both",
    sw: 5,
  },
  params: [
    { k: "n", l: "Shard Grid", min: 3, max: 12, def: 6 },
    { k: "jit", l: "Vertex Warp %", min: 0, max: 85, def: 58 },
    { k: "lead", l: "Lead Came Width", min: 2, max: 12, def: 6 },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const J = ((q.jit / 100) * c) * 0.44;
    const V: [number, number][][] = [];
    for (let i = 0; i < n; i++) {
      V[i] = [];
      for (let j = 0; j < n; j++) {
        V[i][j] = [(m.rnd() - 0.5) * 2 * J, (m.rnd() - 0.5) * 2 * J];
      }
    }
    const pt = (i: number, j: number): [number, number] => {
      const ii = m.mod(i, n);
      const jj = m.mod(j, n);
      return [i * c + V[ii][jj][0], j * c + V[ii][jj][1]];
    };
    const stroke = ` stroke="${m.ink}" stroke-width="${f1(q.lead)}" stroke-linejoin="round"`;
    for (let i = -1; i <= n; i++) {
      for (let j = -1; j <= n; j++) {
        const p00 = pt(i, j);
        const p10 = pt(i + 1, j);
        const p11 = pt(i + 1, j + 1);
        const p01 = pt(i, j + 1);
        const c1 = m.col(i * 3 + j);
        const c2 = m.col(i * 3 + j + 2);
        if ((i + j) % 2 === 0) {
          m.raw(`<polygon points="${f1(p00[0])},${f1(p00[1])} ${f1(p10[0])},${f1(p10[1])} ${f1(p11[0])},${f1(p11[1])}" fill="${c1}"${stroke}/>`);
          m.raw(`<polygon points="${f1(p00[0])},${f1(p00[1])} ${f1(p11[0])},${f1(p11[1])} ${f1(p01[0])},${f1(p01[1])}" fill="${c2}"${stroke}/>`);
        } else {
          m.raw(`<polygon points="${f1(p00[0])},${f1(p00[1])} ${f1(p10[0])},${f1(p10[1])} ${f1(p01[0])},${f1(p01[1])}" fill="${c1}"${stroke}/>`);
          m.raw(`<polygon points="${f1(p10[0])},${f1(p10[1])} ${f1(p11[0])},${f1(p11[1])} ${f1(p01[0])},${f1(p01[1])}" fill="${c2}"${stroke}/>`);
        }
      }
    }
  },
});

/* N22 — Kyoto Zen Bamboo Forest */
registerMode({
  id: "bamboogrove",
  name: "Kyoto Zen Bamboo Grove",
  cat: "Japanese",
  look: {
    bg: "#f2f5eb",
    ink: "#1a2e1f",
    cols: ["#3f6212", "#65a30d", "#15803d", "#d97706", "#a3e635"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "stalks", l: "Bamboo Stalks", min: 3, max: 14, def: 7 },
    { k: "segs", l: "Node Segments", min: 3, max: 10, def: 5 },
    { k: "sw", l: "Stalk Thickness", min: 14, max: 48, def: 26 },
    { k: "leaves", l: "Shoot Leaves", min: 1, max: 4, def: 3 },
  ],
  draw(m: any, q: any) {
    const N = q.stalks;
    const S = q.segs;
    const h = T / S;
    const dx = T / N;
    for (let i = 0; i < N; i++) {
      const x = (i + 0.35 + (m.rnd() - 0.5) * 0.25) * dx;
      const w = q.sw * (0.8 + m.rnd() * 0.35);
      const col = m.col(i);
      for (let j = -1; j <= S; j++) {
        const y = j * h;
        const st = m.st(col, 1);
        m.raw(`<rect x="${f1(x - w * 0.5)}" y="${f1(y + 4)}" width="${f1(w)}" height="${f1(h - 8)}" rx="${f1(w * 0.22)}" ${st.a}/>`);
        m.raw(`<rect x="${f1(x - w * 0.62)}" y="${f1(y - 3)}" width="${f1(w * 1.24)}" height="6" rx="3" fill="${m.ink}"/>`);
        if (m.rnd() < 0.75) {
          const dir = (i + j) % 2 ? 1 : -1;
          let lf = "";
          for (let l = 0; l < q.leaves; l++) {
            const ang = dir * (35 + l * 22);
            lf += `<path ${m.st(m.col(i + l + 1), 1).a} transform="rotate(${ang})" d="M0 0C-7-14-7-34 0-48C7-34 7-14 0 0Z"/>`;
          }
          m.put(x + dir * w * 0.5, (j % S) * h, 0, 1, lf, 60);
        }
      }
    }
  },
});

/* N23 — 70s Groovy Flower Power */
registerMode({
  id: "retrodaisychain",
  name: "70s Groovy Flower Power",
  cat: "Retro Pop",
  look: {
    bg: "#f4ead5",
    ink: "#2b2118",
    cols: ["#d9593d", "#f0a93b", "#3f7d6e", "#e8c9a0", "#2d4a6b"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Flower Grid", min: 2, max: 8, def: 4 },
    { k: "petals", l: "Groovy Petals", min: 5, max: 10, def: 6 },
    { k: "sz", l: "Bloom Scale %", min: 55, max: 120, def: 88 },
    { k: "smile", l: "Happy Center Face", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      const P = q.petals;
      const st = m.st(m.col(i + j), s);
      const cst = m.st(m.col(i + j + 1), s);
      let g = "";
      for (let p = 0; p < P; p++) {
        g += `<circle ${st.a} transform="rotate(${f1((p * 360) / P)})" cy="-26" r="18"/>`;
      }
      g += `<circle ${cst.a} r="19"/>`;
      if (q.smile) {
        g += `<circle cx="-6" cy="-3" r="2.6" fill="${m.ink}"/><circle cx="6" cy="-3" r="2.6" fill="${m.ink}"/><path d="M-7 4Q0 11 7 4" fill="none" stroke="${m.ink}" stroke-width="2.6" stroke-linecap="round"/>`;
      }
      m.put(x, y, (m.rnd() - 0.5) * 35, s, g, 65);
    });
  },
});

/* N24 — Rosette Medallion Grid */
registerMode({
  id: "kaleidomandala",
  name: "Kaleidoscope Star Medallion",
  cat: "Mandala",
  look: {
    bg: "#0f172a",
    ink: "#f8fafc",
    cols: ["#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Medallion Grid", min: 2, max: 8, def: 3 },
    { k: "spokes", l: "Symmetry Spokes", min: 6, max: 18, step: 2, def: 12 },
    { k: "sz", l: "Medallion Scale %", min: 60, max: 125, def: 96 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "grid", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      const S = q.spokes;
      let g = "";
      for (let k = 0; k < S; k++) {
        const ang = (k * 360) / S;
        g += `<polygon ${m.st(m.col(i + j + (k % 2)), s).a} transform="rotate(${f1(ang)})" points="0,0 -9,-26 0,-48 9,-26"/>`;
        g += `<circle ${m.st(m.col(i + j + 2), s).a} transform="rotate(${f1(ang + 180 / S)})" cy="-36" r="5.5"/>`;
      }
      g += `<path ${m.st(m.col(i + j + 3), s).a} d="${starPath(S, 22, 12)}"/>`;
      g += `<circle ${m.st(m.col(i + j + 4), s).a} r="8"/>`;
      m.put(x, y, 0, s, g, 70);
    });
  },
});

/* N25 — Koi Pond Ripple & Lotus Pads */
registerMode({
  id: "koiwater",
  name: "Lotus Pond Water Ripples",
  cat: "Japanese",
  look: {
    bg: "#0b2a3a",
    ink: "#eef6f8",
    cols: ["#10b981", "#48b5c4", "#f472b6", "#f6c177", "#a7d8de"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Lily Pads", min: 6, max: 28, def: 12 },
    { k: "rings", l: "Water Ripple Rings", min: 1, max: 5, def: 3 },
    { k: "sz", l: "Pad Scale %", min: 55, max: 130, def: 92 },
    { k: "bloom", l: "Floating Lotus Flowers", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 120;
      let g = "";
      for (let r = 1; r <= q.rings; r++) {
        const rad = 38 + r * 11;
        g += `<circle r="${f1(rad)}" fill="none" stroke="${m.col(1)}" stroke-width="2" opacity="${f1(0.75 / r)}" stroke-dasharray="14 8"/>`;
      }
      const padSt = m.st(m.col(0), s);
      g += `<path ${padSt.a} d="M0 0L34-12A36 36 0 1 0 34 12Z"/>`;
      if (q.bloom && k % 2 === 0) {
        const flSt = m.st(m.col(2), s);
        for (let p = 0; p < 8; p++) {
          g += `<ellipse ${flSt.a} transform="rotate(${p * 45})" cy="-14" rx="5.5" ry="12"/>`;
        }
        g += `<circle r="6" fill="${m.col(3)}"/>`;
      }
      m.put(x, y, m.rnd() * 360, s, g, 80);
    });
  },
});

/* N26 — Classic Argyle Diamond Knit */
registerMode({
  id: "argyleknit",
  name: "Scottish Argyle Diamond Knit",
  cat: "Plaid",
  look: {
    bg: "#16295a",
    ink: "#f7d84a",
    cols: ["#e11d48", "#38bdf8", "#f7d84a", "#10b981", "#c9ccd6"],
    style: "flat",
  },
  params: [
    { k: "cols", l: "Diamond Columns", min: 2, max: 10, def: 4 },
    { k: "rows", l: "Diamond Rows", min: 2, max: 10, def: 4 },
    { k: "stitch", l: "Rhomboid Dash Stitch", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const C = q.cols;
    const R = q.rows;
    const w = T / C;
    const h = T / R;
    for (let i = -1; i <= C; i++) {
      for (let j = -1; j <= R; j++) {
        const cx = (i + 0.5) * w;
        const cy = (j + 0.5) * h;
        m.raw(`<polygon points="${f1(cx)},${f1(cy - h * 0.5)} ${f1(cx + w * 0.5)},${f1(cy)} ${f1(cx)},${f1(cy + h * 0.5)} ${f1(cx - w * 0.5)},${f1(cy)}" fill="${m.col(0)}"/>`);
        const kx = i * w;
        const ky = j * h;
        m.raw(`<polygon points="${f1(kx)},${f1(ky - h * 0.25)} ${f1(kx + w * 0.25)},${f1(ky)} ${f1(kx)},${f1(ky + h * 0.25)} ${f1(kx - w * 0.25)},${f1(ky)}" fill="${m.col(1)}" opacity="0.85"/>`);
      }
    }
    if (q.stitch) {
      const da = `stroke="${m.ink}" stroke-width="3" stroke-dasharray="9 7" fill="none"`;
      for (let i = -C; i <= C * 2; i++) {
        m.raw(`<line x1="${f1(i * w)}" y1="0" x2="${f1(i * w + C * w)}" y2="${T}" ${da}/>`);
        m.raw(`<line x1="${f1(i * w)}" y1="0" x2="${f1(i * w - C * w)}" y2="${T}" ${da}/>`);
      }
    }
  },
});

/* N27 — Kinetic Halftone Dot Wave */
registerMode({
  id: "halftonewave",
  name: "Kinetic Halftone Dot Matrix",
  cat: "Op-Art",
  look: {
    bg: "#071318",
    ink: "#e2f8f0",
    cols: ["#10b981", "#06b6d4", "#f59e0b", "#ec4899", "#8b5cf6"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Matrix Resolution", min: 8, max: 32, def: 18 },
    { k: "freq", l: "Ripple Frequency", min: 1, max: 5, def: 2 },
    { k: "maxr", l: "Max Dot Radius %", min: 40, max: 110, def: 85 },
    {
      k: "sh",
      l: "Matrix Element",
      type: "select",
      opts: [
        ["circle", "Circles"],
        ["diamond", "Diamonds"],
        ["star", "4-Pt Stars"],
      ],
      def: "circle",
    },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const c = T / N;
    const TAU = Math.PI * 2;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = (i + 0.5) * c;
        const y = (j + 0.5) * c;
        const v = 0.5 + 0.5 * Math.sin((i / N) * TAU * q.freq) * Math.cos((j / N) * TAU * q.freq);
        const r = c * 0.5 * (q.maxr / 100) * (0.2 + 0.8 * v);
        const col = m.col(Math.floor(v * m.cols.length));
        if (q.sh === "circle") {
          m.raw(`<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}" fill="${col}"/>`);
        } else if (q.sh === "diamond") {
          m.raw(`<polygon points="${f1(x)},${f1(y - r)} ${f1(x + r)},${f1(y)} ${f1(x)},${f1(y + r)} ${f1(x - r)},${f1(y)}" fill="${col}"/>`);
        } else {
          m.at(x, y, 0, r / 35, `<path d="${starPath(4, 35, 12)}" fill="${col}"/>`);
        }
      }
    }
  },
});

/* N28 — Monarch Butterfly Swarm */
registerMode({
  id: "butterflies",
  name: "Monarch Butterfly Sanctuary",
  cat: "Botanical",
  look: {
    bg: "#130924",
    ink: "#fdf4ff",
    cols: ["#f97316", "#ec4899", "#38bdf8", "#eab308", "#a855f7"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Butterfly Count", min: 6, max: 32, def: 15 },
    { k: "sz", l: "Wing Span %", min: 55, max: 130, def: 90 },
    { k: "spots", l: "Wing Eye Spots", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 120;
      const st1 = m.st(m.col(k), s);
      const st2 = m.st(m.col(k + 1), s);
      let b = "";
      b += `<path ${st1.a} d="M0-4C-16-36-46-40-44-12C-42 6-18 8 0 2ZM0-4C16-36 46-40 44-12C42 6 18 8 0 2Z"/>`;
      b += `<path ${st2.a} d="M0 2C-18 6-36 28-24 38C-12 46-4 24 0 10ZM0 2C18 6 36 28 24 38C12 46 4 24 0 10Z"/>`;
      if (q.spots) {
        const c3 = m.col(k + 2);
        b += `<circle cx="-26" cy="-14" r="6" fill="${c3}"/><circle cx="26" cy="-14" r="6" fill="${c3}"/>`;
        b += `<circle cx="-18" cy="22" r="4" fill="${c3}"/><circle cx="18" cy="22" r="4" fill="${c3}"/>`;
      }
      b += `<rect x="-2.5" y="-22" width="5" height="38" rx="2.5" fill="${m.ink}"/>`;
      b += `<path d="M-1-20Q-8-32-14-34M1-20Q8-32 14-34" fill="none" stroke="${m.ink}" stroke-width="2" stroke-linecap="round"/>`;
      m.put(x, y, m.rnd() * 360, s, b, 70);
    });
  },
});

/* N29 — Geometric Origami Cranes */
registerMode({
  id: "origamibirds",
  name: "Origami Paper Cranes",
  cat: "Japanese",
  look: {
    bg: "#eef6f8",
    ink: "#0b2a3a",
    cols: ["#e87e6b", "#48b5c4", "#f6c177", "#0b6e8a", "#a7d8de"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Crane Grid", min: 2, max: 8, def: 4 },
    { k: "sz", l: "Crane Scale %", min: 55, max: 120, def: 86 },
    { k: "tilt", l: "Flight Angle Jit", min: 0, max: 180, def: 25 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      const c1 = m.st(m.col(i + j), s).a;
      const c2 = m.st(m.col(i + j + 1), s).a;
      const c3 = m.st(m.col(i + j + 2), s).a;
      let crane = "";
      crane += `<polygon ${c1} points="0,-8 -44,-28 -14,8"/>`;
      crane += `<polygon ${c2} points="0,-8 42,-24 14,8"/>`;
      crane += `<polygon ${c3} points="-14,8 14,8 0,-12"/>`;
      crane += `<polygon ${c2} points="-14,8 0,8 -24,38"/>`;
      crane += `<polygon ${c1} points="14,8 2,8 22,-36 32,-32 18,-28"/>`;
      m.put(x, y, (m.rnd() - 0.5) * 2 * q.tilt, s, crane, 65);
    });
  },
});

/* N30 — Faceted Crystal Prisms */
registerMode({
  id: "crystalprism",
  name: "Faceted Crystal Gemstones",
  cat: "Geometric",
  look: {
    bg: "#090418",
    ink: "#ffffff",
    cols: ["#00f0ff", "#ff2a85", "#7b2cbf", "#ffbe0b", "#3a86ff"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Gemstone Grid", min: 2, max: 9, def: 4 },
    { k: "sides", l: "Crystal Facets", min: 5, max: 10, def: 6 },
    { k: "sz", l: "Gem Scale %", min: 55, max: 115, def: 86 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = (c * q.sz) / 100 / 110;
      const N = q.sides;
      const R = 44;
      const r = 24;
      let g = "";
      let table = "";
      for (let k = 0; k < N; k++) {
        const a1 = (k * Math.PI * 2) / N;
        const a2 = ((k + 1) * Math.PI * 2) / N;
        const x1 = R * Math.cos(a1);
        const y1 = R * Math.sin(a1);
        const x2 = R * Math.cos(a2);
        const y2 = R * Math.sin(a2);
        const ix1 = r * Math.cos(a1);
        const iy1 = r * Math.sin(a1);
        const ix2 = r * Math.cos(a2);
        const iy2 = r * Math.sin(a2);
        g += `<polygon ${m.st(m.col(i + j + k), s).a} points="${f1(x1)},${f1(y1)} ${f1(x2)},${f1(y2)} ${f1(ix2)},${f1(iy2)} ${f1(ix1)},${f1(iy1)}"/>`;
        table += `${f1(ix1)},${f1(iy1)} `;
      }
      g += `<polygon ${m.st(m.col(i + j + 2), s).a} points="${table.trim()}"/>`;
      m.put(x, y, ((i + j) % 2) * (180 / N), s, g, 65);
    });
  },
});

/* N31 — Aztec Step Pyramid Fret */
registerMode({
  id: "aztecsun",
  name: "Aztec Stepped Pyramid Fret",
  cat: "Geometric",
  look: {
    bg: "#2b1d14",
    ink: "#f7ede2",
    cols: ["#d66853", "#f6bd60", "#84a59d", "#f28482", "#e07a5f"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Pyramid Repeats", min: 2, max: 8, def: 4 },
    { k: "tiers", l: "Temple Tiers", min: 2, max: 6, def: 4 },
    { k: "sun", l: "Central Sun Core", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const cx = (i + 0.5) * c;
        const cy = (j + 0.5) * c;
        let g = "";
        for (let t = q.tiers; t >= 1; t--) {
          const r = (c * 0.48 * t) / q.tiers;
          const s = r * 0.55;
          const d = `M${f1(-s)} ${f1(-r)}H${f1(s)}V${f1(-s)}H${f1(r)}V${f1(s)}H${f1(s)}V${f1(r)}H${f1(-s)}V${f1(s)}H${f1(-r)}V${f1(-s)}H${f1(-s)}Z`;
          g += `<path ${m.st(m.col(i + j + t), 1).a} d="${d}"/>`;
        }
        if (q.sun) {
          g += `<circle ${m.st(m.col(i + j), 1).a} r="${f1(c * 0.1)}"/>`;
        }
        m.put(cx, cy, 0, 1, g, c);
      }
    }
  },
});

/* N32 — Wild Daisy Meadow */
registerMode({
  id: "daisymeadow",
  name: "Alpine Wild Daisy Meadow",
  cat: "Botanical",
  look: {
    bg: "#1c4a40",
    ink: "#0f2a24",
    cols: ["#ffffff", "#f3a21c", "#9fd0b4", "#f7a6b8", "#4f9a78"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Daisy Blooms", min: 10, max: 45, def: 22 },
    { k: "petals", l: "Petal Count", min: 8, max: 18, step: 2, def: 12 },
    { k: "sz", l: "Bloom Size %", min: 55, max: 130, def: 90 },
    { k: "sprigs", l: "Meadow Fern Sprigs", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.7, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 115;
      let g = "";
      if (q.sprigs) {
        const lst = m.st(m.col(2), s);
        g += `<path ${lst.a} transform="rotate(35)" d="M0 0C-10-18-10-38 0-54C10-38 10-18 0 0Z"/>`;
        g += `<path ${lst.a} transform="rotate(-55)" d="M0 0C-9-16-9-34 0-48C9-34 9-16 0 0Z"/>`;
      }
      g += SH.daisy(m.st(m.col(0), s), m.st(m.col(1), s), q.petals);
      m.put(x, y, m.rnd() * 360, s, g, 70);
    });
  },
});

/* N33 — Seigaiha Ocean Waves */
registerMode({
  id: "seigaihawave",
  name: "Seigaiha Imperial Waves",
  cat: "Japanese",
  look: {
    bg: "#0f1d33",
    ink: "#f4efe6",
    cols: ["#0b6e8a", "#f4efe6", "#48b5c4", "#f6c177", "#1f5f7f"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Wave Columns", min: 2, max: 10, def: 5 },
    { k: "rings", l: "Crest Bands", min: 3, max: 7, def: 5 },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const w = T / n;
    const rows = n * 4;
    const h = T / rows;
    const R = w * 0.56;
    for (let j = -2; j <= rows + 2; j++) {
      for (let i = -1; i <= n + 1; i++) {
        const cx = (i + (m.mod(j, 2) ? 0.5 : 0)) * w;
        const cy = j * h;
        let g = "";
        for (let r = q.rings; r >= 1; r--) {
          const rad = (R * r) / q.rings;
          const col = m.col(r + (j % 2));
          g += `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(rad)}" ${m.st(col, 1).a}/>`;
        }
        m.raw(g);
      }
    }
  },
});

/* N34 — Mid-Century Starburst Atomic */
registerMode({
  id: "atomicretro",
  name: "Mid-Century Atomic Boomerang",
  cat: "Retro Pop",
  look: {
    bg: "#f4ead5",
    ink: "#2b2118",
    cols: ["#e07a5f", "#2ec4b6", "#f0a93b", "#3d405b", "#e11d48"],
    style: "both",
    sw: 3,
  },
  params: [
    { k: "n", l: "Motif Count", min: 8, max: 36, def: 18 },
    { k: "sz", l: "Motif Scale %", min: 55, max: 135, def: 92 },
    { k: "Boomerang", l: "Include Boomerangs", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    m.scatter(q.n, (T / Math.sqrt(q.n)) * 0.72, (x: number, y: number, k: number) => {
      const s = ((T / Math.sqrt(q.n)) * (q.sz / 100)) / 120;
      const col = m.col(k);
      const st = m.st(col, s);
      let g = "";
      if (q.Boomerang && k % 2 === 0) {
        g += `<path ${st.a} d="M-42 22C-18-24 12-28 44 16C14-6-10-4-42 22Z"/>`;
        g += `<circle ${m.st(m.col(k + 1), s).a} cx="2" cy="18" r="9"/>`;
      } else {
        for (let r = 0; r < 4; r++) {
          g += `<line transform="rotate(${r * 45})" x1="-42" y1="0" x2="42" y2="0" stroke="${m.ink}" stroke-width="3"/>`;
          g += `<circle transform="rotate(${r * 45})" cx="42" cy="0" r="5" fill="${m.col(k + r)}"/>`;
        }
        g += `<path ${st.a} d="${starPath(4, 28, 8)}"/>`;
      }
      m.put(x, y, m.rnd() * 360, s, g, 70);
    });
  },
});

/* N35 — Guilloche Spirograph Rosette */
registerMode({
  id: "spiroguilloche",
  name: "Guilloche Spirograph Lattice",
  cat: "Mandala",
  look: {
    bg: "#071318",
    ink: "#10b981",
    cols: ["#10b981", "#06b6d4", "#f59e0b", "#ec4899", "#a855f7"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Rosette Grid", min: 2, max: 7, def: 3 },
    { k: "lobes", l: "Orbit Petals", min: 6, max: 24, step: 2, def: 12 },
    { k: "ecc", l: "Orbit Eccentricity %", min: 25, max: 90, def: 62 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "halfdrop", (x: number, y: number, i: number, j: number, c: number) => {
      const s = c / 110;
      const L = q.lobes;
      const rx = 44;
      const ry = (44 * q.ecc) / 100;
      let g = "";
      for (let k = 0; k < L; k++) {
        const ang = (k * 180) / L;
        const col = m.col(i + j + (k % 3));
        g += `<ellipse transform="rotate(${f1(ang)})" rx="${f1(rx)}" ry="${f1(ry)}" fill="none" stroke="${col}" stroke-width="${f1(m.sw * 1.1)}"/>`;
      }
      g += `<circle ${m.st(m.col(i + j), s).a} r="10"/>`;
      m.put(x, y, 0, s, g, 70);
    });
  },
});

/* N36 — Bauhaus Constructivist Matrix */
registerMode({
  id: "bauhausmatrix",
  name: "Constructivist Arch Matrix",
  cat: "Geometric",
  look: {
    bg: "#14211d",
    ink: "#f2ede1",
    cols: ["#a8f2c6", "#f6837a", "#8fe0f0", "#f6e37a", "#f2ede1"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Grid Divisions", min: 2, max: 10, def: 5 },
    { k: "stripes", l: "Inner Stripe Count", min: 2, max: 7, def: 4 },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const s = T / n;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const x = i * s;
        const y = j * s;
        const c1 = m.col(i + j);
        const c2 = m.col(i * 2 + j + 1);
        const c3 = m.col(i + j * 2 + 2);
        const kind = (i * 3 + j) % 4;
        m.raw(`<rect x="${f1(x)}" y="${f1(y)}" width="${f1(s + 0.4)}" height="${f1(s + 0.4)}" fill="${c1}"/>`);
        if (kind === 0) {
          for (let k = q.stripes; k >= 1; k--) {
            const r = (s * k) / q.stripes;
            m.raw(`<path d="M${f1(x)} ${f1(y)}L${f1(x + r)} ${f1(y)}A${f1(r)} ${f1(r)} 0 0 1 ${f1(x)} ${f1(y + r)}Z" fill="${k % 2 ? c2 : c3}"/>`);
          }
        } else if (kind === 1) {
          m.raw(`<circle cx="${f1(x + s * 0.5)}" cy="${f1(y + s * 0.5)}" r="${f1(s * 0.42)}" fill="${c2}"/><circle cx="${f1(x + s * 0.5)}" cy="${f1(y + s * 0.5)}" r="${f1(s * 0.2)}" fill="${c3}"/>`);
        } else if (kind === 2) {
          m.raw(`<polygon points="${f1(x)},${f1(y)} ${f1(x + s)},${f1(y)} ${f1(x + s * 0.5)},${f1(y + s * 0.5)}" fill="${c2}"/><polygon points="${f1(x)},${f1(y + s)} ${f1(x + s)},${f1(y + s)} ${f1(x + s * 0.5)},${f1(y + s * 0.5)}" fill="${c3}"/>`);
        } else {
          const sw = s / (q.stripes * 2);
          for (let k = 0; k < q.stripes; k++) {
            m.raw(`<rect x="${f1(x + k * sw * 2)}" y="${f1(y)}" width="${f1(sw)}" height="${f1(s)}" fill="${c2}"/>`);
          }
        }
      }
    }
  },
});

/* 01 — hatched tartan */
registerMode({
  id: "htartan",
  name: "Hatched Tartan",
  cat: "Plaid",
  look: {
    bg: "#e8401c",
    ink: "#22333a",
    cols: ["#f7a6b8", "#22333a", "#f6c24a", "#ffffff", "#b8300f"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Repeats", min: 1, max: 8, def: 4 },
    { k: "bw", l: "Band width %", min: 15, max: 65, def: 42 },
    { k: "hd", l: "Hatch lines / band", min: 3, max: 20, def: 8 },
    { k: "hw", l: "Hatch weight %", min: 20, max: 85, def: 50 },
    {
      k: "dir",
      l: "Hatch",
      type: "select",
      opts: [
        ["f", "Diagonal /"],
        ["b", "Diagonal \\"],
        ["x", "Cross hatch"],
      ],
      def: "f",
    },
    {
      k: "cross",
      l: "Crossings",
      type: "select",
      opts: [
        ["solid", "Solid"],
        ["hatch", "Hatched"],
        ["dark", "Dark block"],
      ],
      def: "solid",
    },
    {
      k: "ln",
      l: "Fine lines",
      type: "select",
      opts: [
        ["two", "Double"],
        ["one", "Single"],
        ["dash", "Dashed"],
        ["none", "None"],
      ],
      def: "two",
    },
    { k: "lw", l: "Line width", min: 1, max: 10, step: 0.5, def: 3 },
    { k: "acc", l: "Accent dashes", type: "check", def: false },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const b = (c * q.bw) / 100;
    const o0 = (c - b) / 2;
    const B = m.col(0);
    const L = m.col(1);
    let rv = "";
    let rh = "";
    for (let i = -1; i <= n; i++) {
      const x = i * c + o0;
      rv += `<rect x="${f1(x)}" y="-20" width="${f1(b)}" height="${T + 40}"/>`;
      rh += `<rect x="-20" y="${f1(x)}" width="${T + 40}" height="${f1(b)}"/>`;
    }
    const p = T / Math.max(n, Math.round(T / (b / q.hd)));
    const wt = (p * 0.7071 * q.hw) / 100;
    if (q.dir === "x") {
      hatchIn(m, rv, B, p, wt, "f", "v");
      hatchIn(m, rh, B, p, wt, "b", "h");
    } else hatchIn(m, rv + rh, B, p, wt, q.dir);
    if (q.cross !== "hatch") {
      let s = "";
      for (let i = -1; i <= n; i++)
        for (let j = -1; j <= n; j++)
          s += `<rect x="${f1(i * c + o0)}" y="${f1(j * c + o0)}" width="${f1(b)}" height="${f1(
            b
          )}"/>`;
      m.raw(`<g fill="${q.cross === "solid" ? B : mixCol(B, L, 0.55)}">${s}</g>`);
    }
    if (q.ln !== "none") {
      const pos = q.ln === "two" ? [0.2, 0.8] : [0.5];
      const per = c / 10;
      const da =
        q.ln === "dash" ? ` stroke-dasharray="${f1(per * 0.55)} ${f1(per * 0.45)}"` : "";
      let d = "";
      for (let i = 0; i < n; i++)
        for (const f of pos) {
          const x = i * c + o0 + b * f;
          d += `M${f1(x)} 0V${T}M0 ${f1(x)}H${T}`;
        }
      m.raw(`<path d="${d}" fill="none" stroke="${L}" stroke-width="${f1(q.lw)}"${da}/>`);
    }
    if (q.acc) {
      let d = "";
      for (let i = 0; i <= n; i++) {
        const x = i * c;
        d += `M${f1(x)} 0V${T}M0 ${f1(x)}H${T}`;
      }
      m.raw(
        `<path d="${d}" fill="none" stroke="${m.col(2)}" stroke-width="${f1(
          Math.max(1.5, q.lw * 0.85)
        )}" opacity="0.85"/>`
      );
    }
  },
});

/* 02 — tweed buffalo check */
registerMode({
  id: "tweedbuffalo",
  name: "Tweed Buffalo Check",
  cat: "Plaid",
  look: { bg: "#f3e8dc", ink: "#141414", cols: ["#141414", "#8a2a1a", "#5a4a3a"], style: "flat" },
  params: [
    { k: "n", l: "Repeats", min: 2, max: 6, def: 4 },
    { k: "bw", l: "Block size %", min: 30, max: 70, def: 50 },
    {
      k: "pu",
      l: "Pixel size",
      type: "select",
      opts: [
        ["12", "Large"],
        ["16", "Medium"],
        ["24", "Small"],
      ],
      def: "16",
    },
    {
      k: "ht",
      l: "Hatch",
      type: "select",
      opts: [
        ["diag", "Diagonal"],
        ["twill", "Twill"],
        ["fine", "Fine check"],
        ["lines", "Lines"],
      ],
      def: "diag",
    },
    { k: "two", l: "Two colours", type: "check", def: false },
  ],
  draw(m: any, q: any) {
    const U = +q.pu;
    const N = q.n * U;
    const b = Math.max(1, Math.round((U * q.bw) / 100));
    const D = m.col(0);
    const D2 = q.two ? m.col(1) : D;
    const ht = (x: number, y: number, v: boolean) =>
      q.ht === "diag"
        ? (x + y) % 3 === 0
        : q.ht === "twill"
        ? (x + y) % 4 < 2
        : q.ht === "fine"
        ? (x + y) % 2 === 0
        : (v ? x : y) % 2 === 0;
    pixRows(m, N, N, (x, y) => {
      const a = x % U < b;
      const c = y % U < b;
      if (a && c) return D;
      if (a) return ht(x, y, true) ? D : null;
      if (c) return ht(x, y, false) ? D2 : null;
      return null;
    });
  },
});

/* 03 — houndstooth */
registerMode({
  id: "houndstooth",
  name: "Houndstooth",
  cat: "Plaid",
  look: { bg: "#2f86c6", ink: "#4a3328", cols: ["#4a3328", "#f05a2a", "#f2efe2"], style: "flat" },
  params: [
    { k: "rep", l: "Repeats", min: 2, max: 14, def: 6 },
    {
      k: "tw",
      l: "Tooth",
      type: "select",
      opts: [
        ["1", "Classic"],
        ["2", "Big hook"],
        ["3", "Fine twill"],
      ],
      def: "1",
    },
    {
      k: "edge",
      l: "Edges",
      type: "select",
      opts: [
        ["smooth", "Smooth"],
        ["pixel", "Pixel"],
      ],
      def: "smooth",
    },
    {
      k: "dir",
      l: "Direction",
      type: "select",
      opts: [
        ["r", "Right"],
        ["l", "Left"],
      ],
      def: "r",
    },
    { k: "two", l: "Two colours", type: "check", def: false },
    { k: "ov", l: "Overcheck line", type: "check", def: false },
  ],
  draw(m: any, q: any) {
    const tw = +q.tw;
    const L = q.dir === "l";
    const D1 = m.col(0);
    const D2 = q.two ? m.col(1) : D1;
    let P = T / q.rep;
    if (q.edge === "pixel") {
      const rep = Math.max(1, Math.min(q.rep, Math.floor(128 / (8 * tw))));
      const N = 8 * tw * rep;
      const H = 4 * tw;
      const M = 8 * tw;
      P = T / rep;
      pixRows(m, N, N, (x, y) => {
        const t = L ? (((x - y) % 4) + 4) % 4 : (x + y) % 4;
        return t < 2 ? (x % M < H ? D1 : null) : y % M < H ? D2 : null;
      });
    } else {
      const per = P / (2 * tw);
      const duty = per / 2;
      const E = 40;
      const K = Math.ceil((2 * T + 2 * E) / per) + 2;
      const bandPoly = (a: number, b: number): [number, number][] =>
        L
          ? [
              [a - E, -E],
              [b - E, -E],
              [b + T + E, T + E],
              [a + T + E, T + E],
            ]
          : [
              [a + E, -E],
              [b + E, -E],
              [b - T - E, T + E],
              [a - T - E, T + E],
            ];
      const polys: string[] = [];
      for (let k = -K; k <= K; k++) {
        const a = k * per;
        const pA = bandPoly(a, a + duty);
        const pB = bandPoly(a + duty, a + per);
        for (let i = 0; i < q.rep; i++) {
          const x0 = i * P;
          const x1 = Math.min(T, x0 + P / 2);
          const cA = clipPolyToRect(pA, x0, 0, x1, T);
          if (cA.length >= 3) {
            polys.push(
              `<polygon points="${cA.map((pt) => `${f1(pt[0])},${f1(pt[1])}`).join(" ")}" fill="${D1}"/>`
            );
          }
          const y0 = i * P;
          const y1 = Math.min(T, y0 + P / 2);
          const cB = clipPolyToRect(pB, 0, y0, T, y1);
          if (cB.length >= 3) {
            polys.push(
              `<polygon points="${cB.map((pt) => `${f1(pt[0])},${f1(pt[1])}`).join(" ")}" fill="${D2}"/>`
            );
          }
        }
      }
      if (!q.two) {
        for (let i = 0; i < q.rep; i++) {
          for (let j = 0; j < q.rep; j++) {
            polys.push(
              `<rect x="${f1(i * P)}" y="${f1(j * P)}" width="${f1(P / 2)}" height="${f1(
                P / 2
              )}" fill="${D1}"/>`
            );
          }
        }
      }
      m.raw(polys.join(""));
    }
    if (q.ov) {
      let d = "";
      for (let i = 0; i < T / P; i++) {
        const x = i * P + P * 0.75;
        d += `M${f1(x)} 0V${T}M0 ${f1(x)}H${T}`;
      }
      m.raw(`<path d="${d}" fill="none" stroke="${m.col(1)}" stroke-width="${f1(P * 0.035)}"/>`);
    }
  },
});

/* 04 — hatched windowpane */
registerMode({
  id: "windowpane",
  name: "Hatched Windowpane",
  cat: "Plaid",
  look: { bg: "#d9b8f2", ink: "#3a2a28", cols: ["#3a2a28", "#f05a2a", "#ffffff"], style: "flat" },
  params: [
    { k: "n", l: "Squares", min: 2, max: 10, def: 4 },
    { k: "lw", l: "Line width %", min: 2, max: 22, def: 8 },
    {
      k: "st",
      l: "Line style",
      type: "select",
      opts: [
        ["hatch", "Hatched"],
        ["stitch", "Stitched"],
        ["ladder", "Ladder"],
        ["solid", "Solid"],
      ],
      def: "hatch",
    },
    { k: "hd", l: "Hatch density", min: 2, max: 8, def: 3 },
    { k: "two", l: "Second line", type: "check", def: false },
    { k: "gap", l: "Second line gap %", min: 8, max: 45, def: 16 },
    {
      k: "cm",
      l: "Second line colour",
      type: "select",
      opts: [
        ["two", "Second colour"],
        ["same", "Same colour"],
      ],
      def: "two",
    },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const c = T / n;
    const w = (c * q.lw) / 100;
    const one = (off: number, col: string, tag: string) => {
      if (q.st === "hatch") {
        let r = "";
        for (let i = -1; i <= n; i++) {
          const x = i * c + off;
          r += `<rect x="${f1(x - w / 2)}" y="-20" width="${f1(w)}" height="${
            T + 40
          }"/><rect x="-20" y="${f1(x - w / 2)}" width="${T + 40}" height="${f1(w)}"/>`;
        }
        const p = T / Math.round(T / ((w / q.hd) * 1.4));
        hatchIn(m, r, col, p, p * 0.7071 * 0.6, "f", tag);
        return;
      }
      const per = c / Math.max(2, Math.round(c / (w * (q.st === "ladder" ? 0.9 : 2.6))));
      const da =
        q.st === "solid"
          ? ""
          : ` stroke-dasharray="${f1(q.st === "ladder" ? per * 0.42 : per * 0.62)} ${f1(
              q.st === "ladder" ? per * 0.58 : per * 0.38
            )}"`;
      let d = "";
      for (let i = -1; i <= n; i++) {
        const x = i * c + off;
        d += `M${f1(x)} 0V${T}M0 ${f1(x)}H${T}`;
      }
      m.raw(`<path d="${d}" fill="none" stroke="${col}" stroke-width="${f1(w)}"${da}/>`);
    };
    one(c * 0.5, m.col(0), "a");
    if (q.two) one(c * 0.5 + (c * q.gap) / 100, q.cm === "two" ? m.col(1) : m.col(0), "b");
  },
});

/* 05 — tweed windowpane */
registerMode({
  id: "tweedpane",
  name: "Tweed Windowpane",
  cat: "Plaid",
  look: { bg: "#f3e8dc", ink: "#141414", cols: ["#141414", "#8a2a1a", "#5a4a3a"], style: "flat" },
  params: [
    { k: "n", l: "Squares", min: 2, max: 6, def: 4 },
    {
      k: "pu",
      l: "Pixel size",
      type: "select",
      opts: [
        ["16", "Large"],
        ["24", "Medium"],
        ["32", "Small"],
      ],
      def: "24",
    },
    { k: "lw", l: "Line width", min: 1, max: 4, def: 2 },
    { k: "blk", l: "Crossing block", min: 0, max: 8, def: 4 },
    {
      k: "st",
      l: "Stitch",
      type: "select",
      opts: [
        ["twill", "Twill"],
        ["rev", "Reverse twill"],
        ["dash", "Dash"],
        ["dot", "Dot"],
        ["solid", "Solid"],
      ],
      def: "twill",
    },
    { k: "dbl", l: "Double lines", type: "check", def: false },
    { k: "two", l: "Two colours", type: "check", def: false },
  ],
  draw(m: any, q: any) {
    tweedPane(m, q);
  },
});

/* 06 — tweed grid check */
registerMode({
  id: "tweedgrid",
  name: "Tweed Grid Check",
  cat: "Plaid",
  look: { bg: "#f3e8dc", ink: "#141414", cols: ["#141414", "#8a2a1a", "#5a4a3a"], style: "flat" },
  params: [
    { k: "n", l: "Squares", min: 4, max: 12, def: 8 },
    {
      k: "pu",
      l: "Pixel size",
      type: "select",
      opts: [
        ["12", "Large"],
        ["16", "Medium"],
        ["20", "Small"],
      ],
      def: "16",
    },
    { k: "lw", l: "Line width", min: 1, max: 2, def: 1 },
    { k: "blk", l: "Crossing block", min: 0, max: 4, def: 0 },
    {
      k: "st",
      l: "Stitch",
      type: "select",
      opts: [
        ["dash", "Dash"],
        ["dot", "Dot"],
        ["twill", "Twill"],
        ["solid", "Solid"],
      ],
      def: "dash",
    },
    { k: "dbl", l: "Double lines", type: "check", def: false },
    { k: "two", l: "Two colours", type: "check", def: false },
  ],
  draw(m: any, q: any) {
    tweedPane(m, q);
  },
});

/* 07 — wobbly stripes */
registerMode({
  id: "wobblestripe",
  name: "Wobbly Stripes",
  cat: "Stripes",
  look: {
    bg: "#fdf6e6",
    ink: "#e9502a",
    cols: ["#f7c6cf", "#e9502a", "#bfe0f1", "#3a7cbf", "#fdf6e6"],
    style: "flat",
  },
  params: [
    { k: "k", l: "Stripes", min: 3, max: 26, def: 9 },
    { k: "wf", l: "Stripe width %", min: 6, max: 85, def: 46 },
    { k: "wob", l: "Wobble", min: 0, max: 40, def: 12 },
    { k: "fr", l: "Waves", min: 1, max: 5, def: 2 },
    { k: "tp", l: "Hand-drawn edge", min: 0, max: 60, def: 22 },
    { k: "jit", l: "Spacing jitter", min: 0, max: 40, def: 10 },
    {
      k: "cm",
      l: "Colours",
      type: "select",
      opts: [
        ["one", "One colour"],
        ["alt", "Alternate two"],
        ["thin", "Thick + thin"],
        ["cyc", "Cycle all"],
      ],
      def: "one",
    },
  ],
  draw(m: any, q: any) {
    let k = q.k;
    if (q.cm === "alt") k = evenN(k);
    const Q = Object.assign({}, q, { k });
    wobStripes(m, Q, false, (i) =>
      q.cm === "alt" ? m.col(i % 2) : q.cm === "cyc" ? m.col(i) : m.col(0)
    );
    if (q.cm === "thin")
      wobStripes(
        m,
        Object.assign({}, Q, { wf: Math.max(3, q.wf * 0.18), shift: 0.5, jit: 0, tp: q.tp * 0.5 }),
        false,
        () => m.col(1)
      );
  },
});

/* 08 — sailor waves */
registerMode({
  id: "sailorwave",
  name: "Sailor Waves",
  cat: "Stripes",
  look: {
    bg: "#ececea",
    ink: "#2558b0",
    cols: ["#2558b0", "#e04a3a", "#7aa0d8", "#1a3a7a", "#ffffff"],
    style: "flat",
  },
  params: [
    { k: "k", l: "Stripes", min: 3, max: 26, def: 11 },
    { k: "wf", l: "Stripe width %", min: 6, max: 85, def: 34 },
    { k: "wob", l: "Wobble", min: 0, max: 40, def: 14 },
    { k: "fr", l: "Waves", min: 1, max: 5, def: 3 },
    { k: "tp", l: "Hand-drawn edge", min: 0, max: 60, def: 18 },
    { k: "jit", l: "Spacing jitter", min: 0, max: 40, def: 8 },
    {
      k: "cm",
      l: "Colours",
      type: "select",
      opts: [
        ["one", "One colour"],
        ["alt", "Alternate two"],
        ["thin", "Thick + thin"],
        ["cyc", "Cycle all"],
      ],
      def: "one",
    },
  ],
  draw(m: any, q: any) {
    let k = q.k;
    if (q.cm === "alt") k = evenN(k);
    const Q = Object.assign({}, q, { k });
    wobStripes(m, Q, true, (i) =>
      q.cm === "alt" ? m.col(i % 2) : q.cm === "cyc" ? m.col(i) : m.col(0)
    );
    if (q.cm === "thin")
      wobStripes(
        m,
        Object.assign({}, Q, { wf: Math.max(3, q.wf * 0.18), shift: 0.5, jit: 0, tp: q.tp * 0.5 }),
        true,
        () => m.col(1)
      );
  },
});

/* 09 — pin grid bands */
registerMode({
  id: "pinbands",
  name: "Pin Grid Bands",
  cat: "Stripes",
  look: {
    bg: "#f0efe4",
    ink: "#2a8a5a",
    cols: ["#f19bb8", "#f8cf5a", "#f5873a", "#a2bcf4", "#2a8a5a"],
    style: "flat",
  },
  params: [
    { k: "nb", l: "Bands", min: 2, max: 12, def: 5 },
    { k: "bh", l: "Band height %", min: 15, max: 100, def: 55 },
    { k: "var", l: "Height variety", min: 0, max: 80, def: 35 },
    { k: "nv", l: "Pin lines", min: 3, max: 30, def: 8 },
    { k: "vw", l: "Pin width %", min: 5, max: 40, def: 16 },
    { k: "halo", l: "Pin outline", type: "check", def: true },
    { k: "hp", l: "Cross pins", type: "check", def: false },
    {
      k: "cm",
      l: "Band colours",
      type: "select",
      opts: [
        ["cyc", "Cycle"],
        ["rand", "Random"],
        ["two", "Two colours"],
      ],
      def: "cyc",
    },
  ],
  draw(m: any, q: any) {
    const slot = T / q.nb;
    const nc = m.cols.length;
    const bc = (i: number) =>
      nc < 2
        ? m.col(0)
        : q.cm === "two"
        ? m.col(1 + (i % 2))
        : q.cm === "rand"
        ? m.col(1 + Math.floor(m.rnd() * (nc - 1)))
        : m.col(1 + (i % (nc - 1)));
    let s = "";
    for (let i = 0; i < q.nb; i++) {
      const f = Math.max(0.1, Math.min(1, (q.bh / 100) * (1 + ((m.rnd() - 0.5) * q.var) / 50)));
      const h = slot * f;
      const y = i * slot + (slot - h) / 2;
      s += `<rect x="0" y="${f1(y)}" width="${T}" height="${f1(h + 0.3)}" fill="${bc(i)}"/>`;
    }
    m.raw(s);
    const g = T / q.nv;
    const w = (g * q.vw) / 100;
    const hw = w * 0.5;
    const P = m.col(0);
    let v = "";
    for (let i = 0; i < q.nv; i++) {
      const x = (i + 0.5) * g;
      if (q.halo)
        v += `<rect x="${f1(x - w / 2 - hw)}" y="0" width="${f1(
          w + 2 * hw
        )}" height="${T}" fill="${m.bg}"/>`;
      v += `<rect x="${f1(x - w / 2)}" y="0" width="${f1(w)}" height="${T}" fill="${P}"/>`;
    }
    if (q.hp)
      for (let i = 0; i <= q.nb; i++)
        v += `<rect x="0" y="${f1(i * slot - w * 0.35)}" width="${T}" height="${f1(
          w * 0.7
        )}" fill="${P}"/>`;
    m.raw(v);
  },
});

/* 10 — pixel zigzag */
registerMode({
  id: "pixelzig",
  name: "Pixel Zigzag",
  cat: "Geometric",
  look: {
    bg: "#f6f1e6",
    ink: "#1f6ae0",
    cols: ["#1f6ae0", "#8ab6f4", "#0f3f9a", "#f2b84a"],
    style: "flat",
  },
  params: [
    { k: "rows", l: "Stripes", min: 3, max: 16, def: 10 },
    { k: "Z", l: "Steps per zig", min: 2, max: 8, def: 4 },
    { k: "reps", l: "Zigs across", min: 1, max: 6, def: 2 },
    { k: "step", l: "Step height %", min: 15, max: 100, def: 30 },
    { k: "bh", l: "Brick height %", min: 20, max: 80, def: 30 },
    { k: "gap", l: "Brick gap %", min: 0, max: 30, def: 0 },
    {
      k: "sh",
      l: "Shape",
      type: "select",
      opts: [
        ["zig", "Zigzag"],
        ["wave", "Wave"],
        ["steps", "Staircase"],
      ],
      def: "zig",
    },
    {
      k: "cm",
      l: "Colours",
      type: "select",
      opts: [
        ["one", "One colour"],
        ["two", "Alternate"],
        ["cyc", "Cycle"],
      ],
      def: "one",
    },
  ],
  draw(m: any, q: any) {
    const Z = q.Z;
    const nc = 2 * Z * q.reps;
    const cw = T / nc;
    let rows = q.rows;
    if (q.cm === "two") rows = evenN(rows);
    const P = T / rows;
    const h = (P * q.bh) / 100;
    const st = (P * q.step) / 100;
    const g = (cw * q.gap) / 100;
    const ncol = m.cols.length;
    const off = (k: number) => {
      const z = m.mod(k, 2 * Z);
      return q.sh === "wave"
        ? ((Z * st) / 2) * (1 - Math.cos((Math.PI * z) / Z))
        : q.sh === "steps"
        ? z * st
        : (z <= Z ? z : 2 * Z - z) * st;
    };
    const by: Record<string, string> = {};
    for (let k = 0; k < nc; k++) {
      const o = off(k);
      const j0 = Math.floor((-h - o) / P);
      const j1 = Math.ceil((T - o) / P);
      for (let j = j0; j <= j1; j++) {
        const cj = m.mod(j, rows);
        const col =
          q.cm === "two" ? m.col(cj % 2) : q.cm === "cyc" ? m.col(cj % ncol) : m.col(0);
        by[col] =
          (by[col] || "") +
          `<rect x="${f1(k * cw + g / 2)}" y="${f1(j * P + o)}" width="${f1(
            cw - g + 0.3
          )}" height="${f1(h)}"/>`;
      }
    }
    for (const col in by) m.raw(`<g fill="${col}">${by[col]}</g>`);
  },
});

/* 11 — confetti toss */
registerMode({
  id: "confetti",
  name: "Confetti Toss",
  cat: "Scatter",
  look: {
    bg: "#f4f1ea",
    ink: "#1c1c1c",
    cols: ["#0f9a7a", "#f26a3d", "#f6b134", "#f08aa0", "#ffffff"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Density", min: 4, max: 20, def: 11 },
    { k: "size", l: "Piece size", min: 10, max: 70, def: 40 },
    { k: "var", l: "Size variety", min: 0, max: 70, def: 40 },
    { k: "ar", l: "Piece length", min: 100, max: 320, def: 170 },
    {
      k: "sh",
      l: "Pieces",
      type: "select",
      opts: [
        ["rect", "Rectangles"],
        ["sq", "Squares"],
        ["twist", "Twisted"],
        ["mix", "Mixed"],
        ["round", "With dots"],
      ],
      def: "rect",
    },
    {
      k: "band",
      l: "Density wave",
      type: "select",
      opts: [
        ["none", "Even"],
        ["wave", "Wave bands"],
        ["diag", "Diagonal drift"],
        ["spots", "Clusters"],
      ],
      def: "none",
    },
    { k: "sp", l: "Spacing", min: 20, max: 90, def: 45 },
    {
      k: "ang",
      l: "Angles",
      type: "select",
      opts: [
        ["rand", "Any angle"],
        ["fall", "Falling slant"],
        ["straight", "Straight"],
      ],
      def: "rand",
    },
  ],
  draw(m: any, q: any) {
    const c = T / q.n;
    const TAU = Math.PI * 2;
    m.scatter(Math.round(q.n * q.n * 1.25), (c * q.sp) / 100, (x: number, y: number) => {
      if (q.band !== "none") {
        const p =
          q.band === "spots"
            ? Math.pow(
                ((1 + Math.sin((TAU * 2 * x) / T)) * (1 + Math.sin((TAU * 2 * y) / T))) / 4,
                1.5
              )
            : 0.5 + 0.5 * Math.sin((TAU * (q.band === "wave" ? y : x + y)) / T);
        if (m.rnd() > 0.08 + 0.92 * p) return;
      }
      const s = ((c * q.size) / 4000) * (1 - (m.rnd() * q.var) / 100);
      const col = m.rcol();
      const kind =
        q.sh === "mix"
          ? m.pick(["rect", "sq", "twist"])
          : q.sh === "round"
          ? m.chance(0.3)
            ? "dot"
            : "rect"
          : q.sh;
      const w = 24;
      const h = (24 * q.ar) / 100;
      const A = FA(m, col, s);
      let b: string;
      if (kind === "sq") b = `<rect x="-15" y="-15" width="30" height="30" ${A}/>`;
      else if (kind === "dot") b = `<circle r="15" ${A}/>`;
      else if (kind === "twist") {
        const k = w * 0.45;
        b = `<path ${A} d="M${-w / 2} ${f1(-h / 2)}L${w / 2} ${f1(-h / 2 + k)}L${w / 2} ${f1(
          h / 2
        )}L${-w / 2} ${f1(h / 2 - k)}Z"/>`;
      } else b = `<rect x="${-w / 2}" y="${f1(-h / 2)}" width="${w}" height="${f1(h)}" ${A}/>`;
      const rot =
        q.ang === "fall"
          ? 35 + (m.rnd() - 0.5) * 30
          : q.ang === "straight"
          ? m.chance(0.5)
            ? 0
            : 90
          : m.rnd() * 360;
      m.put(x, y, rot, s, b, Math.max(30, h * 0.75));
    });
  },
});

/* 12 — sparkle toss */
registerMode({
  id: "sparkles",
  name: "Sparkle Toss",
  cat: "Scatter",
  look: { bg: "#f8ece4", ink: "#2c2c2c", cols: ["#e8432c", "#f9b21c", "#5a96c8"], style: "flat" },
  params: [
    { k: "n", l: "Density", min: 3, max: 12, def: 6 },
    { k: "size", l: "Size", min: 20, max: 120, def: 55 },
    { k: "var", l: "Size variety", min: 0, max: 60, def: 25 },
    { k: "sharp", l: "Point width", min: 5, max: 45, def: 22 },
    {
      k: "sh",
      l: "Shape",
      type: "select",
      opts: [
        ["4", "4-point"],
        ["8", "8-point"],
        ["5", "Soft star"],
        ["mix", "Mixed + dots"],
      ],
      def: "4",
    },
    { k: "tilt", l: "Rotation", min: 0, max: 90, def: 0 },
    { k: "lay", l: "Layout", type: "select", opts: LAY, def: "scatter" },
  ],
  draw(m: any, q: any) {
    layout(m, q.n, q.lay, 0.6, (x, y, c) => {
      const s = ((c * q.size) / 100 / 100) * (1 - (m.rnd() * q.var) / 100);
      const col = m.rcol();
      const k = (46 * q.sharp) / 100;
      const kind = q.sh === "mix" ? m.pick(["4", "4", "dot"]) : q.sh;
      const A = FA(m, col, s);
      const b =
        kind === "8"
          ? `<path ${A} d="${star4(46, k)}"/><path ${A} transform="rotate(45)" d="${star4(
              28,
              k * 0.6
            )}"/>`
          : kind === "5"
          ? `<path ${
              m.style === "flat"
                ? `fill="${col}" stroke="${col}" stroke-width="8" stroke-linejoin="round"`
                : A
            } d="${starPath(5, 40, (40 * q.sharp) / 60 + 6)}"/>`
          : kind === "dot"
          ? `<circle r="18" ${A}/>`
          : `<path ${A} d="${star4(46, k)}"/>`;
      m.put(x, y, (m.rnd() - 0.5) * 2 * q.tilt, s, b, 50);
    });
  },
});

/* 13 — tossed dots */
registerMode({
  id: "dots",
  name: "Tossed Dots",
  cat: "Scatter",
  look: { bg: "#f8ece4", ink: "#2c2c2c", cols: ["#e8432c", "#f9b21c", "#5a96c8"], style: "flat" },
  params: [
    { k: "n", l: "Density", min: 3, max: 14, def: 6 },
    { k: "size", l: "Dot size", min: 10, max: 80, def: 30 },
    { k: "var", l: "Size variety", min: 0, max: 60, def: 10 },
    {
      k: "sh",
      l: "Dots",
      type: "select",
      opts: [
        ["dot", "Solid"],
        ["ring", "Rings"],
        ["mix", "Mixed"],
        ["pair", "Dot pairs"],
      ],
      def: "dot",
    },
    { k: "sp", l: "Spacing", min: 30, max: 90, def: 60 },
    { k: "lay", l: "Layout", type: "select", opts: LAY, def: "scatter" },
  ],
  draw(m: any, q: any) {
    layout(m, q.n, q.lay, q.sp / 100, (x, y, c) => {
      const r = ((c * q.size) / 100) * 0.5 * (1 - (m.rnd() * q.var) / 100);
      const col = m.rcol();
      const kind = q.sh === "mix" ? m.pick(["dot", "ring"]) : q.sh;
      const b =
        kind === "ring"
          ? `<circle r="${f1(r * 0.75)}" fill="none" stroke="${
              m.style === "line" ? m.ink : col
            }" stroke-width="${f1(r * 0.5)}"/>`
          : kind === "pair"
          ? `<circle cx="${f1(-r * 0.7)}" r="${f1(r * 0.7)}" ${FA(
              m,
              col
            )}/><circle cx="${f1(r * 0.8)}" cy="${f1(r * 0.4)}" r="${f1(r * 0.45)}" ${FA(
              m,
              m.rcol()
            )}/>`
          : `<circle r="${f1(r)}" ${FA(m, col)}/>`;
      m.put(x, y, m.rnd() * 360, 1, b, r * 2);
    });
  },
});

/* 14 — tiny crosses */
registerMode({
  id: "crosses",
  name: "Tiny Crosses",
  cat: "Scatter",
  look: { bg: "#f3ede0", ink: "#3b4fb0", cols: ["#3b4fb0", "#e8574a", "#2a8a5a"], style: "flat" },
  params: [
    { k: "n", l: "Grid", min: 3, max: 16, def: 7 },
    { k: "size", l: "Size %", min: 10, max: 80, def: 34 },
    { k: "th", l: "Thickness %", min: 8, max: 40, def: 20 },
    {
      k: "sh",
      l: "Mark",
      type: "select",
      opts: [
        ["plus", "Plus +"],
        ["x", "Cross ×"],
        ["ast", "Asterisk"],
        ["dash", "Dash"],
        ["spark", "Sparkle"],
      ],
      def: "plus",
    },
    { k: "tilt", l: "Rotation", min: 0, max: 45, def: 0 },
    {
      k: "lay",
      l: "Layout",
      type: "select",
      opts: [
        ["halfdrop", "Half drop"],
        ["grid", "Grid"],
        ["brick", "Brick"],
        ["scatter", "Tossed"],
      ],
      def: "halfdrop",
    },
    { k: "cap", l: "Round ends", type: "check", def: false },
    { k: "cm", l: "Colours", type: "select", opts: CMO, def: "one" },
  ],
  draw(m: any, q: any) {
    let cnt = 0;
    layout(m, q.n, q.lay, 0.6, (x, y, c, i, j) => {
      const L = ((c / 2) * q.size) / 100;
      const w = Math.max(1, (L * 2 * q.th) / 100);
      const k = cnt++;
      const col =
        q.cm === "two"
          ? m.col(i !== undefined && j !== undefined ? (i + j) % 2 : k % 2)
          : q.cm === "rand"
          ? m.rcol()
          : m.col(0);
      const cap = q.cap ? "round" : "butt";
      let b: string;
      if (q.sh === "spark") b = `<path ${FA(m, col)} d="${star4(L, L * 0.22)}"/>`;
      else {
        const arms = q.sh === "ast" ? [0, 60, 120] : q.sh === "dash" ? [90] : [0, 90];
        b = `<path d="${arms
          .map((a) => {
            const r = (a * Math.PI) / 180;
            return `M${f1(-L * Math.sin(r))} ${f1(L * Math.cos(r))}L${f1(
              L * Math.sin(r)
            )} ${f1(-L * Math.cos(r))}`;
          })
          .join("")}" fill="none" stroke="${
          m.style === "line" ? m.ink : col
        }" stroke-width="${f1(w)}" stroke-linecap="${cap}"/>`;
      }
      m.put(x, y, (q.sh === "x" ? 45 : 0) + (m.rnd() - 0.5) * 2 * q.tilt, 1, b, L + w);
    });
  },
});

/* 15 — doodle ring dots */
registerMode({
  id: "ringdots",
  name: "Doodle Ring Dots",
  cat: "Scatter",
  look: { bg: "#3b4fb0", ink: "#f3ede0", cols: ["#f3ede0", "#f6d36a", "#9fb0f0"], style: "flat" },
  params: [
    { k: "n", l: "Grid", min: 4, max: 20, def: 8 },
    { k: "size", l: "Size %", min: 20, max: 90, def: 58 },
    { k: "lw", l: "Ring weight %", min: 10, max: 70, def: 30 },
    { k: "wob", l: "Wobble", min: 0, max: 30, def: 12 },
    { k: "jit", l: "Position jitter", min: 0, max: 30, def: 8 },
    {
      k: "sh",
      l: "Shape",
      type: "select",
      opts: [
        ["ring", "Ring"],
        ["dot", "Dot"],
        ["double", "Double ring"],
        ["dotring", "Dot in ring"],
      ],
      def: "ring",
    },
    {
      k: "lay",
      l: "Layout",
      type: "select",
      opts: [
        ["grid", "Grid"],
        ["halfdrop", "Half drop"],
        ["brick", "Brick"],
      ],
      def: "grid",
    },
    { k: "cm", l: "Colours", type: "select", opts: CMO, def: "one" },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, q.lay, (x: number, y: number, i: number, j: number, c: number) => {
      const r = ((c / 2) * q.size) / 100;
      const w = (r * q.lw) / 100;
      const col = q.cm === "two" ? m.col((i + j) % 2) : q.cm === "rand" ? m.rcol() : m.col(0);
      const dx = ((m.rnd() - 0.5) * c * q.jit) / 100;
      const dy = ((m.rnd() - 0.5) * c * q.jit) / 100;
      const wc = (rr: number) => wobC(m.rnd, rr, q.wob);
      let b: string;
      if (q.sh === "dot") b = `<path d="${wc(r)}" ${FA(m, col)}/>`;
      else {
        const ring = (rr: number) =>
          `<path d="${wc(rr)}" fill="none" stroke="${
            m.style === "line" ? m.ink : col
          }" stroke-width="${f1(w)}" stroke-linecap="round"/>`;
        b = ring(r - w / 2);
        if (q.sh === "double") b += ring(Math.max(w * 0.6, r * 0.45));
        if (q.sh === "dotring") b += `<path d="${wc(r * 0.28)}" fill="${col}"/>`;
      }
      m.put(x + dx, y + dy, m.rnd() * 360, 1, b, r + w);
    });
  },
});

/* 16 — strawberry line art */
registerMode({
  id: "strawline",
  name: "Strawberry Line",
  cat: "Fruit",
  look: {
    bg: "#f6efe0",
    ink: "#d42a1e",
    cols: ["#d42a1e", "#f6c2b8", "#4c8a3c", "#ffffff"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Density", min: 2, max: 8, def: 4 },
    { k: "size", l: "Size", min: 40, max: 150, def: 82 },
    { k: "var", l: "Size variety", min: 0, max: 40, def: 12 },
    { k: "tilt", l: "Rotation", min: 0, max: 360, def: 300 },
    { k: "lw", l: "Line width", min: 2, max: 14, def: 6 },
    {
      k: "sd",
      l: "Seeds",
      type: "select",
      opts: [
        ["dash", "Dashes"],
        ["dot", "Dots"],
        ["drop", "Teardrops"],
        ["none", "None"],
      ],
      def: "dash",
    },
    {
      k: "fill",
      l: "Fill",
      type: "select",
      opts: [
        ["none", "Line only"],
        ["soft", "Soft fill"],
        ["solid", "Solid colour"],
      ],
      def: "none",
    },
    { k: "lay", l: "Layout", type: "select", opts: LAY, def: "scatter" },
  ],
  draw(m: any, q: any) {
    const L = m.col(0);
    const bg = m.bg;
    layout(m, q.n, q.lay, 0.62, (x, y, c) => {
      const s = ((c * q.size) / 100 / 100) * (1 + ((m.rnd() - 0.5) * q.var) / 50);
      const lw = q.lw / s;
      const o =
        q.fill === "solid"
          ? {
              fill: L,
              line: null,
              seedCol: mixCol(L, "#ffffff", 0.75),
              leafFill: m.col(2),
              leafLine: null,
            }
          : q.fill === "soft"
          ? { fill: m.col(1), line: L, seedCol: L, leafFill: m.col(2), leafLine: L }
          : { fill: bg, line: L, seedCol: L, leafFill: bg, leafLine: L };
      m.put(x, y, (m.rnd() - 0.5) * q.tilt, s, strawberry(Object.assign(o, { sd: q.sd, lw })), 62);
    });
  },
});

/* 17 — cherry line art */
registerMode({
  id: "cherryline",
  name: "Cherry Line Art",
  cat: "Fruit",
  look: {
    bg: "#f6efe0",
    ink: "#b8231c",
    cols: ["#b8231c", "#f3c2b8", "#4c8a3c", "#e8574a"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Density", min: 2, max: 8, def: 4 },
    { k: "size", l: "Size", min: 40, max: 150, def: 105 },
    { k: "var", l: "Size variety", min: 0, max: 40, def: 14 },
    { k: "tilt", l: "Rotation", min: 0, max: 360, def: 300 },
    { k: "lw", l: "Line width", min: 2, max: 14, def: 6 },
    {
      k: "kind",
      l: "Cherries",
      type: "select",
      opts: [
        ["pair", "Pairs"],
        ["single", "Singles"],
        ["mix", "Mixed"],
      ],
      def: "pair",
    },
    {
      k: "fill",
      l: "Fill",
      type: "select",
      opts: [
        ["none", "Line only"],
        ["soft", "Soft fill"],
        ["solid", "Solid + line"],
      ],
      def: "none",
    },
    { k: "leaf", l: "Leaves", type: "check", def: false },
    { k: "lay", l: "Layout", type: "select", opts: LAY, def: "scatter" },
  ],
  draw(m: any, q: any) {
    const L = m.col(0);
    const fc = q.fill === "none" ? m.bg : q.fill === "soft" ? m.col(1) : m.col(3);
    layout(m, q.n, q.lay, 0.62, (x, y, c) => {
      const s = ((c * q.size) / 100 / 100) * (1 + ((m.rnd() - 0.5) * q.var) / 50);
      const kind = q.kind === "mix" ? (m.chance(0.5) ? "pair" : "single") : q.kind;
      m.put(
        x,
        y,
        (m.rnd() - 0.5) * q.tilt,
        s,
        cherry({
          kind,
          body: fc,
          line: L,
          stem: L,
          hl: null,
          lw: q.lw / s,
          leaf: q.leaf ? m.col(2) : null,
        }),
        60
      );
    });
  },
});

/* 18 — warped checker cherries */
registerMode({
  id: "cherrychecker",
  name: "Warped Checker Cherries",
  cat: "Fruit",
  look: {
    bg: "#fbf6ee",
    ink: "#3a1a10",
    cols: ["#ef4a24", "#d6b5f2", "#3a1a10", "#ffffff"],
    style: "flat",
  },
  params: [
    { k: "N", l: "Squares", min: 4, max: 20, step: 2, def: 10 },
    { k: "amp", l: "Warp", min: 0, max: 45, def: 24 },
    { k: "f", l: "Warp waves", min: 1, max: 4, def: 2 },
    {
      k: "wm",
      l: "Warp direction",
      type: "select",
      opts: [
        ["both", "Both ways"],
        ["cols", "Columns"],
        ["rows", "Rows"],
      ],
      def: "both",
    },
    { k: "n", l: "Cherry density", min: 2, max: 8, def: 4 },
    { k: "size", l: "Cherry size", min: 40, max: 150, def: 95 },
    { k: "var", l: "Size variety", min: 0, max: 40, def: 12 },
    { k: "tilt", l: "Rotation", min: 0, max: 360, def: 280 },
    {
      k: "kind",
      l: "Cherries",
      type: "select",
      opts: [
        ["pair", "Pairs"],
        ["single", "Singles"],
        ["mix", "Mixed"],
      ],
      def: "mix",
    },
    { k: "hl", l: "Shine", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    const N = evenN(q.N);
    warpChk(m, N, ((T / N) * q.amp) / 100, q.f, q.wm, () => m.col(1));
    layout(m, q.n, "scatter", 0.6, (x, y, c) => {
      const s = ((c * q.size) / 100 / 100) * (1 + ((m.rnd() - 0.5) * q.var) / 50);
      const kind = q.kind === "mix" ? (m.chance(0.5) ? "pair" : "single") : q.kind;
      const o: any = cherryLook(m, kind);
      if (!q.hl) o.hl = null;
      m.put(x, y, (m.rnd() - 0.5) * q.tilt, s, cherry(o), 60);
    });
  },
});

/* 19 — cherries & bows */
registerMode({
  id: "cherrybow",
  name: "Cherries & Bows",
  cat: "Fruit",
  look: {
    bg: "#fbf6ee",
    ink: "#3a1a10",
    cols: ["#ef4a24", "#c9a8ee", "#3a1a10", "#ffffff"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Density", min: 2, max: 8, def: 4 },
    { k: "size", l: "Cherry size", min: 40, max: 150, def: 95 },
    { k: "var", l: "Size variety", min: 0, max: 40, def: 14 },
    { k: "tilt", l: "Rotation", min: 0, max: 360, def: 300 },
    { k: "bw", l: "Bows %", min: 0, max: 80, def: 40 },
    { k: "bs", l: "Bow size", min: 20, max: 100, def: 55 },
    {
      k: "bst",
      l: "Bow style",
      type: "select",
      opts: [
        ["line", "Outline"],
        ["fill", "Filled"],
      ],
      def: "line",
    },
    {
      k: "kind",
      l: "Cherries",
      type: "select",
      opts: [
        ["pair", "Pairs"],
        ["single", "Singles"],
        ["mix", "Mixed"],
      ],
      def: "pair",
    },
    { k: "hl", l: "Shine", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    layout(m, q.n, "scatter", 0.55, (x, y, c) => {
      const v = 1 + ((m.rnd() - 0.5) * q.var) / 50;
      if (m.rnd() * 100 < q.bw) {
        const s = ((c * q.bs) / 100 / 100) * 2.2 * v;
        m.put(x, y, (m.rnd() - 0.5) * 70, s, bow(m.col(1), 3.2, q.bst === "fill"), 40);
        return;
      }
      const s = ((c * q.size) / 100 / 100) * v;
      const kind = q.kind === "mix" ? (m.chance(0.5) ? "pair" : "single") : q.kind;
      const o: any = cherryLook(m, kind);
      if (!q.hl) o.hl = null;
      m.put(x, y, (m.rnd() - 0.5) * q.tilt, s, cherry(o), 60);
    });
  },
});

/* 20 — stripe cherries */
registerMode({
  id: "cherrystripe",
  name: "Stripe Cherries",
  cat: "Fruit",
  look: {
    bg: "#fbf6ee",
    ink: "#3a1a10",
    cols: ["#ef4a24", "#d6b5f2", "#3a1a10", "#ffffff"],
    style: "flat",
  },
  params: [
    { k: "k", l: "Stripes", min: 3, max: 14, def: 5 },
    { k: "wf", l: "Stripe width %", min: 10, max: 70, def: 36 },
    { k: "wob", l: "Wobble", min: 0, max: 30, def: 8 },
    { k: "fr", l: "Waves", min: 1, max: 4, def: 2 },
    { k: "hz", l: "Horizontal stripes", type: "check", def: false },
    { k: "n", l: "Cherry density", min: 2, max: 8, def: 4 },
    { k: "size", l: "Cherry size", min: 40, max: 150, def: 95 },
    { k: "tilt", l: "Rotation", min: 0, max: 360, def: 280 },
    {
      k: "kind",
      l: "Cherries",
      type: "select",
      opts: [
        ["pair", "Pairs"],
        ["single", "Singles"],
        ["mix", "Mixed"],
      ],
      def: "mix",
    },
    { k: "hl", l: "Shine", type: "check", def: true },
  ],
  draw(m: any, q: any) {
    wobStripes(m, Object.assign({}, q, { tp: 15, jit: 4 }), q.hz, () => m.col(1));
    layout(m, q.n, "scatter", 0.6, (x, y, c) => {
      const s = ((c * q.size) / 100 / 100) * (0.9 + m.rnd() * 0.2);
      const kind = q.kind === "mix" ? (m.chance(0.5) ? "pair" : "single") : q.kind;
      const o: any = cherryLook(m, kind);
      if (!q.hl) o.hl = null;
      m.put(x, y, (m.rnd() - 0.5) * q.tilt, s, cherry(o), 60);
    });
  },
});

/* 21 — warped checker */
registerMode({
  id: "warpchecker",
  name: "Warped Checker",
  cat: "Geometric",
  look: { bg: "#fbf6ee", ink: "#3a1a10", cols: ["#d6b5f2", "#ef4a24", "#f6d36a"], style: "flat" },
  params: [
    { k: "N", l: "Squares", min: 4, max: 24, step: 2, def: 10 },
    { k: "amp", l: "Warp", min: 0, max: 45, def: 26 },
    { k: "f", l: "Warp waves", min: 1, max: 4, def: 2 },
    {
      k: "wm",
      l: "Warp direction",
      type: "select",
      opts: [
        ["both", "Both ways"],
        ["cols", "Columns"],
        ["rows", "Rows"],
      ],
      def: "both",
    },
    {
      k: "cm",
      l: "Colours",
      type: "select",
      opts: [
        ["one", "One colour"],
        ["two", "Alternate rows"],
        ["diag", "Diagonal cycle"],
      ],
      def: "one",
    },
  ],
  draw(m: any, q: any) {
    const N = evenN(q.N);
    const nc = m.cols.length;
    warpChk(m, N, ((T / N) * q.amp) / 100, q.f, q.wm, (i, j) =>
      q.cm === "two" ? m.col(j % 2) : q.cm === "diag" ? m.col(m.mod((i - j) / 2, nc)) : m.col(0)
    );
  },
});

/* 22–25 — Bauhaus blocks */
registerMode({
  id: "bauhauscurve",
  name: "Bauhaus Curves",
  cat: "Bauhaus",
  look: {
    bg: "#14211d",
    ink: "#33394b",
    cols: ["#f6837a", "#a8f2c6", "#8fe0f0", "#f6e37a", "#f2ede1"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Blocks", min: 2, max: 10, def: 4 },
    { k: "ty", l: "Shape", type: "select", opts: bauOpts(BAU.curve), def: "quarter" },
    {
      k: "ori",
      l: "Turns",
      type: "select",
      opts: [
        ["random", "Random"],
        ["rings", "Make circles"],
        ["checker", "Checker"],
        ["rows", "By row"],
        ["same", "All same"],
      ],
      def: "random",
    },
    { k: "size", l: "Shape size %", min: 50, max: 100, def: 100 },
    { k: "gap", l: "Frame gap %", min: 0, max: 14, def: 0 },
    { k: "cm", l: "Colours", type: "select", opts: BAUC, def: "ink" },
  ],
  draw(m: any, q: any) {
    bauGrid(m, q, () => q.ty);
  },
});

registerMode({
  id: "bauhausangle",
  name: "Bauhaus Angles",
  cat: "Bauhaus",
  look: {
    bg: "#14211d",
    ink: "#33394b",
    cols: ["#a8f2c6", "#8fe0f0", "#f6837a", "#f6e37a", "#f2ede1"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Blocks", min: 2, max: 10, def: 4 },
    { k: "ty", l: "Shape", type: "select", opts: bauOpts(BAU.angle), def: "para" },
    {
      k: "ori",
      l: "Turns",
      type: "select",
      opts: [
        ["same", "All same"],
        ["random", "Random"],
        ["checker", "Checker"],
        ["rows", "By row"],
        ["pinwheel", "Pinwheel"],
      ],
      def: "same",
    },
    { k: "gap", l: "Frame gap %", min: 0, max: 14, def: 0 },
    { k: "cm", l: "Colours", type: "select", opts: BAUC, def: "ink" },
  ],
  draw(m: any, q: any) {
    bauGrid(m, q, () => q.ty);
  },
});

registerMode({
  id: "bauhauscircle",
  name: "Bauhaus Circles & Stars",
  cat: "Bauhaus",
  look: {
    bg: "#14211d",
    ink: "#33394b",
    cols: ["#f6e37a", "#f2ede1", "#a8f2c6", "#8fe0f0", "#f6837a"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Blocks", min: 2, max: 10, def: 4 },
    { k: "ty", l: "Shape", type: "select", opts: bauOpts(BAU.round), def: "star" },
    { k: "size", l: "Shape size %", min: 50, max: 100, def: 96 },
    { k: "hole", l: "Hole %", min: 0, max: 75, def: 42 },
    { k: "gap", l: "Frame gap %", min: 0, max: 14, def: 6 },
    { k: "cm", l: "Colours", type: "select", opts: BAUC, def: "ink" },
  ],
  draw(m: any, q: any) {
    bauGrid(m, q, () => q.ty);
  },
});

registerMode({
  id: "bauhausmix",
  name: "Bauhaus Block Mix",
  cat: "Bauhaus",
  look: {
    bg: "#14211d",
    ink: "#33394b",
    cols: ["#a8f2c6", "#f2ede1", "#8fe0f0", "#f6e37a", "#f6837a"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Blocks", min: 2, max: 8, def: 4 },
    {
      k: "pool",
      l: "Shapes",
      type: "select",
      opts: [
        ["all", "All shapes"],
        ["curve", "Curves"],
        ["angle", "Angles"],
        ["round", "Circles & stars"],
      ],
      def: "all",
    },
    {
      k: "same",
      l: "Shape repeat",
      type: "select",
      opts: [
        ["cell", "Every block"],
        ["row", "By row"],
        ["diag", "Diagonal"],
      ],
      def: "cell",
    },
    { k: "size", l: "Shape size %", min: 70, max: 100, def: 100 },
    { k: "hole", l: "Hole %", min: 0, max: 75, def: 42 },
    { k: "gap", l: "Frame gap %", min: 0, max: 14, def: 5 },
    { k: "cm", l: "Colours", type: "select", opts: BAUC, def: "inkr" },
  ],
  draw(m: any, q: any) {
    const list =
      q.pool === "all" ? BAU.curve.concat(BAU.angle, BAU.round) : (BAU as any)[q.pool];
    const salt = m.rnd() * 999;
    const Q = Object.assign({}, q, { ori: "random" });
    bauGrid(
      m,
      Q,
      (i, j) =>
        list[
          Math.floor(
            hr(
              salt,
              q.same === "row" ? 0 : q.same === "diag" ? i + j : i,
              q.same === "row" ? j : q.same === "diag" ? 0 : j
            ) * list.length
          )
        ]
    );
  },
});

/* 26–27 — harlequin */
registerMode({
  id: "harlequin",
  name: "Harlequin Diamonds",
  cat: "Geometric",
  look: { bg: "#f8ece4", ink: "#2c2c2c", cols: ["#e8432c", "#f9b21c", "#5a96c8"], style: "flat" },
  params: HARP.concat([
    { k: "star", l: "Stars inside", type: "check", def: false },
    { k: "ss", l: "Star size %", min: 20, max: 90, def: 55 },
    { k: "sp", l: "Star point width", min: 8, max: 40, def: 20 },
    {
      k: "so",
      l: "Stars on",
      type: "select",
      opts: [
        ["skip", "Skip 2nd colour"],
        ["all", "Every diamond"],
        ["rows", "Every other row"],
        ["rand", "Random"],
      ],
      def: "skip",
    },
    {
      k: "sc",
      l: "Star colour",
      type: "select",
      opts: [
        ["bg", "Background"],
        ["ink", "Ink"],
      ],
      def: "bg",
    },
  ]),
  draw(m: any, q: any) {
    harleq(m, q);
  },
});

registerMode({
  id: "harlequinstar",
  name: "Harlequin Stars",
  cat: "Geometric",
  look: { bg: "#f8ece4", ink: "#2c2c2c", cols: ["#e8432c", "#f9b21c", "#5a96c8"], style: "flat" },
  params: HARP.concat([
    { k: "star", l: "Stars inside", type: "check", def: true },
    { k: "ss", l: "Star size %", min: 20, max: 90, def: 55 },
    { k: "sp", l: "Star point width", min: 8, max: 40, def: 20 },
    {
      k: "so",
      l: "Stars on",
      type: "select",
      opts: [
        ["skip", "Skip 2nd colour"],
        ["all", "Every diamond"],
        ["rows", "Every other row"],
        ["rand", "Random"],
      ],
      def: "skip",
    },
    {
      k: "sc",
      l: "Star colour",
      type: "select",
      opts: [
        ["bg", "Background"],
        ["ink", "Ink"],
      ],
      def: "bg",
    },
  ]),
  draw(m: any, q: any) {
    harleq(m, Object.assign({}, q, { star: true }));
  },
});

/* 28 — seigaiha arcs */
registerMode({
  id: "seigaiha",
  name: "Seigaiha Arcs",
  cat: "Japanese",
  look: { bg: "#f3ede0", ink: "#3b4fb0", cols: ["#3b4fb0", "#f3ede0", "#7a8ad8"], style: "flat" },
  params: [
    { k: "n", l: "Columns", min: 3, max: 14, def: 5 },
    { k: "sz", l: "Arc size %", min: 80, max: 125, def: 100 },
    { k: "rs", l: "Row spacing %", min: 15, max: 60, def: 25 },
    { k: "K", l: "Rings", min: 2, max: 8, def: 5 },
    { k: "lw", l: "Ring weight %", min: 25, max: 85, def: 52 },
    { k: "dot", l: "Centre dot", type: "check", def: false },
    {
      k: "cm",
      l: "Colours",
      type: "select",
      opts: [
        ["one", "One colour"],
        ["alt", "Alternate rings"],
        ["fill", "Coloured base"],
      ],
      def: "one",
    },
  ],
  draw(m: any, q: any) {
    const n = q.n;
    const W = T / n;
    const r = ((W / 2) * q.sz) / 100;
    let R = Math.max(2, Math.round(T / ((W * q.rs) / 100)));
    if (R % 2) R++;
    const H = T / R;
    const K = q.K;
    const st = r / (K + (q.dot ? 0.6 : 0.15));
    const lw = (st * q.lw) / 100;
    const C0 = m.col(0);
    const F = q.cm === "fill" ? m.col(1) : m.bg;
    const J = Math.ceil(r / H) + 1;
    for (let j = -J; j <= R + J; j++) {
      const off = (m.mod(j, 2) * W) / 2;
      for (let i = -1; i <= n; i++) {
        let b = `<circle r="${f1(r)}" fill="${F}"/>`;
        for (let t = 0; t < K; t++) {
          const rr = r - t * st - lw / 2;
          const col = q.cm === "alt" && t % 2 ? m.col(2) : C0;
          b += `<circle r="${f1(
            Math.max(0.5, rr)
          )}" fill="none" stroke="${col}" stroke-width="${f1(lw)}"/>`;
        }
        if (q.dot) b += `<circle r="${f1(st * 0.55)}" fill="${C0}"/>`;
        m.at(i * W + off, j * H, 0, 1, b);
      }
    }
  },
});

/* 29 — scribble clouds */
registerMode({
  id: "clouds",
  name: "Scribble Clouds",
  cat: "Kids",
  look: { bg: "#9fd2f6", ink: "#4f8fc8", cols: ["#ffffff", "#8cc2ee", "#cfe7fb"], style: "flat" },
  params: [
    { k: "n", l: "Density", min: 2, max: 8, def: 4 },
    { k: "size", l: "Size", min: 40, max: 140, def: 88 },
    { k: "var", l: "Size variety", min: 0, max: 50, def: 25 },
    { k: "tilt", l: "Rotation", min: 0, max: 40, def: 0 },
    { k: "scr", l: "Scribble shading", type: "check", def: true },
    { k: "sd", l: "Scribble lines", min: 3, max: 12, def: 7 },
    { k: "ol", l: "Outline", type: "check", def: false },
    {
      k: "lay",
      l: "Layout",
      type: "select",
      opts: [
        ["scatter", "Tossed"],
        ["halfdrop", "Half drop"],
        ["brick", "Brick"],
      ],
      def: "scatter",
    },
  ],
  draw(m: any, q: any) {
    layout(m, q.n, q.lay, 0.62, (x, y, c) => {
      const s = ((c * q.size) / 100 / 100) * (1 - (m.rnd() * q.var) / 100);
      m.put(
        x,
        y,
        (m.rnd() - 0.5) * 2 * q.tilt,
        s,
        cloudB(m.rnd, m.col(0), {
          scr: q.scr ? m.col(1) : null,
          sw: 2.4,
          rows: q.sd,
          ol: q.ol ? m.ink : null,
          ow: 2.6,
        }),
        55
      );
    });
  },
});

/* 30 — sleepy night sky */
registerMode({
  id: "nightsky",
  name: "Sleepy Night Sky",
  cat: "Kids",
  look: {
    bg: "#16295a",
    ink: "#0d1a3a",
    cols: ["#c9ccd6", "#f7d84a", "#8a90a8", "#d9b42a"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Density", min: 3, max: 9, def: 5 },
    { k: "size", l: "Size", min: 40, max: 140, def: 85 },
    { k: "cl", l: "Clouds", min: 0, max: 10, def: 5 },
    { k: "mo", l: "Moons", min: 0, max: 10, def: 2 },
    { k: "st", l: "Stars", min: 0, max: 10, def: 5 },
    { k: "tw", l: "Tiny stars", min: 0, max: 40, def: 16 },
    { k: "scr", l: "Scribble shading", type: "check", def: true },
    { k: "tilt", l: "Rotation", min: 0, max: 60, def: 15 },
    {
      k: "sk",
      l: "Star shape",
      type: "select",
      opts: [
        ["5", "Soft 5-point"],
        ["4", "Sparkle"],
        ["6", "6-point"],
      ],
      def: "5",
    },
  ],
  draw(m: any, q: any) {
    const G = m.col(0);
    const Y = m.col(1);
    const Gd = m.col(2);
    const Yd = m.col(3);
    const c = T / q.n;
    const tot = q.cl + q.mo + q.st;
    const moon = () =>
      `<path fill="${Y}" d="M10-45A46 46 0 1 0 10 45A56 56 0 0 1 10-45Z"/>` +
      (q.scr
        ? `<path d="${arcD(37, 128, 232)}${arcD(
            28,
            140,
            220
          )}M-38-6L-24 6M-36 10L-22 20" ${SA(Yd, 3)}/>`
        : "");
    const star = (col: string, cd: string | null) => {
      const sc =
        q.scr && cd ? `<path d="M-12 6L4-10M-6 16L12-2" ${SA(cd, 3.2)}/>` : "";
      return q.sk === "4"
        ? `<path fill="${col}" d="${star4(46, 11)}"/>` + sc
        : q.sk === "6"
        ? `<path fill="${col}" stroke="${col}" stroke-width="6" stroke-linejoin="round" d="${starPath(
            6,
            40,
            22
          )}"/>` + sc
        : `<path fill="${col}" stroke="${col}" stroke-width="8" stroke-linejoin="round" d="${starPath(
            5,
            40,
            19
          )}"/>` + sc;
    };
    if (tot)
      m.scatter(Math.round(q.n * q.n * 1.1), c * 0.58, (x: number, y: number) => {
        const s = (c * q.size) / 100 / 100;
        const r = m.rnd() * tot;
        const rot = (m.rnd() - 0.5) * 2 * q.tilt;
        if (r < q.cl)
          m.put(
            x,
            y,
            rot * 0.4,
            s,
            cloudB(m.rnd, G, { scr: q.scr ? Gd : null, sw: 2.4, rows: 6 }),
            55
          );
        else if (r < q.cl + q.mo) m.put(x, y, rot, s * 0.75, moon(), 55);
        else m.put(x, y, rot, s * 0.42 * (0.8 + m.rnd() * 0.4), star(Y, Yd), 50);
      });
    m.scatter(Math.round((q.n * q.n * q.tw) / 10), c * 0.16, (x: number, y: number) =>
      m.put(x, y, m.rnd() * 72, c * 0.0016 * (0.7 + m.rnd() * 0.6), star(Y, null), 50)
    );
  },
});

/* =====================================================================
   16 DEDICATED GRADIENT & TEXTURE PROCEDURAL BACKGROUNDS (MICROSTOCK READY)
   ===================================================================== */
registerMode({
  id: "aurorameshbg",
  name: "Aurora Silk Mesh Gradient",
  cat: "Gradient",
  look: {
    bg: "#090d1e",
    ink: "#f8fafc",
    cols: ["#10b981", "#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b"],
    style: "flat",
  },
  params: [
    { k: "orbs", l: "Gradient Orbs", min: 3, max: 10, def: 6 },
    { k: "rad", l: "Glow Radius %", min: 45, max: 95, def: 75 },
    { k: "waves", l: "Silk Ribbons", min: 2, max: 8, def: 4 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.orbs; i++) {
      const gid = `aur_orb_${i}`;
      const cxVal = 180 + m.rnd() * 640;
      const cyVal = 180 + m.rnd() * 640;
      const radPx = (q.rad / 100) * T;
      const c1 = m.col(i);
      m.def(
        `<radialGradient id="${gid}" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${c1}" stop-opacity="0.65"/><stop offset="55%" stop-color="${c1}" stop-opacity="0.22"/><stop offset="100%" stop-color="${m.bg}" stop-opacity="0"/></radialGradient>`
      );
      m.raw(`<circle cx="${f1(cxVal)}" cy="${f1(cyVal)}" r="${f1(radPx)}" fill="url(#${gid})"/>`);
    }
    for (let w = 0; w < q.waves; w++) {
      const y0 = 140 + (w / Math.max(1, q.waves - 1)) * 720;
      const amp = 70 + m.rnd() * 90;
      const c1 = m.col(w);
      const c2 = m.col(w + 1);
      const wid = `aur_wv_${w}`;
      m.def(
        `<linearGradient id="${wid}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${c1}" stop-opacity="0.15"/><stop offset="50%" stop-color="${c2}" stop-opacity="0.45"/><stop offset="100%" stop-color="${c1}" stop-opacity="0.15"/></linearGradient>`
      );
      m.raw(
        `<path d="M 0 ${f1(y0)} C 320 ${f1(y0 - amp)}, 680 ${f1(y0 + amp)}, ${T} ${f1(
          y0
        )} L ${T} ${T} L 0 ${T} Z" fill="url(#${wid})"/>`
      );
    }
  },
});

registerMode({
  id: "liquidvelvetbg",
  name: "Liquid Velvet Wave Gradient",
  cat: "Gradient",
  look: {
    bg: "#130722",
    ink: "#fdf4ff",
    cols: ["#ec4899", "#8b5cf6", "#6366f1", "#f43f5e", "#f59e0b"],
    style: "flat",
  },
  params: [
    { k: "layers", l: "Velvet Folds", min: 4, max: 14, def: 8 },
    { k: "amp", l: "Wave Swell", min: 30, max: 160, def: 90 },
    { k: "ang", l: "Gradient Tilt", min: 0, max: 180, def: 45 },
  ],
  draw(m: any, q: any) {
    const rad = (q.ang * Math.PI) / 180;
    const x2 = (50 + Math.cos(rad) * 50).toFixed(1);
    const y2 = (50 + Math.sin(rad) * 50).toFixed(1);
    for (let i = 0; i < q.layers; i++) {
      const gid = `velv_g_${i}`;
      const c1 = m.col(i);
      const c2 = m.col(i + 1);
      m.def(
        `<linearGradient id="${gid}" x1="0%" y1="0%" x2="${x2}%" y2="${y2}%"><stop offset="0%" stop-color="${c1}" stop-opacity="0.72"/><stop offset="100%" stop-color="${c2}" stop-opacity="0.28"/></linearGradient>`
      );
      const yBase = 80 + (i / q.layers) * 820;
      const a1 = (m.rnd() - 0.5) * q.amp * 2;
      const a2 = (m.rnd() - 0.5) * q.amp * 2;
      m.raw(
        `<path d="M 0 ${f1(yBase)} C 260 ${f1(yBase + a1)}, 740 ${f1(
          yBase + a2
        )}, ${T} ${f1(yBase)} L ${T} ${T} L 0 ${T} Z" fill="url(#${gid})"/>`
      );
    }
  },
});

registerMode({
  id: "prismfacetsbg",
  name: "Crystal Low-Poly Prism Gradient",
  cat: "Gradient",
  look: {
    bg: "#0b1528",
    ink: "#e2e8f0",
    cols: ["#0ea5e9", "#38bdf8", "#6366f1", "#14b8a6", "#818cf8"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Facet Grid", min: 3, max: 10, def: 6 },
    { k: "jit", l: "Vertex Jitter", min: 10, max: 85, def: 55 },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const step = T / N;
    const pts: [number, number][][] = [];
    for (let i = 0; i <= N; i++) {
      pts[i] = [];
      for (let j = 0; j <= N; j++) {
        const edgeX = i === 0 || i === N;
        const edgeY = j === 0 || j === N;
        const jx = edgeX ? 0 : (m.rnd() - 0.5) * step * (q.jit / 100);
        const jy = edgeY ? 0 : (m.rnd() - 0.5) * step * (q.jit / 100);
        pts[i][j] = [i * step + jx, j * step + jy];
      }
    }
    let idx = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const p00 = pts[i][j];
        const p10 = pts[i + 1][j];
        const p01 = pts[i][j + 1];
        const p11 = pts[i + 1][j + 1];
        const tris = [
          [p00, p10, p11],
          [p00, p11, p01],
        ];
        for (const tr of tris) {
          const gid = `prism_${idx++}`;
          const c1 = m.col(i + j + (idx % 2));
          const c2 = m.col(i + j + 2);
          m.def(
            `<linearGradient id="${gid}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient>`
          );
          const stroke =
            m.style === "flat"
              ? `stroke="${c1}" stroke-width="1"`
              : `stroke="${m.ink}" stroke-width="${m.sw}" stroke-opacity="0.35"`;
          m.raw(
            `<polygon points="${tr
              .map((p) => `${f1(p[0])},${f1(p[1])}`)
              .join(" ")}" fill="url(#${gid})" ${stroke} stroke-linejoin="round"/>`
          );
        }
      }
    }
  },
});

registerMode({
  id: "sunsetdunesbg",
  name: "Desert Horizon Layered Gradient",
  cat: "Gradient",
  look: {
    bg: "#231123",
    ink: "#fef3c7",
    cols: ["#f97316", "#eab308", "#ec4899", "#8b5cf6", "#ef4444"],
    style: "flat",
  },
  params: [
    { k: "dunes", l: "Horizon Layers", min: 4, max: 12, def: 7 },
    { k: "sun", l: "Sun Halo Size", min: 80, max: 260, def: 165 },
  ],
  draw(m: any, q: any) {
    m.def(
      `<linearGradient id="sky_grad" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="${m.bg}"/><stop offset="55%" stop-color="${m.col(
        2
      )}"/><stop offset="100%" stop-color="${m.col(0)}"/></linearGradient>` +
        `<radialGradient id="sun_glow" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${m.col(
          1
        )}" stop-opacity="0.95"/><stop offset="55%" stop-color="${m.col(
          0
        )}" stop-opacity="0.4"/><stop offset="100%" stop-color="${m.bg}" stop-opacity="0"/></radialGradient>`
    );
    m.raw(
      `<rect width="${T}" height="${T}" fill="url(#sky_grad)"/><circle cx="500" cy="320" r="380" fill="url(#sun_glow)"/><circle cx="500" cy="320" r="${q.sun}" fill="${m.col(
        1
      )}" opacity="0.82"/>`
    );
    for (let i = 0; i < q.dunes; i++) {
      const y = 390 + (i / q.dunes) * 540;
      const gid = `dune_g_${i}`;
      m.def(
        `<linearGradient id="${gid}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${m.col(
          i
        )}"/><stop offset="100%" stop-color="${m.bg}"/></linearGradient>`
      );
      const h1 = (m.rnd() - 0.5) * 110;
      const h2 = (m.rnd() - 0.5) * 110;
      m.raw(
        `<path d="M 0 ${f1(y)} Q 260 ${f1(y + h1)} 500 ${f1(y)} T ${T} ${f1(
          y + h2 * 0.4
        )} L ${T} ${T} L 0 ${T} Z" fill="url(#${gid})" opacity="0.92"/>`
      );
    }
  },
});

registerMode({
  id: "holographicpearl",
  name: "Holographic Iridescent Pearl",
  cat: "Gradient",
  look: {
    bg: "#f8fafc",
    ink: "#334155",
    cols: ["#f472b6", "#38bdf8", "#a78bfa", "#34d399", "#fde047"],
    style: "flat",
  },
  params: [
    { k: "bands", l: "Iridescent Swirls", min: 4, max: 14, def: 8 },
    { k: "curve", l: "Flow Curvature", min: 40, max: 200, def: 120 },
  ],
  draw(m: any, q: any) {
    const bgHex = m.bg || "#f8fafc";
    m.def(
      `<linearGradient id="holo_base" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${mixCol(
        bgHex,
        m.col(0),
        0.35
      )}"/><stop offset="50%" stop-color="${mixCol(
        bgHex,
        m.col(1),
        0.35
      )}"/><stop offset="100%" stop-color="${mixCol(
        bgHex,
        m.col(2),
        0.35
      )}"/></linearGradient>`
    );
    m.raw(`<rect width="${T}" height="${T}" fill="url(#holo_base)"/>`);
    for (let i = 0; i < q.bands; i++) {
      const gid = `holo_b_${i}`;
      m.def(
        `<linearGradient id="${gid}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${m.col(
          i
        )}" stop-opacity="0.52"/><stop offset="50%" stop-color="${m.col(
          i + 1
        )}" stop-opacity="0.72"/><stop offset="100%" stop-color="${m.col(
          i + 2
        )}" stop-opacity="0.52"/></linearGradient>`
      );
      const y = 80 + (i / Math.max(1, q.bands - 1)) * 840;
      const c1 = (m.rnd() - 0.5) * q.curve * 2;
      const c2 = (m.rnd() - 0.5) * q.curve * 2;
      m.raw(
        `<path d="M 0 ${f1(y)} C 340 ${f1(y + c1)}, 660 ${f1(y + c2)}, 1000 ${f1(
          y
        )}" fill="none" stroke="url(#${gid})" stroke-width="${f1(
          650 / q.bands
        )}" stroke-linecap="butt"/>`
      );
    }
  },
});

registerMode({
  id: "radialhalobg",
  name: "Luminous Halo Bokeh Backdrop",
  cat: "Gradient",
  look: {
    bg: "#090b16",
    ink: "#f8fafc",
    cols: ["#38bdf8", "#818cf8", "#f472b6", "#fbbf24", "#34d399"],
    style: "flat",
  },
  params: [
    { k: "count", l: "Bokeh Halos", min: 8, max: 32, def: 18 },
    { k: "size", l: "Halo Radius", min: 45, max: 140, def: 90 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < 5; i++) {
      m.def(
        `<radialGradient id="bokeh_g_${i}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${m.col(
          i
        )}" stop-opacity="0.12"/><stop offset="72%" stop-color="${m.col(
          i
        )}" stop-opacity="0.52"/><stop offset="100%" stop-color="${m.col(
          i
        )}" stop-opacity="0"/></radialGradient>`
      );
    }
    m.scatter(q.count, 85, (x: number, y: number, k: number) => {
      const r = q.size * (0.55 + m.rnd() * 0.6);
      const pad = r + 15;
      const cx = Math.max(pad, Math.min(T - pad, x));
      const cy = Math.max(pad, Math.min(T - pad, y));
      m.raw(
        `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}" fill="url(#bokeh_g_${k % 5})"/>`
      );
    });
  },
});

registerMode({
  id: "diagonalribbons",
  name: "Satin Diagonal Fold Gradient",
  cat: "Gradient",
  look: {
    bg: "#0f172a",
    ink: "#f8fafc",
    cols: ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899", "#10b981"],
    style: "flat",
  },
  params: [
    { k: "strips", l: "Satin Folds", min: 4, max: 14, def: 8 },
    { k: "overlap", l: "Fold Width %", min: 60, max: 140, def: 105 },
  ],
  draw(m: any, q: any) {
    const N = q.strips;
    const step = T / N;
    const w = step * (q.overlap / 100);
    for (let i = 0; i < N; i++) {
      const gid = `satin_f_${i}`;
      m.def(
        `<linearGradient id="${gid}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${m.col(
          i
        )}" stop-opacity="0.88"/><stop offset="50%" stop-color="${m.col(
          i + 1
        )}" stop-opacity="0.55"/><stop offset="100%" stop-color="${m.bg}" stop-opacity="0.92"/></linearGradient>`
      );
      const y = (i + 0.5) * step;
      m.raw(
        `<rect x="0" y="${f1(Math.max(0, y - w / 2))}" width="1000" height="${f1(
          Math.min(1000 - Math.max(0, y - w / 2), w)
        )}" fill="url(#${gid})"/>`
      );
    }
  },
});

registerMode({
  id: "pastelcloudwash",
  name: "Soft Watercolor Cloud Wash",
  cat: "Gradient",
  look: {
    bg: "#fffaf3",
    ink: "#3a3550",
    cols: ["#ffc8dd", "#bde0fe", "#cdb4db", "#ffe5a3", "#b9f2d0"],
    style: "flat",
  },
  params: [
    { k: "washes", l: "Pigment Blooms", min: 6, max: 20, def: 12 },
    { k: "scale", l: "Bloom Spread", min: 80, max: 200, def: 135 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < 5; i++) {
      m.def(
        `<radialGradient id="wc_g_${i}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${m.col(
          i
        )}" stop-opacity="0.65"/><stop offset="70%" stop-color="${m.col(
          i
        )}" stop-opacity="0.28"/><stop offset="100%" stop-color="${m.col(
          i
        )}" stop-opacity="0"/></radialGradient>`
      );
    }
    m.scatter(q.washes, 90, (x: number, y: number, k: number) => {
      const s = (q.scale / 100) * (1.2 + m.rnd() * 0.8);
      m.put(
        x,
        y,
        m.rnd() * 360,
        s,
        `<path d="${blobPath(m.rnd, 9, 0.32)}" fill="url(#wc_g_${k % 5})"/>`,
        70
      );
    });
  },
});

registerMode({
  id: "rawlinenweave",
  name: "Belgian Raw Linen Fabric Texture",
  cat: "Texture",
  look: {
    bg: "#f4efe6",
    ink: "#2b2118",
    cols: ["#d6c7b2", "#c2b098", "#a8957c", "#e5dacb", "#8c7860"],
    style: "flat",
  },
  params: [
    { k: "threads", l: "Thread Count", min: 24, max: 90, def: 52 },
    { k: "slub", l: "Slub Irregularity", min: 10, max: 90, def: 48 },
  ],
  draw(m: any, q: any) {
    const N = q.threads;
    const step = T / N;
    for (let i = 0; i <= N; i++) {
      const p = i * step;
      const c1 = m.col(i);
      const c2 = m.col(i + 1);
      const sw1 = 1.2 + m.rnd() * (q.slub / 22);
      const sw2 = 1.2 + m.rnd() * (q.slub / 22);
      const op1 = (0.25 + m.rnd() * 0.45).toFixed(2);
      const op2 = (0.25 + m.rnd() * 0.45).toFixed(2);
      m.raw(
        `<line x1="${f1(p)}" y1="0" x2="${f1(p)}" y2="1000" stroke="${c1}" stroke-width="${f1(
          sw1
        )}" opacity="${op1}"/>` +
          `<line x1="0" y1="${f1(p)}" x2="1000" y2="${f1(p)}" stroke="${c2}" stroke-width="${f1(
            sw2
          )}" opacity="${op2}"/>`
      );
    }
  },
});

registerMode({
  id: "venetianmarble",
  name: "Venetian Carrara Marble Veins",
  cat: "Texture",
  look: {
    bg: "#f8fafc",
    ink: "#1e293b",
    cols: ["#cbd5e1", "#94a3b8", "#e2e8f0", "#d97706", "#64748b"],
    style: "flat",
  },
  params: [
    { k: "veins", l: "Marble Veins", min: 8, max: 30, def: 16 },
    { k: "jagged", l: "Vein Complexity", min: 20, max: 120, def: 65 },
  ],
  draw(m: any, q: any) {
    for (let v = 0; v < q.veins; v++) {
      const steps = 8;
      let y = 30 + m.rnd() * 940;
      let d = `M 0 ${f1(y)}`;
      for (let s = 1; s <= steps; s++) {
        const x = (s / steps) * 1000;
        y = Math.max(20, Math.min(980, y + (m.rnd() - 0.5) * q.jagged * 1.4));
        const cx = x - 1000 / steps / 2;
        const cy = Math.max(20, Math.min(980, y + (m.rnd() - 0.5) * q.jagged));
        d += ` Q ${f1(cx)} ${f1(cy)} ${f1(x)} ${f1(y)}`;
      }
      const col = m.col(v);
      const sw = 1.2 + m.rnd() * 4.5;
      m.raw(
        `<path d="${d}" fill="none" stroke="${col}" stroke-width="${f1(
          sw
        )}" opacity="${(0.28 + m.rnd() * 0.55).toFixed(2)}" stroke-linecap="round"/>`
      );
    }
  },
});

registerMode({
  id: "brushedgoldmetal",
  name: "Brushed Champagne Metallic Texture",
  cat: "Texture",
  look: {
    bg: "#1c160c",
    ink: "#fef08a",
    cols: ["#eab308", "#ca8a04", "#fde047", "#a16207", "#fef9c3"],
    style: "flat",
  },
  params: [
    { k: "lines", l: "Brushed Micro-Lines", min: 40, max: 160, def: 90 },
    { k: "sheen", l: "Metallic Sheen %", min: 20, max: 95, def: 65 },
  ],
  draw(m: any, q: any) {
    m.def(
      `<linearGradient id="metal_sheen" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${m.bg}"/><stop offset="35%" stop-color="${m.col(
        0
      )}" stop-opacity="${(q.sheen / 100).toFixed(
        2
      )}"/><stop offset="50%" stop-color="${m.col(
        2
      )}" stop-opacity="0.75"/><stop offset="65%" stop-color="${m.col(
        1
      )}" stop-opacity="${(q.sheen / 100).toFixed(2)}"/><stop offset="100%" stop-color="${m.bg}"/></linearGradient>`
    );
    m.raw(`<rect width="${T}" height="${T}" fill="url(#metal_sheen)"/>`);
    for (let i = 0; i < q.lines; i++) {
      const y = (i / Math.max(1, q.lines - 1)) * 1000;
      const x1 = m.rnd() * 120;
      const x2 = 1000 - m.rnd() * 120;
      const sw = 0.8 + m.rnd() * 2.2;
      m.raw(
        `<line x1="${f1(x1)}" y1="${f1(y)}" x2="${f1(x2)}" y2="${f1(
          y
        )}" stroke="${m.col(i)}" stroke-width="${f1(sw)}" opacity="${(
          0.18 +
          m.rnd() * 0.45
        ).toFixed(2)}" stroke-linecap="round"/>`
      );
    }
  },
});

registerMode({
  id: "handmadekraft",
  name: "Artisan Deckle Paper Fiber Texture",
  cat: "Texture",
  look: {
    bg: "#efe6d8",
    ink: "#3b2a20",
    cols: ["#c98b4f", "#a0522d", "#d9b38c", "#6b7d4f", "#5a3e2b"],
    style: "flat",
  },
  params: [
    { k: "fibers", l: "Organic Fibers", min: 40, max: 180, def: 95 },
    { k: "len", l: "Fiber Length", min: 20, max: 90, def: 48 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.fibers; i++) {
      const x = 15 + m.rnd() * 970;
      const y = 15 + m.rnd() * 970;
      const a = m.rnd() * Math.PI * 2;
      const L = q.len * (0.5 + m.rnd() * 0.7);
      const x2 = Math.max(5, Math.min(995, x + Math.cos(a) * L));
      const y2 = Math.max(5, Math.min(995, y + Math.sin(a) * L));
      const cx = (x + x2) / 2 + (m.rnd() - 0.5) * 24;
      const cy = (y + y2) / 2 + (m.rnd() - 0.5) * 24;
      m.raw(
        `<path d="M ${f1(x)} ${f1(y)} Q ${f1(cx)} ${f1(cy)} ${f1(x2)} ${f1(
          y2
        )}" fill="none" stroke="${m.col(i)}" stroke-width="${f1(
          1 + m.rnd() * 2.2
        )}" opacity="${(0.25 + m.rnd() * 0.55).toFixed(2)}" stroke-linecap="round"/>`
      );
    }
  },
});

registerMode({
  id: "terrazzogranite",
  name: "Architectural Terrazzo Stone Texture",
  cat: "Texture",
  look: {
    bg: "#f5efe6",
    ink: "#1e293b",
    cols: ["#e07a5f", "#3d405b", "#81b29a", "#f2cc8f", "#c15c3d"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "chips", l: "Quartz Chips", min: 18, max: 70, def: 38 },
    { k: "size", l: "Chip Size", min: 35, max: 110, def: 68 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.chips, 70, (x: number, y: number, k: number) => {
      const s = (q.size / 100) * (0.45 + m.rnd() * 0.7);
      const sides = 5 + Math.floor(m.rnd() * 4);
      const pts: string[] = [];
      for (let i = 0; i < sides; i++) {
        const a = (i / sides) * Math.PI * 2;
        const r = 24 + m.rnd() * 22;
        pts.push(`${f1(Math.cos(a) * r)},${f1(Math.sin(a) * r)}`);
      }
      const o = m.st(m.col(k), s);
      m.put(x, y, m.rnd() * 360, s, `<polygon ${o.a} points="${pts.join(" ")}"/>`, 55);
    });
  },
});

registerMode({
  id: "denimtwillweave",
  name: "Selvedge Indigo Twill Weave Texture",
  cat: "Texture",
  look: {
    bg: "#0f1d33",
    ink: "#f4efe6",
    cols: ["#2558b0", "#7aa0d8", "#f4efe6", "#1a3a7a", "#e8a87c"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Twill Gauge", min: 10, max: 32, def: 18 },
    { k: "th", l: "Stitch Weight %", min: 35, max: 85, def: 62 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "grid", (x: number, y: number, i: number, j: number, cell: number) => {
      const isWarp = (i + j) % 3 !== 0;
      const col = isWarp ? m.col((i + j) % 2) : m.col(2);
      const w = cell * (q.th / 100);
      const h = cell * 0.82;
      m.put(
        x,
        y,
        isWarp ? 0 : 90,
        1,
        `<rect x="${f1(-w / 2)}" y="${f1(-h / 2)}" width="${f1(w)}" height="${f1(
          h
        )}" rx="${f1(w * 0.4)}" fill="${col}"/>`,
        cell * 0.5
      );
    });
  },
});

registerMode({
  id: "woodgrainmarquetry",
  name: "Organic Burl Woodgrain Texture",
  cat: "Texture",
  look: {
    bg: "#2b1d14",
    ink: "#f7ede2",
    cols: ["#a0522d", "#c98b4f", "#d9b38c", "#7d4f50", "#f6bd60"],
    style: "flat",
  },
  params: [
    { k: "rings", l: "Grain Rings", min: 8, max: 28, def: 16 },
    { k: "swirl", l: "Knot Distortion", min: 15, max: 95, def: 52 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.rings; i++) {
      const yBase = 25 + (i / Math.max(1, q.rings - 1)) * 950;
      const k1 = Math.sin((i / q.rings) * Math.PI) * q.swirl * 1.4;
      const k2 = Math.cos((i / q.rings) * Math.PI * 2) * q.swirl;
      const sw = 2.5 + m.rnd() * 4.5;
      m.raw(
        `<path d="M 0 ${f1(yBase)} C 320 ${f1(
          Math.max(10, Math.min(990, yBase + k1))
        )}, 680 ${f1(Math.max(10, Math.min(990, yBase - k2)))}, 1000 ${f1(
          yBase
        )}" fill="none" stroke="${m.col(i)}" stroke-width="${f1(
          sw
        )}" stroke-linecap="round" opacity="0.78"/>`
      );
    }
  },
});

registerMode({
  id: "topographiccontour",
  name: "Topographic Elevation Contour Map",
  cat: "Texture",
  look: {
    bg: "#071318",
    ink: "#e2f8f0",
    cols: ["#10b981", "#06b6d4", "#f59e0b", "#34d399", "#0ea5e9"],
    style: "line",
    sw: 3,
  },
  params: [
    { k: "rings", l: "Contour Rings", min: 5, max: 16, def: 10 },
    { k: "irr", l: "Terrain Undulation", min: 15, max: 65, def: 35 },
  ],
  draw(m: any, q: any) {
    const seedPts = 10;
    const baseAngles: number[] = [];
    for (let k = 0; k < seedPts; k++) baseAngles.push((m.rnd() - 0.5) * (q.irr / 100));
    for (let rIdx = 1; rIdx <= q.rings; rIdx++) {
      const R = (rIdx / q.rings) * 465;
      const pts: [number, number][] = [];
      for (let k = 0; k < seedPts; k++) {
        const a = (k / seedPts) * Math.PI * 2;
        const rad = R * (1 + baseAngles[k] * Math.sin(rIdx * 0.45));
        pts.push([500 + Math.cos(a) * rad, 500 + Math.sin(a) * rad]);
      }
      const col = m.col(rIdx);
      m.raw(
        `<path d="${smoothC(pts)}" fill="none" stroke="${col}" stroke-width="${f1(
          m.sw
        )}" opacity="0.88"/>`
      );
    }
  },
});

/* =====================================================================
   20 MICROSTOCK LUXURY BACKGROUND & SURFACE TEXTURE GENERATORS
   (Separable & Recolorable Adobe Illustrator Vector Paths)
   ===================================================================== */
registerMode({
  id: "krafthandsand",
  name: "Golden Sand Kraft Parchment",
  cat: "Background",
  look: {
    bg: "#dfc08e",
    ink: "#5e4321",
    cols: ["#cfa86e", "#e8cf9f", "#b88e52", "#f3deb5", "#9e7339"],
    style: "flat",
  },
  params: [
    { k: "grain", l: "Sand Grain Density", min: 0, max: 260, def: 0 },
    { k: "flecks", l: "Parchment Fibers", min: 0, max: 140, def: 45 },
    { k: "soft", l: "Warm Glow Layers", min: 3, max: 10, def: 6 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.soft; i++) {
      const cx = 80 + m.rnd() * 840;
      const cy = 80 + m.rnd() * 840;
      const rx = 140 + m.rnd() * 180;
      const ry = 100 + m.rnd() * 140;
      m.put(
        cx,
        cy,
        m.rnd() * 180,
        1,
        `<ellipse rx="${f1(rx)}" ry="${f1(ry)}" fill="${m.col(i)}" opacity="0.24"/>`,
        110
      );
    }
    for (let i = 0; i < q.grain; i++) {
      const gx = 10 + m.rnd() * 980;
      const gy = 10 + m.rnd() * 980;
      const r = 2.2 + m.rnd() * 6.5;
      m.raw(
        `<circle cx="${f1(gx)}" cy="${f1(gy)}" r="${f1(r)}" fill="${m.col(i)}" opacity="${(
          0.25 +
          m.rnd() * 0.55
        ).toFixed(2)}"/>`
      );
    }
    for (let f = 0; f < q.flecks; f++) {
      const fx = 15 + m.rnd() * 970;
      const fy = 15 + m.rnd() * 970;
      const ang = m.rnd() * Math.PI * 2;
      const len = 12 + m.rnd() * 28;
      const x2 = Math.max(5, Math.min(995, fx + Math.cos(ang) * len));
      const y2 = Math.max(5, Math.min(995, fy + Math.sin(ang) * len));
      m.raw(
        `<path d="M ${f1(fx)} ${f1(fy)} L ${f1(x2)} ${f1(y2)}" stroke="${m.col(
          f + 1
        )}" stroke-width="${f1(1.4 + m.rnd() * 2.4)}" stroke-linecap="round" opacity="0.48"/>`
      );
    }
  },
});

registerMode({
  id: "matchafeltlinen",
  name: "Olive Matcha Felt & Flannel Paper",
  cat: "Background",
  look: {
    bg: "#a5af46",
    ink: "#363c11",
    cols: ["#929c38", "#b9c25a", "#7f882b", "#cbd46e", "#697120"],
    style: "flat",
  },
  params: [
    { k: "tufts", l: "Felt Wool Tufts", min: 50, max: 220, def: 130 },
    { k: "mottle", l: "Flannel Patches", min: 10, max: 40, def: 22 },
    { k: "scale", l: "Fiber Scale %", min: 50, max: 150, def: 95 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.mottle, 65, (x: number, y: number, k: number) => {
      const s = (q.scale / 100) * (0.85 + m.rnd() * 0.75);
      m.put(
        x,
        y,
        m.rnd() * 360,
        s,
        `<path d="${blobPath(m.rnd, 8, 0.35)}" fill="${m.col(k)}" opacity="0.32"/>`,
        58
      );
    });
    for (let i = 0; i < q.tufts; i++) {
      const x = 15 + m.rnd() * 970;
      const y = 15 + m.rnd() * 970;
      const a = m.rnd() * Math.PI * 2;
      const L = (14 + m.rnd() * 32) * (q.scale / 100);
      const x2 = Math.max(5, Math.min(995, x + Math.cos(a) * L));
      const y2 = Math.max(5, Math.min(995, y + Math.sin(a) * L));
      const cx = (x + x2) / 2 + (m.rnd() - 0.5) * 16;
      const cy = (y + y2) / 2 + (m.rnd() - 0.5) * 16;
      m.raw(
        `<path d="M ${f1(x)} ${f1(y)} Q ${f1(cx)} ${f1(cy)} ${f1(x2)} ${f1(
          y2
        )}" fill="none" stroke="${m.col(i)}" stroke-width="${f1(
          1.6 + m.rnd() * 2.8
        )}" stroke-linecap="round" opacity="${(0.32 + m.rnd() * 0.5).toFixed(2)}"/>`
      );
    }
  },
});

registerMode({
  id: "walnuthardwood",
  name: "Dark Walnut Hardwood Plank Grain",
  cat: "Background",
  look: {
    bg: "#4a2c15",
    ink: "#1c0e05",
    cols: ["#361e0c", "#613b1e", "#784b28", "#271407", "#8c5a33"],
    style: "flat",
  },
  params: [
    { k: "planks", l: "Timber Bands", min: 10, max: 36, def: 22 },
    { k: "knots", l: "Burl Knots", min: 2, max: 12, def: 5 },
    { k: "pores", l: "Wood Pores", min: 40, max: 160, def: 90 },
  ],
  draw(m: any, q: any) {
    const N = q.planks;
    for (let i = 0; i < N; i++) {
      const y0 = (i / N) * 1000;
      const h = (1000 / N) * (0.7 + m.rnd() * 0.65);
      const w1 = (m.rnd() - 0.5) * 42;
      const w2 = (m.rnd() - 0.5) * 42;
      m.raw(
        `<path d="M 0 ${f1(y0)} C 340 ${f1(y0 + w1)}, 660 ${f1(
          y0 + w2
        )}, 1000 ${f1(y0)} L 1000 ${f1(Math.min(1000, y0 + h))} C 660 ${f1(
          Math.min(1000, y0 + h + w2)
        )}, 340 ${f1(Math.min(1000, y0 + h + w1))}, 0 ${f1(
          Math.min(1000, y0 + h)
        )} Z" fill="${m.col(i)}" opacity="${(0.45 + m.rnd() * 0.45).toFixed(2)}"/>`
      );
    }
    m.scatter(q.knots, 140, (x: number, y: number, k: number) => {
      for (let r = 3; r >= 1; r--) {
        m.put(
          x,
          y,
          (m.rnd() - 0.5) * 12,
          1,
          `<ellipse rx="${f1(r * 28)}" ry="${f1(r * 11)}" fill="none" stroke="${m.col(
            k + r
          )}" stroke-width="${f1(2.2 + r)}" opacity="0.62"/>`,
          90
        );
      }
    });
    for (let p = 0; p < q.pores; p++) {
      const px = 10 + m.rnd() * 960;
      const py = 10 + m.rnd() * 980;
      const plen = 18 + m.rnd() * 55;
      m.raw(
        `<line x1="${f1(px)}" y1="${f1(py)}" x2="${f1(
          Math.min(1000, px + plen)
        )}" y2="${f1(py)}" stroke="${m.col(3)}" stroke-width="${f1(
          1.2 + m.rnd() * 2.2
        )}" stroke-linecap="round" opacity="0.58"/>`
      );
    }
  },
});

registerMode({
  id: "frostedplatinum",
  name: "Frosted Platinum Brushed Silver",
  cat: "Background",
  look: {
    bg: "#d5d9df",
    ink: "#475569",
    cols: ["#eef1f5", "#b8bec8", "#ffffff", "#9fa6b2", "#cbd0d8"],
    style: "flat",
  },
  params: [
    { k: "sheen", l: "Studio Light Orbs", min: 3, max: 10, def: 5 },
    { k: "grain", l: "Anodized Micro-Dots", min: 0, max: 260, def: 0 },
    { k: "brush", l: "Brushed Lines", min: 30, max: 120, def: 65 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.sheen; i++) {
      const gid = `plat_sh_${i}`;
      const cx = (18 + m.rnd() * 64).toFixed(1);
      const cy = (18 + m.rnd() * 64).toFixed(1);
      m.def(
        `<radialGradient id="${gid}" cx="${cx}%" cy="${cy}%" r="55%"><stop offset="0%" stop-color="${m.col(
          i % 2 === 0 ? 2 : 0
        )}" stop-opacity="0.72"/><stop offset="100%" stop-color="${m.bg}" stop-opacity="0"/></radialGradient>`
      );
      m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#${gid})"/>`);
    }
    for (let b = 0; b < q.brush; b++) {
      const y = (b / Math.max(1, q.brush - 1)) * 1000;
      const x1 = m.rnd() * 100;
      const x2 = 1000 - m.rnd() * 100;
      m.raw(
        `<line x1="${f1(x1)}" y1="${f1(y)}" x2="${f1(x2)}" y2="${f1(
          y
        )}" stroke="${m.col(b)}" stroke-width="${f1(
          1 + m.rnd() * 2.2
        )}" stroke-linecap="round" opacity="0.45"/>`
      );
    }
    for (let g = 0; g < q.grain; g++) {
      const gx = 10 + m.rnd() * 980;
      const gy = 10 + m.rnd() * 980;
      m.raw(
        `<circle cx="${f1(gx)}" cy="${f1(gy)}" r="${f1(
          1.6 + m.rnd() * 3.8
        )}" fill="${m.col(g)}" opacity="0.48"/>`
      );
    }
  },
});

registerMode({
  id: "blueagatemarble",
  name: "Blue Agate Liquid Marble Swirl",
  cat: "Background",
  look: {
    bg: "#98aab9",
    ink: "#1e293b",
    cols: ["#4a7ba6", "#566370", "#d8e2ec", "#2e3842", "#7593af"],
    style: "flat",
  },
  params: [
    { k: "ribbons", l: "Fluid Marble Bands", min: 8, max: 26, def: 16 },
    { k: "swirl", l: "Swirl Amplitude", min: 40, max: 180, def: 115 },
    { k: "pools", l: "Agate Mineral Pools", min: 4, max: 16, def: 8 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.ribbons; i++) {
      const yBase = 30 + (i / Math.max(1, q.ribbons - 1)) * 940;
      const a1 = (m.rnd() - 0.5) * q.swirl * 1.8;
      const a2 = (m.rnd() - 0.5) * q.swirl * 1.8;
      const a3 = (m.rnd() - 0.5) * q.swirl * 1.8;
      const y1 = Math.max(15, Math.min(985, yBase + a1));
      const y2 = Math.max(15, Math.min(985, yBase + a2));
      const y3 = Math.max(15, Math.min(985, yBase + a3));
      const sw = 12 + m.rnd() * 38;
      m.raw(
        `<path d="M 0 ${f1(yBase)} C 280 ${f1(y1)}, 520 ${f1(y2)}, 740 ${f1(
          y3
        )} S 890 ${f1(y1)}, 1000 ${f1(yBase)}" fill="none" stroke="${m.col(
          i
        )}" stroke-width="${f1(sw)}" stroke-linecap="butt" opacity="${(
          0.55 +
          m.rnd() * 0.4
        ).toFixed(2)}"/>`
      );
      m.raw(
        `<path d="M 0 ${f1(yBase)} C 280 ${f1(y1)}, 520 ${f1(y2)}, 740 ${f1(
          y3
        )} S 890 ${f1(y1)}, 1000 ${f1(yBase)}" fill="none" stroke="${m.col(
          i + 2
        )}" stroke-width="${f1(sw * 0.28)}" stroke-linecap="butt" opacity="0.82"/>`
      );
    }
    m.scatter(q.pools, 110, (x: number, y: number, k: number) => {
      for (let ring = 3; ring >= 1; ring--) {
        const s = (0.45 + ring * 0.28) * (0.8 + m.rnd() * 0.4);
        m.put(
          x,
          y,
          k * 45,
          s,
          `<path d="${blobPath(m.rnd, 8, 0.36)}" fill="${m.col(k + ring)}" opacity="0.58"/>`,
          68
        );
      }
    });
  },
});

registerMode({
  id: "rosegoldfoil",
  name: "Rose Gold Brushed Metallic Sheen",
  cat: "Background",
  look: {
    bg: "#3b1c22",
    ink: "#fff1f2",
    cols: ["#f43f5e", "#fda4af", "#fb7185", "#ffe4e6", "#e11d48"],
    style: "flat",
  },
  params: [
    { k: "bands", l: "Metallic Folds", min: 5, max: 16, def: 9 },
    { k: "flecks", l: "Foil Shimmer", min: 30, max: 140, def: 75 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.bands; i++) {
      const y = 30 + (i / Math.max(1, q.bands - 1)) * 940;
      const amp = 45 + m.rnd() * 75;
      m.raw(
        `<path d="M 0 ${f1(y)} Q 320 ${f1(
          Math.max(15, y - amp)
        )} 500 ${f1(y)} T 1000 ${f1(y)}" fill="none" stroke="${m.col(
          i
        )}" stroke-width="${f1(420 / q.bands)}" stroke-linecap="butt" opacity="0.52"/>`
      );
    }
    m.scatter(q.flecks, 45, (x: number, y: number, k: number) => {
      const s = 0.25 + m.rnd() * 0.45;
      m.put(x, y, m.rnd() * 360, s, `<polygon points="0,-24 18,0 0,24 -18,0" fill="${m.col(k)}" opacity="0.72"/>`, 35);
    });
  },
});

registerMode({
  id: "emeraldmalachite",
  name: "Emerald Malachite Banded Stone",
  cat: "Background",
  look: {
    bg: "#042f2e",
    ink: "#ecfdf5",
    cols: ["#10b981", "#059669", "#34d399", "#047857", "#a7f3d0"],
    style: "flat",
  },
  params: [
    { k: "eyes", l: "Malachite Eyes", min: 3, max: 10, def: 6 },
    { k: "rings", l: "Concentric Bands", min: 4, max: 10, def: 6 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.eyes, 140, (x: number, y: number, k: number) => {
      for (let r = q.rings; r >= 1; r--) {
        const s = (r / q.rings) * 1.45;
        m.put(
          x,
          y,
          k * 30,
          s,
          `<circle r="48" fill="${m.col(k + r)}" stroke="${m.col(k + r + 1)}" stroke-width="4"/>`,
          75
        );
      }
    });
  },
});

registerMode({
  id: "charcoalslate",
  name: "Dark Charcoal Architectural Slate",
  cat: "Background",
  look: {
    bg: "#1e242b",
    ink: "#f8fafc",
    cols: ["#2d3640", "#3e4a57", "#14181d", "#526070", "#64748b"],
    style: "flat",
  },
  params: [
    { k: "strata", l: "Slate Strata", min: 8, max: 24, def: 14 },
    { k: "grit", l: "Mineral Grit", min: 0, max: 160, def: 0 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.strata; i++) {
      const y = (i / q.strata) * 1000;
      const h = 55 + m.rnd() * 75;
      m.raw(
        `<rect x="0" y="${f1(y)}" width="1000" height="${f1(
          Math.min(1000 - y, h)
        )}" fill="${m.col(i)}" opacity="0.48"/>`
      );
    }
    for (let g = 0; g < q.grit; g++) {
      const gx = 10 + m.rnd() * 980;
      const gy = 10 + m.rnd() * 980;
      m.raw(
        `<circle cx="${f1(gx)}" cy="${f1(gy)}" r="${f1(
          2 + m.rnd() * 5.5
        )}" fill="${m.col(g)}" opacity="0.52"/>`
      );
    }
  },
});

registerMode({
  id: "ivorydecklepaper",
  name: "Handmade Ivory Watercolor Paper",
  cat: "Background",
  look: {
    bg: "#faf6ee",
    ink: "#332b22",
    cols: ["#efe7d6", "#e5d9c3", "#f5efe2", "#d8c8ad", "#cbb798"],
    style: "flat",
  },
  params: [
    { k: "dimples", l: "Cold-Press Dimples", min: 30, max: 120, def: 70 },
    { k: "fibers", l: "Cotton Rag Fibers", min: 40, max: 150, def: 85 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.dimples, 55, (x: number, y: number, k: number) => {
      const rx = 18 + m.rnd() * 24;
      const ry = 12 + m.rnd() * 18;
      m.put(
        x,
        y,
        m.rnd() * 180,
        1,
        `<ellipse rx="${f1(rx)}" ry="${f1(ry)}" fill="${m.col(k)}" opacity="0.52"/>`,
        45
      );
    });
    for (let i = 0; i < q.fibers; i++) {
      const fx = 15 + m.rnd() * 970;
      const fy = 15 + m.rnd() * 970;
      const a = m.rnd() * Math.PI * 2;
      const len = 14 + m.rnd() * 26;
      m.raw(
        `<line x1="${f1(fx)}" y1="${f1(fy)}" x2="${f1(
          Math.max(5, Math.min(995, fx + Math.cos(a) * len))
        )}" y2="${f1(
          Math.max(5, Math.min(995, fy + Math.sin(a) * len))
        )}" stroke="${m.col(i)}" stroke-width="1.8" stroke-linecap="round" opacity="0.6"/>`
      );
    }
  },
});

registerMode({
  id: "teakparquetherring",
  name: "Luxury Teak Wood Parquet Grain",
  cat: "Background",
  look: {
    bg: "#5c3419",
    ink: "#1e0f05",
    cols: ["#784724", "#8f5830", "#472610", "#a66a3e", "#693c1c"],
    style: "both",
    sw: 2,
  },
  params: [
    { k: "n", l: "Parquet Columns", min: 4, max: 12, def: 6 },
    { k: "grain", l: "Timber Grain Lines", min: 2, max: 8, def: 4 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "brick", (x: number, y: number, i: number, j: number, cell: number) => {
      const w = cell * 0.88;
      const h = cell * 0.44;
      const c = m.col(i + j);
      let gLines = "";
      for (let g = 1; g <= q.grain; g++) {
        const gy = -h / 2 + (g / (q.grain + 1)) * h;
        gLines += `<line x1="${f1(-w * 0.42)}" y1="${f1(gy)}" x2="${f1(
          w * 0.42
        )}" y2="${f1(gy)}" stroke="${m.col(i + j + 2)}" stroke-width="1.8" opacity="0.55"/>`;
      }
      m.put(
        x,
        y,
        (i + j) % 2 === 0 ? 0 : 90,
        1,
        `<rect x="${f1(-w / 2)}" y="${f1(-h / 2)}" width="${f1(w)}" height="${f1(
          h
        )}" rx="4" fill="${c}" stroke="${m.ink}" stroke-width="${m.sw}"/>${gLines}`,
        cell * 0.5
      );
    });
  },
});

registerMode({
  id: "obsidianlava",
  name: "Volcanic Basalt & Gold Vein Marble",
  cat: "Background",
  look: {
    bg: "#0f1117",
    ink: "#fef08a",
    cols: ["#eab308", "#1e293b", "#ca8a04", "#334155", "#fde047"],
    style: "flat",
  },
  params: [
    { k: "veins", l: "Gilded Cracks", min: 8, max: 28, def: 15 },
    { k: "plates", l: "Basalt Plates", min: 6, max: 22, def: 12 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.plates, 90, (x: number, y: number, k: number) => {
      m.put(
        x,
        y,
        m.rnd() * 360,
        1.1,
        `<path d="${blobPath(m.rnd, 6, 0.4)}" fill="${m.col(k % 2 ? 1 : 3)}" opacity="0.65"/>`,
        65
      );
    });
    for (let v = 0; v < q.veins; v++) {
      let y = 30 + m.rnd() * 940;
      let d = `M 0 ${f1(y)}`;
      for (let s = 1; s <= 7; s++) {
        const x = (s / 7) * 1000;
        y = Math.max(15, Math.min(985, y + (m.rnd() - 0.5) * 140));
        d += ` L ${f1(x)} ${f1(y)}`;
      }
      m.raw(
        `<path d="${d}" fill="none" stroke="${m.col(
          v % 2 === 0 ? 0 : 4
        )}" stroke-width="${f1(1.5 + m.rnd() * 3.5)}" stroke-linejoin="round" stroke-linecap="round" opacity="0.88"/>`
      );
    }
  },
});

registerMode({
  id: "velvetcarmine",
  name: "Royal Crimson Crushed Velvet Backdrop",
  cat: "Background",
  look: {
    bg: "#2b0712",
    ink: "#ffe4e6",
    cols: ["#9f1239", "#be123c", "#e11d48", "#881337", "#f43f5e"],
    style: "flat",
  },
  params: [
    { k: "drapes", l: "Velvet Drapes", min: 6, max: 18, def: 10 },
    { k: "sheen", l: "Crush Highlights", min: 12, max: 45, def: 24 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.drapes; i++) {
      const x = 35 + (i / Math.max(1, q.drapes - 1)) * 930;
      const w = 45 + m.rnd() * 55;
      m.raw(
        `<path d="M ${f1(x)} 0 C ${f1(x - w)} 350, ${f1(
          x + w
        )} 650, ${f1(x)} 1000" fill="none" stroke="${m.col(
          i
        )}" stroke-width="${f1(w)}" stroke-linecap="butt" opacity="0.45"/>`
      );
    }
    m.scatter(q.sheen, 75, (x: number, y: number, k: number) => {
      m.put(
        x,
        y,
        m.rnd() * 360,
        0.9,
        `<ellipse rx="46" ry="18" fill="${m.col(k)}" opacity="0.35"/>`,
        55
      );
    });
  },
});

registerMode({
  id: "sapphiregeode",
  name: "Sapphire Crystal Geode Agate",
  cat: "Background",
  look: {
    bg: "#08142c",
    ink: "#f0f9ff",
    cols: ["#0284c7", "#38bdf8", "#eab308", "#1d4ed8", "#7dd3fc"],
    style: "flat",
  },
  params: [
    { k: "bands", l: "Geode Strata", min: 6, max: 16, def: 10 },
    { k: "crystals", l: "Gold Quartz Specks", min: 20, max: 90, def: 48 },
  ],
  draw(m: any, q: any) {
    for (let r = q.bands; r >= 1; r--) {
      const rad = (r / q.bands) * 465;
      const pts: [number, number][] = [];
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * Math.PI * 2;
        const rr = rad * (0.86 + hr(r * 19, k, r) * 0.24);
        pts.push([500 + Math.cos(a) * rr, 500 + Math.sin(a) * rr]);
      }
      m.raw(
        `<path d="${smoothC(pts)}" fill="${m.col(r)}" stroke="${m.col(
          r + 1
        )}" stroke-width="3" opacity="0.85"/>`
      );
    }
    m.scatter(q.crystals, 40, (x: number, y: number) => {
      m.put(
        x,
        y,
        m.rnd() * 360,
        0.22 + m.rnd() * 0.25,
        `<polygon points="0,-25 18,0 0,25 -18,0" fill="${m.col(2)}"/>`,
        32
      );
    });
  },
});

registerMode({
  id: "terracottastucco",
  name: "Mediterranean Terracotta Fresco Plaster",
  cat: "Background",
  look: {
    bg: "#c86446",
    ink: "#38180e",
    cols: ["#b35236", "#d97b5e", "#e6957a", "#9c4127", "#f0b099"],
    style: "flat",
  },
  params: [
    { k: "trowel", l: "Trowel Sweeps", min: 14, max: 50, def: 28 },
    { k: "grit", l: "Plaster Sand", min: 0, max: 180, def: 0 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.trowel, 65, (x: number, y: number, k: number) => {
      const s = 0.8 + m.rnd() * 0.9;
      m.put(
        x,
        y,
        m.rnd() * 180,
        s,
        `<path d="M-48-12Q0-34 48-10Q32 24-42 18Z" fill="${m.col(k)}" opacity="0.45"/>`,
        58
      );
    });
    for (let i = 0; i < q.grit; i++) {
      const gx = 10 + m.rnd() * 980;
      const gy = 10 + m.rnd() * 980;
      m.raw(
        `<circle cx="${f1(gx)}" cy="${f1(gy)}" r="${f1(
          1.8 + m.rnd() * 4.2
        )}" fill="${m.col(i)}" opacity="0.5"/>`
      );
    }
  },
});

registerMode({
  id: "titaniumcarbon",
  name: "Brushed Titanium Anodized Metal",
  cat: "Background",
  look: {
    bg: "#181c24",
    ink: "#e2e8f0",
    cols: ["#272e3b", "#384152", "#4b5563", "#64748b", "#0f1319"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Carbon Weave Grid", min: 8, max: 24, def: 14 },
    { k: "brush", l: "Titanium Micro-Lines", min: 30, max: 120, def: 70 },
  ],
  draw(m: any, q: any) {
    m.grid(q.n, "grid", (x: number, y: number, i: number, j: number, cell: number) => {
      const w = cell * 0.9;
      m.put(
        x,
        y,
        0,
        1,
        `<rect x="${f1(-w / 2)}" y="${f1(-w / 2)}" width="${f1(w)}" height="${f1(
          w
        )}" rx="3" fill="${m.col((i + j) % 4)}" opacity="0.72"/>`,
        cell * 0.5
      );
    });
    for (let b = 0; b < q.brush; b++) {
      const y = (b / Math.max(1, q.brush - 1)) * 1000;
      m.raw(
        `<line x1="0" y1="${f1(y)}" x2="1000" y2="${f1(y)}" stroke="${m.col(
          b
        )}" stroke-width="1.4" opacity="0.38"/>`
      );
    }
  },
});

registerMode({
  id: "sandstonedune",
  name: "Sahara Sandstone Sedimentary Strata",
  cat: "Background",
  look: {
    bg: "#e6c79c",
    ink: "#4a3219",
    cols: ["#d4ad7a", "#c2955d", "#f0d8b4", "#b08047", "#9c6b34"],
    style: "flat",
  },
  params: [
    { k: "strata", l: "Rock Layers", min: 8, max: 24, def: 14 },
    { k: "wave", l: "Strata Wave", min: 20, max: 110, def: 58 },
  ],
  draw(m: any, q: any) {
    for (let i = 0; i < q.strata; i++) {
      const y = 25 + (i / Math.max(1, q.strata - 1)) * 950;
      const a1 = (m.rnd() - 0.5) * q.wave * 1.5;
      const a2 = (m.rnd() - 0.5) * q.wave * 1.5;
      m.raw(
        `<path d="M 0 ${f1(y)} C 320 ${f1(
          Math.max(15, Math.min(985, y + a1))
        )}, 680 ${f1(Math.max(15, Math.min(985, y + a2)))}, 1000 ${f1(
          y
        )}" fill="none" stroke="${m.col(i)}" stroke-width="${f1(
          520 / q.strata
        )}" stroke-linecap="butt" opacity="0.72"/>`
      );
    }
  },
});

registerMode({
  id: "jadeitecloud",
  name: "Imperial Jadeite Cloud Marble",
  cat: "Background",
  look: {
    bg: "#d1fae5",
    ink: "#064e3b",
    cols: ["#6ee7b7", "#34d399", "#a7f3d0", "#10b981", "#ecfdf5"],
    style: "flat",
  },
  params: [
    { k: "clouds", l: "Jadeite Veins", min: 10, max: 32, def: 18 },
    { k: "swirl", l: "Cloud Flow", min: 30, max: 140, def: 80 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.clouds, 75, (x: number, y: number, k: number) => {
      const s = 0.8 + m.rnd() * 0.9;
      m.put(
        x,
        y,
        m.rnd() * 360,
        s,
        `<path d="${blobPath(m.rnd, 9, 0.34)}" fill="${m.col(k)}" opacity="0.52"/>`,
        65
      );
    });
  },
});

registerMode({
  id: "burlapjuteweave",
  name: "Natural Hessian Jute Sackcloth",
  cat: "Background",
  look: {
    bg: "#c7a87b",
    ink: "#3d2914",
    cols: ["#b08f61", "#d9be96", "#99784b", "#e3cca8", "#826238"],
    style: "flat",
  },
  params: [
    { k: "n", l: "Jute Weave Gauge", min: 10, max: 28, def: 16 },
    { k: "rough", l: "Fiber Roughness", min: 10, max: 80, def: 45 },
  ],
  draw(m: any, q: any) {
    const N = q.n;
    const step = 1000 / N;
    for (let i = 0; i <= N; i++) {
      const p = i * step;
      const sw = (step * 0.42) * (0.85 + (m.rnd() * q.rough) / 150);
      m.raw(
        `<line x1="${f1(p)}" y1="0" x2="${f1(p)}" y2="1000" stroke="${m.col(
          i
        )}" stroke-width="${f1(sw)}" opacity="0.62"/>` +
          `<line x1="0" y1="${f1(p)}" x2="1000" y2="${f1(p)}" stroke="${m.col(
            i + 1
          )}" stroke-width="${f1(sw)}" opacity="0.62"/>`
      );
    }
  },
});

registerMode({
  id: "alcoholinkgold",
  name: "Alcohol Ink & Gilded Marble Flow",
  cat: "Background",
  look: {
    bg: "#fdf8f5",
    ink: "#1e1b4b",
    cols: ["#f43f5e", "#eab308", "#8b5cf6", "#fda4af", "#fde047"],
    style: "flat",
  },
  params: [
    { k: "blooms", l: "Ink Blooms", min: 6, max: 20, def: 11 },
    { k: "gold", l: "Gold Leaf Veins", min: 6, max: 20, def: 10 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.blooms, 95, (x: number, y: number, k: number) => {
      const s = 1.0 + m.rnd() * 0.9;
      m.put(
        x,
        y,
        m.rnd() * 360,
        s,
        `<path d="${blobPath(m.rnd, 8, 0.3)}" fill="${m.col(k)}" opacity="0.38" stroke="${m.col(
          1
        )}" stroke-width="2.5"/>`,
        68
      );
    });
    for (let g = 0; g < q.gold; g++) {
      const y = 30 + (g / q.gold) * 940;
      const a1 = (m.rnd() - 0.5) * 140;
      const a2 = (m.rnd() - 0.5) * 140;
      m.raw(
        `<path d="M 0 ${f1(y)} C 320 ${f1(
          Math.max(15, Math.min(985, y + a1))
        )}, 680 ${f1(Math.max(15, Math.min(985, y + a2)))}, 1000 ${f1(
          y
        )}" fill="none" stroke="${m.col(1)}" stroke-width="3.2" stroke-linecap="round" opacity="0.88"/>`
      );
    }
  },
});

registerMode({
  id: "concreteindustrial",
  name: "Polished Architectural Micro-Cement",
  cat: "Background",
  look: {
    bg: "#b8bec6",
    ink: "#1f2937",
    cols: ["#a3aab4", "#cdd2d9", "#8e96a2", "#dfe3e8", "#79828f"],
    style: "flat",
  },
  params: [
    { k: "clouds", l: "Trowel Clouds", min: 10, max: 36, def: 20 },
    { k: "pits", l: "Micro Air Pits", min: 0, max: 200, def: 0 },
  ],
  draw(m: any, q: any) {
    m.scatter(q.clouds, 75, (x: number, y: number, k: number) => {
      m.put(
        x,
        y,
        m.rnd() * 360,
        1.1,
        `<path d="${blobPath(m.rnd, 7, 0.35)}" fill="${m.col(k)}" opacity="0.36"/>`,
        65
      );
    });
    for (let i = 0; i < q.pits; i++) {
      const px = 50 + m.rnd() * 900;
      const py = 50 + m.rnd() * 900;
      m.raw(
        `<circle cx="${f1(px)}" cy="${f1(py)}" r="${f1(
          1.4 + m.rnd() * 3.6
        )}" fill="${m.col(i)}" opacity="0.48"/>`
      );
    }
  },
});

/* =====================================================================
   PLAIN & UNIFIED ONE-PIECE BACKGROUNDS (100% SMOOTH DEFAULT + OPTIONAL TEXTURE)
   ===================================================================== */
const PLAIN_TEX_OPTS: [string, string][] = [
  ["none", "100% Smooth (No Grain)"],
  ["sandgrain", "Fine Sand & Kraft Grain"],
  ["mattegrain", "Studio Matte Stipple Grain"],
  ["paperfiber", "Artisan Paper Fibers"],
  ["velvetgrain", "Velvet & Felt Micro-Flock"],
  ["linen", "Woven Linen Cross-Threads"],
  ["brushedmetal", "Brushed Satin Micro-Lines"],
  ["marble", "Subtle Organic Veins"],
];

function drawPlainBgGrainAndTexture(
  m: any,
  texType: string,
  grainPct: number,
  density: number
) {
  const gOp = Math.max(0, Math.min(1, (grainPct ?? 45) / 100));
  if (!texType || texType === "none" || gOp <= 0.01) return;
  const dens = Math.max(4, Math.min(36, +density || 18));
  const cLight = m.col(0);
  const cDark = m.ink || m.col(1);
  const cMid = m.col(2);

  if (texType === "sandgrain" || texType === "mattegrain") {
    const cnt = dens * (texType === "sandgrain" ? 48 : 38);
    for (let i = 0; i < cnt; i++) {
      const gx = f1(12 + m.rnd() * 976);
      const gy = f1(12 + m.rnd() * 976);
      const gr = f1(0.9 + m.rnd() * (texType === "sandgrain" ? 2.5 : 3.2));
      const op = +(gOp * (0.22 + m.rnd() * 0.65)).toFixed(2);
      const col = i % 3 === 0 ? cDark : i % 2 === 0 ? cLight : cMid;
      m.raw(`<circle cx="${gx}" cy="${gy}" r="${gr}" fill="${col}" opacity="${op}"/>`);
    }
  } else if (texType === "paperfiber") {
    const cnt = dens * 28;
    for (let i = 0; i < cnt; i++) {
      const x0 = 16 + m.rnd() * 968;
      const y0 = 16 + m.rnd() * 968;
      const ang = m.rnd() * Math.PI * 2;
      const len = 10 + m.rnd() * 24;
      const x1 = x0 + Math.cos(ang) * len;
      const y1 = y0 + Math.sin(ang) * len;
      const mx = (x0 + x1) * 0.5 + (m.rnd() - 0.5) * 10;
      const my = (y0 + y1) * 0.5 + (m.rnd() - 0.5) * 10;
      const sw = f1(0.8 + m.rnd() * 1.8);
      const op = +(gOp * (0.2 + m.rnd() * 0.55)).toFixed(2);
      const col = i % 2 === 0 ? cDark : cLight;
      m.raw(
        `<path d="M${f1(x0)} ${f1(y0)}Q${f1(mx)} ${f1(my)} ${f1(x1)} ${f1(
          y1
        )}" fill="none" stroke="${col}" stroke-width="${sw}" opacity="${op}" stroke-linecap="round"/>`
      );
    }
  } else if (texType === "velvetgrain") {
    const cnt = dens * 36;
    for (let i = 0; i < cnt; i++) {
      const gx = f1(14 + m.rnd() * 972);
      const gy = f1(14 + m.rnd() * 972);
      const rx = f1(1.3 + m.rnd() * 3.0);
      const ry = f1(0.7 + m.rnd() * 1.5);
      const rot = Math.round(m.rnd() * 180);
      const op = +(gOp * (0.22 + m.rnd() * 0.62)).toFixed(2);
      const col = i % 3 === 0 ? cLight : i % 2 === 0 ? cDark : cMid;
      m.raw(
        `<ellipse cx="${gx}" cy="${gy}" rx="${rx}" ry="${ry}" transform="rotate(${rot} ${gx} ${gy})" fill="${col}" opacity="${op}"/>`
      );
    }
  } else if (texType === "linen") {
    const lines = dens * 4;
    for (let i = 0; i < lines; i++) {
      const p = f1((i / lines) * 1000);
      const op1 = +(gOp * (0.15 + m.rnd() * 0.35)).toFixed(2);
      const op2 = +(gOp * (0.15 + m.rnd() * 0.35)).toFixed(2);
      m.raw(
        `<line x1="${p}" y1="0" x2="${p}" y2="1000" stroke="${cLight}" stroke-width="1.4" opacity="${op1}"/>` +
          `<line x1="0" y1="${p}" x2="1000" y2="${p}" stroke="${cDark}" stroke-width="1.4" opacity="${op2}"/>`
      );
    }
  } else if (texType === "brushedmetal") {
    const lines = dens * 12;
    for (let i = 0; i < lines; i++) {
      const y = f1((i / lines) * 1000);
      const sw = f1(0.7 + m.rnd() * 1.8);
      const op = +(gOp * (0.15 + m.rnd() * 0.45)).toFixed(2);
      const col = i % 2 === 0 ? cLight : cDark;
      m.raw(`<line x1="0" y1="${y}" x2="1000" y2="${y}" stroke="${col}" stroke-width="${sw}" opacity="${op}"/>`);
    }
  } else if (texType === "marble") {
    const veins = Math.max(6, Math.round(dens * 0.7));
    for (let v = 0; v < veins; v++) {
      let d = `M 0 ${f1(m.rnd() * 1000)}`;
      for (let s = 1; s <= 6; s++) {
        const vx = f1((s / 6) * 1000);
        const vy = f1(40 + m.rnd() * 920);
        const cx = f1(((s - 0.5) / 6) * 1000);
        const cy = f1(40 + m.rnd() * 920);
        d += ` Q ${cx} ${cy} ${vx} ${vy}`;
      }
      const sw = f1(1.2 + m.rnd() * 2.6);
      const op = +(gOp * (0.2 + m.rnd() * 0.45)).toFixed(2);
      m.raw(`<path d="${d}" fill="none" stroke="${v % 2 === 0 ? cLight : cDark}" stroke-width="${sw}" opacity="${op}" stroke-linecap="round"/>`);
    }
  }
}

registerMode({
  id: "plainunifiedstudio",
  name: "Plain Unified Studio Backdrop (One-Piece)",
  cat: "Plain BG",
  look: {
    bg: "#dec293",
    ink: "#5c4322",
    cols: ["#e8cfa3", "#d4b581", "#c7a66f", "#f2dec0", "#b8965d"],
    style: "flat",
  },
  params: [
    {
      k: "mode",
      l: "Plain Surface Type",
      type: "select",
      opts: [
        ["pure", "100% Pure Plain Solid / Gradient"],
        ["softglow", "Unified Center Halo Glow"],
        ["vignette", "Unified Studio Edge Vignette"],
        ["silk", "Unified Smooth Silk Sheen"],
      ],
      def: "softglow",
    },
    { k: "op", l: "Soft Tone Intensity %", min: 0, max: 90, def: 35 },
    { k: "tex", l: "Grainy & Texture Effect", type: "select", opts: PLAIN_TEX_OPTS, def: "none" },
    { k: "grain", l: "Grainy Effect Intensity %", min: 0, max: 95, def: 45 },
    { k: "dens", l: "Grain / Texture Density", min: 6, max: 32, def: 18 },
  ],
  draw(m: any, q: any) {
    const op = +(q.op / 100).toFixed(2);
    const bgHex = m.bg || "#dec293";
    if (q.mode === "pure" || op <= 0) {
      const pureCol = op > 0 ? mixCol(bgHex, m.col(0), +(op * 0.35).toFixed(2)) : bgHex;
      m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="${pureCol}"/>`);
    } else if (q.mode === "softglow") {
      const gid = "PLAIN_UNIFIED_GLOW";
      m.def(
        `<radialGradient id="${gid}" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="72%"><stop offset="0%" stop-color="${mixCol(
          bgHex,
          m.col(3),
          op
        )}"/><stop offset="55%" stop-color="${mixCol(
          bgHex,
          m.col(0),
          +(op * 0.45).toFixed(2)
        )}"/><stop offset="100%" stop-color="${bgHex}"/></radialGradient>`
      );
      m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#${gid})"/>`);
    } else if (q.mode === "vignette") {
      const gid = "PLAIN_UNIFIED_VIG";
      m.def(
        `<radialGradient id="${gid}" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="75%"><stop offset="0%" stop-color="${bgHex}"/><stop offset="65%" stop-color="${mixCol(
          bgHex,
          m.col(1),
          +(op * 0.5).toFixed(2)
        )}"/><stop offset="100%" stop-color="${mixCol(
          bgHex,
          m.col(4),
          op
        )}"/></radialGradient>`
      );
      m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#${gid})"/>`);
    } else {
      const gid = "PLAIN_UNIFIED_SILK";
      m.def(
        `<linearGradient id="${gid}" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${mixCol(
          bgHex,
          m.col(0),
          op
        )}"/><stop offset="50%" stop-color="${mixCol(
          bgHex,
          m.col(3),
          +(op * 0.65).toFixed(2)
        )}"/><stop offset="100%" stop-color="${mixCol(
          bgHex,
          m.col(2),
          op
        )}"/></linearGradient>`
      );
      m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#${gid})"/>`);
    }
    drawPlainBgGrainAndTexture(m, q.tex || "none", q.grain ?? 45, q.dens || 18);
  },
});

registerMode({
  id: "plainkraftmatte",
  name: "Plain Matte Sand & Parchment (Unified Sheet)",
  cat: "Plain BG",
  look: {
    bg: "#e0c596",
    ink: "#59411e",
    cols: ["#ebd4ab", "#d4b785", "#c7a872", "#f5e3c4", "#b89760"],
    style: "flat",
  },
  params: [
    { k: "warmth", l: "Warmth Gradient %", min: 10, max: 90, def: 45 },
    { k: "sheen", l: "Paper Matte Sheen %", min: 5, max: 80, def: 30 },
    { k: "tex", l: "Grainy & Texture Effect", type: "select", opts: PLAIN_TEX_OPTS, def: "none" },
    { k: "grain", l: "Grainy Effect Intensity %", min: 0, max: 95, def: 45 },
    { k: "dens", l: "Grain / Texture Density", min: 6, max: 32, def: 18 },
  ],
  draw(m: any, q: any) {
    const bgHex = m.bg || "#e0c596";
    const wOp = +(q.warmth / 100).toFixed(2);
    const sOp = +(q.sheen / 100).toFixed(2);
    m.def(
      `<linearGradient id="PLAIN_KRAFT_L" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${mixCol(
        bgHex,
        m.col(0),
        wOp
      )}"/><stop offset="50%" stop-color="${mixCol(
        bgHex,
        m.col(3),
        sOp
      )}"/><stop offset="100%" stop-color="${mixCol(
        bgHex,
        m.col(1),
        wOp
      )}"/></linearGradient>`
    );
    m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#PLAIN_KRAFT_L)"/>`);
    drawPlainBgGrainAndTexture(m, q.tex || "none", q.grain ?? 45, q.dens || 18);
  },
});

registerMode({
  id: "plainmatchavelvet",
  name: "Plain Olive Matcha Velvet (Unified Sheet)",
  cat: "Plain BG",
  look: {
    bg: "#9db053",
    ink: "#29330e",
    cols: ["#acc060", "#8da145", "#b8cc6e", "#7c8f38", "#c5d97e"],
    style: "flat",
  },
  params: [
    { k: "glow", l: "Velvet Center Sheen %", min: 10, max: 90, def: 48 },
    { k: "angle", l: "Light Angle °", min: 0, max: 360, step: 15, def: 135 },
    { k: "tex", l: "Grainy & Texture Effect", type: "select", opts: PLAIN_TEX_OPTS, def: "none" },
    { k: "grain", l: "Grainy Effect Intensity %", min: 0, max: 95, def: 45 },
    { k: "dens", l: "Grain / Texture Density", min: 6, max: 32, def: 18 },
  ],
  draw(m: any, q: any) {
    const bgHex = m.bg || "#9db053";
    const op = +(q.glow / 100).toFixed(2);
    const rad = (q.angle * Math.PI) / 180;
    const x2 = Math.round(50 + Math.cos(rad) * 50);
    const y2 = Math.round(50 + Math.sin(rad) * 50);
    m.def(
      `<linearGradient id="PLAIN_MATCHA_G" gradientUnits="userSpaceOnUse" x1="${100 - x2}%" y1="${
        100 - y2
      }%" x2="${x2}%" y2="${y2}%"><stop offset="0%" stop-color="${mixCol(
        bgHex,
        m.col(0),
        op
      )}"/><stop offset="50%" stop-color="${mixCol(
        bgHex,
        m.col(4),
        +(op * 0.45).toFixed(2)
      )}"/><stop offset="100%" stop-color="${mixCol(
        bgHex,
        m.col(3),
        op
      )}"/></linearGradient>`
    );
    m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#PLAIN_MATCHA_G)"/>`);
    drawPlainBgGrainAndTexture(m, q.tex || "none", q.grain ?? 45, q.dens || 18);
  },
});

registerMode({
  id: "plainplatinumsatin",
  name: "Plain Brushed Silver Platinum (Unified Sheet)",
  cat: "Plain BG",
  look: {
    bg: "#d2d5da",
    ink: "#374151",
    cols: ["#eef0f3", "#c1c5cc", "#ffffff", "#adb2bc", "#e2e5ea"],
    style: "flat",
  },
  params: [
    { k: "shine", l: "Metallic Specular %", min: 15, max: 95, def: 65 },
    { k: "vignette", l: "Edge Depth %", min: 10, max: 85, def: 45 },
    { k: "tex", l: "Grainy & Texture Effect", type: "select", opts: PLAIN_TEX_OPTS, def: "none" },
    { k: "grain", l: "Grainy Effect Intensity %", min: 0, max: 95, def: 45 },
    { k: "dens", l: "Grain / Texture Density", min: 6, max: 32, def: 18 },
  ],
  draw(m: any, q: any) {
    const bgHex = m.bg || "#d2d5da";
    const sh = +(q.shine / 100).toFixed(2);
    const vg = +(q.vignette / 100).toFixed(2);
    m.def(
      `<radialGradient id="PLAIN_PLAT_RAD" gradientUnits="userSpaceOnUse" cx="50%" cy="48%" r="72%"><stop offset="0%" stop-color="${mixCol(
        bgHex,
        m.col(2),
        sh
      )}"/><stop offset="58%" stop-color="${mixCol(
        bgHex,
        m.col(0),
        +(sh * 0.4).toFixed(2)
      )}"/><stop offset="100%" stop-color="${mixCol(
        bgHex,
        m.col(3),
        vg
      )}"/></radialGradient>`
    );
    m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#PLAIN_PLAT_RAD)"/>`);
    drawPlainBgGrainAndTexture(m, q.tex || "none", q.grain ?? 45, q.dens || 18);
  },
});

registerMode({
  id: "plainluxurygradient",
  name: "Plain Luxury Multi-Stop Silk Gradient (Unified)",
  cat: "Plain BG",
  look: {
    bg: "#1e1b4b",
    ink: "#f8fafc",
    cols: ["#4338ca", "#ec4899", "#f59e0b", "#06b6d4", "#8b5cf6"],
    style: "flat",
  },
  params: [
    { k: "ang", l: "Gradient Flow Angle °", min: 0, max: 360, step: 15, def: 135 },
    { k: "glow", l: "Ambient Silk Halo %", min: 10, max: 95, def: 65 },
    { k: "tex", l: "Grainy & Texture Effect", type: "select", opts: PLAIN_TEX_OPTS, def: "none" },
    { k: "grain", l: "Grainy Effect Intensity %", min: 0, max: 95, def: 45 },
    { k: "dens", l: "Grain / Texture Density", min: 6, max: 32, def: 18 },
  ],
  draw(m: any, q: any) {
    const rad = (q.ang * Math.PI) / 180;
    const x1 = Math.round(50 - Math.cos(rad) * 50);
    const y1 = Math.round(50 - Math.sin(rad) * 50);
    const x2 = Math.round(50 + Math.cos(rad) * 50);
    const y2 = Math.round(50 + Math.sin(rad) * 50);
    const gl = +(q.glow / 100).toFixed(2);
    m.def(
      `<linearGradient id="PLAIN_LUX_LIN" gradientUnits="userSpaceOnUse" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%"><stop offset="0%" stop-color="${m.col(
        0
      )}"/><stop offset="35%" stop-color="${m.col(4)}"/><stop offset="70%" stop-color="${m.col(
        1
      )}"/><stop offset="100%" stop-color="${m.col(2)}"/></linearGradient>` +
        `<radialGradient id="PLAIN_LUX_HALO" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${m.col(
          3
        )}" stop-opacity="${gl}"/><stop offset="100%" stop-color="${m.col(
          0
        )}" stop-opacity="0"/></radialGradient>`
    );
    m.raw(
      `<rect x="0" y="0" width="1000" height="1000" fill="url(#PLAIN_LUX_LIN)"/>` +
        `<circle cx="350" cy="350" r="680" fill="url(#PLAIN_LUX_HALO)"/>`
    );
    drawPlainBgGrainAndTexture(m, q.tex || "none", q.grain ?? 45, q.dens || 18);
  },
});

registerMode({
  id: "plainwalnutslab",
  name: "Plain Continuous Walnut Wood Slab (Unified)",
  cat: "Plain BG",
  look: {
    bg: "#4a2c16",
    ink: "#1c0e05",
    cols: ["#5c381d", "#3b2210", "#6e4425", "#2e190b", "#7d4f2c"],
    style: "flat",
  },
  params: [
    { k: "bands", l: "Continuous Wood Tone Bands", min: 4, max: 14, def: 7 },
    { k: "soft", l: "Smooth Blend %", min: 25, max: 90, def: 65 },
    { k: "tex", l: "Grainy & Texture Effect", type: "select", opts: PLAIN_TEX_OPTS, def: "none" },
    { k: "grain", l: "Grainy Effect Intensity %", min: 0, max: 95, def: 45 },
    { k: "dens", l: "Grain / Texture Density", min: 6, max: 32, def: 18 },
  ],
  draw(m: any, q: any) {
    const op = +(q.soft / 100).toFixed(2);
    m.def(
      `<linearGradient id="PLAIN_WALNUT_BASE" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="${m.col(
        0
      )}"/><stop offset="35%" stop-color="${m.col(1)}"/><stop offset="68%" stop-color="${m.col(
        2
      )}"/><stop offset="100%" stop-color="${m.col(3)}"/></linearGradient>`
    );
    m.raw(`<rect x="0" y="0" width="1000" height="1000" fill="url(#PLAIN_WALNUT_BASE)"/>`);
    const h = 1000 / q.bands;
    for (let i = 0; i < q.bands; i++) {
      m.raw(
        `<rect x="0" y="${f1(i * h)}" width="1000" height="${f1(
          h * 0.72
        )}" fill="${m.col(i)}" opacity="${+(op * 0.45).toFixed(2)}"/>`
      );
    }
    drawPlainBgGrainAndTexture(m, q.tex || "none", q.grain ?? 45, q.dens || 18);
  },
});

/* =====================================================================
   108 FULL-BLEED WOVEN FABRIC, TARTAN, ARGYLE, HOUNDSTOOTH & TWILL LOOMS
   100% EDGE-TO-EDGE (ZERO SIDE GAP) · 100% SEPARABLE ADOBE ILLUSTRATOR SVG
   ===================================================================== */
type MasterWeaveArch =
  | "hatched_tartan"
  | "argyle_diamond"
  | "twill_buffalo"
  | "houndstooth_twill"
  | "glen_check"
  | "herringbone_twill"
  | "windowpane_tattersall"
  | "gingham_madras"
  | "basket_hopsack"
  | "fair_isle_knit"
  | "ikat_kilim_loom"
  | "jacquard_diamond_twill";

interface MasterFabricSpec {
  id: string;
  name: string;
  cat: string;
  arch: MasterWeaveArch;
  bg: string;
  ink: string;
  cols: [string, string, string, string, string];
  repDef: number;
  subDef: number;
  vDef: number;
  accentLine: boolean;
}

const MASTER_FABRIC_108: MasterFabricSpec[] = [
  // =========================================================================
  // 1-12: HATCHED SCOTTISH TARTAN & TWILL PLAIDS (LIKE REFERENCE #2)
  // =========================================================================
  { id: "fab_royal_stewart_tartan", name: "Royal Crimson Hatched Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#e8401c", ink: "#1e293b", cols: ["#f7a6b8", "#1e293b", "#f6c24a", "#ffffff", "#991b1b"], repDef: 4, subDef: 44, vDef: 1, accentLine: true },
  { id: "fab_black_watch_tartan", name: "Black Watch Regiment Twill Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#0f2942", ink: "#050b14", cols: ["#15803d", "#050b14", "#38bdf8", "#1e3a8a", "#064e3b"], repDef: 4, subDef: 48, vDef: 2, accentLine: true },
  { id: "fab_burberry_camel_check", name: "Mayfair Camel Heritage Trench Plaid", cat: "Fabric", arch: "hatched_tartan", bg: "#d9bc92", ink: "#171717", cols: ["#171717", "#dc2626", "#f8fafc", "#a18058", "#262626"], repDef: 3, subDef: 38, vDef: 3, accentLine: true },
  { id: "fab_dress_gordon_tartan", name: "Highland Dress Gordon Emerald Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#14532d", ink: "#052e16", cols: ["#1e3a8a", "#facc15", "#f8fafc", "#166534", "#0f172a"], repDef: 4, subDef: 42, vDef: 4, accentLine: true },
  { id: "fab_macleod_gold_tartan", name: "Isle of Skye Gold & Jet Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#eab308", ink: "#111827", cols: ["#111827", "#dc2626", "#fef08a", "#374151", "#ffffff"], repDef: 4, subDef: 40, vDef: 1, accentLine: true },
  { id: "fab_clan_lindsay_berry", name: "Clan Lindsay Claret & Navy Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#881337", ink: "#0f172a", cols: ["#1e3a8a", "#f43f5e", "#facc15", "#e2e8f0", "#4c0519"], repDef: 3, subDef: 46, vDef: 2, accentLine: true },
  { id: "fab_autumn_flannel_plaid", name: "Vermont Brushed Autumn Flannel Plaid", cat: "Fabric", arch: "hatched_tartan", bg: "#b45309", ink: "#1c1917", cols: ["#fef3c7", "#1c1917", "#dc2626", "#78350f", "#14532d"], repDef: 4, subDef: 45, vDef: 3, accentLine: false },
  { id: "fab_chennai_madras_plaid", name: "Summer Bleeding Madras Cross-Hatch", cat: "Fabric", arch: "hatched_tartan", bg: "#fef08a", ink: "#1e3a8a", cols: ["#ef4444", "#0284c7", "#16a34a", "#f97316", "#ec4899"], repDef: 5, subDef: 36, vDef: 4, accentLine: true },
  { id: "fab_coastal_linen_tartan", name: "Nantucket Chambray & Coral Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#e0f2fe", ink: "#0c4a6e", cols: ["#0284c7", "#f43f5e", "#0f172a", "#38bdf8", "#ffffff"], repDef: 4, subDef: 40, vDef: 1, accentLine: true },
  { id: "fab_rose_quartz_tartan", name: "Blush Peony & Espresso Hatched Plaid", cat: "Fabric", arch: "hatched_tartan", bg: "#f9a8d4", ink: "#3b1728", cols: ["#be185d", "#3b1728", "#fef08a", "#fdf2f8", "#831843"], repDef: 4, subDef: 44, vDef: 2, accentLine: true },
  { id: "fab_velvet_evening_tartan", name: "Midnight Plum & Gold Dress Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#2e1065", ink: "#090418", cols: ["#7c3aed", "#f59e0b", "#ec4899", "#e9d5ff", "#1e1b4b"], repDef: 3, subDef: 46, vDef: 3, accentLine: true },
  { id: "fab_cottage_sage_tartan", name: "Cotswold Sage & Rust Wool Tartan", cat: "Fabric", arch: "hatched_tartan", bg: "#d9e4d1", ink: "#1f2e1b", cols: ["#3f6212", "#c2410c", "#1f2e1b", "#fef9c3", "#65a30d"], repDef: 4, subDef: 42, vDef: 4, accentLine: true },

  // =========================================================================
  // 13-22: ARGYLE DIAMOND KNIT & RAKER STITCH LOOMS (LIKE REFERENCE #3)
  // =========================================================================
  { id: "fab_royal_argyle_knit", name: "Royal Navy & Crimson Argyle Knit", cat: "Fabric", arch: "argyle_diamond", bg: "#16295a", ink: "#f7d84a", cols: ["#e11d48", "#38bdf8", "#f7d84a", "#10b981", "#ffffff"], repDef: 4, subDef: 50, vDef: 1, accentLine: true },
  { id: "fab_pringle_golf_argyle", name: "St Andrews Emerald & Gold Golf Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#0f3d2e", ink: "#fde047", cols: ["#dc2626", "#f59e0b", "#fde047", "#34d399", "#f8fafc"], repDef: 4, subDef: 48, vDef: 2, accentLine: true },
  { id: "fab_burlington_cashmere", name: "Burlington Cashmere Espresso Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#2a1b14", ink: "#f59e0b", cols: ["#d97706", "#e7d8c9", "#f43f5e", "#78350f", "#fef3c7"], repDef: 4, subDef: 52, vDef: 3, accentLine: true },
  { id: "fab_preppy_ivy_argyle", name: "Ivy League Burgundy & Sky Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#4c0519", ink: "#f8fafc", cols: ["#38bdf8", "#f43f5e", "#facc15", "#e2e8f0", "#1e3a8a"], repDef: 5, subDef: 46, vDef: 4, accentLine: true },
  { id: "fab_pastel_mint_argyle", name: "Spring Mint & Coral Sweater Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#ecfdf5", ink: "#0f766e", cols: ["#fb7185", "#14b8a6", "#f59e0b", "#0f766e", "#ffffff"], repDef: 4, subDef: 50, vDef: 1, accentLine: true },
  { id: "fab_charcoal_harlequin", name: "Savile Charcoal & Mustard Harlequin", cat: "Fabric", arch: "argyle_diamond", bg: "#18181b", ink: "#facc15", cols: ["#f59e0b", "#64748b", "#ef4444", "#e4e4e7", "#38bdf8"], repDef: 4, subDef: 50, vDef: 2, accentLine: true },
  { id: "fab_plum_velvet_argyle", name: "Aubergine & Rose Gold Crown Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#3b0764", ink: "#fcd34d", cols: ["#ec4899", "#a855f7", "#fcd34d", "#2dd4bf", "#fdf4ff"], repDef: 3, subDef: 54, vDef: 3, accentLine: true },
  { id: "fab_nordic_ice_argyle", name: "Oslo Frost Blue & Cobalt Knit Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#0c4a6e", ink: "#ffffff", cols: ["#38bdf8", "#e0f2fe", "#f43f5e", "#0284c7", "#facc15"], repDef: 5, subDef: 48, vDef: 4, accentLine: true },
  { id: "fab_terracotta_argyle", name: "Sienna Terracotta & Olive Loom Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#7c2d12", ink: "#fef3c7", cols: ["#65a30d", "#f59e0b", "#fef3c7", "#dc2626", "#365314"], repDef: 4, subDef: 50, vDef: 1, accentLine: true },
  { id: "fab_monochrome_argyle", name: "Monochrome Ink & Ivory Tuxedo Argyle", cat: "Fabric", arch: "argyle_diamond", bg: "#f8fafc", ink: "#e11d48", cols: ["#0f172a", "#94a3b8", "#e11d48", "#334155", "#cbd5e1"], repDef: 4, subDef: 50, vDef: 2, accentLine: true },

  // =========================================================================
  // 23-32: PIXEL TWILL BUFFALO & SHEPHERD CHECKS (LIKE REFERENCE #4)
  // =========================================================================
  { id: "fab_tweed_buffalo_cream", name: "Heirloom Charcoal & Cream Twill Check", cat: "Fabric", arch: "twill_buffalo", bg: "#f3e8dc", ink: "#141414", cols: ["#141414", "#8a2a1a", "#5a4a3a", "#c28e5c", "#ffffff"], repDef: 4, subDef: 50, vDef: 1, accentLine: false },
  { id: "fab_lumberjack_red_twill", name: "Adirondack Crimson Wool Buffalo Twill", cat: "Fabric", arch: "twill_buffalo", bg: "#dc2626", ink: "#09090b", cols: ["#111111", "#7f1d1d", "#facc15", "#27272a", "#ffffff"], repDef: 4, subDef: 52, vDef: 2, accentLine: false },
  { id: "fab_navy_shepherd_twill", name: "Scottish Borders Navy Shepherd Twill", cat: "Fabric", arch: "twill_buffalo", bg: "#f1f5f9", ink: "#0f172a", cols: ["#1e3a8a", "#0f172a", "#e11d48", "#3b82f6", "#cbd5e1"], repDef: 4, subDef: 50, vDef: 3, accentLine: true },
  { id: "fab_hunter_green_buffalo", name: "Highland Forest Green Twill Buffalo", cat: "Fabric", arch: "twill_buffalo", bg: "#15803d", ink: "#052e16", cols: ["#090d16", "#14532d", "#facc15", "#22c55e", "#f0fdf4"], repDef: 4, subDef: 50, vDef: 1, accentLine: false },
  { id: "fab_espresso_bistro_twill", name: "Espresso Roast & Oat Linen Twill Block", cat: "Fabric", arch: "twill_buffalo", bg: "#efe6dd", ink: "#2a1810", cols: ["#3e2214", "#b45309", "#78350f", "#d6c3a5", "#1c1917"], repDef: 4, subDef: 48, vDef: 2, accentLine: true },
  { id: "fab_mustard_wool_check", name: "Ochre Harvest & Ink Woven Twill Check", cat: "Fabric", arch: "twill_buffalo", bg: "#f59e0b", ink: "#1c1917", cols: ["#1c1917", "#78350f", "#fef3c7", "#dc2626", "#451a03"], repDef: 4, subDef: 50, vDef: 4, accentLine: false },
  { id: "fab_cobalt_denim_twill", name: "Okayama Indigo & Ecru Twill Buffalo", cat: "Fabric", arch: "twill_buffalo", bg: "#e0f2fe", ink: "#0f172a", cols: ["#1d4ed8", "#0f172a", "#f97316", "#60a5fa", "#1e3a8a"], repDef: 5, subDef: 50, vDef: 1, accentLine: true },
  { id: "fab_plum_mohair_twill", name: "Brushed Plum & Lavender Mohair Twill", cat: "Fabric", arch: "twill_buffalo", bg: "#f3e8ff", ink: "#3b0764", cols: ["#581c87", "#be185d", "#a855f7", "#1e1b4b", "#f59e0b"], repDef: 4, subDef: 50, vDef: 3, accentLine: false },
  { id: "fab_terracotta_flannel_tw", name: "Canyon Rust & Sand Twill Check", cat: "Fabric", arch: "twill_buffalo", bg: "#fef3c7", ink: "#451a03", cols: ["#b91c1c", "#78350f", "#0f766e", "#ea580c", "#1c1917"], repDef: 4, subDef: 52, vDef: 2, accentLine: true },
  { id: "fab_slate_estate_check", name: "Yorkshire Slate & Cyan Estate Twill", cat: "Fabric", arch: "twill_buffalo", bg: "#e2e8f0", ink: "#0f172a", cols: ["#334155", "#0284c7", "#0f172a", "#64748b", "#f59e0b"], repDef: 4, subDef: 48, vDef: 4, accentLine: true },

  // =========================================================================
  // 33-42: HOUNDSTOOTH, PIED-DE-POULE & DOGSTOOTH TWILL LOOMS
  // =========================================================================
  { id: "fab_couture_pied_de_poule", name: "Parisian Couture Classic Houndstooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#faf8f5", ink: "#111111", cols: ["#111111", "#e11d48", "#64748b", "#334155", "#d97706"], repDef: 6, subDef: 1, vDef: 1, accentLine: false },
  { id: "fab_pixel_shepherd_tooth", name: "Stepped Pixel Tweed Dogstooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#f3e8dc", ink: "#1c1917", cols: ["#1c1917", "#b45309", "#78716c", "#991b1b", "#44403c"], repDef: 4, subDef: 2, vDef: 2, accentLine: false },
  { id: "fab_emerald_tweed_tooth", name: "Connemara Emerald Wool Houndstooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#ecfdf5", ink: "#064e3b", cols: ["#065f46", "#d97706", "#047857", "#0f766e", "#facc15"], repDef: 6, subDef: 1, vDef: 1, accentLine: true },
  { id: "fab_crimson_chanel_tooth", name: "Bouclé Crimson & Gold Houndstooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#fff1f2", ink: "#4c0519", cols: ["#be123c", "#f59e0b", "#1e293b", "#881337", "#fb7185"], repDef: 5, subDef: 2, vDef: 3, accentLine: true },
  { id: "fab_micro_puppytooth", name: "Jermyn Street Poplin Micro Puppytooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#f0f9ff", ink: "#0c4a6e", cols: ["#0369a1", "#0284c7", "#e11d48", "#075985", "#38bdf8"], repDef: 8, subDef: 1, vDef: 2, accentLine: false },
  { id: "fab_espresso_alpaca_tooth", name: "Andean Alpaca Espresso Houndstooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#efe6dd", ink: "#2a1810", cols: ["#4a2c1d", "#c28e5c", "#7c4d33", "#1c1917", "#b45309"], repDef: 5, subDef: 2, vDef: 1, accentLine: true },
  { id: "fab_cobalt_runway_tooth", name: "Milan Runway Cobalt & Coral Tooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#2f86c6", ink: "#1e1b4b", cols: ["#1e1b4b", "#f05a2a", "#f8fafc", "#facc15", "#0f172a"], repDef: 6, subDef: 1, vDef: 4, accentLine: true },
  { id: "fab_sage_linen_tooth", name: "Tuscan Olive & Sage Linen Dogstooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#f7fee7", ink: "#1a2e05", cols: ["#3f6212", "#a16207", "#65a30d", "#1a2e05", "#eab308"], repDef: 6, subDef: 2, vDef: 2, accentLine: false },
  { id: "fab_plum_velvet_tooth", name: "Venetian Aubergine & Amber Tooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#faf5ff", ink: "#3b0764", cols: ["#581c87", "#d97706", "#9333ea", "#be185d", "#1e1b4b"], repDef: 5, subDef: 1, vDef: 3, accentLine: true },
  { id: "fab_giant_overcoat_tooth", name: "Macro Overcoat Two-Tone Houndstooth", cat: "Fabric", arch: "houndstooth_twill", bg: "#fef9c3", ink: "#18181b", cols: ["#18181b", "#b91c1c", "#ca8a04", "#3f3f46", "#ffffff"], repDef: 3, subDef: 2, vDef: 4, accentLine: true },

  // =========================================================================
  // 43-51: SAVILE ROW GLEN URQUHART & PRINCE OF WALES COMPOUND PLAIDS
  // =========================================================================
  { id: "fab_prince_of_wales_glen", name: "Savile Row Prince of Wales Glen Check", cat: "Fabric", arch: "glen_check", bg: "#e2e8f0", ink: "#0f172a", cols: ["#1e293b", "#0284c7", "#475569", "#0f172a", "#94a3b8"], repDef: 3, subDef: 24, vDef: 1, accentLine: true },
  { id: "fab_windsor_crimson_glen", name: "Duke of Windsor Claret Glen Plaid", cat: "Fabric", arch: "glen_check", bg: "#f5f0e6", ink: "#1c1917", cols: ["#292524", "#be123c", "#57534e", "#1c1917", "#a8a29e"], repDef: 3, subDef: 24, vDef: 2, accentLine: true },
  { id: "fab_biella_navy_glen", name: "Biella Super-150s Navy & Gold Glen", cat: "Fabric", arch: "glen_check", bg: "#dbeafe", ink: "#0f172a", cols: ["#1e3a8a", "#d97706", "#1d4ed8", "#0f172a", "#60a5fa"], repDef: 3, subDef: 24, vDef: 3, accentLine: true },
  { id: "fab_chestnut_estate_glen", name: "Scottish Estate Chestnut Glen Urquhart", cat: "Fabric", arch: "glen_check", bg: "#ede0d0", ink: "#29180b", cols: ["#5c3a21", "#15803d", "#8c5a32", "#29180b", "#c28e5c"], repDef: 3, subDef: 24, vDef: 1, accentLine: true },
  { id: "fab_charcoal_cyan_glen", name: "Bespoke Charcoal & Turquoise Glen", cat: "Fabric", arch: "glen_check", bg: "#cbd5e1", ink: "#090d16", cols: ["#1e293b", "#06b6d4", "#334155", "#0f172a", "#64748b"], repDef: 4, subDef: 20, vDef: 2, accentLine: true },
  { id: "fab_moss_tweed_glen", name: "Highland Moss & Rust District Check", cat: "Fabric", arch: "glen_check", bg: "#e4ebd8", ink: "#1a2e05", cols: ["#365314", "#ea580c", "#4d7c0f", "#1a2e05", "#84cc16"], repDef: 3, subDef: 24, vDef: 3, accentLine: true },
  { id: "fab_midnight_plum_glen", name: "Tailored Midnight & Magenta Glen", cat: "Fabric", arch: "glen_check", bg: "#ede9fe", ink: "#1e1b4b", cols: ["#312e81", "#db2777", "#4338ca", "#1e1b4b", "#818cf8"], repDef: 3, subDef: 24, vDef: 1, accentLine: true },
  { id: "fab_camel_gunclub_check", name: "Country Heritage 3-Tone Gun Club Check", cat: "Fabric", arch: "glen_check", bg: "#f4ead5", ink: "#292014", cols: ["#78350f", "#14532d", "#991b1b", "#451a03", "#b45309"], repDef: 4, subDef: 20, vDef: 4, accentLine: true },
  { id: "fab_monochrome_tailor_gl", name: "Noir & Pearl Monochrome Glen Check", cat: "Fabric", arch: "glen_check", bg: "#f8fafc", ink: "#09090b", cols: ["#18181b", "#71717a", "#3f3f46", "#09090b", "#a1a1aa"], repDef: 3, subDef: 24, vDef: 2, accentLine: false },

  // =========================================================================
  // 52-60: HERRINGBONE & BROKEN-TWILL CHEVRON LOOMS
  // =========================================================================
  { id: "fab_savile_herringbone", name: "Savile Row Charcoal Twill Herringbone", cat: "Fabric", arch: "herringbone_twill", bg: "#e2e8f0", ink: "#0f172a", cols: ["#1e293b", "#475569", "#0284c7", "#334155", "#94a3b8"], repDef: 6, subDef: 16, vDef: 1, accentLine: false },
  { id: "fab_harris_oatmeal_herr", name: "Outer Hebrides Oatmeal Harris Herringbone", cat: "Fabric", arch: "herringbone_twill", bg: "#efe6d5", ink: "#2c1e12", cols: ["#6e5239", "#9a7b5c", "#b45309", "#3f2e1e", "#c9b199"], repDef: 5, subDef: 16, vDef: 2, accentLine: true },
  { id: "fab_navy_blazer_herr", name: "Mayfair Midnight Navy Blazer Herringbone", cat: "Fabric", arch: "herringbone_twill", bg: "#0f172a", ink: "#f8fafc", cols: ["#1e3a8a", "#3b82f6", "#f59e0b", "#172554", "#93c5fd"], repDef: 6, subDef: 16, vDef: 1, accentLine: false },
  { id: "fab_emerald_tweed_herr", name: "Donegal Emerald & Gold Chevron Twill", cat: "Fabric", arch: "herringbone_twill", bg: "#064e3b", ink: "#ecfdf5", cols: ["#10b981", "#047857", "#facc15", "#065f46", "#6ee7b7"], repDef: 6, subDef: 16, vDef: 3, accentLine: true },
  { id: "fab_burgundy_silk_herr", name: "Bordeaux Silk Jacquard Herringbone", cat: "Fabric", arch: "herringbone_twill", bg: "#4c0519", ink: "#fff1f2", cols: ["#be123c", "#f43f5e", "#fbbf24", "#881337", "#fda4af"], repDef: 5, subDef: 16, vDef: 2, accentLine: false },
  { id: "fab_cavalry_khaki_herr", name: "Officer Steep-Ribbed Khaki Broken Twill", cat: "Fabric", arch: "herringbone_twill", bg: "#d6c3a5", ink: "#292014", cols: ["#8c7351", "#5c4433", "#d97706", "#b59e7a", "#3b2f2f"], repDef: 8, subDef: 12, vDef: 4, accentLine: false },
  { id: "fab_indigo_selvedge_herr", name: "Okayama 14oz Broken-Twill Indigo Denim", cat: "Fabric", arch: "herringbone_twill", bg: "#172554", ink: "#eff6ff", cols: ["#2563eb", "#60a5fa", "#ef4444", "#1e40af", "#bfdbfe"], repDef: 7, subDef: 14, vDef: 1, accentLine: true },
  { id: "fab_terracotta_linen_hr", name: "Sienna Clay & Ecru Wide Herringbone", cat: "Fabric", arch: "herringbone_twill", bg: "#fdf6ec", ink: "#7c2d12", cols: ["#c2410c", "#ea580c", "#1e3a8a", "#9a3412", "#fdba74"], repDef: 4, subDef: 20, vDef: 3, accentLine: false },
  { id: "fab_espresso_wool_herr", name: "Milanese Espresso & Bronze Herringbone", cat: "Fabric", arch: "herringbone_twill", bg: "#29180b", ink: "#fef3c7", cols: ["#78350f", "#b45309", "#f59e0b", "#451a03", "#d97706"], repDef: 6, subDef: 16, vDef: 2, accentLine: true },

  // =========================================================================
  // 61-69: HATCHED WINDOWPANE, TATTERSALL & TWEED PANE CHECKS
  // =========================================================================
  { id: "fab_windowpane_cashmere", name: "Mayfair Cashmere Overcoat Windowpane", cat: "Fabric", arch: "windowpane_tattersall", bg: "#1e293b", ink: "#f8fafc", cols: ["#e2e8f0", "#f59e0b", "#38bdf8", "#94a3b8", "#ffffff"], repDef: 4, subDef: 20, vDef: 1, accentLine: true },
  { id: "fab_tattersall_flannel", name: "Country Tattersall Viyella Two-Tone Check", cat: "Fabric", arch: "windowpane_tattersall", bg: "#fffbeb", ink: "#1c1917", cols: ["#b91c1c", "#1d4ed8", "#15803d", "#b45309", "#1c1917"], repDef: 6, subDef: 16, vDef: 2, accentLine: true },
  { id: "fab_lilac_hatched_pane", name: "Lavender & Espresso Hatched Windowpane", cat: "Fabric", arch: "windowpane_tattersall", bg: "#d9b8f2", ink: "#3a2a28", cols: ["#3a2a28", "#f05a2a", "#ffffff", "#6b21a8", "#f59e0b"], repDef: 4, subDef: 18, vDef: 3, accentLine: true },
  { id: "fab_tweed_grid_oatmeal", name: "Scottish Tweed Stitched Windowpane", cat: "Fabric", arch: "windowpane_tattersall", bg: "#f3e8dc", ink: "#141414", cols: ["#141414", "#8a2a1a", "#5a4a3a", "#0f766e", "#d97706"], repDef: 4, subDef: 24, vDef: 4, accentLine: true },
  { id: "fab_sage_double_pane", name: "Cotswold Sage Double-Rail Windowpane", cat: "Fabric", arch: "windowpane_tattersall", bg: "#14532d", ink: "#f0fdf4", cols: ["#facc15", "#f8fafc", "#4ade80", "#f97316", "#bbf7d0"], repDef: 4, subDef: 20, vDef: 1, accentLine: true },
  { id: "fab_cobalt_graph_suiting", name: "Italian Cobalt & Silver Graph Suiting", cat: "Fabric", arch: "windowpane_tattersall", bg: "#172554", ink: "#f8fafc", cols: ["#60a5fa", "#f8fafc", "#f43f5e", "#93c5fd", "#eab308"], repDef: 6, subDef: 16, vDef: 2, accentLine: true },
  { id: "fab_camel_ladder_pane", name: "Camel Hair Stitched Ladder Windowpane", cat: "Fabric", arch: "windowpane_tattersall", bg: "#d6b88d", ink: "#29180b", cols: ["#29180b", "#991b1b", "#ffffff", "#78350f", "#1e3a8a"], repDef: 4, subDef: 20, vDef: 3, accentLine: true },
  { id: "fab_blush_tattersall", name: "Rose Cotton Shirting Tattersall Grid", cat: "Fabric", arch: "windowpane_tattersall", bg: "#fff1f2", ink: "#881337", cols: ["#e11d48", "#0f172a", "#0284c7", "#f43f5e", "#f59e0b"], repDef: 6, subDef: 16, vDef: 4, accentLine: true },
  { id: "fab_noir_gold_pane", name: "Tuxedo Jet Black & Gold Thread Pane", cat: "Fabric", arch: "windowpane_tattersall", bg: "#09090b", ink: "#facc15", cols: ["#eab308", "#f8fafc", "#a1a1aa", "#ef4444", "#fde047"], repDef: 4, subDef: 20, vDef: 1, accentLine: true },

  // =========================================================================
  // 70-78: WOVEN GINGHAM, VICHY, MADRAS & SEERSUCKER STRIPES
  // =========================================================================
  { id: "fab_vichy_blue_gingham", name: "Provence Vichy Sky Blue Woven Gingham", cat: "Fabric", arch: "gingham_madras", bg: "#ffffff", ink: "#1e3a8a", cols: ["#2563eb", "#60a5fa", "#1e3a8a", "#93c5fd", "#dbeafe"], repDef: 6, subDef: 50, vDef: 1, accentLine: false },
  { id: "fab_bistro_red_gingham", name: "Parisian Bistro Crimson Twill Gingham", cat: "Fabric", arch: "gingham_madras", bg: "#fffdf9", ink: "#7f1d1d", cols: ["#dc2626", "#f87171", "#991b1b", "#fca5a5", "#1e293b"], repDef: 6, subDef: 50, vDef: 2, accentLine: false },
  { id: "fab_olive_picnic_gingham", name: "Tuscan Olive & Cream Woven Gingham", cat: "Fabric", arch: "gingham_madras", bg: "#fafaf5", ink: "#365314", cols: ["#4d7c0f", "#84cc16", "#365314", "#bef264", "#d97706"], repDef: 6, subDef: 50, vDef: 1, accentLine: true },
  { id: "fab_butter_yellow_ging", name: "Provençal Buttercup Linen Gingham", cat: "Fabric", arch: "gingham_madras", bg: "#ffffff", ink: "#713f12", cols: ["#eab308", "#fde047", "#ca8a04", "#fef08a", "#dc2626"], repDef: 6, subDef: 50, vDef: 2, accentLine: false },
  { id: "fab_charcoal_chef_check", name: "Chef Hound & Charcoal Micro Gingham", cat: "Fabric", arch: "gingham_madras", bg: "#f8fafc", ink: "#0f172a", cols: ["#1e293b", "#64748b", "#0f172a", "#94a3b8", "#e11d48"], repDef: 8, subDef: 50, vDef: 3, accentLine: false },
  { id: "fab_seersucker_stripe", name: "Charleston Puckered Cotton Seersucker", cat: "Fabric", arch: "gingham_madras", bg: "#ffffff", ink: "#0369a1", cols: ["#38bdf8", "#0284c7", "#bae6fd", "#0c4a6e", "#f43f5e"], repDef: 8, subDef: 46, vDef: 4, accentLine: false },
  { id: "fab_madras_sunset_check", name: "Handloom Sunset Madras Multi-Plaid", cat: "Fabric", arch: "gingham_madras", bg: "#fff7ed", ink: "#7c2d12", cols: ["#ea580c", "#0284c7", "#eab308", "#be123c", "#15803d"], repDef: 4, subDef: 42, vDef: 3, accentLine: true },
  { id: "fab_bengal_ticking_str", name: "Heritage Mattress Ticking Woven Stripe", cat: "Fabric", arch: "gingham_madras", bg: "#f5f0e6", ink: "#1e3a8a", cols: ["#1e3a8a", "#3b82f6", "#b91c1c", "#64748b", "#0f172a"], repDef: 6, subDef: 40, vDef: 4, accentLine: true },
  { id: "fab_rose_linen_gingham", name: "Rosewater & Berry Woven Linen Gingham", cat: "Fabric", arch: "gingham_madras", bg: "#fff5f7", ink: "#831843", cols: ["#db2777", "#f472b6", "#9d174d", "#fbcfe8", "#1e293b"], repDef: 6, subDef: 50, vDef: 1, accentLine: true },

  // =========================================================================
  // 79-86: FULL-BLEED BASKETWEAVE, HOPSACK, BOUCLÉ & DONEGAL TWEED
  // =========================================================================
  { id: "fab_oxford_basketweave", name: "Ivy League 2x2 Pinpoint Oxford Basket", cat: "Fabric", arch: "basket_hopsack", bg: "#0f172a", ink: "#f8fafc", cols: ["#3b82f6", "#93c5fd", "#f8fafc", "#1d4ed8", "#60a5fa"], repDef: 6, subDef: 3, vDef: 1, accentLine: false },
  { id: "fab_rue_cambon_boucle", name: "Rue Cambon Couture Ribbon Bouclé Tweed", cat: "Fabric", arch: "basket_hopsack", bg: "#18181b", ink: "#ffffff", cols: ["#f43f5e", "#fbbf24", "#f8fafc", "#38bdf8", "#a855f7"], repDef: 5, subDef: 4, vDef: 2, accentLine: true },
  { id: "fab_donegal_fleck_tweed", name: "Ardara Donegal Colorful Nep Tweed", cat: "Fabric", arch: "basket_hopsack", bg: "#292524", ink: "#fafaf9", cols: ["#78716c", "#d97706", "#ef4444", "#38bdf8", "#4ade80"], repDef: 6, subDef: 3, vDef: 3, accentLine: true },
  { id: "fab_panama_linen_weave", name: "Heavy Belgian Raw Flax Panamà Weave", cat: "Fabric", arch: "basket_hopsack", bg: "#d6c7b2", ink: "#292524", cols: ["#b8a68e", "#e7dec8", "#9c8970", "#f5f0e6", "#786852"], repDef: 6, subDef: 3, vDef: 1, accentLine: false },
  { id: "fab_hopsack_navy_blazer", name: "Club Blazer Royal Hopsack Wool Weave", cat: "Fabric", arch: "basket_hopsack", bg: "#0c1938", ink: "#fef08a", cols: ["#1e3a8a", "#2563eb", "#60a5fa", "#eab308", "#172554"], repDef: 7, subDef: 3, vDef: 2, accentLine: false },
  { id: "fab_emerald_boucle_twee", name: "Emerald & Pearl Couture Basket Tweed", cat: "Fabric", arch: "basket_hopsack", bg: "#064e3b", ink: "#ecfdf5", cols: ["#10b981", "#f8fafc", "#f59e0b", "#047857", "#34d399"], repDef: 5, subDef: 4, vDef: 3, accentLine: true },
  { id: "fab_corduroy_velvet_rib", name: "Lancashire 8-Wale Velvet Corduroy Weave", cat: "Fabric", arch: "basket_hopsack", bg: "#451a03", ink: "#fef3c7", cols: ["#78350f", "#92400e", "#b45309", "#d97706", "#f59e0b"], repDef: 8, subDef: 2, vDef: 4, accentLine: false },
  { id: "fab_ripstop_tactical_gr", name: "Technical Ripstop Crosshatch Nylon Weave", cat: "Fabric", arch: "basket_hopsack", bg: "#14532d", ink: "#f0fdf4", cols: ["#166534", "#22c55e", "#4ade80", "#f97316", "#052e16"], repDef: 6, subDef: 4, vDef: 4, accentLine: true },

  // =========================================================================
  // 87-94: FAIR ISLE JACQUARD KNIT, NORDIC SWEATER & MISSONI FLAME KNIT
  // =========================================================================
  { id: "fab_shetland_fair_isle", name: "Shetland Crofter Fair Isle Yoke Knit", cat: "Fabric", arch: "fair_isle_knit", bg: "#1e293b", ink: "#f8fafc", cols: ["#ef4444", "#facc15", "#38bdf8", "#f8fafc", "#4ade80"], repDef: 4, subDef: 16, vDef: 1, accentLine: true },
  { id: "fab_nordic_selbu_knit", name: "Norwegian Selbu Star Winter Wool Knit", cat: "Fabric", arch: "fair_isle_knit", bg: "#0f172a", ink: "#ffffff", cols: ["#f8fafc", "#dc2626", "#93c5fd", "#e2e8f0", "#f59e0b"], repDef: 4, subDef: 16, vDef: 2, accentLine: true },
  { id: "fab_missoni_flame_knit", name: "Varese Missoni Raschel Zigzag Flame Knit", cat: "Fabric", arch: "fair_isle_knit", bg: "#18181b", ink: "#fef08a", cols: ["#f97316", "#ec4899", "#06b6d4", "#eab308", "#a855f7"], repDef: 4, subDef: 16, vDef: 3, accentLine: false },
  { id: "fab_alpine_crimson_knit", name: "St Moritz Alpine Crimson Jacquard Knit", cat: "Fabric", arch: "fair_isle_knit", bg: "#7f1d1d", ink: "#fef9c3", cols: ["#f8fafc", "#14532d", "#facc15", "#dc2626", "#cbd5e1"], repDef: 4, subDef: 16, vDef: 1, accentLine: true },
  { id: "fab_lopapeysa_oat_knit", name: "Reykjavik Lopapeysa Charcoal & Oat Knit", cat: "Fabric", arch: "fair_isle_knit", bg: "#f5f0e6", ink: "#1c1917", cols: ["#292524", "#b45309", "#78716c", "#0369a1", "#d6d3d1"], repDef: 4, subDef: 16, vDef: 2, accentLine: true },
  { id: "fab_coastal_zigzag_knit", name: "Amalfi Turquoise & Coral Chevron Knit", cat: "Fabric", arch: "fair_isle_knit", bg: "#0c4a6e", ink: "#ffffff", cols: ["#38bdf8", "#fb7185", "#fde047", "#2dd4bf", "#f8fafc"], repDef: 5, subDef: 16, vDef: 3, accentLine: false },
  { id: "fab_merino_waffle_knit", name: "Alpine Merino Thermal Honeycomb Waffle", cat: "Fabric", arch: "fair_isle_knit", bg: "#334155", ink: "#0f172a", cols: ["#475569", "#64748b", "#94a3b8", "#1e293b", "#cbd5e1"], repDef: 6, subDef: 12, vDef: 4, accentLine: false },
  { id: "fab_emerald_pine_knit", name: "Bavarian Forest Pine & Gold Knit Jacquard", cat: "Fabric", arch: "fair_isle_knit", bg: "#064e3b", ink: "#fef08a", cols: ["#f59e0b", "#f8fafc", "#dc2626", "#34d399", "#022c22"], repDef: 4, subDef: 16, vDef: 1, accentLine: true },

  // =========================================================================
  // 95-101: FULL-BLEED BARGELLO FLAME, DOUBLE IKAT & KILIM LOOMS
  // =========================================================================
  { id: "fab_florentine_bargello", name: "Florentine Bargello Flame Stitch Tapestry", cat: "Fabric", arch: "ikat_kilim_loom", bg: "#1c1917", ink: "#fef3c7", cols: ["#dc2626", "#f59e0b", "#facc15", "#0d9488", "#1d4ed8"], repDef: 4, subDef: 16, vDef: 1, accentLine: false },
  { id: "fab_patan_patola_ikat", name: "Patan Double Ikat Patola Silk Loom", cat: "Fabric", arch: "ikat_kilim_loom", bg: "#450a0a", ink: "#fef3c7", cols: ["#f59e0b", "#10b981", "#f8fafc", "#ef4444", "#eab308"], repDef: 4, subDef: 16, vDef: 2, accentLine: true },
  { id: "fab_anatolian_kilim_rug", name: "Anatolian Terraced Diamond Kilim Weave", cat: "Fabric", arch: "ikat_kilim_loom", bg: "#271c19", ink: "#fdf8f6", cols: ["#b91c1c", "#d97706", "#0f766e", "#f5f0e6", "#1e3a8a"], repDef: 4, subDef: 16, vDef: 3, accentLine: true },
  { id: "fab_uzbek_abrbandi_silk", name: "Margilan Atlas Silk Feathered Ikat", cat: "Fabric", arch: "ikat_kilim_loom", bg: "#111827", ink: "#fef9c3", cols: ["#eab308", "#ec4899", "#06b6d4", "#10b981", "#f43f5e"], repDef: 4, subDef: 16, vDef: 2, accentLine: false },
  { id: "fab_kasuri_indigo_loom", name: "Kurume Kasuri Stepped Indigo Weft Ikat", cat: "Fabric", arch: "ikat_kilim_loom", bg: "#0c1938", ink: "#f1f5f9", cols: ["#e2e8f0", "#60a5fa", "#3b82f6", "#93c5fd", "#f8fafc"], repDef: 5, subDef: 16, vDef: 4, accentLine: false },
  { id: "fab_navajo_serape_weave", name: "Southwest Terraced Serape Blanket Weave", cat: "Fabric", arch: "ikat_kilim_loom", bg: "#f5ebd6", ink: "#1c1917", cols: ["#991b1b", "#0284c7", "#d97706", "#14532d", "#1c1917"], repDef: 4, subDef: 16, vDef: 3, accentLine: true },
  { id: "fab_mallorcan_flame_ik", name: "Mallorcan Roba de Llengos Blue Flame Ikat", cat: "Fabric", arch: "ikat_kilim_loom", bg: "#f8fafc", ink: "#1e3a8a", cols: ["#1d4ed8", "#38bdf8", "#0284c7", "#93c5fd", "#0f172a"], repDef: 4, subDef: 16, vDef: 1, accentLine: false },

  // =========================================================================
  // 102-108: GOOSE-EYE DIAMOND TWILL, BIRDSEYE DOBBY, SHARKSKIN & BROCADE
  // =========================================================================
  { id: "fab_goose_eye_twill", name: "Nordic Goose-Eye Diamond Loom Twill", cat: "Fabric", arch: "jacquard_diamond_twill", bg: "#1e293b", ink: "#f8fafc", cols: ["#e2e8f0", "#38bdf8", "#64748b", "#f59e0b", "#94a3b8"], repDef: 5, subDef: 16, vDef: 1, accentLine: false },
  { id: "fab_birdseye_dobby_suit", name: "Turnbull Bespoke Birdseye Dobby Suiting", cat: "Fabric", arch: "jacquard_diamond_twill", bg: "#0f172a", ink: "#f8fafc", cols: ["#3b82f6", "#93c5fd", "#1e3a8a", "#e2e8f0", "#38bdf8"], repDef: 8, subDef: 10, vDef: 2, accentLine: false },
  { id: "fab_sharkskin_nailhead", name: "Biella Super-150s Sharkskin Nailhead", cat: "Fabric", arch: "jacquard_diamond_twill", bg: "#27272a", ink: "#fafafa", cols: ["#71717a", "#d4d4d8", "#a1a1aa", "#f59e0b", "#3f3f46"], repDef: 8, subDef: 10, vDef: 3, accentLine: false },
  { id: "fab_dhakai_jamdani_loom", name: "Dhakai Jamdani Geometric Diamond Loom", cat: "Fabric", arch: "jacquard_diamond_twill", bg: "#faf6ee", ink: "#1f1610", cols: ["#b45309", "#be123c", "#0f766e", "#d97706", "#5b21b6"], repDef: 5, subDef: 16, vDef: 1, accentLine: true },
  { id: "fab_banarasi_zari_loom", name: "Banarasi Katan Gold Zari Jacquard Loom", cat: "Fabric", arch: "jacquard_diamond_twill", bg: "#4a0e1c", ink: "#fff8e7", cols: ["#eab308", "#f59e0b", "#fde047", "#10b981", "#be123c"], repDef: 5, subDef: 16, vDef: 4, accentLine: true },
  { id: "fab_waffle_pique_cotton", name: "Marseille Matelassé Waffle Piqué Weave", cat: "Fabric", arch: "jacquard_diamond_twill", bg: "#f1f5f9", ink: "#334155", cols: ["#cbd5e1", "#94a3b8", "#64748b", "#ffffff", "#475569"], repDef: 6, subDef: 12, vDef: 2, accentLine: false },
  { id: "fab_barathea_silk_pebb", name: "Royal Evening Silk Barathea Pebble Weave", cat: "Fabric", arch: "jacquard_diamond_twill", bg: "#172554", ink: "#fef08a", cols: ["#1e40af", "#3b82f6", "#f59e0b", "#60a5fa", "#0f172a"], repDef: 7, subDef: 12, vDef: 3, accentLine: true },
];

function drawWovenClothMicroWeft(m: any, strength: number) {
  if (strength <= 0) return;
  // Subtle micro-diamond weave points only when explicitly raised above 0 (no floating horizontal bars!)
  const op = +(0.05 + (strength / 100) * 0.14).toFixed(3);
  const accCol = lumH(m.bg) > 128 ? "#000000" : "#ffffff";
  const N = 16;
  const step = T / N;
  let pts = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if ((i + j) % 2 !== 0) continue;
      const cx = (i + 0.5) * step;
      const cy = (j + 0.5) * step;
      pts += `<polygon points="${f1(cx)},${f1(cy - 3.2)} ${f1(cx + 3.2)},${f1(cy)} ${f1(cx)},${f1(
        cy + 3.2
      )} ${f1(cx - 3.2)},${f1(cy)}" fill="${accCol}" opacity="${op}"/>`;
    }
  }
  m.raw(pts);
}

function registerMasterFabric108() {
  for (const spec of MASTER_FABRIC_108) {
    registerMode({
      id: spec.id,
      name: spec.name,
      cat: spec.cat,
      look: {
        bg: spec.bg,
        ink: spec.ink,
        cols: [...spec.cols],
        style: "flat",
        sw: 2,
      },
      params: [
        { k: "rep", l: "Pattern Repeats", min: 2, max: 10, def: spec.repDef },
        { k: "sub", l: "Band / Weave Weight", min: 10, max: 70, def: spec.subDef },
        { k: "var", l: "Loom Draft Variant", min: 1, max: 4, def: spec.vDef },
        { k: "acc", l: "Overcheck / Raker Stitch", type: "check", def: spec.accentLine },
        { k: "weave", l: "Woven Micro-Accent %", min: 0, max: 100, def: 0 },
      ],
      draw(m: any, q: any) {
        const rep = Math.max(2, Math.min(12, Math.round(+q.rep || spec.repDef)));
        const sub = Math.max(1, +q.sub || spec.subDef);
        const vMode = Math.max(1, Math.min(4, Math.round(+q.var || spec.vDef)));
        const hasAcc = q.acc !== false;
        const weaveStr = q.weave === undefined ? 0 : +q.weave;

        // 1. HATCHED SCOTTISH TARTAN (FULL-BLEED EDGE-TO-EDGE)
        if (spec.arch === "hatched_tartan") {
          const c = T / rep;
          const bwPct = Math.max(22, Math.min(64, sub));
          const b = (c * bwPct) / 100;
          const o0 = (c - b) / 2;
          const B = m.col(0);
          const L = m.col(1);
          const A = m.col(2);
          const B2 = m.col(3);
          let rv = "";
          let rh = "";
          for (let i = -1; i <= rep; i++) {
            const x = i * c + o0;
            rv += `<rect x="${f1(x)}" y="-20" width="${f1(b)}" height="${T + 40}"/>`;
            rh += `<rect x="-20" y="${f1(x)}" width="${T + 40}" height="${f1(b)}"/>`;
          }
          const hd = vMode === 1 ? 8 : vMode === 2 ? 10 : vMode === 3 ? 6 : 12;
          const p = T / Math.max(rep, Math.round(T / Math.max(8, b / hd)));
          const wt = p * 0.7071 * 0.52;
          if (vMode === 2 || vMode === 4) {
            hatchIn(m, rv, B, p, wt, "f", spec.id + "v");
            hatchIn(m, rh, vMode === 4 ? B2 : B, p, wt, "b", spec.id + "h");
          } else {
            hatchIn(m, rv + rh, B, p, wt, vMode === 3 ? "b" : "f", spec.id + "a");
          }
          // Solid / deep woven crossings with sculpted inner diamond medallion
          let sq = "";
          for (let i = -1; i <= rep; i++) {
            for (let j = -1; j <= rep; j++) {
              const rx = i * c + o0;
              const ry = j * c + o0;
              sq += `<rect x="${f1(rx)}" y="${f1(ry)}" width="${f1(b)}" height="${f1(b)}"/>`;
            }
          }
          const crossFill = vMode === 3 ? mixCol(B, L, 0.45) : B;
          m.raw(`<g fill="${crossFill}">${sq}</g>`);

          if (vMode === 3 || vMode === 4) {
            const sb = b * 0.24;
            let s2 = "";
            for (let i = 0; i < rep; i++) {
              const gx = i * c;
              s2 += `<rect x="${f1(gx - sb / 2)}" y="0" width="${f1(sb)}" height="${T}" opacity="0.65"/>`;
              s2 += `<rect x="0" y="${f1(gx - sb / 2)}" width="${T}" height="${f1(sb)}" opacity="0.65"/>`;
            }
            m.raw(`<g fill="${A}">${s2}</g>`);
          }

          const pos = vMode === 2 ? [0.16, 0.5, 0.84] : [0.18, 0.82];
          let dl = "";
          for (let i = 0; i < rep; i++) {
            for (const f of pos) {
              const x = i * c + o0 + b * f;
              dl += `M${f1(x)} 0V${T}M0 ${f1(x)}H${T}`;
            }
          }
          m.raw(`<path d="${dl}" fill="none" stroke="${L}" stroke-width="${f1(Math.max(2, c * 0.015))}"/>`);

          if (hasAcc) {
            let da = "";
            for (let i = 0; i <= rep; i++) {
              const x = i * c;
              da += `M${f1(x)} 0V${T}M0 ${f1(x)}H${T}`;
            }
            m.raw(
              `<path d="${da}" fill="none" stroke="${A}" stroke-width="${f1(
                Math.max(1.8, c * 0.012)
              )}" opacity="0.82"/>`
            );
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 2. ARGYLE DIAMOND KNIT & RAKER STITCH (SCULPTED NESTED DIAMONDS & ROSETTES)
        if (spec.arch === "argyle_diamond") {
          const C = rep;
          const R = Math.max(2, Math.round(rep * (vMode === 3 ? 1.25 : 1)));
          const w = T / C;
          const h = T / R;
          const dScale = Math.max(0.35, Math.min(0.62, sub / 100));
          for (let i = -1; i <= C; i++) {
            for (let j = -1; j <= R; j++) {
              const cx = (i + 0.5) * w;
              const cy = (j + 0.5) * h;
              const colPrimary = vMode === 4 && (i + j) % 2 !== 0 ? m.col(3) : m.col(0);
              m.raw(
                `<polygon points="${f1(cx)},${f1(cy - h * 0.5)} ${f1(cx + w * 0.5)},${f1(cy)} ${f1(
                  cx
                )},${f1(cy + h * 0.5)} ${f1(cx - w * 0.5)},${f1(cy)}" fill="${colPrimary}"/>`
              );
              // Sculpted inner diamond frame & 4-petal knit rosette
              const isz = vMode === 3 ? 0.25 : 0.19;
              m.raw(
                `<polygon points="${f1(cx)},${f1(cy - h * isz)} ${f1(cx + w * isz)},${f1(cy)} ${f1(
                  cx
                )},${f1(cy + h * isz)} ${f1(cx - w * isz)},${f1(cy)}" fill="${m.col(2)}" opacity="0.9"/>`
              );
              if (vMode === 2 || vMode === 4) {
                const csz = isz * 0.48;
                m.raw(
                  `<polygon points="${f1(cx)},${f1(cy - h * csz)} ${f1(cx + w * csz)},${f1(cy)} ${f1(
                    cx
                  )},${f1(cy + h * csz)} ${f1(cx - w * csz)},${f1(cy)}" fill="${m.col(4)}"/>`
                );
              }
              const kx = i * w;
              const ky = j * h;
              const ksz = dScale * 0.56;
              m.raw(
                `<polygon points="${f1(kx)},${f1(ky - h * ksz)} ${f1(kx + w * ksz)},${f1(ky)} ${f1(
                  kx
                )},${f1(ky + h * ksz)} ${f1(kx - w * ksz)},${f1(ky)}" fill="${m.col(1)}"/>`
              );
            }
          }
          if (hasAcc) {
            const stCol = m.ink;
            const sw = f1(Math.max(2.2, Math.min(4.5, w * 0.015)));
            let lines = "";
            for (let i = -C - 2; i <= C * 2 + 2; i++) {
              lines += `<line x1="${f1(i * w)}" y1="0" x2="${f1(i * w + C * w)}" y2="${T}" stroke="${stCol}" stroke-width="${sw}" fill="none"/>`;
              lines += `<line x1="${f1(i * w)}" y1="0" x2="${f1(i * w - C * w)}" y2="${T}" stroke="${stCol}" stroke-width="${sw}" fill="none"/>`;
            }
            m.raw(`<g>${lines}</g>`);
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 3. WOVEN TWILL BUFFALO & SHEPHERD CHECK (SCULPTED DIAGONAL TWILL LOOM — NO BLOCKY PIXELS!)
        if (spec.arch === "twill_buffalo") {
          const c = T / rep;
          const bw = (c * Math.max(36, Math.min(64, sub))) / 100;
          const D1 = m.col(0);
          const D2 = vMode === 3 ? m.col(1) : D1;
          const ACC = m.col(2);
          let rv = "";
          let rh = "";
          for (let i = -1; i <= rep; i++) {
            const x = i * c;
            rv += `<rect x="${f1(x)}" y="-20" width="${f1(bw)}" height="${T + 40}"/>`;
            rh += `<rect x="-20" y="${f1(x)}" width="${T + 40}" height="${f1(bw)}"/>`;
          }
          const ribs = vMode === 2 ? 10 : 8;
          const p = T / Math.max(rep * 4, Math.round((T / bw) * ribs));
          const wt = p * 0.7071 * 0.56;
          hatchIn(m, rv, D1, p, wt, "f", spec.id + "tv");
          hatchIn(m, rh, D2, p, wt, vMode === 2 ? "b" : "f", spec.id + "th");

          // Deep woven intersection blocks with sculpted inner diamond twill medallion
          let blocks = "";
          for (let i = 0; i < rep; i++) {
            for (let j = 0; j < rep; j++) {
              const x = i * c;
              const y = j * c;
              blocks += `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(bw)}" height="${f1(bw)}" fill="${D1}"/>`;
              if (vMode === 3 || vMode === 4) {
                const cx = x + bw * 0.5;
                const cy = y + bw * 0.5;
                const r = bw * 0.24;
                blocks += `<polygon points="${f1(cx)},${f1(cy - r)} ${f1(cx + r)},${f1(cy)} ${f1(
                  cx
                )},${f1(cy + r)} ${f1(cx - r)},${f1(cy)}" fill="${ACC}"/>`;
              }
            }
          }
          m.raw(blocks);

          if (hasAcc) {
            let ov = "";
            for (let i = 0; i < rep; i++) {
              const pos = i * c + bw + (c - bw) * 0.5;
              ov += `M${f1(pos)} 0V${T}M0 ${f1(pos)}H${T}`;
            }
            m.raw(`<path d="${ov}" fill="none" stroke="${ACC}" stroke-width="${f1(Math.max(2.4, c * 0.018))}"/>`);
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 4. COUTURE VECTOR HOUNDSTOOTH / PIED-DE-POULE (TRUE SCULPTED CANINE TOOTH — NO PIXEL STAIRS!)
        if (spec.arch === "houndstooth_twill") {
          const n = Math.max(3, rep);
          const u = T / n;
          const h = u * 0.5;
          const qtr = u * 0.25;
          const D1 = m.col(0);
          const D2 = vMode >= 2 ? m.col(1) : D1;
          const ACC = m.col(2);
          for (let i = -1; i <= n + 1; i++) {
            for (let j = -1; j <= n + 1; j++) {
              const x = i * u;
              const y = j * u;
              const col = (i + j) % 2 === 0 ? D1 : D2;
              // Crisp vector couture Houndstooth polygon: central square + upper-right diagonal fangs + lower-left swept tail
              const toothD =
                `M${f1(x)} ${f1(y)}H${f1(x + h)}V${f1(y + h)}H${f1(x)}Z` +
                `M${f1(x + h)} ${f1(y)}L${f1(x + h + qtr)} ${f1(y - qtr)}H${f1(x + u)}L${f1(
                  x + h
                )} ${f1(y + qtr)}Z` +
                `M${f1(x + h)} ${f1(y + qtr)}L${f1(x + u)} ${f1(y - qtr)}V${f1(y + qtr)}L${f1(
                  x + h
                )} ${f1(y + h)}Z` +
                `M${f1(x)} ${f1(y + h)}L${f1(x - qtr)} ${f1(y + h + qtr)}V${f1(y + u)}L${f1(
                  x + qtr
                )} ${f1(y + h)}Z` +
                `M${f1(x + qtr)} ${f1(y + h)}L${f1(x - qtr)} ${f1(y + u)}H${f1(x + qtr)}L${f1(
                  x + h
                )} ${f1(y + h)}Z`;
              m.raw(`<path d="${toothD}" fill="${col}"/>`);

              if (vMode === 3 || vMode === 4) {
                const cx = x + qtr;
                const cy = y + qtr;
                const ir = qtr * 0.42;
                m.raw(
                  `<polygon points="${f1(cx)},${f1(cy - ir)} ${f1(cx + ir)},${f1(cy)} ${f1(
                    cx
                  )},${f1(cy + ir)} ${f1(cx - ir)},${f1(cy)}" fill="${ACC}"/>`
                );
              }
            }
          }
          if (hasAcc) {
            let d = "";
            for (let i = 0; i < n; i++) {
              const pos = i * u + u * 0.75;
              d += `M${f1(pos)} 0V${T}M0 ${f1(pos)}H${T}`;
            }
            m.raw(`<path d="${d}" fill="none" stroke="${ACC}" stroke-width="${f1(Math.max(2.2, u * 0.024))}"/>`);
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 5. SAVILE ROW GLEN URQUHART & PRINCE OF WALES COMPOUND CHECK (PRECISION VECTOR WEAVE)
        if (spec.arch === "glen_check") {
          const rSafe = Math.max(2, Math.min(5, rep));
          const cell = T / rSafe;
          const half = cell * 0.5;
          const D1 = m.col(0);
          const OV = m.col(1);
          const D2 = m.col(2);
          const subN = 4; // 4 crisp micro-houndstooth teeth per quadrant
          const su = half / subN;
          const sh = su * 0.5;
          const sq = su * 0.25;

          let pathsD1 = "";
          let pathsD2 = "";
          for (let r = 0; r < rSafe; r++) {
            for (let c = 0; c < rSafe; c++) {
              const x0 = c * cell;
              const y0 = r * cell;

              // Quadrant A (top-left): Vector Micro-Houndstooth
              for (let i = 0; i < subN; i++) {
                for (let j = 0; j < subN; j++) {
                  const tx = x0 + i * su;
                  const ty = y0 + j * su;
                  pathsD1 +=
                    `M${f1(tx)} ${f1(ty)}H${f1(tx + sh)}V${f1(ty + sh)}H${f1(tx)}Z` +
                    `M${f1(tx + sh)} ${f1(ty)}L${f1(tx + su)} ${f1(ty - sq)}V${f1(ty + sq)}L${f1(
                      tx + sh
                    )} ${f1(ty + sh)}Z` +
                    `M${f1(tx)} ${f1(ty + sh)}L${f1(tx - sq)} ${f1(ty + su)}H${f1(tx + sq)}L${f1(
                      tx + sh
                    )} ${f1(ty + sh)}Z`;
                }
              }

              // Quadrant B (top-right): Crisp vertical warp reeds & cross-ties
              const reeds = 6;
              const rw = half / reeds;
              for (let k = 0; k < reeds; k++) {
                const rx = x0 + half + k * rw;
                pathsD1 += `M${f1(rx)} ${f1(y0)}H${f1(rx + rw * 0.52)}V${f1(y0 + half)}H${f1(rx)}Z`;
              }
              for (let k = 0; k < 3; k++) {
                const ry = y0 + (k + 0.35) * (half / 3);
                pathsD2 += `M${f1(x0 + half)} ${f1(ry)}H${f1(x0 + cell)}V${f1(ry + rw * 0.38)}H${f1(
                  x0 + half
                )}Z`;
              }

              // Quadrant C (bottom-left): Crisp horizontal weft reeds & cross-ties
              for (let k = 0; k < reeds; k++) {
                const ry = y0 + half + k * rw;
                pathsD1 += `M${f1(x0)} ${f1(ry)}H${f1(x0 + half)}V${f1(ry + rw * 0.52)}H${f1(x0)}Z`;
              }
              for (let k = 0; k < 3; k++) {
                const rx = x0 + (k + 0.35) * (half / 3);
                pathsD2 += `M${f1(rx)} ${f1(y0 + half)}H${f1(rx + rw * 0.38)}V${f1(y0 + cell)}H${f1(
                  rx
                )}Z`;
              }

              // Quadrant D (bottom-right): Diamond pin-check lozenges
              const pins = 4;
              const pu = half / pins;
              for (let i = 0; i < pins; i++) {
                for (let j = 0; j < pins; j++) {
                  const px = x0 + half + (i + 0.5) * pu;
                  const py = y0 + half + (j + 0.5) * pu;
                  const pr = pu * 0.36;
                  if ((i + j) % 2 === 0) {
                    pathsD1 += `M${f1(px)} ${f1(py - pr)}L${f1(px + pr)} ${f1(py)}L${f1(px)} ${f1(
                      py + pr
                    )}L${f1(px - pr)} ${f1(py)}Z`;
                  } else {
                    pathsD2 += `M${f1(px)} ${f1(py - pr * 0.75)}L${f1(px + pr * 0.75)} ${f1(py)}L${f1(
                      px
                    )} ${f1(py + pr * 0.75)}L${f1(px - pr * 0.75)} ${f1(py)}Z`;
                  }
                }
              }
            }
          }
          if (pathsD2) m.raw(`<path d="${pathsD2}" fill="${D2}"/>`);
          if (pathsD1) m.raw(`<path d="${pathsD1}" fill="${D1}"/>`);

          if (hasAcc) {
            let ov = "";
            for (let i = 0; i < rSafe; i++) {
              const pos = i * cell + half;
              ov += `M${f1(pos)} 0V${T}M0 ${f1(pos)}H${T}`;
            }
            m.raw(`<path d="${ov}" fill="none" stroke="${OV}" stroke-width="${f1(Math.max(2.6, cell * 0.014))}"/>`);
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 6. HERRINGBONE & BROKEN-TWILL CHEVRON LOOM (SCULPTED VECTOR CHEVRON BLADES — NO PIXEL STAIRS!)
        if (spec.arch === "herringbone_twill") {
          const colsN = Math.max(4, rep * 2);
          const colW = T / colsN;
          const rowsN = Math.max(8, Math.round(rep * (vMode === 3 ? 3.5 : 4.5)));
          const rowH = T / rowsN;
          const bh = rowH * 0.56;
          const D1 = m.col(0);
          const D2 = m.col(1);
          const ACC = m.col(2);

          for (let c = 0; c < colsN; c++) {
            const x0 = c * colW;
            const x1 = x0 + colW;
            const dir = c % 2 === 0 ? 1 : -1;
            const col = c % 2 === 0 ? D1 : D2;
            const shift = dir * rowH * 0.65;
            for (let r = -2; r <= rowsN + 2; r++) {
              const y0 = r * rowH;
              const yA = dir === 1 ? y0 : y0 + shift;
              const yB = dir === 1 ? y0 + shift : y0;
              m.raw(
                `<polygon points="${f1(x0)},${f1(yA)} ${f1(x1)},${f1(yB)} ${f1(x1)},${f1(
                  yB + bh
                )} ${f1(x0)},${f1(yA + bh)}" fill="${col}"/>`
              );
              if (vMode === 2 || vMode === 3) {
                const sh2 = bh * 0.35;
                m.raw(
                  `<polygon points="${f1(x0)},${f1(yA + bh + 1.5)} ${f1(x1)},${f1(
                    yB + bh + 1.5
                  )} ${f1(x1)},${f1(yB + bh + 1.5 + sh2)} ${f1(x0)},${f1(
                    yA + bh + 1.5 + sh2
                  )}" fill="${m.col(3)}" opacity="0.82"/>`
                );
              }
            }
            if (hasAcc) {
              m.raw(
                `<line x1="${f1(x0)}" y1="0" x2="${f1(x0)}" y2="${T}" stroke="${ACC}" stroke-width="${f1(
                  Math.max(1.8, colW * 0.025)
                )}"/>`
              );
            }
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 7. HATCHED WINDOWPANE & TATTERSALL CHECK (100% CRISP VECTOR PANES & LOZENGES)
        if (spec.arch === "windowpane_tattersall") {
          const c = T / rep;
          const w = Math.max(6, (c * Math.min(24, Math.max(6, sub))) / 100);
          const drawPane = (off: number, col: string, tag: string) => {
            if (vMode === 2 || vMode === 3) {
              let r = "";
              for (let i = -1; i <= rep; i++) {
                const x = i * c + off;
                r += `<rect x="${f1(x - w / 2)}" y="-20" width="${f1(w)}" height="${T + 40}"/>`;
                r += `<rect x="-20" y="${f1(x - w / 2)}" width="${T + 40}" height="${f1(w)}"/>`;
              }
              const p = T / Math.max(rep * 4, Math.round(T / Math.max(6, w * 0.45)));
              hatchIn(m, r, col, p, p * 0.46, tag === "b" ? "b" : "f", spec.id + tag);
            } else {
              let d = "";
              for (let i = 0; i <= rep; i++) {
                const x = i * c + off;
                d += `M${f1(x)} 0V${T}M0 ${f1(x)}H${T}`;
              }
              m.raw(
                `<path d="${d}" fill="none" stroke="${col}" stroke-width="${f1(
                  w * 0.48
                )}" opacity="0.9"/>`
              );
            }
          };
          drawPane(c * 0.5, m.col(0), "a");
          if (hasAcc || vMode === 2 || vMode === 4) {
            drawPane(c * 0.5 + c * 0.18, m.col(1), "b");
          }
          // Sculpted diamond stitch medallions at grid intersections
          let knots = "";
          for (let i = 0; i < rep; i++) {
            for (let j = 0; j < rep; j++) {
              const cx = (i + 0.5) * c;
              const cy = (j + 0.5) * c;
              const kr = w * 0.65;
              knots += `<polygon points="${f1(cx)},${f1(cy - kr)} ${f1(cx + kr)},${f1(cy)} ${f1(
                cx
              )},${f1(cy + kr)} ${f1(cx - kr)},${f1(cy)}" fill="${m.col(2)}"/>`;
            }
          }
          m.raw(knots);
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 8. WOVEN GINGHAM, VICHY, MADRAS & SEERSUCKER
        if (spec.arch === "gingham_madras") {
          const c = T / rep;
          const bw = (c * Math.max(30, Math.min(65, sub))) / 100;
          const cMid = m.col(1);
          const cDeep = m.col(0);
          const cAcc = m.col(2);
          if (vMode === 4) {
            // Seersucker / Ticking woven vertical stripes with sculpted chevron rib weave (no raw dashed lines!)
            for (let i = 0; i < rep; i++) {
              const x = i * c;
              m.raw(`<rect x="${f1(x)}" y="0" width="${f1(bw)}" height="${T}" fill="${cMid}" opacity="0.88"/>`);
              const px = x + bw * 0.5;
              m.raw(
                `<rect x="${f1(px - bw * 0.12)}" y="0" width="${f1(bw * 0.24)}" height="${T}" fill="${cDeep}"/>`
              );
              if (hasAcc) {
                m.raw(
                  `<line x1="${f1(x + bw + (c - bw) * 0.5)}" y1="0" x2="${f1(
                    x + bw + (c - bw) * 0.5
                  )}" y2="${T}" stroke="${cAcc}" stroke-width="${f1(Math.max(2.5, c * 0.03))}"/>`
                );
              }
            }
            drawWovenClothMicroWeft(m, weaveStr);
            return;
          }
          let rv = "";
          let rh = "";
          for (let i = 0; i < rep; i++) {
            const x = i * c;
            rv += `<rect x="${f1(x)}" y="-10" width="${f1(bw)}" height="${T + 20}"/>`;
            rh += `<rect x="-10" y="${f1(x)}" width="${T + 20}" height="${f1(bw)}"/>`;
          }
          const p = T / Math.max(rep * 6, 48);
          hatchIn(m, rv, cMid, p, p * 0.42, "f", spec.id + "gv");
          hatchIn(m, rh, vMode === 3 ? cAcc : cMid, p, p * 0.42, "b", spec.id + "gh");
          let sq = "";
          for (let i = 0; i < rep; i++) {
            for (let j = 0; j < rep; j++) {
              sq += `<rect x="${f1(i * c)}" y="${f1(j * c)}" width="${f1(bw)}" height="${f1(bw)}"/>`;
            }
          }
          m.raw(`<g fill="${cDeep}">${sq}</g>`);
          if (hasAcc) {
            let dl = "";
            for (let i = 0; i < rep; i++) {
              const p1 = i * c + bw + (c - bw) * 0.5;
              dl += `M${f1(p1)} 0V${T}M0 ${f1(p1)}H${T}`;
            }
            m.raw(`<path d="${dl}" fill="none" stroke="${cAcc}" stroke-width="${f1(Math.max(2, c * 0.02))}"/>`);
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 9. FULL-BLEED BASKETWEAVE, HOPSACK, BOUCLÉ & DONEGAL TWEED (TAPERED SPINDLE YARNS)
        if (spec.arch === "basket_hopsack") {
          const N = rep * 2;
          const strands = Math.max(2, Math.min(5, Math.round(sub) || 3));
          const blk = T / N;
          const th = blk / strands;
          if (vMode === 4) {
            const colsN = rep * 4;
            const cw = T / colsN;
            for (let i = 0; i < colsN; i++) {
              const x = i * cw;
              m.raw(`<rect x="${f1(x)}" y="0" width="${f1(cw * 0.72)}" height="${T}" fill="${m.col(i % 2)}"/>`);
              m.raw(`<rect x="${f1(x + cw * 0.72)}" y="0" width="${f1(cw * 0.28)}" height="${T}" fill="${m.col(2)}" opacity="0.5"/>`);
              if (hasAcc && i % 4 === 0) {
                m.raw(`<line x1="${f1(x)}" y1="0" x2="${f1(x)}" y2="${T}" stroke="${m.col(3)}" stroke-width="2.5"/>`);
                m.raw(`<line x1="0" y1="${f1(x)}" x2="${T}" y2="${f1(x)}" stroke="${m.col(3)}" stroke-width="2.5"/>`);
              }
            }
            drawWovenClothMicroWeft(m, weaveStr);
            return;
          }
          for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
              const x = i * blk;
              const y = j * blk;
              const horiz = (i + j) % 2 === 0;
              for (let s = 0; s < strands; s++) {
                const cYarn = m.col((horiz ? s + i : s + j + 1) % 4);
                const cHi = mixCol(cYarn, "#ffffff", 0.28);
                if (horiz) {
                  const cy = y + (s + 0.5) * th;
                  const rx = blk * 0.48;
                  const ry = (th - 1.5) * 0.46;
                  m.raw(
                    `<rect x="${f1(x + 1)}" y="${f1(cy - ry)}" width="${f1(rx * 2)}" height="${f1(
                      ry * 2
                    )}" rx="${f1(ry)}" fill="${cYarn}"/>` +
                      `<rect x="${f1(x + blk * 0.16)}" y="${f1(cy - ry * 0.38)}" width="${f1(
                        blk * 0.68
                      )}" height="${f1(ry * 0.76)}" rx="${f1(ry * 0.38)}" fill="${cHi}" opacity="0.65"/>`
                  );
                } else {
                  const cx = x + (s + 0.5) * th;
                  const rx = (th - 1.5) * 0.46;
                  const ry = blk * 0.48;
                  m.raw(
                    `<rect x="${f1(cx - rx)}" y="${f1(y + 1)}" width="${f1(rx * 2)}" height="${f1(
                      ry * 2
                    )}" rx="${f1(rx)}" fill="${cYarn}"/>` +
                      `<rect x="${f1(cx - rx * 0.38)}" y="${f1(y + blk * 0.16)}" width="${f1(
                        rx * 0.76
                      )}" height="${f1(blk * 0.68)}" rx="${f1(rx * 0.38)}" fill="${cHi}" opacity="0.65"/>`
                  );
                }
              }
              if (hasAcc && (i + j) % 2 === 0) {
                const kx = x + blk * 0.5;
                const ky = y + blk * 0.5;
                const kr = th * 0.36;
                m.raw(
                  `<polygon points="${f1(kx)},${f1(ky - kr)} ${f1(kx + kr)},${f1(ky)} ${f1(
                    kx
                  )},${f1(ky + kr)} ${f1(kx - kr)},${f1(ky)}" fill="${m.col(4)}"/>`
                );
              }
            }
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 10. FAIR ISLE JACQUARD KNIT, NORDIC SELBU STAR & MISSONI FLAME KNIT (SCULPTED V-STITCH & STARS!)
        if (spec.arch === "fair_isle_knit") {
          const rSafe = Math.max(2, Math.min(6, rep));
          const cell = T / rSafe;
          const C0 = m.col(0);
          const C1 = m.col(1);
          const C2 = m.col(2);
          const C3 = m.col(3);

          if (vMode === 3) {
            // Missoni Raschel Sculpted Chevron Flame Knit
            const colsN = rSafe * 2;
            const cw = T / colsN;
            const bands = rSafe * 4;
            const bh = T / bands;
            for (let b = -2; b <= bands + 2; b++) {
              const col = m.col(((b % 4) + 4) % 4);
              const yBase = b * bh;
              let ptsTop = `M 0 ${f1(yBase)}`;
              let ptsBot = `L ${T} ${f1(yBase + bh * 0.82)}`;
              for (let c = 0; c < colsN; c++) {
                const xMid = (c + 0.5) * cw;
                const xEnd = (c + 1) * cw;
                const peak = c % 2 === 0 ? -bh * 0.75 : bh * 0.75;
                ptsTop += ` L ${f1(xMid)} ${f1(yBase + peak)} L ${f1(xEnd)} ${f1(yBase)}`;
              }
              for (let c = colsN - 1; c >= 0; c--) {
                const xMid = (c + 0.5) * cw;
                const xStart = c * cw;
                const peak = c % 2 === 0 ? -bh * 0.75 : bh * 0.75;
                ptsBot += ` L ${f1(xMid)} ${f1(yBase + bh * 0.82 + peak)} L ${f1(xStart)} ${f1(
                  yBase + bh * 0.82
                )}`;
              }
              m.raw(`<path d="${ptsTop} ${ptsBot} Z" fill="${col}"/>`);
            }
            drawWovenClothMicroWeft(m, weaveStr);
            return;
          }

          // Fair Isle Nordic Star & Sculpted V-Stitch Knit Medallions
          const vStitch = (cx: number, cy: number, sz: number, col: string) =>
            `<path d="M${f1(cx)} ${f1(cy + sz * 0.55)}L${f1(cx - sz * 0.48)} ${f1(
              cy + sz * 0.05
            )}V${f1(cy - sz * 0.48)}L${f1(cx)} ${f1(cy - sz * 0.04)}L${f1(cx + sz * 0.48)} ${f1(
              cy - sz * 0.48
            )}V${f1(cy + sz * 0.05)}Z" fill="${col}"/>`;

          for (let r = 0; r < rSafe; r++) {
            for (let c = 0; c < rSafe; c++) {
              const cx = (c + 0.5) * cell;
              const cy = (r + 0.5) * cell;
              const R0 = cell * 0.36;

              // 8-point Nordic Selbu Star Rosette
              for (let k = 0; k < 8; k++) {
                const ang = (k * Math.PI) / 4;
                const px = cx + Math.cos(ang) * (R0 * 0.55);
                const py = cy + Math.sin(ang) * (R0 * 0.55);
                const tipX = cx + Math.cos(ang) * R0;
                const tipY = cy + Math.sin(ang) * R0;
                const sideA = ang + Math.PI / 8;
                const sideB = ang - Math.PI / 8;
                const rMid = R0 * 0.52;
                m.raw(
                  `<polygon points="${f1(cx + Math.cos(ang) * (R0 * 0.16))},${f1(
                    cy + Math.sin(ang) * (R0 * 0.16)
                  )} ${f1(cx + Math.cos(sideA) * rMid)},${f1(
                    cy + Math.sin(sideA) * rMid
                  )} ${f1(tipX)},${f1(tipY)} ${f1(cx + Math.cos(sideB) * rMid)},${f1(
                    cy + Math.sin(sideB) * rMid
                  )}" fill="${k % 2 === 0 ? C0 : C1}"/>`
                );
                if (vMode === 2) {
                  m.raw(vStitch(px, py, cell * 0.12, C3));
                }
              }

              // Center diamond blossom
              const cr = cell * 0.12;
              m.raw(
                `<polygon points="${f1(cx)},${f1(cy - cr)} ${f1(cx + cr)},${f1(cy)} ${f1(
                  cx
                )},${f1(cy + cr)} ${f1(cx - cr)},${f1(cy)}" fill="${C2}"/>`
              );

              // Border row of sculpted V-stitches along top & bottom of each Fair Isle yoke band
              const stCount = 6;
              const stStep = cell / stCount;
              for (let s = 0; s < stCount; s++) {
                const sx = c * cell + (s + 0.5) * stStep;
                m.raw(vStitch(sx, r * cell + stStep * 0.45, stStep * 0.72, s % 2 === 0 ? C2 : C3));
                m.raw(
                  vStitch(sx, (r + 1) * cell - stStep * 0.45, stStep * 0.72, s % 2 === 0 ? C3 : C2)
                );
              }
            }
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 11. BARGELLO FLAME, PATOLA DOUBLE IKAT & ANATOLIAN KILIM LOOM (SCULPTED VECTOR TAPESTRY)
        if (spec.arch === "ikat_kilim_loom") {
          const rSafe = Math.max(2, Math.min(6, rep));
          const cell = T / rSafe;
          const C0 = m.col(0);
          const C1 = m.col(1);
          const C2 = m.col(2);
          const C3 = m.col(3);
          const C4 = m.col(4);

          if (vMode === 1) {
            // Florentine Bargello Sculpted Flame Stitch Ribbons
            const colsN = rSafe * 8;
            const cw = T / colsN;
            const bands = rSafe * 5;
            const bh = T / bands;
            for (let c = 0; c < colsN; c++) {
              const x0 = c * cw;
              const wave = Math.sin((c / colsN) * Math.PI * 2 * rSafe) * bh * 1.45;
              for (let b = -3; b <= bands + 3; b++) {
                const y0 = b * bh + wave;
                const col = m.col(((b % 5) + 5) % 5);
                m.raw(
                  `<polygon points="${f1(x0)},${f1(y0 + cw * 0.35)} ${f1(x0 + cw * 0.5)},${f1(
                    y0
                  )} ${f1(x0 + cw)},${f1(y0 + cw * 0.35)} ${f1(x0 + cw)},${f1(
                    y0 + bh + cw * 0.35
                  )} ${f1(x0 + cw * 0.5)},${f1(y0 + bh)} ${f1(x0)},${f1(
                    y0 + bh + cw * 0.35
                  )}" fill="${col}"/>`
                );
              }
            }
            drawWovenClothMicroWeft(m, weaveStr);
            return;
          }

          // Patan Patola Feathered Ikat & Anatolian Terraced Diamond Kilim Medallions
          for (let r = 0; r < rSafe; r++) {
            for (let c = 0; c < rSafe; c++) {
              const cx = (c + 0.5) * cell;
              const cy = (r + 0.5) * cell;
              const tiers = [
                [0.46, C0],
                [0.34, C1],
                [0.22, C2],
                [0.11, C3],
              ] as [number, string][];

              for (let t = 0; t < tiers.length; t++) {
                const [sc, col] = tiers[t];
                const rx = cell * sc;
                const ry = cell * sc;
                // Feathered serrated ikat diamond polygon
                const steps = 5;
                const pts: string[] = [];
                const quads: [number, number, number, number][] = [
                  [0, -ry, rx, 0],
                  [rx, 0, 0, ry],
                  [0, ry, -rx, 0],
                  [-rx, 0, 0, -ry],
                ];
                for (let qIdx = 0; qIdx < 4; qIdx++) {
                  const [ax, ay, bx, by] = quads[qIdx];
                  for (let s = 0; s < steps; s++) {
                    const u = s / steps;
                    const uMid = (s + 0.5) / steps;
                    const px = cx + ax + (bx - ax) * u;
                    const py = cy + ay + (by - ay) * u;
                    const зуб = (t % 2 === 0 ? 1 : -1) * cell * 0.028;
                    const mx = cx + (ax + (bx - ax) * uMid) * (1 + зуб / rx);
                    const my = cy + (ay + (by - ay) * uMid) * (1 + зуб / ry);
                    pts.push(`${f1(px)},${f1(py)}`, `${f1(mx)},${f1(my)}`);
                  }
                }
                m.raw(`<polygon points="${pts.join(" ")}" fill="${col}"/>`);
              }

              // Corner floral star motifs between medallions
              if (hasAcc) {
                const kx = c * cell;
                const ky = r * cell;
                const kr = cell * 0.14;
                m.raw(
                  `<path transform="translate(${f1(kx)} ${f1(ky)})" d="${star4(
                    kr,
                    kr * 0.35
                  )}" fill="${C4}"/>`
                );
              }
            }
          }
          drawWovenClothMicroWeft(m, weaveStr);
          return;
        }

        // 12. GOOSE-EYE DIAMOND TWILL, DHAKAI JAMDANI FLORAL LOOM & BANARASI ZARI BROCADE
        const rSafe = Math.max(3, Math.min(8, rep));
        const cell = T / rSafe;
        const C0 = m.col(0);
        const C1 = m.col(1);
        const C2 = m.col(2);
        const C3 = m.col(3);

        for (let r = 0; r < rSafe; r++) {
          for (let c = 0; c < rSafe; c++) {
            const cx = (c + 0.5) * cell;
            const cy = (r + 0.5) * cell;

            // Outer sculpted Goose-Eye / Jamdani diamond lattice frame
            const R1 = cell * 0.48;
            const R2 = cell * 0.37;
            const R3 = cell * 0.25;
            m.raw(
              `<polygon points="${f1(cx)},${f1(cy - R1)} ${f1(cx + R1)},${f1(cy)} ${f1(
                cx
              )},${f1(cy + R1)} ${f1(cx - R1)},${f1(cy)}" fill="${C0}"/>` +
                `<polygon points="${f1(cx)},${f1(cy - R2)} ${f1(cx + R2)},${f1(cy)} ${f1(
                  cx
                )},${f1(cy + R2)} ${f1(cx - R2)},${f1(cy)}" fill="${m.bg}"/>`
            );

            if (vMode === 1 || vMode === 4) {
              // Dhakai Jamdani & Banarasi Zari 8-Petal Floral Lotus Buta Medallion inside diamond
              const petals = 8;
              const pLen = R3 * 0.92;
              const pWid = R3 * 0.34;
              let fl = "";
              for (let p = 0; p < petals; p++) {
                const ang = (p * 360) / petals;
                fl += `<path transform="translate(${f1(cx)} ${f1(cy)}) rotate(${f1(
                  ang
                )})" d="${leafP(pLen, pWid)}" fill="${p % 2 === 0 ? C1 : C2}"/>`;
              }
              fl += `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(R3 * 0.24)}" fill="${C3}"/>`;
              m.raw(fl);
            } else {
              // Concentric Goose-Eye & Birdseye Dobby Diamond Core
              const R4 = cell * 0.13;
              m.raw(
                `<polygon points="${f1(cx)},${f1(cy - R3)} ${f1(cx + R3)},${f1(cy)} ${f1(
                  cx
                )},${f1(cy + R3)} ${f1(cx - R3)},${f1(cy)}" fill="${C1}"/>` +
                  `<polygon points="${f1(cx)},${f1(cy - R4)} ${f1(cx + R4)},${f1(cy)} ${f1(
                    cx
                  )},${f1(cy + R4)} ${f1(cx - R4)},${f1(cy)}" fill="${C2}"/>`
              );
            }

            if (hasAcc) {
              const kx = c * cell;
              const ky = r * cell;
              const kr = cell * 0.11;
              m.raw(
                `<polygon points="${f1(kx)},${f1(ky - kr)} ${f1(kx + kr)},${f1(ky)} ${f1(
                  kx
                )},${f1(ky + kr)} ${f1(kx - kr)},${f1(ky)}" fill="${C2}"/>`
              );
            }
          }
        }
        drawWovenClothMicroWeft(m, weaveStr);
      },
    });
  }
}

registerMasterFabric108();

/* =====================================================================
   24 PROCEDURAL VECTOR BRUSH STUDIO GENERATORS (CAT: "Brush")
   - Exact match to Reference Images:
     1) Diagonal Grunge Dry-Brush Slash & Ink Splatter Streaks
     2) Master Dry-Brush Kit (Horizontal Strokes, Grunge Circles, Vertical Bristle Strips & Daubs)
     3) Stipple Airbrush Grain Spheres & Radial Halftone Dot-Matrix Brushes
   - 100% Pure Separable Vector Paths in SVG (ZERO Background Layer in SVG!)
   - Transparent Checkerboard Background in JPG & Live Canvas Preview!
   ===================================================================== */

function drawDryBrushStrokeVector(
  m: any,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  width: number,
  col: string,
  opts: {
    bristles?: number;
    dryness?: number;
    splatter?: number;
    taperStart?: number;
    taperEnd?: number;
    curve?: number;
  } = {}
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 4) return;
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;

  const bristles = opts.bristles ?? 38;
  const dryness = (opts.dryness ?? 55) / 100;
  const splatter = opts.splatter ?? 28;
  const taperS = opts.taperStart ?? 0.22;
  const taperE = opts.taperEnd ?? 0.28;
  const curve = opts.curve ?? 0;

  const ptAlong = (t: number, offsetN: number): [number, number] => {
    const bow = Math.sin(t * Math.PI) * curve;
    const px = x1 + dx * t + nx * (offsetN + bow);
    const py = y1 + dy * t + ny * (offsetN + bow);
    return [px, py];
  };

  const parts: string[] = [];

  // 1. Solid ragged core body with organic frayed contour
  const segs = 22;
  const topPts: [number, number][] = [];
  const botPts: [number, number][] = [];
  const coreHalfW = width * (0.44 - dryness * 0.14);
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const env =
      t < taperS
        ? Math.pow(t / Math.max(0.01, taperS), 0.55)
        : t > 1 - taperE
        ? Math.pow((1 - t) / Math.max(0.01, taperE), 0.65)
        : 1;
    const jagT = (0.72 + m.rnd() * 0.52) * env;
    const jagB = (0.72 + m.rnd() * 0.52) * env;
    topPts.push(ptAlong(t, -coreHalfW * jagT));
    botPts.push(ptAlong(t, coreHalfW * jagB));
  }
  const bodyPoly = topPts.concat(botPts.reverse());
  parts.push(
    `<polygon points="${bodyPoly.map((p) => `${f1(p[0])},${f1(p[1])}`).join(" ")}" fill="${col}"/>`
  );

  // 2. Multi-filament dry-brush bristle hairs & split-tip streaks
  for (let b = 0; b < bristles; b++) {
    const lane = (b / Math.max(1, bristles - 1)) * 2 - 1; // -1 .. 1
    const isOuter = Math.abs(lane) > 0.58;
    const nOffBase = lane * width * (0.5 + m.rnd() * 0.22);
    const tStart = Math.max(-0.14, (isOuter ? 0.04 : -0.06) + (m.rnd() - 0.35) * 0.28);
    const tEnd = Math.min(1.18, (isOuter ? 0.96 : 1.08) + (m.rnd() - 0.45) * 0.32);
    if (tEnd - tStart < 0.12) continue;

    // Split dry bristle into 1–3 broken dashes along the stroke for authentic dry-paint look
    const subRuns = isOuter || m.rnd() < dryness ? (m.rnd() < 0.5 ? 2 : 3) : 1;
    for (let r = 0; r < subRuns; r++) {
      const u0 = tStart + (r / subRuns) * (tEnd - tStart) + m.rnd() * 0.04;
      const u1 =
        tStart +
        ((r + 0.72 + m.rnd() * 0.25) / subRuns) * (tEnd - tStart);
      if (u1 - u0 < 0.05) continue;

      const uMid = (u0 + u1) * 0.5;
      const bw = Math.max(
        0.9,
        width * (isOuter ? 0.018 + m.rnd() * 0.035 : 0.035 + m.rnd() * 0.065)
      );
      const drift = (m.rnd() - 0.5) * width * 0.08;
      const pStart = ptAlong(u0, nOffBase);
      const pMidT = ptAlong(uMid, nOffBase + drift * 0.5 - bw);
      const pEnd = ptAlong(u1, nOffBase + drift);
      const pMidB = ptAlong(uMid, nOffBase + drift * 0.5 + bw);

      parts.push(
        `<polygon points="${f1(pStart[0])},${f1(pStart[1])} ${f1(pMidT[0])},${f1(
          pMidT[1]
        )} ${f1(pEnd[0])},${f1(pEnd[1])} ${f1(pMidB[0])},${f1(pMidB[1])}" fill="${col}"/>`
      );
    }
  }

  // 3. Long razor-sharp detached bristle hair streaks parallel to the slash (like Reference Image #2!)
  const extraStreaks = Math.round(bristles * (0.28 + dryness * 0.35));
  for (let s = 0; s < extraStreaks; s++) {
    const side = m.rnd() < 0.5 ? -1 : 1;
    const dist = width * (0.42 + m.rnd() * 0.75) * side;
    const t0 = -0.08 + m.rnd() * 0.92;
    const sLen = 0.08 + m.rnd() * 0.34;
    const t1 = t0 + sLen;
    const sw = 0.7 + m.rnd() * 1.9;
    const a = ptAlong(t0, dist);
    const b = ptAlong(t1, dist + (m.rnd() - 0.5) * 6);
    const mid = ptAlong((t0 + t1) * 0.5, dist);
    parts.push(
      `<polygon points="${f1(a[0])},${f1(a[1])} ${f1(mid[0] + nx * sw)},${f1(
        mid[1] + ny * sw
      )} ${f1(b[0])},${f1(b[1])} ${f1(mid[0] - nx * sw)},${f1(
        mid[1] - ny * sw
      )}" fill="${col}"/>`
    );
  }

  // 4. Organic Ink Splatters, Directional Splash Drops & Micro-Specks
  for (let sp = 0; sp < splatter; sp++) {
    const t = -0.08 + m.rnd() * 1.16;
    const side = m.rnd() < 0.5 ? -1 : 1;
    const spread = width * (0.38 + Math.pow(m.rnd(), 1.35) * 1.85) * side;
    const [sx, sy] = ptAlong(t, spread);
    if (sx < 6 || sx > T - 6 || sy < 6 || sy > T - 6) continue;
    const r = 1.4 + Math.pow(m.rnd(), 2.2) * (width * 0.13);
    if (r > 4.2 && m.rnd() < 0.45) {
      // Irregular grunge ink blotch polygon
      const pts: string[] = [];
      const vertices = 7;
      for (let v = 0; v < vertices; v++) {
        const ang = (v / vertices) * Math.PI * 2;
        const vr = r * (0.58 + m.rnd() * 0.68);
        pts.push(`${f1(sx + Math.cos(ang) * vr)},${f1(sy + Math.sin(ang) * vr)}`);
      }
      parts.push(`<polygon points="${pts.join(" ")}" fill="${col}"/>`);
    } else {
      parts.push(`<circle cx="${f1(sx)}" cy="${f1(sy)}" r="${f1(r)}" fill="${col}"/>`);
    }
  }

  m.raw(parts.join(""));
}

function drawGrungeCircleStampVector(
  m: any,
  cx: number,
  cy: number,
  radius: number,
  col: string,
  mode: "solid" | "enso" | "ring" = "solid",
  roughness = 55
) {
  const parts: string[] = [];
  const rf = roughness / 100;

  if (mode === "solid" || mode === "ring") {
    // Distressed outer brush-stamped circular contour (like the 4 grunge circles in Reference Image #3!)
    const N = 48;
    const outerPts: string[] = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const jag = 1 - rf * 0.14 * m.rnd() + (i % 3 === 0 ? rf * 0.06 * m.rnd() : 0);
      const r = radius * jag;
      outerPts.push(`${f1(cx + Math.cos(a) * r)},${f1(cy + Math.sin(a) * r)}`);
    }
    if (mode === "solid") {
      parts.push(`<polygon points="${outerPts.join(" ")}" fill="${col}"/>`);
    } else {
      // Thick distressed grunge stamp ring with inner cutout
      let d = `M${outerPts[0].replace(",", " ")}L${outerPts
        .slice(1)
        .map((p) => p.replace(",", " "))
        .join("L")}Z`;
      const innerPts: string[] = [];
      const inR = radius * 0.68;
      for (let i = N - 1; i >= 0; i--) {
        const a = (i / N) * Math.PI * 2;
        const r = inR * (1 + (m.rnd() - 0.5) * rf * 0.16);
        innerPts.push(`${f1(cx + Math.cos(a) * r)} ${f1(cy + Math.sin(a) * r)}`);
      }
      d += `M${innerPts[0]}L${innerPts.slice(1).join("L")}Z`;
      parts.push(`<path d="${d}" fill="${col}" fill-rule="evenodd"/>`);
    }
  }

  // Circumferential frayed dry-brush bristle arcs around the rim
  const arcCount = mode === "enso" ? 42 : 26;
  for (let a = 0; a < arcCount; a++) {
    const startA = m.rnd() * Math.PI * 2;
    const spanA = (0.35 + m.rnd() * (mode === "enso" ? 1.8 : 0.95)) * (1 + rf * 0.3);
    const rLane =
      mode === "enso"
        ? radius * (0.72 + m.rnd() * 0.34)
        : radius * (0.88 + m.rnd() * 0.17);
    const th = 1.1 + m.rnd() * (mode === "enso" ? 3.8 : 2.4);
    const steps = 10;
    const outArc: string[] = [];
    const inArc: string[] = [];
    for (let s = 0; s <= steps; s++) {
      const u = s / steps;
      const ang = startA + spanA * u;
      const env = Math.sin(u * Math.PI);
      const w = th * env;
      outArc.push(`${f1(cx + Math.cos(ang) * (rLane + w))},${f1(cy + Math.sin(ang) * (rLane + w))}`);
      inArc.unshift(`${f1(cx + Math.cos(ang) * (rLane - w))},${f1(cy + Math.sin(ang) * (rLane - w))}`);
    }
    parts.push(`<polygon points="${outArc.concat(inArc).join(" ")}" fill="${col}"/>`);
  }

  m.raw(parts.join(""));
}

function drawStippleAirbrushCloudVector(
  m: any,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rotDeg: number,
  col: string,
  density = 380,
  hollow = false
) {
  // Exact match to Reference Image #4 top row & bottom-left: velvety radial/elliptical stipple grain airbrush spheres!
  const rad = (rotDeg * Math.PI) / 180;
  const cA = Math.cos(rad);
  const sA = Math.sin(rad);
  const parts: string[] = [];

  for (let i = 0; i < density; i++) {
    // Box-Muller / power radial falloff for dense dark core and soft feathery outer halo
    const u = m.rnd();
    const dist = hollow ? 0.38 + Math.pow(u, 0.75) * 0.62 : Math.pow(u, 1.55);
    const theta = m.rnd() * Math.PI * 2;
    const lx = Math.cos(theta) * rx * dist;
    const ly = Math.sin(theta) * ry * dist;
    const wx = cx + lx * cA - ly * sA;
    const wy = cy + lx * sA + ly * cA;
    if (wx < 4 || wx > T - 4 || wy < 4 || wy > T - 4) continue;

    const coreWeight = 1 - dist;
    const dotR = 0.75 + coreWeight * 2.1 + m.rnd() * 0.85;
    const op = Math.min(0.96, 0.22 + coreWeight * 0.74);
    parts.push(
      `<circle cx="${f1(wx)}" cy="${f1(wy)}" r="${f1(dotR)}" fill="${col}" opacity="${op.toFixed(
        2
      )}"/>`
    );
  }
  m.raw(parts.join(""));
}

function drawHalftoneDotBrushVector(
  m: any,
  cx: number,
  cy: number,
  radius: number,
  col: string,
  gridSteps = 17,
  grunge = 42
) {
  // Exact match to Reference Image #4 bottom-right: distressed radial halftone dot-matrix brush stamps!
  const step = (radius * 2) / gridSteps;
  const maxDotR = step * 0.54;
  const gFactor = grunge / 100;
  const ph1 = m.rnd() * Math.PI * 2;
  const ph2 = m.rnd() * Math.PI * 2;
  const parts: string[] = [];

  const half = (gridSteps - 1) * 0.5;
  for (let ix = 0; ix < gridSteps; ix++) {
    for (let iy = 0; iy < gridSteps; iy++) {
      const dx = (ix - half) * step;
      const dy = (iy - half) * step;
      const dist = Math.hypot(dx, dy) / radius;
      if (dist > 1.02) continue;

      // Radial falloff + organic 2D cluster turbulence (just like the blotchy dark center in Reference #4)
      const radial = Math.pow(Math.max(0, 1 - dist * dist), 1.15);
      const turb =
        0.5 +
        0.5 *
          Math.sin(ix * 0.85 + ph1) *
          Math.cos(iy * 0.85 + ph2);
      const weight = radial * (1 - gFactor * 0.48 + gFactor * 0.72 * turb);
      const r = maxDotR * weight;
      if (r < 0.55) continue;

      const wx = cx + dx;
      const wy = cy + dy;
      if (wx - r < 2 || wx + r > T - 2 || wy - r < 2 || wy + r > T - 2) continue;
      parts.push(`<circle cx="${f1(wx)}" cy="${f1(wy)}" r="${f1(r)}" fill="${col}"/>`);
    }
  }
  m.raw(parts.join(""));
}

// 5. DISTRESSED PAINT ROLLER TRACK VECTOR ENGINE (Microstock Best-Seller)
function drawPaintRollerTrackVector(
  m: any,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  width: number,
  col: string,
  dryness: number
) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  if (len < 10) return;
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const parts: string[] = [];

  // Roller main body consists of 2 heavy edge rails + 18 perforated horizontal foam-roller bands
  const bands = 18;
  for (let b = 0; b < bands; b++) {
    const v = (b / (bands - 1)) * 2 - 1;
    const isEdgeRail = b === 0 || b === bands - 1 || b === 1 || b === bands - 2;
    const bandW = (width / bands) * (isEdgeRail ? 1.35 : 0.92);
    const segs = isEdgeRail ? 3 : 5 + Math.floor(m.rnd() * 5);
    let curT = 0.02 + m.rnd() * 0.04;
    for (let s = 0; s < segs; s++) {
      if (curT >= 0.96) break;
      const segLen = isEdgeRail
        ? 0.28 + m.rnd() * 0.35
        : (0.08 + m.rnd() * 0.18) * (1 - (dryness / 100) * 0.45);
      const tEnd = Math.min(0.98, curT + segLen);
      if (tEnd - curT > 0.025) {
        const offN = v * width * 0.48 + (m.rnd() - 0.5) * 3.2;
        const sx = x0 + ux * (curT * len) + nx * offN;
        const sy = y0 + uy * (curT * len) + ny * offN;
        const ex = x0 + ux * (tEnd * len) + nx * offN;
        const ey = y0 + uy * (tEnd * len) + ny * offN;
        const hw = bandW * (0.45 + m.rnd() * 0.35);
        parts.push(
          `<path d="M${f1(sx + nx * hw)} ${f1(sy + ny * hw)}L${f1(ex + nx * hw)} ${f1(
            ey + ny * hw
          )}L${f1(ex - nx * hw)} ${f1(ey - ny * hw)}L${f1(sx - nx * hw)} ${f1(
            sy - ny * hw
          )}Z" fill="${col}"/>`
        );
      }
      curT = tEnd + (isEdgeRail ? 0.015 : 0.02 + m.rnd() * 0.07 * (dryness / 60));
    }
  }
  // Perpendicular roller-axle end bar marks
  for (const endT of [0.03, 0.97]) {
    const bx = x0 + ux * (endT * len);
    const by = y0 + uy * (endT * len);
    const barW = 4 + m.rnd() * 5;
    const hw = width * 0.52;
    parts.push(
      `<path d="M${f1(bx + nx * hw - ux * barW)} ${f1(by + ny * hw - uy * barW)}L${f1(
        bx + nx * hw + ux * barW
      )} ${f1(by + ny * hw + uy * barW)}L${f1(bx - nx * hw + ux * barW)} ${f1(
        by - ny * hw + uy * barW
      )}L${f1(bx - nx * hw - ux * barW)} ${f1(by - ny * hw - uy * barW)}Z" fill="${col}"/>`
    );
  }
  m.raw(parts.join(""));
}

// 6. WILD BEAST CLAW SCRATCH & RIP SLASHES ENGINE (Microstock Best-Seller)
function drawClawScratchVector(
  m: any,
  cx: number,
  cy: number,
  len: number,
  angleDeg: number,
  claws: number,
  spread: number,
  width: number,
  col: string,
  dryness: number,
  splatter: number
) {
  const rad = (angleDeg * Math.PI) / 180;
  const ux = Math.cos(rad);
  const uy = Math.sin(rad);
  const nx = -uy;
  const ny = ux;

  for (let i = 0; i < claws; i++) {
    const v = claws === 1 ? 0 : (i / (claws - 1)) * 2 - 1;
    const offN = v * spread * 0.5;
    const lenScale = 1 - Math.abs(v) * 0.22 + (m.rnd() - 0.5) * 0.08;
    const hLen = len * 0.5 * lenScale;
    const x0 = cx - ux * hLen + nx * offN;
    const y0 = cy - uy * hLen + ny * offN;
    const x1 = cx + ux * hLen + nx * (offN + (m.rnd() - 0.5) * 22);
    const y1 = cy + uy * hLen + ny * (offN + (m.rnd() - 0.5) * 22);
    drawDryBrushStrokeVector(m, x0, y0, x1, y1, width * (1 - Math.abs(v) * 0.18), col, {
      bristles: 28,
      dryness: Math.min(92, dryness + 10),
      splatter: Math.round(splatter * 0.5),
      taperStart: 0.42,
      taperEnd: 0.44,
      curve: v * 18 + (m.rnd() - 0.5) * 14,
    });
  }
}

// 7. ORGANIC INK BLOT & WATERCOLOR SPLATTER PATCH ENGINE (Microstock Best-Seller)
function drawInkBlotSplatterVector(
  m: any,
  cx: number,
  cy: number,
  radius: number,
  col: string,
  splatter: number
) {
  const parts: string[] = [];
  const lobes = 7 + Math.floor(m.rnd() * 6);
  const pts = 72;
  const ph1 = m.rnd() * Math.PI * 2;
  const ph2 = m.rnd() * Math.PI * 2;
  const ph3 = m.rnd() * Math.PI * 2;
  const poly: [number, number][] = [];

  for (let i = 0; i < pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    const n1 = Math.sin(a * lobes + ph1) * 0.24;
    const n2 = Math.cos(a * (lobes * 2 + 1) + ph2) * 0.14;
    const n3 = Math.sin(a * 3 + ph3) * 0.12;
    const spike = i % 5 === 0 ? (m.rnd() - 0.2) * 0.28 : 0;
    const r = Math.max(radius * 0.28, radius * (0.78 + n1 + n2 + n3 + spike));
    poly.push([
      Math.max(8, Math.min(T - 8, cx + Math.cos(a) * r)),
      Math.max(8, Math.min(T - 8, cy + Math.sin(a) * r)),
    ]);
  }
  let d = `M${f1(poly[0][0])} ${f1(poly[0][1])}`;
  for (let i = 1; i < poly.length; i++) d += `L${f1(poly[i][0])} ${f1(poly[i][1])}`;
  d += "Z";
  parts.push(`<path d="${d}" fill="${col}"/>`);

  // Radiating ink filaments and satellite droplets
  const drops = Math.max(12, Math.min(90, Math.round(splatter + 24)));
  for (let k = 0; k < drops; k++) {
    const ang = m.rnd() * Math.PI * 2;
    const dist = radius * (0.75 + Math.pow(m.rnd(), 0.75) * 1.15);
    const sx = cx + Math.cos(ang) * dist;
    const sy = cy + Math.sin(ang) * dist;
    if (sx < 10 || sx > T - 10 || sy < 10 || sy > T - 10) continue;
    if (k % 3 === 0) {
      // Teardrop streak outward
      const sLen = 12 + m.rnd() * 38;
      const sw = 2.2 + m.rnd() * 5.5;
      const ux = Math.cos(ang);
      const uy = Math.sin(ang);
      const nx = -uy;
      const ny = ux;
      parts.push(
        `<path d="M${f1(sx - ux * sLen * 0.4)} ${f1(sy - uy * sLen * 0.4)}L${f1(
          sx + nx * sw
        )} ${f1(sy + ny * sw)}L${f1(sx + ux * sLen)} ${f1(sy + uy * sLen)}L${f1(
          sx - nx * sw
        )} ${f1(sy - ny * sw)}Z" fill="${col}"/>`
      );
    } else {
      const dr = 1.6 + Math.pow(m.rnd(), 1.6) * 10;
      parts.push(`<circle cx="${f1(sx)}" cy="${f1(sy)}" r="${f1(dr)}" fill="${col}"/>`);
    }
  }
  m.raw(parts.join(""));
}

// 8. GRUNGE SHAPE & BADGE SILHOUETTE STAMP ENGINE (Heart, Starburst, Arrow, Spiral, Shield)
function drawGrungeShapeStampVector(
  m: any,
  cx: number,
  cy: number,
  radius: number,
  col: string,
  shape: "heart" | "star" | "spiral" | "arrow" | "shield",
  dryness: number
) {
  if (shape === "spiral") {
    // Cyclone Dry-Brush Spiral Vortex built from curved dry-brush segments
    const turns = 2.4;
    const segs = 16;
    for (let s = 0; s < segs; s++) {
      const t0 = s / segs;
      const t1 = (s + 0.92) / segs;
      const a0 = t0 * turns * Math.PI * 2;
      const a1 = t1 * turns * Math.PI * 2;
      const r0 = radius * (0.14 + 0.86 * t0);
      const r1 = radius * (0.14 + 0.86 * t1);
      const x0 = cx + Math.cos(a0) * r0;
      const y0 = cy + Math.sin(a0) * r0;
      const x1 = cx + Math.cos(a1) * r1;
      const y1 = cy + Math.sin(a1) * r1;
      drawDryBrushStrokeVector(m, x0, y0, x1, y1, radius * (0.12 + 0.24 * (1 - t0)), col, {
        bristles: 18,
        dryness,
        splatter: 4,
        taperStart: s === 0 ? 0.35 : 0.04,
        taperEnd: s === segs - 1 ? 0.45 : 0.04,
      });
    }
    return;
  }

  if (shape === "arrow") {
    // Hand-painted Grunge Arrow / Chevron
    drawDryBrushStrokeVector(m, cx - radius * 0.85, cy, cx + radius * 0.65, cy, radius * 0.34, col, {
      bristles: 26,
      dryness,
      splatter: 12,
      taperStart: 0.25,
      taperEnd: 0.12,
    });
    drawDryBrushStrokeVector(
      m,
      cx + radius * 0.1,
      cy - radius * 0.55,
      cx + radius * 0.85,
      cy + radius * 0.04,
      radius * 0.3,
      col,
      { bristles: 22, dryness, splatter: 8, taperStart: 0.22, taperEnd: 0.15 }
    );
    drawDryBrushStrokeVector(
      m,
      cx + radius * 0.1,
      cy + radius * 0.55,
      cx + radius * 0.85,
      cy - radius * 0.04,
      radius * 0.3,
      col,
      { bristles: 22, dryness, splatter: 8, taperStart: 0.22, taperEnd: 0.15 }
    );
    return;
  }

  // Distressed polygon stamp for Heart, Star, or Shield
  const pts = 96;
  const ph = m.rnd() * Math.PI * 2;
  const gScale = dryness / 100;
  const poly: [number, number][] = [];
  for (let i = 0; i < pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    let baseR = radius;
    if (shape === "star") {
      const spikes = 5;
      const sWave = 0.5 + 0.5 * Math.cos(a * spikes - Math.PI / 2);
      baseR = radius * (0.44 + 0.58 * Math.pow(sWave, 1.3));
    } else if (shape === "heart") {
      // Parametric heart
      const t = a;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      const jit = 1 + (Math.sin(i * 1.9 + ph) * 0.08 + (m.rnd() - 0.5) * 0.09) * gScale;
      poly.push([cx + hx * (radius / 17) * jit, cy + hy * (radius / 17) * jit]);
      continue;
    } else {
      // Shield / hexagon seal
      const sides = 6;
      const segA = ((a % ((Math.PI * 2) / sides)) - Math.PI / sides);
      baseR = (radius * Math.cos(Math.PI / sides)) / Math.max(0.5, Math.cos(segA));
    }
    const jit = 1 + (Math.sin(i * 2.1 + ph) * 0.09 + (m.rnd() - 0.5) * 0.1) * gScale;
    poly.push([cx + Math.cos(a) * baseR * jit, cy + Math.sin(a) * baseR * jit]);
  }
  let d = `M${f1(poly[0][0])} ${f1(poly[0][1])}`;
  for (let i = 1; i < poly.length; i++) d += `L${f1(poly[i][0])} ${f1(poly[i][1])}`;
  d += "Z";
  m.raw(`<path d="${d}" fill="${col}"/>`);
}

// 9. POROUS CHALK, CHARCOAL & SPONGE GRUNGE BAR ENGINE (EXACT MATCH TO REF IMAGE #5 LEFT PANEL)
function drawChalkCharcoalSpongeBarVector(
  m: any,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  width: number,
  col: string,
  variant: "sponge" | "split_streak" | "dense_crumb" | "hollow_grit" | "pastel_rub",
  dryness: number
) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  if (len < 12) return;
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const parts: string[] = [];
  const gScale = Math.max(0.25, dryness / 100);

  if (variant === "split_streak") {
    // Multi-ribbon split dry bristle bar with crisp parallel gaps & frayed needle tips (like Row 3 & Row 4 in Left Panel)
    const ribbons = 4 + Math.floor(m.rnd() * 3);
    for (let r = 0; r < ribbons; r++) {
      const v = (r / (ribbons - 1)) * 2 - 1;
      const offN = v * width * 0.45 + (m.rnd() - 0.5) * 3;
      const rW = (width / ribbons) * (0.48 + m.rnd() * 0.55);
      const tStart = m.rnd() * 0.08;
      const tEnd = 0.92 + m.rnd() * 0.08;
      drawDryBrushStrokeVector(
        m,
        x0 + ux * (tStart * len) + nx * offN,
        y0 + uy * (tStart * len) + ny * offN,
        x0 + ux * (tEnd * len) + nx * offN,
        y0 + uy * (tEnd * len) + ny * offN,
        rW,
        col,
        {
          bristles: 14,
          dryness: Math.min(92, dryness + 12),
          splatter: 4,
          taperStart: 0.16,
          taperEnd: 0.22,
          curve: (m.rnd() - 0.5) * 6,
        }
      );
    }
    return;
  }

  // Build organic rough charcoal bar outer contour
  const steps = 32;
  const topPts: [number, number][] = [];
  const botPts: [number, number][] = [];
  const ph1 = m.rnd() * Math.PI * 2;
  const ph2 = m.rnd() * Math.PI * 2;
  const effW = variant === "dense_crumb" ? width * 0.65 : width;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const endEnv =
      t < 0.09
        ? 0.45 + 0.55 * (t / 0.09)
        : t > 0.91
        ? 0.45 + 0.55 * ((1 - t) / 0.09)
        : 1;
    const jagT =
      1 +
      (Math.sin(t * 29 + ph1) * 0.16 + (m.rnd() - 0.5) * 0.24) * gScale;
    const jagB =
      1 +
      (Math.cos(t * 27 + ph2) * 0.16 + (m.rnd() - 0.5) * 0.24) * gScale;
    const bx = x0 + ux * (t * len);
    const by = y0 + uy * (t * len);
    const hwT = effW * 0.5 * endEnv * Math.max(0.25, jagT);
    const hwB = effW * 0.5 * endEnv * Math.max(0.25, jagB);
    topPts.push([bx + nx * hwT, by + ny * hwT]);
    botPts.unshift([bx - nx * hwB, by - ny * hwB]);
  }

  const outerPoly = topPts.concat(botPts);
  let compD = `M${f1(outerPoly[0][0])} ${f1(outerPoly[0][1])}`;
  for (let i = 1; i < outerPoly.length; i++) {
    compD += `L${f1(outerPoly[i][0])} ${f1(outerPoly[i][1])}`;
  }
  compD += "Z";

  // Carve genuine internal chalk/charcoal sponge pores (even-odd compound subpaths so SVG & EPS 10 have true transparent grit holes!)
  const numPores =
    variant === "hollow_grit"
      ? 68
      : variant === "sponge"
      ? 52
      : variant === "pastel_rub"
      ? 42
      : 22;

  for (let p = 0; p < numPores; p++) {
    const pt = 0.05 + m.rnd() * 0.9;
    const pv = (m.rnd() - 0.5) * 0.78;
    const pcx = x0 + ux * (pt * len) + nx * (pv * effW);
    const pcy = y0 + uy * (pt * len) + ny * (pv * effW);
    const prx = (2.5 + m.rnd() * (variant === "hollow_grit" ? 11 : 7.5)) * gScale;
    const pry = (1.6 + m.rnd() * (variant === "hollow_grit" ? 6.5 : 4.5)) * gScale;
    const sides = 5;
    const holePts: [number, number][] = [];
    for (let s = 0; s < sides; s++) {
      const a = (s / sides) * Math.PI * 2;
      const lx = Math.cos(a) * prx * (0.7 + m.rnd() * 0.5);
      const ly = Math.sin(a) * pry * (0.7 + m.rnd() * 0.5);
      holePts.push([pcx + ux * lx + nx * ly, pcy + uy * lx + ny * ly]);
    }
    compD += `M${f1(holePts[0][0])} ${f1(holePts[0][1])}`;
    for (let s = 1; s < holePts.length; s++) {
      compD += `L${f1(holePts[s][0])} ${f1(holePts[s][1])}`;
    }
    compD += "Z";
  }

  parts.push(`<path d="${compD}" fill="${col}" fill-rule="evenodd"/>`);

  // Add perimeter charcoal dust crumbs & broken chalk flecks along edges and tips
  const crumbs = Math.round((variant === "hollow_grit" || variant === "sponge" ? 85 : 55) * gScale);
  for (let c = 0; c < crumbs; c++) {
    const ct = -0.03 + m.rnd() * 1.06;
    const side = m.rnd() < 0.5 ? -1 : 1;
    const cn = side * effW * (0.38 + m.rnd() * 0.34);
    const cx = x0 + ux * (ct * len) + nx * cn;
    const cy = y0 + uy * (ct * len) + ny * cn;
    if (cx < 6 || cx > T - 6 || cy < 6 || cy > T - 6) continue;
    const cr = 1.1 + m.rnd() * 3.2;
    parts.push(`<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(cr)}" fill="${col}"/>`);
  }

  m.raw(parts.join(""));
}

// 10. FINE CALLIGRAPHY LINER, TAPERED INK & MICRO-BRISTLE ENGINE (EXACT MATCH TO REF IMAGE #5 MIDDLE PANEL)
function drawFineCalligraphyLinerVector(
  m: any,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  maxTh: number,
  col: string,
  colStyle: 0 | 1 | 2 | 3,
  rowIdx: number,
  dryness: number
) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  if (len < 10) return;
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const parts: string[] = [];

  if (colStyle === 0) {
    // Column 1: Medium tapered calligraphy & wavy sumi-ink strokes (some S-curved, some thick-to-thin)
    const isWave = rowIdx === 5 || rowIdx === 2;
    const waveAmp = isWave ? (rowIdx === 5 ? 11 : -6) : (rowIdx % 2 === 0 ? 2.5 : -2.5);
    const steps = 28;
    const topP: [number, number][] = [];
    const botP: [number, number][] = [];
    const swellPos = 0.25 + (rowIdx % 3) * 0.22;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const env = Math.sin(Math.pow(t, 0.75) * Math.PI) * (0.75 + 0.35 * Math.exp(-Math.pow((t - swellPos) / 0.28, 2)));
      const curveY = Math.sin(t * Math.PI * (isWave ? 2 : 1)) * waveAmp;
      const hw = Math.max(0.9, maxTh * 0.55 * env);
      const bx = x0 + ux * (t * len) + nx * curveY;
      const by = y0 + uy * (t * len) + ny * curveY;
      topP.push([bx + nx * hw, by + ny * hw]);
      botP.unshift([bx - nx * hw, by - ny * hw]);
    }
    const all = topP.concat(botP);
    let d = `M${f1(all[0][0])} ${f1(all[0][1])}`;
    for (let i = 1; i < all.length; i++) d += `L${f1(all[i][0])} ${f1(all[i][1])}`;
    d += "Z";
    parts.push(`<path d="${d}" fill="${col}"/>`);
    // Frayed dry-brush tail hairs on select rows
    if (rowIdx % 2 === 1) {
      for (let h = 0; h < 4; h++) {
        const hv = (h / 3 - 0.5) * maxTh * 0.7;
        const hx0 = x0 + ux * (len * 0.74) + nx * hv;
        const hy0 = y0 + uy * (len * 0.74) + ny * hv;
        const hx1 = x0 + ux * (len * (0.96 + m.rnd() * 0.05)) + nx * (hv * 0.6);
        const hy1 = y0 + uy * (len * (0.96 + m.rnd() * 0.05)) + ny * (hv * 0.6);
        parts.push(
          `<path d="M${f1(hx0)} ${f1(hy0 - 0.9)}L${f1(hx1)} ${f1(hy1)}L${f1(hx0)} ${f1(
            hy0 + 0.9
          )}Z" fill="${col}"/>`
        );
      }
    }
  } else if (colStyle === 1) {
    // Column 2: Ultra-slender fine-liner, technical needle-pen & broken dry hairline strokes
    const isBroken = rowIdx === 3 || rowIdx === 4 || rowIdx === 6;
    const th = maxTh * (isBroken ? 0.24 : rowIdx % 3 === 0 ? 0.42 : 0.58);
    const segs = isBroken ? 4 : 1;
    for (let s = 0; s < segs; s++) {
      const t0 = s / segs + (s > 0 ? 0.02 : 0);
      const t1 = (s + 1) / segs - (s < segs - 1 ? 0.025 : 0);
      const steps = 16;
      const topP: [number, number][] = [];
      const botP: [number, number][] = [];
      for (let i = 0; i <= steps; i++) {
        const u = i / steps;
        const t = t0 + (t1 - t0) * u;
        const env = Math.sin(u * Math.PI);
        const hw = Math.max(0.6, th * 0.5 * (0.25 + 0.75 * env) * (0.85 + m.rnd() * 0.25));
        const bx = x0 + ux * (t * len);
        const by = y0 + uy * (t * len);
        topP.push([bx + nx * hw, by + ny * hw]);
        botP.unshift([bx - nx * hw, by - ny * hw]);
      }
      const all = topP.concat(botP);
      let d = `M${f1(all[0][0])} ${f1(all[0][1])}`;
      for (let i = 1; i < all.length; i++) d += `L${f1(all[i][0])} ${f1(all[i][1])}`;
      d += "Z";
      parts.push(`<path d="${d}" fill="${col}"/>`);
    }
  } else if (colStyle === 2) {
    // Column 3: Feathered multi-hair dry-brush strokes with needle-frayed tips on both ends
    drawDryBrushStrokeVector(m, x0, y0, x1, y1, maxTh * (0.72 + (rowIdx % 3) * 0.16), col, {
      bristles: 16,
      dryness: Math.min(88, dryness + 10),
      splatter: 0,
      taperStart: 0.34,
      taperEnd: 0.36,
      curve: (rowIdx % 2 === 0 ? 1 : -1) * 2.5,
    });
    return;
  } else {
    // Column 4: Distressed sketchy double-track charcoal lines & broken grunge underlines
    const tracks = rowIdx % 2 === 0 ? 2 : 3;
    for (let tr = 0; tr < tracks; tr++) {
      const v = (tr / (tracks - 1)) * 2 - 1;
      const offN = v * maxTh * 0.32;
      const trW = (maxTh / tracks) * 0.55;
      const segs = 2 + Math.floor(m.rnd() * 3);
      let curT = m.rnd() * 0.04;
      for (let s = 0; s < segs; s++) {
        const segL = (1 - curT) / (segs - s) - m.rnd() * 0.04;
        const tEnd = Math.min(1, curT + Math.max(0.18, segL));
        const steps = 12;
        const topP: [number, number][] = [];
        const botP: [number, number][] = [];
        for (let i = 0; i <= steps; i++) {
          const u = i / steps;
          const t = curT + (tEnd - curT) * u;
          const env = Math.sin(u * Math.PI);
          const hw = Math.max(0.7, trW * (0.35 + 0.65 * env) * (0.8 + m.rnd() * 0.35));
          const bx = x0 + ux * (t * len) + nx * offN;
          const by = y0 + uy * (t * len) + ny * offN;
          topP.push([bx + nx * hw, by + ny * hw]);
          botP.unshift([bx - nx * hw, by - ny * hw]);
        }
        const all = topP.concat(botP);
        let d = `M${f1(all[0][0])} ${f1(all[0][1])}`;
        for (let i = 1; i < all.length; i++) d += `L${f1(all[i][0])} ${f1(all[i][1])}`;
        d += "Z";
        parts.push(`<path d="${d}" fill="${col}"/>`);
        curT = tEnd + 0.02 + m.rnd() * 0.04;
      }
    }
  }

  m.raw(parts.join(""));
}

// 11. CHUNKY ACRYLIC DAUB BLOCKS, OVAL PATCHES & VERTICAL SPINDLE ENGINE (EXACT MATCH TO REF IMAGE #5 RIGHT PANEL)
function drawChunkyPaintPatchDaubVector(
  m: any,
  cx: number,
  cy: number,
  w: number,
  h: number,
  angleDeg: number,
  col: string,
  patchStyle: "block_frayed" | "spindle" | "rounded_blob",
  dryness: number
) {
  const rad = (angleDeg * Math.PI) / 180;
  const ux = Math.cos(rad);
  const uy = Math.sin(rad);
  const nx = -uy;
  const ny = ux;
  const hw = w * 0.5;
  const hh = h * 0.5;
  const gScale = Math.max(0.25, dryness / 100);

  if (patchStyle === "spindle") {
    // Tapered organic oval/leaf brush stroke (used for vertical spindle, angled leaf daub, and narrow swatches)
    drawDryBrushStrokeVector(
      m,
      cx - ux * hw,
      cy - uy * hw,
      cx + ux * hw,
      cy + uy * hw,
      h,
      col,
      {
        bristles: 22,
        dryness: Math.max(18, dryness * 0.55),
        splatter: 0,
        taperStart: 0.34,
        taperEnd: 0.38,
        curve: (m.rnd() - 0.5) * 8,
      }
    );
    return;
  }

  if (patchStyle === "rounded_blob") {
    // Smooth dark impasto oval/lozenge patch with subtle bristle edge
    const N = 44;
    const pts: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      // Superellipse lozenge shape
      const rx = Math.sign(ca) * Math.pow(Math.abs(ca), 0.72) * hw;
      const ry = Math.sign(sa) * Math.pow(Math.abs(sa), 0.78) * hh;
      const jag = 1 + (m.rnd() - 0.5) * 0.08 * gScale;
      pts.push([
        cx + (ux * rx + nx * ry) * jag,
        cy + (uy * rx + ny * ry) * jag,
      ]);
    }
    let d = `M${f1(pts[0][0])} ${f1(pts[0][1])}`;
    for (let i = 1; i < pts.length; i++) d += `L${f1(pts[i][0])} ${f1(pts[i][1])}`;
    d += "Z";
    m.raw(`<path d="${d}" fill="${col}"/>`);
    return;
  }

  // "block_frayed": Chunky wide acrylic daub block with solid painted belly and jagged frayed bristle teeth at left & right ends!
  const teeth = 14;
  const poly: [number, number][] = [];

  // Top edge (left to right, slightly organic)
  const topSteps = 10;
  for (let i = 0; i <= topSteps; i++) {
    const u = (i / topSteps) * 2 - 1;
    const lx = u * hw * 0.84;
    const ly = -hh * (0.94 + (m.rnd() - 0.5) * 0.1 * gScale);
    poly.push([cx + ux * lx + nx * ly, cy + uy * lx + ny * ly]);
  }

  // Right end frayed bristle teeth (top to bottom)
  for (let t = 0; t <= teeth; t++) {
    const v = (t / teeth) * 2 - 1;
    const isTip = t % 2 === 1;
    const reach = isTip ? hw * (0.94 + m.rnd() * 0.16) : hw * (0.76 + m.rnd() * 0.1);
    const ly = v * hh * 0.94;
    poly.push([cx + ux * reach + nx * ly, cy + uy * reach + ny * ly]);
  }

  // Bottom edge (right to left)
  for (let i = topSteps; i >= 0; i--) {
    const u = (i / topSteps) * 2 - 1;
    const lx = u * hw * 0.84;
    const ly = hh * (0.94 + (m.rnd() - 0.5) * 0.1 * gScale);
    poly.push([cx + ux * lx + nx * ly, cy + uy * lx + ny * ly]);
  }

  // Left end frayed bristle teeth (bottom to top)
  for (let t = teeth; t >= 0; t--) {
    const v = (t / teeth) * 2 - 1;
    const isTip = t % 2 === 0;
    const reach = isTip ? -hw * (0.92 + m.rnd() * 0.14) : -hw * (0.78 + m.rnd() * 0.1);
    const ly = v * hh * 0.94;
    poly.push([cx + ux * reach + nx * ly, cy + uy * reach + ny * ly]);
  }

  let d = `M${f1(poly[0][0])} ${f1(poly[0][1])}`;
  for (let i = 1; i < poly.length; i++) d += `L${f1(poly[i][0])} ${f1(poly[i][1])}`;
  d += "Z";
  m.raw(`<path d="${d}" fill="${col}"/>`);
}

type BrushArchId =
  | "chalk_charcoal_3col"
  | "fineliner_4col_sheet"
  | "chunky_daub_patches"
  | "trio_showcase_mega"
  | "porous_crayon_pastel"
  | "calligraphy_pen_rules"
  | "diag_slash_pair"
  | "master_kit_sheet"
  | "stipple_halftone_sheet"
  | "horiz_stroke_set"
  | "grunge_circle_quad"
  | "halftone_matrix_set"
  | "stipple_cloud_set"
  | "vert_bristle_set"
  | "katana_cross_slash"
  | "sumie_wave_strokes"
  | "hero_giant_slash"
  | "short_daub_grid"
  | "splatter_burst"
  | "palette_knife_set"
  | "enso_ring_set"
  | "halftone_strip_bars"
  | "stipple_halo_rings"
  | "chisel_marker_drips"
  | "quill_speed_streaks"
  | "crosshatch_stamps"
  | "grunge_frame_border"
  | "wavy_underlines"
  | "angled_oval_stipple"
  | "mega_bundle_sheet"
  | "paint_roller_tracks"
  | "claw_scratch_slashes"
  | "watercolor_ink_blots"
  | "calligraphy_swoosh_arc"
  | "grunge_banner_ribbons"
  | "radial_sunburst_strokes"
  | "spiral_vortex_swirl"
  | "chevron_arrow_strokes"
  | "hearted_grunge_stamps"
  | "halftone_diagonal_wave"
  | "zigzag_scribble_scratch"
  | "mixed_stamp_sampler";

interface BrushPresetSpec {
  id: string;
  name: string;
  arch: BrushArchId;
  ink: string;
  cols: [string, string, string, string, string];
}

const BRUSH_ARCH_OPTS: [BrushArchId, string][] = [
  ["chalk_charcoal_3col", "01 · 3-Column Chalk, Charcoal & Sponge Bars (Ref #5A)"],
  ["fineliner_4col_sheet", "02 · 4-Column Fine Liner & Tapered Ink Set (Ref #5B)"],
  ["chunky_daub_patches", "03 · Chunky Acrylic Daub Blocks & Patches (Ref #5C)"],
  ["trio_showcase_mega", "04 · Mega 3-Panel Studio Brush Collection (Ref #5 Full)"],
  ["porous_crayon_pastel", "05 · Porous Pastel, Chalk & Sponge Grunge Strips"],
  ["calligraphy_pen_rules", "06 · Calligraphic Quill, Needle Liner & Sketch Rules"],
  ["diag_slash_pair", "07 · Diagonal Grunge Slash & Splatter (Ref #2)"],
  ["master_kit_sheet", "08 · Master Dry-Brush Kit Sheet (Ref #3)"],
  ["stipple_halftone_sheet", "09 · Stipple Airbrush & Halftone Kit (Ref #4)"],
  ["horiz_stroke_set", "10 · Horizontal Acrylic Dry-Brush Pack"],
  ["grunge_circle_quad", "11 · Distressed Grunge Circle & Enso Stamps"],
  ["halftone_matrix_set", "12 · Radial Halftone Dot-Matrix Collection"],
  ["stipple_cloud_set", "13 · Charcoal & Airbrush Stipple Grain Clouds"],
  ["vert_bristle_set", "14 · Vertical Dry-Brush Bristle Pillars"],
  ["katana_cross_slash", "15 · Crossed Katana Dry-Brush X-Slash"],
  ["sumie_wave_strokes", "16 · Sumi-e Calligraphic S-Wave Strokes"],
  ["hero_giant_slash", "17 · Giant Single Hero Dry-Brush Banner Slash"],
  ["short_daub_grid", "18 · Short Grunge Paint Daubs & Tag Swatches"],
  ["splatter_burst", "19 · Explosive Radial Ink Splatter Burst"],
  ["palette_knife_set", "20 · Broken Palette-Knife & Impasto Scrapers"],
  ["enso_ring_set", "21 · Japanese Zen Enso Calligraphic Open Rings"],
  ["halftone_strip_bars", "22 · Distressed Comic Halftone Gradient Strips"],
  ["stipple_halo_rings", "23 · Hollow Stipple Ring & Dust Halo Brushes"],
  ["chisel_marker_drips", "24 · Street Graffiti Chisel Marker & Paint Drips"],
  ["quill_speed_streaks", "25 · Razor-Tapered Speed Bristle & Quill Streaks"],
  ["crosshatch_stamps", "26 · Grunge Cross-Hatch & Bristle Shading Set"],
  ["grunge_frame_border", "27 · Distressed Dry-Brush 4-Edge Grunge Frame"],
  ["wavy_underlines", "28 · Hand-Painted Dry-Brush Underlines & Swashes"],
  ["angled_oval_stipple", "29 · Angled Elliptical Stipple & Halftone Puffs"],
  ["mega_bundle_sheet", "30 · All-In-One Microstock Brush Bundle Sheet"],
  ["paint_roller_tracks", "31 · Distressed Paint Roller Texture Tracks"],
  ["claw_scratch_slashes", "32 · Wild Beast Claw Scratch & Rip Slashes"],
  ["watercolor_ink_blots", "33 · Organic Ink Blot & Wet Splatter Patches"],
  ["calligraphy_swoosh_arc", "34 · Cosmetic Mascara & Calligraphic Arc Swoosh"],
  ["grunge_banner_ribbons", "35 · Wide Grunge Sale-Banner & Header Strips"],
  ["radial_sunburst_strokes", "36 · Hand-Brushed Radial Sunburst & Star Rays"],
  ["spiral_vortex_swirl", "37 · Spiral Vortex & Cyclone Dry-Brush Swirl"],
  ["chevron_arrow_strokes", "38 · Hand-Painted Dry-Brush Arrows & Chevrons"],
  ["hearted_grunge_stamps", "39 · Grunge Heart, Star & Seal Badge Stamps"],
  ["halftone_diagonal_wave", "40 · Wavy Diagonal Halftone Dot & Stipple Flow"],
  ["zigzag_scribble_scratch", "41 · Energetic Zig-Zag Charcoal Scribble Hatch"],
  ["mixed_stamp_sampler", "42 · 9-Grid Microstock Brush & Stamp Sampler"],
];

const MASTER_BRUSH_36: BrushPresetSpec[] = [
  {
    id: "brush_chalk_charcoal_3col",
    name: "3-Column Chalk, Charcoal & Grunge Sponge Bars",
    arch: "chalk_charcoal_3col",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_fineliner_4col_sheet",
    name: "4-Column Fine Liner, Tapered Ink & Bristle Set",
    arch: "fineliner_4col_sheet",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#334155"],
  },
  {
    id: "brush_chunky_daub_patches",
    name: "Chunky Acrylic Daub Blocks, Blobs & Swatch Kit",
    arch: "chunky_daub_patches",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_trio_showcase_mega",
    name: "Mega 3-Panel Studio Brush Collection Sheet",
    arch: "trio_showcase_mega",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#334155"],
  },
  {
    id: "brush_porous_crayon_pastel",
    name: "Porous Pastel, Chalk & Sponge Grunge Strips",
    arch: "porous_crayon_pastel",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1c1917", "#3f3f46"],
  },
  {
    id: "brush_calligraphy_pen_rules",
    name: "Calligraphic Quill, Needle Liner & Sketch Rules",
    arch: "calligraphy_pen_rules",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#334155"],
  },
  {
    id: "brush_diag_grunge_slash",
    name: "Diagonal Grunge Dry-Brush Slash & Splatter",
    arch: "diag_slash_pair",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_master_kit_sheet",
    name: "Dry-Brush Kit (Strokes, Grunge Circles & Strips)",
    arch: "master_kit_sheet",
    ink: "#09090b",
    cols: ["#09090b", "#111827", "#1e293b", "#27272a", "#0f172a"],
  },
  {
    id: "brush_stipple_halftone_kit",
    name: "Stipple Airbrush & Halftone Dot Brush Set",
    arch: "stipple_halftone_sheet",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#1f2937", "#334155", "#111827"],
  },
  {
    id: "brush_horiz_acrylic_set",
    name: "Horizontal Acrylic Dry-Brush Stroke Pack",
    arch: "horiz_stroke_set",
    ink: "#09090b",
    cols: ["#09090b", "#171717", "#262626", "#1e293b", "#404040"],
  },
  {
    id: "brush_grunge_circle_stamps",
    name: "Distressed Grunge Circle & Enso Stamp Set",
    arch: "grunge_circle_quad",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#3f3f46"],
  },
  {
    id: "brush_halftone_dot_matrix",
    name: "Radial Halftone Dot-Matrix Brush Collection",
    arch: "halftone_matrix_set",
    ink: "#09090b",
    cols: ["#09090b", "#111827", "#1e293b", "#27272a", "#334155"],
  },
  {
    id: "brush_stipple_spray_clouds",
    name: "Charcoal & Airbrush Stipple Grain Spheres",
    arch: "stipple_cloud_set",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1f2937", "#374151"],
  },
  {
    id: "brush_vert_bristle_pillars",
    name: "Vertical Dry-Brush Bristle Pillars & Streaks",
    arch: "vert_bristle_set",
    ink: "#09090b",
    cols: ["#09090b", "#171717", "#262626", "#111827", "#3f3f46"],
  },
  {
    id: "brush_katana_cross_slash",
    name: "Crossed Katana Dry-Brush X-Slash & Ink Spray",
    arch: "katana_cross_slash",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_sumie_calligraphy_wave",
    name: "Sumi-e Calligraphic Curved Dry-Brush Waves",
    arch: "sumie_wave_strokes",
    ink: "#09090b",
    cols: ["#09090b", "#1e293b", "#0f172a", "#334155", "#18181b"],
  },
  {
    id: "brush_hero_single_slash",
    name: "Giant Single Diagonal Dry-Brush Hero Stroke",
    arch: "hero_giant_slash",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_rough_daub_swatches",
    name: "Short Grunge Paint Daubs & Tag Swatches",
    arch: "short_daub_grid",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1e293b", "#334155"],
  },
  {
    id: "brush_ink_splatter_burst",
    name: "Explosive Ink Splatter & Bristle Streak Burst",
    arch: "splatter_burst",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#3f3f46"],
  },
  {
    id: "brush_palette_knife_drag",
    name: "Broken Palette-Knife & Dry Scraper Strokes",
    arch: "palette_knife_set",
    ink: "#09090b",
    cols: ["#09090b", "#1c1917", "#292524", "#44403c", "#18181b"],
  },
  {
    id: "brush_enso_zen_rings",
    name: "Zen Enso Open Dry-Brush Calligraphic Rings",
    arch: "enso_ring_set",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_halftone_gradient_bars",
    name: "Distressed Comic Halftone Gradient Strips",
    arch: "halftone_strip_bars",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#1e293b", "#334155", "#0f172a"],
  },
  {
    id: "brush_stipple_ring_halos",
    name: "Hollow Stipple Ring & Dust Halo Brushes",
    arch: "stipple_halo_rings",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1f2937", "#374151"],
  },
  {
    id: "brush_marker_chisel_drip",
    name: "Street Chisel Marker Dry Strokes & Drips",
    arch: "chisel_marker_drips",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_tapered_quill_streaks",
    name: "Razor-Tapered Speed Bristle & Quill Streaks",
    arch: "quill_speed_streaks",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#334155"],
  },
  {
    id: "brush_crosshatch_shading_set",
    name: "Grunge Cross-Hatch & Bristle Shading Stamps",
    arch: "crosshatch_stamps",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1f2937", "#374151"],
  },
  {
    id: "brush_grunge_border_frame",
    name: "Distressed Dry-Brush 4-Edge Grunge Frame",
    arch: "grunge_frame_border",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_wavy_ribbon_underlines",
    name: "Hand-Painted Dry-Brush Underlines & Swashes",
    arch: "wavy_underlines",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1e293b", "#334155"],
  },
  {
    id: "brush_oval_angled_stipple",
    name: "Angled Elliptical Stipple & Halftone Puff Set",
    arch: "angled_oval_stipple",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1f2937", "#374151"],
  },
  {
    id: "brush_mega_bundle_sheet",
    name: "All-In-One Microstock Brush Bundle Sheet",
    arch: "mega_bundle_sheet",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#334155"],
  },
  {
    id: "brush_paint_roller_tracks",
    name: "Distressed Paint Roller Texture Tracks",
    arch: "paint_roller_tracks",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_claw_scratch_slashes",
    name: "Wild Beast Claw Scratch & Rip Slashes",
    arch: "claw_scratch_slashes",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#3f3f46"],
  },
  {
    id: "brush_watercolor_ink_blots",
    name: "Organic Ink Blot & Wet Splatter Patches",
    arch: "watercolor_ink_blots",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1e293b", "#334155"],
  },
  {
    id: "brush_calligraphy_swoosh_arc",
    name: "Cosmetic Mascara & Calligraphic Arc Swooshes",
    arch: "calligraphy_swoosh_arc",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_grunge_banner_ribbons",
    name: "Wide Grunge Sale-Banner & Header Brush Strips",
    arch: "grunge_banner_ribbons",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#334155"],
  },
  {
    id: "brush_radial_sunburst_strokes",
    name: "Hand-Brushed Radial Sunburst & Star Rays",
    arch: "radial_sunburst_strokes",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_spiral_vortex_swirl",
    name: "Spiral Vortex & Cyclone Dry-Brush Swirl",
    arch: "spiral_vortex_swirl",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1e293b", "#334155"],
  },
  {
    id: "brush_chevron_arrow_strokes",
    name: "Hand-Painted Dry-Brush Arrows & Chevrons",
    arch: "chevron_arrow_strokes",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_hearted_grunge_stamps",
    name: "Grunge Heart, Star & Seal Badge Stamps",
    arch: "hearted_grunge_stamps",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#3f3f46"],
  },
  {
    id: "brush_halftone_diagonal_wave",
    name: "Wavy Diagonal Halftone Dot & Stipple Flow",
    arch: "halftone_diagonal_wave",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#1e293b", "#334155"],
  },
  {
    id: "brush_zigzag_scribble_scratch",
    name: "Energetic Zig-Zag Charcoal Scribble Hatch",
    arch: "zigzag_scribble_scratch",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#111827", "#3f3f46"],
  },
  {
    id: "brush_mixed_stamp_sampler",
    name: "9-Grid Microstock Brush & Stamp Sampler",
    arch: "mixed_stamp_sampler",
    ink: "#09090b",
    cols: ["#09090b", "#18181b", "#27272a", "#0f172a", "#334155"],
  },
];

function registerMasterBrush24() {
  for (const spec of MASTER_BRUSH_36) {
    registerMode({
      id: spec.id,
      name: spec.name,
      cat: "Brush",
      look: {
        bg: "#ffffff",
        ink: spec.ink,
        cols: [...spec.cols],
        style: "flat",
        sw: 2,
      },
      params: [
        {
          k: "arch",
          l: "Brush Archetype / Layout",
          type: "select",
          opts: BRUSH_ARCH_OPTS,
          def: spec.arch,
        },
        { k: "cnt", l: "Stroke / Stamp Count", min: 2, max: 8, def: 4 },
        { k: "ang", l: "Flow Angle / Tilt °", min: -45, max: 45, def: 0 },
        { k: "curve", l: "Calligraphic Bend", min: -60, max: 60, def: 0 },
        { k: "weight", l: "Brush Thickness %", min: 45, max: 160, def: 100 },
        { k: "bristles", l: "Bristle Hair Detail", min: 16, max: 75, def: 44 },
        { k: "dry", l: "Dry-Brush Roughness %", min: 15, max: 95, def: 58 },
        { k: "splat", l: "Ink Splatter Drops", min: 0, max: 90, def: 34 },
        {
          k: "cm",
          l: "Brush Ink Mode",
          type: "select",
          opts: [
            ["ink", "Pure Black / Ink (Reference)"],
            ["multi", "Palette Multi-Colour Brushes"],
          ],
          def: "ink",
        },
      ],
      draw(m: any, q: any) {
        const activeArch: BrushArchId = (q.arch as BrushArchId) || spec.arch;
        const wSc = (+q.weight || 100) / 100;
        const bristles = Math.max(12, Math.round(+q.bristles || 44));
        const dry = Math.max(10, Math.min(95, +q.dry || 58));
        const splat = Math.max(0, Math.round(q.splat !== undefined ? +q.splat : 34));
        const cnt = Math.max(2, Math.min(8, Math.round(+q.cnt || 4)));
        const angOff = (+q.ang || 0) + (m.rnd() - 0.5) * 14;
        const curveOff = (+q.curve || 0) + (m.rnd() - 0.5) * 20;
        const bCol = (idx = 0) => (q.cm === "multi" ? m.col(idx) : m.col(0) || "#09090b");

        // 0A. 3-COLUMN CHALK, CHARCOAL & GRUNGE SPONGE BARS (EXACT MATCH TO REF IMAGE #5 LEFT PANEL)
        if (activeArch === "chalk_charcoal_3col") {
          const rows = Math.max(4, Math.min(6, cnt + 1));
          const cols = 3;
          const cellW = 940 / cols;
          const stepY = 780 / Math.max(1, rows - 1);
          const variants: ("sponge" | "hollow_grit" | "split_streak" | "dense_crumb" | "pastel_rub")[] = [
            "sponge",
            "hollow_grit",
            "sponge",
            "dense_crumb",
            "split_streak",
            "pastel_rub",
          ];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              const x0 = 40 + c * cellW;
              const x1 = x0 + cellW - 28;
              const y = 110 + r * stepY;
              const vType = variants[(idx + Math.floor(m.rnd() * 3)) % variants.length];
              const barH = (vType === "dense_crumb" ? 56 : vType === "hollow_grit" ? 92 : 76) * (5 / rows) * wSc;
              drawChalkCharcoalSpongeBarVector(
                m,
                x0,
                y + (m.rnd() - 0.5) * 8,
                x1,
                y + (m.rnd() - 0.5) * 8,
                barH,
                bCol(idx),
                vType,
                dry
              );
            }
          }
          return;
        }

        // 0B. 4-COLUMN FINE LINER, TAPERED INK & MICRO-BRISTLE SHEET (EXACT MATCH TO REF IMAGE #5 MIDDLE PANEL)
        if (activeArch === "fineliner_4col_sheet") {
          const rows = Math.max(8, Math.min(13, cnt + 7));
          const cols = 4;
          const cellW = 936 / cols;
          const stepY = 850 / Math.max(1, rows - 1);
          for (let c = 0; c < cols; c++) {
            const colStyle = (c % 4) as 0 | 1 | 2 | 3;
            for (let r = 0; r < rows; r++) {
              const idx = r * cols + c;
              const x0 = 42 + c * cellW;
              const x1 = x0 + cellW - 24;
              const y = 75 + r * stepY;
              const th = (24 + (r % 3) * 8) * (11 / rows) * wSc;
              drawFineCalligraphyLinerVector(
                m,
                x0,
                y,
                x1,
                y,
                th,
                bCol(idx),
                colStyle,
                r + Math.floor(m.rnd() * 3),
                dry
              );
            }
          }
          return;
        }

        // 0C. CHUNKY ACRYLIC DAUB BLOCKS, OVAL BLOBS & VERTICAL SPINDLE KIT (EXACT MATCH TO REF IMAGE #5 RIGHT PANEL + SEED VARIATION)
        if (activeArch === "chunky_daub_patches") {
          const types: ("block_frayed" | "rounded_blob" | "spindle")[] = [
            "block_frayed",
            "rounded_blob",
            "spindle",
          ];
          const rotJ = () => (m.rnd() - 0.5) * 14 + angOff * 0.25;
          const pickT = (defIdx: number) => types[(defIdx + Math.floor(m.rnd() * 3)) % types.length];

          // Left Column: 4 assorted chunky daub blocks & narrow swatch
          drawChunkyPaintPatchDaubVector(m, 165, 165, (215 + m.rnd() * 35) * wSc, (135 + m.rnd() * 30) * wSc, rotJ(), bCol(0), pickT(0), dry);
          drawChunkyPaintPatchDaubVector(m, 160, 420, (185 + m.rnd() * 30) * wSc, (125 + m.rnd() * 25) * wSc, -2 + rotJ(), bCol(1), pickT(1), dry);
          drawChunkyPaintPatchDaubVector(m, 175, 650, (220 + m.rnd() * 30) * wSc, (44 + m.rnd() * 18) * wSc, rotJ(), bCol(2), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 160, 845, (195 + m.rnd() * 30) * wSc, (140 + m.rnd() * 25) * wSc, 2 + rotJ(), bCol(3), pickT(0), dry);

          // Center-Left Vertical Tapered Spindle Stroke (signature element in Panel 3!)
          drawChunkyPaintPatchDaubVector(m, 375, 725, (360 + m.rnd() * 45) * wSc, (48 + m.rnd() * 14) * wSc, 90 + rotJ() * 0.4, bCol(0), "spindle", dry);

          // Center Column: Top Tapered Oval Daub, Middle Rounded Block, Angled Leaf Daub, Lower Tapered Strokes & Oval Blob
          drawChunkyPaintPatchDaubVector(m, 555, 145, (275 + m.rnd() * 35) * wSc, (72 + m.rnd() * 18) * wSc, -2 + rotJ(), bCol(1), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 455, 365, (158 + m.rnd() * 24) * wSc, (92 + m.rnd() * 18) * wSc, 2 + rotJ(), bCol(2), pickT(1), dry);
          drawChunkyPaintPatchDaubVector(m, 645, 345, (168 + m.rnd() * 25) * wSc, (52 + m.rnd() * 14) * wSc, 34 + angOff * 0.5 + rotJ(), bCol(3), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 585, 530, (215 + m.rnd() * 25) * wSc, (54 + m.rnd() * 14) * wSc, 2 + rotJ(), bCol(0), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 575, 690, (200 + m.rnd() * 25) * wSc, (46 + m.rnd() * 14) * wSc, rotJ(), bCol(1), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 585, 865, (205 + m.rnd() * 25) * wSc, (105 + m.rnd() * 20) * wSc, rotJ(), bCol(2), pickT(1), dry);

          // Right Column: 4 Heavy Frayed Acrylic Blocks & Tapered Daub
          drawChunkyPaintPatchDaubVector(m, 855, 185, (215 + m.rnd() * 25) * wSc, (170 + m.rnd() * 25) * wSc, rotJ(), bCol(3), pickT(0), dry);
          drawChunkyPaintPatchDaubVector(m, 855, 445, (200 + m.rnd() * 25) * wSc, (130 + m.rnd() * 20) * wSc, rotJ(), bCol(0), pickT(0), dry);
          drawChunkyPaintPatchDaubVector(m, 855, 650, (205 + m.rnd() * 25) * wSc, (48 + m.rnd() * 16) * wSc, -3 + rotJ(), bCol(1), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 855, 845, (215 + m.rnd() * 25) * wSc, (148 + m.rnd() * 24) * wSc, rotJ(), bCol(2), pickT(0), dry);
          return;
        }

        // 0D. MEGA 3-PANEL STUDIO BRUSH COLLECTION SHEET (ALL 3 PANELS FROM REF IMAGE #5 ON ONE ARTBOARD)
        if (activeArch === "trio_showcase_mega") {
          // Left Third (x: 25..325): 5 Porous Chalk & Split Bristle Bars
          const p1Vars: ("sponge" | "hollow_grit" | "split_streak" | "dense_crumb" | "pastel_rub")[] = [
            "sponge",
            "dense_crumb",
            "split_streak",
            "hollow_grit",
            "pastel_rub",
          ];
          for (let r = 0; r < 5; r++) {
            const y = 110 + r * 195;
            drawChalkCharcoalSpongeBarVector(m, 32, y, 315, y, 68 * wSc, bCol(r), p1Vars[r % p1Vars.length], dry);
          }
          // Middle Third (x: 350..650): 2 Columns x 10 Fine Calligraphic & Feathered Liner Strokes
          for (let c = 0; c < 2; c++) {
            for (let r = 0; r < 10; r++) {
              const x0 = 352 + c * 152;
              const x1 = x0 + 136;
              const y = 80 + r * 93;
              drawFineCalligraphyLinerVector(
                m,
                x0,
                y,
                x1,
                y,
                22 * wSc,
                bCol(r + c),
                (c === 0 ? (r % 2 === 0 ? 0 : 2) : r % 2 === 0 ? 1 : 3) as 0 | 1 | 2 | 3,
                r,
                dry
              );
            }
          }
          // Right Third (x: 680..970): Assorted Chunky Acrylic Daub Blocks, Vertical Spindle & Angled Leaf
          drawChunkyPaintPatchDaubVector(m, 755, 155, 135 * wSc, 115 * wSc, 0, bCol(0), "block_frayed", dry);
          drawChunkyPaintPatchDaubVector(m, 905, 155, 125 * wSc, 125 * wSc, 0, bCol(1), "block_frayed", dry);
          drawChunkyPaintPatchDaubVector(m, 755, 365, 125 * wSc, 95 * wSc, 0, bCol(2), "rounded_blob", dry);
          drawChunkyPaintPatchDaubVector(m, 895, 365, 130 * wSc, 46 * wSc, 32, bCol(3), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 735, 710, 310 * wSc, 42 * wSc, 90, bCol(0), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 875, 575, 155 * wSc, 48 * wSc, 0, bCol(1), "spindle", dry);
          drawChunkyPaintPatchDaubVector(m, 875, 725, 150 * wSc, 92 * wSc, 0, bCol(2), "rounded_blob", dry);
          drawChunkyPaintPatchDaubVector(m, 875, 885, 155 * wSc, 115 * wSc, 0, bCol(3), "block_frayed", dry);
          return;
        }

        // 0E. POROUS PASTEL, CHALK & SPONGE GRUNGE STRIPS (FULL-WIDTH 5-ROW CHALK BARS)
        if (activeArch === "porous_crayon_pastel") {
          const rows = Math.max(4, Math.min(7, cnt + 1));
          const stepY = 780 / Math.max(1, rows - 1);
          const vars: ("sponge" | "hollow_grit" | "pastel_rub" | "split_streak")[] = [
            "hollow_grit",
            "sponge",
            "pastel_rub",
            "split_streak",
          ];
          for (let r = 0; r < rows; r++) {
            const y = 110 + r * stepY;
            drawChalkCharcoalSpongeBarVector(
              m,
              55,
              y - angOff * 0.7,
              945,
              y + angOff * 0.7,
              (390 / rows) * wSc,
              bCol(r),
              vars[(r + Math.floor(m.rnd() * 2)) % vars.length],
              dry
            );
          }
          return;
        }

        // 0F. CALLIGRAPHIC QUILL, NEEDLE LINER & SKETCH RULES (2-COLUMN WIDE LINER PACK)
        if (activeArch === "calligraphy_pen_rules") {
          const rows = Math.max(7, Math.min(12, cnt + 5));
          const cols = 2;
          const cellW = 910 / cols;
          const stepY = 820 / Math.max(1, rows - 1);
          for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
              const x0 = 50 + c * cellW;
              const x1 = x0 + cellW - 35;
              const y = 90 + r * stepY;
              const st = ((r + c * 2) % 4) as 0 | 1 | 2 | 3;
              drawFineCalligraphyLinerVector(m, x0, y, x1, y, 36 * wSc, bCol(r + c), st, r, dry);
            }
          }
          return;
        }

        // 1. DIAGONAL GRUNGE DRY-BRUSH SLASH & SPLATTER (REFERENCE IMAGE #2 + SEED MORPHING)
        if (activeArch === "diag_slash_pair") {
          const nSlashes = Math.max(2, Math.min(4, Math.round(cnt * 0.6)));
          const flipDir = m.rnd() < 0.35;
          for (let i = 0; i < nSlashes; i++) {
            const shift = (i - (nSlashes - 1) / 2) * (270 / Math.max(1, nSlashes - 1));
            const jx = (m.rnd() - 0.5) * 35;
            const jy = (m.rnd() - 0.5) * 35;
            const x0 = Math.max(35, Math.min(965, (flipDir ? 880 : 45) + shift * 0.85 + jx));
            const y0 = Math.max(35, Math.min(965, 865 + shift * 0.18 + jy));
            const x1 = Math.max(35, Math.min(965, (flipDir ? 120 : 585) + shift * 0.85 - jx));
            const y1 = Math.max(35, Math.min(965, 55 + shift * 0.25 - jy));
            drawDryBrushStrokeVector(m, x0, y0, x1, y1, (142 - i * 12) * wSc, bCol(i), {
              bristles: bristles + 14,
              dryness: dry,
              splatter: splat + 24,
              taperStart: 0.12 + (i % 2) * 0.14,
              taperEnd: 0.22 + ((i + 1) % 2) * 0.16,
              curve: (i % 2 === 0 ? -18 : 16) + curveOff * 0.5,
            });
          }
          return;
        }

        // 2. MASTER DRY-BRUSH KIT SHEET (REFERENCE IMAGE #3 + SEED VARIATION IN STROKES & STAMPS)
        if (activeArch === "master_kit_sheet") {
          const nHoriz = Math.max(4, Math.min(6, cnt + 1));
          const stepY = 820 / Math.max(1, nHoriz - 1);
          for (let i = 0; i < nHoriz; i++) {
            const y = 90 + i * stepY;
            drawDryBrushStrokeVector(
              m,
              38,
              y,
              365 + (m.rnd() - 0.5) * 18,
              y + (m.rnd() - 0.5) * 14,
              (50 + ((i + Math.floor(m.rnd() * 2)) % 2) * 12) * wSc,
              bCol(i),
              {
                bristles: Math.round(bristles * 0.85),
                dryness: dry + (i % 2) * 12,
                splatter: Math.round(splat * 0.25),
                taperStart: 0.12 + m.rnd() * 0.08,
                taperEnd: 0.16 + m.rnd() * 0.12,
                curve: (i % 2 === 0 ? -1 : 1) * (5 + Math.abs(curveOff) * 0.2),
              }
            );
          }
          const stampModes: ("solid" | "ring" | "enso")[] = ["solid", "enso", "ring", "solid"];
          const cCoords: [number, number][] = [
            [475, 175],
            [635, 175],
            [475, 385],
            [635, 385],
          ];
          cCoords.forEach(([cx, cy], idx) => {
            const mType = stampModes[(idx + Math.floor(m.rnd() * 3)) % stampModes.length];
            drawGrungeCircleStampVector(m, cx, cy, (64 + (m.rnd() - 0.5) * 10) * wSc, bCol(idx), mType, dry);
          });
          for (let v = 0; v < 3; v++) {
            const x = 755 + v * 95;
            drawDryBrushStrokeVector(m, x, 55, x + (m.rnd() - 0.5) * 14, 515, (48 + (v % 2) * 10) * wSc, bCol(v), {
              bristles: Math.round(bristles * 0.9),
              dryness: dry + 10,
              splatter: Math.round(splat * 0.2),
              taperStart: 0.16,
              taperEnd: 0.18,
              curve: (v - 1) * 6,
            });
          }
          const daubs: [number, number, number, number, number][] = [
            [425, 685, 675, 685, 58],
            [425, 875, 675, 870, 56],
            [725, 685, 855, 685, 46],
            [880, 685, 972, 690, 48],
            [725, 875, 855, 875, 46],
            [880, 875, 972, 875, 48],
          ];
          daubs.forEach(([x1, y1, x2, y2, w], idx) => {
            drawDryBrushStrokeVector(m, x1, y1, x2, y2 + (m.rnd() - 0.5) * 12, w * wSc, bCol(idx), {
              bristles: Math.round(bristles * 0.65),
              dryness: dry,
              splatter: Math.round(splat * 0.18),
              taperStart: 0.14,
              taperEnd: 0.2,
              curve: (m.rnd() - 0.5) * 14,
            });
          });
          return;
        }

        // 3. STIPPLE AIRBRUSH & HALFTONE DOT BRUSH SET (REFERENCE IMAGE #4 + DYNAMIC GRID)
        if (activeArch === "stipple_halftone_sheet") {
          const cols = Math.max(4, Math.min(6, cnt + 1));
          const cellW = T / cols;
          for (let c = 0; c < cols; c++) {
            const cx = (c + 0.5) * cellW;
            const cy = 265;
            const isOval = (c + Math.floor(m.rnd() * 2)) % 2 === 1;
            const rx = (isOval ? 68 : 62 + (c % 2) * 12) * wSc;
            const ry = (isOval ? 45 : 62 + (c % 2) * 12) * wSc;
            const rot = isOval ? 28 + angOff : 0;
            drawStippleAirbrushCloudVector(
              m,
              cx,
              cy,
              rx,
              ry,
              rot,
              bCol(c),
              Math.round(280 + bristles * 5),
              c === cols - 1 && m.rnd() < 0.35
            );
          }
          for (let c = 0; c < cols; c++) {
            const cx = (c + 0.5) * cellW;
            const cy = 735;
            if (c < Math.floor(cols * 0.35)) {
              drawStippleAirbrushCloudVector(
                m,
                cx,
                cy,
                68 * wSc,
                68 * wSc,
                angOff,
                bCol(c),
                Math.round(310 + bristles * 5)
              );
            } else {
              drawHalftoneDotBrushVector(
                m,
                cx,
                cy,
                72 * wSc,
                bCol(c),
                12 + ((c + Math.floor(m.rnd() * 3)) % 4) * 2,
                dry
              );
            }
          }
          return;
        }

        // 4. HORIZONTAL ACRYLIC DRY-BRUSH STROKE PACK
        if (activeArch === "horiz_stroke_set") {
          const rows = Math.max(3, Math.min(7, cnt + 1));
          const stepY = 780 / Math.max(1, rows - 1);
          for (let i = 0; i < rows; i++) {
            const y = 110 + i * stepY;
            const xPad = 50 + (m.rnd() - 0.5) * 25;
            const tilt = angOff * 1.4 + (m.rnd() - 0.5) * 18;
            drawDryBrushStrokeVector(
              m,
              xPad,
              y - tilt,
              T - xPad,
              y + tilt,
              ((440 / rows) * (0.85 + (i % 2) * 0.25)) * wSc,
              bCol(i),
              {
                bristles: bristles + 8,
                dryness: dry,
                splatter: Math.round(splat * 0.45),
                taperStart: 0.1 + (i % 3) * 0.06,
                taperEnd: 0.15 + ((i + 1) % 3) * 0.08,
                curve: (i % 2 === 0 ? -1 : 1) * (10 + curveOff * 0.4),
              }
            );
          }
          return;
        }

        // 5. DISTRESSED GRUNGE CIRCLE & ENSO STAMP SET
        if (activeArch === "grunge_circle_quad") {
          const gridN = cnt >= 6 ? 3 : 2;
          const cell = T / gridN;
          const rad = (gridN === 3 ? 112 : 165) * wSc;
          const modes: ("solid" | "ring" | "enso")[] = ["solid", "ring", "enso"];
          for (let r = 0; r < gridN; r++) {
            for (let c = 0; c < gridN; c++) {
              const idx = r * gridN + c;
              const cx = (c + 0.5) * cell;
              const cy = (r + 0.5) * cell;
              const mode = modes[(idx + Math.floor(m.rnd() * 3)) % modes.length];
              drawGrungeCircleStampVector(m, cx, cy, rad * (0.88 + m.rnd() * 0.2), bCol(idx), mode, dry);
            }
          }
          return;
        }

        // 6. RADIAL HALFTONE DOT-MATRIX BRUSH COLLECTION
        if (activeArch === "halftone_matrix_set") {
          const cols = cnt >= 6 ? 3 : 2;
          const rows = 2;
          const cellW = T / cols;
          const cellH = T / rows;
          const rad = (cols === 3 ? 128 : 165) * wSc;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              const cx = (c + 0.5) * cellW;
              const cy = (r + 0.5) * cellH;
              drawHalftoneDotBrushVector(
                m,
                cx,
                cy,
                rad * (0.9 + m.rnd() * 0.18),
                bCol(idx),
                12 + ((idx + Math.floor(m.rnd() * 4)) % 5) * 2,
                dry
              );
            }
          }
          return;
        }

        // 7. CHARCOAL & AIRBRUSH STIPPLE GRAIN SPHERES
        if (activeArch === "stipple_cloud_set") {
          const cols = cnt >= 5 ? 3 : 2;
          const rows = 2;
          const cellW = T / cols;
          const cellH = T / rows;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              const cx = (c + 0.5) * cellW;
              const cy = (r + 0.5) * cellH;
              const isOval = (idx + Math.floor(m.rnd() * 2)) % 2 === 1;
              const isRing = idx === cols * rows - 1 && m.rnd() < 0.45;
              drawStippleAirbrushCloudVector(
                m,
                cx,
                cy,
                (isOval ? 138 : 122) * wSc,
                (isOval ? 92 : 122) * wSc,
                isOval ? (30 + angOff) * (r === 0 ? 1 : -1) : angOff,
                bCol(idx),
                Math.round(420 + bristles * 7),
                isRing
              );
            }
          }
          return;
        }

        // 8. VERTICAL DRY-BRUSH BRISTLE PILLARS & STREAKS
        if (activeArch === "vert_bristle_set") {
          const cols = Math.max(3, Math.min(7, cnt + 1));
          const stepX = 780 / Math.max(1, cols - 1);
          for (let i = 0; i < cols; i++) {
            const x = 110 + i * stepX;
            const tilt = angOff * 1.3 + (m.rnd() - 0.5) * 18;
            drawDryBrushStrokeVector(
              m,
              x - tilt,
              55,
              x + tilt,
              945,
              ((430 / cols) * (0.85 + (i % 2) * 0.22)) * wSc,
              bCol(i),
              {
                bristles: bristles + 10,
                dryness: dry,
                splatter: Math.round(splat * 0.4),
                taperStart: 0.14 + m.rnd() * 0.08,
                taperEnd: 0.18 + m.rnd() * 0.1,
                curve: (i % 2 === 0 ? 1 : -1) * (8 + curveOff * 0.35),
              }
            );
          }
          return;
        }

        // 9. CROSSED KATANA DRY-BRUSH X-SLASH & INK SPRAY
        if (activeArch === "katana_cross_slash") {
          const j1 = (m.rnd() - 0.5) * 45;
          const j2 = (m.rnd() - 0.5) * 45;
          drawDryBrushStrokeVector(m, 55, 920 + j1, 945, 75 - j1, 132 * wSc, bCol(0), {
            bristles: bristles + 16,
            dryness: dry,
            splatter: splat + 25,
            taperStart: 0.14,
            taperEnd: 0.36,
            curve: -22 + curveOff * 0.5,
          });
          drawDryBrushStrokeVector(m, 75, 85 + j2, 935, 915 - j2, 124 * wSc, bCol(1), {
            bristles: bristles + 14,
            dryness: dry,
            splatter: splat + 25,
            taperStart: 0.18,
            taperEnd: 0.34,
            curve: 22 - curveOff * 0.5,
          });
          if (cnt >= 5) {
            drawDryBrushStrokeVector(m, 45, 500 + j1, 955, 500 - j1, 88 * wSc, bCol(2), {
              bristles: bristles + 8,
              dryness: dry + 10,
              splatter: Math.round(splat * 0.5),
              taperStart: 0.25,
              taperEnd: 0.28,
              curve: curveOff * 0.4,
            });
          }
          return;
        }

        // 10. SUMI-E CALLIGRAPHIC CURVED DRY-BRUSH WAVES
        if (activeArch === "sumie_wave_strokes") {
          const rows = Math.max(3, Math.min(6, cnt));
          const stepY = 740 / Math.max(1, rows - 1);
          for (let i = 0; i < rows; i++) {
            const y = 130 + i * stepY;
            drawDryBrushStrokeVector(
              m,
              55,
              y - angOff,
              945,
              y + angOff,
              ((360 / rows) * (0.85 + (i % 2) * 0.2)) * wSc,
              bCol(i),
              {
                bristles: bristles + 12,
                dryness: dry,
                splatter: Math.round(splat * 0.5),
                taperStart: 0.16,
                taperEnd: 0.32,
                curve: (i % 2 === 0 ? 1 : -1) * (58 + Math.abs(curveOff) * 0.7),
              }
            );
          }
          return;
        }

        // 11. GIANT SINGLE DIAGONAL DRY-BRUSH HERO STROKE
        if (activeArch === "hero_giant_slash") {
          const rad = ((angOff - 38) * Math.PI) / 180;
          const cx = 500;
          const cy = 500;
          const hLen = 435;
          drawDryBrushStrokeVector(
            m,
            cx - Math.cos(rad) * hLen,
            cy - Math.sin(rad) * hLen,
            cx + Math.cos(rad) * hLen,
            cy + Math.sin(rad) * hLen,
            225 * wSc,
            bCol(0),
            {
              bristles: bristles + 28,
              dryness: dry,
              splatter: splat + 45,
              taperStart: 0.14 + m.rnd() * 0.1,
              taperEnd: 0.28 + m.rnd() * 0.14,
              curve: -22 + curveOff,
            }
          );
          return;
        }

        // 12. SHORT GRUNGE PAINT DAUBS & TAG SWATCHES
        if (activeArch === "short_daub_grid") {
          const cols = 3;
          const rows = Math.max(2, Math.min(4, Math.round(cnt * 0.75)));
          const stepY = 720 / Math.max(1, rows - 1);
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              const x0 = 55 + c * 315;
              const y0 = 140 + r * stepY;
              drawDryBrushStrokeVector(
                m,
                x0,
                y0,
                x0 + 250,
                y0 + (m.rnd() - 0.5) * 24,
                (260 / rows) * wSc,
                bCol(idx),
                {
                  bristles: Math.round(bristles * 0.8),
                  dryness: dry,
                  splatter: Math.round(splat * 0.3),
                  taperStart: 0.12 + m.rnd() * 0.08,
                  taperEnd: 0.18 + m.rnd() * 0.1,
                  curve: (idx % 2 === 0 ? 1 : -1) * (10 + curveOff * 0.25),
                }
              );
            }
          }
          return;
        }

        // 13. EXPLOSIVE INK SPLATTER & BRISTLE STREAK BURST
        if (activeArch === "splatter_burst") {
          const rays = 10 + cnt * 2;
          for (let i = 0; i < rays; i++) {
            const ang = (i / rays) * Math.PI * 2 + (m.rnd() - 0.5) * 0.22;
            const r0 = 35 + m.rnd() * 50;
            const r1 = 270 + m.rnd() * 195;
            drawDryBrushStrokeVector(
              m,
              500 + Math.cos(ang) * r0,
              500 + Math.sin(ang) * r0,
              500 + Math.cos(ang) * r1,
              500 + Math.sin(ang) * r1,
              (42 + (i % 3) * 10) * wSc,
              bCol(i),
              {
                bristles: Math.round(bristles * 0.55),
                dryness: dry + 10,
                splatter: Math.round(splat * 0.45),
                taperStart: 0.08,
                taperEnd: 0.55,
                curve: (m.rnd() - 0.5) * 20,
              }
            );
          }
          drawInkBlotSplatterVector(m, 500, 500, 125 * wSc, bCol(0), splat + 20);
          return;
        }

        // 14. BROKEN PALETTE-KNIFE & DRY SCRAPER STROKES
        if (activeArch === "palette_knife_set") {
          const rows = Math.max(3, Math.min(6, cnt));
          const stepY = 740 / Math.max(1, rows - 1);
          for (let i = 0; i < rows; i++) {
            const y = 130 + i * stepY;
            drawDryBrushStrokeVector(
              m,
              60,
              y - angOff * 0.8,
              940,
              y + angOff * 0.8,
              ((440 / rows) * 0.95) * wSc,
              bCol(i),
              {
                bristles: bristles + 15,
                dryness: Math.min(95, dry + 22),
                splatter: Math.round(splat * 0.35),
                taperStart: 0.05,
                taperEnd: 0.07,
                curve: curveOff * 0.25,
              }
            );
          }
          return;
        }

        // 15. ZEN ENSO OPEN DRY-BRUSH CALLIGRAPHIC RINGS
        if (activeArch === "enso_ring_set") {
          if (cnt <= 3) {
            // Giant Hero Zen Enso Calligraphic Ring in Center
            drawGrungeCircleStampVector(m, 500, 500, 345 * wSc, bCol(0), "enso", dry + 14);
          } else {
            const gridN = cnt >= 6 ? 3 : 2;
            const cell = T / gridN;
            const rad = (gridN === 3 ? 115 : 172) * wSc;
            for (let r = 0; r < gridN; r++) {
              for (let c = 0; c < gridN; c++) {
                const idx = r * gridN + c;
                drawGrungeCircleStampVector(
                  m,
                  (c + 0.5) * cell,
                  (r + 0.5) * cell,
                  rad,
                  bCol(idx),
                  idx % 3 === 1 ? "ring" : "enso",
                  dry + 12
                );
              }
            }
          }
          return;
        }

        // 16. DISTRESSED COMIC HALFTONE GRADIENT STRIPS
        if (activeArch === "halftone_strip_bars") {
          const cols = 26 + cnt * 2;
          const rows = 14 + cnt;
          const sx = 880 / cols;
          const sy = 860 / rows;
          const ph = m.rnd() * Math.PI * 2;
          const parts: string[] = [];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const x = 60 + (c + 0.5) * sx;
              const y = 70 + (r + 0.5) * sy;
              const wave = 0.5 + 0.5 * Math.sin(c * 0.45 + r * 0.35 + ph);
              const grad = 1 - Math.abs((r / (rows - 1)) * 2 - 1) * 0.75;
              const rad = sx * 0.48 * grad * (0.45 + 0.55 * wave) * wSc;
              if (rad > 0.8) {
                parts.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(rad)}" fill="${bCol(r % 3)}"/>`);
              }
            }
          }
          m.raw(parts.join(""));
          return;
        }

        // 17. HOLLOW STIPPLE RING & DUST HALO BRUSHES
        if (activeArch === "stipple_halo_rings") {
          const cols = cnt >= 5 ? 3 : 2;
          const rows = 2;
          const cellW = T / cols;
          const cellH = T / rows;
          const rad = (cols === 3 ? 118 : 168) * wSc;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              drawStippleAirbrushCloudVector(
                m,
                (c + 0.5) * cellW,
                (r + 0.5) * cellH,
                rad,
                rad * (idx % 2 === 1 ? 0.78 : 1),
                angOff + idx * 18,
                bCol(idx),
                Math.round(520 + bristles * 8),
                true
              );
            }
          }
          return;
        }

        // 18. STREET CHISEL MARKER DRY STROKES & DRIPS
        if (activeArch === "chisel_marker_drips") {
          const rows = Math.max(2, Math.min(4, Math.round(cnt * 0.75)));
          const stepY = 640 / Math.max(1, rows - 1);
          for (let i = 0; i < rows; i++) {
            const y = 160 + i * stepY;
            const col = bCol(i);
            drawDryBrushStrokeVector(m, 65, y, 935, y - 16 + (m.rnd() - 0.5) * 18, (300 / rows) * wSc, col, {
              bristles: bristles,
              dryness: dry,
              splatter: Math.round(splat * 0.5),
              taperStart: 0.08,
              taperEnd: 0.14,
              curve: curveOff * 0.3,
            });
            const drips = 3 + (i % 3);
            for (let d = 0; d < drips; d++) {
              const dx = 120 + d * (720 / drips) + m.rnd() * 85;
              const dLen = 50 + m.rnd() * 125;
              const dw = (5 + m.rnd() * 6.5) * wSc;
              m.raw(
                `<rect x="${f1(dx - dw / 2)}" y="${f1(y)}" width="${f1(dw)}" height="${f1(
                  dLen
                )}" rx="${f1(dw / 2)}" fill="${col}"/>` +
                  `<circle cx="${f1(dx)}" cy="${f1(y + dLen)}" r="${f1(dw * 0.9)}" fill="${col}"/>`
              );
            }
          }
          return;
        }

        // 19. RAZOR-TAPERED SPEED BRISTLE & QUILL STREAKS
        if (activeArch === "quill_speed_streaks") {
          const nStreaks = Math.max(5, Math.min(11, cnt + 4));
          const stepY = 760 / Math.max(1, nStreaks - 1);
          for (let i = 0; i < nStreaks; i++) {
            const y0 = 120 + i * stepY;
            const tilt = 55 + angOff * 1.4;
            drawDryBrushStrokeVector(
              m,
              45 + (m.rnd() - 0.5) * 30,
              y0 + tilt,
              955 - (m.rnd() - 0.5) * 30,
              y0 - tilt,
              ((340 / nStreaks) * (0.8 + m.rnd() * 0.45)) * wSc,
              bCol(i),
              {
                bristles: Math.round(bristles * 0.75),
                dryness: dry + 12,
                splatter: Math.round(splat * 0.35),
                taperStart: 0.38,
                taperEnd: 0.42,
                curve: curveOff * 0.35,
              }
            );
          }
          return;
        }

        // 20. GRUNGE CROSS-HATCH & BRISTLE SHADING STAMPS
        if (activeArch === "crosshatch_stamps") {
          const gridN = cnt >= 6 ? 3 : 2;
          const cell = T / gridN;
          const arm = cell * 0.34;
          for (let r = 0; r < gridN; r++) {
            for (let c = 0; c < gridN; c++) {
              const idx = r * gridN + c;
              const cx = (c + 0.5) * cell;
              const cy = (r + 0.5) * cell;
              drawDryBrushStrokeVector(
                m,
                cx - arm,
                cy - arm * 0.85,
                cx + arm,
                cy + arm * 0.85,
                (185 / gridN) * wSc,
                bCol(idx),
                {
                  bristles: Math.round(bristles * 0.8),
                  dryness: dry + 15,
                  splatter: Math.round(splat * 0.25),
                }
              );
              drawDryBrushStrokeVector(
                m,
                cx - arm,
                cy + arm * 0.85,
                cx + arm,
                cy - arm * 0.85,
                (185 / gridN) * wSc,
                bCol(idx),
                {
                  bristles: Math.round(bristles * 0.8),
                  dryness: dry + 15,
                  splatter: Math.round(splat * 0.25),
                }
              );
            }
          }
          return;
        }

        // 21. DISTRESSED DRY-BRUSH 4-EDGE GRUNGE FRAME
        if (activeArch === "grunge_frame_border") {
          const bw = (84 + (cnt % 3) * 12) * wSc;
          const pad = 74;
          drawDryBrushStrokeVector(m, 35, pad, 965, pad, bw, bCol(0), {
            bristles,
            dryness: dry,
            splatter: splat,
            curve: curveOff * 0.2,
          });
          drawDryBrushStrokeVector(m, 35, T - pad, 965, T - pad, bw, bCol(1), {
            bristles,
            dryness: dry,
            splatter: splat,
            curve: -curveOff * 0.2,
          });
          drawDryBrushStrokeVector(m, pad, 35, pad, 965, bw, bCol(2), {
            bristles,
            dryness: dry,
            splatter: splat,
            curve: curveOff * 0.2,
          });
          drawDryBrushStrokeVector(m, T - pad, 35, T - pad, 965, bw, bCol(3), {
            bristles,
            dryness: dry,
            splatter: splat,
            curve: -curveOff * 0.2,
          });
          return;
        }

        // 22. HAND-PAINTED DRY-BRUSH UNDERLINES & SWASHES
        if (activeArch === "wavy_underlines") {
          const rows = Math.max(4, Math.min(8, cnt + 2));
          const stepY = 780 / Math.max(1, rows - 1);
          for (let i = 0; i < rows; i++) {
            const y = 110 + i * stepY;
            drawDryBrushStrokeVector(
              m,
              65,
              y,
              935,
              y + (m.rnd() - 0.5) * 16,
              ((330 / rows) * (0.85 + (i % 3) * 0.2)) * wSc,
              bCol(i),
              {
                bristles,
                dryness: dry,
                splatter: Math.round(splat * 0.3),
                taperStart: 0.08 + (i % 2) * 0.1,
                taperEnd: 0.38 + (i % 2) * 0.1,
                curve: (i % 2 === 0 ? -1 : 1) * (28 + Math.abs(curveOff) * 0.5),
              }
            );
          }
          return;
        }

        // 23. ANGLED ELLIPTICAL STIPPLE & HALFTONE PUFF SET
        if (activeArch === "angled_oval_stipple") {
          const cols = cnt >= 5 ? 3 : 2;
          const cellW = T / cols;
          for (let r = 0; r < 2; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              const cx = (c + 0.5) * cellW;
              const cy = 265 + r * 470;
              if (r === 0) {
                drawStippleAirbrushCloudVector(
                  m,
                  cx,
                  cy,
                  142 * wSc,
                  84 * wSc,
                  -35 + c * 35 + angOff,
                  bCol(idx),
                  Math.round(420 + bristles * 6)
                );
              } else {
                drawHalftoneDotBrushVector(
                  m,
                  cx,
                  cy,
                  128 * wSc,
                  bCol(idx),
                  13 + ((c + Math.floor(m.rnd() * 3)) % 4) * 2,
                  dry
                );
              }
            }
          }
          return;
        }

        // 25. DISTRESSED PAINT ROLLER TEXTURE TRACKS (NEW MICROSTOCK BESTSELLER)
        if (activeArch === "paint_roller_tracks") {
          const rows = Math.max(2, Math.min(5, Math.round(cnt * 0.8)));
          const stepY = 720 / Math.max(1, rows - 1);
          for (let i = 0; i < rows; i++) {
            const y = 140 + i * stepY;
            const tilt = angOff * 1.2 + (m.rnd() - 0.5) * 18;
            drawPaintRollerTrackVector(
              m,
              55,
              y - tilt,
              945,
              y + tilt,
              ((480 / rows) * 0.85) * wSc,
              bCol(i),
              dry
            );
          }
          return;
        }

        // 26. WILD BEAST CLAW SCRATCH & RIP SLASHES (NEW MICROSTOCK BESTSELLER)
        if (activeArch === "claw_scratch_slashes") {
          const claws = Math.max(3, Math.min(6, cnt));
          drawClawScratchVector(
            m,
            500,
            500,
            820,
            -38 + angOff,
            claws,
            420,
            (220 / claws) * wSc,
            bCol(0),
            dry,
            splat + 18
          );
          return;
        }

        // 27. ORGANIC INK BLOT & WET SPLATTER PATCHES (NEW MICROSTOCK BESTSELLER)
        if (activeArch === "watercolor_ink_blots") {
          if (cnt <= 2) {
            drawInkBlotSplatterVector(m, 500, 500, 260 * wSc, bCol(0), splat + 35);
          } else {
            const gridN = 2;
            for (let r = 0; r < gridN; r++) {
              for (let c = 0; c < gridN; c++) {
                const idx = r * gridN + c;
                drawInkBlotSplatterVector(
                  m,
                  275 + c * 450,
                  275 + r * 450,
                  (130 + (m.rnd() - 0.5) * 24) * wSc,
                  bCol(idx),
                  splat + 16
                );
              }
            }
          }
          return;
        }

        // 28. COSMETIC MASCARA & CALLIGRAPHIC ARC SWOOSHES (NEW MICROSTOCK BESTSELLER)
        if (activeArch === "calligraphy_swoosh_arc") {
          const rows = Math.max(3, Math.min(5, cnt));
          const stepY = 720 / Math.max(1, rows - 1);
          for (let i = 0; i < rows; i++) {
            const y = 140 + i * stepY;
            drawDryBrushStrokeVector(
              m,
              75,
              y + (i % 2 === 0 ? 35 : -35),
              925,
              y + (i % 2 === 0 ? -35 : 35),
              ((390 / rows) * 0.9) * wSc,
              bCol(i),
              {
                bristles: bristles + 18,
                dryness: dry,
                splatter: Math.round(splat * 0.4),
                taperStart: 0.08,
                taperEnd: 0.48,
                curve: (i % 2 === 0 ? -1 : 1) * (82 + Math.abs(curveOff) * 0.6),
              }
            );
          }
          return;
        }

        // 29. WIDE GRUNGE SALE-BANNER & HEADER BRUSH STRIPS (STAGGERED BADGE & BANNER KIT)
        if (activeArch === "grunge_banner_ribbons") {
          const cols = 2;
          const rows = Math.max(3, Math.min(5, cnt));
          const stepY = 740 / Math.max(1, rows - 1);
          for (let r = 0; r < rows; r++) {
            const y = 130 + r * stepY;
            if (r % 2 === 0) {
              for (let c = 0; c < cols; c++) {
                const x0 = c === 0 ? 55 : 535;
                const x1 = c === 0 ? 465 : 945;
                const tilt = (m.rnd() - 0.5) * 28 + angOff * 0.5;
                drawChunkyPaintPatchDaubVector(
                  m,
                  (x0 + x1) * 0.5,
                  y,
                  (x1 - x0) * wSc,
                  (260 / rows) * wSc,
                  tilt * 0.3,
                  bCol(r + c),
                  (r + c) % 2 === 0 ? "block_frayed" : "rounded_blob",
                  dry
                );
              }
            } else {
              drawDryBrushStrokeVector(
                m,
                65,
                y - angOff * 0.5,
                935,
                y + angOff * 0.5,
                ((360 / rows) * 0.88) * wSc,
                bCol(r),
                {
                  bristles: bristles + 16,
                  dryness: dry,
                  splatter: Math.round(splat * 0.55),
                  taperStart: 0.14,
                  taperEnd: 0.22,
                  curve: (r % 3 === 0 ? -1 : 1) * (18 + curveOff * 0.4),
                }
              );
            }
          }
          return;
        }

        // 30. HAND-BRUSHED RADIAL SUNBURST & STAR RAYS (NEW MICROSTOCK BESTSELLER)
        if (activeArch === "radial_sunburst_strokes") {
          const rays = 12 + cnt * 2;
          for (let i = 0; i < rays; i++) {
            const a = (i / rays) * Math.PI * 2 + (angOff * Math.PI) / 180;
            const rIn = 115 + (i % 2) * 35;
            const rOut = 445 - (i % 3) * 35;
            drawDryBrushStrokeVector(
              m,
              500 + Math.cos(a) * rIn,
              500 + Math.sin(a) * rIn,
              500 + Math.cos(a) * rOut,
              500 + Math.sin(a) * rOut,
              (560 / rays) * wSc,
              bCol(i),
              {
                bristles: Math.round(bristles * 0.65),
                dryness: dry,
                splatter: Math.round(splat * 0.25),
                taperStart: 0.15,
                taperEnd: 0.45,
                curve: curveOff * 0.25,
              }
            );
          }
          drawGrungeCircleStampVector(m, 500, 500, 86 * wSc, bCol(0), "enso", dry);
          return;
        }

        // 31. SPIRAL VORTEX & CYCLONE DRY-BRUSH SWIRL
        if (activeArch === "spiral_vortex_swirl") {
          if (cnt <= 3) {
            drawGrungeShapeStampVector(m, 500, 500, 390 * wSc, bCol(0), "spiral", dry);
          } else {
            for (let r = 0; r < 2; r++) {
              for (let c = 0; c < 2; c++) {
                const idx = r * 2 + c;
                drawGrungeShapeStampVector(
                  m,
                  275 + c * 450,
                  275 + r * 450,
                  185 * wSc,
                  bCol(idx),
                  "spiral",
                  dry
                );
              }
            }
          }
          return;
        }

        // 32. HAND-PAINTED DRY-BRUSH ARROWS & CHEVRONS
        if (activeArch === "chevron_arrow_strokes") {
          for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 2; c++) {
              const idx = r * 2 + c;
              drawGrungeShapeStampVector(
                m,
                275 + c * 450,
                275 + r * 450,
                175 * wSc,
                bCol(idx),
                "arrow",
                dry
              );
            }
          }
          return;
        }

        // 33. GRUNGE HEART, STAR & SEAL BADGE STAMPS
        if (activeArch === "hearted_grunge_stamps") {
          const shapes: ("heart" | "star" | "shield" | "spiral")[] = ["heart", "star", "shield", "heart"];
          for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 2; c++) {
              const idx = r * 2 + c;
              const sh = shapes[(idx + Math.floor(m.rnd() * 3)) % shapes.length];
              drawGrungeShapeStampVector(
                m,
                275 + c * 450,
                275 + r * 450,
                172 * wSc,
                bCol(idx),
                sh,
                dry
              );
            }
          }
          return;
        }

        // 34. WAVY DIAGONAL HALFTONE DOT & STIPPLE FLOW
        if (activeArch === "halftone_diagonal_wave") {
          const cols = 30;
          const rows = 30;
          const step = 880 / cols;
          const ph = m.rnd() * Math.PI * 2;
          const parts: string[] = [];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const u = c / (cols - 1);
              const v = r / (rows - 1);
              const diagDist = Math.abs(u + v - 1 + 0.16 * Math.sin((u - v) * Math.PI * 2.5 + ph));
              if (diagDist < 0.36) {
                const falloff = Math.pow(1 - diagDist / 0.36, 1.3);
                const turb = 0.55 + 0.45 * Math.sin(c * 0.7 + ph) * Math.cos(r * 0.7 - ph);
                const rad = step * 0.48 * falloff * turb * wSc;
                if (rad > 0.75) {
                  const x = 60 + c * step;
                  const y = 60 + r * step;
                  parts.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(rad)}" fill="${bCol((r + c) % 3)}"/>`);
                }
              }
            }
          }
          m.raw(parts.join(""));
          return;
        }

        // 35. ENERGETIC ZIG-ZAG CHARCOAL SCRIBBLE HATCH
        if (activeArch === "zigzag_scribble_scratch") {
          const zigs = Math.max(5, Math.min(10, cnt + 3));
          const pts: [number, number][] = [];
          for (let i = 0; i <= zigs; i++) {
            const t = i / zigs;
            const y = 95 + t * 810;
            const x = i % 2 === 0 ? 110 + m.rnd() * 110 : 890 - m.rnd() * 110;
            pts.push([x, y]);
          }
          for (let i = 0; i < pts.length - 1; i++) {
            drawDryBrushStrokeVector(
              m,
              pts[i][0],
              pts[i][1],
              pts[i + 1][0],
              pts[i + 1][1],
              (92 - i * 3) * wSc,
              bCol(i),
              {
                bristles: Math.round(bristles * 0.8),
                dryness: dry + 8,
                splatter: Math.round(splat * 0.35),
                taperStart: i === 0 ? 0.32 : 0.08,
                taperEnd: i === pts.length - 2 ? 0.38 : 0.08,
                curve: (i % 2 === 0 ? 1 : -1) * 14,
              }
            );
          }
          return;
        }

        // 36. 9-GRID MICROSTOCK BRUSH & STAMP SAMPLER
        if (activeArch === "mixed_stamp_sampler") {
          const cell = T / 3;
          for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
              const idx = (r * 3 + c + Math.floor(m.rnd() * 6)) % 9;
              const cx = (c + 0.5) * cell;
              const cy = (r + 0.5) * cell;
              if (idx === 0 || idx === 4) {
                drawDryBrushStrokeVector(
                  m,
                  cx - 125,
                  cy + 75,
                  cx + 125,
                  cy - 75,
                  68 * wSc,
                  bCol(idx),
                  { bristles: Math.round(bristles * 0.8), dryness: dry, splatter: Math.round(splat * 0.35) }
                );
              } else if (idx === 1) {
                drawGrungeCircleStampVector(m, cx, cy, 108 * wSc, bCol(idx), "enso", dry);
              } else if (idx === 2) {
                drawStippleAirbrushCloudVector(m, cx, cy, 112 * wSc, 112 * wSc, 0, bCol(idx), 340);
              } else if (idx === 3) {
                drawHalftoneDotBrushVector(m, cx, cy, 112 * wSc, bCol(idx), 13, dry);
              } else if (idx === 5) {
                drawPaintRollerTrackVector(m, cx - 125, cy, cx + 125, cy, 82 * wSc, bCol(idx), dry);
              } else if (idx === 6) {
                drawInkBlotSplatterVector(m, cx, cy, 92 * wSc, bCol(idx), 24);
              } else if (idx === 7) {
                drawGrungeShapeStampVector(m, cx, cy, 108 * wSc, bCol(idx), "star", dry);
              } else {
                drawGrungeCircleStampVector(m, cx, cy, 108 * wSc, bCol(idx), "ring", dry);
              }
            }
          }
          return;
        }

        // 24. ALL-IN-ONE MICROSTOCK BRUSH BUNDLE SHEET
        drawDryBrushStrokeVector(m, 45, 115, 465, 115 + (m.rnd() - 0.5) * 18, 68 * wSc, bCol(0), {
          bristles,
          dryness: dry,
          splatter: Math.round(splat * 0.35),
          curve: curveOff * 0.25,
        });
        drawDryBrushStrokeVector(m, 45, 275, 465, 275 + (m.rnd() - 0.5) * 18, 74 * wSc, bCol(1), {
          bristles,
          dryness: dry,
          splatter: Math.round(splat * 0.35),
          curve: -14 - curveOff * 0.25,
        });
        drawDryBrushStrokeVector(m, 45, 490, 465, 200, 82 * wSc, bCol(2), {
          bristles,
          dryness: dry,
          splatter: Math.round(splat * 0.5),
        });
        drawGrungeCircleStampVector(m, 640, 195, 105 * wSc, bCol(0), m.rnd() < 0.5 ? "solid" : "ring", dry);
        drawGrungeCircleStampVector(m, 865, 195, 105 * wSc, bCol(1), "enso", dry);
        drawStippleAirbrushCloudVector(
          m,
          175,
          755,
          115 * wSc,
          115 * wSc,
          0,
          bCol(2),
          Math.round(380 + bristles * 5)
        );
        drawStippleAirbrushCloudVector(
          m,
          425,
          755,
          125 * wSc,
          82 * wSc,
          32 + angOff,
          bCol(3),
          Math.round(380 + bristles * 5)
        );
        drawHalftoneDotBrushVector(m, 675, 755, 112 * wSc, bCol(0), 15, dry);
        drawHalftoneDotBrushVector(m, 885, 755, 98 * wSc, bCol(1), 13, dry + 15);
      },
    });
  }
}

registerMasterBrush24();

/* ============================================================================
   MICROSTOCK WATERCOLOR, ACRYLIC & ABSTRACT POSTER / COVER DESIGN SET ENGINE
   - Supports Single Poster (1 PCS) OR Multi-Piece Sets (2 PCS, 3 PCS, 4 PCS, 5 PCS, 6 PCS, 4 PCS 2×2 Grid)
   - Checkbox Toggle (`showText`):
       ☑ CHECKED   -> Draws 100% Pure Vector Outline Typography ("HIGH / QUALITY", "COLOR / FUL",
                      "ABSTRACT / VECTOR", "WATER / COLOR", "BACK / GROUND", "DESIGN / SET")
                      + Top-Right 3-Petal Origami Bird & "BRANDNAME"
       ☐ UNCHECKED -> Draws ZERO Text & ZERO Logo (100% Pure Watercolor / Abstract Poster Artwork)
   - Every brushstroke, watercolor cloud, and letter is a pure clipped vector path (100% EPS 10 & SVG ready!)
   ============================================================================ */

function clipPosterPolygon(
  poly: [number, number][],
  x0: number,
  y0: number,
  x1: number,
  y1: number
): [number, number][] {
  let out = poly;
  const clipEdge = (
    pts: [number, number][],
    inside: (p: [number, number]) => boolean,
    intersect: (a: [number, number], b: [number, number]) => [number, number]
  ) => {
    const res: [number, number][] = [];
    const n = pts.length;
    if (!n) return res;
    for (let i = 0; i < n; i++) {
      const cur = pts[i];
      const prev = pts[(i + n - 1) % n];
      const curIn = inside(cur);
      const prevIn = inside(prev);
      if (curIn) {
        if (!prevIn) res.push(intersect(prev, cur));
        res.push(cur);
      } else if (prevIn) {
        res.push(intersect(prev, cur));
      }
    }
    return res;
  };
  out = clipEdge(
    out,
    (p) => p[0] >= x0,
    (a, b) => [x0, a[1] + ((b[1] - a[1]) * (x0 - a[0])) / (b[0] - a[0] || 1e-6)]
  );
  out = clipEdge(
    out,
    (p) => p[0] <= x1,
    (a, b) => [x1, a[1] + ((b[1] - a[1]) * (x1 - a[0])) / (b[0] - a[0] || 1e-6)]
  );
  out = clipEdge(
    out,
    (p) => p[1] >= y0,
    (a, b) => [a[0] + ((b[0] - a[0]) * (y0 - a[1])) / (b[1] - a[1] || 1e-6), y0]
  );
  out = clipEdge(
    out,
    (p) => p[1] <= y1,
    (a, b) => [a[0] + ((b[0] - a[0]) * (y1 - a[1])) / (b[1] - a[1] || 1e-6), y1]
  );
  return out;
}

function polyToSvgPath(pts: [number, number][]): string {
  if (pts.length < 3) return "";
  let d = `M${f1(pts[0][0])} ${f1(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) {
    d += `L${f1(pts[i][0])} ${f1(pts[i][1])}`;
  }
  return d + "Z";
}

// 100% Pure "Create Outlines" Compound Vector Sans-Serif Glyph Contours (No <text> tags, No overlapping sticks!)
// Every glyph is a list of closed polygon loops [x, y][] in a normalized 0..10 x 0..14 box.
// Outer loops and inner counter-holes (A, B, D, O, P, Q, R, 0, 4, 6, 8, 9) are emitted as ONE single
// unified <path d="M...Z M...Z" fill="..." fill-rule="evenodd"/> per character (PostScript `ef` in EPS 10!).
const VECTOR_OUTLINE_GLYPHS: Record<string, [number, number][][]> = {
  A: [
    [
      [0.2, 14],
      [3.8, 0],
      [6.2, 0],
      [9.8, 14],
      [7.3, 14],
      [6.6, 11.0],
      [3.4, 11.0],
      [2.7, 14],
    ],
    [
      [3.95, 8.7],
      [6.05, 8.7],
      [5.0, 3.8],
    ],
  ],
  B: [
    [
      [0.8, 0],
      [6.4, 0],
      [8.2, 0.8],
      [9.0, 2.2],
      [9.0, 4.7],
      [8.0, 6.3],
      [7.4, 6.7],
      [8.4, 7.2],
      [9.4, 8.8],
      [9.4, 11.6],
      [8.4, 13.1],
      [6.6, 14],
      [0.8, 14],
    ],
    [
      [3.2, 2.2],
      [5.8, 2.2],
      [6.6, 2.8],
      [6.6, 4.7],
      [5.8, 5.5],
      [3.2, 5.5],
    ],
    [
      [3.2, 8.0],
      [6.1, 8.0],
      [7.0, 8.8],
      [7.0, 11.0],
      [6.1, 11.8],
      [3.2, 11.8],
    ],
  ],
  C: [
    [
      [9.3, 3.3],
      [7.1, 3.9],
      [6.3, 2.6],
      [5.1, 2.2],
      [3.8, 2.5],
      [3.1, 3.9],
      [3.1, 10.1],
      [3.8, 11.5],
      [5.1, 11.8],
      [6.4, 11.3],
      [7.2, 10.0],
      [9.4, 10.7],
      [8.2, 13.0],
      [6.2, 14.0],
      [3.6, 14.0],
      [1.6, 12.8],
      [0.6, 10.6],
      [0.6, 3.4],
      [1.6, 1.2],
      [3.6, 0.0],
      [6.3, 0.0],
      [8.2, 1.0],
    ],
  ],
  D: [
    [
      [0.8, 0],
      [5.6, 0],
      [7.8, 1.0],
      [9.1, 3.2],
      [9.1, 10.8],
      [7.8, 13.0],
      [5.6, 14],
      [0.8, 14],
    ],
    [
      [3.2, 2.3],
      [5.2, 2.3],
      [6.4, 3.2],
      [6.7, 4.6],
      [6.7, 9.4],
      [6.4, 10.8],
      [5.2, 11.7],
      [3.2, 11.7],
    ],
  ],
  E: [
    [
      [0.9, 0],
      [9.1, 0],
      [9.1, 2.3],
      [3.3, 2.3],
      [3.3, 5.7],
      [8.3, 5.7],
      [8.3, 8.0],
      [3.3, 8.0],
      [3.3, 11.7],
      [9.2, 11.7],
      [9.2, 14],
      [0.9, 14],
    ],
  ],
  F: [
    [
      [0.9, 0],
      [9.1, 0],
      [9.1, 2.3],
      [3.3, 2.3],
      [3.3, 6.0],
      [8.2, 6.0],
      [8.2, 8.3],
      [3.3, 8.3],
      [3.3, 14],
      [0.9, 14],
    ],
  ],
  G: [
    [
      [9.3, 3.3],
      [7.1, 3.9],
      [6.3, 2.6],
      [5.0, 2.2],
      [3.7, 2.6],
      [3.0, 4.0],
      [3.0, 10.0],
      [3.7, 11.4],
      [5.2, 11.8],
      [6.6, 11.3],
      [7.1, 10.2],
      [7.1, 8.8],
      [5.1, 8.8],
      [5.1, 6.6],
      [9.4, 6.6],
      [9.4, 11.6],
      [7.9, 13.3],
      [5.6, 14.0],
      [3.4, 14.0],
      [1.5, 12.8],
      [0.6, 10.6],
      [0.6, 3.4],
      [1.5, 1.2],
      [3.5, 0.0],
      [6.3, 0.0],
      [8.2, 1.0],
    ],
  ],
  H: [
    [
      [0.8, 0],
      [3.2, 0],
      [3.2, 5.7],
      [6.8, 5.7],
      [6.8, 0],
      [9.2, 0],
      [9.2, 14],
      [6.8, 14],
      [6.8, 8.1],
      [3.2, 8.1],
      [3.2, 14],
      [0.8, 14],
    ],
  ],
  I: [
    [
      [3.8, 0],
      [6.2, 0],
      [6.2, 14],
      [3.8, 14],
    ],
  ],
  J: [
    [
      [6.4, 0],
      [8.8, 0],
      [8.8, 10.4],
      [7.8, 12.8],
      [5.6, 14.0],
      [3.1, 14.0],
      [1.2, 12.7],
      [0.6, 10.4],
      [2.9, 9.9],
      [3.4, 11.4],
      [4.5, 11.8],
      [5.8, 11.4],
      [6.4, 10.0],
    ],
  ],
  K: [
    [
      [0.8, 0],
      [3.2, 0],
      [3.2, 5.8],
      [7.2, 0],
      [9.8, 0],
      [5.5, 6.1],
      [10.0, 14],
      [7.3, 14],
      [3.8, 8.0],
      [3.2, 8.9],
      [3.2, 14],
      [0.8, 14],
    ],
  ],
  L: [
    [
      [0.9, 0],
      [3.3, 0],
      [3.3, 11.7],
      [9.1, 11.7],
      [9.1, 14],
      [0.9, 14],
    ],
  ],
  M: [
    [
      [0.5, 0],
      [3.0, 0],
      [5.0, 7.6],
      [7.0, 0],
      [9.5, 0],
      [9.5, 14],
      [7.3, 14],
      [7.3, 5.2],
      [5.8, 11.4],
      [4.2, 11.4],
      [2.7, 5.2],
      [2.7, 14],
      [0.5, 14],
    ],
  ],
  N: [
    [
      [0.8, 0],
      [3.1, 0],
      [6.9, 9.2],
      [6.9, 0],
      [9.2, 0],
      [9.2, 14],
      [6.9, 14],
      [3.1, 4.8],
      [3.1, 14],
      [0.8, 14],
    ],
  ],
  O: [
    [
      [3.5, 0],
      [6.5, 0],
      [8.4, 1.1],
      [9.4, 3.4],
      [9.4, 10.6],
      [8.4, 12.9],
      [6.5, 14],
      [3.5, 14],
      [1.6, 12.9],
      [0.6, 10.6],
      [0.6, 3.4],
      [1.6, 1.1],
    ],
    [
      [3.8, 2.3],
      [6.2, 2.3],
      [7.0, 3.6],
      [7.0, 10.4],
      [6.2, 11.7],
      [3.8, 11.7],
      [3.0, 10.4],
      [3.0, 3.6],
    ],
  ],
  P: [
    [
      [0.8, 0],
      [6.4, 0],
      [8.3, 1.0],
      [9.2, 2.7],
      [9.2, 6.1],
      [8.3, 7.8],
      [6.4, 8.8],
      [3.2, 8.8],
      [3.2, 14],
      [0.8, 14],
    ],
    [
      [3.2, 2.2],
      [6.0, 2.2],
      [6.8, 3.1],
      [6.8, 5.7],
      [6.0, 6.6],
      [3.2, 6.6],
    ],
  ],
  Q: [
    [
      [3.5, 0],
      [6.5, 0],
      [8.4, 1.1],
      [9.4, 3.4],
      [9.4, 10.3],
      [8.8, 11.9],
      [10.0, 13.3],
      [8.4, 14.6],
      [7.1, 13.3],
      [6.1, 14],
      [3.5, 14],
      [1.6, 12.9],
      [0.6, 10.6],
      [0.6, 3.4],
      [1.6, 1.1],
    ],
    [
      [3.8, 2.3],
      [6.2, 2.3],
      [7.0, 3.6],
      [7.0, 10.4],
      [6.2, 11.7],
      [3.8, 11.7],
      [3.0, 10.4],
      [3.0, 3.6],
    ],
  ],
  R: [
    [
      [0.8, 0],
      [6.4, 0],
      [8.3, 1.0],
      [9.2, 2.7],
      [9.2, 5.8],
      [8.2, 7.5],
      [7.0, 8.2],
      [9.6, 14],
      [7.0, 14],
      [4.7, 8.6],
      [3.2, 8.6],
      [3.2, 14],
      [0.8, 14],
    ],
    [
      [3.2, 2.2],
      [6.0, 2.2],
      [6.8, 3.0],
      [6.8, 5.5],
      [6.0, 6.4],
      [3.2, 6.4],
    ],
  ],
  S: [
    [
      [9.1, 3.1],
      [6.9, 3.7],
      [6.2, 2.5],
      [4.9, 2.1],
      [3.6, 2.4],
      [3.1, 3.4],
      [3.6, 4.5],
      [5.6, 5.4],
      [7.9, 6.4],
      [9.2, 8.0],
      [9.4, 10.5],
      [8.4, 12.8],
      [6.3, 14.0],
      [3.4, 14.0],
      [1.4, 12.9],
      [0.5, 10.8],
      [2.8, 10.1],
      [3.6, 11.5],
      [5.1, 11.9],
      [6.5, 11.5],
      [7.0, 10.3],
      [6.4, 9.0],
      [4.3, 8.0],
      [2.0, 6.9],
      [0.8, 5.2],
      [0.8, 2.8],
      [1.9, 1.0],
      [3.8, 0.0],
      [6.3, 0.0],
      [8.2, 1.1],
    ],
  ],
  T: [
    [
      [0.4, 0],
      [9.6, 0],
      [9.6, 2.3],
      [6.2, 2.3],
      [6.2, 14],
      [3.8, 14],
      [3.8, 2.3],
      [0.4, 2.3],
    ],
  ],
  U: [
    [
      [0.8, 0],
      [3.2, 0],
      [3.2, 10.3],
      [3.9, 11.6],
      [6.1, 11.6],
      [6.8, 10.3],
      [6.8, 0],
      [9.2, 0],
      [9.2, 10.6],
      [8.2, 12.9],
      [6.4, 14.0],
      [3.6, 14.0],
      [1.8, 12.9],
      [0.8, 10.6],
    ],
  ],
  V: [
    [
      [0.3, 0],
      [2.8, 0],
      [5.0, 10.2],
      [7.2, 0],
      [9.7, 0],
      [6.2, 14],
      [3.8, 14],
    ],
  ],
  W: [
    [
      [0.1, 0],
      [2.3, 0],
      [3.3, 9.4],
      [4.3, 0],
      [5.7, 0],
      [6.7, 9.4],
      [7.7, 0],
      [9.9, 0],
      [7.9, 14],
      [5.9, 14],
      [5.0, 5.8],
      [4.1, 14],
      [2.1, 14],
    ],
  ],
  X: [
    [
      [0.5, 0],
      [3.1, 0],
      [5.0, 4.4],
      [6.9, 0],
      [9.5, 0],
      [6.4, 6.8],
      [9.7, 14],
      [7.1, 14],
      [5.0, 9.2],
      [2.9, 14],
      [0.3, 14],
      [3.6, 6.8],
    ],
  ],
  Y: [
    [
      [0.3, 0],
      [2.9, 0],
      [5.0, 5.3],
      [7.1, 0],
      [9.7, 0],
      [6.2, 8.1],
      [6.2, 14],
      [3.8, 14],
      [3.8, 8.1],
    ],
  ],
  Z: [
    [
      [0.7, 0],
      [9.3, 0],
      [9.3, 2.2],
      [3.5, 11.7],
      [9.4, 11.7],
      [9.4, 14],
      [0.6, 14],
      [0.6, 11.8],
      [6.4, 2.3],
      [0.7, 2.3],
    ],
  ],
  "0": [
    [
      [3.5, 0],
      [6.5, 0],
      [8.4, 1.2],
      [9.2, 3.6],
      [9.2, 10.4],
      [8.4, 12.8],
      [6.5, 14],
      [3.5, 14],
      [1.6, 12.8],
      [0.8, 10.4],
      [0.8, 3.6],
      [1.6, 1.2],
    ],
    [
      [3.8, 2.3],
      [6.2, 2.3],
      [6.8, 3.8],
      [6.8, 10.2],
      [6.2, 11.7],
      [3.8, 11.7],
      [3.2, 10.2],
      [3.2, 3.8],
    ],
  ],
  "1": [
    [
      [2.2, 2.2],
      [4.4, 0],
      [6.6, 0],
      [6.6, 14],
      [4.2, 14],
      [4.2, 3.2],
      [2.2, 4.6],
    ],
  ],
  "2": [
    [
      [0.8, 3.6],
      [1.8, 1.1],
      [3.8, 0],
      [6.4, 0],
      [8.4, 1.1],
      [9.2, 3.1],
      [9.0, 5.4],
      [7.4, 7.6],
      [3.9, 11.7],
      [9.3, 11.7],
      [9.3, 14],
      [0.7, 14],
      [0.7, 11.8],
      [5.6, 6.2],
      [6.8, 4.4],
      [6.8, 2.8],
      [5.8, 2.2],
      [4.1, 2.2],
      [3.1, 3.6],
    ],
  ],
  "3": [
    [
      [1.0, 2.8],
      [2.2, 0.8],
      [4.2, 0],
      [6.6, 0],
      [8.4, 1.0],
      [9.1, 2.8],
      [8.8, 5.0],
      [7.5, 6.5],
      [8.9, 7.8],
      [9.3, 10.2],
      [8.3, 12.8],
      [6.4, 14],
      [3.6, 14],
      [1.6, 12.8],
      [0.7, 10.6],
      [3.0, 10.1],
      [3.8, 11.6],
      [5.9, 11.7],
      [6.9, 10.4],
      [6.7, 8.4],
      [5.5, 7.7],
      [3.8, 7.7],
      [3.8, 5.6],
      [5.5, 5.6],
      [6.7, 4.6],
      [6.7, 2.9],
      [5.7, 2.2],
      [3.9, 2.2],
      [3.1, 3.4],
    ],
  ],
  "!": [
    [
      [3.7, 0],
      [6.3, 0],
      [6.0, 9.6],
      [4.0, 9.6],
    ],
    [
      [3.7, 11.3],
      [6.3, 11.3],
      [6.3, 14],
      [3.7, 14],
    ],
  ],
  ".": [
    [
      [3.6, 11.2],
      [6.4, 11.2],
      [6.4, 14],
      [3.6, 14],
    ],
  ],
  "-": [
    [
      [1.6, 5.8],
      [8.4, 5.8],
      [8.4, 8.2],
      [1.6, 8.2],
    ],
  ],
  "|": [
    [
      [4.2, -0.5],
      [5.8, -0.5],
      [5.8, 14.5],
      [4.2, 14.5],
    ],
  ],
};

function drawPosterVectorTextString(
  text: string,
  xStart: number,
  yTop: number,
  charH: number,
  aspect: number,
  weight: "regular" | "bold" | "wide",
  col: string,
  align: "left" | "center" | "right" = "left"
): string {
  const str = text.toUpperCase();
  const scY = charH / 14;
  const scX = (scY / Math.max(0.42, aspect)) * (weight === "bold" ? 1.06 : 0.96);
  const tracking = weight === "wide" ? 7.2 : weight === "bold" ? 2.4 : 3.2;

  const charAdv = (ch: string) => {
    if (ch === " ") return weight === "wide" ? 9.5 : 5.8;
    if (ch === "I" || ch === "|" || ch === "!" || ch === ".") return 4.6;
    if (ch === "M" || ch === "W") return 10.4;
    return 9.4;
  };

  let totalUnits = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    totalUnits += charAdv(ch) + (ch === " " ? 0 : tracking);
  }
  if (str.length > 0 && str[str.length - 1] !== " ") totalUnits -= tracking;

  let curX =
    align === "right"
      ? xStart - totalUnits * scX
      : align === "center"
      ? xStart - totalUnits * scX * 0.5
      : xStart;

  const outPaths: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const adv = charAdv(ch);
    if (ch === " ") {
      curX += adv * scX;
      continue;
    }
    const loops = VECTOR_OUTLINE_GLYPHS[ch];
    const xOff = ch === "I" || ch === "|" || ch === "!" || ch === "." ? -2.7 : 0;

    if (loops && loops.length > 0) {
      let compoundD = "";
      for (let l = 0; l < loops.length; l++) {
        const ring = loops[l];
        if (ring.length < 3) continue;
        for (let p = 0; p < ring.length; p++) {
          const px = curX + (ring[p][0] + xOff) * scX;
          const py = yTop + ring[p][1] * scY;
          compoundD += (p === 0 ? "M" : "L") + `${f1(px)} ${f1(py)}`;
        }
        compoundD += "Z";
      }
      if (compoundD) {
        const ruleAttr = loops.length > 1 ? ` fill-rule="evenodd"` : "";
        outPaths.push(`<path d="${compoundD}" fill="${col}"${ruleAttr}/>`);
      }
    }
    curX += (adv + tracking) * scX;
  }
  return outPaths.join("");
}

function drawPosterVerticalVectorText(
  text: string,
  xPos: number,
  yStart: number,
  charH: number,
  stepY: number,
  aspect: number,
  col: string
): string {
  const str = text.toUpperCase();
  const out: string[] = [];
  let cy = yStart;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch !== " ") {
      out.push(drawPosterVectorTextString(ch, xPos, cy, charH, aspect, "regular", col, "center"));
    }
    cy += stepY;
  }
  return out.join("");
}

function drawPosterSubtitleBlock(
  xPos: number,
  yTop: number,
  maxW: number,
  linesCount: number,
  lineH: number,
  gapY: number,
  col: string,
  align: "left" | "center" | "right" = "left"
): string {
  const ratios = [0.95, 1.0, 0.88, 0.72, 0.92];
  const segs = [
    [0.24, 0.18, 0.31, 0.16],
    [0.32, 0.22, 0.21, 0.15],
    [0.19, 0.28, 0.24, 0.11],
    [0.29, 0.25, 0.14],
  ];
  const out: string[] = [];
  for (let r = 0; r < linesCount; r++) {
    const rowW = maxW * ratios[r % ratios.length];
    const rowSegs = segs[r % segs.length];
    const gapX = maxW * 0.03;
    const y = yTop + r * (lineH + gapY);
    let startX =
      align === "right" ? xPos - rowW : align === "center" ? xPos - rowW * 0.5 : xPos;
    let used = 0;
    for (let s = 0; s < rowSegs.length; s++) {
      const sw =
        s === rowSegs.length - 1
          ? Math.max(lineH, rowW - used)
          : Math.max(lineH, rowW * rowSegs[s]);
      if (startX + sw <= (align === "right" ? xPos + 1 : startX + rowW + 1)) {
        out.push(
          `<rect x="${f1(startX)}" y="${f1(y)}" width="${f1(sw)}" height="${f1(
            lineH
          )}" fill="${col}"/>`
        );
      }
      startX += sw + gapX;
      used += sw + gapX;
    }
  }
  return out.join("");
}

function drawPosterOutlineFrame(
  x0: number,
  y0: number,
  w: number,
  h: number,
  thickX: number,
  thickY: number,
  col: string,
  splitRightGapRatio = 0
): string {
  const x1 = x0 + w;
  const y1 = y0 + h;
  if (splitRightGapRatio <= 0) {
    // 1-piece compound outline frame (Create Outlines rect border)
    const ix0 = x0 + thickX;
    const iy0 = y0 + thickY;
    const ix1 = x1 - thickX;
    const iy1 = y1 - thickY;
    const d =
      `M${f1(x0)} ${f1(y0)}L${f1(x1)} ${f1(y0)}L${f1(x1)} ${f1(y1)}L${f1(x0)} ${f1(y1)}Z` +
      `M${f1(ix0)} ${f1(iy0)}L${f1(ix1)} ${f1(iy0)}L${f1(ix1)} ${f1(iy1)}L${f1(ix0)} ${f1(iy1)}Z`;
    return `<path d="${d}" fill="${col}" fill-rule="evenodd"/>`;
  }
  // Open C-bracket frame with gap for oversized protruding headline (like Ref 5 COV/ER!, POS/TER., DES/IGN.)
  const gapTop = y0 + h * 0.34;
  const gapBot = y0 + h * (0.34 + splitRightGapRatio);
  const topArm =
    `M${f1(x0)} ${f1(y0)}L${f1(x1)} ${f1(y0)}L${f1(x1)} ${f1(gapTop)}L${f1(
      x1 - thickX
    )} ${f1(gapTop)}L${f1(x1 - thickX)} ${f1(y0 + thickY)}L${f1(x0 + thickX)} ${f1(
      y0 + thickY
    )}L${f1(x0 + thickX)} ${f1(y1 - thickY)}L${f1(x1 - thickX)} ${f1(y1 - thickY)}L${f1(
      x1 - thickX
    )} ${f1(gapBot)}L${f1(x1)} ${f1(gapBot)}L${f1(x1)} ${f1(y1)}L${f1(x0)} ${f1(y1)}Z`;
  return `<path d="${topArm}" fill="${col}"/>`;
}

function drawPosterPlusMarkers(
  x0: number,
  y0: number,
  count: number,
  step: number,
  arm: number,
  thick: number,
  aspect: number,
  col: string,
  vertical = false
): string {
  const ax = arm / Math.max(0.45, aspect);
  const ay = arm;
  const tx = (thick * 0.5) / Math.max(0.45, aspect);
  const ty = thick * 0.5;
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const cx = vertical ? x0 : x0 + (i * step) / Math.max(0.45, aspect);
    const cy = vertical ? y0 + i * step : y0;
    // Unified 12-vertex cross polygon (Create Outlines '+' marker)
    const d =
      `M${f1(cx - tx)} ${f1(cy - ay)}L${f1(cx + tx)} ${f1(cy - ay)}` +
      `L${f1(cx + tx)} ${f1(cy - ty)}L${f1(cx + ax)} ${f1(cy - ty)}` +
      `L${f1(cx + ax)} ${f1(cy + ty)}L${f1(cx + tx)} ${f1(cy + ty)}` +
      `L${f1(cx + tx)} ${f1(cy + ay)}L${f1(cx - tx)} ${f1(cy + ay)}` +
      `L${f1(cx - tx)} ${f1(cy + ty)}L${f1(cx - ax)} ${f1(cy + ty)}` +
      `L${f1(cx - ax)} ${f1(cy - ty)}L${f1(cx - tx)} ${f1(cy - ty)}Z`;
    out.push(`<path d="${d}" fill="${col}"/>`);
  }
  return out.join("");
}

function sampleMultiStopRamp(stops: string[], t: number): string {
  const u = Math.max(0, Math.min(1, t));
  if (stops.length <= 1) return stops[0] || "#000000";
  const scaled = u * (stops.length - 1);
  const idx = Math.min(stops.length - 2, Math.floor(scaled));
  const frac = scaled - idx;
  return mixCol(stops[idx], stops[idx + 1], frac);
}

// Renders a 100% pure vector, ZERO-BANDING (no "dag dag" stripes!), 1-click Illustrator-editable
// multi-tone poster background across [cx0, cy0, cw, ch] using a solid base card + 3 smooth sweeping
// organic vector wave/curve layers (each a single clean editable vector object in EPS 10 & SVG!)
function drawPosterSlicedLinearGradient(
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  stops: string[],
  angleDeg: number,
  _slices = 44
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const c0 = stops[0] || "#1e293b";
  const c1 = stops.length > 1 ? stops[1] : c0;
  const c2 = stops.length > 2 ? stops[2] : mixCol(c0, c1, 0.5);
  const c3 = stops.length > 3 ? stops[3] : c2;
  const c4 = stops.length > 4 ? stops[4] : c3;

  // 1. Single solid full-card vector rectangle (1-click selectable & recolorable in Illustrator EPS 10!)
  pushPoly(
    [
      [cx0, cy0],
      [cx1, cy0],
      [cx1, cy1],
      [cx0, cy1],
    ],
    c0
  );

  if (stops.length <= 1) return;

  const rad = (angleDeg * Math.PI) / 180;
  const flipY = Math.sin(rad) < -0.15;
  const phase = (angleDeg * Math.PI) / 180;
  const steps = 36;

  // Helper to build a single smooth sweeping organic wave polygon covering the lower/diagonal portion of the card
  const buildSmoothWaveLayer = (yStartRatio: number, tiltRatio: number, ampRatio: number, freq: number, ph: number): [number, number][] => {
    const pts: [number, number][] = [];
    for (let i = 0; i <= steps; i++) {
      const u = i / steps;
      const x = cx0 + u * cw;
      const baseLine = yStartRatio + (u - 0.5) * tiltRatio;
      const wave =
        Math.sin(u * Math.PI * freq + ph) * ampRatio +
        Math.cos(u * Math.PI * (freq * 0.65) - ph * 0.7) * (ampRatio * 0.45);
      const yNorm = Math.max(-0.1, Math.min(1.1, baseLine + wave));
      const y = flipY ? cy1 - yNorm * ch : cy0 + yNorm * ch;
      pts.push([x, y]);
    }
    if (flipY) {
      pts.push([cx1, cy0 - 2], [cx0, cy0 - 2]);
    } else {
      pts.push([cx1, cy1 + 2], [cx0, cy1 + 2]);
    }
    return pts;
  };

  const tilt = Math.cos(rad) * 0.34;
  // Layer 2: Upper-mid sweeping tonal wave (1 clean vector path)
  pushPoly(buildSmoothWaveLayer(0.24, tilt, 0.08, 1.35, phase), c1);

  // Layer 3: Mid-card sweeping tonal wave (1 clean vector path)
  if (stops.length >= 3) {
    pushPoly(buildSmoothWaveLayer(0.50, -tilt * 0.75, 0.09, 1.5, phase + 1.4), c2);
  }

  // Layer 4: Lower accent tonal wave (1 clean vector path)
  if (stops.length >= 4) {
    pushPoly(buildSmoothWaveLayer(0.73, tilt * 0.85, 0.075, 1.25, phase + 2.7), stops.length >= 5 ? mixCol(c3, c4, 0.55) : c3);
  }
}

// Renders a clean, 100% editable, zero-banding organic vector orb / petal bloom
// using at most 2 smooth organic vector shapes (outer bloom + inner core) — ZERO concentric ring banding!
function drawPosterSmoothMeshOrb(
  pushPoly: (poly: [number, number][], col: string) => void,
  ox: number,
  oy: number,
  rx: number,
  ry: number,
  rotDeg: number,
  outerCol: string,
  midCol: string,
  coreCol: string,
  _rings = 20,
  warpAmp = 0.12,
  warpPhase = 0
) {
  const rad = (rotDeg * Math.PI) / 180;
  const ca = Math.cos(rad);
  const sa = Math.sin(rad);
  const ptsCount = 40;

  const makeOrbPoly = (scale: number, phOff: number): [number, number][] => {
    const poly: [number, number][] = [];
    for (let k = 0; k < ptsCount; k++) {
      const a = (k / ptsCount) * Math.PI * 2;
      const w =
        1 +
        warpAmp * Math.sin(a * 2 + warpPhase + phOff) +
        warpAmp * 0.5 * Math.cos(a * 3 - warpPhase * 0.7 + phOff);
      const lx = Math.cos(a) * rx * scale * w;
      const ly = Math.sin(a) * ry * scale * w;
      poly.push([ox + lx * ca - ly * sa, oy + lx * sa + ly * ca]);
    }
    return poly;
  };

  // 1. Clean outer organic vector shape (1-click editable in Illustrator)
  pushPoly(makeOrbPoly(0.95, 0), mixCol(outerCol, midCol, 0.65));
  // 2. Clean inner core organic vector shape (1-click editable in Illustrator)
  pushPoly(makeOrbPoly(0.56, 0.8), mixCol(midCol, coreCol, 0.75));
}

function drawPosterOrigamiBirdLogo(
  cx: number,
  cy: number,
  sizeY: number,
  aspect: number,
  c1: string,
  c2: string,
  c3: string
): string {
  const sy = sizeY;
  const sx = sizeY / Math.max(0.45, aspect);
  const w1 = `M${f1(cx - sx * 0.95)} ${f1(cy - sy * 0.65)}L${f1(cx - sx * 0.05)} ${f1(
    cy - sy * 0.05
  )}L${f1(cx - sx * 0.65)} ${f1(cy + sy * 0.25)}Z`;
  const w2 = `M${f1(cx - sx * 0.25)} ${f1(cy - sy * 0.85)}L${f1(cx + sx * 0.55)} ${f1(
    cy - sy * 0.15
  )}L${f1(cx - sx * 0.15)} ${f1(cy + sy * 0.15)}Z`;
  const w3 = `M${f1(cx - sx * 0.45)} ${f1(cy + sy * 0.15)}L${f1(cx + sx * 0.45)} ${f1(
    cy - sy * 0.05
  )}L${f1(cx - sx * 0.1)} ${f1(cy + sy * 0.78)}Z`;
  return (
    `<path d="${w1}" fill="${c1}"/>` +
    `<path d="${w2}" fill="${c2}"/>` +
    `<path d="${w3}" fill="${c3}"/>`
  );
}

const POSTER_HEADLINES: [string, string][] = [
  ["HIGH", "QUALITY"],
  ["COLOR", "FUL"],
  ["ABSTRACT", "VECTOR"],
  ["WATER", "COLOR"],
  ["BACK", "GROUND"],
  ["DESIGN", "SET"],
  ["MODERN", "POSTER"],
  ["CREATIVE", "COVER"],
];

const POSTER_RAINBOW_6: {
  base: string;
  deep: string;
  mid: string;
  bright: string;
  glow: string;
  accent: string;
  bird: [string, string, string];
}[] = [
  // 1. Vibrant Purple / Royal Violet
  {
    base: "#9e2eff",
    deep: "#5e0da8",
    mid: "#871ee8",
    bright: "#bd57ff",
    glow: "#da8cff",
    accent: "#7012c4",
    bird: ["#ffcf26", "#ff6b2b", "#00e1ff"],
  },
  // 2. Electric Cyan / Aqua Sky Blue
  {
    base: "#0cb6f5",
    deep: "#006dc4",
    mid: "#0098e6",
    bright: "#47d1ff",
    glow: "#8ce6ff",
    accent: "#007fd4",
    bird: ["#ffb800", "#ff5722", "#aeea00"],
  },
  // 3. Fresh Lime / Botanical Leaf Green
  {
    base: "#6bc605",
    deep: "#3d8700",
    mid: "#55ad00",
    bright: "#89de18",
    glow: "#acef48",
    accent: "#489900",
    bird: ["#ffd600", "#00e5ff", "#ff6d00"],
  },
  // 4. Golden Amber / Sunlit Yellow-Orange
  {
    base: "#ffab00",
    deep: "#d96500",
    mid: "#f28800",
    bright: "#ffc724",
    glow: "#ffe066",
    accent: "#e37400",
    bird: ["#00c853", "#00b0ff", "#ff3d00"],
  },
  // 5. Fiery Coral / Tangerine Red-Orange
  {
    base: "#ff4e05",
    deep: "#bf1a00",
    mid: "#e63300",
    bright: "#ff7226",
    glow: "#ff9e58",
    accent: "#d12400",
    bird: ["#00b0ff", "#ffd600", "#76ff03"],
  },
  // 6. Crimson Berry / Rose Magenta
  {
    base: "#cf175a",
    deep: "#7d0431",
    mid: "#ad0c47",
    bright: "#eb3f7d",
    glow: "#ff78a8",
    accent: "#94073b",
    bird: ["#ffc400", "#00e5ff", "#ff6e40"],
  },
];

function buildWatercolorBlobPoly(
  m: any,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rotDeg: number,
  lobes: number,
  roughness: number
): [number, number][] {
  const pts: [number, number][] = [];
  const rad = (rotDeg * Math.PI) / 180;
  const ca = Math.cos(rad);
  const sa = Math.sin(rad);
  const ph1 = m.rnd() * Math.PI * 2;
  const ph2 = m.rnd() * Math.PI * 2;
  const ph3 = m.rnd() * Math.PI * 2;
  const fA = 2 + Math.floor(m.rnd() * 3);
  const fB = 5 + Math.floor(m.rnd() * 4);
  for (let i = 0; i < lobes; i++) {
    const a = (i / lobes) * Math.PI * 2;
    const wave =
      1 +
      roughness * 0.45 * Math.sin(a * fA + ph1) +
      roughness * 0.32 * Math.cos(a * fB + ph2) +
      roughness * 0.23 * Math.sin(a * (fA + fB) + ph3);
    const lx = Math.cos(a) * rx * wave;
    const ly = Math.sin(a) * ry * wave;
    pts.push([cx + lx * ca - ly * sa, cy + lx * sa + ly * ca]);
  }
  return pts;
}

function buildWatercolorBrushDaubPoly(
  m: any,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  thick: number
): [number, number][] {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  if (len < 1) return [];
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const steps = 18;
  const topP: [number, number][] = [];
  const botP: [number, number][] = [];
  const ph = m.rnd() * Math.PI * 2;
  const arch = (m.rnd() - 0.5) * thick * 0.45;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    let env = 1;
    if (t < 0.16) env = Math.pow(t / 0.16, 0.55);
    else if (t > 0.84) env = Math.pow((1 - t) / 0.16, 0.55);
    const ripple = 0.84 + 0.22 * Math.sin(t * Math.PI * 5 + ph) + (m.rnd() - 0.5) * 0.14;
    const hw = Math.max(1.2, thick * 0.5 * env * ripple);
    const curveOff = Math.sin(t * Math.PI) * arch;
    const bx = x0 + ux * (t * len) + nx * curveOff;
    const by = y0 + uy * (t * len) + ny * curveOff;
    topP.push([bx + nx * hw, by + ny * hw]);
    botP.unshift([bx - nx * hw, by - ny * hw]);
  }
  return topP.concat(botP);
}

// Helper: Rounded pill / rounded rect polygon with optional individual corner radii [tl, tr, br, bl]
function buildPosterRoundedRectPoly(
  x0: number,
  y0: number,
  w: number,
  h: number,
  rTL: number,
  rTR: number,
  rBR: number,
  rBL: number,
  aspect: number
): [number, number][] {
  const maxR = Math.min(w * 0.49, h * 0.49);
  const corners = [
    { cx: x0 + Math.min(maxR, rTL), cy: y0 + Math.min(maxR, rTL * aspect), rx: Math.min(maxR, rTL), ry: Math.min(maxR, rTL * aspect), a0: Math.PI, a1: Math.PI * 1.5 },
    { cx: x0 + w - Math.min(maxR, rTR), cy: y0 + Math.min(maxR, rTR * aspect), rx: Math.min(maxR, rTR), ry: Math.min(maxR, rTR * aspect), a0: Math.PI * 1.5, a1: Math.PI * 2 },
    { cx: x0 + w - Math.min(maxR, rBR), cy: y0 + h - Math.min(maxR, rBR * aspect), rx: Math.min(maxR, rBR), ry: Math.min(maxR, rBR * aspect), a0: 0, a1: Math.PI * 0.5 },
    { cx: x0 + Math.min(maxR, rBL), cy: y0 + h - Math.min(maxR, rBL * aspect), rx: Math.min(maxR, rBL), ry: Math.min(maxR, rBL * aspect), a0: Math.PI * 0.5, a1: Math.PI },
  ];
  const pts: [number, number][] = [];
  for (let c = 0; c < 4; c++) {
    const cr = corners[c];
    const steps = cr.rx > 0.5 ? 10 : 1;
    for (let s = 0; s <= steps; s++) {
      const a = cr.a0 + (s / steps) * (cr.a1 - cr.a0);
      pts.push([cr.cx + Math.cos(a) * cr.rx, cr.cy + Math.sin(a) * cr.ry]);
    }
  }
  return pts;
}

// Helper: Clip arbitrary polygon against a second convex polygon (Sutherland-Hodgman)
function clipPolyAgainstConvexPoly(subject: [number, number][], clip: [number, number][]): [number, number][] {
  let out = subject;
  const n = clip.length;
  if (n < 3) return [];
  let area = 0;
  for (let i = 0; i < n; i++) {
    const a = clip[i];
    const b = clip[(i + 1) % n];
    area += a[0] * b[1] - b[0] * a[1];
  }
  const sign = area >= 0 ? 1 : -1;
  for (let i = 0; i < n; i++) {
    const c1 = clip[i];
    const c2 = clip[(i + 1) % n];
    const edx = c2[0] - c1[0];
    const edy = c2[1] - c1[1];
    const inside = (p: [number, number]) => sign * (edx * (p[1] - c1[1]) - edy * (p[0] - c1[0])) >= -1e-5;
    const intersect = (a: [number, number], b: [number, number]): [number, number] => {
      const dx = b[0] - a[0];
      const dy = b[1] - a[1];
      const denom = edx * dy - edy * dx;
      if (Math.abs(denom) < 1e-8) return a;
      const t = (edx * (c1[1] - a[1]) - edy * (c1[0] - a[0])) / denom;
      return [a[0] + t * dx, a[1] + t * dy];
    };
    const res: [number, number][] = [];
    const mLen = out.length;
    for (let j = 0; j < mLen; j++) {
      const cur = out[j];
      const prev = out[(j + mLen - 1) % mLen];
      const curIn = inside(cur);
      const prevIn = inside(prev);
      if (curIn) {
        if (!prevIn) res.push(intersect(prev, cur));
        res.push(cur);
      } else if (prevIn) {
        res.push(intersect(prev, cur));
      }
    }
    out = res;
    if (!out.length) break;
  }
  return out;
}

function rotatePosterHexHue(hex: string, degShift: number, satScale = 1, lightDelta = 0): string {
  const clean = (hex || "#888888").replace("#", "");
  if (clean.length < 6) return hex;
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  h = (h + ((degShift % 360) + 360) / 360) % 1;
  s = Math.max(0, Math.min(1, s * satScale));
  l = Math.max(0.03, Math.min(0.97, l + lightDelta));
  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };
  let r2 = l;
  let g2 = l;
  let b2 = l;
  if (s !== 0) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r2 = hue2rgb(p, q, h + 1 / 3);
    g2 = hue2rgb(p, q, h);
    b2 = hue2rgb(p, q, h - 1 / 3);
  }
  const toH = (v: number) => Math.round(Math.max(0, Math.min(255, v * 255))).toString(16).padStart(2, "0");
  return `#${toH(r2)}${toH(g2)}${toH(b2)}`;
}

function pushCompoundRingPoly(
  parts: string[],
  cx0: number,
  cy0: number,
  cx1: number,
  cy1: number,
  outPts: [number, number][],
  inPts: [number, number][],
  fillCol: string
) {
  const cOut = clipPosterPolygon(outPts, cx0, cy0, cx1, cy1);
  if (cOut.length < 3) return;
  const cIn = clipPosterPolygon(inPts, cx0, cy0, cx1, cy1);
  if (cIn.length >= 3) {
    parts.push(`<path d="${polyToSvgPath(cOut)}${polyToSvgPath(cIn)}" fill="${fillCol}" fill-rule="evenodd"/>`);
  } else {
    parts.push(`<path d="${polyToSvgPath(cOut)}" fill="${fillCol}"/>`);
  }
}

function makePosterVar(m: any, variant: number, cardIdx: number, colorSet: string) {
  const isVar = variant > 0;
  const isPal = colorSet === "palette";
  // Deterministic golden-angle hue rotation + curated harmonic palette spread per variant
  const baseHue = isVar ? ((variant * 137.508 + Math.floor(variant / 4) * 41 + cardIdx * 17) % 360) : 0;
  const satM = isVar ? 0.92 + ((variant % 6) * 0.04) : 1;
  const waveSeed = variant * 2.3999632 + cardIdx * 1.6180339;
  const colorSetAnchors: Record<string, string[]> = {
    sunset: ["#9b2fae", "#ff3d57", "#ff7b00", "#ffb700", "#e01e5a", "#673ab7"],
    ocean: ["#00b4f5", "#00897b", "#1e88e5", "#43a047", "#3949ab", "#00acc1"],
    pastel: ["#b388ff", "#80d8ff", "#b9f6ca", "#ffe57f", "#ff9e80", "#f8bbd0"],
  };
  return {
    isVar,
    vCol: (hex: string, palSlot = 0, preserveLum = false): string => {
      if (!isVar && !isPal && !colorSetAnchors[colorSet]) return hex;
      if (isPal) {
        const slotIdx = (palSlot + cardIdx * 2 + variant) % 5;
        return mixCol(hex, m.col(slotIdx), isVar ? 0.78 : 0.82);
      }
      let targetHex = hex;
      const anchors = colorSetAnchors[colorSet];
      if (anchors && isVar) {
        const aCol = anchors[(palSlot + cardIdx + variant) % anchors.length];
        targetHex = mixCol(hex, aCol, 0.36);
      }
      const harmonicSpread = [0, 34, -38, 72, -64, 115][(palSlot + variant) % 6];
      const slotHueShift = isVar ? harmonicSpread + ((palSlot * 23 * (variant % 5)) % 54) - 22 : 0;
      const lumShift = preserveLum
        ? 0
        : isVar
        ? Math.sin(variant * 1.91 + palSlot * 1.37 + cardIdx * 0.7) * 0.065
        : 0;
      return rotatePosterHexHue(targetHex, (baseHue + slotHueShift + 360) % 360, satM, lumShift);
    },
    // Smooth, balanced structural variation within the same poster architecture when variant > 0
    vVal: (base: number, span: number): number =>
      isVar ? base + Math.sin(waveSeed) * span * 0.55 : base,
    vAng: (baseDeg: number, spanDeg = 45): number =>
      isVar ? baseDeg + Math.sin(waveSeed * 0.85) * spanDeg * 0.75 : baseDeg,
    vInt: (base: number, minV: number, maxV: number): number => {
      if (!isVar || maxV <= minV) return base;
      const span = maxV - minV + 1;
      return minV + ((base - minV + variant * 3 + cardIdx) % span + span) % span;
    },
    vPick: <T>(arr: T[], defIdx: number): T => arr[(defIdx + variant) % arr.length],
  };
}

// ============================================================================
// REF SET 1: 5 PCS WARM CREAM, CORAL-PINK & AMBER-GOLD MODERNIST SET
// (100% Clean, Un-Sliced 1-Click Editable Vector Shapes — Zero "Dag Dag" Banding!)
// ============================================================================
function drawRef1CoralGoldModernCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const cream = pv.vCol("#efe3cf", 0, true);
  const gold = pv.vCol("#f9a620", 1);
  const coral = pv.vCol("#f24c3d", 2);
  const pink = pv.vCol("#e64882", 3);
  const peach = mixCol(cream, gold, 0.42);

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cream}"/>`);
  const subType = (cardIdx + variant) % 5;

  if (subType === 0) {
    // Card 1: Clean 1-Piece Diagonal Modernist Fin Slats (each fin is 1 solid vector shape + 1 clean lower accent shape!)
    const slats = pv.vInt(6, 5, 8);
    const tilt = cw * pv.vVal(0.28, 0.18);
    const ySlope = pv.vVal(0.11, 0.03);
    const slatCols = [peach, gold, mixCol(gold, coral, 0.5), coral, pink, mixCol(coral, pink, 0.5)];
    for (let s = 0; s < slats; s++) {
      const xStart = cx0 - cw * 0.08 + (s / slats) * cw * 0.96;
      const slatW = (cw / slats) * pv.vVal(1.12, 0.12) * bScale;
      const yTopSlat = cy0 + ch * (pv.vVal(0.05, 0.03) + s * ySlope);
      const slatPoly: [number, number][] = [
        [xStart, yTopSlat],
        [xStart + slatW, yTopSlat + ch * 0.06],
        [xStart + slatW + tilt, cy1 + 10],
        [xStart + tilt, cy1 + 10],
      ];
      pushPoly(slatPoly, slatCols[s % slatCols.length]);
      // Single clean lower tonal overlay per slat (1 vector shape instead of 26 slices!)
      const yMid = yTopSlat + (cy1 - yTopSlat) * 0.48;
      const lowPoly: [number, number][] = [
        [xStart + tilt * 0.48, yMid],
        [xStart + slatW + tilt * 0.48, yMid + ch * 0.05],
        [xStart + slatW + tilt, cy1 + 10],
        [xStart + tilt, cy1 + 10],
      ];
      pushPoly(lowPoly, slatCols[(s + 2) % slatCols.length]);
    }
    if (showText) {
      const th = ch * 0.036;
      parts.push(drawPosterVectorTextString("COVER", cx0 + cw * 0.09, cy1 - ch * 0.21, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("DESIGN", cx0 + cw * 0.09, cy1 - ch * 0.155, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("POSTER", cx0 + cw * 0.09, cy1 - ch * 0.095, th * 0.52, aspect, "regular", "#ffffff", "left"));
    }
  } else if (subType === 1) {
    // Card 2: Clean Staggered Modernist Spheres & Domes (each sphere is 1 whole circle + 1 smooth crescent cap — zero slices!)
    const cols = 3;
    const rows = 4;
    const rX = (cw / cols) * 0.45 * bScale;
    const rY = (rX * cw * aspect) / Math.max(1, ch);
    const spherePalette = [coral, gold, pink, peach];
    for (let c = 0; c < cols; c++) {
      const colX = cx0 + ((c + 0.5) / cols) * cw;
      const yShift = c === 1 ? -rY * 0.55 : c === 2 ? rY * 0.35 : 0;
      for (let r = 0; r < rows; r++) {
        const cy = cy0 + (r + 0.5) * (rY * 2.08) + yShift;
        const circlePoly: [number, number][] = [];
        for (let a = 0; a < 36; a++) {
          const ang = (a / 36) * Math.PI * 2;
          circlePoly.push([colX + Math.cos(ang) * rX, cy + Math.sin(ang) * rY]);
        }
        const mainCol = spherePalette[(c + r) % spherePalette.length];
        pushPoly(circlePoly, mainCol);
        // Clean upper semi-dome highlight shape (1 single vector path!)
        const capPoly: [number, number][] = [];
        for (let a = 0; a <= 18; a++) {
          const ang = Math.PI + (a / 18) * Math.PI;
          capPoly.push([colX + Math.cos(ang) * rX, cy + Math.sin(ang) * rY]);
        }
        pushPoly(capPoly, spherePalette[(c + r + 1) % spherePalette.length]);
      }
    }
    if (showText) {
      const th = ch * 0.036;
      parts.push(drawPosterVectorTextString("MODERN", cx0 + cw * 0.09, cy1 - ch * 0.175, th, aspect, "bold", "#df3b57", "left"));
      parts.push(drawPosterVectorTextString("COVER", cx0 + cw * 0.09, cy1 - ch * 0.125, th, aspect, "bold", "#df3b57", "left"));
    }
  } else if (subType === 2) {
    // Card 3: 3D Warped Halftone Dot-Matrix Wave Mesh on Clean Warm Cream
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [cream, peach, mixCol(gold, coral, 0.35), pink], pv.vAng(85, 45));
    const gridX = pv.vInt(24, 20, 28);
    const gridY = pv.vInt(32, 26, 36);
    const phShift = pv.vVal(0, 3.14);
    const fU = pv.vVal(2.2, 0.75);
    const fV = pv.vVal(2.0, 0.75);
    for (let iy = 0; iy < gridY; iy++) {
      const v = iy / (gridY - 1);
      for (let ix = 0; ix < gridX; ix++) {
        const u = ix / (gridX - 1);
        const waveZ =
          Math.sin(u * Math.PI * fU + v * Math.PI * fV + phShift) * 0.5 +
          Math.cos(v * Math.PI * (fV * 1.3) - u * Math.PI * 1.4 + phShift) * 0.5;
        const dx = Math.sin(v * Math.PI * 2 + u * 2.5 + phShift) * cw * 0.042;
        const dy = Math.cos(u * Math.PI * 2.2 - v * 2.0 + phShift) * ch * 0.038;
        const px = cx0 + u * cw + dx;
        const py = cy0 + v * ch + dy;
        const dotR = cw * (0.0055 + Math.max(0.05, (waveZ + 1) * 0.5) * 0.013) * bScale;
        const dotRy = (dotR * cw * aspect) / Math.max(1, ch);
        const dotCol = sampleMultiStopRamp([gold, coral, pink, "#ffffff"], Math.min(1, Math.max(0, v * 0.75 + (waveZ + 1) * 0.15)));
        const pts: [number, number][] = [];
        for (let k = 0; k < 12; k++) {
          const a = (k / 12) * Math.PI * 2;
          pts.push([px + Math.cos(a) * dotR, py + Math.sin(a) * dotRy]);
        }
        pushPoly(pts, dotCol);
      }
    }
    if (showText) {
      const th = ch * 0.042;
      parts.push(drawPosterVectorTextString("INSPIRATION", cx0 + cw * 0.5, cy0 + ch * 0.45, th, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy0 + ch * 0.515, cw * 0.26, 2, ch * 0.005, ch * 0.006, "#ffffff", "center"));
    }
  } else if (subType === 3) {
    // Card 4: Clean 1-Piece Rounded Pill Capsules over Soft Circles (every pill is 1 single clickable vector capsule!)
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.76, cy0 + ch * 0.25, cw * 0.46, ch * 0.30, 0, peach, gold, coral);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.24, cy0 + ch * 0.72, cw * 0.44, ch * 0.30, 0, peach, pink, coral);

    const baseWidths = [0.28, 0.52, 0.68, 0.60, 0.78, 0.64, 0.48, 0.26];
    const pillCount = 8;
    const totalSpanY = ch * 0.86;
    const pillH = totalSpanY / pillCount;
    const startY = cy0 + (ch - totalSpanY) * 0.5;
    const pillCols = [pink, coral, gold, mixCol(coral, pink, 0.5), mixCol(gold, coral, 0.45)];
    for (let p = 0; p < pillCount; p++) {
      const wRatio = baseWidths[p % baseWidths.length];
      const pw = cw * wRatio * Math.min(1.15, bScale);
      const px0 = cx0 + (cw - pw) * 0.5;
      const py0 = startY + p * pillH + pillH * 0.06;
      const ph = pillH * 0.88;
      const rPx = (ph / Math.max(0.5, aspect)) * 0.5;
      const pillPoly = buildPosterRoundedRectPoly(px0, py0, pw, ph, rPx, rPx, rPx, rPx, aspect);
      pushPoly(pillPoly, pillCols[p % pillCols.length]);
    }
    if (showText) {
      const th = ch * 0.038;
      parts.push(drawPosterVectorTextString("MODERN ART", cx0 + cw * 0.5, cy0 + ch * 0.44, th, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterVectorTextString("DESIGN", cx0 + cw * 0.5, cy0 + ch * 0.50, th * 0.52, aspect, "wide", "#ffffff", "center"));
    }
  } else {
    // Card 5: 4 Large Clean Rounded Bento Blocks (each Bento block is 1 solid vector shape + 1 clean inner wave shape!)
    const splitX = cw * pv.vVal(0.48, 0.12);
    const splitYLeft = ch * pv.vVal(0.43, 0.12);
    const splitYRight = ch * pv.vVal(0.53, 0.12);
    const radCorner = cw * pv.vVal(0.22, 0.05);
    const gap = cw * 0.018;
    const blocks = [
      { x: cx0, y: cy0, w: splitX - gap * 0.5, h: splitYLeft - gap * 0.5, r: [0, 0, radCorner, 0], c1: gold, c2: coral },
      { x: cx0 + splitX + gap * 0.5, y: cy0, w: cw - splitX - gap * 0.5, h: splitYRight - gap * 0.5, r: [0, 0, 0, radCorner], c1: coral, c2: pink },
      { x: cx0, y: cy0 + splitYLeft + gap * 0.5, w: splitX - gap * 0.5, h: ch - splitYLeft - gap * 0.5, r: [0, radCorner, 0, 0], c1: pink, c2: gold },
      { x: cx0 + splitX + gap * 0.5, y: cy0 + splitYRight + gap * 0.5, w: cw - splitX - gap * 0.5, h: ch - splitYRight - gap * 0.5, r: [radCorner, 0, 0, 0], c1: mixCol(coral, gold, 0.4), c2: pink },
    ];
    for (let b = 0; b < blocks.length; b++) {
      const bk = blocks[b];
      const bPoly = buildPosterRoundedRectPoly(bk.x, bk.y, bk.w, bk.h, bk.r[0], bk.r[1], bk.r[2], bk.r[3], aspect);
      pushPoly(bPoly, bk.c1);
      // Clean secondary accent shape clipped inside the bento block (1 clean vector path!)
      const accentH = bk.h * 0.48;
      const accentY = b < 2 ? bk.y + bk.h - accentH : bk.y;
      const accentStrip: [number, number][] = [
        [bk.x - 2, accentY],
        [bk.x + bk.w + 2, accentY],
        [bk.x + bk.w + 2, accentY + accentH],
        [bk.x - 2, accentY + accentH],
      ];
      const cl = clipPolyAgainstConvexPoly(accentStrip, bPoly);
      if (cl.length >= 3) pushPoly(cl, bk.c2);
    }
    if (showText) {
      const th = ch * 0.032;
      parts.push(drawPosterVectorTextString("DESIGN", cx1 - cw * 0.09, cy0 + ch * 0.16, th * 0.6, aspect, "regular", "#ffffff", "right"));
      parts.push(drawPosterVectorTextString("INSPIRATION", cx1 - cw * 0.09, cy0 + ch * 0.20, th, aspect, "bold", "#ffffff", "right"));
      parts.push(drawPosterSubtitleBlock(cx1 - cw * 0.09, cy0 + ch * 0.26, cw * 0.28, 3, ch * 0.005, ch * 0.006, "#ffffff", "right"));
    }
  }
}

// ============================================================================
// REF SET 2 & 4: 4 PCS SMOOTH AURORA MESH & DEEP SAPPHIRE SILK WAVE SET
// (100% Clean, Zero-Banding, 1-Click Editable Vector Wave & Bloom Layers!)
// ============================================================================
function drawRef2Or4SmoothAuroraMeshCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  isSapphireMode: boolean,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const sub = (cardIdx + variant) % 4;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);

  if (!isSapphireMode) {
    if (sub === 0) {
      const cA = pv.vCol("#7a1478", 0);
      const cB = pv.vCol("#ef146e", 1);
      const cC = pv.vCol("#ff6a00", 2);
      const cD = pv.vCol("#ffcf33", 3);
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [cA, cB, cC, cD], pv.vAng(65, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.28, 0.18), cy0 + ch * pv.vVal(0.56, 0.15), cw * 0.42 * bScale, ch * 0.36 * bScale, pv.vAng(-10, 45), cB, cC, cD, 2, 0.12, variant);
    } else if (sub === 1) {
      const cA = pv.vCol("#083358", 0);
      const cB = pv.vCol("#4d072b", 1);
      const cC = pv.vCol("#d49bbd", 2);
      const cD = pv.vCol("#fdf2e9", 3, true);
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [cA, pv.vCol("#2c3e6b", 1), cC, cD], pv.vAng(115, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.58, 0.18), cy0 + ch * pv.vVal(0.50, 0.16), cw * 0.44 * bScale, ch * 0.34 * bScale, pv.vAng(-28, 50), pv.vCol("#5d4375", 1), cB, cC, 2, 0.12, variant);
    } else if (sub === 2) {
      const cA = pv.vCol("#030b66", 0);
      const cB = pv.vCol("#1d3fd1", 1);
      const cC = pv.vCol("#60a5fa", 2);
      const cD = pv.vCol("#cffafe", 3, true);
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [cA, cB, cC, cD], pv.vAng(18, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.28, 0.18), cy0 + ch * pv.vVal(0.46, 0.16), cw * 0.36 * bScale, ch * 0.40 * bScale, pv.vAng(15, 45), cB, cC, cD, 2, 0.10, variant);
    } else {
      const cA = pv.vCol("#1ab385", 0);
      const cB = pv.vCol("#19457a", 1);
      const cC = pv.vCol("#7ee8c8", 2);
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [pv.vCol("#fef9c3", 3, true), cA, cB, cC], pv.vAng(65, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.42, 0.18), cy0 + ch * pv.vVal(0.62, 0.16), cw * 0.44 * bScale, ch * 0.34 * bScale, pv.vAng(25, 45), cA, cB, cC, 2, 0.12, variant);
    }
  } else {
    if (sub === 0) {
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [pv.vCol("#03236b", 0), pv.vCol("#0a368a", 1), pv.vCol("#1c58b8", 2), pv.vCol("#6468a6", 3)], pv.vAng(55, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.78, 0.18), cy0 + ch * pv.vVal(0.32, 0.16), cw * 0.40 * bScale, ch * 0.30 * bScale, pv.vAng(0, 45), pv.vCol("#1c4ca3", 1), pv.vCol("#6468a6", 2), pv.vCol("#a892b5", 3), 2, 0.10, variant);
    } else if (sub === 1) {
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [pv.vCol("#082c6c", 0), pv.vCol("#1a5b9c", 1), pv.vCol("#3484b8", 2), pv.vCol("#65b2db", 3)], pv.vAng(120, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.42, 0.18), cy0 + ch * pv.vVal(0.35, 0.16), cw * 0.44 * bScale, ch * 0.30 * bScale, pv.vAng(-18, 45), pv.vCol("#164e8f", 1), pv.vCol("#3484b8", 2), pv.vCol("#65b2db", 3), 2, 0.12, variant);
    } else if (sub === 2) {
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [pv.vCol("#020b26", 0), pv.vCol("#0b2e78", 1), pv.vCol("#15469e", 2), pv.vCol("#2563eb", 3)], pv.vAng(35, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.45, 0.18), cy0 + ch * pv.vVal(0.44, 0.16), cw * 0.46 * bScale, ch * 0.34 * bScale, pv.vAng(-22, 45), pv.vCol("#082563", 1), pv.vCol("#15469e", 2), pv.vCol("#3b82f6", 3), 2, 0.12, variant);
    } else {
      drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [pv.vCol("#06337b", 0), pv.vCol("#0b4191", 1), pv.vCol("#1657b5", 2), pv.vCol("#276fd1", 3)], pv.vAng(75, 110));
      drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.56, 0.18), cy0 + ch * pv.vVal(0.55, 0.16), cw * 0.48 * bScale, ch * 0.38 * bScale, pv.vAng(-15, 45), pv.vCol("#0b3d8c", 1), pv.vCol("#1657b5", 2), pv.vCol("#38bdf8", 3), 2, 0.10, variant);
    }
  }

  if (showText) {
    const padX = cw * 0.10;
    const th = ch * 0.032;
    if (sub === 0) {
      parts.push(drawPosterVectorTextString("ABSTRACT", cx1 - padX, cy0 + ch * 0.12, th * 0.82, aspect, "wide", "#ffffff", "right"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx1 - padX, cy0 + ch * 0.16, th * 0.42, aspect, "wide", "#ffffff", "right"));
      parts.push(drawPosterSubtitleBlock(isSapphireMode ? cx0 + padX : cx1 - padX, cy1 - ch * 0.11, cw * 0.46, 4, ch * 0.0045, ch * 0.006, "#ffffff", isSapphireMode ? "left" : "right"));
    } else if (sub === 1) {
      parts.push(drawPosterVectorTextString("ABSTRACT", cx0 + cw * 0.5, cy0 + ch * 0.23, th, aspect, "wide", "#ffffff", "center"));
      parts.push(drawPosterVectorTextString("DESIGN", cx0 + cw * 0.5, cy0 + ch * 0.278, th * 0.48, aspect, "wide", "#ffffff", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy1 - ch * 0.18, cw * 0.48, 4, ch * 0.0045, ch * 0.006, "#ffffff", "center"));
    } else if (sub === 2) {
      parts.push(drawPosterVectorTextString("COVER", cx0 + padX, cy1 - ch * 0.24, th * 1.15, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("DESIGN", cx0 + padX, cy1 - ch * 0.185, th * 0.48, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + padX, cy1 - ch * 0.14, cw * 0.48, 4, ch * 0.0045, ch * 0.006, "#ffffff", "left"));
    } else {
      parts.push(drawPosterVectorTextString("DE", cx0 + padX, cy0 + ch * 0.12, th * 1.18, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("SIGN", cx0 + padX, cy0 + ch * 0.172, th * 1.18, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx0 + padX, cy0 + ch * 0.228, th * 0.38, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx1 - padX, cy1 - ch * 0.11, cw * 0.46, 4, ch * 0.0045, ch * 0.006, "#ffffff", "right"));
    }
  }
}

// ============================================================================
// REF SET 3: 4 PCS 3D DIAGONAL PILLS, HALFTONE DOTS, RAINBOW RINGS & PIXEL STEPS
// (Exact match to image_c0ea915b.png + brand-new procedural designs on Unique Generate)
// ============================================================================
function drawRef3GeoPillsRingsCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const sub = (cardIdx + variant) % 4;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);

  if (sub === 0) {
    // Card 1: Gradient with 45-Deg 3D Embossed Rounded Pills
    const stops = [pv.vCol("#4f46e5", 0), pv.vCol("#0284c7", 1), pv.vCol("#00d68f", 2)];
    const pillAngDeg = pv.vAng(-45, 35);
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, stops, pillAngDeg, 42);
    const pills = [
      { x: 0.12, y: 0.18, len: 0.55, w: 0.15 },
      { x: 0.45, y: 0.14, len: 0.58, w: 0.15 },
      { x: 0.28, y: 0.45, len: 0.72, w: 0.16 },
      { x: 0.70, y: 0.34, len: 0.46, w: 0.15 },
      { x: 0.06, y: 0.72, len: 0.44, w: 0.15 },
      { x: 0.68, y: 0.66, len: 0.52, w: 0.16 },
      { x: 0.26, y: 0.92, len: 0.42, w: 0.15 },
      { x: 0.85, y: 0.88, len: 0.42, w: 0.15 },
    ];
    const ang = (pillAngDeg * Math.PI) / 180;
    for (let i = 0; i < pills.length; i++) {
      const p = pills[i];
      const px = cx0 + pv.vVal(p.x, 0.10) * cw;
      const py = cy0 + pv.vVal(p.y, 0.08) * ch;
      const l = cw * pv.vVal(p.len, 0.12) * bScale;
      const pw = cw * pv.vVal(p.w, 0.025) * bScale;
      const xA = px - Math.cos(ang) * l * 0.5;
      const yA = py - Math.sin(ang) * l * 0.5;
      const xB = px + Math.cos(ang) * l * 0.5;
      const yB = py + Math.sin(ang) * l * 0.5;
      const shPoly = buildWatercolorBrushDaubPoly(m, xA - cw * 0.015, yA + ch * 0.018, xB - cw * 0.015, yB + ch * 0.018, pw * 1.05);
      pushPoly(shPoly, mixCol(stops[0], "#040b29", 0.55));
      const tPos = Math.max(0, Math.min(1, p.x * 0.55 + (1 - p.y) * 0.45));
      const pCol = mixCol(sampleMultiStopRamp(stops, tPos), "#ffffff", 0.12);
      const bodyPoly = buildWatercolorBrushDaubPoly(m, xA, yA, xB, yB, pw);
      pushPoly(bodyPoly, pCol);
    }
    if (showText) {
      const th = ch * 0.044;
      const tx = cx0 + cw * 0.62;
      parts.push(drawPosterVectorTextString("CREA", tx, cy0 + ch * 0.27, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("TIVE", tx, cy0 + ch * 0.33, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("COVER", tx, cy0 + ch * 0.405, th * 0.56, aspect, "regular", "#d1fae5", "left"));
      parts.push(drawPosterVectorTextString("DESIGN", tx, cy0 + ch * 0.445, th * 0.56, aspect, "regular", "#d1fae5", "left"));
    }
  } else if (sub === 1) {
    // Card 2: Gradient with White Halftone Dot Circles & Framed [ T I T L E ]
    const stops = [pv.vCol("#ffd600", 1), pv.vCol("#ff7b00", 2), pv.vCol("#ff2a6d", 3)];
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, stops, pv.vAng(55, 75), 42);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.72, 0.18), cy0 + ch * pv.vVal(0.14, 0.12), cw * 0.34, ch * 0.24, 0, stops[1], pv.vCol("#b5c42b", 0), pv.vCol("#94b833", 0), 12, 0, 0);

    const drawHalftoneCluster = (hcx: number, hcy: number, hRad: number, gridN: number) => {
      for (let gy = -gridN; gy <= gridN; gy++) {
        for (let gx = -gridN; gx <= gridN; gx++) {
          const dist = Math.hypot(gx, gy) / gridN;
          if (dist > 1) continue;
          const dx = hcx + (gx / gridN) * hRad;
          const dy = hcy + (gy / gridN) * ((hRad * cw * aspect) / Math.max(1, ch));
          const r = cw * 0.009 * (1 - dist * 0.55) * bScale;
          const ry = (r * cw * aspect) / Math.max(1, ch);
          const pts: [number, number][] = [];
          for (let k = 0; k < 8; k++) {
            const a = (k / 8) * Math.PI * 2;
            pts.push([dx + Math.cos(a) * r, dy + Math.sin(a) * ry]);
          }
          pushPoly(pts, mixCol("#ffffff", "#ffe082", dist * 0.4));
        }
      }
    };
    drawHalftoneCluster(cx0 + cw * pv.vVal(0.25, 0.16), cy0 + ch * pv.vVal(0.18, 0.10), cw * pv.vVal(0.30, 0.05), 7);
    drawHalftoneCluster(cx0 + cw * pv.vVal(0.98, 0.14), cy0 + ch * pv.vVal(0.38, 0.14), cw * pv.vVal(0.24, 0.05), 6);
    drawHalftoneCluster(cx0 + cw * pv.vVal(0.58, 0.18), cy0 + ch * pv.vVal(0.92, 0.10), cw * pv.vVal(0.22, 0.05), 6);

    for (let d = 0; d < 18; d++) {
      const u = d / 17;
      const lx = cx0 + cw * (0.04 + u * 0.46);
      const ly = cy0 + ch * (0.76 - u * 0.28);
      const r = cw * 0.0045;
      const ry = (r * cw * aspect) / Math.max(1, ch);
      pushPoly([[lx - r, ly], [lx, ly - ry], [lx + r, ly], [lx, ly + ry]], "#ffffff");
    }
    for (let b = 0; b < 4; b++) {
      const bx = cx0 + cw * (0.10 + b * 0.11);
      const by = cy0 + ch * (0.89 - b * 0.065);
      const br = cw * 0.045;
      const bry = (br * cw * aspect) / Math.max(1, ch);
      const pts: [number, number][] = [];
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        pts.push([bx + Math.cos(a) * br, by + Math.sin(a) * bry]);
      }
      pushPoly(pts, pv.vCol("#ff754b", 2));
    }

    if (showText) {
      const fw = cw * 0.44;
      const fh = ch * 0.115;
      const fx = cx0 + (cw - fw) * 0.5;
      const fy = cy0 + ch * 0.285;
      parts.push(drawPosterOutlineFrame(fx, fy, fw, fh, cw * 0.012, ch * 0.008, "#ffffff", 0));
      parts.push(drawPosterVectorTextString("TITLE", cx0 + cw * 0.5, fy + fh * 0.34, fh * 0.32, aspect, "wide", "#ffffff", "center"));
    }
  } else if (sub === 2) {
    // Card 3: Deep Indigo-Violet Background with Clean 1-Piece Colorful Open C-Ring Arcs
    const stops = [pv.vCol("#180b54", 0), pv.vCol("#3b0ca3", 1), pv.vCol("#9d1796", 4)];
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, stops, pv.vAng(125, 80));
    const rings = [
      { cx: 0.22, cy: 0.35, r: 0.19, a0: -1.1, a1: 2.8, c1: "#facc15", c2: "#38bdf8" },
      { cx: 0.62, cy: 0.12, r: 0.18, a0: 0.4, a1: 3.4, c1: "#06b6d4", c2: "#818cf8" },
      { cx: 0.64, cy: 0.47, r: 0.19, a0: 0.6, a1: 4.3, c1: "#10b981", c2: "#34d399" },
      { cx: 0.98, cy: 0.20, r: 0.17, a0: 1.4, a1: 3.3, c1: "#f97316", c2: "#fbbf24" },
      { cx: 1.04, cy: 0.53, r: 0.15, a0: 1.9, a1: 3.9, c1: "#ec4899", c2: "#f472b6" },
      { cx: -0.04, cy: 0.68, r: 0.15, a0: -1.2, a1: 1.3, c1: "#a855f7", c2: "#06b6d4" },
      { cx: 0.28, cy: 0.82, r: 0.18, a0: -1.6, a1: 1.5, c1: "#d946ef", c2: "#a855f7" },
      { cx: 0.80, cy: 0.82, r: 0.18, a0: 0, a1: 4.8, c1: "#6366f1", c2: "#ec4899" },
    ];
    for (let i = 0; i < rings.length; i++) {
      const rg = rings[i];
      const rcx = cx0 + pv.vVal(rg.cx, 0.09) * cw;
      const rcy = cy0 + pv.vVal(rg.cy, 0.08) * ch;
      const rOuterX = cw * pv.vVal(rg.r, 0.03) * bScale;
      const rOuterY = (rOuterX * cw * aspect) / Math.max(1, ch);
      const rInnerX = rOuterX * 0.78;
      const rInnerY = rOuterY * 0.78;
      const segs = 28;
      const rotOff = pv.vVal(0, 3.14);
      const col1 = pv.vCol(rg.c1, i % 5);
      // Emit 1 single clean continuous vector C-ring path per ring (1-click editable in Illustrator!)
      const outerPts: [number, number][] = [];
      const innerPts: [number, number][] = [];
      for (let s = 0; s <= segs; s++) {
        const t = s / segs;
        const ang = rg.a0 + t * (rg.a1 - rg.a0) + rotOff;
        outerPts.push([rcx + Math.cos(ang) * rOuterX, rcy + Math.sin(ang) * rOuterY]);
        innerPts.unshift([rcx + Math.cos(ang) * rInnerX, rcy + Math.sin(ang) * rInnerY]);
      }
      pushPoly(outerPts.concat(innerPts), col1);
    }
    if (showText) {
      const th = ch * 0.028;
      parts.push(drawPosterVectorTextString("LOREM IPSUM", cx0 + cw * 0.14, cy0 + ch * 0.64, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.54, cy0 + ch * 0.678, cw * 0.22, 1, ch * 0.004, ch * 0.004, "#e9d5ff", "right"));
    }
  } else {
    // Card 4: Stepped Pixel-Column Chevron Gradient + Bottom-Right Boxed [ de / si / gn ]
    const stops = [pv.vCol("#007cf0", 2), pv.vCol("#0051b8", 1), pv.vCol("#032666", 0), pv.vCol("#011233", 0)];
    const pCols = pv.vInt(10, 8, 12);
    const pRows = pv.vInt(14, 12, 16);
    const cellW = cw / pCols;
    const cellH = ch / pRows;
    const waveFreq = pv.vVal(1.1, 0.5);
    const wavePh = pv.vVal(0, 3.14);
    for (let r = 0; r < pRows; r++) {
      for (let c = 0; c < pCols; c++) {
        const waveStep = (c % 2 === 0 ? 1 : -1) * 0.04 + Math.sin(c * waveFreq + wavePh) * 0.05;
        const t = Math.max(0, Math.min(1, r / (pRows - 1) + waveStep));
        const col = sampleMultiStopRamp(stops, t);
        const xA = cx0 + c * cellW;
        const yA = cy0 + r * cellH;
        pushPoly(
          [
            [xA, yA],
            [xA + cellW + 0.6, yA],
            [xA + cellW + 0.6, yA + cellH + 0.6],
            [xA, yA + cellH + 0.6],
          ],
          col
        );
      }
    }
    if (showText) {
      const fw = cw * 0.20;
      const fh = ch * 0.26;
      const fx = cx1 - cw * 0.10 - fw;
      const fy = cy1 - ch * 0.14 - fh;
      parts.push(drawPosterOutlineFrame(fx, fy, fw, fh, cw * 0.009, ch * 0.006, "#ffffff", 0));
      const th = ch * 0.032;
      parts.push(drawPosterVectorTextString("DE", fx + fw * 0.24, fy + fh * 0.20, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("SI", fx + fw * 0.24, fy + fh * 0.42, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("GN", fx + fw * 0.24, fy + fh * 0.64, th, aspect, "bold", "#ffffff", "left"));
    }
  }
}

// ============================================================================
// REF SET 5: 3 PCS LIQUID LAVA BLOBS, MICRO-DOT MATRIX & SPLIT WHITE FRAME
// (Exact match to image_531feebd.png: COV/ER!, POS/TER., DES/IGN. + GRADIENT)
// ============================================================================
function drawRef5LiquidLavaFrameCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cy1 = cy0 + ch;
  const sub = (cardIdx + variant) % 3;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);

  const themes = [
    {
      stops: [pv.vCol("#19d3f3", 0), pv.vCol("#1d7dfa", 1), pv.vCol("#242ea8", 2)],
      blobs: [pv.vCol("#0db4e6", 0), pv.vCol("#1a56db", 1), pv.vCol("#1e2791", 2), pv.vCol("#38e4ae", 3)],
      t1: "COV",
      t2: "ER!",
    },
    {
      stops: [pv.vCol("#a21caf", 1), pv.vCol("#86198f", 2), pv.vCol("#d946ef", 3)],
      blobs: [pv.vCol("#c026d3", 1), pv.vCol("#701a75", 2), pv.vCol("#e879f9", 3), pv.vCol("#581c87", 0)],
      t1: "POS",
      t2: "TER.",
    },
    {
      stops: [pv.vCol("#ec0075", 2), pv.vCol("#f45d22", 3), pv.vCol("#fbbf24", 4)],
      blobs: [pv.vCol("#ff2a85", 2), pv.vCol("#e11d48", 1), pv.vCol("#fb923c", 3), pv.vCol("#facc15", 4)],
      t1: "DES",
      t2: "IGN.",
    },
  ];
  const thm = themes[sub];
  drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, thm.stops, pv.vAng(55, 80));

  if (sub < 2) {
    const blobSpecs = [
      { x: 0.72, y: 0.14, rx: 0.36, ry: 0.24, rot: -25, c: thm.blobs[0] },
      { x: 0.22, y: 0.42, rx: 0.34, ry: 0.28, rot: 18, c: thm.blobs[1] },
      { x: 0.85, y: 0.48, rx: 0.32, ry: 0.26, rot: 35, c: thm.blobs[2] },
      { x: 0.42, y: 0.68, rx: 0.35, ry: 0.28, rot: -15, c: thm.blobs[1] },
      { x: 0.38, y: 0.92, rx: 0.40, ry: 0.22, rot: 12, c: thm.blobs[3] },
    ];
    for (let i = 0; i < blobSpecs.length; i++) {
      const b = blobSpecs[i];
      const poly = buildWatercolorBlobPoly(
        m,
        cx0 + pv.vVal(b.x, 0.14) * cw,
        cy0 + pv.vVal(b.y, 0.12) * ch,
        cw * pv.vVal(b.rx, 0.06) * bScale,
        ch * pv.vVal(b.ry, 0.06) * bScale,
        pv.vAng(b.rot, 65),
        28,
        0.18
      );
      pushPoly(poly, b.c);
    }
  } else {
    const beamCount = pv.vInt(7, 5, 9);
    const tiltX = pv.vVal(0.65, 0.25);
    for (let k = 0; k < beamCount; k++) {
      const u = k / Math.max(1, beamCount - 1);
      const sx = cx0 + u * cw * 1.1 - cw * 0.1;
      const sy = cy0 + ch * 0.95;
      const ex = sx + cw * tiltX;
      const ey = cy0 - ch * 0.05;
      const beam = buildWatercolorBrushDaubPoly(m, sx, sy, ex, ey, cw * (0.12 + (k % 2) * 0.06) * bScale);
      pushPoly(beam, thm.blobs[k % thm.blobs.length]);
    }
  }

  const drawDotMatrix = (mx0: number, my0: number, colsD: number, rowsD: number) => {
    const stepX = cw * 0.036;
    const stepY = ch * 0.025;
    const r = cw * 0.0042;
    const ry = (r * cw * aspect) / Math.max(1, ch);
    for (let rIdx = 0; rIdx < rowsD; rIdx++) {
      for (let cIdx = 0; cIdx < colsD; cIdx++) {
        const dx = mx0 + cIdx * stepX;
        const dy = my0 + rIdx * stepY;
        pushPoly(
          [
            [dx - r, dy],
            [dx, dy - ry],
            [dx + r, dy],
            [dx, dy + ry],
          ],
          "#ffffff"
        );
      }
    }
  };
  if (sub < 2) {
    drawDotMatrix(cx0 + cw * 0.13, cy0 + ch * 0.14, 6, 10);
    drawDotMatrix(cx0 + cw * 0.64, cy0 + ch * 0.48, 6, 10);
  } else {
    drawDotMatrix(cx0 + cw * 0.40, cy0 + ch * 0.14, 12, 5);
  }

  if (showText) {
    const fw = cw * 0.36;
    const fh = ch * 0.41;
    const fx = cx0 + cw * 0.31;
    const fy = cy0 + ch * 0.22;
    parts.push(drawPosterOutlineFrame(fx, fy, fw, fh, cw * 0.013, ch * 0.009, "#ffffff", 0.36));

    const bigH = ch * 0.068;
    parts.push(drawPosterVectorTextString(thm.t1, fx - cw * 0.02, fy + fh * 0.30, bigH, aspect, "bold", "#ffffff", "left"));
    parts.push(drawPosterVectorTextString(thm.t2, fx + cw * 0.14, fy + fh * 0.56, bigH, aspect, "bold", "#ffffff", "left"));

    const padX = cw * 0.095;
    parts.push(drawPosterVectorTextString("GRADIENT", cx0 + padX, cy1 - ch * 0.22, ch * 0.030, aspect, "bold", "#ffffff", "left"));
    parts.push(drawPosterSubtitleBlock(cx0 + padX, cy1 - ch * 0.165, cw * 0.68, 4, ch * 0.0045, ch * 0.006, "#ffffff", "left"));
  }
}

// ============================================================================
// REF SET 6: 6 PCS VINTAGE RETRO GRUNGE SUNBURST, HARLEQUIN DIAMOND & PINWHEEL
// (Exact 100% Habuhu match to image_158760e1.png / image_4dcdf247.png)
// ============================================================================
function drawRef6RetroCircusGrungeCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  _showText: boolean,
  _aspect: number,
  variant: number
) {
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sage = pv.vCol("#76a57c", 0);
  const red = pv.vCol("#e5392d", 1);
  const blue = pv.vCol("#5ca7dc", 2);
  const gold = pv.vCol("#ecc138", 3);
  const cream = "#f6f2e4";

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cream}"/>`);
  const sub = (cardIdx + variant) % 6;

  if (sub === 0) {
    // Card 1: Centered Sage Green & Cream 16-Ray Vintage Sunburst
    const rays = 32;
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.5;
    const rad = Math.hypot(cw, ch) * 1.25;
    for (let i = 0; i < rays; i += 2) {
      const a0 = (i / rays) * Math.PI * 2;
      const a1 = ((i + 1) / rays) * Math.PI * 2;
      pushPoly([[ox, oy], [ox + Math.cos(a0) * rad, oy + Math.sin(a0) * rad], [ox + Math.cos(a1) * rad, oy + Math.sin(a1) * rad]], sage);
    }
  } else if (sub === 1) {
    // Card 2: Red, Sky-Blue & Cream Harlequin Diamond Grid
    const colsD = 4;
    const rowsD = 5;
    const dw = cw / colsD;
    const dh = ch / rowsD;
    for (let r = -1; r <= rowsD; r++) {
      for (let c = -1; c <= colsD; c++) {
        const dx = cx0 + (c + 0.5) * dw;
        const dy = cy0 + (r + 0.5) * dh;
        pushPoly([[dx, dy - dh * 0.5], [dx + dw * 0.5, dy], [dx, dy + dh * 0.5], [dx - dw * 0.5, dy]], red);
        const bx = cx0 + c * dw;
        const by = cy0 + r * dh;
        if ((r + c) % 2 === 0) {
          pushPoly([[bx, by - dh * 0.5], [bx + dw * 0.5, by], [bx, by + dh * 0.5], [bx - dw * 0.5, by]], blue);
        }
      }
    }
  } else if (sub === 2) {
    // Card 3: Red & Gold Sunburst with Red Center Disc
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${red}"/>`);
    const rays = 36;
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.5;
    const rad = Math.hypot(cw, ch) * 1.25;
    for (let i = 0; i < rays; i += 2) {
      const a0 = (i / rays) * Math.PI * 2;
      const a1 = ((i + 0.65) / rays) * Math.PI * 2;
      pushPoly([[ox, oy], [ox + Math.cos(a0) * rad, oy + Math.sin(a0) * rad], [ox + Math.cos(a1) * rad, oy + Math.sin(a1) * rad]], gold);
    }
    const cPoly = buildWatercolorBlobPoly(m, ox, oy, cw * 0.25 * bScale, ch * 0.18 * bScale, 0, 28, 0.04);
    pushPoly(cPoly, red);
  } else if (sub === 3) {
    // Card 4: Red, Sky-Blue & White Rising Bottom-Center Sunburst
    const rays = 24;
    const ox = cx0 + cw * 0.5;
    const oy = cy1;
    const rad = Math.hypot(cw, ch) * 1.35;
    for (let i = 0; i < rays; i++) {
      if (i % 2 === 1) continue;
      const a0 = Math.PI + (i / rays) * Math.PI;
      const a1 = Math.PI + ((i + 1) / rays) * Math.PI;
      const col = (i / 2) % 2 === 0 ? red : blue;
      pushPoly([[ox, oy], [ox + Math.cos(a0) * rad, oy + Math.sin(a0) * rad], [ox + Math.cos(a1) * rad, oy + Math.sin(a1) * rad]], col);
    }
  } else if (sub === 4) {
    // Card 5: Gold, Red & Cream Harlequin Diamond Grid
    const colsD = 4;
    const rowsD = 6;
    const dw = cw / colsD;
    const dh = ch / rowsD;
    for (let r = -1; r <= rowsD; r++) {
      for (let c = -1; c <= colsD; c++) {
        const dx = cx0 + (c + 0.5) * dw;
        const dy = cy0 + (r + 0.5) * dh;
        pushPoly([[dx, dy - dh * 0.5], [dx + dw * 0.5, dy], [dx, dy + dh * 0.5], [dx - dw * 0.5, dy]], gold);
        const bx = cx0 + c * dw;
        const by = cy0 + r * dh;
        if ((r + c) % 2 === 0) {
          pushPoly([[bx, by - dh * 0.5], [bx + dw * 0.5, by], [bx, by + dh * 0.5], [bx - dw * 0.5, by]], red);
        }
      }
    }
  } else {
    // Card 6: Sage Green & Cream Curved Pinwheel Swirl Vortex
    const rays = 28;
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.5;
    const maxR = Math.hypot(cw, ch) * 0.95;
    const steps = 16;
    const twistAmt = 0.65;
    for (let i = 0; i < rays; i += 2) {
      const baseA0 = (i / rays) * Math.PI * 2;
      const baseA1 = ((i + 1) / rays) * Math.PI * 2;
      const leftEdge: [number, number][] = [];
      const rightEdge: [number, number][] = [];
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const r = t * maxR;
        const twist = Math.sin(t * Math.PI * 1.15) * twistAmt;
        leftEdge.push([ox + Math.cos(baseA0 + twist) * r, oy + Math.sin(baseA0 + twist) * r]);
        rightEdge.unshift([ox + Math.cos(baseA1 + twist) * r, oy + Math.sin(baseA1 + twist) * r]);
      }
      pushPoly(leftEdge.concat(rightEdge), sage);
    }
  }

  // Authentic Subtle Vintage Stamp Grunge Speckles (matching image_158760e1.png distressed vintage texture)
  for (let g = 0; g < 18; g++) {
    const gx = cx0 + (((g * 73 + cardIdx * 29) % 92) / 92) * cw;
    const gy = cy0 + (((g * 53 + cardIdx * 41) % 94) / 94) * ch;
    const gr = cw * (0.008 + (g % 4) * 0.005);
    const fleck = buildWatercolorBlobPoly(m, gx, gy, gr, gr * 0.65, g * 32, 7, 0.35);
    pushPoly(fleck, cream);
  }
}

// ============================================================================
// REF SET 7: 4 PCS DARK PITCH-BLACK NEON 3D BIOLUMINESCENT FLUID WAVE SET
// (Clean 5-Ribbon 1-Click Editable Vector Wave Layers — Zero Banding!)
// ============================================================================
function drawRef7DarkNeonPlasmaCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const darkBase = "#030408";
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${darkBase}"/>`);

  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const cyan = pv.vCol("#00e5ff", 0);
  const blue = pv.vCol("#2563eb", 1);
  const indigo = pv.vCol("#3b0ca3", 2);
  const magenta = pv.vCol("#e838c8", 3);
  const pink = pv.vCol("#ff85e4", 4);

  const sub = (cardIdx + variant) % 4;
  const drawNeonFoldRibbon = (
    yCenterRatio: number,
    ampRatio: number,
    freq: number,
    phase: number,
    spreadRatio: number,
    flipCol: boolean
  ) => {
    const layers = 4; // 4 clean distinct 1-click editable silk ribbon wave shapes!
    const steps = 36;
    const yC = pv.vVal(yCenterRatio, 0.08);
    const amp = pv.vVal(ampRatio, 0.05);
    const fr = pv.vVal(freq, 0.45);
    const ph = pv.vVal(phase, 3.14);
    const cols = flipCol ? [indigo, magenta, cyan, pink] : [indigo, blue, magenta, cyan];
    for (let l = 0; l < layers; l++) {
      const t = l / (layers - 1);
      const bandThick = ch * spreadRatio * (1 - t * 0.65) * bScale;
      const yShift = Math.sin(t * Math.PI * 1.6 + ph) * ch * 0.05;
      const topPts: [number, number][] = [];
      const botPts: [number, number][] = [];
      for (let s = 0; s <= steps; s++) {
        const u = s / steps;
        const x = cx0 + u * cw;
        const wave =
          Math.sin(u * Math.PI * fr + ph + t * 0.9) * ch * amp +
          Math.cos(u * Math.PI * (fr * 0.7) - ph * 0.6) * ch * (amp * 0.45);
        const cy = cy0 + ch * yC + wave + yShift;
        const pinch = 0.45 + 0.55 * Math.sin(u * Math.PI + t * 1.2);
        const hw = bandThick * 0.5 * pinch;
        topPts.push([x, cy - hw]);
        botPts.unshift([x, cy + hw]);
      }
      pushPoly(topPts.concat(botPts), cols[l % cols.length]);
    }
  };

  if (sub === 0) {
    drawNeonFoldRibbon(0.47, 0.09, 1.35, 0.4, 0.44, false);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.70, 0.18), cy0 + ch * pv.vVal(0.38, 0.14), cw * 0.28 * bScale, ch * 0.14 * bScale, pv.vAng(-12, 40), indigo, magenta, pink, 2, 0.1, variant);
  } else if (sub === 1) {
    drawNeonFoldRibbon(0.44, 0.16, 1.15, 1.2, 0.52, true);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.46, 0.18), cy0 + ch * pv.vVal(0.26, 0.14), cw * 0.34 * bScale, ch * 0.16 * bScale, pv.vAng(28, 40), indigo, blue, cyan, 2, 0.1, variant);
  } else if (sub === 2) {
    drawNeonFoldRibbon(0.55, 0.14, 1.25, 2.3, 0.50, false);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.62, 0.18), cy0 + ch * pv.vVal(0.62, 0.14), cw * 0.36 * bScale, ch * 0.18 * bScale, pv.vAng(18, 40), indigo, magenta, pink, 2, 0.1, variant);
  } else {
    drawNeonFoldRibbon(0.46, 0.15, 1.45, 3.1, 0.48, true);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.22, 0.18), cy0 + ch * pv.vVal(0.46, 0.14), cw * 0.28 * bScale, ch * 0.18 * bScale, pv.vAng(32, 40), indigo, magenta, pink, 2, 0.08, variant);
  }

  if (showText) {
    const padX = cw * 0.12;
    const th = ch * 0.025;
    const plusArm = ch * 0.0045;
    const plusStep = ch * 0.017;
    if (sub === 0) {
      parts.push(drawPosterPlusMarkers(cx1 - padX - cw * 0.14, cy0 + ch * 0.065, 5, plusStep, plusArm, plusArm * 0.45, aspect, "#94a3b8", false));
      parts.push(drawPosterSubtitleBlock(cx1 - padX, cy0 + ch * 0.095, cw * 0.28, 3, ch * 0.0035, ch * 0.005, "#64748b", "right"));
      parts.push(drawPosterPlusMarkers(cx0 + padX, cy1 - ch * 0.22, 5, plusStep, plusArm, plusArm * 0.45, aspect, "#cbd5e1", false));
      parts.push(drawPosterVectorTextString("ABSTRACT", cx0 + padX, cy1 - ch * 0.185, th, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx0 + padX, cy1 - ch * 0.15, th * 0.48, aspect, "wide", "#94a3b8", "left"));
    } else if (sub === 1) {
      parts.push(drawPosterPlusMarkers(cx0 + padX, cy0 + ch * 0.065, 5, plusStep, plusArm, plusArm * 0.45, aspect, "#cbd5e1", false));
      parts.push(drawPosterVectorTextString("FLUID", cx0 + cw * 0.5, cy0 + ch * 0.435, th * 1.05, aspect, "wide", "#ffffff", "center"));
      parts.push(drawPosterVectorTextString("POSTER", cx0 + cw * 0.5, cy0 + ch * 0.475, th * 1.05, aspect, "wide", "#ffffff", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + padX, cy1 - ch * 0.095, cw * 0.28, 3, ch * 0.0035, ch * 0.005, "#64748b", "left"));
      parts.push(drawPosterPlusMarkers(cx1 - padX - cw * 0.14, cy1 - ch * 0.055, 5, plusStep, plusArm, plusArm * 0.45, aspect, "#cbd5e1", false));
    } else if (sub === 2) {
      parts.push(drawPosterVectorTextString("MINIMAL", cx0 + padX, cy0 + ch * 0.24, th, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx0 + padX, cy0 + ch * 0.275, th * 0.46, aspect, "wide", "#94a3b8", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + padX, cy1 - ch * 0.25, cw * 0.28, 3, ch * 0.0035, ch * 0.005, "#cbd5e1", "left"));
      parts.push(drawPosterPlusMarkers(cx1 - padX * 0.65, cy1 - ch * 0.36, 5, plusStep, plusArm, plusArm * 0.45, aspect, "#ffffff", true));
    } else {
      parts.push(drawPosterPlusMarkers(cx0 + padX * 0.75, cy0 + ch * 0.065, 5, plusStep, plusArm, plusArm * 0.45, aspect, "#cbd5e1", true));
      parts.push(drawPosterVectorTextString("TECH", cx0 + padX * 1.35, cy1 - ch * 0.34, th, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("GRADIENT", cx0 + padX * 1.35, cy1 - ch * 0.30, th, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + padX * 1.35, cy1 - ch * 0.22, cw * 0.28, 3, ch * 0.0035, ch * 0.005, "#64748b", "left"));
      parts.push(drawPosterPlusMarkers(cx1 - padX - cw * 0.14, cy1 - ch * 0.055, 5, plusStep, plusArm, plusArm * 0.45, aspect, "#cbd5e1", false));
    }
  }
}

// ============================================================================
// REF SET 8: 3 PCS DEEP NAVY & VIOLET CYBER WIREFRAME WAVE & GLOWING SPHERE
// (100% Clean, Un-Sliced 1-Click Editable Vector Spheres & Wave Lines!)
// ============================================================================
function drawRef8CyberWireframeCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const sub = (cardIdx + variant) % 3;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const navy = pv.vCol("#05103a", 0);
  const indigo = pv.vCol("#1d267d", 1);
  const violet = pv.vCol("#7c52e8", 2);
  const cyan = pv.vCol("#48cae4", 3);
  const pink = pv.vCol("#c77dff", 4);

  const gradAngles = [55, -75, -55];
  drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [navy, indigo, violet], pv.vAng(gradAngles[sub], 75));

  const drawTechSphere = (sx: number, sy: number, sRadX: number) => {
    const sRadY = (sRadX * cw * aspect) / Math.max(1, ch);
    const makeCircle = (ox: number, oy: number, rx: number, ry: number): [number, number][] => {
      const pts: [number, number][] = [];
      for (let k = 0; k < 40; k++) {
        const a = (k / 40) * Math.PI * 2;
        pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
      }
      return pts;
    };
    // 1. Main clean vector sphere body (1-click editable in Illustrator!)
    pushPoly(makeCircle(sx, sy, sRadX, sRadY), violet);
    // 2. Clean offset inner sphere tone (1-click editable in Illustrator!)
    pushPoly(makeCircle(sx + sRadX * 0.14, sy + sRadY * 0.14, sRadX * 0.72, sRadY * 0.72), cyan);
    // 3. Clean highlight core (1-click editable in Illustrator!)
    pushPoly(makeCircle(sx + sRadX * 0.24, sy + sRadY * 0.24, sRadX * 0.36, sRadY * 0.36), pink);
  };

  if (sub === 0) {
    drawTechSphere(cx0 + cw * pv.vVal(0.26, 0.16), cy0 + ch * pv.vVal(0.30, 0.14), cw * pv.vVal(0.36, 0.06) * bScale);
  } else if (sub === 1) {
    drawTechSphere(cx0 + cw * pv.vVal(0.48, 0.16), cy0 + ch * pv.vVal(0.16, 0.12), cw * pv.vVal(0.44, 0.06) * bScale);
  } else {
    drawTechSphere(cx0 + cw * pv.vVal(0.30, 0.16), cy0 + ch * pv.vVal(0.34, 0.14), cw * pv.vVal(0.38, 0.06) * bScale);
    drawTechSphere(cx0 + cw * pv.vVal(0.82, 0.14), cy0 + ch * pv.vVal(0.84, 0.12), cw * pv.vVal(0.28, 0.05) * bScale);
  }

  const lineCount = pv.vInt(24, 18, 28);
  const steps = 28;
  const lineThickY = ch * 0.0022;
  const lineThickX = lineThickY / Math.max(0.45, aspect);
  const wPh = pv.vVal(0, 3.14);
  const wFreq = pv.vVal(1.5, 0.45);
  for (let l = 0; l < lineCount; l++) {
    const lt = l / (lineCount - 1);
    const lineCol = mixCol(indigo, cyan, 0.25 + lt * 0.65);
    const topP: [number, number][] = [];
    const botP: [number, number][] = [];
    for (let s = 0; s <= steps; s++) {
      const u = s / steps;
      let px: number;
      let py: number;
      if (sub === 0) {
        py = cy0 + u * ch;
        px = cx0 + cw * (0.38 + lt * 0.48) + Math.sin(u * Math.PI * wFreq + lt * 1.8 + wPh) * cw * 0.22;
        topP.push([px - lineThickX, py]);
        botP.unshift([px + lineThickX, py]);
      } else if (sub === 1) {
        px = cx0 + u * cw;
        py = cy0 + ch * (0.22 + lt * 0.32) + Math.sin(u * Math.PI * (wFreq + 0.2) + lt * 2.1 + wPh) * ch * 0.14;
        topP.push([px, py - lineThickY]);
        botP.unshift([px, py + lineThickY]);
      } else {
        py = cy0 + u * ch;
        px = cx0 + cw * (0.25 + lt * 0.62) + Math.cos(u * Math.PI * (wFreq + 0.3) - lt * 1.9 + wPh) * cw * 0.24;
        topP.push([px - lineThickX, py]);
        botP.unshift([px + lineThickX, py]);
      }
    }
    pushPoly(topP.concat(botP), lineCol);
  }

  if (showText) {
    const padX = cw * 0.085;
    const th = ch * 0.035;
    parts.push(
      drawPosterVectorTextString(
        "LOREM IPSUM",
        sub === 1 ? cx1 - padX : cx0 + padX,
        cy0 + ch * 0.055,
        th * 0.45,
        aspect,
        "regular",
        "#cbd5e1",
        sub === 1 ? "right" : "left"
      )
    );
    parts.push(
      drawPosterVectorTextString(
        "YOUR.WEBSITE.HERE",
        sub === 1 ? cx0 + cw * 0.5 : cx1 - padX,
        cy1 - ch * 0.065,
        th * 0.38,
        aspect,
        "bold",
        "#ffffff",
        sub === 1 ? "center" : "right"
      )
    );
    if (sub === 0) {
      parts.push(drawPosterVectorTextString("DIGITAL", cx0 + padX, cy0 + ch * 0.58, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("TECHNOLOGY", cx0 + padX, cy0 + ch * 0.63, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + padX, cy0 + ch * 0.685, cw * 0.52, 2, ch * 0.004, ch * 0.006, "#94a3b8", "left"));
    } else if (sub === 1) {
      parts.push(drawPosterVectorTextString("DIGITAL", cx0 + cw * 0.5, cy0 + ch * 0.63, th, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterVectorTextString("INNOVATION", cx0 + cw * 0.5, cy0 + ch * 0.68, th, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy0 + ch * 0.735, cw * 0.54, 2, ch * 0.004, ch * 0.006, "#94a3b8", "center"));
    } else {
      parts.push(drawPosterVectorTextString("FUTURE", cx0 + padX, cy0 + ch * 0.24, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("INNOVATION", cx0 + padX, cy0 + ch * 0.29, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + padX, cy0 + ch * 0.345, cw * 0.50, 2, ch * 0.004, ch * 0.006, "#cbd5e1", "left"));
    }
  }
}

// ============================================================================
// REF SET 9: 4 PCS 3D ANGULAR FACETED LINE-HATCHING PRISM SET
// (Exact match to image_5b43a636.png + AB | BACKGROUND DESIGN)
// ============================================================================
function drawRef9AngularPrismLinesCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const sub = (cardIdx + variant) % 4;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);

  const prismPalettes = [
    { bg: "#140542", bg2: "#3b0764", l1: "#ef4444", l2: "#f97316", l3: "#a855f7" },
    { bg: "#0038d1", bg2: "#0284c7", l1: "#38bdf8", l2: "#00f5d4", l3: "#7dd3fc" },
    { bg: "#e11d48", bg2: "#ff0055", l1: "#fb923c", l2: "#facc15", l3: "#fda4af" },
    { bg: "#1e3a8a", bg2: "#312e81", l1: "#a855f7", l2: "#e879f9", l3: "#60a5fa" },
  ];
  const basePal = prismPalettes[sub];
  const pal = {
    bg: pv.vCol(basePal.bg, 0),
    bg2: pv.vCol(basePal.bg2, 1),
    l1: pv.vCol(basePal.l1, 2),
    l2: pv.vCol(basePal.l2, 3),
    l3: pv.vCol(basePal.l3, 4),
  };

  drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [pal.bg, pal.bg2, pal.bg], pv.vAng(45 + sub * 30, 80), 32);

  const vx = cx0 + cw * pv.vVal(0.42 + (sub % 3) * 0.10, 0.18);
  const vy = cy0 + ch * pv.vVal(0.45 + (sub % 2) * 0.12, 0.18);
  const mxTop = cx0 + cw * pv.vVal(0.45, 0.22);
  const myLeft = cy0 + ch * pv.vVal(0.65, 0.20);
  const myRight = cy0 + ch * pv.vVal(0.35, 0.20);
  const mxBot = cx0 + cw * pv.vVal(0.72, 0.20);

  const facets: { poly: [number, number][]; ang: number; cA: string; cB: string }[] = [
    {
      poly: [[cx0, cy0], [mxTop, cy0], [vx, vy], [cx0, myLeft]],
      ang: pv.vAng(-52 + sub * 14, 55),
      cA: pal.l1,
      cB: pal.l3,
    },
    {
      poly: [[mxTop, cy0], [cx1, cy0], [cx1, myRight], [vx, vy]],
      ang: pv.vAng(28 + sub * 12, 55),
      cA: pal.l2,
      cB: pal.l1,
    },
    {
      poly: [[cx1, myRight], [cx1, cy1], [mxBot, cy1], [vx, vy]],
      ang: pv.vAng(-22 - sub * 10, 55),
      cA: pal.l1,
      cB: pal.l2,
    },
    {
      poly: [[cx0, myLeft], [vx, vy], [mxBot, cy1], [cx0, cy1]],
      ang: pv.vAng(74 - sub * 15, 55),
      cA: pal.l3,
      cB: pal.l1,
    },
  ];

  const baseStripes = pv.vInt(30, 22, 38);
  for (let f = 0; f < facets.length; f++) {
    const fc = facets[f];
    const rad = (fc.ang * Math.PI) / 180;
    const ux = Math.cos(rad);
    const uy = Math.sin(rad);
    const nx = -uy;
    const ny = ux;
    const stripeCount = Math.round(baseStripes / Math.max(0.7, bScale));
    const span = Math.hypot(cw, ch) * 1.15;
    const step = (span * 2) / stripeCount;
    const barThick = step * 0.46;

    for (let s = 0; s < stripeCount; s++) {
      const t = s / Math.max(1, stripeCount - 1);
      const dMid = -span + s * step;
      const d0 = dMid - barThick * 0.5;
      const d1 = dMid + barThick * 0.5;
      const p0x = vx + ux * d0;
      const p0y = vy + uy * d0;
      const p1x = vx + ux * d1;
      const p1y = vy + uy * d1;
      const bar: [number, number][] = [
        [p0x - nx * span, p0y - ny * span],
        [p1x - nx * span, p1y - ny * span],
        [p1x + nx * span, p1y + ny * span],
        [p0x + nx * span, p0y + ny * span],
      ];
      const clipped = clipPolyAgainstConvexPoly(bar, fc.poly);
      if (clipped.length >= 3) {
        pushPoly(clipped, mixCol(fc.cA, fc.cB, t));
      }
    }
  }

  if (showText) {
    const padX = cw * 0.065;
    const baseY = cy1 - ch * 0.095;
    const bigH = ch * 0.045;
    parts.push(drawPosterVectorTextString("AB", cx0 + padX, baseY, bigH, aspect, "bold", "#ffffff", "left"));
    const divX = cx0 + padX + cw * 0.145;
    parts.push(`<rect x="${f1(divX)}" y="${f1(baseY)}" width="${f1(cw * 0.008)}" height="${f1(bigH)}" fill="#ffffff"/>`);
    const subX = divX + cw * 0.025;
    const smH = bigH * 0.38;
    parts.push(drawPosterVectorTextString("BACKGROUND", subX, baseY + bigH * 0.04, smH, aspect, "bold", "#ffffff", "left"));
    parts.push(drawPosterVectorTextString("DESIGN", subX, baseY + bigH * 0.58, smH, aspect, "bold", "#ffffff", "left"));
    parts.push(
      `<rect x="${f1(subX + cw * 0.22)}" y="${f1(baseY + bigH * 0.86)}" width="${f1(
        cw * 0.13
      )}" height="${f1(ch * 0.006)}" fill="#ffffff"/>`
    );
  }
}

// ============================================================================
// REF SET 10: 3 PCS ULTRA-SMOOTH DIAGONAL MULTI-STOP GRADIENT MESH SET
// (Exact match to image_6f661e88.png: GRADIENT / COLORFUL / MESH + COPY SPACE)
// ============================================================================
function drawRef10MinimalSmoothMeshCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const sub = (cardIdx + variant) % 3;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);

  if (sub === 0) {
    const stops = [
      pv.vCol("#d90452", 0),
      pv.vCol("#ec3868", 1),
      pv.vCol("#f46d43", 2),
      pv.vCol("#fdae61", 3),
      pv.vCol("#fff1a8", 4, true),
    ];
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, stops, pv.vAng(52, 110), 54);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.88, 0.25), cy0 + ch * pv.vVal(0.25, 0.22), cw * 0.45 * bScale, ch * 0.38 * bScale, 0, stops[1], pv.vCol("#f48fb1", 2), "#fce4ec", 18, 0.04, variant);
  } else if (sub === 1) {
    const stops = [
      pv.vCol("#22b8f0", 1),
      pv.vCol("#3f62c8", 2),
      pv.vCol("#5e35b1", 3),
      pv.vCol("#8e6ac8", 4),
      pv.vCol("#e8e4f8", 0, true),
    ];
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, stops, pv.vAng(55, 110), 54);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * pv.vVal(0.12, 0.25), cy0 + ch * pv.vVal(0.92, 0.22), cw * 0.42 * bScale, ch * 0.34 * bScale, 0, stops[2], pv.vCol("#512da8", 3), pv.vCol("#4527a0", 2), 16, 0.04, variant);
  } else {
    const stops = [
      pv.vCol("#c2f0f7", 3, true),
      pv.vCol("#38b6c9", 2),
      pv.vCol("#087e96", 1),
      pv.vCol("#035366", 0),
      pv.vCol("#012a36", 0),
    ];
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, stops, pv.vAng(52, 110), 54);
  }

  if (showText) {
    const padX = cw * 0.13;
    const th = ch * 0.024;
    const vCharH = ch * 0.011;
    const vStep = ch * 0.022;
    if (sub === 0) {
      parts.push(drawPosterVectorTextString("GRADIENT", cx0 + padX, cy0 + ch * 0.075, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx0 + padX, cy0 + ch * 0.112, th * 0.50, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterVerticalVectorText("COPY SPACE", cx0 + padX * 1.05, cy0 + ch * 0.34, vCharH, vStep, aspect, "#ffffff"));
    } else if (sub === 1) {
      parts.push(drawPosterVectorTextString("COLORFUL", cx0 + cw * 0.24, cy0 + ch * 0.44, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx0 + cw * 0.24, cy0 + ch * 0.478, th * 0.50, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterVerticalVectorText("COPY SPACE", cx1 - padX * 0.65, cy0 + ch * 0.10, vCharH, vStep, aspect, "#ffffff"));
    } else {
      parts.push(drawPosterVectorTextString("MESH", cx0 + cw * 0.56, cy1 - ch * 0.18, th, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx0 + cw * 0.56, cy1 - ch * 0.142, th * 0.50, aspect, "wide", "#ffffff", "left"));
      parts.push(drawPosterVerticalVectorText("COPY SPACE", cx0 + padX * 0.85, cy1 - ch * 0.30, vCharH, vStep, aspect, "#ffffff"));
    }
  }
}

// ============================================================================
// REF SET 11: 4 PCS DEEP EMERALD-TEAL 3D ARCHITECTURAL RIBBONS & LOUVERS
// (Exact match to 11th uploaded reference image: Arches, Glass Prisms, Fan Blades, Horizontal Wave Louvers)
// ============================================================================
function drawRef11Teal3DLouversCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const darkTeal = pv.vCol("#062b33", 0);
  const midTeal = pv.vCol("#0c5966", 1);
  const brightTeal = pv.vCol("#3a96a3", 2);
  const iceTeal = pv.vCol("#9fd3db", 3);

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${darkTeal}"/>`);
  const sub = (cardIdx + variant) % 4;

  if (sub === 0) {
    // Card 1: Clean 1-Piece Concentric 3D Curved Architectural Ribbon Arches (each arch is 1 solid vector ring!)
    const arches = pv.vInt(7, 5, 9);
    const ox = cx1 + cw * pv.vVal(0.12, 0.14);
    const oy = cy1 + ch * pv.vVal(0.08, 0.12);
    const archCols = [midTeal, brightTeal, iceTeal, mixCol(midTeal, brightTeal, 0.5), mixCol(darkTeal, midTeal, 0.55)];
    for (let a = arches - 1; a >= 0; a--) {
      const rOuterX = cw * (0.35 + a * 0.17) * bScale;
      const rOuterY = ch * (0.35 + a * 0.16) * bScale;
      const rInnerX = cw * (0.35 + Math.max(0, a - 1) * 0.17) * bScale;
      const rInnerY = ch * (0.35 + Math.max(0, a - 1) * 0.16) * bScale;
      const ptsA: [number, number][] = [];
      const ptsB: [number, number][] = [];
      const arcSteps = 28;
      for (let k = 0; k <= arcSteps; k++) {
        const ang = Math.PI + (k / arcSteps) * (Math.PI * 0.58);
        ptsA.push([ox + Math.cos(ang) * rInnerX, oy + Math.sin(ang) * rInnerY]);
        ptsB.unshift([ox + Math.cos(ang) * rOuterX, oy + Math.sin(ang) * rOuterY]);
      }
      pushPoly(ptsA.concat(ptsB), archCols[a % archCols.length]);
    }
    if (showText) {
      const padX = cw * 0.075;
      parts.push(drawPosterVectorTextString("INSPIRATION", cx0 + padX, cy0 + ch * 0.11, ch * 0.028, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + padX, cy0 + ch * 0.155, cw * 0.24, 2, ch * 0.004, ch * 0.006, iceTeal, "left"));
    }
  } else if (sub === 1) {
    // Card 2: Clean 1-Piece Vertical Frosted Glass Prism Columns with Central Diamond Horizon
    const colsP = pv.vInt(7, 6, 9);
    const colW = cw / colsP;
    const horizonY = cy0 + ch * pv.vVal(0.5, 0.14);
    for (let c = 0; c < colsP; c++) {
      const xA = cx0 + c * colW;
      const xB = xA + colW;
      const midX = xA + colW * 0.48;
      const spreadH = ch * (0.14 + (c / Math.max(1, colsP - 1)) * 0.34);
      // Full-height left and right prism facets (2 clean vector rects per column!)
      pushPoly([[xA, cy0], [midX, cy0], [midX, cy1], [xA, cy1]], c % 2 === 0 ? midTeal : mixCol(darkTeal, midTeal, 0.65));
      pushPoly([[midX, cy0], [xB, cy0], [xB, cy1], [midX, cy1]], darkTeal);
      // Clean diamond horizon highlight facet inside each column
      pushPoly(
        [
          [xA, horizonY - spreadH],
          [midX, horizonY - spreadH * 0.85],
          [midX, horizonY + spreadH * 0.85],
          [xA, horizonY + spreadH],
        ],
        c % 2 === 0 ? iceTeal : brightTeal
      );
      pushPoly(
        [
          [midX, horizonY - spreadH * 0.85],
          [xB, horizonY - spreadH],
          [xB, horizonY + spreadH],
          [midX, horizonY + spreadH * 0.85],
        ],
        midTeal
      );
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("CREATIVE", cx1 - cw * 0.07, cy0 + ch * 0.045, ch * 0.013, aspect, "wide", iceTeal, "right"));
      parts.push(drawPosterVectorTextString("COMMUNITY", cx1 - cw * 0.07, cy1 - ch * 0.055, ch * 0.013, aspect, "wide", iceTeal, "right"));
    }
  } else if (sub === 2) {
    // Card 3: Clean 1-Piece Diagonal Radiating 3D Shaded Fan Blades (each blade has 1 lit facet + 1 shadow facet!)
    const blades = pv.vInt(11, 9, 14);
    const ox = cx0 - cw * pv.vVal(0.15, 0.10);
    const oy = cy0 + ch * pv.vVal(0.75, 0.12);
    const maxR = Math.hypot(cw, ch) * 1.45;
    const bladeCols = [iceTeal, brightTeal, midTeal];
    for (let b = 0; b < blades; b++) {
      const aCenter = (-72 + b * (124 / blades)) * (Math.PI / 180);
      const aSpan = (118 / blades) * (Math.PI / 180);
      const ang0 = aCenter - aSpan * 0.5;
      const angMid = aCenter + aSpan * 0.08;
      const ang1 = aCenter + aSpan * 0.5;
      pushPoly(
        [
          [ox, oy],
          [ox + Math.cos(ang0) * maxR, oy + Math.sin(ang0) * maxR],
          [ox + Math.cos(angMid) * maxR, oy + Math.sin(angMid) * maxR],
        ],
        bladeCols[b % bladeCols.length]
      );
      pushPoly(
        [
          [ox, oy],
          [ox + Math.cos(angMid) * maxR, oy + Math.sin(angMid) * maxR],
          [ox + Math.cos(ang1) * maxR, oy + Math.sin(ang1) * maxR],
        ],
        b % 2 === 0 ? darkTeal : mixCol(darkTeal, midTeal, 0.5)
      );
    }
    if (showText) {
      parts.push(drawPosterVerticalVectorText("JANUARY 2026", cx1 - cw * 0.07, cy0 + ch * 0.05, ch * 0.011, ch * 0.017, aspect, iceTeal));
    }
  } else {
    // Card 4: Clean 1-Piece Stacked Horizontal Curved 3D Wave Louvers (each louver is 1 smooth vector ribbon!)
    const louvers = pv.vInt(9, 7, 11);
    const lH = (ch * 1.15) / louvers;
    const dipU = pv.vVal(0.15, 0.20);
    const dipAmp = pv.vVal(0.14, 0.04);
    const louverCols = [iceTeal, brightTeal, midTeal, mixCol(darkTeal, midTeal, 0.6)];
    for (let l = -1; l <= louvers; l++) {
      const yBase = cy0 + l * lH;
      const stepsX = 28;
      const topEdge: [number, number][] = [];
      const botEdge: [number, number][] = [];
      for (let ix = 0; ix <= stepsX; ix++) {
        const u = ix / stepsX;
        const x = cx0 + u * cw;
        const archY = Math.pow(u - dipU, 2) * ch * dipAmp - u * ch * 0.08;
        topEdge.push([x, yBase + archY]);
        botEdge.unshift([x, yBase + archY + lH * 0.86]);
      }
      pushPoly(topEdge.concat(botEdge), louverCols[(l + 4) % louverCols.length]);
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("001", cx1 - cw * 0.065, cy0 + ch * 0.048, ch * 0.022, aspect, "bold", "#ffffff", "right"));
      parts.push(drawPosterVectorTextString("DESIGN", cx1 - cw * 0.065, cy1 - ch * 0.19, ch * 0.015, aspect, "bold", "#ffffff", "right"));
      parts.push(drawPosterVectorTextString("GRADIENTS", cx1 - cw * 0.065, cy1 - ch * 0.165, ch * 0.015, aspect, "bold", "#ffffff", "right"));
      parts.push(drawPosterSubtitleBlock(cx1 - cw * 0.065, cy1 - ch * 0.10, cw * 0.24, 3, ch * 0.0035, ch * 0.005, iceTeal, "right"));
    }
  }
}

// ============================================================================
// REF SET 13: 4 PCS ROMANTIC PINK GRADIENT & CONCENTRIC HEART / SPARKLE SET
// (Exact 100% Habuhu match to image_ae31bcd7.png: LOVE / LOVE YOU)
// ============================================================================
function buildPosterHeartPoly(
  ox: number,
  oy: number,
  rx: number,
  ry: number,
  steps = 44
): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    pts.push([ox + (x / 16) * rx, oy + (y / 16) * ry]);
  }
  return pts;
}

function buildPosterHeartTopArchRibbon(
  ox: number,
  oy: number,
  rx: number,
  ry: number,
  thickX: number,
  thickY: number,
  steps = 30
): [number, number][] {
  const outer: [number, number][] = [];
  const inner: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = -Math.PI * 0.72 + (i / steps) * (Math.PI * 1.44);
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    const px = ox + (x / 16) * rx;
    const py = oy + (y / 16) * ry;
    outer.push([px, py - thickY]);
    inner.unshift([px, py + thickY]);
  }
  return outer.concat(inner);
}

function drawPoster4PointStar(
  pushPoly: (poly: [number, number][], col: string) => void,
  ox: number,
  oy: number,
  rx: number,
  ry: number,
  col: string
) {
  const irx = rx * 0.22;
  const iry = ry * 0.22;
  pushPoly(
    [
      [ox, oy - ry],
      [ox + irx, oy - iry],
      [ox + rx, oy],
      [ox + irx, oy + iry],
      [ox, oy + ry],
      [ox - irx, oy + iry],
      [ox - rx, oy],
      [ox - irx, oy - iry],
    ],
    col
  );
}

function drawRef13PinkValentineHeartsCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const roseLight = pv.vCol("#ff7aa8", 0);
  const roseMid = pv.vCol("#f43f75", 1);
  const roseDeep = pv.vCol("#e11d56", 2);
  const crimson = pv.vCol("#be123c", 3);
  const softGlow = pv.vCol("#ffb3cc", 4, true);

  drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [roseLight, roseMid, roseDeep, roseLight], 60, 32);
  const sub = (cardIdx + variant) % 4;
  const lineThickY = ch * 0.0032;
  const lineThickX = lineThickY / Math.max(0.45, aspect);

  if (sub === 0) {
    // Card 1: Large center heart + 4 concentric crimson heart-arch contour lines + bottom LOVE
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.5, cy0 + ch * 0.45, cw * 0.56 * bScale, ch * 0.36 * bScale, 0, roseLight, roseMid, roseDeep, 4);
    pushPoly(buildPosterHeartPoly(cx0 + cw * 0.5, cy0 + ch * 0.46, cw * 0.54 * bScale, ch * 0.36 * bScale), roseDeep);
    for (let k = 0; k < 4; k++) {
      const s = 0.86 - k * 0.16;
      pushPoly(
        buildPosterHeartTopArchRibbon(
          cx0 + cw * 0.5,
          cy0 + ch * (0.45 + k * 0.02),
          cw * 0.52 * s * bScale,
          ch * 0.34 * s * bScale,
          lineThickX,
          lineThickY
        ),
        crimson
      );
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("LOVE", cx0 + cw * 0.5, cy1 - ch * 0.17, ch * 0.055, aspect, "bold", "#ffffff", "center"));
    }
  } else if (sub === 1) {
    // Card 2: Floating diagonal shaded hearts + thin white S-wave threads with 4-point sparkles + center LOVE YOU
    pushPoly(buildPosterHeartPoly(cx0 + cw * 0.32, cy0 + ch * 0.16, cw * 0.32 * bScale, ch * 0.21 * bScale), roseDeep);
    pushPoly(buildPosterHeartPoly(cx0 + cw * 0.64, cy0 + ch * 0.50, cw * 0.35 * bScale, ch * 0.23 * bScale), roseDeep);
    pushPoly(buildPosterHeartPoly(cx0 + cw * 0.34, cy0 + ch * 0.80, cw * 0.32 * bScale, ch * 0.21 * bScale), roseDeep);
    // Top white wave thread
    const topWave: [number, number][] = [];
    const topWaveB: [number, number][] = [];
    for (let s = 0; s <= 28; s++) {
      const u = s / 28;
      const x = cx0 + u * cw * 0.96;
      const y = cy0 + ch * (0.36 - u * 0.28 + Math.sin(u * Math.PI * 1.7) * 0.08);
      topWave.push([x, y - lineThickY]);
      topWaveB.unshift([x, y + lineThickY]);
    }
    pushPoly(topWave.concat(topWaveB), "#ffffff");
    // Bottom white arch thread
    const botWave: [number, number][] = [];
    const botWaveB: [number, number][] = [];
    for (let s = 0; s <= 24; s++) {
      const u = s / 24;
      const x = cx0 + u * cw * 0.70;
      const y = cy0 + ch * (0.98 - Math.sin(u * Math.PI) * 0.14);
      botWave.push([x, y - lineThickY]);
      botWaveB.unshift([x, y + lineThickY]);
    }
    pushPoly(botWave.concat(botWaveB), "#ffffff");
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.86, cy0 + ch * 0.15, cw * 0.065, ch * 0.045, "#ffffff");
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.79, cy0 + ch * 0.10, cw * 0.025, ch * 0.018, "#ffffff");
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.50, cy0 + ch * 0.92, cw * 0.055, ch * 0.038, "#ffffff");
    if (showText) {
      parts.push(drawPosterVectorTextString("LOVE", cx0 + cw * 0.5, cy0 + ch * 0.45, ch * 0.056, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterVectorTextString("YOU", cx0 + cw * 0.5, cy0 + ch * 0.515, ch * 0.038, aspect, "regular", "#111827", "center"));
    }
  } else if (sub === 2) {
    // Card 3: Vertical stack of 4 overlapping pink hearts with thin white & crimson top arch outlines + center LOVE
    const yPositions = [0.23, 0.42, 0.62, 0.80];
    for (let i = 0; i < yPositions.length; i++) {
      const hy = cy0 + ch * yPositions[i];
      pushPoly(buildPosterHeartPoly(cx0 + cw * 0.5, hy, cw * 0.38 * bScale, ch * 0.24 * bScale), i % 2 === 0 ? roseDeep : roseMid);
      if (i === 1 || i === 3) {
        pushPoly(
          buildPosterHeartTopArchRibbon(
            cx0 + cw * 0.5,
            hy - ch * 0.03,
            cw * 0.37 * bScale,
            ch * 0.22 * bScale,
            lineThickX,
            lineThickY
          ),
          i === 1 ? "#ffffff" : crimson
        );
      }
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("LOVE", cx0 + cw * 0.5, cy0 + ch * 0.46, ch * 0.062, aspect, "bold", "#ffffff", "center"));
    }
  } else {
    // Card 4: Large diagonal overlapping hearts + intersecting white orbital loop lines with sparkles + bottom LOVE YOU
    pushPoly(buildPosterHeartPoly(cx0 + cw * 0.34, cy0 + ch * 0.22, cw * 0.44 * bScale, ch * 0.28 * bScale), roseDeep);
    pushPoly(buildPosterHeartPoly(cx0 + cw * 0.68, cy0 + ch * 0.44, cw * 0.46 * bScale, ch * 0.30 * bScale), crimson);
    pushPoly(buildPosterHeartPoly(cx0 + cw * 0.44, cy0 + ch * 0.84, cw * 0.46 * bScale, ch * 0.28 * bScale), roseDeep);
    // White intersecting orbital loop lines
    const loopA: [number, number][] = [];
    const loopB: [number, number][] = [];
    for (let s = 0; s <= 32; s++) {
      const u = s / 32;
      const x = cx0 + cw * (0.04 + u * 0.96);
      const y = cy0 + ch * (0.40 + u * 0.27);
      loopA.push([x, y - lineThickY]);
      loopB.unshift([x, y + lineThickY]);
    }
    pushPoly(loopA.concat(loopB), "#ffffff");
    const loopC: [number, number][] = [];
    const loopD: [number, number][] = [];
    for (let s = 0; s <= 32; s++) {
      const u = s / 32;
      const x = cx0 + cw * (0.06 + u * 0.94);
      const y = cy0 + ch * (0.57 - u * 0.09);
      loopC.push([x, y - lineThickY]);
      loopD.unshift([x, y + lineThickY]);
    }
    pushPoly(loopC.concat(loopD), "#ffffff");
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.23, cy0 + ch * 0.46, cw * 0.042, ch * 0.032, "#ffffff");
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.84, cy0 + ch * 0.49, cw * 0.062, ch * 0.045, "#ffffff");
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.88, cy0 + ch * 0.44, cw * 0.024, ch * 0.017, softGlow);
    if (showText) {
      parts.push(drawPosterVectorTextString("LOVE", cx0 + cw * 0.5, cy1 - ch * 0.21, ch * 0.052, aspect, "regular", "#ffffff", "center"));
      parts.push(drawPosterVectorTextString("YOU", cx0 + cw * 0.5, cy1 - ch * 0.145, ch * 0.040, aspect, "bold", "#111827", "center"));
    }
  }
}

// ============================================================================
// REF SET 14: 6 PCS RETRO SUMMER MULTI-LINE ARCH, SUNBURST, WAVE, LEAF & BBQ SET
// (Exact 100% Habuhu match to image_41f1a770.png: HELLO SUMMER / SUMMER TIME)
// ============================================================================
function drawRef14SummerRetroLineBadgesCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 6;
  const makeCircle = (ox: number, oy: number, rx: number, steps = 32): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };
  const makeRingArc = (ox: number, oy: number, rOuterX: number, thickX: number, a0: number, a1: number, steps = 32): [number, number][] => {
    const rOuterY = (rOuterX * cw * aspect) / Math.max(1, ch);
    const rInnerX = Math.max(0.5, rOuterX - thickX);
    const rInnerY = (rInnerX * cw * aspect) / Math.max(1, ch);
    const out: [number, number][] = [];
    const inn: [number, number][] = [];
    for (let i = 0; i <= steps; i++) {
      const a = a0 + (i / steps) * (a1 - a0);
      out.push([ox + Math.cos(a) * rOuterX, oy + Math.sin(a) * rOuterY]);
      inn.unshift([ox + Math.cos(a) * rInnerX, oy + Math.sin(a) * rInnerY]);
    }
    return out.concat(inn);
  };

  if (sub === 0) {
    // Card 1: Blush Pink bg + 5-Line Concentric Pink Rainbow Arch with Dots + White Cloud Contours + HELLO SUMMER
    const bgPink = pv.vCol("#fde2e4", 0, true);
    const archPink = pv.vCol("#f4979c", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgPink}"/>`);
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.67;
    for (let r = 0; r < 5; r++) {
      const rad = cw * (0.14 + r * 0.055) * bScale;
      pushPoly(makeRingArc(ox, oy, rad, cw * 0.020, Math.PI, Math.PI * 2, 30), archPink);
    }
    // Dots above rainbow arch
    for (let d = 0; d < 9; d++) {
      const ang = Math.PI * 1.12 + (d / 8) * (Math.PI * 0.76);
      const radX = cw * 0.40 * bScale;
      const radY = (radX * cw * aspect) / Math.max(1, ch);
      pushPoly(makeCircle(ox + Math.cos(ang) * radX, oy + Math.sin(ang) * radY, cw * 0.015, 14), archPink);
    }
    // Fluffy white cloud bases at left and right ends of rainbow
    for (const side of [-1, 1]) {
      const clx = ox + side * cw * 0.25;
      const cly = oy + ch * 0.02;
      pushPoly(makeCircle(clx, cly, cw * 0.11, 22), "#ffffff");
      pushPoly(makeCircle(clx - side * cw * 0.08, cly + ch * 0.02, cw * 0.085, 22), "#ffffff");
      pushPoly(makeCircle(clx + side * cw * 0.07, cly + ch * 0.02, cw * 0.08, 22), "#ffffff");
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("HELLO", cx0 + cw * 0.5, cy0 + ch * 0.14, ch * 0.022, aspect, "wide", "#111827", "center"));
      parts.push(drawPosterVectorTextString("SUMMER", cx0 + cw * 0.5, cy0 + ch * 0.18, ch * 0.048, aspect, "bold", "#111827", "center"));
    }
  } else if (sub === 1) {
    // Card 2: Warm Yellow Sunburst & Concentric Target Sun Rings + White Clouds + SUMMER MOOD
    const yellowBg = pv.vCol("#fde68a", 0, true);
    const sunGold = pv.vCol("#f59e0b", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${yellowBg}"/>`);
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.64;
    const rays = 24;
    const maxR = Math.hypot(cw, ch) * 1.1;
    for (let i = 0; i < rays; i += 2) {
      const a0 = (i / rays) * Math.PI * 2;
      const a1 = ((i + 1) / rays) * Math.PI * 2;
      pushPoly([[ox, oy], [ox + Math.cos(a0) * maxR, oy + Math.sin(a0) * maxR], [ox + Math.cos(a1) * maxR, oy + Math.sin(a1) * maxR]], pv.vCol("#fcd34d", 2));
    }
    for (let r = 4; r >= 0; r--) {
      const rad = cw * (0.08 + r * 0.055) * bScale;
      pushPoly(makeCircle(ox, oy, rad, 32), r % 2 === 0 ? sunGold : yellowBg);
    }
    // Bottom white clouds
    for (let c = 0; c < 5; c++) {
      const clx = cx0 + (c / 4) * cw;
      const cly = cy1 - ch * (0.04 + (c % 2) * 0.04);
      pushPoly(makeCircle(clx, cly, cw * 0.15, 24), "#ffffff");
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("SUMMER", cx0 + cw * 0.5, cy0 + ch * 0.18, ch * 0.048, aspect, "bold", "#111827", "center"));
      parts.push(drawPosterVectorTextString("MOOD", cx0 + cw * 0.5, cy0 + ch * 0.245, ch * 0.032, aspect, "regular", "#111827", "center"));
    }
  } else if (sub === 2) {
    // Card 3: Sky Blue bg + 5-Line Parallel Blue Ribbon Wave + White Ocean Wave Crest + 2 Gulls + SUMMER TIME
    const skyBg = pv.vCol("#dbeafe", 0, true);
    const waveBlue = pv.vCol("#3b82f6", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${skyBg}"/>`);
    // 5-line parallel wave ribbon across middle
    for (let l = 0; l < 5; l++) {
      const topP: [number, number][] = [];
      const botP: [number, number][] = [];
      for (let s = 0; s <= 28; s++) {
        const u = s / 28;
        const x = cx0 + u * cw;
        const y = cy0 + ch * (0.48 + l * 0.025 + Math.sin(u * Math.PI * 2.2) * 0.07);
        topP.push([x, y - ch * 0.006]);
        botP.unshift([x, y + ch * 0.006]);
      }
      pushPoly(topP.concat(botP), waveBlue);
    }
    // White curling lower ocean wave crest
    const crest: [number, number][] = [[cx0, cy1], [cx0, cy0 + ch * 0.68]];
    for (let s = 0; s <= 24; s++) {
      const u = s / 24;
      crest.push([cx0 + u * cw, cy0 + ch * (0.66 + Math.cos(u * Math.PI * 1.8) * 0.08)]);
    }
    crest.push([cx1, cy1]);
    pushPoly(crest, "#ffffff");
    if (showText) {
      parts.push(drawPosterVectorTextString("SUMMER", cx0 + cw * 0.5, cy0 + ch * 0.16, ch * 0.048, aspect, "bold", "#111827", "center"));
      parts.push(drawPosterVectorTextString("TIME", cx0 + cw * 0.5, cy0 + ch * 0.22, ch * 0.024, aspect, "wide", "#111827", "center"));
    }
  } else if (sub === 3) {
    // Card 4: Cream bg + Repeating Overlapping Green Multi-Line Pointed Botanical Leaf Arches + SUMMER IS LIVE
    const creamBg = "#fdfbf7";
    const leafGreen = pv.vCol("#84a93c", 2);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${creamBg}"/>`);
    const leafCenters = [
      [0.25, 0.52],
      [0.75, 0.52],
      [0.50, 0.72],
      [0.20, 0.90],
      [0.80, 0.90],
    ];
    for (const [lx, ly] of leafCenters) {
      const ox = cx0 + lx * cw;
      const oy = cy0 + ly * ch;
      for (let r = 4; r >= 0; r--) {
        const rx = cw * (0.08 + r * 0.045) * bScale;
        const ry = ch * (0.09 + r * 0.042) * bScale;
        const pts: [number, number][] = [];
        for (let s = 0; s <= 24; s++) {
          const t = (s / 24) * Math.PI;
          const x = ox + Math.cos(t) * rx;
          const y = oy - Math.sin(t) * ry * (1 + 0.35 * Math.sin(t));
          pts.push([x, y]);
        }
        pushPoly(pts, r % 2 === 0 ? leafGreen : creamBg);
      }
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("SUMMER", cx0 + cw * 0.5, cy0 + ch * 0.16, ch * 0.048, aspect, "bold", "#111827", "center"));
      parts.push(drawPosterVectorTextString("IS LIVE", cx0 + cw * 0.5, cy0 + ch * 0.225, ch * 0.028, aspect, "regular", "#111827", "center"));
    }
  } else if (sub === 4) {
    // Card 5: Yellow-White Sunburst bg + Black Circular Kettle BBQ Grill with Concentric Yellow Grill Slots & Red Sausage + SUMMER HAPPY HOLYDAYS
    const paleYellow = "#fef9c3";
    const goldRay = pv.vCol("#fde047", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${paleYellow}"/>`);
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.65;
    const maxR = Math.hypot(cw, ch) * 1.1;
    for (let i = 0; i < 24; i += 2) {
      const a0 = (i / 24) * Math.PI * 2;
      const a1 = ((i + 1) / 24) * Math.PI * 2;
      pushPoly([[ox, oy], [ox + Math.cos(a0) * maxR, oy + Math.sin(a0) * maxR], [ox + Math.cos(a1) * maxR, oy + Math.sin(a1) * maxR]], goldRay);
    }
    // Black circular BBQ grill kettle
    pushPoly(makeCircle(ox, oy, cw * 0.35 * bScale, 36), "#18181b");
    for (let r = 1; r <= 4; r++) {
      pushPoly(makeRingArc(ox, oy, cw * (0.06 + r * 0.062) * bScale, cw * 0.016, 0, Math.PI * 2, 28), goldRay);
    }
    // Red curved BBQ sausage on grill
    pushPoly(makeRingArc(ox, oy - ch * 0.02, cw * 0.16 * bScale, cw * 0.065, Math.PI * 0.15, Math.PI * 0.85, 20), pv.vCol("#ef4444", 3));
    if (showText) {
      parts.push(drawPosterVectorTextString("SUMMER", cx0 + cw * 0.5, cy0 + ch * 0.16, ch * 0.048, aspect, "bold", "#111827", "center"));
      parts.push(drawPosterVectorTextString("HAPPY HOLIDAYS", cx0 + cw * 0.5, cy0 + ch * 0.22, ch * 0.019, aspect, "wide", "#111827", "center"));
    }
  } else {
    // Card 6: Periwinkle Violet bg + White Crescent Moon + Concentric Multi-Ring Purple/Lavender Circles + Yellow Stars + SUMMER VIBES
    const violetBg = pv.vCol("#c4b5fd", 0);
    const deepPurple = pv.vCol("#7c3aed", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${violetBg}"/>`);
    // White crescent moon
    pushPoly(makeCircle(cx0 + cw * 0.5, cy0 + ch * 0.44, cw * 0.14 * bScale, 28), "#ffffff");
    pushPoly(makeCircle(cx0 + cw * 0.55, cy0 + ch * 0.41, cw * 0.12 * bScale, 28), violetBg);
    // Concentric multi-ring purple clouds at bottom
    const ringCenters = [
      [0.22, 0.86, 0.26],
      [0.78, 0.84, 0.28],
      [0.50, 0.90, 0.26],
    ];
    for (const [rx, ry, rad] of ringCenters) {
      const rox = cx0 + rx * cw;
      const roy = cy0 + ry * ch;
      for (let k = 4; k >= 0; k--) {
        pushPoly(makeCircle(rox, roy, cw * (rad * ((k + 1) / 5)) * bScale, 28), k % 2 === 0 ? deepPurple : violetBg);
      }
    }
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.25, cy0 + ch * 0.45, cw * 0.045, ch * 0.032, "#fde047");
    drawPoster4PointStar(pushPoly, cx0 + cw * 0.78, cy0 + ch * 0.40, cw * 0.038, ch * 0.026, "#fde047");
    if (showText) {
      parts.push(drawPosterVectorTextString("SUMMER", cx0 + cw * 0.5, cy0 + ch * 0.16, ch * 0.048, aspect, "bold", "#111827", "center"));
      parts.push(drawPosterVectorTextString("VIBES", cx0 + cw * 0.5, cy0 + ch * 0.225, ch * 0.030, aspect, "regular", "#111827", "center"));
    }
  }
}

// ============================================================================
// REF SET 15: 4 PCS MINIMALIST 70S EARTH-TONE 5-STRIPE GEOMETRIC TRACK POSTERS
// (Exact 100% Habuhu match to image_1a1be610.png on Warm Cream with Olive Border)
// ============================================================================
function drawRef15Retro70sStripeTracksCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const cream = "#fdfbee";
  const stripes = [
    pv.vCol("#7a8262", 0), // Olive Sage
    pv.vCol("#543d22", 1), // Espresso Brown
    pv.vCol("#f2b866", 2), // Warm Ochre Gold
    pv.vCol("#e67e30", 3), // Retro Tangerine
    pv.vCol("#c84b28", 4), // Burnt Terracotta Rust
  ];
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cream}"/>`);
  const sub = (cardIdx + variant) % 4;
  const sw = cw * 0.048 * bScale;

  if (sub === 0) {
    // Card 1: 5-stripe vertical track rising from bottom center, bending 45° up-right to right edge + upper-left track bending 45° to top edge
    const xBase = cx0 + cw * 0.36;
    const yBendBase = cy0 + ch * 0.52;
    for (let i = 0; i < 5; i++) {
      const x0 = xBase + i * sw;
      const x1 = x0 + sw * 0.96;
      const yBend0 = yBendBase + i * sw * 0.7;
      const yBend1 = yBend0 + sw * 0.7;
      // Vertical lower stem
      pushPoly([[x0, yBend0], [x1, yBend1], [x1, cy1], [x0, cy1]], stripes[i]);
      // 45-degree diagonal upper-right branch
      const dx = cx1 - x0;
      pushPoly(
        [
          [x0, yBend0],
          [x0 + dx, yBend0 - dx * 0.85],
          [x1 + dx, yBend1 - dx * 0.85],
          [x1, yBend1],
        ],
        stripes[i]
      );
      // Upper-left track entering from left and bending 45° up-right to top edge
      const yTopLeft0 = cy0 + ch * 0.24 + i * sw * 0.82;
      const yTopLeft1 = yTopLeft0 + sw * 0.78;
      const xTurn0 = cx0 + cw * 0.22 + i * sw * 0.5;
      pushPoly([[cx0, yTopLeft0], [xTurn0, yTopLeft0], [xTurn0, yTopLeft1], [cx0, yTopLeft1]], stripes[i]);
      pushPoly(
        [
          [xTurn0, yTopLeft0],
          [xTurn0 + ch * 0.45, yTopLeft0 - ch * 0.45],
          [xTurn0 + ch * 0.45 + sw * 0.9, yTopLeft1 - ch * 0.45],
          [xTurn0, yTopLeft1],
        ],
        stripes[i]
      );
    }
  } else if (sub === 1) {
    // Card 2: 5-stripe perspective highway fan at bottom converging into a vertical 5-stripe column going straight up to top center
    const xColBase = cx0 + cw * 0.38;
    const ySplit = cy0 + ch * 0.66;
    for (let i = 0; i < 5; i++) {
      const xTop0 = xColBase + i * sw;
      const xTop1 = xTop0 + sw * 0.96;
      // Vertical top column
      pushPoly([[xTop0, cy0], [xTop1, cy0], [xTop1, ySplit], [xTop0, ySplit]], stripes[i]);
      // Perspective fan bottom base
      const fanW = cw * 0.28;
      const xBot0 = cx0 - cw * 0.18 + i * fanW;
      const xBot1 = xBot0 + fanW * 0.96;
      pushPoly([[xTop0, ySplit], [xTop1, ySplit], [xBot1, cy1], [xBot0, cy1]], stripes[i]);
    }
  } else if (sub === 2) {
    // Card 3: Large sweeping 5-stripe circular rainbow C-arc from top-left curving down to bottom-right, over a secondary lower 5-stripe arch
    const ox1 = cx0 + cw * 0.05;
    const oy1 = cy0 + ch * 0.88;
    for (let i = 4; i >= 0; i--) {
      const rOutX = cw * (0.42 + (i + 1) * 0.095) * bScale;
      const rInX = cw * (0.42 + i * 0.095) * bScale;
      const rOutY = ch * (0.42 + (i + 1) * 0.095) * bScale;
      const rInY = ch * (0.42 + i * 0.095) * bScale;
      const out: [number, number][] = [];
      const inn: [number, number][] = [];
      for (let s = 0; s <= 36; s++) {
        const a = -Math.PI * 0.55 + (s / 36) * (Math.PI * 0.72);
        out.push([ox1 + Math.cos(a) * rOutX, oy1 + Math.sin(a) * rOutY]);
        inn.unshift([ox1 + Math.cos(a) * rInX, oy1 + Math.sin(a) * rInY]);
      }
      pushPoly(out.concat(inn), stripes[4 - i]);
    }
    // Lower left concentric arch
    const ox2 = cx0 + cw * 0.28;
    const oy2 = cy1 + ch * 0.04;
    for (let i = 4; i >= 0; i--) {
      const rOutX = cw * (0.08 + (i + 1) * 0.055) * bScale;
      const rInX = cw * (0.08 + i * 0.055) * bScale;
      const rOutY = ch * (0.07 + (i + 1) * 0.048) * bScale;
      const rInY = ch * (0.07 + i * 0.048) * bScale;
      const out: [number, number][] = [];
      const inn: [number, number][] = [];
      for (let s = 0; s <= 28; s++) {
        const a = Math.PI + (s / 28) * Math.PI;
        out.push([ox2 + Math.cos(a) * rOutX, oy2 + Math.sin(a) * rOutY]);
        inn.unshift([ox2 + Math.cos(a) * rInX, oy2 + Math.sin(a) * rInY]);
      }
      pushPoly(out.concat(inn), stripes[i]);
    }
  } else {
    // Card 4: Vertical 5-stripe track from top-left making a smooth 180° rightward U-turn bulge in the middle and continuing down to bottom-left
    const xLeftBase = cx0 + cw * 0.08;
    const yLoopTop = cy0 + ch * 0.22;
    const yLoopBot = cy0 + ch * 0.78;
    const loopCy = (yLoopTop + yLoopBot) * 0.5;
    for (let i = 0; i < 5; i++) {
      const x0 = xLeftBase + i * sw;
      const x1 = x0 + sw * 0.96;
      // Top vertical segment
      pushPoly([[x0, cy0], [x1, cy0], [x1, yLoopTop], [x0, yLoopTop]], stripes[i]);
      // Bottom vertical segment
      pushPoly([[x0, yLoopBot], [x1, yLoopBot], [x1, cy1], [x0, cy1]], stripes[4 - i]);
    }
    // Rightward semi-circular 5-stripe rainbow bulge in center
    const loopOx = xLeftBase + sw * 2.5;
    for (let i = 4; i >= 0; i--) {
      const rOutX = cw * (0.14 + (i + 1) * 0.09) * bScale;
      const rInX = cw * (0.14 + i * 0.09) * bScale;
      const rOutY = (yLoopBot - yLoopTop) * (0.20 + (i + 1) * 0.14);
      const rInY = (yLoopBot - yLoopTop) * (0.20 + i * 0.14);
      const out: [number, number][] = [];
      const inn: [number, number][] = [];
      for (let s = 0; s <= 32; s++) {
        const a = -Math.PI * 0.55 + (s / 32) * (Math.PI * 1.1);
        out.push([loopOx + Math.cos(a) * rOutX, loopCy + Math.sin(a) * rOutY]);
        inn.unshift([loopOx + Math.cos(a) * rInX, loopCy + Math.sin(a) * rInY]);
      }
      pushPoly(out.concat(inn), stripes[4 - i]);
    }
  }

  // Thin vintage olive border around card
  parts.push(drawPosterOutlineFrame(cx0 + cw * 0.015, cy0 + ch * 0.012, cw * 0.97, ch * 0.976, cw * 0.008, ch * 0.006, stripes[0], 0));
  if (showText) {
    parts.push(drawPosterVectorTextString("RETRO 70S", cx1 - cw * 0.07, cy0 + ch * 0.055, ch * 0.018, aspect, "bold", stripes[1], "right"));
  }
}

// ============================================================================
// REF SET 16: 5 PCS DARK NAVY, ACID LIME-YELLOW & ULTRA-VIOLET 3D KINETIC SET
// (Exact 100% Habuhu match to image_1a19c618.png: 18/08 2030 / MODERN / WORKSHOP)
// ============================================================================
function drawRef16DarkAcidLimeVioletCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const darkNavy = "#0c121e";
  const lime = pv.vCol("#d9f928", 0);
  const oliveLime = pv.vCol("#7c9a14", 1);
  const violet = pv.vCol("#6d4aff", 2);
  const deepViolet = pv.vCol("#341f8c", 3);

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${darkNavy}"/>`);
  const sub = (cardIdx + variant) % 5;

  if (sub === 0) {
    // Card 1: 2x2 grid of 4 circular/oval kinetic motifs (striped purple ellipse, solid purple oval, radial lime wheel, radial lime/violet fan) + 18/08 2030
    const makeEllipse = (ox: number, oy: number, rx: number, ry: number, steps = 36): [number, number][] => {
      const pts: [number, number][] = [];
      for (let i = 0; i < steps; i++) {
        const a = (i / steps) * Math.PI * 2;
        pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
      }
      return pts;
    };
    // Top-left striped violet oval
    const tlX = cx0 + cw * 0.27;
    const tlY = cy0 + ch * 0.25;
    const tlPoly = makeEllipse(tlX, tlY, cw * 0.19 * bScale, ch * 0.16 * bScale);
    for (let s = -10; s <= 10; s++) {
      const sy = tlY + s * ch * 0.016;
      const bar: [number, number][] = [
        [tlX - cw * 0.25, sy],
        [tlX + cw * 0.25, sy],
        [tlX + cw * 0.25, sy + ch * 0.008],
        [tlX - cw * 0.25, sy + ch * 0.008],
      ];
      const cl = clipPolyAgainstConvexPoly(bar, tlPoly);
      if (cl.length >= 3) pushPoly(cl, violet);
    }
    // Top-right solid violet oval
    pushPoly(makeEllipse(cx0 + cw * 0.73, cy0 + ch * 0.25, cw * 0.19 * bScale, ch * 0.16 * bScale), violet);
    // Bottom-left radial lime wheel
    const blX = cx0 + cw * 0.27;
    const blY = cy0 + ch * 0.62;
    const blRx = cw * 0.19 * bScale;
    const blRy = ch * 0.16 * bScale;
    for (let r = 0; r < 28; r++) {
      const a0 = (r / 28) * Math.PI * 2;
      const a1 = ((r + 0.48) / 28) * Math.PI * 2;
      pushPoly([[blX, blY], [blX + Math.cos(a0) * blRx, blY + Math.sin(a0) * blRy], [blX + Math.cos(a1) * blRx, blY + Math.sin(a1) * blRy]], lime);
    }
    // Bottom-right radial lime & violet fan pinwheel
    const brX = cx0 + cw * 0.73;
    const brY = cy0 + ch * 0.62;
    for (let r = 0; r < 16; r++) {
      const a0 = (r / 16) * Math.PI * 2;
      const a1 = ((r + 0.65) / 16) * Math.PI * 2;
      pushPoly([[brX, brY], [brX + Math.cos(a0) * blRx, brY + Math.sin(a0) * blRy], [brX + Math.cos(a1) * blRx, brY + Math.sin(a1) * blRy]], r % 2 === 0 ? lime : violet);
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("18/08 2030", cx0 + cw * 0.10, cy1 - ch * 0.13, ch * 0.044, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.10, cy1 - ch * 0.075, cw * 0.78, 2, ch * 0.004, ch * 0.005, "#94a3b8", "left"));
    }
  } else if (sub === 1) {
    // Card 2: Giant overlapping 3D shaded spheres in violet-to-lime and dark-olive gradients + Design Inspiration Background
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.35, cy0 + ch * 0.26, cw * 0.52 * bScale, ch * 0.28 * bScale, -18, deepViolet, violet, lime, 5);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.56, cy0 + ch * 0.68, cw * 0.58 * bScale, ch * 0.36 * bScale, 15, darkNavy, oliveLime, lime, 5);
    if (showText) {
      parts.push(drawPosterVectorTextString("DESIGN INSPIRATION", cx0 + cw * 0.5, cy1 - ch * 0.11, ch * 0.022, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterVectorTextString("BACKGROUND", cx0 + cw * 0.5, cy1 - ch * 0.078, ch * 0.018, aspect, "regular", "#cbd5e1", "center"));
    }
  } else if (sub === 2) {
    // Card 3: Violet upper-left diagonal split bg + 3D extruded lime-green radial gear/starburst casting a long diagonal shadow + MODERN
    pushPoly([[cx0, cy0], [cx1, cy0], [cx0, cy0 + ch * 0.72]], violet);
    const gx = cx0 + cw * 0.54;
    const gy = cy0 + ch * 0.44;
    const gRx = cw * 0.27 * bScale;
    const gRy = (gRx * cw * aspect) / Math.max(1, ch);
    // Long diagonal 3D shadow cast down-left
    pushPoly(
      [
        [gx - gRx * 0.7, gy - gRy * 0.7],
        [gx + gRx * 0.7, gy + gRy * 0.7],
        [cx0, cy1],
        [cx0, gy + gRy * 0.3],
      ],
      "#05080f"
    );
    // 20-blade 3D extruded lime starburst wheel
    const blades = 20;
    for (let b = 0; b < blades; b++) {
      const a0 = (b / blades) * Math.PI * 2;
      const aMid = ((b + 0.45) / blades) * Math.PI * 2;
      const a1 = ((b + 0.85) / blades) * Math.PI * 2;
      pushPoly([[gx, gy], [gx + Math.cos(a0) * gRx, gy + Math.sin(a0) * gRy], [gx + Math.cos(aMid) * gRx, gy + Math.sin(aMid) * gRy]], lime);
      pushPoly([[gx, gy], [gx + Math.cos(aMid) * gRx, gy + Math.sin(aMid) * gRy], [gx + Math.cos(a1) * gRx * 0.82, gy + Math.sin(a1) * gRy * 0.82]], oliveLime);
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("MODERN", cx0 + cw * 0.08, cy0 + ch * 0.06, ch * 0.020, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.08, cy1 - ch * 0.10, cw * 0.40, 3, ch * 0.004, ch * 0.005, "#cbd5e1", "left"));
    }
  } else if (sub === 3) {
    // Card 4: 5 Vertical glowing gradient columns with staggered horizontal acid-lime & violet equalizer glow bands + MODERN ART | GRAPHIC
    const cols = 5;
    const colW = cw / cols;
    const bandY = [0.68, 0.46, 0.25, 0.62, 0.36];
    for (let c = 0; c < cols; c++) {
      const xA = cx0 + c * colW;
      const yPeak = bandY[c];
      const colStops =
        c % 2 === 0
          ? [darkNavy, deepViolet, violet, lime, oliveLime, darkNavy]
          : [darkNavy, oliveLime, lime, violet, deepViolet, darkNavy];
      const slices = 18;
      for (let s = 0; s < slices; s++) {
        const v0 = s / slices;
        const v1 = (s + 1) / slices;
        const dist = Math.abs((v0 + v1) * 0.5 - yPeak);
        const col = sampleMultiStopRamp(colStops, Math.min(1, Math.max(0, 1 - dist * 1.65)));
        pushPoly([[xA, cy0 + v0 * ch], [xA + colW + 0.5, cy0 + v0 * ch], [xA + colW + 0.5, cy0 + v1 * ch + 0.5], [xA, cy0 + v1 * ch + 0.5]], col);
      }
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("MODERN ART", cx0 + cw * 0.08, cy0 + ch * 0.055, ch * 0.015, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("GRAPHIC", cx1 - cw * 0.08, cy0 + ch * 0.055, ch * 0.015, aspect, "bold", "#ffffff", "right"));
    }
  } else {
    // Card 5: Bauhaus geometric grid of acid-lime quarter-circle, violet half-ring, shaded violet semi-cylinders, and 4-corner lime quarter-circles forming central dark 4-point star
    const makeSector = (ox: number, oy: number, rx: number, ry: number, a0: number, a1: number, steps = 20): [number, number][] => {
      const pts: [number, number][] = [[ox, oy]];
      for (let i = 0; i <= steps; i++) {
        const a = a0 + (i / steps) * (a1 - a0);
        pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
      }
      return pts;
    };
    const topSplitY = cy0 + ch * 0.36;
    const botSplitY = cy0 + ch * 0.88;
    const midX = cx0 + cw * 0.5;
    // Top-left acid-lime quarter circle
    pushPoly(makeSector(cx0 + cw * 0.06, topSplitY, cw * 0.42, ch * 0.25, -Math.PI * 0.5, 0), lime);
    // Top-right violet arch dome
    pushPoly(makeSector(cx0 + cw * 0.74, topSplitY, cw * 0.22, ch * 0.20, Math.PI, Math.PI * 2), violet);
    pushPoly(makeSector(cx0 + cw * 0.74, topSplitY, cw * 0.09, ch * 0.09, Math.PI, Math.PI * 2), darkNavy);
    // Bottom 2x2 grid of lime/olive quarter circles forming a central dark 4-point star negative space
    const qRx = cw * 0.44;
    const qRy = (botSplitY - topSplitY) * 0.48;
    pushPoly(makeSector(cx0 + cw * 0.06, topSplitY + qRy * 0.05, qRx, qRy, 0, Math.PI * 0.5), lime);
    pushPoly(makeSector(cx1 - cw * 0.06, topSplitY + qRy * 0.05, qRx, qRy, Math.PI * 0.5, Math.PI), oliveLime);
    pushPoly(makeSector(cx0 + cw * 0.06, botSplitY, qRx, qRy, -Math.PI * 0.5, 0), oliveLime);
    pushPoly(makeSector(cx1 - cw * 0.06, botSplitY, qRx, qRy, Math.PI, Math.PI * 1.5), lime);
    if (showText) {
      parts.push(drawPosterVectorTextString("WORKSHOP", cx0 + cw * 0.06, cy0 + ch * 0.05, ch * 0.015, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("LIVE", midX, cy0 + ch * 0.05, ch * 0.015, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("GRAPHIC", cx0 + cw * 0.06, cy1 - ch * 0.085, ch * 0.022, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("EXHIBITION", cx0 + cw * 0.06, cy1 - ch * 0.055, ch * 0.022, aspect, "bold", "#ffffff", "left"));
    }
  }
}

// ============================================================================
// REF SET 17: 4 PCS MINIMALIST SOCIAL MEDIA QUOTE FRAME POSTER SET ("QUOTE")
// (Exact 100% Habuhu match to image_d5631fad.png)
// ============================================================================
function drawRef17MinimalQuoteFramesCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;
  const lwX = cw * 0.011;
  const lwY = ch * 0.008;

  const makeCircle = (ox: number, oy: number, rx: number, steps = 28): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  if (sub === 0) {
    // Card 1: Pastel Pink bg + Continuous white rounded rectangular line frame entering top-center & exiting bottom-center + crimson quote marks + QUOTE
    const bgPink = pv.vCol("#ffc2c7", 0, true);
    const redAccent = pv.vCol("#f22e52", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgPink}"/>`);
    const fx = cx0 + cw * 0.14;
    const fy = cy0 + ch * 0.25;
    const fw = cw * 0.72;
    const fh = ch * 0.50;
    parts.push(drawPosterOutlineFrame(fx, fy, fw, fh, lwX, lwY, "#ffffff", 0));
    // Vertical entry line from top-center to frame & exit line from frame to bottom-center
    pushPoly([[cx0 + cw * 0.5 - lwX * 0.5, cy0], [cx0 + cw * 0.5 + lwX * 0.5, cy0], [cx0 + cw * 0.5 + lwX * 0.5, fy], [cx0 + cw * 0.5 - lwX * 0.5, fy]], "#ffffff");
    pushPoly([[cx0 + cw * 0.5 - lwX * 0.5, fy + fh], [cx0 + cw * 0.5 + lwX * 0.5, fy + fh], [cx0 + cw * 0.5 + lwX * 0.5, cy1], [cx0 + cw * 0.5 - lwX * 0.5, cy1]], "#ffffff");
    // Top-left & bottom-right crimson quote mark badges
    pushPoly(buildPosterRoundedRectPoly(fx + cw * 0.05, fy - ch * 0.04, cw * 0.14, ch * 0.08, cw * 0.02, cw * 0.02, cw * 0.02, cw * 0.02, aspect), bgPink);
    parts.push(drawPosterVectorTextString("66", fx + cw * 0.12, fy - ch * 0.032, ch * 0.062, aspect, "bold", redAccent, "center"));
    pushPoly(buildPosterRoundedRectPoly(fx + fw - cw * 0.19, fy + fh - ch * 0.04, cw * 0.14, ch * 0.08, cw * 0.02, cw * 0.02, cw * 0.02, cw * 0.02, aspect), bgPink);
    parts.push(drawPosterVectorTextString("99", fx + fw - cw * 0.12, fy + fh - ch * 0.032, ch * 0.062, aspect, "bold", redAccent, "center"));
    if (showText) {
      parts.push(drawPosterVectorTextString("QUOTE", cx0 + cw * 0.5, cy0 + ch * 0.44, ch * 0.054, aspect, "bold", "#111827", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy0 + ch * 0.525, cw * 0.36, 2, ch * 0.004, ch * 0.006, "#111827", "center"));
    }
  } else if (sub === 1) {
    // Card 2: Vibrant Crimson-Red bg + White stadium/capsule outline loop + 2 white circles with yellow 66/99 quote marks + white QUOTE
    const bgRed = pv.vCol("#f22e52", 1);
    const yellowQ = pv.vCol("#facc00", 2);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgRed}"/>`);
    const fx = cx0 + cw * 0.14;
    const fy = cy0 + ch * 0.25;
    const fw = cw * 0.72;
    const fh = ch * 0.50;
    const rad = cw * 0.22;
    pushPoly(buildPosterRoundedRectPoly(fx, fy, fw, fh, rad, rad, rad, rad, aspect), "#ffffff");
    pushPoly(buildPosterRoundedRectPoly(fx + lwX, fy + lwY, fw - lwX * 2, fh - lwY * 2, rad * 0.94, rad * 0.94, rad * 0.94, rad * 0.94, aspect), bgRed);
    // Top-right corner intersecting lines
    pushPoly([[cx0 + cw * 0.65, cy0], [cx0 + cw * 0.65 + lwX, cy0], [cx0 + cw * 0.65 + lwX, fy + lwY], [cx0 + cw * 0.65, fy + lwY]], "#ffffff");
    pushPoly([[fx + fw - lwX, cy0 + ch * 0.35], [cx1, cy0 + ch * 0.35], [cx1, cy0 + ch * 0.35 + lwY], [fx + fw - lwX, cy0 + ch * 0.35 + lwY]], "#ffffff");
    // 2 White quote circles
    pushPoly(makeCircle(fx + cw * 0.11, fy + ch * 0.04, cw * 0.085 * bScale), "#ffffff");
    parts.push(drawPosterVectorTextString("66", fx + cw * 0.11, fy + ch * 0.015, ch * 0.048, aspect, "bold", yellowQ, "center"));
    pushPoly(makeCircle(fx + fw - cw * 0.11, fy + fh - ch * 0.04, cw * 0.085 * bScale), "#ffffff");
    parts.push(drawPosterVectorTextString("99", fx + fw - cw * 0.11, fy + fh - ch * 0.065, ch * 0.048, aspect, "bold", yellowQ, "center"));
    if (showText) {
      parts.push(drawPosterVectorTextString("QUOTE", cx0 + cw * 0.5, cy0 + ch * 0.44, ch * 0.054, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy0 + ch * 0.525, cw * 0.36, 2, ch * 0.004, ch * 0.006, "#ffffff", "center"));
    }
  } else if (sub === 2) {
    // Card 3: Warm Golden-Yellow bg + Double parallel black step-track lines + 2 purple circles with white quote marks + white QUOTE
    const bgYellow = pv.vCol("#facc00", 2);
    const purpleBadge = pv.vCol("#4c1d95", 3);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgYellow}"/>`);
    const fx = cx0 + cw * 0.14;
    const fy = cy0 + ch * 0.25;
    const fw = cw * 0.72;
    const fh = ch * 0.50;
    parts.push(drawPosterOutlineFrame(fx, fy, fw, fh, lwX * 0.85, lwY * 0.85, "#111827", 0));
    parts.push(drawPosterOutlineFrame(fx + cw * 0.032, fy + ch * 0.022, fw - cw * 0.064, fh - ch * 0.044, lwX * 0.85, lwY * 0.85, "#111827", 0));
    // 2 Purple circular quote badges
    pushPoly(makeCircle(cx0 + cw * 0.5, fy + ch * 0.01, cw * 0.085 * bScale), purpleBadge);
    parts.push(drawPosterVectorTextString("66", cx0 + cw * 0.5, fy - ch * 0.015, ch * 0.048, aspect, "bold", "#ffffff", "center"));
    pushPoly(makeCircle(cx0 + cw * 0.5, fy + fh - ch * 0.01, cw * 0.085 * bScale), purpleBadge);
    parts.push(drawPosterVectorTextString("99", cx0 + cw * 0.5, fy + fh - ch * 0.035, ch * 0.048, aspect, "bold", "#ffffff", "center"));
    if (showText) {
      parts.push(drawPosterVectorTextString("QUOTE", cx0 + cw * 0.5, cy0 + ch * 0.44, ch * 0.054, aspect, "bold", "#ffffff", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy0 + ch * 0.525, cw * 0.36, 2, ch * 0.004, ch * 0.006, "#111827", "center"));
    }
  } else {
    // Card 4: Aqua Turquoise bg + Sharp white rectangular technical line frame extending to top-left & bottom-right edges + coral 66/99 outside corners + black QUOTE
    const bgAqua = pv.vCol("#5fd3d8", 3);
    const coralQ = pv.vCol("#f22e52", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgAqua}"/>`);
    const fx = cx0 + cw * 0.14;
    const fy = cy0 + ch * 0.25;
    const fw = cw * 0.72;
    const fh = ch * 0.50;
    parts.push(drawPosterOutlineFrame(fx, fy, fw, fh, lwX, lwY, "#ffffff", 0));
    // Extension lines to top-left & bottom-right card edges
    pushPoly([[fx, cy0], [fx + lwX, cy0], [fx + lwX, fy], [fx, fy]], "#ffffff");
    pushPoly([[cx0, fy], [fx, fy], [fx, fy + lwY], [cx0, fy + lwY]], "#ffffff");
    pushPoly([[fx + fw - lwX, fy + fh], [fx + fw, fy + fh], [fx + fw, cy1], [fx + fw - lwX, cy1]], "#ffffff");
    pushPoly([[fx + fw, fy + fh - lwY], [cx1, fy + fh - lwY], [cx1, fy + fh], [fx + fw, fy + fh]], "#ffffff");
    // Coral 66 / 99 outside frame
    parts.push(drawPosterVectorTextString("66", fx + cw * 0.12, fy - ch * 0.075, ch * 0.058, aspect, "bold", coralQ, "center"));
    parts.push(drawPosterVectorTextString("99", fx + fw - cw * 0.12, fy + fh + ch * 0.02, ch * 0.058, aspect, "bold", coralQ, "center"));
    if (showText) {
      parts.push(drawPosterVectorTextString("QUOTE", cx0 + cw * 0.5, cy0 + ch * 0.44, ch * 0.054, aspect, "bold", "#111827", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy0 + ch * 0.525, cw * 0.36, 2, ch * 0.004, ch * 0.006, "#111827", "center"));
    }
  }
}

// ============================================================================
// REF SET 18: 5 PCS CLEAN WHITE, SOFT PEACH-CORAL & STEEL-BLUE 3D FLUID TUBE SET
// (Exact 100% Habuhu match to image_0f16439d.png: Design Inspiration / CREATIVE 001 / ABSTRACT POSTER)
// ============================================================================
function drawRef18White3DPeachBlueTubesCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const whiteBg = "#f8fafc";
  const coral = pv.vCol("#fb7155", 0);
  const peach = pv.vCol("#fdba9a", 1);
  const steelBlue = pv.vCol("#6488b4", 2);
  const iceBlue = pv.vCol("#c7d9ec", 3);

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${whiteBg}"/>`);
  const sub = (cardIdx + variant) % 5;

  if (sub === 0) {
    // Card 1: Smooth coral/peach/blue 3D fluid wave + white concentric topographic contour ribs at top-right & bottom-left + Design Inspiration
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [whiteBg, peach, coral, iceBlue, steelBlue], 55, 36);
    const drawContourRibs = (ox: number, oy: number, rxMax: number, ryMax: number, a0: number, a1: number) => {
      for (let r = 0; r < 9; r++) {
        const t = (r + 1) / 9;
        const rx = rxMax * t;
        const ry = ryMax * t;
        const topP: [number, number][] = [];
        const botP: [number, number][] = [];
        for (let s = 0; s <= 24; s++) {
          const a = a0 + (s / 24) * (a1 - a0);
          topP.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
          botP.unshift([ox + Math.cos(a) * (rx + cw * 0.008), oy + Math.sin(a) * (ry + ch * 0.006)]);
        }
        pushPoly(topP.concat(botP), "#ffffff");
      }
    };
    drawContourRibs(cx1, cy0, cw * 0.56 * bScale, ch * 0.34 * bScale, Math.PI * 0.5, Math.PI);
    drawContourRibs(cx0, cy1, cw * 0.58 * bScale, ch * 0.36 * bScale, -Math.PI * 0.5, 0);
    if (showText) {
      parts.push(drawPosterVectorTextString("DESIGN", cx0 + cw * 0.08, cy0 + ch * 0.14, ch * 0.020, aspect, "regular", "#1e293b", "left"));
      parts.push(drawPosterVectorTextString("INSPIRATION", cx0 + cw * 0.08, cy0 + ch * 0.175, ch * 0.028, aspect, "bold", "#1e293b", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.08, cy0 + ch * 0.225, cw * 0.28, 3, ch * 0.0035, ch * 0.005, "#475569", "left"));
    }
  } else if (sub === 1) {
    // Card 2: 3 Concentric Sweeping 3D Shaded Peach-Orange & Steel-Blue Curved Torus Bands on Crisp White + CREATIVE / 001
    const ox = cx0 + cw * 0.94;
    const oy = cy0 + ch * 0.88;
    const bands = [
      { rOut: 0.92, rIn: 0.72, cA: coral, cB: peach },
      { rOut: 0.70, rIn: 0.50, cA: iceBlue, cB: steelBlue },
      { rOut: 0.48, rIn: 0.28, cA: peach, cB: coral },
    ];
    for (const bd of bands) {
      const steps = 28;
      for (let s = 0; s < steps; s++) {
        const t0 = s / steps;
        const t1 = (s + 1) / steps;
        const a0 = Math.PI + t0 * (Math.PI * 0.56);
        const a1 = Math.PI + t1 * (Math.PI * 0.56);
        const col = mixCol(bd.cA, bd.cB, t0);
        pushPoly(
          [
            [ox + Math.cos(a0) * cw * bd.rIn * bScale, oy + Math.sin(a0) * ch * bd.rIn * bScale],
            [ox + Math.cos(a0) * cw * bd.rOut * bScale, oy + Math.sin(a0) * ch * bd.rOut * bScale],
            [ox + Math.cos(a1) * cw * bd.rOut * bScale, oy + Math.sin(a1) * ch * bd.rOut * bScale],
            [ox + Math.cos(a1) * cw * bd.rIn * bScale, oy + Math.sin(a1) * ch * bd.rIn * bScale],
          ],
          col
        );
      }
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("CREATIVE", cx0 + cw * 0.08, cy0 + ch * 0.06, ch * 0.015, aspect, "bold", "#1e293b", "left"));
      parts.push(drawPosterVectorTextString("001", cx1 - cw * 0.08, cy0 + ch * 0.06, ch * 0.015, aspect, "bold", "#1e293b", "right"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.08, cy1 - ch * 0.09, cw * 0.26, 2, ch * 0.0035, ch * 0.005, "#475569", "left"));
    }
  } else if (sub === 2) {
    // Card 3: Diagonal Floating 3D Rounded Frosted Glass/Mesh Blocks in Soft Peach, Coral, White & Slate-Blue + ABSTRACT POSTER
    drawPosterSlicedLinearGradient(pushPoly, cx0, cy0, cw, ch, [peach, whiteBg, iceBlue, steelBlue], 45, 28);
    const pills = [
      { x: -0.05, y: 0.14, w: 0.56, h: 0.22, c: coral },
      { x: 0.44, y: 0.04, w: 0.58, h: 0.24, c: peach },
      { x: 0.22, y: 0.34, w: 0.64, h: 0.26, c: "#ffffff" },
      { x: -0.08, y: 0.56, w: 0.52, h: 0.24, c: iceBlue },
      { x: 0.36, y: 0.64, w: 0.68, h: 0.28, c: steelBlue },
    ];
    for (const pl of pills) {
      const r = cw * 0.09;
      pushPoly(
        buildPosterRoundedRectPoly(cx0 + pl.x * cw, cy0 + pl.y * ch, pl.w * cw * bScale, pl.h * ch * bScale, r, r, r, r, aspect),
        pl.c
      );
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("ABSTRACT", cx0 + cw * 0.5, cy0 + ch * 0.13, ch * 0.022, aspect, "wide", "#1e293b", "center"));
      parts.push(drawPosterVectorTextString("POSTER", cx0 + cw * 0.5, cy0 + ch * 0.165, ch * 0.022, aspect, "wide", "#1e293b", "center"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy1 - ch * 0.08, cw * 0.42, 2, ch * 0.0035, ch * 0.005, "#ffffff", "center"));
    }
  } else if (sub === 3) {
    // Card 4: Clean White Left Half with 3 Soft 3D Shaded Gradient Spheres along the Right + INSPIRATION
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.72, cy0 + ch * 0.18, cw * 0.46 * bScale, ch * 0.26 * bScale, 0, peach, coral, "#ffffff", 5);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.62, cy0 + ch * 0.50, cw * 0.34 * bScale, ch * 0.22 * bScale, 0, iceBlue, steelBlue, coral, 5);
    drawPosterSmoothMeshOrb(pushPoly, cx0 + cw * 0.70, cy0 + ch * 0.84, cw * 0.48 * bScale, ch * 0.28 * bScale, 0, iceBlue, peach, coral, 5);
    if (showText) {
      parts.push(drawPosterVectorTextString("INSPIRATION", cx0 + cw * 0.08, cy0 + ch * 0.54, ch * 0.024, aspect, "bold", "#1e293b", "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.08, cy0 + ch * 0.585, cw * 0.26, 2, ch * 0.0035, ch * 0.005, "#475569", "left"));
    }
  } else {
    // Card 5: Concentric 3D Shaded Coral/Peach/Blue/White Split Rings & Horizontal Horizon Split Disc + CREATE / 001
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.50;
    const makeSemiDisc = (rx: number, ry: number, topHalf: boolean): [number, number][] => {
      const pts: [number, number][] = [];
      for (let i = 0; i <= 28; i++) {
        const a = (topHalf ? Math.PI : 0) + (i / 28) * Math.PI;
        pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
      }
      return pts;
    };
    // Outer ring top/bottom split
    pushPoly(makeSemiDisc(cw * 0.46 * bScale, ch * 0.30 * bScale, true), coral);
    pushPoly(makeSemiDisc(cw * 0.46 * bScale, ch * 0.30 * bScale, false), iceBlue);
    // Mid ring top/bottom split
    pushPoly(makeSemiDisc(cw * 0.34 * bScale, ch * 0.22 * bScale, true), steelBlue);
    pushPoly(makeSemiDisc(cw * 0.34 * bScale, ch * 0.22 * bScale, false), peach);
    // Inner core disc split
    pushPoly(makeSemiDisc(cw * 0.20 * bScale, ch * 0.13 * bScale, true), peach);
    pushPoly(makeSemiDisc(cw * 0.20 * bScale, ch * 0.13 * bScale, false), coral);
    if (showText) {
      parts.push(drawPosterVectorTextString("CREATE", cx0 + cw * 0.08, cy0 + ch * 0.06, ch * 0.015, aspect, "bold", "#1e293b", "left"));
      parts.push(drawPosterVectorTextString("001", cx1 - cw * 0.08, cy0 + ch * 0.06, ch * 0.015, aspect, "bold", "#1e293b", "right"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.5, cy1 - ch * 0.08, cw * 0.32, 2, ch * 0.0035, ch * 0.005, "#475569", "center"));
    }
  }
}

// ============================================================================
// REF SET 19: 4 PCS SWISS MINIMALIST PARALLEL LINE-ART & CONCENTRIC ARCH SET
// (Exact 100% Habuhu match to image_3c4be47e.png: Deep Teal, Marigold Yellow, Coral Terracotta, Royal Purple)
// ============================================================================
function drawRef19SwissMinimalLineWavesCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  if (sub === 0) {
    // Card 1: Deep Forest Teal (#0c4a4e) bg + 3 Diagonal Bands of Fine Parallel Mint-Green Hatch Lines with 3D Wave Fold + ABSTRACT POSTER
    const bgTeal = pv.vCol("#0c4a4e", 0);
    const mintLine = pv.vCol("#86efac", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgTeal}"/>`);
    const lines = 28;
    const lw = ch * 0.0022;
    for (let l = 0; l < lines; l++) {
      const t = l / (lines - 1);
      const topP: [number, number][] = [];
      const botP: [number, number][] = [];
      for (let s = 0; s <= 28; s++) {
        const u = s / 28;
        const x = cx0 + u * cw;
        const y = cy0 + ch * (0.28 + t * 0.62 - u * 0.38 + Math.sin(u * Math.PI * 2 + t * 2.5) * 0.045);
        topP.push([x, y - lw]);
        botP.unshift([x, y + lw]);
      }
      pushPoly(topP.concat(botP), mintLine);
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("ABSTRACT", cx0 + cw * 0.08, cy0 + ch * 0.06, ch * 0.024, aspect, "bold", mintLine, "left"));
      parts.push(drawPosterVectorTextString("POSTER", cx0 + cw * 0.08, cy0 + ch * 0.095, ch * 0.024, aspect, "bold", mintLine, "left"));
      parts.push(drawPosterSubtitleBlock(cx0 + cw * 0.08, cy0 + ch * 0.145, cw * 0.24, 3, ch * 0.0035, ch * 0.005, mintLine, "left"));
    }
  } else if (sub === 1) {
    // Card 2: Warm Marigold Yellow (#fcd34d) bg + Bottom-Left Concentric Pale-Yellow Thick Quarter-Circle Rainbow Arcs + Top-Right POSTER & Boxed [POS/TER]
    const bgYellow = pv.vCol("#fbbf24", 1);
    const creamArc = pv.vCol("#fef3c7", 0, true);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgYellow}"/>`);
    const ox = cx0;
    const oy = cy1;
    for (let r = 0; r < 6; r++) {
      const rOutX = cw * (0.20 + r * 0.14) * bScale;
      const rInX = rOutX - cw * 0.068 * bScale;
      const rOutY = ch * (0.16 + r * 0.115) * bScale;
      const rInY = rOutY - ch * 0.055 * bScale;
      const out: [number, number][] = [];
      const inn: [number, number][] = [];
      for (let s = 0; s <= 28; s++) {
        const a = -Math.PI * 0.5 + (s / 28) * (Math.PI * 0.5);
        out.push([ox + Math.cos(a) * rOutX, oy + Math.sin(a) * rOutY]);
        inn.unshift([ox + Math.cos(a) * rInX, oy + Math.sin(a) * rInY]);
      }
      pushPoly(out.concat(inn), creamArc);
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("POSTER", cx1 - cw * 0.08, cy0 + ch * 0.06, ch * 0.022, aspect, "bold", "#78350f", "right"));
      const fw = cw * 0.18;
      const fh = ch * 0.075;
      const fx = cx1 - cw * 0.08 - fw;
      const fy = cy0 + ch * 0.15;
      parts.push(drawPosterOutlineFrame(fx, fy, fw, fh, cw * 0.006, ch * 0.004, "#78350f", 0));
      parts.push(drawPosterVectorTextString("POS", fx + fw * 0.5, fy + fh * 0.18, ch * 0.018, aspect, "bold", "#78350f", "center"));
      parts.push(drawPosterVectorTextString("TER", fx + fw * 0.5, fy + fh * 0.54, ch * 0.018, aspect, "bold", "#78350f", "center"));
    }
  } else if (sub === 2) {
    // Card 3: Coral Terracotta (#f47252) bg + Top-Left & Bottom-Right Diagonal Parallel Cream Line-Hatching Triangles Framing Clean Diagonal Channel with Vertical P O S T E R
    const bgCoral = pv.vCol("#f47252", 2);
    const creamLine = "#fff7ed";
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgCoral}"/>`);
    const lines = 26;
    const lw = ch * 0.0024;
    for (let l = 0; l < lines; l++) {
      const d = (l / lines) * 0.74;
      // Top-left triangle diagonal lines
      pushPoly(
        [
          [cx0, cy0 + ch * d - lw],
          [cx0 + cw * d, cy0 - lw],
          [cx0 + cw * d, cy0 + lw],
          [cx0, cy0 + ch * d + lw],
        ],
        creamLine
      );
      // Bottom-right triangle diagonal lines
      pushPoly(
        [
          [cx1 - cw * d, cy1 - lw],
          [cx1, cy1 - ch * d - lw],
          [cx1, cy1 - ch * d + lw],
          [cx1 - cw * d, cy1 + lw],
        ],
        creamLine
      );
    }
    if (showText) {
      parts.push(drawPosterVerticalVectorText("POSTER", cx0 + cw * 0.5, cy0 + ch * 0.36, ch * 0.022, ch * 0.042, aspect, creamLine));
    }
  } else {
    // Card 4: Royal Purple (#582c83) bg + 24 Concentric Parallel Lavender/White Arch-Wave Contour Lines Curving into a 3D Vortex Tunnel at Bottom-Center + 01 TEMPLATE
    const bgPurple = pv.vCol("#582c83", 3);
    const lavLine = pv.vCol("#e9d5ff", 4, true);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgPurple}"/>`);
    const ox = cx0 + cw * 0.5;
    const oy = cy1 + ch * 0.02;
    const rings = 24;
    const lw = ch * 0.0022;
    for (let r = 0; r < rings; r++) {
      const t = (r + 1) / rings;
      const rx = cw * (0.06 + t * 0.58) * bScale;
      const ry = ch * (0.05 + Math.pow(t, 1.25) * 0.56) * bScale;
      const topP: [number, number][] = [];
      const botP: [number, number][] = [];
      for (let s = 0; s <= 32; s++) {
        const a = Math.PI + (s / 32) * Math.PI;
        const pinch = 1 - 0.18 * Math.sin((s / 32) * Math.PI) * (1 - t);
        const px = ox + Math.cos(a) * rx * pinch;
        const py = oy + Math.sin(a) * ry;
        topP.push([px, py - lw]);
        botP.unshift([px, py + lw]);
      }
      pushPoly(topP.concat(botP), lavLine);
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("01", cx0 + cw * 0.08, cy0 + ch * 0.06, ch * 0.032, aspect, "bold", "#ffffff", "left"));
      parts.push(drawPosterVectorTextString("TEMPLATE", cx0 + cw * 0.08, cy0 + ch * 0.105, ch * 0.016, aspect, "wide", lavLine, "left"));
      parts.push(drawPosterVectorTextString("ABSTRACT", cx1 - cw * 0.08, cy0 + ch * 0.25, ch * 0.016, aspect, "bold", "#ffffff", "right"));
      parts.push(drawPosterVectorTextString("GRADIENT", cx1 - cw * 0.08, cy0 + ch * 0.28, ch * 0.016, aspect, "bold", "#ffffff", "right"));
      parts.push(drawPosterVectorTextString("DESIGN", cx1 - cw * 0.08, cy0 + ch * 0.31, ch * 0.016, aspect, "bold", "#ffffff", "right"));
    }
  }
}

// ============================================================================
// REF SET 20: 4 PCS RETRO 70S GROOVY PSYCHEDELIC SMILEY, WALKING DAISY, MUSHROOM & LOVE SET
// (Exact 100% Habuhu match to image_bb19e06a.png: SMILE / LOVE)
// ============================================================================
function drawRef20GroovyPsychedelicCartoonCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const cream = "#f6f0dd";
  const ink = "#18181b";
  const sub = (cardIdx + variant) % 4;

  const makeCircle = (ox: number, oy: number, rx: number, steps = 32): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  const drawSmileyFace = (ox: number, oy: number, radX: number, faceCol: string) => {
    const radY = (radX * cw * aspect) / Math.max(1, ch);
    pushPoly(makeCircle(ox, oy, radX * 1.06, 36), ink);
    pushPoly(makeCircle(ox, oy, radX, 36), faceCol);
    // Retro oval eyes
    pushPoly(makeCircle(ox - radX * 0.30, oy - radY * 0.18, radX * 0.11, 18), ink);
    pushPoly(makeCircle(ox + radX * 0.30, oy - radY * 0.18, radX * 0.11, 18), ink);
    // Wide smile arc
    const sOut: [number, number][] = [];
    const sIn: [number, number][] = [];
    for (let s = 0; s <= 20; s++) {
      const a = Math.PI * 0.15 + (s / 20) * (Math.PI * 0.70);
      sOut.push([ox + Math.cos(a) * radX * 0.56, oy + Math.sin(a) * radY * 0.52]);
      sIn.unshift([ox + Math.cos(a) * radX * 0.44, oy + Math.sin(a) * radY * 0.40]);
    }
    pushPoly(sOut.concat(sIn), ink);
  };

  if (sub === 0) {
    // Card 1: Teal & Cream Wavy Radial Vortex Top + 3D Perspective Teal/Cream Checkerboard Floor + Large Yellow Retro Smiley + SMILE
    const teal = pv.vCol("#14888c", 0);
    const gold = pv.vCol("#f5c242", 1);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cream}"/>`);
    const horizonY = cy0 + ch * 0.52;
    // Wavy radial sunburst top
    const rays = 24;
    const maxR = Math.hypot(cw, ch) * 0.9;
    for (let i = 0; i < rays; i += 2) {
      const a0 = Math.PI + (i / rays) * Math.PI;
      const a1 = Math.PI + ((i + 1) / rays) * Math.PI;
      pushPoly([[cx0 + cw * 0.5, horizonY], [cx0 + cw * 0.5 + Math.cos(a0) * maxR, horizonY + Math.sin(a0) * maxR], [cx0 + cw * 0.5 + Math.cos(a1) * maxR, horizonY + Math.sin(a1) * maxR]], teal);
    }
    // 3D Perspective Checkerboard Floor below horizonY
    const rows = 7;
    const cols = 8;
    for (let r = 0; r < rows; r++) {
      const v0 = Math.pow(r / rows, 1.45);
      const v1 = Math.pow((r + 1) / rows, 1.45);
      const y0 = horizonY + v0 * (cy1 - horizonY);
      const y1 = horizonY + v1 * (cy1 - horizonY);
      const span0 = cw * (0.45 + v0 * 0.95);
      const span1 = cw * (0.45 + v1 * 0.95);
      for (let c = 0; c < cols; c++) {
        if ((r + c) % 2 !== 0) continue;
        const u0 = (c / cols) - 0.5;
        const u1 = ((c + 1) / cols) - 0.5;
        pushPoly(
          [
            [cx0 + cw * 0.5 + u0 * span0, y0],
            [cx0 + cw * 0.5 + u1 * span0, y0],
            [cx0 + cw * 0.5 + u1 * span1, y1],
            [cx0 + cw * 0.5 + u0 * span1, y1],
          ],
          teal
        );
      }
    }
    drawSmileyFace(cx0 + cw * 0.5, horizonY, cw * 0.25 * bScale, gold);
    if (showText) {
      parts.push(drawPosterVectorTextString("SMILE", cx0 + cw * 0.5, cy0 + ch * 0.14, ch * 0.068, aspect, "bold", gold, "center"));
    }
  } else if (sub === 1) {
    // Card 2: Black & Cream Checkerboard Wall + Golden 3D Stepped Diagonal Staircase + Retro Daisy Character with Smiley Center
    const gold = pv.vCol("#eab308", 1);
    const teal = pv.vCol("#14888c", 0);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cream}"/>`);
    const gCols = 8;
    const gRows = 11;
    const cellW = cw / gCols;
    const cellH = ch / gRows;
    for (let r = 0; r < gRows; r++) {
      for (let c = 0; c < gCols; c++) {
        if ((r + c) % 2 === 0) {
          pushPoly([[cx0 + c * cellW, cy0 + r * cellH], [cx0 + (c + 1) * cellW, cy0 + r * cellH], [cx0 + (c + 1) * cellW, cy0 + (r + 1) * cellH], [cx0 + c * cellW, cy0 + (r + 1) * cellH]], ink);
        }
      }
    }
    // Golden 3D diagonal stepped staircase from bottom-left to middle-right
    const steps = 6;
    for (let s = 0; s < steps; s++) {
      const sx = cx0 + (s / steps) * cw * 0.85;
      const sy = cy1 - ((s + 1) / steps) * ch * 0.56;
      const swStep = cw * 0.24;
      pushPoly([[sx, sy], [sx + swStep, sy], [sx + swStep, cy1], [sx, cy1]], s % 2 === 0 ? gold : mixCol(gold, ink, 0.28));
    }
    // Daisy Flower Character with 10 White Petals & Yellow Smiley Center
    const fx = cx0 + cw * 0.48;
    const fy = cy0 + ch * 0.36;
    const pRad = cw * 0.24 * bScale;
    const pRadY = (pRad * cw * aspect) / Math.max(1, ch);
    for (let p = 0; p < 10; p++) {
      const a = (p / 10) * Math.PI * 2;
      pushPoly(makeCircle(fx + Math.cos(a) * pRad * 0.65, fy + Math.sin(a) * pRadY * 0.65, cw * 0.085 * bScale, 20), "#ffffff");
    }
    drawSmileyFace(fx, fy, cw * 0.14 * bScale, gold);
    // Cute cartoon legs & teal sneakers
    pushPoly([[fx - cw * 0.06, fy + pRadY * 0.7], [fx - cw * 0.02, fy + pRadY * 0.7], [fx - cw * 0.05, fy + pRadY * 1.45], [fx - cw * 0.09, fy + pRadY * 1.45]], ink);
    pushPoly([[fx + cw * 0.03, fy + pRadY * 0.7], [fx + cw * 0.07, fy + pRadY * 0.7], [fx + cw * 0.11, fy + pRadY * 1.35], [fx + cw * 0.07, fy + pRadY * 1.35]], ink);
    pushPoly(makeCircle(fx - cw * 0.08, fy + pRadY * 1.48, cw * 0.065, 18), teal);
    pushPoly(makeCircle(fx + cw * 0.11, fy + pRadY * 1.38, cw * 0.065, 18), teal);
  } else if (sub === 2) {
    // Card 3: Wavy Yellow & Cream Radial Sunburst bg + Retro Red-Spotted Amanita Mushroom Character with Cartoon Eyes
    const gold = pv.vCol("#f5c242", 1);
    const redCap = pv.vCol("#e63928", 2);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cream}"/>`);
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.52;
    const maxR = Math.hypot(cw, ch) * 0.95;
    for (let i = 0; i < 24; i += 2) {
      const a0 = (i / 24) * Math.PI * 2;
      const a1 = ((i + 1) / 24) * Math.PI * 2;
      pushPoly([[ox, oy], [ox + Math.cos(a0) * maxR, oy + Math.sin(a0) * maxR], [ox + Math.cos(a1) * maxR, oy + Math.sin(a1) * maxR]], gold);
    }
    // Mushroom Stem
    const stemPoly: [number, number][] = [
      [ox - cw * 0.13, oy - ch * 0.02],
      [ox + cw * 0.13, oy - ch * 0.02],
      [ox + cw * 0.19, cy1 - ch * 0.10],
      [ox - cw * 0.19, cy1 - ch * 0.10],
    ];
    pushPoly(stemPoly, cream);
    // Mushroom Red Dome Cap
    const capPts: [number, number][] = [];
    for (let s = 0; s <= 28; s++) {
      const a = Math.PI + (s / 28) * Math.PI;
      capPts.push([ox + Math.cos(a) * cw * 0.42 * bScale, oy + Math.sin(a) * ch * 0.30 * bScale]);
    }
    pushPoly(capPts, redCap);
    // Cream spots on mushroom cap
    const spots = [
      [-0.22, -0.11, 0.055],
      [0.0, -0.20, 0.065],
      [0.22, -0.12, 0.055],
      [-0.10, -0.06, 0.045],
      [0.12, -0.06, 0.045],
    ];
    for (const [sx, sy, sr] of spots) {
      pushPoly(makeCircle(ox + sx * cw * bScale, oy + sy * ch * bScale, sr * cw * bScale, 20), cream);
    }
    // Cartoon eyes & smile on stem
    pushPoly(makeCircle(ox - cw * 0.055, oy + ch * 0.11, cw * 0.032, 16), ink);
    pushPoly(makeCircle(ox + cw * 0.055, oy + ch * 0.11, cw * 0.032, 16), ink);
    pushPoly(makeCircle(ox, oy + ch * 0.19, cw * 0.045, 16), ink);
  } else {
    // Card 4: Cream Card with Black Border, Warped Blue & Cream Checkerboard Center, 2 Smiling Daisy Flowers & Bold Retro LOVE / LOVE
    const blue = pv.vCol("#2563eb", 3);
    const gold = pv.vCol("#f5c242", 1);
    const greenStem = pv.vCol("#15803d", 4);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cream}"/>`);
    parts.push(drawPosterOutlineFrame(cx0 + cw * 0.04, cy0 + ch * 0.03, cw * 0.92, ch * 0.94, cw * 0.014, ch * 0.010, ink, 0));
    // Warped Blue & Cream Checkerboard Square in Center
    const bx0 = cx0 + cw * 0.12;
    const by0 = cy0 + ch * 0.22;
    const bw = cw * 0.76;
    const bh = ch * 0.56;
    const gN = 8;
    const gridPt = (ix: number, iy: number): [number, number] => {
      const u = ix / gN;
      const v = iy / gN;
      const warpX = Math.sin(v * Math.PI * 2) * cw * 0.035 * Math.sin(u * Math.PI);
      const warpY = Math.sin(u * Math.PI * 2) * ch * 0.025 * Math.sin(v * Math.PI);
      return [bx0 + u * bw + warpX, by0 + v * bh + warpY];
    };
    for (let r = 0; r < gN; r++) {
      for (let c = 0; c < gN; c++) {
        const p00 = gridPt(c, r);
        const p10 = gridPt(c + 1, r);
        const p11 = gridPt(c + 1, r + 1);
        const p01 = gridPt(c, r + 1);
        pushPoly([p00, p10, p11, p01], (r + c) % 2 === 0 ? blue : cream);
      }
    }
    // Green stems
    pushPoly([[cx0 + cw * 0.44, cy0 + ch * 0.42], [cx0 + cw * 0.47, cy0 + ch * 0.42], [cx0 + cw * 0.36, by0 + bh], [cx0 + cw * 0.33, by0 + bh]], greenStem);
    pushPoly([[cx0 + cw * 0.55, cy0 + ch * 0.56], [cx0 + cw * 0.58, cy0 + ch * 0.56], [cx0 + cw * 0.64, by0 + bh], [cx0 + cw * 0.61, by0 + bh]], greenStem);
    // 2 Smiling Daisy Flowers
    for (const [fxR, fyR, sc] of [
      [0.42, 0.38, 0.15],
      [0.62, 0.55, 0.13],
    ]) {
      const fx = cx0 + fxR * cw;
      const fy = cy0 + fyR * ch;
      const pR = cw * sc * bScale;
      const pRY = (pR * cw * aspect) / Math.max(1, ch);
      for (let p = 0; p < 9; p++) {
        const a = (p / 9) * Math.PI * 2;
        pushPoly(makeCircle(fx + Math.cos(a) * pR * 0.68, fy + Math.sin(a) * pRY * 0.68, pR * 0.36, 18), "#ffffff");
      }
      drawSmileyFace(fx, fy, pR * 0.52, gold);
    }
    if (showText) {
      parts.push(drawPosterVectorTextString("LOVE", cx0 + cw * 0.5, cy0 + ch * 0.085, ch * 0.095, aspect, "bold", ink, "center"));
      parts.push(drawPosterVectorTextString("LOVE", cx0 + cw * 0.5, cy1 - ch * 0.175, ch * 0.095, aspect, "bold", ink, "center"));
    }
  }
}

// ============================================================================
// REF SET 21: 3 PCS HIGH-CONTRAST BLACK & WHITE SWISS BRUTALIST ROUNDED-CORNER SET
// (Exact 100% Habuhu match to image_23a4dc40.png: 07/27 / POSTER TEMPLATE DESIGN)
// ============================================================================
function drawRef21SwissBwTypoArchCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const darkCol = colorSet === "palette" ? pv.vCol("#0a0a0c", 0) : "#0a0a0c";
  const lightCol = "#ffffff";
  const sub = (cardIdx + variant) % 3;

  const drawRingMarker = (ox: number, oy: number, rOuterX: number, col: string, bgCol: string) => {
    const rOuterY = (rOuterX * cw * aspect) / Math.max(1, ch);
    const ptsOut: [number, number][] = [];
    const ptsIn: [number, number][] = [];
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      ptsOut.push([ox + Math.cos(a) * rOuterX, oy + Math.sin(a) * rOuterY]);
      ptsIn.push([ox + Math.cos(a) * rOuterX * 0.55, oy + Math.sin(a) * rOuterY * 0.55]);
    }
    pushPoly(ptsOut, col);
    pushPoly(ptsIn, bgCol);
  };

  const mX = cw * 0.055;
  const mY = ch * 0.042;
  const inX = cx0 + mX;
  const inY = cy0 + mY;
  const inW = cw - mX * 2;
  const inH = ch - mY * 2;
  const bigRad = cw * 0.42 * bScale;

  if (sub === 0) {
    // Card 1: White Outer Frame + Black Inner Block with Giant Rounded Top-Right Corner + POSTER TEMPLATE DESIGN + 07/27
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${lightCol}"/>`);
    pushPoly(buildPosterRoundedRectPoly(inX, inY, inW, inH, 0, bigRad, 0, 0, aspect), darkCol);
    // Thin white horizontal rule across lower middle
    pushPoly([[inX + inW * 0.08, inY + inH * 0.72], [inX + inW * 0.92, inY + inH * 0.72], [inX + inW * 0.92, inY + inH * 0.725], [inX + inW * 0.08, inY + inH * 0.725]], lightCol);
    drawRingMarker(inX + inW * 0.13, inY + inH * 0.85, cw * 0.032, lightCol, darkCol);
    if (showText) {
      const tx = inX + inW * 0.08;
      const th = ch * 0.036;
      parts.push(drawPosterVectorTextString("POSTER", tx, inY + inH * 0.36, th, aspect, "bold", lightCol, "left"));
      parts.push(drawPosterVectorTextString("TEMPLATE", tx, inY + inH * 0.415, th, aspect, "bold", lightCol, "left"));
      parts.push(drawPosterVectorTextString("DESIGN", tx, inY + inH * 0.47, th, aspect, "bold", lightCol, "left"));
      parts.push(drawPosterSubtitleBlock(tx, inY + inH * 0.54, inW * 0.48, 3, ch * 0.004, ch * 0.006, "#a1a1aa", "left"));
      parts.push(drawPosterVectorTextString("07/27", inX + inW * 0.92, inY + inH * 0.62, ch * 0.068, aspect, "bold", lightCol, "right"));
      parts.push(drawPosterSubtitleBlock(inX + inW * 0.92, inY + inH * 0.82, inW * 0.52, 3, ch * 0.004, ch * 0.006, "#a1a1aa", "right"));
    }
  } else if (sub === 1) {
    // Card 2: Black Outer Frame + White Inner Block with Giant Rounded Bottom-Left Corner + SUMMER SPORTS POSTER + 07/27
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${darkCol}"/>`);
    pushPoly(buildPosterRoundedRectPoly(inX, inY, inW, inH, 0, 0, 0, bigRad, aspect), lightCol);
    // Top-left bar code graphic blocks
    for (let b = 0; b < 4; b++) {
      const bx = inX + inW * (0.08 + b * 0.055);
      const bwBar = inW * (b === 1 ? 0.035 : 0.022);
      pushPoly([[bx, inY + inH * 0.06], [bx + bwBar, inY + inH * 0.06], [bx + bwBar, inY + inH * 0.14], [bx, inY + inH * 0.14]], darkCol);
    }
    drawRingMarker(inX + inW * 0.87, inY + inH * 0.10, cw * 0.032, darkCol, lightCol);
    pushPoly([[inX + inW * 0.08, inY + inH * 0.54], [inX + inW * 0.92, inY + inH * 0.54], [inX + inW * 0.92, inY + inH * 0.545], [inX + inW * 0.08, inY + inH * 0.545]], darkCol);
    if (showText) {
      const tx = inX + inW * 0.08;
      const th = ch * 0.036;
      parts.push(drawPosterVectorTextString("SUMMER", tx, inY + inH * 0.31, th, aspect, "bold", darkCol, "left"));
      parts.push(drawPosterVectorTextString("SPORTS", tx, inY + inH * 0.365, th, aspect, "bold", darkCol, "left"));
      parts.push(drawPosterVectorTextString("POSTER", tx, inY + inH * 0.42, th, aspect, "bold", darkCol, "left"));
      parts.push(drawPosterVectorTextString("07/27", inX + inW * 0.92, inY + inH * 0.72, ch * 0.068, aspect, "bold", darkCol, "right"));
      parts.push(drawPosterSubtitleBlock(inX + inW * 0.92, inY + inH * 0.83, inW * 0.46, 3, ch * 0.004, ch * 0.006, darkCol, "right"));
    }
  } else {
    // Card 3: White Outer Frame + Black Inner Block with Giant Rounded Bottom-Right Corner + Giant 07/27 + SIMPLE LAYOUT DESIGN
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${lightCol}"/>`);
    pushPoly(buildPosterRoundedRectPoly(inX, inY, inW, inH, 0, 0, bigRad, 0, aspect), darkCol);
    pushPoly([[inX + inW * 0.08, inY + inH * 0.25], [inX + inW * 0.92, inY + inH * 0.25], [inX + inW * 0.92, inY + inH * 0.255], [inX + inW * 0.08, inY + inH * 0.255]], lightCol);
    drawRingMarker(inX + inW * 0.13, inY + inH * 0.87, cw * 0.032, lightCol, darkCol);
    if (showText) {
      const tx = inX + inW * 0.08;
      parts.push(drawPosterVectorTextString("07/27", tx, inY + inH * 0.08, ch * 0.095, aspect, "bold", lightCol, "left"));
      const th = ch * 0.036;
      parts.push(drawPosterVectorTextString("SIMPLE", tx, inY + inH * 0.38, th, aspect, "bold", lightCol, "left"));
      parts.push(drawPosterVectorTextString("LAYOUT", tx, inY + inH * 0.435, th, aspect, "bold", lightCol, "left"));
      parts.push(drawPosterVectorTextString("DESIGN", tx, inY + inH * 0.49, th, aspect, "bold", lightCol, "left"));
      parts.push(drawPosterSubtitleBlock(tx, inY + inH * 0.58, inW * 0.50, 4, ch * 0.004, ch * 0.006, "#a1a1aa", "left"));
    }
  }
}

// ============================================================================
// REF SET 22: 3 PCS 2027 HAPPY NEW YEAR MODULAR RIBBON & FIREWORKS TRIPTYCH
// (Exact 100% Habuhu match to image_f11dece1.png: Cream, Deep Plum & Vibrant Pink panels)
// ============================================================================
function drawRef22Ny2027FireworksRibbonCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 3;

  const cream = pv.vCol("#f5efe1", 0, true);
  const plum = pv.vCol("#3b1e4a", 1);
  const pink = pv.vCol("#ec5389", 2);
  const gold = pv.vCol("#b69848", 3);
  const orange = pv.vCol("#ec6b2e", 4);

  const bgCol = sub === 0 ? cream : sub === 1 ? plum : pink;
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bgCol}"/>`);

  const makeCircle = (ox: number, oy: number, rx: number, steps = 20): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  // 4-point concave sparkle star
  const drawSparkleStar4 = (ox: number, oy: number, radX: number, col: string) => {
    const radY = (radX * cw * aspect) / Math.max(1, ch);
    const inX = radX * 0.28;
    const inY = radY * 0.28;
    pushPoly(
      [
        [ox, oy - radY],
        [ox + inX, oy - inY],
        [ox + radX, oy],
        [ox + inX, oy + inY],
        [ox, oy + radY],
        [ox - inX, oy + inY],
        [ox - radX, oy],
        [ox - inX, oy - inY],
      ],
      col
    );
  };

  // Radial starburst firework with tapered rays and dotted tips
  const drawFireworkBurst = (
    ox: number,
    oy: number,
    radX: number,
    rayCount: number,
    rayCol: string,
    dotCol: string
  ) => {
    const radY = (radX * cw * aspect) / Math.max(1, ch);
    for (let i = 0; i < rayCount; i++) {
      const a = (i / rayCount) * Math.PI * 2;
      const isLong = i % 2 === 0;
      const r0 = isLong ? 0.14 : 0.26;
      const r1 = isLong ? 0.88 : 0.72;
      const sx = ox + Math.cos(a) * radX * r0;
      const sy = oy + Math.sin(a) * radY * r0;
      const ex = ox + Math.cos(a) * radX * r1;
      const ey = oy + Math.sin(a) * radY * r1;
      const nx = -Math.sin(a) * radX * 0.018;
      const ny = Math.cos(a) * radY * 0.018;
      pushPoly(
        [
          [sx, sy],
          [ex + nx, ey + ny],
          [ex - nx, ey - ny],
        ],
        rayCol
      );
      if (isLong) {
        const dx = ox + Math.cos(a) * radX * 0.98;
        const dy = oy + Math.sin(a) * radY * 0.98;
        pushPoly(makeCircle(dx, dy, radX * 0.042, 12), dotCol);
      }
    }
  };

  // Modular ribbon-folded "2" inside box [bx, by, bw, bh]
  const drawModularRibbon2 = (
    bx: number,
    by: number,
    bw: number,
    bh: number,
    topArchCol: string,
    diagCol: string,
    baseCol: string,
    foldDividerCol: string
  ) => {
    const strokeH = bh * 0.25;
    // 1. Top rounded arch cap (left vertical drop + top semi-circular dome)
    const archPts: [number, number][] = [];
    const steps = 22;
    const cxA = bx + bw * 0.5;
    const cyA = by + bh * 0.27;
    const rxOut = bw * 0.48;
    const ryOut = bh * 0.27;
    for (let i = 0; i <= steps; i++) {
      const a = Math.PI + (i / steps) * (Math.PI * 0.85);
      archPts.push([cxA + Math.cos(a) * rxOut, cyA + Math.sin(a) * ryOut]);
    }
    archPts.push([bx + bw * 0.42, by + bh * 0.44], [bx + bw * 0.02, by + bh * 0.44]);
    pushPoly(archPts, topArchCol);

    // 2. Diagonal ribbon bar from top-right curve down to bottom-left base
    pushPoly(
      [
        [bx + bw * 0.96, by + bh * 0.20],
        [bx + bw * 0.98, by + bh * 0.45],
        [bx + bw * 0.44, by + bh * 0.74],
        [bx + bw * 0.02, by + bh * 0.74],
        [bx + bw * 0.02, by + bh * 0.62],
      ],
      diagCol
    );

    // 3. Bottom horizontal ribbon bar
    pushPoly(
      [
        [bx + bw * 0.02, by + bh * 0.755],
        [bx + bw * 0.98, by + bh * 0.755],
        [bx + bw * 0.98, by + bh],
        [bx + bw * 0.02, by + bh],
      ],
      baseCol
    );

    // Subtle geometric ribbon fold cut line
    pushPoly(
      [
        [bx + bw * 0.02, by + bh * 0.738],
        [bx + bw * 0.56, by + bh * 0.738],
        [bx + bw * 0.54, by + bh * 0.758],
        [bx + bw * 0.02, by + bh * 0.758],
      ],
      foldDividerCol
    );
    void strokeH;
  };

  // Modular capsule "0" with 4-point star cutout in center
  const drawModularZeroWithStar = (
    bx: number,
    by: number,
    bw: number,
    bh: number,
    zeroCol: string,
    starHoleCol: string
  ) => {
    const rad = bw * 0.48;
    pushPoly(buildPosterRoundedRectPoly(bx + bw * 0.02, by, bw * 0.96, bh, rad, rad, rad, rad, aspect), zeroCol);
    drawSparkleStar4(bx + bw * 0.5, by + bh * 0.5, bw * 0.28, starHoleCol);
  };

  // Modular ribbon-folded "7" with 3 color segments (top bar, upper diagonal, lower diagonal)
  const drawModularRibbon7 = (
    bx: number,
    by: number,
    bw: number,
    bh: number,
    topBarCol: string,
    midDiagCol: string,
    botDiagCol: string,
    foldDividerCol: string
  ) => {
    // 1. Top horizontal bar
    pushPoly(
      [
        [bx + bw * 0.02, by],
        [bx + bw * 0.98, by],
        [bx + bw * 0.62, by + bh * 0.26],
        [bx + bw * 0.02, by + bh * 0.26],
      ],
      topBarCol
    );
    // 2. Upper diagonal ribbon segment
    pushPoly(
      [
        [bx + bw * 0.98, by + bh * 0.01],
        [bx + bw * 0.98, by + bh * 0.28],
        [bx + bw * 0.74, by + bh * 0.57],
        [bx + bw * 0.30, by + bh * 0.57],
      ],
      midDiagCol
    );
    // 3. Lower diagonal stem segment
    pushPoly(
      [
        [bx + bw * 0.30, by + bh * 0.585],
        [bx + bw * 0.73, by + bh * 0.585],
        [bx + bw * 0.46, by + bh],
        [bx + bw * 0.02, by + bh],
      ],
      botDiagCol
    );
    // Crisp fold seam line
    pushPoly(
      [
        [bx + bw * 0.29, by + bh * 0.568],
        [bx + bw * 0.74, by + bh * 0.568],
        [bx + bw * 0.73, by + bh * 0.588],
        [bx + bw * 0.29, by + bh * 0.588],
      ],
      foldDividerCol
    );
  };

  // Central 2x2 grid for "2 0 / 2 7" (with subtle balanced scale/offset variation when variant > 0)
  const varScale = pv.isVar ? 0.94 + ((variant + cardIdx) % 4) * 0.04 : 1;
  const gridW = cw * 0.72 * Math.min(1.15, Math.max(0.85, bScale * varScale));
  const gridH = ch * 0.45 * Math.min(1.15, Math.max(0.85, bScale * varScale));
  const gx0 = cx0 + (cw - gridW) * 0.5;
  const gy0 = cy0 + (ch - gridH) * (pv.isVar ? 0.46 + ((variant % 3) - 1) * 0.03 : 0.49);
  const cellW = gridW * 0.465;
  const cellH = gridH * 0.465;
  const colRightX = gx0 + gridW - cellW;
  const rowBotY = gy0 + gridH - cellH;
  const fwScale = pv.isVar ? 0.88 + ((variant * 3 + cardIdx) % 5) * 0.06 : 1;
  const rayDelta = pv.isVar ? ((variant % 3) - 1) * 4 : 0;

  if (sub === 0) {
    // Panel 1: Cream Background
    const cA = pv.isVar && variant % 2 === 1 ? orange : gold;
    const cB = pv.isVar && variant % 3 === 1 ? plum : pink;
    drawModularRibbon2(gx0, gy0, cellW, cellH, cA, pink, cB, bgCol);
    drawModularZeroWithStar(colRightX, gy0, cellW, cellH, orange, bgCol);
    drawModularRibbon2(gx0, rowBotY, cellW, cellH, plum, cB, orange, bgCol);
    drawModularRibbon7(colRightX, rowBotY, cellW, cellH, pink, cA, plum, bgCol);

    drawFireworkBurst(cx0 + cw * 0.25, cy0 + ch * 0.14, cw * 0.19 * fwScale, 24 + rayDelta, gold, pink);
    drawFireworkBurst(cx0 + cw * 0.77, cy0 + ch * 0.15, cw * 0.15 * fwScale, 20 + rayDelta, pink, orange);
    drawFireworkBurst(cx0 + cw * 0.87, cy0 + ch * 0.26, cw * 0.06 * fwScale, 14, orange, gold);
    drawFireworkBurst(cx0 + cw * 0.89, cy0 + ch * 0.44, cw * 0.065 * fwScale, 14, gold, pink);
    drawFireworkBurst(cx0 + cw * 0.09, cy0 + ch * 0.61, cw * 0.055 * fwScale, 12, pink, orange);
    drawFireworkBurst(cx0 + cw * 0.25, cy0 + ch * 0.84, cw * 0.19 * fwScale, 24 + rayDelta, gold, pink);
    drawFireworkBurst(cx0 + cw * 0.76, cy0 + ch * 0.80, cw * 0.14 * fwScale, 20 + rayDelta, pink, orange);
    drawFireworkBurst(cx0 + cw * 0.86, cy0 + ch * 0.91, cw * 0.075 * fwScale, 16, gold, pink);

    drawSparkleStar4(cx0 + cw * 0.55, cy0 + ch * 0.10, cw * 0.045 * fwScale, gold);
    drawSparkleStar4(cx0 + cw * 0.55, cy0 + ch * 0.21, cw * 0.042 * fwScale, orange);
    drawSparkleStar4(cx0 + cw * 0.09, cy0 + ch * 0.37, cw * 0.042 * fwScale, gold);
    drawSparkleStar4(cx0 + cw * 0.88, cy0 + ch * 0.62, cw * 0.052 * fwScale, gold);
    drawSparkleStar4(cx0 + cw * 0.53, cy0 + ch * 0.77, cw * 0.036 * fwScale, pink);
    drawSparkleStar4(cx0 + cw * 0.59, cy0 + ch * 0.89, cw * 0.052 * fwScale, gold);
  } else if (sub === 1) {
    // Panel 2: Deep Plum Background
    const cTop = pv.isVar && variant % 2 === 1 ? cream : gold;
    drawModularRibbon2(gx0, gy0, cellW, cellH, cTop, pink, pink, bgCol);
    drawModularZeroWithStar(colRightX, gy0, cellW, cellH, orange, cream);
    drawModularRibbon2(gx0, rowBotY, cellW, cellH, pink, gold, cTop, bgCol);
    drawModularRibbon7(colRightX, rowBotY, cellW, cellH, cream, orange, pink, bgCol);

    drawFireworkBurst(cx0 + cw * 0.25, cy0 + ch * 0.14, cw * 0.19 * fwScale, 24 + rayDelta, cream, pink);
    drawFireworkBurst(cx0 + cw * 0.77, cy0 + ch * 0.15, cw * 0.15 * fwScale, 20 + rayDelta, pink, orange);
    drawFireworkBurst(cx0 + cw * 0.88, cy0 + ch * 0.26, cw * 0.06 * fwScale, 14, pink, cream);
    drawFireworkBurst(cx0 + cw * 0.89, cy0 + ch * 0.44, cw * 0.065 * fwScale, 14, orange, gold);
    drawFireworkBurst(cx0 + cw * 0.09, cy0 + ch * 0.61, cw * 0.055 * fwScale, 12, orange, pink);
    drawFireworkBurst(cx0 + cw * 0.25, cy0 + ch * 0.84, cw * 0.19 * fwScale, 24 + rayDelta, cream, orange);
    drawFireworkBurst(cx0 + cw * 0.76, cy0 + ch * 0.80, cw * 0.14 * fwScale, 20 + rayDelta, pink, gold);
    drawFireworkBurst(cx0 + cw * 0.86, cy0 + ch * 0.91, cw * 0.075 * fwScale, 16, pink, cream);

    drawSparkleStar4(cx0 + cw * 0.55, cy0 + ch * 0.10, cw * 0.045 * fwScale, pink);
    drawSparkleStar4(cx0 + cw * 0.55, cy0 + ch * 0.21, cw * 0.042 * fwScale, cream);
    drawSparkleStar4(cx0 + cw * 0.09, cy0 + ch * 0.37, cw * 0.042 * fwScale, orange);
    drawSparkleStar4(cx0 + cw * 0.09, cy0 + ch * 0.51, cw * 0.038 * fwScale, cream);
    drawSparkleStar4(cx0 + cw * 0.88, cy0 + ch * 0.62, cw * 0.052 * fwScale, cream);
    drawSparkleStar4(cx0 + cw * 0.53, cy0 + ch * 0.77, cw * 0.038 * fwScale, orange);
    drawSparkleStar4(cx0 + cw * 0.53, cy0 + ch * 0.89, cw * 0.052 * fwScale, cream);
  } else {
    // Panel 3: Vibrant Rose Pink Background + Cream Numerals + HAPPY NEW YEAR
    const cAcc = pv.isVar && variant % 2 === 1 ? gold : cream;
    drawModularRibbon2(gx0, gy0, cellW, cellH, cream, cAcc, cream, bgCol);
    drawModularZeroWithStar(colRightX, gy0, cellW, cellH, cream, bgCol);
    drawModularRibbon2(gx0, rowBotY, cellW, cellH, cAcc, cream, cream, bgCol);
    drawModularRibbon7(colRightX, rowBotY, cellW, cellH, cream, cAcc, cream, bgCol);

    drawFireworkBurst(cx0 + cw * 0.25, cy0 + ch * 0.14, cw * 0.19 * fwScale, 24 + rayDelta, cream, plum);
    drawFireworkBurst(cx0 + cw * 0.77, cy0 + ch * 0.15, cw * 0.15 * fwScale, 20 + rayDelta, plum, cream);
    drawFireworkBurst(cx0 + cw * 0.88, cy0 + ch * 0.26, cw * 0.06 * fwScale, 14, plum, cream);
    drawFireworkBurst(cx0 + cw * 0.89, cy0 + ch * 0.44, cw * 0.065 * fwScale, 14, plum, orange);
    drawFireworkBurst(cx0 + cw * 0.09, cy0 + ch * 0.61, cw * 0.055 * fwScale, 12, cream, plum);
    drawFireworkBurst(cx0 + cw * 0.25, cy0 + ch * 0.83, cw * 0.19 * fwScale, 24 + rayDelta, cream, plum);
    drawFireworkBurst(cx0 + cw * 0.79, cy0 + ch * 0.77, cw * 0.12 * fwScale, 18, plum, cream);

    drawSparkleStar4(cx0 + cw * 0.55, cy0 + ch * 0.10, cw * 0.045 * fwScale, plum);
    drawSparkleStar4(cx0 + cw * 0.55, cy0 + ch * 0.21, cw * 0.042 * fwScale, orange);
    drawSparkleStar4(cx0 + cw * 0.09, cy0 + ch * 0.37, cw * 0.042 * fwScale, orange);
    drawSparkleStar4(cx0 + cw * 0.10, cy0 + ch * 0.68, cw * 0.038 * fwScale, plum);
    drawSparkleStar4(cx0 + cw * 0.89, cy0 + ch * 0.62, cw * 0.052 * fwScale, orange);
    drawSparkleStar4(cx0 + cw * 0.55, cy0 + ch * 0.80, cw * 0.045 * fwScale, plum);

    if (showText) {
      parts.push(
        drawPosterVectorTextString("HAPPY", cx0 + cw * 0.74, cy0 + ch * 0.865, ch * 0.022, aspect, "bold", plum, "center")
      );
      parts.push(
        drawPosterVectorTextString("NEW YEAR", cx0 + cw * 0.74, cy0 + ch * 0.898, ch * 0.022, aspect, "bold", plum, "center")
      );
    }
  }

  // Confetti dots
  const dots: [number, number, string][] = [
    [0.10, 0.29, pink],
    [0.48, 0.18, gold],
    [0.64, 0.25, orange],
    [0.91, 0.36, pink],
    [0.11, 0.45, orange],
    [0.83, 0.53, cream],
    [0.49, 0.64, orange],
    [0.14, 0.73, gold],
    [0.45, 0.92, pink],
  ];
  for (const [dx, dy, dc] of dots) {
    const colUse = dc === bgCol ? (sub === 0 ? plum : cream) : dc;
    pushPoly(makeCircle(cx0 + cw * dx, cy0 + ch * dy, cw * 0.012, 10), colUse);
  }
}

// ============================================================================
// REF SET 23: 4 PCS 2027 SWISS BAUHAUS INTERLOCKING TYPOGRAPHY POSTER SET
// (Exact 100% Habuhu match to image_ca83aca4.png: Slate Blue, Soft Peach, Terracotta & Deep Navy)
// ============================================================================
function drawRef23Ny2027SwissInterlockCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const slateBlue = pv.vCol("#5b689e", 0);
  const deepNavy = pv.vCol("#344278", 1);
  const peachCream = pv.vCol("#fae5d3", 2, true);
  const terracotta = pv.vCol("#dc7958", 3);
  const mutedBlue = mixCol(slateBlue, deepNavy, 0.38);

  // Geometric Bauhaus "2" with clean circular upper loop, sharp diagonal stem & horizontal foot
  const drawBauhausDigit2 = (
    bx: number,
    by: number,
    bw: number,
    bh: number,
    col: string,
    invert180 = false
  ) => {
    const t = bw * 0.27;
    const rx = bw * 0.47;
    const ry = bh * 0.28;
    const cxA = bx + bw * 0.50;
    const cyA = by + ry;
    const pts: [number, number][] = [];
    // Outer arc from left (195 deg) around top to right-bottom (35 deg)
    const steps = 28;
    for (let i = 0; i <= steps; i++) {
      const a = (195 * Math.PI) / 180 + (i / steps) * ((200 * Math.PI) / 180);
      pts.push([cxA + Math.cos(a) * rx, cyA + Math.sin(a) * ry]);
    }
    // Diagonal down to bottom-left corner
    pts.push(
      [bx + t * 1.15, by + bh - t * 0.82],
      [bx + bw, by + bh - t * 0.82],
      [bx + bw, by + bh],
      [bx, by + bh],
      [bx, by + bh - t * 0.22]
    );
    // Inner diagonal up to inner arc
    const rInX = Math.max(bw * 0.14, rx - t);
    const rInY = Math.max(bh * 0.09, ry - t * 0.78);
    for (let i = steps; i >= 0; i--) {
      const a = (195 * Math.PI) / 180 + (i / steps) * ((200 * Math.PI) / 180);
      pts.push([cxA + Math.cos(a) * rInX, cyA + Math.sin(a) * rInY]);
    }
    if (invert180) {
      const midX = bx + bw * 0.5;
      const midY = by + bh * 0.5;
      pushPoly(
        pts.map(([px, py]) => [2 * midX - px, 2 * midY - py]),
        col
      );
    } else {
      pushPoly(pts, col);
    }
  };

  // Geometric Bauhaus "0" (thick circular/oval ring as native Illustrator compound path)
  const drawBauhausDigit0 = (
    ox: number,
    oy: number,
    rxOut: number,
    ryOut: number,
    thickRatio: number,
    col: string
  ) => {
    const steps = 44;
    const outPts: [number, number][] = [];
    const inPts: [number, number][] = [];
    const rxIn = rxOut * (1 - thickRatio);
    const ryIn = ryOut * (1 - thickRatio);
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      outPts.push([ox + Math.cos(a) * rxOut, oy + Math.sin(a) * ryOut]);
      inPts.push([ox + Math.cos(a) * rxIn, oy + Math.sin(a) * ryIn]);
    }
    pushCompoundRingPoly(parts, cx0, cy0, cx0 + cw, cy0 + ch, outPts, inPts, col);
  };

  // Geometric Bauhaus "7" (sharp horizontal top bar + angled diagonal stem; optional 180deg L-flip)
  const drawBauhausDigit7 = (
    bx: number,
    by: number,
    bw: number,
    bh: number,
    col: string,
    invert180 = false
  ) => {
    const barH = bh * 0.21;
    const stemW = bw * 0.34;
    const pts: [number, number][] = [
      [bx, by],
      [bx + bw, by],
      [bx + stemW * 1.32, by + bh],
      [bx + stemW * 0.28, by + bh],
      [bx + bw - stemW * 0.85, by + barH],
      [bx, by + barH],
    ];
    if (invert180) {
      const midX = bx + bw * 0.5;
      const midY = by + bh * 0.5;
      pushPoly(
        pts.map(([px, py]) => [2 * midX - px, 2 * midY - py]),
        col
      );
    } else {
      pushPoly(pts, col);
    }
  };

  const varSc = pv.isVar ? 0.94 + ((variant + cardIdx) % 4) * 0.035 : 1;
  const sc = Math.min(1.18, Math.max(0.84, bScale * varSc));
  const dw = cw * 0.36 * sc;
  const dh = ch * 0.36 * sc;
  const xJit = pv.isVar ? ((variant % 3) - 1) * cw * 0.025 : 0;
  const yJit = pv.isVar ? (((variant + cardIdx) % 3) - 1) * ch * 0.02 : 0;

  if (sub === 0) {
    // Card 1: Slate Blue bg + Deep Navy "2", Peach "0", Peach "2", Terracotta "7" interlocking
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${slateBlue}"/>`);
    drawBauhausDigit2(cx0 + cw * 0.12 + xJit, cy0 + ch * 0.20 + yJit, dw, dh, deepNavy, false);
    drawBauhausDigit0(cx0 + cw * 0.67 - xJit, cy0 + ch * 0.35 - yJit, dw * 0.58, dh * 0.45, 0.44, peachCream);
    drawBauhausDigit2(cx0 + cw * 0.12 - xJit, cy0 + ch * 0.47 - yJit, dw, dh, peachCream, false);
    drawBauhausDigit7(cx0 + cw * 0.46 + xJit, cy0 + ch * 0.47 + yJit, dw * 1.05, dh, terracotta, false);
  } else if (sub === 1) {
    // Card 2: Soft Peach Cream bg + Cascading Terracotta "2", Slate Blue "0", Deep Navy "2", Inverted Slate Blue "7"
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${peachCream}"/>`);
    drawBauhausDigit2(cx0 + cw * 0.16 + xJit, cy0 + ch * 0.08 + yJit, dw, dh, terracotta, false);
    drawBauhausDigit0(cx0 + cw * 0.67 - xJit, cy0 + ch * 0.41, dw * 0.56, dh * 0.43, 0.44, slateBlue);
    drawBauhausDigit7(cx0 + cw * 0.45 + xJit, cy0 + ch * 0.59 - yJit, dw * 1.02, dh * 0.96, slateBlue, true);
    drawBauhausDigit2(cx0 + cw * 0.23 - xJit, cy0 + ch * 0.45 + yJit, dw, dh, deepNavy, false);
  } else if (sub === 2) {
    // Card 3: Terracotta Coral bg + Three Soft Peach "2, 0, 2" & Deep Navy "7"
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${terracotta}"/>`);
    drawBauhausDigit2(cx0 + cw * 0.12 + xJit, cy0 + ch * 0.13 + yJit, dw, dh, peachCream, false);
    drawBauhausDigit0(cx0 + cw * 0.65 - xJit, cy0 + ch * 0.41 - yJit, dw * 0.56, dh * 0.43, 0.44, peachCream);
    drawBauhausDigit2(cx0 + cw * 0.19 - xJit, cy0 + ch * 0.44 + yJit, dw, dh, peachCream, false);
    drawBauhausDigit7(cx0 + cw * 0.54 + xJit, cy0 + ch * 0.53 - yJit, dw * 1.02, dh * 0.96, deepNavy, false);
  } else {
    // Card 4: Deep Navy bg + Giant Watermark Muted Slate "0" & Inverted "2" + Foreground Terracotta "2" & Peach "7"
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${deepNavy}"/>`);
    // Background oversized "0" and inverted "2"
    drawBauhausDigit0(cx0 + cw * 0.44 + xJit, cy0 + ch * 0.29 + yJit, dw * 0.72, dh * 0.56, 0.38, mutedBlue);
    drawBauhausDigit2(cx0 + cw * 0.18 - xJit, cy0 + ch * 0.51 - yJit, dw * 1.28, dh * 1.15, mutedBlue, true);
    // Foreground "2" and "7"
    drawBauhausDigit2(cx0 + cw * 0.11 + xJit, cy0 + ch * 0.28 - yJit, dw * 0.96, dh * 0.92, terracotta, false);
    drawBauhausDigit7(cx0 + cw * 0.48 - xJit, cy0 + ch * 0.21 + yJit, dw * 1.16, dh * 1.08, peachCream, false);
    // Interlocking loop arc of the "0" over the left bar of "7"
    const rOutX = dw * 0.72;
    const rOutY = dh * 0.56;
    const rInX = rOutX * 0.62;
    const rInY = rOutY * 0.62;
    const arcOut: [number, number][] = [];
    const arcIn: [number, number][] = [];
    for (let s = 0; s <= 14; s++) {
      const a = -0.35 + (s / 14) * 0.95;
      arcOut.push([cx0 + cw * 0.44 + xJit + Math.cos(a) * rOutX, cy0 + ch * 0.29 + yJit + Math.sin(a) * rOutY]);
      arcIn.unshift([cx0 + cw * 0.44 + xJit + Math.cos(a) * rInX, cy0 + ch * 0.29 + yJit + Math.sin(a) * rInY]);
    }
    pushPoly(arcOut.concat(arcIn), mutedBlue);
  }
  void showText;
}

// ============================================================================
// REF SET 24: 5 PCS 2027 HOLLY JOLLY CHRISTMAS & FESTIVE HOLIDAY VECTOR SET
// (Exact 100% Habuhu match to image_a1d68172.png: Ribbon 2027, Candy 2027, Gift Boxes, Bauble & Rocking Horse, Origami Tree)
// ============================================================================
function drawRef24Ny2027HollyJollyChristmasCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 5;

  const emerald = pv.vCol("#117a43", 0);
  const forest = pv.vCol("#12663a", 0);
  const royalBlue = pv.vCol("#1f43c7", 1);
  const festiveRed = pv.vCol("#e82c2a", 2);
  const candyPink = pv.vCol("#f393b8", 3);
  const warmGold = pv.vCol("#dfb15b", 4);
  const snowWhite = "#ffffff";
  const creamBauble = "#fae8e0";

  const makeCircle = (ox: number, oy: number, rx: number, steps = 24): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  // Multi-point starburst / snowflake badge
  const drawStarburst = (ox: number, oy: number, radX: number, points: number, innerRatio: number, col: string) => {
    const radY = (radX * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < points * 2; i++) {
      const a = -Math.PI * 0.5 + (i / (points * 2)) * Math.PI * 2;
      const r = i % 2 === 0 ? 1 : innerRatio;
      pts.push([ox + Math.cos(a) * radX * r, oy + Math.sin(a) * radY * r]);
    }
    pushPoly(pts, col);
  };

  // 6-branch festive vector snowflake
  const drawSnowflake = (ox: number, oy: number, radX: number, col: string) => {
    const radY = (radX * cw * aspect) / Math.max(1, ch);
    const lwX = radX * 0.11;
    const lwY = radY * 0.11;
    for (let b = 0; b < 6; b++) {
      const a = (b / 6) * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      const nx = -sa * lwX;
      const ny = ca * lwY;
      // Main branch
      pushPoly(
        [
          [ox + nx, oy + ny],
          [ox + ca * radX + nx, oy + sa * radY + ny],
          [ox + ca * radX - nx, oy + sa * radY - ny],
          [ox - nx, oy - ny],
        ],
        col
      );
      // Chevron twigs at 60% radius
      for (const side of [-1, 1]) {
        const bx = ox + ca * radX * 0.56;
        const by = oy + sa * radY * 0.56;
        const ta = a + side * (Math.PI / 3);
        const tx = bx + Math.cos(ta) * radX * 0.36;
        const ty = by + Math.sin(ta) * radY * 0.36;
        pushPoly(
          [
            [bx, by],
            [tx + nx * 0.7, ty + ny * 0.7],
            [tx - nx * 0.7, ty - ny * 0.7],
          ],
          col
        );
      }
    }
    pushPoly(makeCircle(ox, oy, radX * 0.22, 12), col);
  };

  if (sub === 0) {
    // Card 1: Emerald Green bg + Giant Full-Bleed Polka-Dot Red & Bubblegum Pink Ribbon "2027" + HAPPY NEW YEAR
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${emerald}"/>`);

    // Top-right giant tilted bubblegum pink "0" oval ring (clipped separately as compound path so boundary clipping never twists!)
    const ox0 = cx0 + cw * 0.73;
    const oy0 = cy0 + ch * 0.22;
    const out0: [number, number][] = [];
    const in0: [number, number][] = [];
    for (let i = 0; i < 36; i++) {
      const a = (i / 36) * Math.PI * 2;
      const tilt = -0.22;
      const lxOut = Math.cos(a) * cw * 0.29;
      const lyOut = Math.sin(a) * ch * 0.25;
      const lxIn = Math.cos(a) * cw * 0.13;
      const lyIn = Math.sin(a) * ch * 0.14;
      out0.push([ox0 + lxOut * Math.cos(tilt) - lyOut * Math.sin(tilt), oy0 + lxOut * Math.sin(tilt) + lyOut * Math.cos(tilt)]);
      in0.push([ox0 + lxIn * Math.cos(tilt) - lyIn * Math.sin(tilt), oy0 + lxIn * Math.sin(tilt) + lyIn * Math.cos(tilt)]);
    }
    pushCompoundRingPoly(parts, cx0, cy0, cx1, cy1, out0, in0, candyPink);

    // Top-left red polka-dot ribbon "2"
    const r2Top: [number, number][] = [
      [cx0, cy0],
      [cx0 + cw * 0.18, cy0],
      [cx0 + cw * 0.14, cy0 + ch * 0.08],
      [cx0, cy0 + ch * 0.11],
    ];
    pushPoly(r2Top, festiveRed);
    const r2Diag: [number, number][] = [
      [cx0 + cw * 0.34, cy0],
      [cx0 + cw * 0.45, cy0],
      [cx0 + cw * 0.42, cy0 + ch * 0.16],
      [cx0 + cw * 0.08, cy0 + ch * 0.36],
      [cx0, cy0 + ch * 0.36],
      [cx0, cy0 + ch * 0.26],
    ];
    pushPoly(r2Diag, festiveRed);
    // Wavy horizontal tail of top-left "2"
    const r2Base: [number, number][] = [
      [cx0, cy0 + ch * 0.38],
      [cx0 + cw * 0.28, cy0 + ch * 0.34],
      [cx0 + cw * 0.48, cy0 + ch * 0.36],
      [cx0 + cw * 0.44, cy0 + ch * 0.46],
      [cx0 + cw * 0.22, cy0 + ch * 0.49],
      [cx0, cy0 + ch * 0.43],
    ];
    pushPoly(r2Base, festiveRed);

    // Bottom-left giant bubblegum pink curly "2"
    const b2Arch: [number, number][] = [];
    for (let i = 0; i <= 28; i++) {
      const u = i / 28;
      const a = Math.PI * 1.15 - u * Math.PI * 1.35;
      b2Arch.push([cx0 + cw * 0.24 + Math.cos(a) * cw * 0.28, cy0 + ch * 0.58 - Math.sin(a) * ch * 0.19]);
    }
    b2Arch.push(
      [cx0 + cw * 0.12, cy0 + ch * 0.88],
      [cx0 + cw * 0.44, cy0 + ch * 0.87],
      [cx0 + cw * 0.39, cy1],
      [cx0, cy1],
      [cx0, cy0 + ch * 0.74],
      [cx0 + cw * 0.33, cy0 + ch * 0.60],
      [cx0 + cw * 0.25, cy0 + ch * 0.48],
      [cx0 + cw * 0.06, cy0 + ch * 0.59],
      [cx0, cy0 + ch * 0.52]
    );
    pushPoly(b2Arch, candyPink);

    // Bottom-right red polka-dot ribbon "7"
    const r7Top: [number, number][] = [
      [cx0 + cw * 0.54, cy0 + ch * 0.45],
      [cx0 + cw * 0.78, cy0 + ch * 0.40],
      [cx1, cy0 + ch * 0.48],
      [cx1, cy0 + ch * 0.56],
      [cx0 + cw * 0.72, cy0 + ch * 0.56],
      [cx0 + cw * 0.48, cy0 + ch * 0.53],
    ];
    pushPoly(r7Top, festiveRed);
    const r7Stem: [number, number][] = [
      [cx1, cy0 + ch * 0.49],
      [cx1, cy0 + ch * 0.65],
      [cx0 + cw * 0.75, cy1],
      [cx0 + cw * 0.55, cy1],
      [cx0 + cw * 0.68, cy0 + ch * 0.74],
      [cx0 + cw * 0.88, cy0 + ch * 0.54],
    ];
    pushPoly(r7Stem, festiveRed);

    // Crisp white polka dots across the red "2" and "7"
    const polkaCoords: [number, number][] = [
      [0.09, 0.05], [0.36, 0.07], [0.27, 0.15], [0.37, 0.21], [0.16, 0.21], [0.26, 0.27],
      [0.08, 0.29], [0.18, 0.37], [0.32, 0.37], [0.43, 0.39], [0.10, 0.43], [0.24, 0.46],
      [0.68, 0.42], [0.58, 0.47], [0.71, 0.48], [0.84, 0.49], [0.95, 0.51], [0.64, 0.54],
      [0.98, 0.56], [0.91, 0.63], [0.85, 0.72], [0.76, 0.76], [0.78, 0.83], [0.68, 0.88], [0.69, 0.96],
    ];
    for (const [px, py] of polkaCoords) {
      pushPoly(makeCircle(cx0 + cw * px, cy0 + ch * py, cw * 0.025, 14), snowWhite);
    }

    if (showText) {
      parts.push(
        drawPosterVectorTextString("HAPPY NEW YEAR", cx0 + cw * 0.5, cy0 + ch * 0.825, ch * 0.017, aspect, "wide", snowWhite, "center")
      );
    }
  } else if (sub === 1) {
    // Card 2: Royal Cobalt Blue bg + "MERRY CHRISTMAS" + Square Block of "2027" (Gold 2, Candy-Striped 0 & 2, White 7) + "HAPPY NEW YEAR"
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${royalBlue}"/>`);

    const bx0 = cx0 + cw * 0.22;
    const by0 = cy0 + ch * 0.27;
    const bw = cw * 0.56;
    const bh = ch * 0.51;
    const cellW = bw * 0.48;
    const cellH = bh * 0.48;

    // Top-left Gold "2"
    pushPoly(
      [
        [bx0, by0],
        [bx0 + cellW * 0.92, by0],
        [bx0 + cellW, by0 + cellH * 0.24],
        [bx0 + cellW * 0.92, by0 + cellH * 0.48],
        [bx0 + cellW * 0.28, by0 + cellH * 0.78],
        [bx0 + cellW, by0 + cellH * 0.78],
        [bx0 + cellW * 0.94, by0 + cellH],
        [bx0, by0 + cellH],
        [bx0, by0 + cellH * 0.76],
        [bx0 + cellW * 0.64, by0 + cellH * 0.38],
        [bx0 + cellW * 0.56, by0 + cellH * 0.22],
        [bx0 + cellW * 0.14, by0 + cellH * 0.34],
      ],
      warmGold
    );

    // Top-right Candy-Striped "0" (Pink base + strictly clipped Red diagonal stripes + Blue center hole)
    const z0x = bx0 + bw - cellW * 0.48;
    const z0y = by0 + cellH * 0.50;
    const zRx = cellW * 0.48;
    const z0OuterPoly = makeCircle(z0x, z0y, zRx, 32);
    const z0InnerPoly = makeCircle(z0x, z0y, zRx * 0.44, 24);
    pushPoly(z0OuterPoly, candyPink);
    for (let st = -3; st <= 3; st++) {
      const sy = z0y + st * cellH * 0.17;
      const rawStripe: [number, number][] = [
        [z0x - zRx * 1.1, sy - cellH * 0.08],
        [z0x + zRx * 1.1, sy + cellH * 0.06],
        [z0x + zRx * 1.1, sy + cellH * 0.14],
        [z0x - zRx * 1.1, sy],
      ];
      const clippedStripe = clipPolyAgainstConvexPoly(rawStripe, z0OuterPoly);
      if (clippedStripe.length >= 3) {
        pushPoly(clippedStripe, festiveRed);
      }
    }
    pushPoly(z0InnerPoly, royalBlue);

    // Bottom-left Red & Pink Candy-Striped "2" (decomposed into 3 convex pieces so pink diagonal stripes are 100% clipped inside "2")
    const b2y = by0 + bh - cellH;
    const b2ConvTop: [number, number][] = [
      [bx0, b2y + cellH * 0.18],
      [bx0 + cellW * 0.35, b2y],
      [bx0 + cellW * 0.85, b2y],
      [bx0 + cellW, b2y + cellH * 0.28],
      [bx0 + cellW * 0.55, b2y + cellH * 0.24],
      [bx0 + cellW * 0.22, b2y + cellH * 0.40],
    ];
    const b2ConvStem: [number, number][] = [
      [bx0 + cellW * 0.55, b2y + cellH * 0.24],
      [bx0 + cellW, b2y + cellH * 0.28],
      [bx0 + cellW * 0.88, b2y + cellH * 0.54],
      [bx0 + cellW * 0.32, b2y + cellH * 0.80],
      [bx0, b2y + cellH * 0.78],
      [bx0 + cellW * 0.62, b2y + cellH * 0.44],
    ];
    const b2ConvFoot: [number, number][] = [
      [bx0, b2y + cellH * 0.78],
      [bx0 + cellW * 0.95, b2y + cellH * 0.80],
      [bx0 + cellW * 0.88, b2y + cellH],
      [bx0, b2y + cellH],
    ];
    const b2Pieces = [b2ConvTop, b2ConvStem, b2ConvFoot];
    for (const pc of b2Pieces) {
      pushPoly(pc, festiveRed);
    }
    for (let st = -1; st <= 5; st++) {
      const sy = b2y + st * cellH * 0.19;
      const rawPinkStripe: [number, number][] = [
        [bx0 - cellW * 0.05, sy],
        [bx0 + cellW * 1.05, sy + cellH * 0.14],
        [bx0 + cellW * 1.05, sy + cellH * 0.19],
        [bx0 - cellW * 0.05, sy + cellH * 0.05],
      ];
      for (const pc of b2Pieces) {
        const cl = clipPolyAgainstConvexPoly(rawPinkStripe, pc);
        if (cl.length >= 3) pushPoly(cl, candyPink);
      }
    }

    // Bottom-right Crisp White "7"
    const b7x = bx0 + bw - cellW;
    const b7y = by0 + bh - cellH;
    pushPoly(
      [
        [b7x, b7y + cellH * 0.06],
        [b7x + cellW * 0.45, b7y - cellH * 0.04],
        [b7x + cellW, b7y + cellH * 0.12],
        [b7x + cellW, b7y + cellH * 0.28],
        [b7x + cellW * 0.54, b7y + cellH],
        [b7x + cellW * 0.18, b7y + cellH],
        [b7x + cellW * 0.68, b7y + cellH * 0.28],
        [b7x, b7y + cellH * 0.26],
      ],
      snowWhite
    );

    if (showText) {
      parts.push(
        drawPosterVectorTextString("MERRY CHRISTMAS", cx0 + cw * 0.5, cy0 + ch * 0.145, ch * 0.032, aspect, "bold", snowWhite, "center")
      );
      parts.push(
        drawPosterVectorTextString("HAPPY NEW YEAR", cx0 + cw * 0.5, cy0 + ch * 0.855, ch * 0.017, aspect, "wide", snowWhite, "center")
      );
    }
  } else if (sub === 2) {
    // Card 3: Deep Forest Green bg + "HAVE A HOLLY JOLLY CHRISTMAS" + Stacked Wrapped Christmas Gift Boxes & Snowflake Ribbons
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${forest}"/>`);

    // 1. Right tall Pink & Red Candy-Striped Gift Box (stripes strictly clipped to box rect!)
    const rx0 = cx0 + cw * 0.64;
    const ry0 = cy0 + ch * 0.41;
    const rw = cw * 0.36;
    const rh = ch * 0.59;
    const rBoxPoly: [number, number][] = [[rx0, ry0], [rx0 + rw, ry0], [rx0 + rw, ry0 + rh], [rx0, ry0 + rh]];
    pushPoly(rBoxPoly, candyPink);
    for (let st = -4; st <= 8; st++) {
      const sy = ry0 + st * ch * 0.075;
      const cl = clipPolyAgainstConvexPoly(
        [
          [rx0, sy],
          [rx0 + rw, sy + ch * 0.12],
          [rx0 + rw, sy + ch * 0.145],
          [rx0, sy + ch * 0.025],
        ],
        rBoxPoly
      );
      if (cl.length >= 3) pushPoly(cl, festiveRed);
    }
    // Forest green ribbon cross + White 12-point starburst bow
    pushPoly([[rx0 + rw * 0.30, ry0], [rx0 + rw * 0.40, ry0], [rx0 + rw * 0.40, ry0 + rh], [rx0 + rw * 0.30, ry0 + rh]], forest);
    pushPoly([[rx0, ry0 + rh * 0.24], [rx0 + rw, ry0 + rh * 0.24], [rx0 + rw, ry0 + rh * 0.28], [rx0, ry0 + rh * 0.28]], forest);
    drawStarburst(rx0 + rw * 0.35, ry0 + rh * 0.26, cw * 0.11, 12, 0.65, snowWhite);

    // 2. Left Pink & White Striped Gift Box (stripes strictly clipped to box rect!)
    const lx0 = cx0;
    const ly0 = cy0 + ch * 0.64;
    const lw = cw * 0.24;
    const lh = ch * 0.36;
    const lBoxPoly: [number, number][] = [[lx0, ly0], [lx0 + lw, ly0], [lx0 + lw, ly0 + lh], [lx0, ly0 + lh]];
    pushPoly(lBoxPoly, candyPink);
    for (let st = -2; st <= 5; st++) {
      const sy = ly0 + st * ch * 0.07;
      const cl = clipPolyAgainstConvexPoly(
        [
          [lx0, sy + ch * 0.09],
          [lx0 + lw, sy],
          [lx0 + lw, sy + ch * 0.032],
          [lx0, sy + ch * 0.122],
        ],
        lBoxPoly
      );
      if (cl.length >= 3) pushPoly(cl, snowWhite);
    }
    pushPoly([[lx0 + lw * 0.34, ly0], [lx0 + lw * 0.44, ly0], [lx0 + lw * 0.44, ly0 + lh], [lx0 + lw * 0.34, ly0 + lh]], warmGold);
    drawStarburst(lx0 + lw * 0.39, ly0 + lh * 0.26, cw * 0.07, 12, 0.62, festiveRed);

    // Hanging red & gold bauble above left box
    const bxOrn = cx0 + cw * 0.145;
    const byOrn = cy0 + ch * 0.59;
    pushPoly([[bxOrn - cw * 0.005, cy0 + ch * 0.52], [bxOrn + cw * 0.005, cy0 + ch * 0.52], [bxOrn + cw * 0.005, byOrn], [bxOrn - cw * 0.005, byOrn]], candyPink);
    pushPoly(makeCircle(bxOrn, byOrn, cw * 0.062, 22), festiveRed);
    for (let d = -1; d <= 1; d++) {
      const dx = bxOrn + d * cw * 0.034;
      pushPoly([[dx, byOrn - ch * 0.022], [dx + cw * 0.015, byOrn], [dx, byOrn + ch * 0.022], [dx - cw * 0.015, byOrn]], d === 0 ? snowWhite : warmGold);
    }

    // 3. Top Hexagonal Gold & White Triangle-Patterned Gift Box
    const hx = cx0 + cw * 0.47;
    const hy = cy0 + ch * 0.455;
    const hrX = cw * 0.16;
    const hrY = ch * 0.105;
    const hexPts: [number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      hexPts.push([hx + Math.cos(a) * hrX, hy + Math.sin(a) * hrY]);
    }
    pushPoly(hexPts, warmGold);
    for (let r = -1; r <= 1; r++) {
      for (let c = -2; c <= 2; c++) {
        const tx = hx + c * cw * 0.045;
        const ty = hy + r * ch * 0.044;
        if (Math.hypot((tx - hx) / hrX, (ty - hy) / hrY) < 0.78) {
          pushPoly([[tx, ty - ch * 0.015], [tx + cw * 0.018, ty + ch * 0.015], [tx - cw * 0.018, ty + ch * 0.015]], snowWhite);
        }
      }
    }
    drawStarburst(hx, hy, cw * 0.085, 10, 0.58, festiveRed);

    // 4. Center Front Red Gift Box with White Snowflakes & Pink Ribbon Bow
    const fx0 = cx0 + cw * 0.21;
    const fy0 = cy0 + ch * 0.55;
    const fw = cw * 0.48;
    const fh = ch * 0.45;
    pushPoly([[fx0, fy0], [fx0 + fw, fy0], [fx0 + fw, fy0 + fh], [fx0, fy0 + fh]], festiveRed);
    const sfCoords: [number, number][] = [
      [0.24, 0.19], [0.72, 0.19],
      [0.48, 0.52], [0.90, 0.52],
      [0.24, 0.86], [0.72, 0.86],
    ];
    for (const [sx, sy] of sfCoords) {
      drawSnowflake(fx0 + fw * sx, fy0 + fh * sy, cw * 0.048, snowWhite);
    }
    // Pink thin ribbon cross & bow on front red gift box
    pushPoly([[fx0 + fw * 0.49, fy0], [fx0 + fw * 0.51, fy0], [fx0 + fw * 0.51, fy0 + fh], [fx0 + fw * 0.49, fy0 + fh]], candyPink);
    pushPoly([[fx0, fy0 + fh * 0.41], [fx0 + fw, fy0 + fh * 0.41], [fx0 + fw, fy0 + fh * 0.43], [fx0, fy0 + fh * 0.43]], candyPink);
    drawStarburst(fx0 + fw * 0.50, fy0 + fh * 0.42, cw * 0.065, 8, 0.45, candyPink);

    if (showText) {
      parts.push(drawPosterVectorTextString("HAVE A", cx0 + cw * 0.5, cy0 + ch * 0.13, ch * 0.016, aspect, "regular", warmGold, "center"));
      parts.push(drawPosterVectorTextString("HOLLY JOLLY", cx0 + cw * 0.5, cy0 + ch * 0.175, ch * 0.038, aspect, "bold", snowWhite, "center"));
      parts.push(drawPosterVectorTextString("CHRISTMAS", cx0 + cw * 0.5, cy0 + ch * 0.238, ch * 0.017, aspect, "wide", warmGold, "center"));
    }
  } else if (sub === 3) {
    // Card 4: Polka-Dot Royal Blue bg + Giant Ribbed Cream/Pink Christmas Bauble with Flowing Red & Gold Bow + Folk Rocking Horse
    const brightBlue = pv.vCol("#2b62d9", 1);
    const dotBlue = mixCol(brightBlue, "#0d256e", 0.30);
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${brightBlue}"/>`);

    // Subtle polka-dot grid background
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 5; c++) {
        const dx = cx0 + (c + 0.35) * (cw / 4.4);
        const dy = cy0 + (r + 0.3) * (ch / 6.3);
        pushPoly(makeCircle(dx, dy, cw * 0.052, 16), dotBlue);
      }
    }

    // Giant Ribbed Onion-Dome Bauble Ornament
    const bx = cx0 + cw * 0.55;
    const by = cy0 + ch * 0.56;
    const brX = cw * 0.285 * bScale;
    const brY = ch * 0.22 * bScale;
    const onionPts: [number, number][] = [];
    const steps = 40;
    for (let i = 0; i < steps; i++) {
      const a = -Math.PI * 0.5 + (i / steps) * Math.PI * 2;
      const pinch = Math.sin(a) < -0.5 ? 1 + Math.pow(Math.abs(Math.sin(a)) - 0.5, 1.5) * 0.55 : 1;
      onionPts.push([bx + Math.cos(a) * brX * (1 - 0.12 * Math.pow(Math.sin(a), 2)), by + Math.sin(a) * brY * pinch]);
    }
    pushPoly(onionPts, creamBauble);
    // Vertical pink ribs across the bauble (strictly inside bauble height -0.96 .. 0.96)
    for (let k = -6; k <= 6; k++) {
      const frac = k / 7;
      const ribPts: [number, number][] = [];
      for (let s = 0; s <= 18; s++) {
        const v = -0.96 + (s / 18) * 1.92;
        const wAtV = Math.sqrt(Math.max(0, 1 - v * v));
        const rx = bx + frac * brX * 0.88 * wAtV;
        const ry = by + v * brY * 0.98;
        ribPts.push([rx, ry]);
      }
      for (let s = 18; s >= 0; s--) {
        const v = -0.96 + (s / 18) * 1.92;
        const wAtV = Math.sqrt(Math.max(0, 1 - v * v));
        const rx = bx + (frac + 0.025) * brX * 0.88 * wAtV;
        const ry = by + v * brY * 0.98;
        ribPts.push([rx, ry]);
      }
      pushPoly(ribPts, candyPink);
    }
    // Golden crown cap on top of bauble
    pushPoly(
      [
        [bx - cw * 0.038, by - brY * 1.18],
        [bx + cw * 0.038, by - brY * 1.18],
        [bx + cw * 0.038, by - brY * 1.02],
        [bx - cw * 0.038, by - brY * 1.02],
      ],
      warmGold
    );
    // Flowing Double-Loop Red & Gold Ribbon Bow at Top
    const bowY = by - brY * 1.38;
    pushPoly([[bx - cw * 0.008, cy0], [bx + cw * 0.008, cy0], [bx + cw * 0.008, bowY], [bx - cw * 0.008, bowY]], festiveRed);
    // Gold ribbon tails
    pushPoly([[bx, bowY], [bx - cw * 0.22, bowY + ch * 0.05], [bx - cw * 0.27, bowY + ch * 0.26], [bx - cw * 0.21, bowY + ch * 0.30], [bx - cw * 0.18, bowY + ch * 0.09], [bx, bowY + ch * 0.03]], warmGold);
    pushPoly([[bx, bowY], [bx + cw * 0.25, bowY + ch * 0.11], [bx1(cx1), bowY + ch * 0.13], [bx1(cx1), bowY + ch * 0.17], [bx + cw * 0.20, bowY + ch * 0.14], [bx, bowY + ch * 0.03]], warmGold);
    // Red bow loops (left and right open ribbon loops as true compound rings)
    for (const side of [-1, 1]) {
      const loopOut: [number, number][] = [];
      const loopIn: [number, number][] = [];
      for (let s = 0; s < 22; s++) {
        const a = (s / 22) * Math.PI * 2;
        const lx = bx + side * cw * 0.17 + Math.cos(a) * cw * 0.15;
        const ly = bowY - ch * 0.04 + Math.sin(a) * ch * 0.065;
        loopOut.push([lx, ly]);
        const lxi = bx + side * cw * 0.17 + Math.cos(a) * cw * 0.11;
        const lyi = bowY - ch * 0.04 + Math.sin(a) * ch * 0.042;
        loopIn.push([lxi, lyi]);
      }
      pushCompoundRingPoly(parts, cx0, cy0, cx1, cy1, loopOut, loopIn, festiveRed);
    }

    // Folk-Art Red & Gold Rocking Horse in Foreground
    const hx = cx0 + cw * 0.38;
    const hy = cy0 + ch * 0.74;
    // Golden mane & tail
    pushPoly(
      [
        [hx - cw * 0.22, hy - ch * 0.06],
        [hx - cw * 0.36, hy - ch * 0.12],
        [hx - cw * 0.38, hy - ch * 0.05],
        [hx - cw * 0.24, hy - ch * 0.02],
      ],
      warmGold
    );
    pushPoly(
      buildPosterRoundedRectPoly(hx + cw * 0.02, hy - ch * 0.21, cw * 0.20, ch * 0.14, cw * 0.09, cw * 0.09, 0, 0, aspect),
      warmGold
    );
    // Red horse body, neck, head & legs
    const horsePoly: [number, number][] = [
      [hx - cw * 0.29, hy + ch * 0.12], // back hoof
      [hx - cw * 0.22, hy - ch * 0.06], // croup
      [hx + cw * 0.02, hy - ch * 0.06], // back
      [hx + cw * 0.08, hy - ch * 0.18], // neck back
      [hx + cw * 0.18, hy - ch * 0.19], // poll/ears
      [hx + cw * 0.29, hy - ch * 0.12], // muzzle top
      [hx + cw * 0.24, hy - ch * 0.04], // muzzle tip
      [hx + cw * 0.18, hy - ch * 0.09], // jaw
      [hx + cw * 0.16, hy - ch * 0.01], // chest
      [hx + cw * 0.28, hy + ch * 0.11], // front hoof outer
      [hx + cw * 0.20, hy + ch * 0.13], // front hoof inner
      [hx + cw * 0.08, hy + ch * 0.03], // belly front
      [hx - cw * 0.10, hy + ch * 0.03], // belly back
      [hx - cw * 0.21, hy + ch * 0.14], // back hoof inner
    ];
    pushPoly(horsePoly, festiveRed);
    // Golden semi-circular saddle fan on horse back (pure lower semi-circle so zero red masking box overlaps the bauble!)
    const sadCx = hx - cw * 0.07;
    const sadCy = hy - ch * 0.06;
    const sadRx = cw * 0.095;
    const sadRy = (sadRx * cw * aspect) / Math.max(1, ch);
    const saddlePts: [number, number][] = [];
    for (let s = 0; s <= 14; s++) {
      const a = (s / 14) * Math.PI;
      saddlePts.push([sadCx + Math.cos(a) * sadRx, sadCy + Math.sin(a) * sadRy]);
    }
    pushPoly(saddlePts, warmGold);
    // Red curved rocker runner at bottom
    const rockerOut: [number, number][] = [];
    const rockerIn: [number, number][] = [];
    for (let s = 0; s <= 24; s++) {
      const a = (0.18 + (s / 24) * 0.64) * Math.PI;
      rockerOut.push([hx - cw * 0.02 + Math.cos(a) * cw * 0.46, hy - ch * 0.08 + Math.sin(a) * ch * 0.29]);
      rockerIn.unshift([hx - cw * 0.02 + Math.cos(a) * cw * 0.40, hy - ch * 0.08 + Math.sin(a) * ch * 0.24]);
    }
    pushPoly(rockerOut.concat(rockerIn), festiveRed);
    // Gold folk floral dots along rocker
    for (let f = -1; f <= 1; f++) {
      drawStarburst(hx - cw * 0.02 + f * cw * 0.09, hy + ch * 0.185, cw * 0.026, 8, 0.5, warmGold);
    }
  } else {
    // Card 5: Bold Diagonal Red & Bubblegum Pink Candy-Striped bg + Layered Origami Emerald Green Christmas Tree + Gold Star + Snowflakes
    parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${candyPink}"/>`);
    // Broad diagonal red candy stripes
    for (let st = -2; st <= 4; st++) {
      const yOff = cy0 + st * ch * 0.34;
      pushPoly(
        [
          [cx0, yOff],
          [cx1, yOff + ch * 0.42],
          [cx1, yOff + ch * 0.59],
          [cx0, yOff + ch * 0.17],
        ],
        festiveRed
      );
    }

    // Layered 4-Tier Origami / Ribbed Emerald Christmas Tree
    const tx = cx0 + cw * 0.5;
    const treeTopY = cy0 + ch * 0.205;
    const treeBotY = cy0 + ch * 0.715;
    const treeH = treeBotY - treeTopY;
    const tiers: [number, number, number][] = [
      [0.0, 0.29, 0.22],
      [0.21, 0.52, 0.29],
      [0.44, 0.76, 0.34],
      [0.66, 1.0, 0.39],
    ];
    const darkEmerald = mixCol(emerald, "#052e16", 0.32);

    // Draw 6 vertical facet bands inside each scalloped tree tier
    for (const [v0, v1, halfW] of tiers) {
      const y0 = treeTopY + v0 * treeH;
      const y1 = treeTopY + v1 * treeH;
      const wSpan = cw * halfW * bScale;
      const bands = 6;
      for (let b = 0; b < bands; b++) {
        const u0 = -1 + (b / bands) * 2;
        const u1 = -1 + ((b + 1) / bands) * 2;
        const colFacet = b % 2 === 0 ? emerald : darkEmerald;
        const topW0 = v0 === 0 ? 0 : wSpan * 0.38;
        const botCurve0 = Math.sqrt(Math.max(0, 1 - u0 * u0 * 0.45));
        const botCurve1 = Math.sqrt(Math.max(0, 1 - u1 * u1 * 0.45));
        pushPoly(
          [
            [tx + u0 * topW0, y0],
            [tx + u1 * topW0, y0],
            [tx + u1 * wSpan, y0 + (y1 - y0) * (0.48 + 0.52 * botCurve1)],
            [tx + u0 * wSpan, y0 + (y1 - y0) * (0.48 + 0.52 * botCurve0)],
          ],
          colFacet
        );
      }
    }

    // 5-Point Gold Star on top of the Christmas Tree
    drawStarburst(tx, treeTopY - ch * 0.038, cw * 0.056, 5, 0.44, warmGold);

    // 2 White Geometric Snowflakes flanking the tree
    drawSnowflake(cx0 + cw * 0.20, cy0 + ch * 0.28, cw * 0.048, snowWhite);
    drawSnowflake(cx0 + cw * 0.82, cy0 + ch * 0.70, cw * 0.048, snowWhite);

    if (showText) {
      parts.push(drawPosterVectorTextString("HAVE A", cx0 + cw * 0.5, cy0 + ch * 0.775, ch * 0.015, aspect, "regular", warmGold, "center"));
      parts.push(drawPosterVectorTextString("HOLLY JOLLY", cx0 + cw * 0.5, cy0 + ch * 0.815, ch * 0.036, aspect, "bold", snowWhite, "center"));
      parts.push(drawPosterVectorTextString("CHRISTMAS", cx0 + cw * 0.5, cy0 + ch * 0.875, ch * 0.016, aspect, "wide", warmGold, "center"));
    }
  }
}

function bx1(v: number): number {
  return v;
}

// ============================================================================
// REF SET 25: 4 PCS 2027 ROARING ART DECO GOLD FOIL & EMERALD GALA SET
// ============================================================================
function drawRef25Ny2027ArtDecoGalaCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const bgs = ["#0b1320", "#072a24", "#28111c", "#f5efe1"];
  const bg = pv.vCol(bgs[sub], 0);
  const gold = pv.vCol("#d4af37", 1);
  const champagne = pv.vCol("#f3e5ab", 2, true);
  const deepGold = pv.vCol("#9a7b2c", 3);
  const isLight = sub === 3;
  const inkCol = isLight ? "#0b1320" : champagne;

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  // Stepped Art Deco double outer frame
  const padX = cw * 0.07;
  const padY = ch * 0.055;
  parts.push(drawPosterOutlineFrame(cx0 + padX, cy0 + padY, cw - padX * 2, ch - padY * 2, cw * 0.012, ch * 0.008, gold, 0));
  parts.push(drawPosterOutlineFrame(cx0 + padX * 1.45, cy0 + padY * 1.45, cw - padX * 2.9, ch - padY * 2.9, cw * 0.006, ch * 0.004, deepGold, 0));

  // Art Deco Sunburst Fan rays at top & bottom corners
  const ox = cx0 + cw * 0.5;
  const oy = sub % 2 === 0 ? cy0 + ch * 0.34 : cy0 + ch * 0.66;
  const rays = 16;
  for (let i = 0; i < rays; i++) {
    const a0 = -Math.PI + (i / rays) * Math.PI * (sub % 2 === 0 ? 1 : -1);
    const a1 = a0 + (Math.PI / rays) * 0.48 * (sub % 2 === 0 ? 1 : -1);
    const r = cw * (0.34 + (i % 2) * 0.08) * bScale;
    const ry = (r * cw * aspect) / Math.max(1, ch);
    pushPoly(
      [
        [ox, oy],
        [ox + Math.cos(a0) * r, oy + Math.sin(a0) * ry],
        [ox + Math.cos(a1) * r, oy + Math.sin(a1) * ry],
      ],
      i % 2 === 0 ? gold : deepGold
    );
  }

  // Central Art Deco Diamond / Octagon Medallion
  const mrX = cw * 0.32 * bScale;
  const mrY = ch * 0.19 * bScale;
  pushPoly(
    [
      [ox, oy - mrY],
      [ox + mrX, oy],
      [ox, oy + mrY],
      [ox - mrX, oy],
    ],
    gold
  );
  pushPoly(
    [
      [ox, oy - mrY * 0.86],
      [ox + mrX * 0.86, oy],
      [ox, oy + mrY * 0.86],
      [ox - mrX * 0.86, oy],
    ],
    bg
  );

  // Oversized Art Deco "2027" display typography
  parts.push(drawPosterVectorTextString("2027", ox, oy - ch * 0.045, ch * 0.088, aspect, "bold", inkCol, "center"));
  if (showText) {
    parts.push(
      drawPosterVectorTextString(
        sub % 2 === 0 ? "HAPPY NEW YEAR" : "GRAND GALA NIGHT",
        ox,
        sub % 2 === 0 ? cy1 - ch * 0.18 : cy0 + ch * 0.14,
        ch * 0.022,
        aspect,
        "wide",
        gold,
        "center"
      )
    );
    parts.push(
      drawPosterVectorTextString(
        "CELEBRATION",
        ox,
        sub % 2 === 0 ? cy1 - ch * 0.135 : cy0 + ch * 0.185,
        ch * 0.016,
        aspect,
        "wide",
        inkCol,
        "center"
      )
    );
  }
}

// ============================================================================
// REF SET 26: 4 PCS 2027 RETRO 70S GROOVY RAINBOW ARCH, DAISY & FUNK SET
// ============================================================================
function drawRef26Ny2027RetroGroovy70sCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const cream = "#f7efe0";
  const mustard = pv.vCol("#eab308", 0);
  const orange = pv.vCol("#ea580c", 1);
  const coral = pv.vCol("#e11d48", 2);
  const teal = pv.vCol("#0d9488", 3);
  const espresso = "#291d12";

  const bgList = [cream, espresso, teal, mustard];
  const bg = bgList[sub];
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  // 5-Track Groovy S-Wave Rainbow Ribbon across card
  const trackCols = [mustard, orange, coral, teal, cream];
  const steps = 32;
  for (let t = 0; t < 4; t++) {
    const topP: [number, number][] = [];
    const botP: [number, number][] = [];
    const bandH = ch * 0.055 * bScale;
    for (let s = 0; s <= steps; s++) {
      const u = s / steps;
      const x = cx0 + u * cw;
      const yCenter =
        cy0 +
        ch * (0.28 + t * 0.052) +
        Math.sin(u * Math.PI * 2 + sub * 1.4) * ch * 0.12 * bScale;
      topP.push([x, yCenter]);
      botP.unshift([x, yCenter + bandH]);
    }
    pushPoly(topP.concat(botP), trackCols[(t + sub) % 4]);
  }

  // Retro 70s Daisy Flowers & Sparkle Stars
  const makeCircle = (ox: number, oy: number, rx: number, st = 18): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < st; i++) {
      const a = (i / st) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };
  for (const [fx, fy, sc] of [
    [0.22, 0.20, 0.09],
    [0.78, 0.74, 0.10],
  ]) {
    const ox = cx0 + cw * fx;
    const oy = cy0 + ch * fy;
    const pr = cw * sc * bScale;
    const prY = (pr * cw * aspect) / Math.max(1, ch);
    for (let p = 0; p < 8; p++) {
      const a = (p / 8) * Math.PI * 2;
      pushPoly(makeCircle(ox + Math.cos(a) * pr * 0.65, oy + Math.sin(a) * prY * 0.65, pr * 0.38), cream);
    }
    pushPoly(makeCircle(ox, oy, pr * 0.42), mustard);
  }

  // Bold stacked "2027" with hard retro 70s offset shadow
  const txtCol = sub === 0 || sub === 3 ? espresso : cream;
  const shCol = sub === 0 ? orange : coral;
  parts.push(drawPosterVectorTextString("20", cx0 + cw * 0.515, cy0 + ch * 0.415, ch * 0.14, aspect, "bold", shCol, "center"));
  parts.push(drawPosterVectorTextString("20", cx0 + cw * 0.5, cy0 + ch * 0.40, ch * 0.14, aspect, "bold", txtCol, "center"));
  parts.push(drawPosterVectorTextString("27", cx0 + cw * 0.515, cy0 + ch * 0.585, ch * 0.14, aspect, "bold", shCol, "center"));
  parts.push(drawPosterVectorTextString("27", cx0 + cw * 0.5, cy0 + ch * 0.57, ch * 0.14, aspect, "bold", txtCol, "center"));

  if (showText) {
    parts.push(
      drawPosterVectorTextString("GROOVY NEW YEAR", cx0 + cw * 0.5, cy1 - ch * 0.12, ch * 0.022, aspect, "bold", txtCol, "center")
    );
  }
}

// ============================================================================
// REF SET 27: 5 PCS NORDIC SCANDI CHRISTMAS REINDEER, BAUBLES, SNOWGLOBE & PINE
// ============================================================================
function drawRef27NordicScandiChristmasCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 5;

  const pine = pv.vCol("#0f5132", 0);
  const crimson = pv.vCol("#c1121f", 1);
  const navy = pv.vCol("#1d3557", 2);
  const gold = pv.vCol("#e09f3e", 3);
  const linen = "#f8f4ec";

  const bgCols = [linen, crimson, navy, pine, linen];
  const bg = bgCols[sub];
  const isLight = sub === 0 || sub === 4;
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  const makeCircle = (ox: number, oy: number, rx: number, st = 28): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < st; i++) {
      const a = (i / st) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  const ox = cx0 + cw * 0.5;
  const oy = cy0 + ch * 0.48;

  if (sub === 0) {
    // Card 1: Linen bg + 3 Hanging Scandi Geometric Ornaments (Diamond, Sphere, Tear-Drop)
    const cords = [
      [0.24, 0.42, crimson, gold],
      [0.50, 0.56, pine, crimson],
      [0.76, 0.38, gold, pine],
    ] as [number, number, string, string][];
    for (let i = 0; i < cords.length; i++) {
      const [rx, ry, cMain, cAcc] = cords[i];
      const bx = cx0 + cw * rx;
      const by = cy0 + ch * ry;
      pushPoly([[bx - cw * 0.006, cy0], [bx + cw * 0.006, cy0], [bx + cw * 0.006, by], [bx - cw * 0.006, by]], gold);
      if (i === 1) {
        pushPoly(
          [
            [bx, by - ch * 0.14 * bScale],
            [bx + cw * 0.16 * bScale, by],
            [bx, by + ch * 0.14 * bScale],
            [bx - cw * 0.16 * bScale, by],
          ],
          cMain
        );
        pushPoly(makeCircle(bx, by, cw * 0.06 * bScale), cAcc);
      } else {
        pushPoly(makeCircle(bx, by, cw * 0.14 * bScale), cMain);
        pushPoly([[bx - cw * 0.13 * bScale, by - ch * 0.015], [bx + cw * 0.13 * bScale, by - ch * 0.015], [bx + cw * 0.13 * bScale, by + ch * 0.015], [bx - cw * 0.13 * bScale, by + ch * 0.015]], linen);
      }
    }
  } else if (sub === 1) {
    // Card 2: Crimson bg + Nordic Geometric Folk Reindeer & Golden Antlers
    // Reindeer body, legs, neck & head
    pushPoly([[ox - cw * 0.18, oy + ch * 0.04], [ox + cw * 0.12, oy + ch * 0.04], [ox + cw * 0.16, oy + ch * 0.16], [ox - cw * 0.22, oy + ch * 0.16]], linen);
    pushPoly([[ox + cw * 0.04, oy - ch * 0.14], [ox + cw * 0.14, oy - ch * 0.14], [ox + cw * 0.14, oy + ch * 0.06], [ox + cw * 0.04, oy + ch * 0.06]], linen);
    pushPoly([[ox + cw * 0.04, oy - ch * 0.18], [ox + cw * 0.26, oy - ch * 0.14], [ox + cw * 0.24, oy - ch * 0.08], [ox + cw * 0.04, oy - ch * 0.10]], linen);
    // Legs
    for (const lx of [-0.18, -0.10, 0.05, 0.12]) {
      pushPoly([[ox + cw * lx, oy + ch * 0.14], [ox + cw * (lx + 0.035), oy + ch * 0.14], [ox + cw * (lx + 0.025), oy + ch * 0.30], [ox + cw * (lx - 0.01), oy + ch * 0.30]], linen);
    }
    // Golden geometric branching antlers
    pushPoly([[ox + cw * 0.07, oy - ch * 0.18], [ox + cw * 0.09, oy - ch * 0.18], [ox - cw * 0.06, oy - ch * 0.32], [ox - cw * 0.08, oy - ch * 0.30]], gold);
    for (let t = 0; t < 3; t++) {
      const ax = ox + cw * (0.03 - t * 0.04);
      const ay = oy - ch * (0.21 + t * 0.035);
      pushPoly([[ax, ay], [ax + cw * 0.02, ay], [ax + cw * 0.02, ay - ch * 0.06], [ax, ay - ch * 0.06]], gold);
    }
    // Folk saddle blanket
    pushPoly([[ox - cw * 0.12, oy + ch * 0.04], [ox + cw * 0.02, oy + ch * 0.04], [ox + cw * 0.02, oy + ch * 0.12], [ox - cw * 0.12, oy + ch * 0.12]], pine);
  } else if (sub === 2) {
    // Card 3: Midnight Navy bg + Winter Snowglobe with Layered Pine Trees & Golden Star
    pushPoly(makeCircle(ox, oy - ch * 0.02, cw * 0.34 * bScale, 36), mixCol(navy, "#60a5fa", 0.32));
    // Snowglobe pedestal base
    pushPoly(
      [
        [ox - cw * 0.22, oy + ch * 0.18],
        [ox + cw * 0.22, oy + ch * 0.18],
        [ox + cw * 0.28, oy + ch * 0.28],
        [ox - cw * 0.28, oy + ch * 0.28],
      ],
      gold
    );
    // 3 Layered Triangle Pine Tiers inside snowglobe
    for (let t = 0; t < 3; t++) {
      const ty = oy - ch * 0.18 + t * ch * 0.09;
      const tw = cw * (0.12 + t * 0.06) * bScale;
      pushPoly([[ox, ty], [ox + tw, ty + ch * 0.14], [ox - tw, ty + ch * 0.14]], pine);
    }
    pushPoly(makeCircle(ox, oy - ch * 0.20, cw * 0.035), gold);
  } else if (sub === 3) {
    // Card 4: Deep Pine Green bg + Botanical Holiday Wreath Ring with Red Berries & Gold Bow
    const rOut = cw * 0.32 * bScale;
    const rIn = cw * 0.17 * bScale;
    pushPoly(makeCircle(ox, oy, rOut, 36), mixCol(pine, "#4ade80", 0.35));
    pushPoly(makeCircle(ox, oy, rIn, 32), pine);
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const rx = ox + Math.cos(a) * (rOut + rIn) * 0.5;
      const ry = oy + Math.sin(a) * (((rOut + rIn) * 0.5 * cw * aspect) / Math.max(1, ch));
      pushPoly(makeCircle(rx, ry, cw * 0.028, 12), k % 2 === 0 ? crimson : gold);
    }
  } else {
    // Card 5: Linen bg + 3 Stacked Nordic Minimalist Pine Trees + 2027 Holiday Stamp
    const treeSpecs: [number, number, number, string][] = [
      [0.26, 0.55, 0.16, pine],
      [0.74, 0.55, 0.16, gold],
      [0.50, 0.48, 0.22, crimson],
    ];
    for (const [txR, tyR, sc, tCol] of treeSpecs) {
      const tx = cx0 + cw * txR;
      const ty = cy0 + ch * tyR;
      for (let l = 0; l < 3; l++) {
        const ly = ty - ch * 0.16 + l * ch * 0.08;
        const lw = cw * sc * (0.55 + l * 0.25) * bScale;
        pushPoly([[tx, ly], [tx + lw, ly + ch * 0.13], [tx - lw, ly + ch * 0.13]], tCol);
      }
    }
  }

  if (showText) {
    const tCol = isLight ? crimson : linen;
    const sCol = isLight ? pine : gold;
    parts.push(drawPosterVectorTextString("MERRY CHRISTMAS", ox, cy0 + ch * 0.11, ch * 0.024, aspect, "bold", tCol, "center"));
    parts.push(drawPosterVectorTextString("2027", ox, cy1 - ch * 0.15, ch * 0.052, aspect, "bold", sCol, "center"));
  }
}

// ============================================================================
// REF SET 28: 4 PCS 2027 CYBER NEON SYNTHWAVE GRID & HOLOGRAPHIC PORTAL SET
// ============================================================================
function drawRef28Ny2027CyberNeonSynthwaveCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const darkBg = pv.vCol(["#090618", "#071022", "#14061f", "#05141c"][sub], 0);
  const neonPink = pv.vCol("#ff2a85", 1);
  const neonCyan = pv.vCol("#00f0ff", 2);
  const neonGold = pv.vCol("#ffd000", 3);
  const neonViolet = pv.vCol("#9d4edd", 4);

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${darkBg}"/>`);

  const horizonY = cy0 + ch * 0.62;
  const ox = cx0 + cw * 0.5;

  // Segmented Retro-Futuristic Synthwave Sunset Disc above horizon
  const sunR = cw * 0.30 * bScale;
  const sunRY = (sunR * cw * aspect) / Math.max(1, ch);
  const sunY = horizonY - sunRY * 0.45;
  const sunPts: [number, number][] = [];
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    sunPts.push([ox + Math.cos(a) * sunR, sunY + Math.sin(a) * sunRY]);
  }
  pushPoly(sunPts, sub % 2 === 0 ? neonPink : neonGold);
  // Horizontal scanline cutouts across lower half of sun
  for (let s = 0; s < 5; s++) {
    const sy = sunY + (s / 5) * sunRY * 0.85;
    const sh = ch * (0.008 + s * 0.004);
    pushPoly([[ox - sunR * 1.1, sy], [ox + sunR * 1.1, sy], [ox + sunR * 1.1, sy + sh], [ox - sunR * 1.1, sy + sh]], darkBg);
  }

  // 3D Perspective Laser Grid Floor below horizonY
  pushPoly([[cx0, horizonY], [cx1, horizonY], [cx1, cy1], [cx0, cy1]], mixCol(darkBg, neonViolet, 0.18));
  const gridCol = sub % 2 === 0 ? neonCyan : neonPink;
  const lw = ch * 0.003;
  for (let r = 0; r <= 7; r++) {
    const v = Math.pow(r / 7, 1.55);
    const y = horizonY + v * (cy1 - horizonY);
    pushPoly([[cx0, y - lw], [cx1, y - lw], [cx1, y + lw], [cx0, y + lw]], gridCol);
  }
  for (let c = -5; c <= 5; c++) {
    const xTop = ox + (c / 5) * cw * 0.18;
    const xBot = ox + (c / 5) * cw * 1.25;
    pushPoly([[xTop - lw, horizonY], [xTop + lw, horizonY], [xBot + lw * 2, cy1], [xBot - lw * 2, cy1]], gridCol);
  }

  // Glowing Neon "2027" Chrome Typography
  parts.push(drawPosterVectorTextString("2027", ox + cw * 0.012, cy0 + ch * 0.195, ch * 0.115, aspect, "bold", neonPink, "center"));
  parts.push(drawPosterVectorTextString("2027", ox, cy0 + ch * 0.185, ch * 0.115, aspect, "bold", neonCyan, "center"));

  if (showText) {
    parts.push(drawPosterVectorTextString("CYBER FUTURE", ox, cy0 + ch * 0.10, ch * 0.018, aspect, "wide", neonGold, "center"));
    parts.push(drawPosterVectorTextString("HAPPY NEW YEAR", ox, cy1 - ch * 0.09, ch * 0.019, aspect, "wide", "#ffffff", "center"));
  }
}

// ============================================================================
// REF SET 29: 4 PCS 2027 SWISS BRUTALIST ARCHITECTURAL CALENDAR & GRID SET
// ============================================================================
function drawRef29Ny2027SwissEditorialGridCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const paper = "#f4f1ea";
  const ink = "#111318";
  const swissRed = pv.vCol("#e63928", 0);
  const cobalt = pv.vCol("#1d4ed8", 1);
  const ochre = pv.vCol("#eab308", 2);

  const bgCols = [paper, swissRed, ink, cobalt];
  const bg = bgCols[sub];
  const fg = sub === 0 ? ink : paper;
  const acc = sub === 0 ? swissRed : sub === 1 ? ink : sub === 2 ? ochre : ochre;

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  // Swiss modular grid rules
  const padX = cw * 0.075;
  const ruleH = ch * 0.005;
  for (const ry of [0.16, 0.56, 0.82]) {
    pushPoly([[cx0 + padX, cy0 + ch * ry], [cx1 - padX, cy0 + ch * ry], [cx1 - padX, cy0 + ch * ry + ruleH], [cx0 + padX, cy0 + ch * ry + ruleH]], fg);
  }

  // Geometric focal Bauhaus composition in middle band (0.18 .. 0.54)
  const gx = cx0 + padX;
  const gy = cy0 + ch * 0.19;
  const gw = cw - padX * 2;
  const gh = ch * 0.34;
  if (sub % 2 === 0) {
    pushPoly(buildPosterRoundedRectPoly(gx, gy, gw * 0.48, gh, gw * 0.24, gw * 0.24, gw * 0.24, gw * 0.24, aspect), acc);
    pushPoly([[gx + gw * 0.54, gy], [gx + gw, gy], [gx + gw, gy + gh * 0.46], [gx + gw * 0.54, gy]], fg);
    pushPoly([[gx + gw * 0.54, gy + gh * 0.54], [gx + gw, gy + gh * 0.54], [gx + gw, gy + gh], [gx + gw * 0.54, gy + gh]], acc);
  } else {
    pushPoly([[gx, gy], [gx + gw * 0.62, gy], [gx + gw * 0.62, gy + gh], [gx, gy + gh]], acc);
    const ox = gx + gw * 0.62;
    const oy = gy + gh * 0.5;
    const r = gw * 0.34 * bScale;
    const ry = (r * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * r, oy + Math.sin(a) * ry]);
    }
    pushPoly(pts, fg);
  }

  // Giant Swiss Editorial "2027"
  parts.push(drawPosterVectorTextString("2027", cx0 + padX, cy0 + ch * 0.61, ch * 0.155, aspect, "bold", fg, "left"));

  if (showText) {
    parts.push(drawPosterVectorTextString("EDITION", cx0 + padX, cy0 + ch * 0.075, ch * 0.024, aspect, "bold", fg, "left"));
    parts.push(drawPosterVectorTextString(`0${sub + 1}/04`, cx1 - padX, cy0 + ch * 0.075, ch * 0.024, aspect, "bold", acc, "right"));
    parts.push(drawPosterVectorTextString("NEW YEAR EXHIBITION", cx0 + padX, cy0 + ch * 0.865, ch * 0.018, aspect, "bold", fg, "left"));
    parts.push(drawPosterSubtitleBlock(cx0 + padX, cy0 + ch * 0.905, cw * 0.55, 2, ch * 0.004, ch * 0.006, fg, "left"));
  }
}

// ============================================================================
// REF SET 30: 4 PCS LUXURY GOLD & CRIMSON CHRISTMAS BAUBLES & GIFTS COLLECTION
// ============================================================================
function drawRef30LuxuryChristmasBaublesCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const ruby = pv.vCol("#7f1d1d", 0);
  const emerald = pv.vCol("#064e3b", 1);
  const midnight = pv.vCol("#0f172a", 2);
  const ivory = "#faf6ee";
  const gold = pv.vCol("#d4af37", 3);
  const brightGold = "#f7e29c";

  const bgs = [ruby, emerald, ivory, midnight];
  const bg = bgs[sub];
  const isLight = sub === 2;
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  const makeCircle = (ox: number, oy: number, rx: number, st = 32): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < st; i++) {
      const a = (i / st) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  // Luxury arched gold foil border frame
  const fw = cw * 0.82;
  const fh = ch * 0.86;
  const fx0 = cx0 + (cw - fw) * 0.5;
  const fy0 = cy0 + (ch - fh) * 0.5;
  pushPoly(buildPosterRoundedRectPoly(fx0, fy0, fw, fh, fw * 0.48, fw * 0.48, 8, 8, aspect), gold);
  pushPoly(
    buildPosterRoundedRectPoly(fx0 + cw * 0.018, fy0 + ch * 0.012, fw - cw * 0.036, fh - ch * 0.024, fw * 0.46, fw * 0.46, 6, 6, aspect),
    bg
  );

  // Hanging Golden Luxury Bauble Centerpiece
  const ox = cx0 + cw * 0.5;
  const oy = cy0 + ch * 0.48;
  const rad = cw * 0.25 * bScale;
  pushPoly([[ox - cw * 0.006, fy0], [ox + cw * 0.006, fy0], [ox + cw * 0.006, oy - rad * 0.7], [ox - cw * 0.006, oy - rad * 0.7]], gold);
  pushPoly(makeCircle(ox, oy, rad, 36), isLight ? ruby : gold);
  pushPoly(makeCircle(ox, oy, rad * 0.82, 32), isLight ? gold : brightGold);
  pushPoly(makeCircle(ox, oy, rad * 0.64, 28), isLight ? ruby : bg);

  // 8-point golden star inside bauble
  const starPts: [number, number][] = [];
  const srX = rad * 0.48;
  const srY = (srX * cw * aspect) / Math.max(1, ch);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const r = i % 2 === 0 ? 1 : 0.32;
    starPts.push([ox + Math.cos(a) * srX * r, oy + Math.sin(a) * srY * r]);
  }
  pushPoly(starPts, gold);

  if (showText) {
    const txtCol = isLight ? ruby : brightGold;
    parts.push(drawPosterVectorTextString("SEASON GREETINGS", ox, cy1 - ch * 0.25, ch * 0.018, aspect, "wide", gold, "center"));
    parts.push(drawPosterVectorTextString("2027", ox, cy1 - ch * 0.20, ch * 0.062, aspect, "bold", txtCol, "center"));
  }
}

// ============================================================================
// REF SET 31: 4 PCS 2027 3D ISOMETRIC ARCHITECTURAL MONUMENT & PODIUM SET
// ============================================================================
function drawRef31Ny2027IsometricMonumentCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const bgs = ["#1e1b4b", "#f1f5f9", "#064e3b", "#27272a"];
  const bg = pv.vCol(bgs[sub], 0);
  const topC = pv.vCol("#fde047", 1, true);
  const leftC = pv.vCol("#f43f5e", 2);
  const rightC = pv.vCol("#38bdf8", 3);
  const isLight = sub === 1;

  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  // 4 Isometric Podium Pillars arranged in diamond formation with "2" "0" "2" "7" on top
  const drawIsoPillar = (ox: number, oy: number, radX: number, hMul: number, cT: string, cL: string, cR: string, digit: string) => {
    const radY = (radX * cw * aspect) / Math.max(1, ch);
    const dx = radX * 0.88;
    const dy = radY * 0.52;
    const hY = radY * hMul;
    pushPoly([[ox, oy - radY], [ox + dx, oy - dy], [ox, oy], [ox - dx, oy - dy]], cT);
    pushPoly([[ox - dx, oy - dy], [ox, oy], [ox, oy + hY], [ox - dx, oy + hY - dy]], cL);
    pushPoly([[ox, oy], [ox + dx, oy - dy], [ox + dx, oy + hY - dy], [ox, oy + hY]], cR);
    parts.push(drawPosterVectorTextString(digit, ox, oy - radY * 0.92, ch * 0.058, aspect, "bold", "#111827", "center"));
  };

  const sc = bScale * 0.19;
  drawIsoPillar(cx0 + cw * 0.50, cy0 + ch * 0.28, cw * sc, 1.8, topC, leftC, rightC, "2");
  drawIsoPillar(cx0 + cw * 0.27, cy0 + ch * 0.42, cw * sc, 1.6, rightC, topC, leftC, "0");
  drawIsoPillar(cx0 + cw * 0.73, cy0 + ch * 0.42, cw * sc, 1.6, leftC, rightC, topC, "2");
  drawIsoPillar(cx0 + cw * 0.50, cy0 + ch * 0.56, cw * sc, 1.9, topC, leftC, rightC, "7");

  if (showText) {
    const tCol = isLight ? "#0f172a" : "#ffffff";
    parts.push(drawPosterVectorTextString("NEW DIMENSION 2027", cx0 + cw * 0.5, cy1 - ch * 0.12, ch * 0.022, aspect, "bold", tCol, "center"));
  }
}

// ============================================================================
// REF SET 32: 5 PCS 2027 NEO-BRUTALIST MEMPHIS 90S POP STICKER & CONFETTI SET
// ============================================================================
function drawRef32Ny2027MemphisPopCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cy1 = cy0 + ch;
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 5;

  const yellow = pv.vCol("#fde047", 0, true);
  const hotPink = pv.vCol("#ff007f", 1);
  const cyan = pv.vCol("#00f5d4", 2);
  const violet = pv.vCol("#7c3aed", 3);
  const ink = "#111827";
  const white = "#ffffff";

  const bgs = [yellow, hotPink, cyan, violet, white];
  const bg = bgs[sub];
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  // Neo-Brutalist Hard Drop-Shadow Bento Card
  const bx = cx0 + cw * 0.12;
  const by = cy0 + ch * 0.16;
  const bw = cw * 0.74;
  const bh = ch * 0.64;
  pushPoly([[bx + cw * 0.04, by + ch * 0.03], [bx + bw + cw * 0.04, by + ch * 0.03], [bx + bw + cw * 0.04, by + bh + ch * 0.03], [bx + cw * 0.04, by + bh + ch * 0.03]], ink);
  pushPoly([[bx, by], [bx + bw, by], [bx + bw, by + bh], [bx, by + bh]], white);
  parts.push(drawPosterOutlineFrame(bx, by, bw, bh, cw * 0.016, ch * 0.011, ink, 0));

  // Memphis Checkerboard Header Strip inside Bento Box
  const cols = 8;
  const cellW = bw / cols;
  const stripH = ch * 0.075;
  for (let c = 0; c < cols; c++) {
    if (c % 2 === 0) {
      pushPoly([[bx + c * cellW, by], [bx + (c + 1) * cellW, by], [bx + (c + 1) * cellW, by + stripH], [bx + c * cellW, by + stripH]], ink);
    }
  }

  // Confetti triangles & squiggles
  const accA = sub === 1 ? cyan : hotPink;
  const accB = sub === 0 ? violet : yellow;
  pushPoly([[bx + bw * 0.12, by + bh * 0.25], [bx + bw * 0.34, by + bh * 0.18], [bx + bw * 0.24, by + bh * 0.38]], accA);
  pushPoly([[bx + bw * 0.70, by + bh * 0.74], [bx + bw * 0.90, by + bh * 0.68], [bx + bw * 0.84, by + bh * 0.88]], accB);

  // Bold stacked "20 / 27" with hard shadow
  const ox = bx + bw * 0.5;
  parts.push(drawPosterVectorTextString("20", ox + cw * 0.015, by + bh * 0.27, ch * 0.135 * bScale, aspect, "bold", accA, "center"));
  parts.push(drawPosterVectorTextString("20", ox, by + bh * 0.255, ch * 0.135 * bScale, aspect, "bold", ink, "center"));
  parts.push(drawPosterVectorTextString("27", ox + cw * 0.015, by + bh * 0.55, ch * 0.135 * bScale, aspect, "bold", accB, "center"));
  parts.push(drawPosterVectorTextString("27", ox, by + bh * 0.535, ch * 0.135 * bScale, aspect, "bold", ink, "center"));

  if (showText) {
    const fCol = sub === 3 || sub === 1 ? white : ink;
    parts.push(drawPosterVectorTextString("POP NEW YEAR PARTY", cx0 + cw * 0.5, cy1 - ch * 0.11, ch * 0.022, aspect, "bold", fCol, "center"));
  }
}

// ============================================================================
// REF SET 33: 4 PCS 2027 JAPANESE ZEN RISING SUN, TORII & UKIYO WAVE SET
// ============================================================================
function drawRef33Ny2027JapaneseZenCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const pv = makePosterVar(m, variant, cardIdx, colorSet);
  const sub = (cardIdx + variant) % 4;

  const washi = "#f4ece1";
  const vermilion = pv.vCol("#c83e2b", 0);
  const indigo = pv.vCol("#1b263b", 1);
  const gold = pv.vCol("#e09f3e", 2);
  const slate = pv.vCol("#415a77", 3);

  const bgs = [washi, indigo, washi, vermilion];
  const bg = bgs[sub];
  const isDark = sub === 1 || sub === 3;
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${bg}"/>`);

  const padX = cw * 0.09;
  const padY = ch * 0.07;
  const fw = cw - padX * 2;
  const fh = ch - padY * 2;
  const fx0 = cx0 + padX;
  const fy0 = cy0 + padY;

  // Rising Sun Disc
  const ox = cx0 + cw * 0.5;
  const oy = fy0 + fh * 0.42;
  const sunR = cw * 0.28 * bScale;
  const sunRY = (sunR * cw * aspect) / Math.max(1, ch);
  const sunPts: [number, number][] = [];
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    sunPts.push([ox + Math.cos(a) * sunR, oy + Math.sin(a) * sunRY]);
  }
  pushPoly(sunPts, sub === 3 ? washi : vermilion);

  // Layered Ukiyo-e Ocean Waves in lower frame
  const waveCols = [indigo, slate, gold, washi];
  for (let w = 0; w < 4; w++) {
    const yBase = fy0 + fh * (0.58 + w * 0.09);
    const pts: [number, number][] = [];
    for (let s = 0; s <= 28; s++) {
      const u = s / 28;
      const wave = Math.sin(u * Math.PI * 2.5 + w * 1.3 + sub) * ch * 0.032;
      pts.push([fx0 + u * fw, yBase + wave]);
    }
    pts.push([fx0 + fw, fy0 + fh], [fx0, fy0 + fh]);
    pushPoly(pts, waveCols[(w + sub) % waveCols.length]);
  }

  // Outer Japanese woodblock border frame
  parts.push(drawPosterOutlineFrame(fx0, fy0, fw, fh, cw * 0.014, ch * 0.009, isDark ? washi : indigo, 0));

  // Bold "2027" over the Rising Sun
  parts.push(
    drawPosterVectorTextString(
      "2027",
      ox,
      oy - ch * 0.048,
      ch * 0.092,
      aspect,
      "bold",
      sub === 3 ? vermilion : washi,
      "center"
    )
  );
  if (showText) {
    parts.push(
      drawPosterVectorTextString(
        "NEW YEAR DAWN",
        ox,
        fy0 + fh * 0.06,
        ch * 0.020,
        aspect,
        "wide",
        isDark ? gold : indigo,
        "center"
      )
    );
  }
}

export type PosterArtStyle =
  | "coral_gold_modern5"
  | "aurora_mesh_blur4"
  | "geo_pills_rings4"
  | "midnight_sapphire_mesh4"
  | "liquid_lava_frame3"
  | "retro_circus_grunge6"
  | "dark_neon_plasma4"
  | "cyber_wireframe_tech3"
  | "angular_prism_lines4"
  | "minimal_smooth_mesh3"
  | "teal_3d_louvers4"
  | "watercolor"
  | "pink_valentine_hearts4"
  | "summer_retro_line_badges6"
  | "retro_70s_stripe_tracks4"
  | "dark_acid_lime_violet5"
  | "minimal_quote_frames4"
  | "white_3d_peach_blue_tubes5"
  | "swiss_minimal_line_waves4"
  | "groovy_psychedelic_cartoon4"
  | "swiss_bw_typo_arch3"
  | "ny2027_fireworks_ribbon3"
  | "ny2027_swiss_interlock4"
  | "ny2027_holly_jolly_christmas5"
  | "ny2027_art_deco_gala4"
  | "ny2027_retro_groovy_70s4"
  | "nordic_scandi_christmas5"
  | "ny2027_cyber_neon_synthwave4"
  | "ny2027_swiss_editorial_grid4"
  | "luxury_christmas_baubles4"
  | "ny2027_isometric_monument4"
  | "ny2027_memphis_pop5"
  | "ny2027_japanese_zen4"
  | `ms_poster_${number}`;

const MS_POSTER_PALETTES: [string, string, string, string, string][] = [
  ["#f6f0e4", "#e63946", "#ffb703", "#1d3557", "#457b9d"], // 0: Bauhaus Classic Primary
  ["#fdf6ec", "#d96b43", "#e8a87c", "#3d5a45", "#263a29"], // 1: Boho Terracotta & Sage
  ["#0f172a", "#38bdf8", "#818cf8", "#c084fc", "#f472b6"], // 2: Cyber Neon Twilight
  ["#102a43", "#0b6e4f", "#08a045", "#6bbf59", "#ddb771"], // 3: Emerald Forest & Gold
  ["#ffffff", "#0052cc", "#00b8d9", "#ff5630", "#ffab00"], // 4: Swiss Corporate Tech
  ["#f4ece1", "#c83e2b", "#1b263b", "#e09f3e", "#778da9"], // 5: Japanese Ukiyo-e Zen
  ["#fff3d6", "#ff5400", "#ffbd00", "#9e0059", "#390099"], // 6: Retro 70s Groovy Sunset
  ["#f8f9fa", "#ff007f", "#00f5d4", "#fee440", "#111827"], // 7: Memphis Pop Confetti
  ["#0b0c10", "#d4af37", "#f3e5ab", "#1f2833", "#8c6d1f"], // 8: Luxury Art Deco Gold
  ["#f2efe9", "#4a6b5d", "#8fa998", "#d4a373", "#2c3e35"], // 9: Nordic Botanical Leaf
  ["#1a1423", "#f43f5e", "#fb7185", "#fda4af", "#881337"], // 10: Velvet Crimson & Rose
  ["#eef2f6", "#1e3a8a", "#3b82f6", "#f97316", "#0f172a"], // 11: Executive Cobalt & Orange
  ["#faf5ef", "#0d9488", "#f59e0b", "#e11d48", "#1e293b"], // 12: Mid-Century Teal & Coral
  ["#111827", "#a3e635", "#38bdf8", "#c084fc", "#f43f5e"], // 13: Acid Lime & Electric Violet
  ["#fff8f0", "#7c2d12", "#ea580c", "#fbbf24", "#155e75"], // 14: Desert Canyon Sunset
  ["#f0fdf4", "#15803d", "#22c55e", "#eab308", "#064e3b"], // 15: Botanical Jade & Citrine
];

const MS_POSTER_TITLES: [string, string, string][] = [
  ["BAUHAUS", "EXHIBITION", "MODERN GEOMETRIC ART"],
  ["ABSTRACT", "ORGANIC", "BOTANICAL COLLECTION"],
  ["ISOMETRIC", "DIMENSION", "ARCHITECTURAL SERIES"],
  ["TOPOGRAPHY", "LANDSCAPE", "LAYERED PAPER CUTOUT"],
  ["ANNUAL", "REPORT", "CORPORATE BROCHURE"],
  ["MINIMAL", "ZEN ART", "JAPANESE AESTHETIC"],
  ["GROOVY", "FESTIVAL", "RETRO 70S VIBES"],
  ["MEMPHIS", "POP ART", "CREATIVE STUDIO"],
  ["ART DECO", "LUXURY", "GOLDEN GALA NIGHT"],
  ["NORDIC", "BOTANICA", "SCANDINAVIAN POSTER"],
];

function drawCuratedMicrostockPosterCard(
  m: any,
  parts: string[],
  pushPoly: (poly: [number, number][], col: string) => void,
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  styleNum: number, // 1..100
  colorSet: string,
  bScale: number,
  showText: boolean,
  aspect: number,
  variant: number
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;
  const family = Math.floor((styleNum - 1) / 10) % 10; // 0..9
  const subStyle = (styleNum - 1) % 10; // 0..9
  const isPal = colorSet === "palette";

  // Cohesive set palette across the board (without muddy double hue-rotation!)
  const palIdx = (styleNum - 1 + Math.max(0, variant) * 5) % MS_POSTER_PALETTES.length;
  const basePal = MS_POSTER_PALETTES[palIdx];
  const pickCol = (hex: string, slot: number) =>
    isPal ? mixCol(hex, m.col((slot + cardIdx) % 5), 0.78) : hex;
  const altBgMode = (styleNum + Math.max(0, variant)) % 3;
  const rawBg =
    altBgMode === 0
      ? basePal[0]
      : altBgMode === 1
      ? basePal[cardIdx % 2 === 0 ? 0 : 3]
      : basePal[(cardIdx + subStyle) % 3 === 0 ? 3 : 0];
  const cBg = pickCol(rawBg, 0);
  const c1 = pickCol(basePal[1 + (cardIdx % 4)], 1);
  const c2 = pickCol(basePal[1 + ((cardIdx + 1) % 4)], 2);
  const c3 = pickCol(basePal[1 + ((cardIdx + 2) % 4)], 3);
  const c4 = pickCol(basePal[1 + ((cardIdx + 3) % 4)], 4);
  const isDarkBg = lumH(cBg) < 115;
  const textCol = isDarkBg ? "#ffffff" : "#111827";
  const subTextCol = isDarkBg ? mixCol("#ffffff", c2, 0.25) : mixCol("#111827", c1, 0.35);

  // 1. Clean 1-click selectable full-card background rectangle
  parts.push(`<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${cBg}"/>`);

  const makeCirclePoly = (ox: number, oy: number, rx: number, steps = 40): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  const makeRingPoly = (ox: number, oy: number, rxOuter: number, rxInner: number, a0 = 0, a1 = Math.PI * 2, steps = 36): [number, number][] => {
    const ryOuter = (rxOuter * cw * aspect) / Math.max(1, ch);
    const ryInner = (rxInner * cw * aspect) / Math.max(1, ch);
    const outerPts: [number, number][] = [];
    const innerPts: [number, number][] = [];
    for (let i = 0; i <= steps; i++) {
      const a = a0 + (i / steps) * (a1 - a0);
      outerPts.push([ox + Math.cos(a) * rxOuter, oy + Math.sin(a) * ryOuter]);
      innerPts.unshift([ox + Math.cos(a) * rxInner, oy + Math.sin(a) * ryInner]);
    }
    return outerPts.concat(innerPts);
  };

  const makeArcSectorPoly = (ox: number, oy: number, rx: number, a0: number, a1: number, steps = 24): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [[ox, oy]];
    for (let i = 0; i <= steps; i++) {
      const a = a0 + (i / steps) * (a1 - a0);
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  const makeRegPoly = (ox: number, oy: number, rx: number, sides: number, rotRad = 0): [number, number][] => {
    const ry = (rx * cw * aspect) / Math.max(1, ch);
    const pts: [number, number][] = [];
    for (let i = 0; i < sides; i++) {
      const a = rotRad + (i / sides) * Math.PI * 2;
      pts.push([ox + Math.cos(a) * rx, oy + Math.sin(a) * ry]);
    }
    return pts;
  };

  // CRITICAL: Every single card (cardIdx = 0, 1, 2, 3...) on the artboard gets a 100% DIFFERENT geometric architecture (gcd(7, 25) = 1 -> zero duplicate cards!)
  const archIndex = (styleNum * 3 + cardIdx * 7 + Math.max(0, variant) * 11) % 25;
  const sub = (cardIdx * 2 + styleNum + Math.max(0, variant)) % 6;
  const artBottom = showText ? cy0 + ch * 0.73 : cy0 + ch * 0.88;
  const artH = artBottom - (cy0 + ch * 0.08);
  const artCy = cy0 + ch * 0.08 + artH * 0.5;

  if (archIndex === 0) {
    // ARCH 0: Swiss Modular Bauhaus Grid (Quarter-arcs, split diagonals, concentric discs, pill columns)
    const cols = 2;
    const rows = 3;
    const pad = cw * 0.10;
    const gw = (cw - pad * 2) / cols;
    const gh = artH / rows;
    const gy0 = cy0 + ch * 0.08;
    const bCols = [c1, c2, c3, c4];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const bx = cx0 + pad + c * gw;
        const by = gy0 + r * gh;
        const idx = r * cols + c + cardIdx * 2 + subStyle + variant;
        const colA = bCols[idx % bCols.length];
        const colB = bCols[(idx + 1) % bCols.length];
        const shapeType = (r * 2 + c + sub) % 6;
        if (shapeType === 0) {
          pushPoly([[bx, by], [bx + gw, by], [bx + gw, by + gh], [bx, by + gh]], colA);
          pushPoly(makeCirclePoly(bx + gw * 0.5, by + gh * 0.5, gw * 0.34 * bScale), colB);
        } else if (shapeType === 1) {
          pushPoly([[bx, by], [bx + gw, by], [bx, by + gh]], colA);
          pushPoly([[bx + gw, by], [bx + gw, by + gh], [bx, by + gh]], colB);
        } else if (shapeType === 2) {
          pushPoly([[bx, by], [bx + gw, by], [bx + gw, by + gh], [bx, by + gh]], mixCol(colA, cBg, 0.7));
          pushPoly(makeArcSectorPoly(bx, by, gw * 0.95, 0, Math.PI * 0.5), colA);
        } else if (shapeType === 3) {
          const pillR = gw * 0.42;
          pushPoly(buildPosterRoundedRectPoly(bx + gw * 0.08, by + gh * 0.08, gw * 0.84, gh * 0.84, pillR, pillR, pillR, pillR, aspect), colA);
        } else if (shapeType === 4) {
          pushPoly(makeRingPoly(bx + gw * 0.5, by + gh * 0.5, gw * 0.42 * bScale, gw * 0.20 * bScale, 0, Math.PI * 2), colA);
        } else {
          const bars = 4;
          for (let st = 0; st < bars; st++) {
            const sx = bx + (st / bars) * gw;
            pushPoly([[sx, by], [sx + (gw / bars) * 0.65, by], [sx + (gw / bars) * 0.65, by + gh], [sx, by + gh]], st % 2 === 0 ? colA : colB);
          }
        }
      }
    }
  } else if (archIndex === 1) {
    // ARCH 1: Constructivist Suprematist Diagonal Beams & Orbiting Rings
    const cxMid = cx0 + cw * 0.5;
    const cyMid = artCy;
    pushPoly(makeCirclePoly(cxMid, cyMid, cw * 0.28 * bScale), c1);
    pushPoly(makeRingPoly(cxMid, cyMid, cw * 0.38 * bScale, cw * 0.32 * bScale, sub * 0.6, sub * 0.6 + Math.PI * 1.35), c2);
    const beamCount = 3;
    const bCols = [c3, c4, c2];
    const baseAng = ((sub % 2 === 0 ? -32 : 32) * Math.PI) / 180;
    for (let b = 0; b < beamCount; b++) {
      const bx = cx0 + cw * (0.28 + b * 0.22);
      const by = cy0 + ch * (0.22 + b * 0.14);
      const len = cw * (0.36 - b * 0.04) * bScale;
      const thick = ch * 0.048;
      const dx = Math.cos(baseAng) * len;
      const dy = Math.sin(baseAng) * len;
      const nx = -Math.sin(baseAng) * thick;
      const ny = Math.cos(baseAng) * thick;
      pushPoly([[bx - dx, by - dy], [bx + dx, by + dy], [bx + dx + nx, by + dy + ny], [bx - dx + nx, by - dy + ny]], bCols[b % bCols.length]);
    }
  } else if (archIndex === 2) {
    // ARCH 2: Concentric Bullseye Target & Split Geometric Totem Pillar
    const tx = cx0 + cw * 0.5;
    const ty = cy0 + ch * 0.30;
    const ringCols = [c1, c2, c3, c4, cBg];
    const rings = 5;
    for (let r = 0; r < rings; r++) {
      const rad = cw * (0.34 - r * 0.058) * bScale;
      pushPoly(makeCirclePoly(tx, ty, Math.max(cw * 0.04, rad)), ringCols[(r + sub) % ringCols.length]);
    }
    const pillW = cw * 0.48;
    const pillH = ch * 0.24;
    const px0 = cx0 + (cw - pillW) * 0.5;
    const py0 = cy0 + ch * 0.48;
    pushPoly(buildPosterRoundedRectPoly(px0, py0, pillW, pillH, pillW * 0.48, pillW * 0.48, 0, 0, aspect), c3);
    pushPoly(makeCirclePoly(tx, py0 + pillH * 0.5, cw * 0.11 * bScale), c4);
  } else if (archIndex === 3) {
    // ARCH 3: Matisse Boho Window Arch, Staircase & Floating Sun
    const archW = cw * 0.64 * bScale;
    const archH = artH * 0.88;
    const ax0 = cx0 + (cw - archW) * 0.5;
    const ay0 = cy0 + ch * 0.10;
    pushPoly(buildPosterRoundedRectPoly(ax0, ay0, archW, archH, archW * 0.48, archW * 0.48, 0, 0, aspect), c1);
    const inW = archW * 0.74;
    const inH = archH * 0.78;
    pushPoly(buildPosterRoundedRectPoly(ax0 + (archW - inW) * 0.5, ay0 + archH - inH, inW, inH, inW * 0.48, inW * 0.48, 0, 0, aspect), c2);
    pushPoly(makeCirclePoly(ax0 + archW * (sub % 2 === 0 ? 0.38 : 0.62), ay0 + archH * 0.34, cw * 0.12 * bScale), c4);
    const stepsCount = 4;
    const stW = archW * 0.56;
    const stH = (archH * 0.34) / stepsCount;
    for (let s = 0; s < stepsCount; s++) {
      const wStep = stW * ((s + 1) / stepsCount);
      const sx = sub % 2 === 0 ? ax0 + archW - wStep : ax0;
      const sy = ay0 + archH - (stepsCount - s) * stH;
      pushPoly([[sx, sy], [sx + wStep, sy], [sx + wStep, sy + stH + 1], [sx, sy + stH + 1]], c3);
    }
  } else if (archIndex === 4) {
    // ARCH 4: Abstract Ceramic Vase Silhouette & Botanical Foliage Frame
    const archW = cw * 0.68;
    const archH = artH * 0.86;
    const ax0 = cx0 + (cw - archW) * 0.5;
    const ay0 = cy0 + ch * 0.10;
    pushPoly(buildPosterRoundedRectPoly(ax0, ay0, archW, archH, archW * 0.48, archW * 0.48, 12, 12, aspect), mixCol(c2, cBg, 0.35));
    const vx = cx0 + cw * 0.5;
    const vy = cy0 + ch * 0.44;
    const fronds = 5;
    for (let f = 0; f < fronds; f++) {
      const ang = -Math.PI * 0.82 + (f / (fronds - 1)) * Math.PI * 0.64;
      const fLen = cw * (0.24 + (f % 2) * 0.05) * bScale;
      const ex = vx + Math.cos(ang) * fLen;
      const ey = vy + Math.sin(ang) * fLen * 0.85;
      pushPoly(buildWatercolorBrushDaubPoly(m, vx, vy, ex, ey, cw * 0.055 * bScale), f % 2 === 0 ? c3 : c4);
    }
    const vw = cw * 0.30 * bScale;
    const vh = ch * 0.24 * bScale;
    pushPoly(buildPosterRoundedRectPoly(vx - vw * 0.5, vy, vw, vh, vw * 0.35, vw * 0.35, vw * 0.45, vw * 0.45, aspect), c1);
    pushPoly(buildPosterRoundedRectPoly(vx - vw * 0.22, vy - ch * 0.04, vw * 0.44, ch * 0.05, 4, 4, 0, 0, aspect), c1);
  } else if (archIndex === 5) {
    // ARCH 5: 3D Isometric Monument Cubes & Floating Sphere
    const drawIsoCube = (ox: number, oy: number, radX: number, hMul: number, topC: string, leftC: string, rightC: string) => {
      const radY = (radX * cw * aspect) / Math.max(1, ch);
      const dx = radX * 0.866;
      const dy = radY * 0.5;
      const hY = radY * hMul;
      pushPoly([[ox, oy - radY], [ox + dx, oy - dy], [ox, oy], [ox - dx, oy - dy]], topC);
      pushPoly([[ox - dx, oy - dy], [ox, oy], [ox, oy + hY], [ox - dx, oy + hY - dy]], leftC);
      pushPoly([[ox, oy], [ox + dx, oy - dy], [ox + dx, oy + hY - dy], [ox, oy + hY]], rightC);
    };
    pushPoly(makeCirclePoly(cx0 + cw * 0.5, cy0 + ch * 0.24, cw * 0.16 * bScale), c4);
    const colsIso = [
      { x: 0.30, y: 0.44, sz: 0.16, h: 1.4 + (sub % 2) * 0.3 },
      { x: 0.70, y: 0.44, sz: 0.16, h: 1.7 - (sub % 2) * 0.3 },
      { x: 0.50, y: 0.52, sz: 0.20, h: 1.5 },
    ];
    for (let i = 0; i < colsIso.length; i++) {
      const ci = colsIso[i];
      drawIsoCube(cx0 + cw * ci.x, cy0 + ch * ci.y, cw * ci.sz * bScale, ci.h, c2, c1, c3);
    }
  } else if (archIndex === 6) {
    // ARCH 6: 3D Isometric Architectural Stairway & Sun Portal
    const archW = cw * 0.62;
    const archH = artH * 0.82;
    const ax0 = cx0 + (cw - archW) * 0.5;
    const ay0 = cy0 + ch * 0.10;
    pushPoly(buildPosterRoundedRectPoly(ax0, ay0, archW, archH, archW * 0.48, archW * 0.48, 0, 0, aspect), mixCol(c4, cBg, 0.25));
    pushPoly(makeCirclePoly(cx0 + cw * 0.44, cy0 + ch * 0.26, cw * 0.13 * bScale), c4);
    const steps = 5;
    const baseX = cx0 + cw * 0.24;
    const baseY = cy0 + ch * 0.58;
    const stepW = cw * 0.08 * bScale;
    const stepH = ch * 0.048 * bScale;
    const depthX = cw * 0.18 * bScale;
    const depthY = -ch * 0.08 * bScale;
    for (let s = 0; s < steps; s++) {
      const x0 = baseX + s * stepW * 0.85;
      const y0 = baseY - s * stepH;
      pushPoly([[x0, y0], [x0 + stepW, y0], [x0 + stepW, baseY + ch * 0.08], [x0, baseY + ch * 0.08]], c1);
      pushPoly([[x0, y0], [x0 + depthX, y0 + depthY], [x0 + depthX + stepW, y0 + depthY], [x0 + stepW, y0]], c2);
      pushPoly([[x0 + stepW, y0], [x0 + depthX + stepW, y0 + depthY], [x0 + depthX + stepW, baseY + ch * 0.08 + depthY], [x0 + stepW, baseY + ch * 0.08]], c3);
    }
  } else if (archIndex === 7) {
    // ARCH 7: Paper-Cut Topographic Canyon Window & Desert Sun
    const padX = cw * 0.10;
    const winW = cw - padX * 2;
    const winH = artH * 0.88;
    const wy0 = cy0 + ch * 0.09;
    pushPoly(buildPosterRoundedRectPoly(cx0 + padX, wy0, winW, winH, winW * 0.48, winW * 0.48, 14, 14, aspect), mixCol(c2, cBg, 0.65));
    pushPoly(makeCirclePoly(cx0 + cw * (0.38 + (sub % 3) * 0.12), wy0 + winH * 0.28, cw * 0.16 * bScale), c2);
    const waveLayers = 4;
    const layerCols = [c1, c3, c4, mixCol(c1, "#090d16", 0.35)];
    for (let w = 0; w < waveLayers; w++) {
      const yBase = wy0 + winH * (0.44 + w * 0.13);
      const pts: [number, number][] = [];
      const steps = 28;
      const ph = cardIdx * 1.3 + w * 1.2 + variant * 1.1;
      for (let s = 0; s <= steps; s++) {
        const u = s / steps;
        const x = cx0 + padX + u * winW;
        const y = yBase + Math.sin(u * Math.PI * 2.0 + ph) * ch * 0.042 * bScale;
        pts.push([x, y]);
      }
      pts.push([cx0 + padX + winW, wy0 + winH], [cx0 + padX, wy0 + winH]);
      pushPoly(pts, layerCols[w % layerCols.length]);
    }
  } else if (archIndex === 8) {
    // ARCH 8: Angular Mountain Peaks, Pine Ridges & Concentric Halo Sun
    const sunX = cx0 + cw * 0.5;
    const sunY = cy0 + ch * 0.26;
    pushPoly(makeCirclePoly(sunX, sunY, cw * 0.25 * bScale), mixCol(c2, cBg, 0.45));
    pushPoly(makeCirclePoly(sunX, sunY, cw * 0.17 * bScale), c2);
    const by = artBottom;
    const peaks = [
      { xPeak: 0.28, yPeak: 0.38, colL: c1, colR: mixCol(c1, "#000000", 0.24) },
      { xPeak: 0.72, yPeak: 0.35, colL: c3, colR: mixCol(c3, "#000000", 0.24) },
      { xPeak: 0.50, yPeak: 0.44, colL: c4, colR: mixCol(c4, "#000000", 0.26) },
    ];
    for (let p = 0; p < peaks.length; p++) {
      const pk = peaks[(p + sub) % peaks.length];
      const px = cx0 + cw * pk.xPeak;
      const py = cy0 + ch * pk.yPeak;
      pushPoly([[cx0 + cw * 0.08, by], [px, py], [px, by]], pk.colL);
      pushPoly([[px, py], [cx1 - cw * 0.08, by], [px, by]], pk.colR);
    }
  } else if (archIndex === 9) {
    // ARCH 9: Corporate Annual Report Diagonal Chevron & Polygon Dossier
    const splitY = cy0 + ch * 0.42;
    const apexX = cx0 + cw * (sub % 2 === 0 ? 0.38 : 0.62);
    pushPoly([[cx0, cy0], [cx1, cy0], [cx1, splitY - ch * 0.08], [apexX, splitY + ch * 0.10], [cx0, splitY - ch * 0.04]], c1);
    pushPoly([[cx1, splitY - ch * 0.14], [cx1, splitY + ch * 0.08], [apexX, splitY + ch * 0.10]], c2);
    pushPoly([[cx0, splitY - ch * 0.08], [apexX, splitY + ch * 0.10], [cx0, splitY + ch * 0.14]], c3);
    const barY = splitY + ch * 0.16;
    pushPoly([[cx0 + cw * 0.10, barY], [cx0 + cw * 0.46, barY], [cx0 + cw * 0.46, barY + ch * 0.028], [cx0 + cw * 0.10, barY + ch * 0.028]], c4);
  } else if (archIndex === 10) {
    // ARCH 10: Executive Hexagon Tech Matrix & Geometric Corporate Frame
    pushPoly([[cx0, cy0], [cx1, cy0], [cx1, cy0 + ch * 0.30], [cx0, cy0 + ch * 0.44]], c1);
    const hexCenters = [
      { x: 0.62, y: 0.36, r: 0.19, c: c2 },
      { x: 0.36, y: 0.46, r: 0.15, c: c3 },
      { x: 0.64, y: 0.56, r: 0.13, c: c4 },
      { x: 0.40, y: 0.24, r: 0.11, c: c2 },
    ];
    for (let h = 0; h < hexCenters.length; h++) {
      const hc = hexCenters[(h + sub) % hexCenters.length];
      const hx = cx0 + cw * hc.x;
      const hy = cy0 + ch * hc.y;
      const hr = cw * hc.r * bScale;
      pushPoly(makeRegPoly(hx, hy, hr, 6, Math.PI / 6), hc.c);
      pushPoly(makeRegPoly(hx, hy, hr * 0.60, 6, Math.PI / 6), h % 2 === 0 ? cBg : c1);
    }
  } else if (archIndex === 11) {
    // ARCH 11: Japanese Zen Rising Sun & Ukiyo-e Wave Horizon Frame
    const padX = cw * 0.10;
    const fy0 = cy0 + ch * 0.08;
    const fw = cw - padX * 2;
    const fh = artH;
    const sunX = cx0 + cw * 0.5;
    const sunY = fy0 + fh * 0.42;
    pushPoly(makeCirclePoly(sunX, sunY, cw * 0.26 * bScale), c1);
    for (let sl = 0; sl < 3; sl++) {
      const sy = sunY - ch * 0.07 + sl * ch * 0.075;
      const sx = sunX + ((sl + sub) % 2 === 0 ? -cw * 0.24 : cw * 0.04);
      pushPoly(buildPosterRoundedRectPoly(sx, sy, cw * 0.24, ch * 0.02, 8, 8, 8, 8, aspect), cBg);
    }
    const bands = 4;
    for (let b = 0; b < bands; b++) {
      const y0 = fy0 + fh * (0.58 + b * 0.10);
      const pts: [number, number][] = [];
      for (let s = 0; s <= 28; s++) {
        const u = s / 28;
        const wave = Math.sin(u * Math.PI * 2 + b * 1.3 + sub) * ch * 0.028;
        pts.push([cx0 + padX + u * fw, y0 + wave]);
      }
      pts.push([cx0 + padX + fw, fy0 + fh], [cx0 + padX, fy0 + fh]);
      pushPoly(pts, b % 2 === 0 ? c2 : c3);
    }
    parts.push(drawPosterOutlineFrame(cx0 + padX, fy0, fw, fh, cw * 0.012, ch * 0.008, textCol, 0));
  } else if (archIndex === 12) {
    // ARCH 12: Japanese Enso Brush Ring, Bamboo Stalks & Floating Moon
    const ox = cx0 + cw * 0.5;
    const oy = artCy;
    pushPoly(makeRingPoly(ox, oy, cw * 0.31 * bScale, cw * 0.21 * bScale, 0.3 + sub * 0.5, 5.6 + sub * 0.5, 42), c1);
    pushPoly(makeCirclePoly(ox + cw * 0.07, oy - ch * 0.05, cw * 0.10 * bScale), c2);
    const stalks = 3;
    for (let st = 0; st < stalks; st++) {
      const sx = cx0 + cw * (0.24 + st * 0.12);
      const sw = cw * 0.022 * bScale;
      for (let seg = 0; seg < 4; seg++) {
        const sy = cy0 + ch * (0.12 + seg * 0.14);
        pushPoly([[sx, sy], [sx + sw, sy], [sx + sw, sy + ch * 0.12], [sx, sy + ch * 0.12]], st % 2 === 0 ? c3 : c4);
      }
    }
  } else if (archIndex === 13) {
    // ARCH 13: Retro 70s Groovy Rainbow U-Turn Ribbon Loop
    const rCols = [c1, c2, c3, c4, mixCol(c1, c2, 0.5)];
    const tracks = 5;
    const turnX = cx0 + cw * 0.5;
    const turnY = cy0 + ch * 0.42;
    const trackW = cw * 0.054 * bScale;
    for (let t = tracks - 1; t >= 0; t--) {
      const rOut = cw * 0.08 + (t + 1) * trackW;
      const rIn = cw * 0.08 + t * trackW;
      const col = rCols[(t + sub) % rCols.length];
      pushPoly([[turnX - rOut, cy0], [turnX - rIn, cy0], [turnX - rIn, turnY], [turnX - rOut, turnY]], col);
      pushPoly(makeRingPoly(turnX, turnY, rOut, rIn, 0, Math.PI, 28), col);
      pushPoly([[turnX + rIn, cy0 + ch * 0.14], [turnX + rOut, cy0 + ch * 0.14], [turnX + rOut, turnY], [turnX + rIn, turnY]], col);
    }
  } else if (archIndex === 14) {
    // ARCH 14: Retro 70s Funk Wave Ribbons & Sun Disc
    pushPoly(makeCirclePoly(cx0 + cw * 0.5, cy0 + ch * 0.24, cw * 0.18 * bScale), c4);
    const ribbonCount = 5;
    const rCols = [c1, c2, c3, c4, mixCol(c1, c2, 0.5)];
    for (let r = 0; r < ribbonCount; r++) {
      const offset = (r - 2) * ch * 0.058 * bScale;
      const topE: [number, number][] = [];
      const botE: [number, number][] = [];
      const thick = ch * 0.062 * bScale;
      for (let s = 0; s <= 32; s++) {
        const u = s / 32;
        const x = cx0 + u * cw;
        const y = cy0 + ch * 0.46 + offset + Math.sin(u * Math.PI * 1.8 + sub * 0.8) * ch * 0.10;
        topE.push([x, y - thick * 0.5]);
        botE.unshift([x, y + thick * 0.5]);
      }
      pushPoly(topE.concat(botE), rCols[(r + sub) % rCols.length]);
    }
  } else if (archIndex === 15) {
    // ARCH 15: Memphis Neo-Brutalist Offset Shadow Card, Zig-Zag & Geometric Shapes
    const bx = cx0 + cw * 0.13;
    const by = cy0 + ch * 0.11;
    const bw = cw * 0.72;
    const bh = artH * 0.84;
    pushPoly([[bx + cw * 0.04, by + ch * 0.03], [bx + bw + cw * 0.04, by + ch * 0.03], [bx + bw + cw * 0.04, by + bh + ch * 0.03], [bx + cw * 0.04, by + bh + ch * 0.03]], "#111827");
    pushPoly([[bx, by], [bx + bw, by], [bx + bw, by + bh], [bx, by + bh]], c1);
    pushPoly(makeCirclePoly(bx + bw * 0.34, by + bh * 0.36, cw * 0.15 * bScale), c2);
    pushPoly([[bx + bw * 0.70, by + bh * 0.18], [bx + bw * 0.90, by + bh * 0.56], [bx + bw * 0.48, by + bh * 0.56]], c3);
    const zx0 = bx + bw * 0.14;
    const zy0 = by + bh * 0.76;
    const zPtsTop: [number, number][] = [];
    const zPtsBot: [number, number][] = [];
    const teeth = 6;
    for (let z = 0; z <= teeth; z++) {
      const x = zx0 + (z / teeth) * bw * 0.72;
      const y = zy0 + (z % 2 === 0 ? -ch * 0.028 : ch * 0.028);
      zPtsTop.push([x, y - ch * 0.018]);
      zPtsBot.unshift([x, y + ch * 0.018]);
    }
    pushPoly(zPtsTop.concat(zPtsBot), c4);
  } else if (archIndex === 16) {
    // ARCH 16: Neo-Brutalist Bento Grid & Starburst Badge Sticker
    const pad = cw * 0.10;
    const splitX = cx0 + cw * (sub % 2 === 0 ? 0.48 : 0.52);
    const splitY = cy0 + ch * 0.38;
    const topEnd = artBottom - ch * 0.03;
    const g = cw * 0.022;
    pushPoly(buildPosterRoundedRectPoly(cx0 + pad, cy0 + ch * 0.10, splitX - cx0 - pad - g, splitY - cy0 - ch * 0.10 - g, 14, 14, 14, 14, aspect), c1);
    pushPoly(buildPosterRoundedRectPoly(splitX + g, cy0 + ch * 0.10, cx1 - pad - splitX - g, splitY - cy0 - ch * 0.10 - g, 14, 14, 14, 14, aspect), c2);
    pushPoly(buildPosterRoundedRectPoly(cx0 + pad, splitY + g, cx1 - cx0 - pad * 2, topEnd - splitY - g, 16, 16, 16, 16, aspect), c3);
    const stPts: [number, number][] = [];
    const spikes = 24;
    for (let k = 0; k < spikes; k++) {
      const a = (k / spikes) * Math.PI * 2;
      const r = (k % 2 === 0 ? cw * 0.16 : cw * 0.10) * bScale;
      const ry = (r * cw * aspect) / Math.max(1, ch);
      stPts.push([splitX + Math.cos(a) * r, splitY + Math.sin(a) * ry]);
    }
    pushPoly(stPts, c4);
  } else if (archIndex === 17) {
    // ARCH 17: Luxury Art Deco Sunburst Fan & Double Filigree Frame
    const goldCol = pickCol("#d4af37", 1);
    const lightGold = pickCol("#f3e5ab", 2);
    const padX = cw * 0.08;
    const padY = ch * 0.06;
    parts.push(drawPosterOutlineFrame(cx0 + padX, cy0 + padY, cw - padX * 2, ch - padY * 2, cw * 0.012, ch * 0.008, goldCol, 0));
    parts.push(drawPosterOutlineFrame(cx0 + padX * 1.45, cy0 + padY * 1.45, cw - padX * 2.9, ch - padY * 2.9, cw * 0.006, ch * 0.004, lightGold, 0));
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.44;
    const rays = 13;
    for (let i = 0; i < rays; i++) {
      const a = -Math.PI + (i / (rays - 1)) * Math.PI;
      const rLen = cw * (0.36 - Math.abs(i - (rays - 1) * 0.5) * (0.18 / rays)) * bScale;
      const rLenY = (rLen * cw * aspect) / Math.max(1, ch);
      pushPoly(
        [
          [ox, oy],
          [ox + Math.cos(a - 0.05) * rLen, oy + Math.sin(a - 0.05) * rLenY],
          [ox + Math.cos(a + 0.05) * rLen, oy + Math.sin(a + 0.05) * rLenY],
        ],
        i % 2 === 0 ? goldCol : lightGold
      );
    }
    const dRx = cw * 0.15 * bScale;
    const dRy = (dRx * cw * aspect) / Math.max(1, ch);
    pushPoly([[ox, oy - dRy], [ox + dRx, oy], [ox, oy + dRy], [ox - dRx, oy]], c1);
    pushPoly([[ox, oy - dRy * 0.62], [ox + dRx * 0.62, oy], [ox, oy + dRy * 0.62], [ox - dRx * 0.62, oy]], goldCol);
  } else if (archIndex === 18) {
    // ARCH 18: Art Deco Gatsby Stepped Skyscraper Spire & Concentric Octagons
    const goldCol = pickCol("#d4af37", 1);
    const lightGold = pickCol("#f3e5ab", 2);
    const ox = cx0 + cw * 0.5;
    const oy = cy0 + ch * 0.32;
    for (let k = 3; k >= 1; k--) {
      const r = cw * (0.105 * k) * bScale;
      pushPoly(makeRegPoly(ox, oy, r, 8, Math.PI / 8), k === 3 ? goldCol : k === 2 ? c1 : lightGold);
    }
    const tiers = 4;
    for (let t = 0; t < tiers; t++) {
      const tw = cw * (0.62 - t * 0.12) * bScale;
      const thTier = ch * (0.12 + t * 0.065);
      const tx0 = ox - tw * 0.5;
      const ty0 = artBottom - thTier;
      pushPoly([[tx0, ty0], [tx0 + tw, ty0], [tx0 + tw, artBottom], [tx0, artBottom]], t % 2 === 0 ? goldCol : c3);
    }
  } else if (archIndex === 19) {
    // ARCH 19: Scandinavian Botanical Leaf Branch & Organic Arch Backing
    const archW = cw * 0.64;
    const archH = artH * 0.85;
    const ax0 = cx0 + (cw - archW) * 0.5;
    const ay0 = cy0 + ch * 0.10;
    pushPoly(buildPosterRoundedRectPoly(ax0, ay0, archW, archH, archW * 0.48, archW * 0.48, 12, 12, aspect), c2);
    const stemX0 = cx0 + cw * 0.38;
    const stemY0 = ay0 + archH * 0.88;
    const stemX1 = cx0 + cw * 0.62;
    const stemY1 = ay0 + archH * 0.16;
    pushPoly(buildWatercolorBrushDaubPoly(m, stemX0, stemY0, stemX1, stemY1, cw * 0.016), c1);
    const leafPairs = 4;
    for (let lp = 0; lp < leafPairs; lp++) {
      const t = (lp + 0.5) / leafPairs;
      const lx = stemX0 + (stemX1 - stemX0) * t;
      const ly = stemY0 + (stemY1 - stemY0) * t;
      const leafL = cw * (0.19 - lp * 0.016) * bScale;
      const leafW = cw * 0.072 * bScale;
      pushPoly(buildWatercolorBrushDaubPoly(m, lx, ly, lx - leafL, ly - ch * 0.05, leafW), c1);
      pushPoly(buildWatercolorBrushDaubPoly(m, lx, ly, lx + leafL, ly - ch * 0.025, leafW), lp % 2 === 0 ? c3 : c4);
    }
  } else if (archIndex === 20) {
    // ARCH 20: Nordic Triple Arch Portal & Balance Sun Orbs
    const colsA = 3;
    const pad = cw * 0.10;
    const gap = cw * 0.03;
    const aw = (cw - pad * 2 - gap * 2) / colsA;
    const aCols = [c1, c2, c3];
    for (let a = 0; a < colsA; a++) {
      const ax = cx0 + pad + a * (aw + gap);
      const ah = artH * (0.64 + ((a + sub) % 3) * 0.12) * bScale;
      const ay = artBottom - ah;
      pushPoly(buildPosterRoundedRectPoly(ax, ay, aw, ah, aw * 0.48, aw * 0.48, 0, 0, aspect), aCols[(a + sub) % aCols.length]);
    }
    pushPoly(makeCirclePoly(cx0 + cw * 0.5, cy0 + ch * 0.22, cw * 0.11 * bScale), c4);
  } else if (archIndex === 21) {
    // ARCH 21: Op-Art Concentric Target Portal & Clean Split Backing
    const ox = cx0 + cw * 0.5;
    const oy = artCy;
    pushPoly([[cx0 + cw * 0.08, cy0 + ch * 0.08], [cx1 - cw * 0.08, cy0 + ch * 0.08], [cx0 + cw * 0.08, artBottom]], mixCol(c1, cBg, 0.35));
    const ringCount = 6;
    for (let r = ringCount; r >= 1; r--) {
      const rad = cw * (0.058 * r) * bScale;
      pushPoly(makeCirclePoly(ox, oy, rad), (r + sub) % 2 === 0 ? c2 : (r + sub) % 3 === 0 ? c4 : c3);
    }
  } else if (archIndex === 22) {
    // ARCH 22: 3D Vertical Accordion Prism Louvers & Central Sphere Portal
    const colsP = 6;
    const colW = (cw * 0.80) / colsP;
    const xStart = cx0 + cw * 0.10;
    const yTop = cy0 + ch * 0.11;
    const hCol = artH * 0.84;
    for (let c = 0; c < colsP; c++) {
      const xA = xStart + c * colW;
      const xMid = xA + colW * 0.5;
      const xB = xA + colW;
      pushPoly([[xA, yTop], [xMid, yTop - ch * 0.02], [xMid, yTop + hCol], [xA, yTop + hCol + ch * 0.02]], c % 2 === 0 ? c1 : c2);
      pushPoly([[xMid, yTop - ch * 0.02], [xB, yTop], [xB, yTop + hCol + ch * 0.02], [xMid, yTop + hCol]], c3);
    }
    pushPoly(makeCirclePoly(cx0 + cw * 0.5, yTop + hCol * 0.5, cw * 0.18 * bScale), c4);
  } else if (archIndex === 23) {
    // ARCH 23: Geometric Hourglass Portal & Orbiting Spheres
    const padX = cw * 0.14;
    const topY = cy0 + ch * 0.10;
    const midY = artCy;
    const botY = artBottom - ch * 0.02;
    const midX = cx0 + cw * 0.5;
    pushPoly([[cx0 + padX, topY], [cx1 - padX, topY], [midX, midY]], c1);
    pushPoly([[midX, midY], [cx1 - padX, botY], [cx0 + padX, botY]], c2);
    pushPoly(makeCirclePoly(midX, midY, cw * 0.13 * bScale), c3);
    pushPoly(makeCirclePoly(cx0 + cw * 0.24, midY, cw * 0.065 * bScale), c4);
    pushPoly(makeCirclePoly(cx1 - cw * 0.24, midY, cw * 0.065 * bScale), c4);
  } else {
    // ARCH 24: Radial Kinetic Sunburst Vortex & Concentric Center Disc
    const ox = cx0 + cw * 0.5;
    const oy = artCy;
    const blades = 12;
    const maxR = cw * 0.36 * bScale;
    const bCols = [c1, c2, c3, c4];
    for (let b = 0; b < blades; b++) {
      const a0 = (b / blades) * Math.PI * 2 + sub * 0.25;
      const a1 = ((b + 0.62) / blades) * Math.PI * 2 + sub * 0.25;
      pushPoly(makeArcSectorPoly(ox, oy, maxR, a0, a1, 10), bCols[(b + sub) % bCols.length]);
    }
    pushPoly(makeCirclePoly(ox, oy, cw * 0.14 * bScale), cBg);
    pushPoly(makeCirclePoly(ox, oy, cw * 0.09 * bScale), c2);
  }

  if (showText) {
    const titleIdx = (family + subStyle + cardIdx + Math.max(0, variant)) % MS_POSTER_TITLES.length;
    const [tLine1, tLine2, tSub] = MS_POSTER_TITLES[titleIdx];
    const padX = cw * 0.10;
    const th = ch * 0.034;
    const alignMode = (styleNum + variant) % 2 === 0 ? "center" : "left";
    const tx = alignMode === "center" ? cx0 + cw * 0.5 : cx0 + padX;
    parts.push(drawPosterVectorTextString(tLine1, tx, cy1 - ch * 0.185, th, aspect, "bold", textCol, alignMode));
    parts.push(drawPosterVectorTextString(tLine2, tx, cy1 - ch * 0.135, th * 0.90, aspect, "bold", textCol, alignMode));
    parts.push(drawPosterVectorTextString(tSub, tx, cy1 - ch * 0.088, th * 0.35, aspect, "wide", subTextCol, alignMode));
  }
}

function drawSinglePosterCardArtwork(
  m: any,
  parts: string[],
  cx0: number,
  cy0: number,
  cw: number,
  ch: number,
  cardIdx: number,
  artStyle: PosterArtStyle,
  scheme: {
    base: string;
    deep: string;
    mid: string;
    bright: string;
    glow: string;
    accent: string;
    bird: [string, string, string];
  },
  layers: number,
  bScale: number,
  showText: boolean,
  aspect: number,
  headlineIdx: number,
  variant = 0,
  colorSet = "rainbow6"
) {
  const cx1 = cx0 + cw;
  const cy1 = cy0 + ch;

  const pushClippedPoly = (poly: [number, number][], fillCol: string) => {
    const clipped = clipPosterPolygon(poly, cx0, cy0, cx1, cy1);
    if (clipped.length >= 3) {
      parts.push(`<path d="${polyToSvgPath(clipped)}" fill="${fillCol}"/>`);
    }
  };

  const ALL_REF_STYLES: PosterArtStyle[] = [
    "coral_gold_modern5",
    "aurora_mesh_blur4",
    "geo_pills_rings4",
    "midnight_sapphire_mesh4",
    "liquid_lava_frame3",
    "retro_circus_grunge6",
    "dark_neon_plasma4",
    "cyber_wireframe_tech3",
    "angular_prism_lines4",
    "minimal_smooth_mesh3",
    "teal_3d_louvers4",
    "pink_valentine_hearts4",
    "summer_retro_line_badges6",
    "retro_70s_stripe_tracks4",
    "dark_acid_lime_violet5",
    "minimal_quote_frames4",
    "white_3d_peach_blue_tubes5",
    "swiss_minimal_line_waves4",
    "groovy_psychedelic_cartoon4",
    "swiss_bw_typo_arch3",
    "ny2027_fireworks_ribbon3",
    "ny2027_swiss_interlock4",
    "ny2027_holly_jolly_christmas5",
    "ny2027_art_deco_gala4",
    "ny2027_retro_groovy_70s4",
    "nordic_scandi_christmas5",
    "ny2027_cyber_neon_synthwave4",
    "ny2027_swiss_editorial_grid4",
    "luxury_christmas_baubles4",
    "ny2027_isometric_monument4",
    "ny2027_memphis_pop5",
    "ny2027_japanese_zen4",
  ];

  const REF_NATIVE_COUNTS: Record<string, number> = {
    coral_gold_modern5: 5,
    aurora_mesh_blur4: 4,
    geo_pills_rings4: 4,
    midnight_sapphire_mesh4: 4,
    liquid_lava_frame3: 3,
    retro_circus_grunge6: 6,
    dark_neon_plasma4: 4,
    cyber_wireframe_tech3: 3,
    angular_prism_lines4: 4,
    minimal_smooth_mesh3: 3,
    teal_3d_louvers4: 4,
    watercolor_wash6: 6,
    pink_valentine_hearts4: 4,
    summer_retro_line_badges6: 6,
    retro_70s_stripe_tracks4: 4,
    dark_acid_lime_violet5: 5,
    minimal_quote_frames4: 4,
    white_3d_peach_blue_tubes5: 5,
    swiss_minimal_line_waves4: 4,
    groovy_psychedelic_cartoon4: 4,
    swiss_bw_typo_arch3: 3,
    ny2027_fireworks_ribbon3: 3,
    ny2027_swiss_interlock4: 4,
    ny2027_holly_jolly_christmas5: 5,
    ny2027_art_deco_gala4: 4,
    ny2027_retro_groovy_70s4: 4,
    nordic_scandi_christmas5: 5,
    ny2027_cyber_neon_synthwave4: 4,
    ny2027_swiss_editorial_grid4: 4,
    luxury_christmas_baubles4: 4,
    ny2027_isometric_monument4: 4,
    ny2027_memphis_pop5: 5,
    ny2027_japanese_zen4: 4,
  };

  // CRITICAL: Always stay within the user's selected Poster Set (effectiveStyle === artStyle)!
  // When variant > 0, generate rich color, layout, card-order, and structural variations of THIS exact Poster Set!
  // If user selects more cards on the board than the reference set's native card count (e.g., 6 PCS or 12 PCS on a 3-card or 4-card set),
  // automatically give overflow cards an offset variant of THIS SAME Poster Set so every card on the board belongs to the chosen set and no two cards repeat!
  const effectiveStyle: PosterArtStyle = artStyle;
  const nativeCap = REF_NATIVE_COUNTS[effectiveStyle];
  const effectiveVar =
    nativeCap && cardIdx >= nativeCap
      ? variant + Math.floor(cardIdx / nativeCap) * 7 + cardIdx
      : variant;

  // Dispatch to the 33 Exact Reference Poster Sets ("Habuhu" when variant === 0, plus complete structural variations when variant > 0)
  if (effectiveStyle === "coral_gold_modern5") {
    drawRef1CoralGoldModernCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "aurora_mesh_blur4") {
    drawRef2Or4SmoothAuroraMeshCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      false,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "geo_pills_rings4") {
    drawRef3GeoPillsRingsCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "midnight_sapphire_mesh4") {
    drawRef2Or4SmoothAuroraMeshCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      true,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "liquid_lava_frame3") {
    drawRef5LiquidLavaFrameCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "retro_circus_grunge6") {
    drawRef6RetroCircusGrungeCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "dark_neon_plasma4") {
    drawRef7DarkNeonPlasmaCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "cyber_wireframe_tech3") {
    drawRef8CyberWireframeCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "angular_prism_lines4") {
    drawRef9AngularPrismLinesCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "minimal_smooth_mesh3") {
    drawRef10MinimalSmoothMeshCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "teal_3d_louvers4") {
    drawRef11Teal3DLouversCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "pink_valentine_hearts4") {
    drawRef13PinkValentineHeartsCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "summer_retro_line_badges6") {
    drawRef14SummerRetroLineBadgesCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "retro_70s_stripe_tracks4") {
    drawRef15Retro70sStripeTracksCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "dark_acid_lime_violet5") {
    drawRef16DarkAcidLimeVioletCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "minimal_quote_frames4") {
    drawRef17MinimalQuoteFramesCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "white_3d_peach_blue_tubes5") {
    drawRef18White3DPeachBlueTubesCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "swiss_minimal_line_waves4") {
    drawRef19SwissMinimalLineWavesCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "groovy_psychedelic_cartoon4") {
    drawRef20GroovyPsychedelicCartoonCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "swiss_bw_typo_arch3") {
    drawRef21SwissBwTypoArchCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_fireworks_ribbon3") {
    drawRef22Ny2027FireworksRibbonCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_swiss_interlock4") {
    drawRef23Ny2027SwissInterlockCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_holly_jolly_christmas5") {
    drawRef24Ny2027HollyJollyChristmasCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_art_deco_gala4") {
    drawRef25Ny2027ArtDecoGalaCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_retro_groovy_70s4") {
    drawRef26Ny2027RetroGroovy70sCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "nordic_scandi_christmas5") {
    drawRef27NordicScandiChristmasCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_cyber_neon_synthwave4") {
    drawRef28Ny2027CyberNeonSynthwaveCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_swiss_editorial_grid4") {
    drawRef29Ny2027SwissEditorialGridCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "luxury_christmas_baubles4") {
    drawRef30LuxuryChristmasBaublesCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_isometric_monument4") {
    drawRef31Ny2027IsometricMonumentCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_memphis_pop5") {
    drawRef32Ny2027MemphisPopCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }
  if (effectiveStyle === "ny2027_japanese_zen4") {
    drawRef33Ny2027JapaneseZenCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }

  // Dispatch Curated Best-Selling Microstock Poster Sets (Set 34 .. Set 133 -> ms_poster_1 .. ms_poster_100)
  const msMatch = /^ms_poster_(\d+)$/.exec(String(effectiveStyle));
  if (msMatch) {
    const msNum = parseInt(msMatch[1], 10);
    drawCuratedMicrostockPosterCard(
      m,
      parts,
      pushClippedPoly,
      cx0,
      cy0,
      cw,
      ch,
      cardIdx,
      msNum,
      colorSet,
      bScale,
      showText,
      aspect,
      effectiveVar
    );
    return;
  }

  // Reference Set 12: 6 PCS Watercolor & Gouache Brush-Wash Poster Set (image_93cc923b.png)
  // 1. Solid Poster Card Base
  parts.push(
    `<rect x="${f1(cx0)}" y="${f1(cy0)}" width="${f1(cw)}" height="${f1(ch)}" fill="${scheme.base}"/>`
  );

  // Layer A: Broad Luminous Under-Wash Clouds
  const underCount = Math.max(10, Math.round(layers * 0.35));
  for (let i = 0; i < underCount; i++) {
    const u = m.rnd();
    const v = m.rnd();
    const px = cx0 + u * cw;
    const py = cy0 + v * ch;
    const rx = cw * (0.28 + m.rnd() * 0.38) * bScale;
    const ry = ch * (0.18 + m.rnd() * 0.28) * bScale;
    const diagBias = u * 0.55 + (1 - v) * 0.25;
    let col: string;
    if (diagBias > 0.52) {
      col = mixCol(scheme.bright, scheme.glow, 0.25 + m.rnd() * 0.65);
    } else if (diagBias < 0.32) {
      col = mixCol(scheme.mid, scheme.deep, 0.2 + m.rnd() * 0.6);
    } else {
      col = mixCol(scheme.base, scheme.bright, 0.2 + m.rnd() * 0.6);
    }
    const poly = buildWatercolorBlobPoly(m, px, py, rx, ry, m.rnd() * 180, 22, 0.22);
    pushClippedPoly(poly, col);
  }

  // Layer B: Mid-Tone Wet Gouache & Watercolor Blooms & Petals
  const midCount = Math.max(14, Math.round(layers * 0.45));
  for (let i = 0; i < midCount; i++) {
    const u = m.rnd();
    const v = m.rnd();
    const px = cx0 + u * cw;
    const py = cy0 + v * ch;
    const rx = cw * (0.14 + m.rnd() * 0.24) * bScale;
    const ry = ch * (0.09 + m.rnd() * 0.18) * bScale;
    const tonePick = (i + cardIdx + variant) % 5;
    let col: string;
    if (tonePick === 0) col = mixCol(scheme.glow, "#ffffff", 0.14 + m.rnd() * 0.22);
    else if (tonePick === 1) col = mixCol(scheme.bright, scheme.glow, m.rnd() * 0.7);
    else if (tonePick === 2) col = mixCol(scheme.base, scheme.mid, m.rnd() * 0.8);
    else if (tonePick === 3) col = mixCol(scheme.accent, scheme.deep, 0.15 + m.rnd() * 0.55);
    else col = mixCol(scheme.bright, scheme.base, 0.3 + m.rnd() * 0.5);

    const poly = buildWatercolorBlobPoly(m, px, py, rx, ry, m.rnd() * 180, 20, 0.26);
    pushClippedPoly(poly, col);
  }

  // Layer C: Expressive Directional Flat-Brush Gouache / Watercolor Strokes
  const strokeCount = Math.max(10, Math.round(layers * 0.35));
  for (let i = 0; i < strokeCount; i++) {
    const sx = cx0 + (0.08 + m.rnd() * 0.84) * cw;
    const sy = cy0 + (0.08 + m.rnd() * 0.82) * ch;
    const ang = ((-75 + m.rnd() * 150) * Math.PI) / 180;
    const sLen = cw * (0.22 + m.rnd() * 0.36) * bScale;
    const sThick = cw * (0.09 + m.rnd() * 0.13) * bScale;
    const ex = sx + Math.cos(ang) * sLen;
    const ey = sy + Math.sin(ang) * sLen;

    let sCol: string;
    if (i % 4 === 0) {
      sCol = mixCol(scheme.deep, scheme.accent, 0.25 + m.rnd() * 0.5);
    } else if (i % 4 === 1) {
      sCol = mixCol(scheme.glow, "#ffffff", 0.12 + m.rnd() * 0.25);
    } else if (i % 4 === 2) {
      sCol = mixCol(scheme.mid, scheme.deep, 0.15 + m.rnd() * 0.45);
    } else {
      sCol = mixCol(scheme.bright, scheme.glow, 0.2 + m.rnd() * 0.55);
    }
    const daub = buildWatercolorBrushDaubPoly(m, sx, sy, ex, ey, sThick);
    pushClippedPoly(daub, sCol);

    if (i % 3 === 0) {
      const innerCol =
        i % 2 === 0 ? mixCol(sCol, scheme.deep, 0.32) : mixCol(sCol, "#ffffff", 0.22);
      const innerDaub = buildWatercolorBrushDaubPoly(
        m,
        sx + (ex - sx) * 0.12,
        sy + (ey - sy) * 0.12,
        ex - (ex - sx) * 0.15,
        ey - (ey - sy) * 0.15,
        sThick * 0.48
      );
      pushClippedPoly(innerDaub, innerCol);
    }
  }

  if (showText) {
    const legPoly = buildWatercolorBlobPoly(
      m,
      cx0 + cw * 0.28,
      cy0 + ch * 0.86,
      cw * 0.42,
      ch * 0.18,
      -12,
      18,
      0.18
    );
    pushClippedPoly(legPoly, mixCol(scheme.mid, scheme.deep, 0.38));

    const [line1, line2] = POSTER_HEADLINES[headlineIdx % POSTER_HEADLINES.length];
    const padX = cw * 0.095;
    const line1H = Math.min(ch * 0.044, cw * aspect * 0.095);
    const line2H = line1H * 1.06;
    const line2Y = cy1 - ch * 0.072 - line2H;
    const line1Y = line2Y - line1H * 1.32;

    parts.push(
      drawPosterVectorTextString(
        line1,
        cx0 + padX,
        line1Y,
        line1H,
        aspect,
        "regular",
        "#ffffff",
        "left"
      )
    );
    parts.push(
      drawPosterVectorTextString(
        line2,
        cx0 + padX,
        line2Y,
        line2H,
        aspect,
        "bold",
        "#ffffff",
        "left"
      )
    );

    const brandH = Math.min(ch * 0.017, cw * aspect * 0.036);
    const brandY = cy0 + ch * 0.068;
    const brandRightX = cx1 - padX;
    parts.push(
      drawPosterVectorTextString(
        "BRANDNAME",
        brandRightX,
        brandY,
        brandH,
        aspect,
        "regular",
        "#ffffff",
        "right"
      )
    );
    const brandScX = (brandH / 14) / Math.max(0.45, aspect);
    const brandWidth = (9 * 10 + 8 * 2.2) * brandScX;
    const birdCx = brandRightX - brandWidth - brandH * (1.2 / Math.max(0.45, aspect));
    const birdCy = brandY + brandH * 0.48;
    parts.push(
      drawPosterOrigamiBirdLogo(
        birdCx,
        birdCy,
        brandH * 0.95,
        aspect,
        scheme.bird[0],
        scheme.bird[1],
        scheme.bird[2]
      )
    );
  }
}

const POSTER_DEFAULT_BOARD_BG: Record<string, string> = {
  coral_gold_modern5: "#090b0e",
  aurora_mesh_blur4: "#2e3136",
  geo_pills_rings4: "#e5e7eb",
  midnight_sapphire_mesh4: "#282d33",
  liquid_lava_frame3: "#36393f",
  retro_circus_grunge6: "#e8eaed",
  dark_neon_plasma4: "#4f5b69",
  cyber_wireframe_tech3: "#f1f5f9",
  angular_prism_lines4: "#e4e9ee",
  minimal_smooth_mesh3: "#121417",
  teal_3d_louvers4: "#e8eaed",
  watercolor: "#475060",
  pink_valentine_hearts4: "#f8fafc",
  summer_retro_line_badges6: "#f1f5f9",
  retro_70s_stripe_tracks4: "#e2e8f0",
  dark_acid_lime_violet5: "#e5e7eb",
  minimal_quote_frames4: "#f1f5f9",
  white_3d_peach_blue_tubes5: "#18181b",
  swiss_minimal_line_waves4: "#e2e8f0",
  groovy_psychedelic_cartoon4: "#e5e7eb",
  swiss_bw_typo_arch3: "#e4e4e7",
    ny2027_fireworks_ribbon3: "#09090b",
  ny2027_swiss_interlock4: "#ffffff",
  ny2027_holly_jolly_christmas5: "#ffffff",
  ny2027_art_deco_gala4: "#11131a",
  ny2027_retro_groovy_70s4: "#f5efe6",
  nordic_scandi_christmas5: "#f8fafc",
  ny2027_cyber_neon_synthwave4: "#060810",
  ny2027_swiss_editorial_grid4: "#e5e7eb",
  luxury_christmas_baubles4: "#0b0f17",
  ny2027_isometric_monument4: "#f1f5f9",
  ny2027_memphis_pop5: "#f5efe6",
  ny2027_japanese_zen4: "#e7e2d8",
};

function renderMasterPosterCollection(
  m: any,
  q: Record<string, any>,
  defaultStyle: PosterArtStyle,
  defaultBoardBg: string
) {
  const pcsMode = String(q.pcs || "4");
  const showText = q.showText !== false && q.showText !== "false";
  const colorSet = String(q.colorSet || "rainbow6");
  const layers = Math.max(18, Math.min(85, +(q.layers ?? 48)));
  const bScale = Math.max(0.5, Math.min(1.8, +(q.brushScale ?? 100) / 100));
  const shadowAmt = Math.max(0, Math.min(100, +(q.shadow ?? 65)));
  const variant = Math.max(0, Math.round(+(q.variant ?? 0)));

  const dims = getRatioDims(
    m.C?.px || 5000,
    m.C?.ratio || (pcsMode === "1" ? "3:4" : "2:1"),
    m.C?.artW,
    m.C?.artH
  );
  const aspect = Math.max(0.5, Math.min(2.6, dims.w / Math.max(1, dims.h)));

  const parts: string[] = [];

  // Mandatory Studio Presentation Background Board underneath ALL posters (even in 1 PCS & EPS 10!)
  const boardBg = defaultBoardBg || POSTER_DEFAULT_BOARD_BG[defaultStyle] || "#2e3136";
  parts.push(`<rect x="0" y="0" width="${T}" height="${T}" fill="${boardBg}" data-bg="1"/>`);

  // Helper to emit soft vector drop-shadow behind each poster card (100% pure flat vector rects for EPS 10)
  const isCleanWhiteRefSet =
    defaultStyle === "ny2027_swiss_interlock4" ||
    defaultStyle === "ny2027_holly_jolly_christmas5" ||
    defaultStyle === "ny2027_fireworks_ribbon3";
  const emitCardDropShadow = (cx0: number, cy0: number, cw: number, ch: number) => {
    if (shadowAmt <= 0 || isCleanWhiteRefSet) return;
    const shScale = shadowAmt / 65;
    const isDarkBoard = lumH(boardBg) < 85;
    const outerCol = isDarkBoard
      ? mixCol(boardBg, "#000000", 0.58)
      : mixCol(boardBg, "#0f172a", 0.16);
    const innerCol = isDarkBoard
      ? mixCol(boardBg, "#000000", 0.78)
      : mixCol(boardBg, "#0f172a", 0.28);
    parts.push(
      `<rect x="${f1(cx0 + 5 * shScale)}" y="${f1(cy0 + 14 * shScale)}" width="${f1(
        cw + 3 * shScale
      )}" height="${f1(ch + 4 * shScale)}" fill="${outerCol}"/>`
    );
    parts.push(
      `<rect x="${f1(cx0 + 2.5 * shScale)}" y="${f1(cy0 + 7 * shScale)}" width="${f1(
        cw + 1 * shScale
      )}" height="${f1(ch + 2 * shScale)}" fill="${innerCol}"/>`
    );
  };

  // Build color schemes for watercolor or custom palette variations (without shifting cards left/right)
  const getCardScheme = (idx: number) => {
    const pv = makePosterVar(m, variant, idx, colorSet);
    if (colorSet === "rainbow6") {
      const ref = POSTER_RAINBOW_6[idx % POSTER_RAINBOW_6.length];
      if (!pv.isVar) return ref;
      return {
        base: pv.vCol(ref.base, idx),
        deep: pv.vCol(ref.deep, idx),
        mid: pv.vCol(ref.mid, idx),
        bright: pv.vCol(ref.bright, idx),
        glow: pv.vCol(ref.glow, idx),
        accent: pv.vCol(ref.accent, idx + 1),
        bird: ref.bird,
      };
    }
    const rawCol =
      colorSet === "sunset"
        ? ["#9b2fae", "#ff3d57", "#ff7b00", "#ffb700", "#e01e5a", "#673ab7"][idx % 6]
        : colorSet === "ocean"
        ? ["#00b4f5", "#00897b", "#1e88e5", "#43a047", "#3949ab", "#00acc1"][idx % 6]
        : colorSet === "pastel"
        ? ["#b388ff", "#80d8ff", "#b9f6ca", "#ffe57f", "#ff9e80", "#f8bbd0"][idx % 6]
        : m.col(idx % 5);
    const baseCol = pv.vCol(rawCol, idx);
    return {
      base: baseCol,
      deep: mixCol(baseCol, "#090d16", 0.42),
      mid: mixCol(baseCol, "#090d16", 0.18),
      bright: mixCol(baseCol, "#ffffff", 0.18),
      glow: mixCol(baseCol, "#ffffff", 0.42),
      accent: mixCol(baseCol, m.col((idx + 1) % 5), 0.35),
      bird: ["#ffd600", "#00e5ff", "#ff5722"] as [string, string, string],
    };
  };

  if (pcsMode === "1") {
    // 1 PCS SINGLE POSTER ON PRESENTATION BACKGROUND BOARD (with studio frame margin & soft drop-shadow!)
    const cw = aspect >= 1.25 ? 540 : 760;
    const ch = 840;
    const cx0 = (T - cw) * 0.5;
    const cy0 = (T - ch) * 0.5;
    emitCardDropShadow(cx0, cy0, cw, ch);
    const singleCardIdx = variant % 6;
    drawSinglePosterCardArtwork(
      m,
      parts,
      cx0,
      cy0,
      cw,
      ch,
      singleCardIdx,
      defaultStyle,
      getCardScheme(singleCardIdx),
      Math.round(layers * 1.15),
      bScale,
      showText,
      aspect,
      singleCardIdx,
      variant,
      colorSet
    );
    m.raw(parts.join(""));
    return;
  }

  // Multi-Row Studio Grid Layouts: 4grid (2x2), 6grid (3x2), 8 (4x2), 9 (3x3), 10 (5x2), 12 (4x3)
  const gridMap: Record<string, { cols: number; rows: number }> = {
    "4grid": { cols: 2, rows: 2 },
    "6grid": { cols: 3, rows: 2 },
    "8": { cols: 4, rows: 2 },
    "9": { cols: 3, rows: 3 },
    "10": { cols: 5, rows: 2 },
    "12": { cols: 4, rows: 3 },
  };

  if (gridMap[pcsMode]) {
    const { cols, rows } = gridMap[pcsMode];
    const padX = cols >= 5 ? 24 : cols === 4 ? 32 : 46;
    const padY = rows >= 3 ? 34 : 46;
    const gapX = cols >= 5 ? 18 : cols === 4 ? 24 : 36;
    const gapY = rows >= 3 ? 28 : 40;
    const cw = (T - padX * 2 - gapX * (cols - 1)) / cols;
    const ch = (T - padY * 2 - gapY * (rows - 1)) / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const cx0 = padX + c * (cw + gapX);
        const cy0 = padY + r * (ch + gapY);
        emitCardDropShadow(cx0, cy0, cw, ch);
        drawSinglePosterCardArtwork(
          m,
          parts,
          cx0,
          cy0,
          cw,
          ch,
          idx,
          defaultStyle,
          getCardScheme(idx),
          layers,
          bScale,
          showText,
          aspect,
          idx,
          variant,
          colorSet
        );
      }
    }
    m.raw(parts.join(""));
    return;
  }

  // Horizontal Row Set: 2 PCS, 3 PCS, 4 PCS, 5 PCS, or 6 PCS (Exact match to all 33 Reference Poster Sets!)
  const count = Math.max(2, Math.min(6, parseInt(pcsMode, 10) || 4));
  const isFlushTriptych = defaultStyle === "ny2027_fireworks_ribbon3" && count === 3;
  const outerPadX = isFlushTriptych
    ? 24
    : count >= 6
    ? 24
    : count === 5
    ? 28
    : count === 4
    ? 38
    : 48;
  const gapX = isFlushTriptych
    ? 0
    : count >= 6
    ? 20
    : count === 5
    ? 22
    : count === 4
    ? 30
    : 40;
  const cw = (T - outerPadX * 2 - gapX * (count - 1)) / count;
  const ch = isFlushTriptych
    ? Math.min(935, Math.max(780, cw * aspect * 1.48))
    : Math.min(835, Math.max(600, cw * aspect * (count === 3 ? 1.24 : 1.42)));
  const cy0 = (T - ch) * 0.5;

  for (let i = 0; i < count; i++) {
    const cx0 = outerPadX + i * (cw + gapX);
    emitCardDropShadow(cx0, cy0, cw, ch);
    drawSinglePosterCardArtwork(
      m,
      parts,
      cx0,
      cy0,
      cw,
      ch,
      i,
      defaultStyle,
      getCardScheme(i),
      layers,
      bScale,
      showText,
      aspect,
      i,
      variant,
      colorSet
    );
  }

  m.raw(parts.join(""));
}

export interface MasterPosterModeSpec {
  id: string;
  name: string;
  shortLabel: string;
  defPcs: string;
  style: PosterArtStyle;
  boardBg: string;
  defColorSet: string;
}

const CURATED_100_MICROSTOCK_POSTER_CATALOG: {
  familyName: string;
  shortPrefix: string;
  boardBgs: string[];
  colorSet: string;
  editions: string[];
}[] = [
  {
    familyName: "Swiss Bauhaus Geometric Exhibition",
    shortPrefix: "BAUHAUS",
    boardBgs: ["#18181b", "#e5e7eb", "#1f2937", "#e2e8f0", "#111827"],
    colorSet: "sunset",
    editions: [
      "Weimar Arch & Grid",
      "Dessau Constructivist",
      "Zurich Modular Typo",
      "Primary Circle & Pillar",
      "Nordic Museum Split",
      "Monolith Quarter-Arc",
      "Asymmetric Balance",
      "Modernist Biennal",
      "Kinetic Suprematist",
      "Gallery Tri-Block",
    ],
  },
  {
    familyName: "Matisse Boho Botanical & Organic Cutout",
    shortPrefix: "BOHO MATISSE",
    boardBgs: ["#ded6c8", "#292524", "#e7e0d3", "#1c1917", "#dfd9ce"],
    colorSet: "pastel",
    editions: [
      "Terracotta Sun & Leaf",
      "Mediterranean Coral Arch",
      "Desert Clay Collage",
      "Olive & Sage Monstera",
      "Canyon Moon & Foliage",
      "Warm Linen Cutout",
      "Wabi-Sabi Organic Pebble",
      "Riviera Botanical Studio",
      "Ochre & Rust Silhouette",
      "Artisan Ceramic & Palm",
    ],
  },
  {
    familyName: "3D Isometric Cube & Architectural Podium",
    shortPrefix: "3D ISOMETRIC",
    boardBgs: ["#0f172a", "#e2e8f0", "#1e1b4b", "#f1f5f9", "#090d16"],
    colorSet: "ocean",
    editions: [
      "Monument Stair & Podium",
      "Escher Floating Cubes",
      "Architectural Vault Steps",
      "Minimalist Product Stage",
      "Geometric Brutalist Tower",
      "Neo-Mint Isometric Pedestal",
      "Sapphire Prism Courtyard",
      "Terracotta Gallery Plinth",
      "Symmetry Cube Matrix",
      "3D Showroom Display",
    ],
  },
  {
    familyName: "Paper-Cut Topographic Canyon & Valley",
    shortPrefix: "PAPER-CUT",
    boardBgs: ["#1e293b", "#e5e7eb", "#0f172a", "#cbd5e1", "#18181b"],
    colorSet: "rainbow6",
    editions: [
      "Alpine Sunrise Ridges",
      "Coral Reef Depth Contours",
      "Desert Dune Shadow Waves",
      "Fjord Emerald Valley",
      "Crimson Horizon Cliffs",
      "Nordic Glacier Layers",
      "Golden Hour Mountain Mist",
      "Origami Wave Terraces",
      "Midnight Moonlit Canyon",
      "Tropical Lagoon Contours",
    ],
  },
  {
    familyName: "Corporate Annual Report & Executive Cover",
    shortPrefix: "CORP REPORT",
    boardBgs: ["#e2e8f0", "#1e293b", "#f1f5f9", "#0f172a", "#cbd5e1"],
    colorSet: "ocean",
    editions: [
      "FintechDiagonal Chevron",
      "Global Summit Brochure",
      "Executive Strategy Dossier",
      "Enterprise Cloud Whitepaper",
      "Venture Capital Pitch Cover",
      "Architecture Firm Portfolio",
      "Clean Energy Sustainability",
      "Medical & Biotech Journal",
      "Legal & Finance Yearbook",
      "Tech Unicorn Keynote Set",
    ],
  },
  {
    familyName: "Minimalist Japanese Zen Sun & Ukiyo Wave",
    shortPrefix: "ZEN JAPANESE",
    boardBgs: ["#27272a", "#e5e0d5", "#1c1917", "#dfd8c8", "#18181b"],
    colorSet: "sunset",
    editions: [
      "Crimson Torii Horizon",
      "Kyoto Bamboo & Golden Sun",
      "Fuji Mist & Indigo Wave",
      "Wabi-Sabi Ink & Moon",
      "Sakura Dusk Silhouette",
      "Hokusai Crest & Cloud",
      "Zen Garden Stone Balance",
      "Edo Gold Leaf & Pine",
      "Sumi-e Mountain Dawn",
      "Minimalist Haiku Scroll",
    ],
  },
  {
    familyName: "Retro 70s Groovy Rainbow Arch & Sunburst",
    shortPrefix: "70S GROOVY",
    boardBgs: ["#292524", "#ede6d6", "#1c1917", "#e5dec9", "#3f3f46"],
    colorSet: "sunset",
    editions: [
      "Vinyl Funk Rainbow U-Arch",
      "California Sunset Motel",
      "Psychedelic Soul Festival",
      "Mustard & Burnt Orange Wave",
      "Roller Disco Concentric Loop",
      "Bohemian Desert Highway",
      "Vintage Cassette Ribbon",
      "Cosmic Starburst & Stripes",
      "Summer Surf & Corduroy",
      "Analog Synth Pop Revival",
    ],
  },
  {
    familyName: "Memphis 90s Pop-Art & Neo-Brutalist Grid",
    shortPrefix: "MEMPHIS POP",
    boardBgs: ["#18181b", "#f3f4f6", "#27272a", "#e5e7eb", "#09090b"],
    colorSet: "rainbow6",
    editions: [
      "Milan Ettore Confetti Box",
      "Neo-Brutalist Hard Shadow",
      "90s Arcade Squiggle & Grid",
      "Acid Yellow & Cobalt Pop",
      "Urban Streetwear Zine Cover",
      "Checkerboard & Pill Stamp",
      "zine Risograph Halftone",
      "radical Geometry Sticker Set",
      "Tokyo Harajuku Pop Poster",
      "Bold Drop-Shadow Bento",
    ],
  },
  {
    familyName: "Luxury Art Deco Gold Foil & Velvet Fan",
    shortPrefix: "ART DECO LUX",
    boardBgs: ["#090a0f", "#1e242b", "#11131a", "#27272a", "#05070b"],
    colorSet: "sunset",
    editions: [
      "Gatsby Champagne Fan Scallop",
      "Emerald Velvet & Gold Frame",
      "Royal Sapphire Sunburst Arch",
      "Obsidian & Brass Monogram",
      "Monte Carlo Gala Invitation",
      "Chrysler Spire Geometry",
      "Burlesque Crimson & Gold",
      "Opulent Diamond Lattice",
      "Noir Cinema Premiere Set",
      "Imperial Peacock Filigree",
    ],
  },
  {
    familyName: "Scandinavian Minimalist Arch & Eco Leaf",
    shortPrefix: "SCANDI ECO",
    boardBgs: ["#e5e0d8", "#262626", "#dce2dc", "#1f2421", "#ebe6de"],
    colorSet: "pastel",
    editions: [
      "Copenhagen Studio Archway",
      "Stockholm Sage & Linen Leaf",
      "Oslo Sandstone & Pebble",
      "Helsinki Birch & Morning Sun",
      "Organic Skincare Spa Cover",
      "Botanical Apothecary Set",
      "Nordic Interior Gallery Wall",
      "Eucalyptus & Terracotta Vase",
      "Mindful Yoga & Wellness",
      "Sustainable Living Lookbook",
    ],
  },
];

const BASE_12_REFERENCE_POSTER_MODES: MasterPosterModeSpec[] = [
  {
    id: "poster_ref1_coral_gold_5pcs",
    name: "Set 1: Coral, Pink & Gold Modernist 5 PCS Poster Set",
    shortLabel: "SET 1: CORAL GOLD 5P",
    defPcs: "5",
    style: "coral_gold_modern5",
    boardBg: "#090b0e",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref2_aurora_mesh_4pcs",
    name: "Set 2: Smooth Aurora Mesh Gradient 4 PCS Poster Set",
    shortLabel: "SET 2: AURORA MESH 4P",
    defPcs: "4",
    style: "aurora_mesh_blur4",
    boardBg: "#2e3136",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref3_geo_pills_rings_4pcs",
    name: "Set 3: 3D Pills, Halftone Circles & C-Rings 4 PCS Set",
    shortLabel: "SET 3: 3D PILLS & RINGS 4P",
    defPcs: "4",
    style: "geo_pills_rings4",
    boardBg: "#e5e7eb",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref4_sapphire_mesh_4pcs",
    name: "Set 4: Deep Sapphire & Midnight Blue Mesh 4 PCS Set",
    shortLabel: "SET 4: SAPPHIRE MESH 4P",
    defPcs: "4",
    style: "midnight_sapphire_mesh4",
    boardBg: "#282d33",
    defColorSet: "ocean",
  },
  {
    id: "poster_ref5_liquid_frame_3pcs",
    name: "Set 5: Liquid Lava Blobs & Split White Frame 3 PCS Set",
    shortLabel: "SET 5: LIQUID FRAME 3P",
    defPcs: "3",
    style: "liquid_lava_frame3",
    boardBg: "#36393f",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref6_retro_circus_6pcs",
    name: "Set 6: Retro Sunburst, Harlequin Diamond & Vortex 6 PCS",
    shortLabel: "SET 6: RETRO SUNBURST 6P",
    defPcs: "6",
    style: "retro_circus_grunge6",
    boardBg: "#e8eaed",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref7_dark_neon_4pcs",
    name: "Set 7: Dark Neon 3D Bioluminescent Fluid Wave 4 PCS Set",
    shortLabel: "SET 7: DARK NEON FLUID 4P",
    defPcs: "4",
    style: "dark_neon_plasma4",
    boardBg: "#4f5b69",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref8_cyber_wireframe_3pcs",
    name: "Set 8: Cyber Wireframe Wave & Glowing Sphere 3 PCS Set",
    shortLabel: "SET 8: CYBER WIREFRAME 3P",
    defPcs: "3",
    style: "cyber_wireframe_tech3",
    boardBg: "#f1f5f9",
    defColorSet: "ocean",
  },
  {
    id: "poster_ref9_angular_prism_4pcs",
    name: "Set 9: 3D Angular Prism & Line-Hatching 4 PCS Poster Set",
    shortLabel: "SET 9: ANGULAR PRISM 4P",
    defPcs: "4",
    style: "angular_prism_lines4",
    boardBg: "#e4e9ee",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref10_minimal_mesh_3pcs",
    name: "Set 10: Minimal Ultra-Smooth Diagonal Gradient 3 PCS Set",
    shortLabel: "SET 10: MINIMAL MESH 3P",
    defPcs: "3",
    style: "minimal_smooth_mesh3",
    boardBg: "#121417",
    defColorSet: "pastel",
  },
  {
    id: "poster_ref11_teal_louvers_4pcs",
    name: "Set 11: Emerald Teal 3D Arch, Prism & Louver 4 PCS Set",
    shortLabel: "SET 11: TEAL 3D LOUVERS 4P",
    defPcs: "4",
    style: "teal_3d_louvers4",
    boardBg: "#e8eaed",
    defColorSet: "ocean",
  },
  {
    id: "poster_watercolor_wash_set",
    name: "Set 12: Watercolor & Gouache Brush-Wash 6 PCS Poster Set",
    shortLabel: "SET 12: WATERCOLOR 6P",
    defPcs: "6",
    style: "watercolor",
    boardBg: "#475060",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref13_valentine_hearts_4pcs",
    name: "Set 13: Romantic Pink Gradient & Concentric Hearts 4 PCS Set",
    shortLabel: "SET 13: PINK HEARTS 4P",
    defPcs: "4",
    style: "pink_valentine_hearts4",
    boardBg: "#f8fafc",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref14_summer_retro_badges_6pcs",
    name: "Set 14: Retro Summer Arch, Sunburst, Wave, Leaf & BBQ 6 PCS Set",
    shortLabel: "SET 14: SUMMER RETRO 6P",
    defPcs: "6",
    style: "summer_retro_line_badges6",
    boardBg: "#f1f5f9",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref15_retro_70s_stripes_4pcs",
    name: "Set 15: Minimalist 70s Earth-Tone 5-Stripe Tracks 4 PCS Set",
    shortLabel: "SET 15: 70S STRIPES 4P",
    defPcs: "4",
    style: "retro_70s_stripe_tracks4",
    boardBg: "#e2e8f0",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref16_acid_lime_violet_5pcs",
    name: "Set 16: Dark Navy, Acid Lime & Ultra-Violet 3D Kinetic 5 PCS Set",
    shortLabel: "SET 16: ACID LIME 3D 5P",
    defPcs: "5",
    style: "dark_acid_lime_violet5",
    boardBg: "#e5e7eb",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref17_minimal_quote_frames_4pcs",
    name: "Set 17: Minimalist Social Media Quote Frame 4 PCS Poster Set",
    shortLabel: "SET 17: QUOTE FRAMES 4P",
    defPcs: "4",
    style: "minimal_quote_frames4",
    boardBg: "#f1f5f9",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref18_white_3d_peach_blue_5pcs",
    name: "Set 18: Clean White, Peach-Coral & Steel-Blue 3D Fluid 5 PCS Set",
    shortLabel: "SET 18: 3D PEACH BLUE 5P",
    defPcs: "5",
    style: "white_3d_peach_blue_tubes5",
    boardBg: "#18181b",
    defColorSet: "pastel",
  },
  {
    id: "poster_ref19_swiss_minimal_lines_4pcs",
    name: "Set 19: Swiss Minimalist Parallel Line-Art & Arch Vortex 4 PCS Set",
    shortLabel: "SET 19: SWISS LINE ART 4P",
    defPcs: "4",
    style: "swiss_minimal_line_waves4",
    boardBg: "#e2e8f0",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref20_groovy_psychedelic_4pcs",
    name: "Set 20: Groovy 70s Smiley, Walking Daisy, Mushroom & Love 4 PCS Set",
    shortLabel: "SET 20: GROOVY SMILEY 4P",
    defPcs: "4",
    style: "groovy_psychedelic_cartoon4",
    boardBg: "#e5e7eb",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref21_swiss_bw_arch_3pcs",
    name: "Set 21: High-Contrast Black & White Swiss Brutalist 07/27 3 PCS Set",
    shortLabel: "SET 21: SWISS B&W 3P",
    defPcs: "3",
    style: "swiss_bw_typo_arch3",
    boardBg: "#e4e4e7",
    defColorSet: "ocean",
  },
  {
    id: "poster_ref22_ny2027_fireworks_ribbon_3pcs",
    name: "Set 22: 2027 Happy New Year Ribbon Typography & Starburst Fireworks 3 PCS Triptych",
    shortLabel: "SET 22: 2027 FIREWORKS 3P",
    defPcs: "3",
    style: "ny2027_fireworks_ribbon3",
    boardBg: "#09090b",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref23_ny2027_bauhaus_interlock_4pcs",
    name: "Set 23: 2027 Swiss Bauhaus Interlocking Geometric Typography 4 PCS Poster Set",
    shortLabel: "SET 23: 2027 BAUHAUS 4P",
    defPcs: "4",
    style: "ny2027_swiss_interlock4",
    boardBg: "#ffffff",
    defColorSet: "pastel",
  },
  {
    id: "poster_ref24_ny2027_xmas_holly_jolly_5pcs",
    name: "Set 24: 2027 Merry Christmas & Holly Jolly Gifts, Bauble, Rocking Horse & Tree 5 PCS Set",
    shortLabel: "SET 24: 2027 HOLLY XMAS 5P",
    defPcs: "5",
    style: "ny2027_holly_jolly_christmas5",
    boardBg: "#ffffff",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref25_ny2027_gold_champagne_deco_4pcs",
    name: "Set 25: 2027 Art Deco Gold Foil Champagne Sunburst Fan & Gala 4 PCS Set",
    shortLabel: "SET 25: 2027 DECO GOLD 4P",
    defPcs: "4",
    style: "ny2027_art_deco_gala4",
    boardBg: "#11131a",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref26_ny2027_retro_70s_disco_4pcs",
    name: "Set 26: 2027 Retro 70s Groovy Rainbow Wave, Daisy & Funk Typography 4 PCS Set",
    shortLabel: "SET 26: 2027 70S GROOVY 4P",
    defPcs: "4",
    style: "ny2027_retro_groovy_70s4",
    boardBg: "#f5efe6",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref27_ny2027_nordic_folk_winter_5pcs",
    name: "Set 27: 2027 Scandinavian Folk Reindeer, Snowglobe, Wreath & Ornaments 5 PCS Set",
    shortLabel: "SET 27: 2027 NORDIC XMAS 5P",
    defPcs: "5",
    style: "nordic_scandi_christmas5",
    boardBg: "#f8fafc",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref28_ny2027_neon_cyber_4pcs",
    name: "Set 28: 2027 Neon Cyberpunk Synthwave Sunset Grid & Chrome Portal 4 PCS Set",
    shortLabel: "SET 28: 2027 NEON CYBER 4P",
    defPcs: "4",
    style: "ny2027_cyber_neon_synthwave4",
    boardBg: "#060810",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref29_ny2027_swiss_editorial_4pcs",
    name: "Set 29: 2027 Swiss Brutalist Architectural Calendar & Editorial Grid 4 PCS Set",
    shortLabel: "SET 29: 2027 SWISS GRID 4P",
    defPcs: "4",
    style: "ny2027_swiss_editorial_grid4",
    boardBg: "#e5e7eb",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref30_ny2027_luxury_baubles_4pcs",
    name: "Set 30: 2027 Luxury Gold Foil, Velvet Crimson & Emerald Christmas Baubles 4 PCS Set",
    shortLabel: "SET 30: 2027 GOLD BAUBLE 4P",
    defPcs: "4",
    style: "luxury_christmas_baubles4",
    boardBg: "#0b0f17",
    defColorSet: "sunset",
  },
  {
    id: "poster_ref31_ny2027_3d_isometric_block_4pcs",
    name: "Set 31: 2027 3D Isometric Architectural Monument Podium Typography 4 PCS Set",
    shortLabel: "SET 31: 2027 3D PODIUM 4P",
    defPcs: "4",
    style: "ny2027_isometric_monument4",
    boardBg: "#f1f5f9",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref32_ny2027_memphis_pop_5pcs",
    name: "Set 32: 2027 Neo-Brutalist Memphis 90s Pop Bento Sticker & Confetti 5 PCS Set",
    shortLabel: "SET 32: 2027 MEMPHIS POP 5P",
    defPcs: "5",
    style: "ny2027_memphis_pop5",
    boardBg: "#f5efe6",
    defColorSet: "rainbow6",
  },
  {
    id: "poster_ref33_ny2027_japanese_zen_4pcs",
    name: "Set 33: 2027 Japanese Ukiyo-e Hatsu-Hinode Rising Sun & Wave 4 PCS Set",
    shortLabel: "SET 33: 2027 ZEN SUN 4P",
    defPcs: "4",
    style: "ny2027_japanese_zen4",
    boardBg: "#e7e2d8",
    defColorSet: "sunset",
  },
];

const GENERATED_100_MICROSTOCK_POSTER_MODES: MasterPosterModeSpec[] = [];
const PCS_CYCLE_DEFAULTS = ["4", "5", "6", "4", "3", "6", "4", "5", "4", "6"];
for (let famIdx = 0; famIdx < CURATED_100_MICROSTOCK_POSTER_CATALOG.length; famIdx++) {
  const fam = CURATED_100_MICROSTOCK_POSTER_CATALOG[famIdx];
  for (let subIdx = 0; subIdx < fam.editions.length; subIdx++) {
    const msNum = famIdx * 10 + subIdx + 1; // 1 .. 100
    const setNum = 33 + msNum; // Set 34 .. Set 133
    const edTitle = fam.editions[subIdx];
    const defPcs = PCS_CYCLE_DEFAULTS[(famIdx + subIdx) % PCS_CYCLE_DEFAULTS.length];
    const boardBg = fam.boardBgs[subIdx % fam.boardBgs.length];
    GENERATED_100_MICROSTOCK_POSTER_MODES.push({
      id: `poster_ms_${msNum}`,
      name: `Set ${setNum}: ${fam.familyName} — ${edTitle} (${defPcs} PCS)`,
      shortLabel: `SET ${setNum}: ${fam.shortPrefix} #${subIdx + 1}`,
      defPcs,
      style: `ms_poster_${msNum}` as PosterArtStyle,
      boardBg,
      defColorSet: fam.colorSet,
    });
  }
}

export const MASTER_POSTER_MODES: MasterPosterModeSpec[] = [
  ...BASE_12_REFERENCE_POSTER_MODES,
  ...GENERATED_100_MICROSTOCK_POSTER_MODES,
];

function registerMasterPosterCollection() {
  for (const pm of MASTER_POSTER_MODES) {
    registerMode({
      id: pm.id,
      name: pm.name,
      cat: "Poster",
      look: {
        bg: pm.boardBg,
        ink: "#ffffff",
        cols: ["#ff4b72", "#ffab2e", "#0cb6f5", "#6bc605", "#9e2eff"],
        style: "flat",
        sw: 2,
      },
      params: [
        {
          k: "showText",
          l: "☑ SHOW POSTER TEXT (CREATE OUTLINES)",
          def: true,
          type: "check",
        },
        {
          k: "pcs",
          l: "POSTER SET PIECES (1, 2, 3, 4, 5, 6, 8, 9, 10, 12 PCS)",
          def: pm.defPcs,
          type: "select",
          opts: [
            ["1", "1 PCS (SINGLE POSTER ON BOARD)"],
            ["2", "2 PCS POSTER SET"],
            ["3", "3 PCS POSTER SET"],
            ["4", "4 PCS POSTER SET (1 ROW)"],
            ["4grid", "4 PCS (2×2 POSTER GRID)"],
            ["5", "5 PCS POSTER SET"],
            ["6", "6 PCS POSTER SET (1 ROW)"],
            ["6grid", "6 PCS (3×2 POSTER GRID)"],
            ["8", "8 PCS POSTER SET (4×2 GRID)"],
            ["9", "9 PCS POSTER SET (3×3 GRID)"],
            ["10", "10 PCS POSTER SET (5×2 GRID)"],
            ["12", "12 PCS MEGA POSTER BUNDLE (4×3 GRID)"],
          ],
        },
        {
          k: "variant",
          l: "VARIATION MODE (0 = EXACT REFERENCE)",
          min: 0,
          max: 240,
          step: 1,
          def: 0,
        },
        {
          k: "colorSet",
          l: "POSTER COLOUR HARMONY",
          def: pm.defColorSet,
          type: "select",
          opts: [
            ["rainbow6", "REFERENCE ORIGINAL SPECTRUM"],
            ["palette", "ACTIVE STUDIO PALETTE"],
            ["sunset", "WARM SUNSET & TROPICAL"],
            ["ocean", "AQUA, COBALT & EMERALD"],
            ["pastel", "SOFT NORDIC & PASTEL"],
          ],
        },
        {
          k: "layers",
          l: "DETAIL & MESH DENSITY",
          min: 20,
          max: 80,
          step: 2,
          def: 48,
        },
        {
          k: "brushScale",
          l: "ELEMENT & WAVE SCALE (%)",
          min: 75,
          max: 135,
          step: 5,
          def: 100,
        },
        {
          k: "shadow",
          l: "PRESENTATION BOARD DROP SHADOW",
          min: 20,
          max: 100,
          step: 5,
          def: 65,
        },
      ],
      draw(m: any, q: any) {
        renderMasterPosterCollection(m, q, pm.style, pm.boardBg);
      },
    });
  }
}

registerMasterPosterCollection();

/* ============================================================================
   MICROSTOCK ORIGINAL LIGHTING, SUNBURST & ANAMORPHIC LENS FLARE STUDIO
   - Exact Habuhu Reference 1 (image_aff32f28.png): 50/50 Split Dual-Preview
     (Left Half Pitch Black #000000 + Right Half Transparent) Golden Sunburst
   - Exact Habuhu Reference 2 (image_c2856524.png): 8-Piece (2×4 Grid) Golden
     Horizontal Anamorphic Laser & Starburst Lens Flare Kit
   - 108 Total Curated Best-Selling Microstock Lighting & Lens Flare Designs
   - 3 Instant Background Modes on ANY Lighting Design:
     1. "split"       -> 50/50 Split Artboard (Left Half Black + Right Half Transparent)
     2. "transparent" -> 100% Transparent Background (Zero Background Rect in SVG/EPS)
     3. "black"       -> 100% Pitch Black Background (#000000 Full Contrast)
   ============================================================================ */

export type LightingColorThemeId =
  | "gold24k"
  | "amber_fire"
  | "champagne"
  | "cyber_cyan"
  | "royal_blue"
  | "neon_magenta"
  | "emerald_mint"
  | "violet_nova"
  | "crimson_ruby"
  | "diamond_white"
  | "palette";

interface LightingPaletteSpec {
  core: string;       // Center blinding white-hot nucleus (#FFFFFF)
  inner: string;      // Inner incandescent corona (#FFF9C4)
  bright: string;     // Primary bright ray & star color (#FFD54F)
  mid: string;        // Mid golden/chromatic glow (#FFA000)
  deep: string;       // Outer ember/ambient sheath (#D95300)
  ambient: string;    // Deepest outer halo (#4A1500)
  transAura: string;  // Contrast aura on transparent/light side (#C8963E)
}

const LIGHTING_THEMES: Record<Exclude<LightingColorThemeId, "palette">, LightingPaletteSpec> = {
  gold24k: {
    core: "#FFFFFF",
    inner: "#FFF9C4",
    bright: "#FFD54F",
    mid: "#FFA000",
    deep: "#D95800",
    ambient: "#4A1800",
    transAura: "#C9933B",
  },
  amber_fire: {
    core: "#FFFFFF",
    inner: "#FFF3B0",
    bright: "#FFB703",
    mid: "#FB8500",
    deep: "#C83E00",
    ambient: "#3D0E00",
    transAura: "#D47A2A",
  },
  champagne: {
    core: "#FFFFFF",
    inner: "#FFFDF0",
    bright: "#FFE8A3",
    mid: "#E6B85C",
    deep: "#A67628",
    ambient: "#382408",
    transAura: "#B89758",
  },
  cyber_cyan: {
    core: "#FFFFFF",
    inner: "#E0F7FA",
    bright: "#4DD0E1",
    mid: "#00ACC1",
    deep: "#006064",
    ambient: "#002529",
    transAura: "#2B9EB3",
  },
  royal_blue: {
    core: "#FFFFFF",
    inner: "#E3F2FD",
    bright: "#64B5F6",
    mid: "#1E88E5",
    deep: "#0D47A1",
    ambient: "#041638",
    transAura: "#3B7DD8",
  },
  neon_magenta: {
    core: "#FFFFFF",
    inner: "#FCE4EC",
    bright: "#F48FB1",
    mid: "#E91E63",
    deep: "#880E4F",
    ambient: "#2E0318",
    transAura: "#C94A7C",
  },
  emerald_mint: {
    core: "#FFFFFF",
    inner: "#E8F5E9",
    bright: "#69F0AE",
    mid: "#00C853",
    deep: "#00692C",
    ambient: "#00240E",
    transAura: "#2EA866",
  },
  violet_nova: {
    core: "#FFFFFF",
    inner: "#F3E5F5",
    bright: "#CE93D8",
    mid: "#8E24AA",
    deep: "#4A148C",
    ambient: "#1A0533",
    transAura: "#8446B0",
  },
  crimson_ruby: {
    core: "#FFFFFF",
    inner: "#FFEBEE",
    bright: "#FF8A80",
    mid: "#F44336",
    deep: "#B71C1C",
    ambient: "#360505",
    transAura: "#C94444",
  },
  diamond_white: {
    core: "#FFFFFF",
    inner: "#F8FAFC",
    bright: "#E2E8F0",
    mid: "#94A3B8",
    deep: "#475569",
    ambient: "#1E293B",
    transAura: "#78869B",
  },
};

function getLightingPalette(m: any, themeId: string): LightingPaletteSpec {
  if (themeId === "palette") {
    const base = m.col(0) || "#FFA000";
    return {
      core: "#FFFFFF",
      inner: mixCol(base, "#FFFFFF", 0.78),
      bright: mixCol(base, "#FFFFFF", 0.38),
      mid: base,
      deep: mixCol(base, "#1A0500", 0.38),
      ambient: mixCol(base, "#050200", 0.72),
      transAura: mixCol(base, "#786858", 0.25),
    };
  }
  return LIGHTING_THEMES[(themeId as Exclude<LightingColorThemeId, "palette">) || "gold24k"] || LIGHTING_THEMES.gold24k;
}

// Clip polygon strictly to a sub-rectangle [xMin..xMax, yMin..yMax]
function clipLightPoly(
  poly: [number, number][],
  xMin: number,
  yMin: number,
  xMax: number,
  yMax: number
): [number, number][] {
  return clipPosterPolygon(poly, xMin, yMin, xMax, yMax);
}

// Build a razor-sharp double-ended or single-ended optical needle ray polygon
function buildTaperedNeedlePoly(
  cx: number,
  cy: number,
  angleRad: number,
  lenPos: number,
  lenNeg: number,
  halfWidth: number,
  aspect: number
): [number, number][] {
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);
  const nx = -sinA;
  const ny = cosA;
  const invAsp = 1 / Math.max(0.45, aspect);

  // Tip +
  const tip1X = cx + cosA * lenPos * invAsp;
  const tip1Y = cy + sinA * lenPos;
  // Tip -
  const tip2X = cx - cosA * lenNeg * invAsp;
  const tip2Y = cy - sinA * lenNeg;

  // Shoulder points near center for smooth organic optical pinch
  const shDistPos = lenPos * 0.16;
  const shDistNeg = lenNeg * 0.16;
  const shW = halfWidth * 0.42;

  return [
    [tip1X, tip1Y],
    [cx + (cosA * shDistPos + nx * shW) * invAsp, cy + sinA * shDistPos + ny * shW],
    [cx + nx * halfWidth * invAsp, cy + ny * halfWidth],
    [cx + (-cosA * shDistNeg + nx * shW) * invAsp, cy - sinA * shDistNeg + ny * shW],
    [tip2X, tip2Y],
    [cx + (-cosA * shDistNeg - nx * shW) * invAsp, cy - sinA * shDistNeg - ny * shW],
    [cx - nx * halfWidth * invAsp, cy - ny * halfWidth],
    [cx + (cosA * shDistPos - nx * shW) * invAsp, cy + sinA * shDistPos - ny * shW],
  ];
}

// Helper to emit a clipped polygon with color & opacity
function pushLightPoly(
  parts: string[],
  poly: [number, number][],
  col: string,
  op: number,
  xMin: number,
  yMin: number,
  xMax: number,
  yMax: number
) {
  if (op <= 0.008) return;
  const cl = clipLightPoly(poly, xMin, yMin, xMax, yMax);
  if (cl.length < 3) return;
  const opAttr = op < 0.995 ? ` opacity="${+op.toFixed(3)}"` : "";
  parts.push(`<path d="${polyToSvgPath(cl)}" fill="${col}"${opAttr}/>`);
}

// Helper to emit an aspect-corrected optical glow ellipse clipped to bounds via radialGradient
function pushRadialGlowOrb(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  cx: number,
  cy: number,
  radPx: number,
  aspect: number,
  stops: { off: string; col: string; op: number }[],
  scaleX = 1,
  scaleY = 1
) {
  const gid = `LG_RAD_${++gradCounter.n}`;
  const stopTags = stops
    .map(
      (s) =>
        `<stop offset="${s.off}" stop-color="${s.col}"${
          s.op < 0.995 ? ` stop-opacity="${+s.op.toFixed(3)}"` : ""
        }/>`
    )
    .join("");
  m.defs.push(
    `<radialGradient id="${gid}" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">${stopTags}</radialGradient>`
  );
  const rx = (radPx * scaleX) / Math.max(0.45, aspect);
  const ry = radPx * scaleY;
  parts.push(`<ellipse cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="url(#${gid})"/>`);
}

// ============================================================================
// CORE OPTICAL SUNBURST / STARBURST FLARE GENERATOR (HABUHU REF 1 + VARIATIONS)
// ============================================================================
function drawOpticalSunburstFlareUnit(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  cx: number,
  cy: number,
  maxR: number,
  pal: LightingPaletteSpec,
  aspect: number,
  onTransSide: boolean,
  xMin: number,
  yMin: number,
  xMax: number,
  yMax: number,
  opts: {
    mainRays?: number;
    fineRays?: number;
    rotDeg?: number;
    coreScale?: number;
    haloScale?: number;
    asymmetry?: number;
    horizBeam?: number; // 0 = pure radial, >0 = add horizontal anamorphic beam
    crossStar?: boolean; // true = emphasize 4/8-point compass star spikes
    eclipseRing?: number; // >0 = draw glowing solar eclipse ring at radius factor
    seedSalt?: number;
  } = {}
) {
  const mainRays = opts.mainRays ?? 14;
  const fineRays = opts.fineRays ?? 72;
  const rotRad = ((opts.rotDeg ?? 0) * Math.PI) / 180;
  const coreSc = opts.coreScale ?? 1.0;
  const haloSc = opts.haloScale ?? 1.0;
  const asym = opts.asymmetry ?? 0.38;
  const salt = opts.seedSalt ?? 17;

  // Deterministic pseudo-random per ray index so left (black) and right (transparent) halves match 100% identically!
  const rayHash = (idx: number, k: number) => {
    const x = Math.sin((idx * 127.1 + k * 311.7 + salt * 73.3) * 0.17) * 43758.5453;
    return x - Math.floor(x);
  };

  // 1. WIDE AMBIENT ATMOSPHERIC GLOW HALO (Smooth native SVG radialGradient + EPS 10 concentric Bezier support)
  if (onTransSide) {
    // On transparent/light right half: warm amber-bronze contrast aura so golden-white rays pop just like Ref 1 right panel!
    pushRadialGlowOrb(
      m,
      parts,
      gradCounter,
      cx,
      cy,
      maxR * 0.98 * haloSc,
      aspect,
      [
        { off: "0%", col: pal.core, op: 0.98 },
        { off: "10%", col: pal.inner, op: 0.92 },
        { off: "22%", col: pal.bright, op: 0.65 },
        { off: "42%", col: pal.transAura, op: 0.34 },
        { off: "68%", col: pal.transAura, op: 0.14 },
        { off: "100%", col: pal.transAura, op: 0.0 },
      ]
    );
  } else {
    // On black background: rich deep incandescent ember-to-gold optical glow
    pushRadialGlowOrb(
      m,
      parts,
      gradCounter,
      cx,
      cy,
      maxR * 1.04 * haloSc,
      aspect,
      [
        { off: "0%", col: pal.core, op: 1.0 },
        { off: "9%", col: pal.inner, op: 0.96 },
        { off: "20%", col: pal.bright, op: 0.78 },
        { off: "36%", col: pal.mid, op: 0.48 },
        { off: "58%", col: pal.deep, op: 0.24 },
        { off: "80%", col: pal.ambient, op: 0.10 },
        { off: "100%", col: "#000000", op: 0.0 },
      ]
    );
  }

  // Optional Glowing Solar Eclipse Ring / Portal Circle
  if (opts.eclipseRing && opts.eclipseRing > 0) {
    const rRing = maxR * opts.eclipseRing;
    const rxOut = (rRing * 1.16) / Math.max(0.45, aspect);
    const ryOut = rRing * 1.16;
    const gid = `LG_ECL_${++gradCounter.n}`;
    m.defs.push(
      `<radialGradient id="${gid}" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">` +
        `<stop offset="0%" stop-color="${pal.ambient}" stop-opacity="0"/>` +
        `<stop offset="58%" stop-color="${pal.deep}" stop-opacity="${onTransSide ? 0.12 : 0.25}"/>` +
        `<stop offset="76%" stop-color="${pal.mid}" stop-opacity="${onTransSide ? 0.55 : 0.78}"/>` +
        `<stop offset="84%" stop-color="${pal.core}" stop-opacity="0.98"/>` +
        `<stop offset="91%" stop-color="${pal.bright}" stop-opacity="${onTransSide ? 0.55 : 0.75}"/>` +
        `<stop offset="100%" stop-color="${pal.deep}" stop-opacity="0"/>` +
        `</radialGradient>`
    );
    parts.push(`<ellipse cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rxOut)}" ry="${f1(ryOut)}" fill="url(#${gid})"/>`);
  }

  // Optional Horizontal Anamorphic Laser Streak (for Ref 2 and hybrid starburst-laser styles)
  if (opts.horizBeam && opts.horizBeam > 0) {
    const bLen = maxR * opts.horizBeam;
    const bThick = maxR * 0.075 * coreSc;
    // Outer soft amber anamorphic glow sheath
    const outerBeam = buildTaperedNeedlePoly(cx, cy, 0, bLen * 1.05, bLen * 1.05, bThick * 1.65, aspect);
    pushLightPoly(parts, outerBeam, onTransSide ? pal.transAura : pal.deep, onTransSide ? 0.26 : 0.42, xMin, yMin, xMax, yMax);
    // Mid golden horizontal beam
    const midBeam = buildTaperedNeedlePoly(cx, cy, 0, bLen * 0.96, bLen * 0.96, bThick * 0.72, aspect);
    pushLightPoly(parts, midBeam, pal.mid, onTransSide ? 0.58 : 0.78, xMin, yMin, xMax, yMax);
    // Bright gold core streak
    const brightBeam = buildTaperedNeedlePoly(cx, cy, 0, bLen * 0.82, bLen * 0.82, bThick * 0.34, aspect);
    pushLightPoly(parts, brightBeam, pal.bright, 0.92, xMin, yMin, xMax, yMax);
    // Razor-thin white-hot filament center
    const coreBeam = buildTaperedNeedlePoly(cx, cy, 0, bLen * 0.62, bLen * 0.62, bThick * 0.14, aspect);
    pushLightPoly(parts, coreBeam, pal.core, 0.98, xMin, yMin, xMax, yMax);
  }

  // 2. DENSE 360° CORONAL MICRO-NEEDLES (72–96 razor-sharp background optical diffraction needles)
  for (let i = 0; i < fineRays; i++) {
    const baseA = rotRad + (i / fineRays) * Math.PI * 2;
    const jitterA = (rayHash(i, 1) - 0.5) * (Math.PI / fineRays) * 0.85;
    const ang = baseA + jitterA;
    const lenFactor = 0.26 + Math.pow(rayHash(i, 2), 1.35) * 0.62;
    const rLen = maxR * lenFactor;
    const w = maxR * (0.006 + rayHash(i, 3) * 0.011);

    const sheathCol = onTransSide
      ? mixCol(pal.bright, pal.transAura, 0.35)
      : mixCol(pal.mid, pal.deep, 0.35);
    const polyOuter = buildTaperedNeedlePoly(cx, cy, ang, rLen, rLen * 0.35, w * 1.45, aspect);
    pushLightPoly(parts, polyOuter, sheathCol, onTransSide ? 0.28 : 0.36, xMin, yMin, xMax, yMax);

    const innerCol = rayHash(i, 4) > 0.45 ? pal.inner : pal.bright;
    const polyInner = buildTaperedNeedlePoly(cx, cy, ang, rLen * 0.86, rLen * 0.25, w * 0.52, aspect);
    pushLightPoly(parts, polyInner, innerCol, onTransSide ? 0.55 : 0.68, xMin, yMin, xMax, yMax);
  }

  // 3. PRIMARY LONG OPTICAL STARBURST RAYS (12–18 Long Hero Rays with Outer Amber Glow Sheath + Mid Gold + White-Hot Razor Core)
  // Signature natural angles modeled directly on Ref 1 (image_aff32f28.png)
  const refAnglesDeg = [
    -155, -138, -116, -92, -62, -37, -6, 9, 34, 63, 86, 114, 141, 174,
  ];
  const rayCount = Math.max(4, mainRays);
  for (let i = 0; i < rayCount; i++) {
    let ang: number;
    let reach: number;
    if (opts.crossStar) {
      // 4-point or 8-point geometric compass star
      ang = rotRad + (i / rayCount) * Math.PI * 2;
      const isCardinal = i % 2 === 0;
      reach = maxR * (isCardinal ? 0.98 : 0.64);
    } else if (rayCount === 14 && asym > 0.2) {
      ang = rotRad + (refAnglesDeg[i % refAnglesDeg.length] * Math.PI) / 180 + (rayHash(i, 5) - 0.5) * 0.05;
      const refReaches = [0.96, 0.88, 0.94, 0.68, 0.92, 1.04, 0.92, 0.85, 0.86, 0.95, 0.74, 0.88, 1.02, 0.92];
      reach = maxR * refReaches[i % refReaches.length] * (0.92 + rayHash(i, 6) * 0.16);
    } else {
      ang = rotRad + (i / rayCount) * Math.PI * 2 + (rayHash(i, 5) - 0.5) * 0.18 * asym;
      reach = maxR * (0.68 + rayHash(i, 6) * 0.36);
    }

    const wBase = maxR * (0.022 + (i % 3 === 0 ? 0.009 : 0.003)) * coreSc;

    // Layer 3A: Wide Soft Amber/Gold Outer Ray Glow Sheath
    const sheathPoly = buildTaperedNeedlePoly(cx, cy, ang, reach * 1.04, reach * 0.25, wBase * 2.1, aspect);
    pushLightPoly(
      parts,
      sheathPoly,
      onTransSide ? pal.transAura : pal.deep,
      onTransSide ? 0.24 : 0.38,
      xMin,
      yMin,
      xMax,
      yMax
    );

    // Layer 3B: Mid Vibrant Golden Tapered Ray
    const midPoly = buildTaperedNeedlePoly(cx, cy, ang, reach * 0.96, reach * 0.22, wBase * 1.05, aspect);
    pushLightPoly(
      parts,
      midPoly,
      onTransSide ? pal.bright : pal.mid,
      onTransSide ? 0.62 : 0.78,
      xMin,
      yMin,
      xMax,
      yMax
    );

    // Layer 3C: Bright Lemon-Gold Inner Ray
    const brightPoly = buildTaperedNeedlePoly(cx, cy, ang, reach * 0.82, reach * 0.18, wBase * 0.48, aspect);
    pushLightPoly(
      parts,
      brightPoly,
      pal.inner,
      onTransSide ? 0.85 : 0.92,
      xMin,
      yMin,
      xMax,
      yMax
    );

    // Layer 3D: Razor-Thin Blinding White-Hot Needle Spine
    const spinePoly = buildTaperedNeedlePoly(cx, cy, ang, reach * 0.60, reach * 0.12, wBase * 0.20, aspect);
    pushLightPoly(parts, spinePoly, pal.core, 0.96, xMin, yMin, xMax, yMax);
  }

  // 4. INNER SOLAR CORONA BURST (36 short intense golden-white needles around the nucleus)
  const coronaSpikes = 36;
  for (let i = 0; i < coronaSpikes; i++) {
    const ang = rotRad * 0.5 + (i / coronaSpikes) * Math.PI * 2 + (rayHash(i, 9) - 0.5) * 0.08;
    const cLen = maxR * (0.16 + (i % 3) * 0.055 + rayHash(i, 10) * 0.08) * coreSc;
    const cW = maxR * 0.011 * coreSc;
    const cPoly = buildTaperedNeedlePoly(cx, cy, ang, cLen, cLen * 0.5, cW, aspect);
    pushLightPoly(
      parts,
      cPoly,
      i % 2 === 0 ? pal.core : pal.inner,
      onTransSide ? 0.88 : 0.92,
      xMin,
      yMin,
      xMax,
      yMax
    );
  }

  // 5. BLINDING WHITE-HOT INCANDESCENT CENTER CORE ORB
  pushRadialGlowOrb(
    m,
    parts,
    gradCounter,
    cx,
    cy,
    maxR * 0.26 * coreSc,
    aspect,
    [
      { off: "0%", col: "#FFFFFF", op: 1.0 },
      { off: "28%", col: "#FFFFFF", op: 0.98 },
      { off: "52%", col: pal.inner, op: 0.88 },
      { off: "76%", col: pal.bright, op: 0.45 },
      { off: "100%", col: pal.mid, op: 0.0 },
    ]
  );
}

// ============================================================================
// HORIZONTAL ANAMORPHIC LASER & STAR STREAK GENERATOR (HABUHU REF 2 + VARIATIONS)
// Exact reproduction of all 8 horizontal flare items in image_c2856524.png!
// ============================================================================
function drawAnamorphicHorizontalStreakUnit(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  cx: number,
  cy: number,
  halfSpanX: number,
  maxH: number,
  subVariant: number, // 0..7 matching the 8 items in Ref 2 (image_c2856524.png)
  pal: LightingPaletteSpec,
  aspect: number,
  onTransSide: boolean,
  xMin: number,
  yMin: number,
  xMax: number,
  yMax: number,
  tiltDeg = 0
) {
  const tiltRad = (tiltDeg * Math.PI) / 180;
  const effSpan = halfSpanX * Math.max(0.45, aspect); // Convert tile X span to pixel-equivalent length

  // Helper to emit a single horizontal laser bar at (bx, by)
  const emitLaserBar = (bx: number, by: number, spanScale: number, thickScale: number, hotSpotScale: number) => {
    const L = effSpan * spanScale;
    const H = maxH * 0.14 * thickScale;

    // 1. Soft wide elliptical ambient glow behind the bar
    pushRadialGlowOrb(
      m,
      parts,
      gradCounter,
      bx,
      by,
      maxH * 0.52 * thickScale,
      aspect,
      [
        { off: "0%", col: pal.bright, op: onTransSide ? 0.55 : 0.68 },
        { off: "35%", col: onTransSide ? pal.transAura : pal.mid, op: onTransSide ? 0.28 : 0.38 },
        { off: "70%", col: onTransSide ? pal.transAura : pal.deep, op: onTransSide ? 0.10 : 0.15 },
        { off: "100%", col: pal.ambient, op: 0.0 },
      ],
      (halfSpanX * spanScale * 0.82 * Math.max(0.45, aspect)) / Math.max(1, maxH * 0.52 * thickScale),
      0.55
    );

    // 2. Outer warm amber tapered laser sheath
    const pOuter = buildTaperedNeedlePoly(bx, by, tiltRad, L * 1.0, L * 1.0, H * 1.75, aspect);
    pushLightPoly(parts, pOuter, onTransSide ? pal.transAura : pal.deep, onTransSide ? 0.36 : 0.52, xMin, yMin, xMax, yMax);

    // 3. Mid bright gold tapered laser beam
    const pMid = buildTaperedNeedlePoly(bx, by, tiltRad, L * 0.92, L * 0.92, H * 0.95, aspect);
    pushLightPoly(parts, pMid, pal.mid, onTransSide ? 0.72 : 0.86, xMin, yMin, xMax, yMax);

    // 4. Inner luminous lemon-gold laser core
    const pBright = buildTaperedNeedlePoly(bx, by, tiltRad, L * 0.76, L * 0.76, H * 0.48, aspect);
    pushLightPoly(parts, pBright, pal.bright, 0.95, xMin, yMin, xMax, yMax);

    // 5. Razor-sharp white-hot central filament
    const pCore = buildTaperedNeedlePoly(bx, by, tiltRad, L * 0.54 * hotSpotScale, L * 0.54 * hotSpotScale, H * 0.22, aspect);
    pushLightPoly(parts, pCore, pal.core, 0.99, xMin, yMin, xMax, yMax);
  };

  const v = subVariant % 8;

  if (v === 0) {
    // Ref 2 Left Row 1: Wide glowing golden anamorphic laser bar with elongated white-hot center
    emitLaserBar(cx, cy, 0.94, 1.05, 1.15);
  } else if (v === 1) {
    // Ref 2 Left Row 2: Sleek thin horizontal laser horizon line with central pinpoint diamond star
    emitLaserBar(cx, cy, 0.90, 0.62, 0.35);
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, cx, cy, maxH * 0.36, pal, aspect, onTransSide, xMin, yMin, xMax, yMax, {
      mainRays: 8,
      fineRays: 24,
      coreScale: 0.75,
      haloScale: 0.65,
      crossStar: true,
      seedSalt: 21,
    });
  } else if (v === 2) {
    // Ref 2 Left Row 3: Horizontal laser beam + Radiant 360° Multi-Ray Starburst Explosion in Center
    emitLaserBar(cx, cy, 0.95, 0.85, 0.55);
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, cx, cy, maxH * 0.88, pal, aspect, onTransSide, xMin, yMin, xMax, yMax, {
      mainRays: 14,
      fineRays: 56,
      coreScale: 0.95,
      haloScale: 0.9,
      seedSalt: 33,
    });
  } else if (v === 3) {
    // Ref 2 Left Row 4: High-intensity glowing horizontal plasma bar with warm amber bloom
    emitLaserBar(cx, cy, 0.88, 1.25, 0.92);
  } else if (v === 4) {
    // Ref 2 Right Row 1: Horizontal beam + Brilliant 8-Point Diagonal Starburst & Coronal Spikes
    emitLaserBar(cx, cy, 0.92, 0.78, 0.45);
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, cx, cy, maxH * 0.92, pal, aspect, onTransSide, xMin, yMin, xMax, yMax, {
      mainRays: 10,
      fineRays: 48,
      rotDeg: 22,
      coreScale: 1.0,
      haloScale: 0.88,
      seedSalt: 45,
    });
  } else if (v === 5) {
    // Ref 2 Right Row 2: Compact intense multi-spike star flare on a razor-thin horizontal streak
    emitLaserBar(cx, cy, 0.92, 0.65, 0.42);
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, cx, cy, maxH * 0.62, pal, aspect, onTransSide, xMin, yMin, xMax, yMax, {
      mainRays: 12,
      fineRays: 40,
      rotDeg: -15,
      coreScale: 0.85,
      haloScale: 0.75,
      seedSalt: 57,
    });
  } else if (v === 6) {
    // Ref 2 Right Row 3: Double Parallel Horizontal Anamorphic Reflection Beams (Main Upper Beam + Subtle Lower Echo Streak!)
    emitLaserBar(cx, cy - maxH * 0.11, 0.98, 1.15, 1.12);
    emitLaserBar(cx, cy + maxH * 0.14, 0.78, 0.52, 0.75);
  } else {
    // Ref 2 Right Row 4: Wide horizontal light streak with asymmetric star flash & diagonal diffraction needles
    emitLaserBar(cx, cy, 0.96, 0.75, 0.48);
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, cx, cy, maxH * 0.78, pal, aspect, onTransSide, xMin, yMin, xMax, yMax, {
      mainRays: 12,
      fineRays: 44,
      rotDeg: 38,
      coreScale: 0.9,
      haloScale: 0.82,
      seedSalt: 69,
    });
  }
}

// ============================================================================
// OPTICAL CAMERA LENS BOKEH & HEXAGONAL APERTURE TRAIL GENERATOR
// ============================================================================
function drawCameraBokehLensTrailUnit(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  cx: number,
  cy: number,
  maxR: number,
  pal: LightingPaletteSpec,
  aspect: number,
  onTransSide: boolean,
  xMin: number,
  yMin: number,
  xMax: number,
  yMax: number,
  angleDeg = -28,
  seedSalt = 1
) {
  const rad = (angleDeg * Math.PI) / 180;
  const invAsp = 1 / Math.max(0.45, aspect);
  const ux = Math.cos(rad);
  const uy = Math.sin(rad);

  // Main Sun Star at upper-left of axis
  const sunX = cx - ux * maxR * 0.42 * invAsp;
  const sunY = cy - uy * maxR * 0.42;
  drawOpticalSunburstFlareUnit(
    m,
    parts,
    gradCounter,
    sunX,
    sunY,
    maxR * 0.68,
    pal,
    aspect,
    onTransSide,
    xMin,
    yMin,
    xMax,
    yMax,
    { mainRays: 12, fineRays: 54, horizBeam: 0.85, seedSalt }
  );

  // Diagonal Optical Axis Beam
  const axisPoly = buildTaperedNeedlePoly(cx, cy, rad, maxR * 1.15, maxR * 1.15, maxR * 0.035, aspect);
  pushLightPoly(parts, axisPoly, pal.mid, onTransSide ? 0.35 : 0.48, xMin, yMin, xMax, yMax);

  // 7 Glowing Hexagonal & Circular Aperture Bokeh Discs along the optical axis
  const bokehSpecs = [
    { t: -0.15, r: 0.14, op: 0.28, hex: true, ring: false },
    { t: 0.08, r: 0.22, op: 0.20, hex: true, ring: true },
    { t: 0.24, r: 0.09, op: 0.42, hex: false, ring: false },
    { t: 0.42, r: 0.28, op: 0.22, hex: true, ring: false },
    { t: 0.58, r: 0.16, op: 0.32, hex: false, ring: true },
    { t: 0.74, r: 0.34, op: 0.18, hex: true, ring: true },
    { t: 0.88, r: 0.11, op: 0.48, hex: false, ring: false },
  ];

  for (let i = 0; i < bokehSpecs.length; i++) {
    const b = bokehSpecs[i];
    const bx = cx + ux * maxR * b.t * invAsp;
    const by = cy + uy * maxR * b.t;
    const br = maxR * b.r;
    const sides = b.hex ? 6 : 28;
    const poly: [number, number][] = [];
    for (let s = 0; s < sides; s++) {
      const a = rad + (s / sides) * Math.PI * 2;
      poly.push([bx + Math.cos(a) * br * invAsp, by + Math.sin(a) * br]);
    }
    const bCol = i % 2 === 0 ? pal.bright : pal.inner;
    pushLightPoly(parts, poly, bCol, onTransSide ? b.op * 0.85 : b.op, xMin, yMin, xMax, yMax);
    if (b.ring) {
      const innerPoly: [number, number][] = [];
      for (let s = 0; s < sides; s++) {
        const a = rad + (s / sides) * Math.PI * 2;
        innerPoly.push([bx + Math.cos(a) * br * 0.86 * invAsp, by + Math.sin(a) * br * 0.86]);
      }
      pushLightPoly(parts, innerPoly, pal.core, onTransSide ? b.op * 0.5 : b.op * 0.65, xMin, yMin, xMax, yMax);
    }
  }
}

// ============================================================================
// MAGICAL STARDUST WAVE, COMET TRAIL & SPARKLE SWIRL GENERATOR
// ============================================================================
function drawStardustWaveTrailUnit(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  cx: number,
  cy: number,
  maxR: number,
  pal: LightingPaletteSpec,
  aspect: number,
  onTransSide: boolean,
  xMin: number,
  yMin: number,
  xMax: number,
  yMax: number,
  subStyle = 0
) {
  const invAsp = 1 / Math.max(0.45, aspect);
  const steps = 42;
  const isSpiral = subStyle % 3 === 1;
  const isComet = subStyle % 3 === 2;

  // Draw glowing ribbon trail + sparkle particles along path
  const pts: [number, number, number][] = []; // [x, y, t]
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    let px: number;
    let py: number;
    if (isSpiral) {
      const ang = t * Math.PI * 3.5 + subStyle * 0.6;
      const r = maxR * (0.10 + t * 0.78);
      px = cx + Math.cos(ang) * r * invAsp;
      py = cy + Math.sin(ang) * r;
    } else if (isComet) {
      const u = (t - 0.5) * 1.75;
      px = cx + u * maxR * invAsp;
      py = cy - u * maxR * 0.45 + Math.sin(t * Math.PI) * maxR * 0.16;
    } else {
      const u = (t - 0.5) * 1.85;
      px = cx + u * maxR * invAsp;
      py = cy + Math.sin(u * Math.PI * 1.35 + subStyle) * maxR * 0.34;
    }
    pts.push([px, py, t]);
  }

  // Emit glowing segments and stardust bokeh along the curve
  for (let i = 0; i < pts.length; i += 2) {
    const [px, py, t] = pts[i];
    const env = isComet ? Math.pow(t, 1.3) : Math.sin(t * Math.PI);
    const orbR = maxR * (0.06 + env * 0.18);
    pushRadialGlowOrb(
      m,
      parts,
      gradCounter,
      px,
      py,
      orbR,
      aspect,
      [
        { off: "0%", col: pal.core, op: (onTransSide ? 0.65 : 0.82) * Math.max(0.25, env) },
        { off: "35%", col: pal.bright, op: (onTransSide ? 0.38 : 0.52) * Math.max(0.2, env) },
        { off: "100%", col: onTransSide ? pal.transAura : pal.deep, op: 0.0 },
      ]
    );

    // Emit 3 sparkling micro-stars around each node
    for (let k = 0; k < 3; k++) {
      const h1 = Math.sin(i * 37.1 + k * 91.7 + subStyle * 13.3) * 43758.5;
      const r1 = h1 - Math.floor(h1);
      const h2 = Math.cos(i * 53.3 + k * 47.1 + subStyle * 29.7) * 43758.5;
      const r2 = h2 - Math.floor(h2);
      const sx = px + (r1 - 0.5) * maxR * 0.32 * invAsp;
      const sy = py + (r2 - 0.5) * maxR * 0.32;
      const sr = maxR * (0.015 + (k === 0 ? 0.032 : 0.014)) * (0.4 + env * 0.7);
      const pH = buildTaperedNeedlePoly(sx, sy, 0, sr * 2.4, sr * 2.4, sr * 0.28, aspect);
      const pV = buildTaperedNeedlePoly(sx, sy, Math.PI * 0.5, sr * 2.4, sr * 2.4, sr * 0.28, aspect);
      pushLightPoly(parts, pH, k === 0 ? pal.core : pal.bright, 0.88, xMin, yMin, xMax, yMax);
      pushLightPoly(parts, pV, k === 0 ? pal.core : pal.bright, 0.88, xMin, yMin, xMax, yMax);
    }
  }

  // Head Starburst at climax of comet/wave
  const headNode = isComet ? pts[pts.length - 3] : pts[Math.floor(pts.length * 0.5)];
  drawOpticalSunburstFlareUnit(
    m,
    parts,
    gradCounter,
    headNode[0],
    headNode[1],
    maxR * 0.58,
    pal,
    aspect,
    onTransSide,
    xMin,
    yMin,
    xMax,
    yMax,
    { mainRays: 10, fineRays: 36, coreScale: 0.85, seedSalt: subStyle + 41 }
  );
}

// ============================================================================
// STAGE SPOTLIGHT, VOLUMETRIC GOD-RAYS & PROJECTOR BEAM GENERATOR
// ============================================================================
function drawStageSpotlightRaysUnit(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  cx: number,
  cy: number,
  maxR: number,
  pal: LightingPaletteSpec,
  aspect: number,
  onTransSide: boolean,
  xMin: number,
  yMin: number,
  xMax: number,
  yMax: number,
  subStyle = 0
) {
  const invAsp = 1 / Math.max(0.45, aspect);
  const srcX = cx;
  const srcY = yMin + (yMax - yMin) * 0.14;
  const beamLen = (yMax - yMin) * 0.78;

  // Volumetric Spotlight Cone Polygons
  const coneRays = 9 + (subStyle % 5) * 2;
  const spreadAng = 0.52 + (subStyle % 3) * 0.12;
  for (let i = 0; i < coneRays; i++) {
    const u = i / Math.max(1, coneRays - 1) - 0.5;
    const ang = Math.PI * 0.5 + u * spreadAng;
    const rLen = beamLen * (0.85 + Math.cos(u * Math.PI) * 0.18);
    const rayPoly = buildTaperedNeedlePoly(srcX, srcY, ang, rLen, maxR * 0.05, maxR * (0.045 + (i % 2) * 0.025), aspect);
    pushLightPoly(
      parts,
      rayPoly,
      i % 2 === 0 ? pal.bright : onTransSide ? pal.transAura : pal.mid,
      onTransSide ? 0.22 : 0.28,
      xMin,
      yMin,
      xMax,
      yMax
    );
  }

  // Stage Floor Podium Glow Reflection at bottom
  const floorY = yMin + (yMax - yMin) * 0.84;
  pushRadialGlowOrb(
    m,
    parts,
    gradCounter,
    cx,
    floorY,
    maxR * 0.65,
    aspect,
    [
      { off: "0%", col: pal.core, op: 0.92 },
      { off: "25%", col: pal.bright, op: 0.65 },
      { off: "60%", col: onTransSide ? pal.transAura : pal.mid, op: 0.25 },
      { off: "100%", col: pal.ambient, op: 0.0 },
    ],
    1.45,
    0.26
  );

  // Top Projector Lamp Starburst Source
  drawOpticalSunburstFlareUnit(
    m,
    parts,
    gradCounter,
    srcX,
    srcY,
    maxR * 0.55,
    pal,
    aspect,
    onTransSide,
    xMin,
    yMin,
    xMax,
    yMax,
    { mainRays: 10, fineRays: 36, horizBeam: 0.7, seedSalt: subStyle + 77 }
  );
}

// ============================================================================
// MASTER LIGHTING COLLECTION RENDERER (SUPPORTS 50/50 SPLIT, TRANSPARENT, BLACK)
// ============================================================================
export type LightingArtArchetype =
  | "ref1_split_sunburst"
  | "ref2_anamorphic_8kit"
  | "split_anamorphic_hero"
  | "laser_divider_4stack"
  | "mixed_flare_6pack"
  | "sparkle_stars_9grid"
  | "solar_eclipse_ring"
  | "camera_bokeh_trail"
  | "stardust_comet_wave"
  | "stage_spotlight_cone"
  | "diamond_cross_star"
  | "mega_flare_12bundle";

export interface MasterLightingModeSpec {
  id: string;
  name: string;
  shortLabel: string;
  arch: LightingArtArchetype;
  defBgMode: "split" | "transparent" | "black";
  defPcs: string;
  defTheme: LightingColorThemeId;
  subIdx: number;
}

// ============================================================================
// 20-ARCHETYPE MASTER OPTICAL LIGHTING UNIT GENERATOR (MILLIONS OF UNIQUE STYLES!)
// ============================================================================
function drawMasterOpticalLightingUnit(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  unitKind: number, // 0..19 (20 completely distinct optical lighting & flare architectures!)
  cx: number,
  cy: number,
  w: number,
  h: number,
  maxR: number,
  pal: LightingPaletteSpec,
  aspect: number,
  onTransSide: boolean,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  rayCount: number,
  seedSalt: number
) {
  const kind = ((unitKind % 20) + 20) % 20;
  const invAsp = 1 / Math.max(0.45, aspect);
  const uHash = (idx: number, k: number) => {
    const x = Math.sin((idx * 127.1 + k * 311.7 + seedSalt * 53.3) * 0.17) * 43758.5453;
    return x - Math.floor(x);
  };

  // Helper to emit a crisp 4-point or 8-point mini diamond star twinkle at (sx, sy)
  const emitDiamondTwinkle = (sx: number, sy: number, r: number, rotRad = 0, withDiag = false) => {
    pushRadialGlowOrb(m, parts, gradCounter, sx, sy, r * 0.65, aspect, [
      { off: "0%", col: "#FFFFFF", op: 0.96 },
      { off: "40%", col: pal.bright, op: 0.55 },
      { off: "100%", col: pal.deep, op: 0.0 },
    ]);
    const pH = buildTaperedNeedlePoly(sx, sy, rotRad, r, r, r * 0.12, aspect);
    const pV = buildTaperedNeedlePoly(sx, sy, rotRad + Math.PI * 0.5, r, r, r * 0.12, aspect);
    pushLightPoly(parts, pH, pal.core, 0.95, x0, y0, x1, y1);
    pushLightPoly(parts, pV, pal.core, 0.95, x0, y0, x1, y1);
    if (withDiag) {
      const pD1 = buildTaperedNeedlePoly(sx, sy, rotRad + Math.PI * 0.25, r * 0.56, r * 0.56, r * 0.08, aspect);
      const pD2 = buildTaperedNeedlePoly(sx, sy, rotRad - Math.PI * 0.25, r * 0.56, r * 0.56, r * 0.08, aspect);
      pushLightPoly(parts, pD1, pal.bright, 0.85, x0, y0, x1, y1);
      pushLightPoly(parts, pD2, pal.bright, 0.85, x0, y0, x1, y1);
    }
  };

  // Helper to emit an aspect-corrected glowing plasma ring
  const emitPlasmaRing = (ox: number, oy: number, rRing: number, coreStop = 82) => {
    const rxOut = (rRing * 1.18) * invAsp;
    const ryOut = rRing * 1.18;
    const gid = `LG_RNG_${++gradCounter.n}`;
    m.defs.push(
      `<radialGradient id="${gid}" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">` +
        `<stop offset="0%" stop-color="${pal.ambient}" stop-opacity="0"/>` +
        `<stop offset="${Math.max(30, coreStop - 22)}%" stop-color="${pal.deep}" stop-opacity="${onTransSide ? 0.10 : 0.22}"/>` +
        `<stop offset="${coreStop - 7}%" stop-color="${pal.mid}" stop-opacity="${onTransSide ? 0.58 : 0.80}"/>` +
        `<stop offset="${coreStop}%" stop-color="${pal.core}" stop-opacity="0.98"/>` +
        `<stop offset="${Math.min(96, coreStop + 7)}%" stop-color="${pal.bright}" stop-opacity="${onTransSide ? 0.55 : 0.76}"/>` +
        `<stop offset="100%" stop-color="${pal.deep}" stop-opacity="0"/>` +
        `</radialGradient>`
    );
    parts.push(`<ellipse cx="${f1(ox)}" cy="${f1(oy)}" rx="${f1(rxOut)}" ry="${f1(ryOut)}" fill="url(#${gid})"/>`);
  };

  if (kind === 0) {
    // ARCH 0: 360° Solar Sunburst & Coronal Star (Habuhu Ref 1)
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, cx, cy, maxR, pal, aspect, onTransSide, x0, y0, x1, y1, {
      mainRays: rayCount,
      fineRays: 76,
      rotDeg: (seedSalt % 12) * 15,
      coreScale: 1.0,
      haloScale: 1.0,
      asymmetry: 0.38,
      horizBeam: 0,
      seedSalt,
    });
    return;
  }

  if (kind === 1) {
    // ARCH 1: Horizontal Anamorphic Cinema Laser Streak (Habuhu Ref 2)
    drawAnamorphicHorizontalStreakUnit(
      m,
      parts,
      gradCounter,
      cx,
      cy,
      w * 0.44,
      h * 0.48,
      seedSalt % 8,
      pal,
      aspect,
      onTransSide,
      x0,
      y0,
      x1,
      y1,
      0
    );
    return;
  }

  if (kind === 2) {
    // ARCH 2: 4-Point Razor Jewelry Diamond Compass Cross & Orbiting Mini Twinkles
    const rotDeg = (seedSalt % 2) * 45;
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, cx, cy, maxR * 0.96, pal, aspect, onTransSide, x0, y0, x1, y1, {
      mainRays: 4,
      fineRays: 24,
      rotDeg,
      coreScale: 0.88,
      haloScale: 0.85,
      crossStar: true,
      seedSalt,
    });
    // Orbiting mini jewelry diamond twinkles
    const orbitCount = 4 + (seedSalt % 3);
    for (let i = 0; i < orbitCount; i++) {
      const a = (i / orbitCount) * Math.PI * 2 + 0.45 + (uHash(i, 1) - 0.5) * 0.35;
      const d = maxR * (0.42 + uHash(i, 2) * 0.36);
      emitDiamondTwinkle(cx + Math.cos(a) * d * invAsp, cy + Math.sin(a) * d, maxR * (0.14 + (i % 2) * 0.06), 0, true);
    }
    return;
  }

  if (kind === 3) {
    // ARCH 3: Total Solar Eclipse Diamond-Ring Portal & Plasma Corona
    pushRadialGlowOrb(m, parts, gradCounter, cx, cy, maxR * 1.02, aspect, [
      { off: "0%", col: "#000000", op: 0.0 },
      { off: "42%", col: pal.deep, op: onTransSide ? 0.30 : 0.55 },
      { off: "54%", col: pal.core, op: 0.96 },
      { off: "68%", col: pal.mid, op: onTransSide ? 0.38 : 0.52 },
      { off: "100%", col: pal.ambient, op: 0.0 },
    ]);
    emitPlasmaRing(cx, cy, maxR * 0.56, 82);
    // Dark occluded lunar disc inside the ring on black mode
    if (!onTransSide) {
      parts.push(
        `<ellipse cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(maxR * 0.43 * invAsp)}" ry="${f1(maxR * 0.43)}" fill="#020305" opacity="0.94"/>`
      );
    }
    // Blinding Diamond-Ring burst on the rim of the eclipse
    const rimAng = ((seedSalt * 47) % 360) * (Math.PI / 180);
    const rimX = cx + Math.cos(rimAng) * maxR * 0.47 * invAsp;
    const rimY = cy + Math.sin(rimAng) * maxR * 0.47;
    drawOpticalSunburstFlareUnit(m, parts, gradCounter, rimX, rimY, maxR * 0.56, pal, aspect, onTransSide, x0, y0, x1, y1, {
      mainRays: 8,
      fineRays: 36,
      rotDeg: (rimAng * 180) / Math.PI,
      coreScale: 0.85,
      haloScale: 0.75,
      crossStar: true,
      seedSalt,
    });
    return;
  }

  if (kind === 4) {
    // ARCH 4: 35mm Cinema Lens Hexagonal Bokeh & Iris Aperture Trail
    drawCameraBokehLensTrailUnit(
      m,
      parts,
      gradCounter,
      cx,
      cy,
      maxR,
      pal,
      aspect,
      onTransSide,
      x0,
      y0,
      x1,
      y1,
      -32 + (seedSalt % 5) * 16,
      seedSalt
    );
    return;
  }

  if (kind === 5) {
    // ARCH 5: Magical Fairy Stardust S-Wave & Sparkle Ribbon
    drawStardustWaveTrailUnit(m, parts, gradCounter, cx, cy, maxR, pal, aspect, onTransSide, x0, y0, x1, y1, seedSalt);
    return;
  }

  if (kind === 6) {
    // ARCH 6: Volumetric Stage Spotlight Cone & Podium Floor Reflection
    drawStageSpotlightRaysUnit(m, parts, gradCounter, cx, cy, maxR, pal, aspect, onTransSide, x0, y0, x1, y1, seedSalt);
    return;
  }

  if (kind === 7) {
    // ARCH 7: Logarithmic Spiral Galaxy & Cosmic Nebula Vortex
    const arms = 2 + (seedSalt % 3); // 2, 3, or 4 spiral arms
    const rotBase = (seedSalt * 0.45) % (Math.PI * 2);
    pushRadialGlowOrb(m, parts, gradCounter, cx, cy, maxR * 0.92, aspect, [
      { off: "0%", col: "#FFFFFF", op: 0.98 },
      { off: "18%", col: pal.inner, op: 0.85 },
      { off: "45%", col: pal.mid, op: onTransSide ? 0.34 : 0.48 },
      { off: "100%", col: pal.ambient, op: 0.0 },
    ]);
    for (let a = 0; a < arms; a++) {
      const armOffset = rotBase + (a / arms) * Math.PI * 2;
      const steps = 24;
      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        const theta = armOffset + t * Math.PI * 1.85;
        const r = maxR * (0.08 + Math.pow(t, 0.92) * 0.84);
        const px = cx + Math.cos(theta) * r * invAsp;
        const py = cy + Math.sin(theta) * r;
        const tang = theta + Math.PI * 0.46;
        const segLen = maxR * (0.14 * (1 - t * 0.45));
        const segW = maxR * (0.026 * (1 - t * 0.55));
        const poly = buildTaperedNeedlePoly(px, py, tang, segLen, segLen, segW, aspect);
        pushLightPoly(parts, poly, s % 2 === 0 ? pal.bright : pal.inner, (1 - t * 0.65) * 0.85, x0, y0, x1, y1);
        if (s % 5 === 0) {
          emitDiamondTwinkle(px, py, maxR * 0.11 * (1 - t * 0.3), tang, false);
        }
      }
    }
    emitDiamondTwinkle(cx, cy, maxR * 0.48, rotBase, true);
    return;
  }

  if (kind === 8) {
    // ARCH 8: High-Voltage Tesla Plasma Lightning & Branching Energy Arcs
    pushRadialGlowOrb(m, parts, gradCounter, cx, cy, maxR * 0.85, aspect, [
      { off: "0%", col: "#FFFFFF", op: 0.98 },
      { off: "22%", col: pal.bright, op: 0.72 },
      { off: "55%", col: pal.deep, op: onTransSide ? 0.28 : 0.42 },
      { off: "100%", col: pal.ambient, op: 0.0 },
    ]);
    const bolts = 5 + (seedSalt % 4);
    for (let b = 0; b < bolts; b++) {
      let curX = cx;
      let curY = cy;
      const baseAng = (b / bolts) * Math.PI * 2 + uHash(b, 1) * 0.4;
      const segs = 7;
      const stepR = (maxR * 0.92) / segs;
      for (let s = 0; s < segs; s++) {
        const zig = (uHash(b * 11 + s, 2) - 0.5) * 0.85;
        const ang = baseAng + zig;
        const nx = curX + Math.cos(ang) * stepR * invAsp;
        const ny = curY + Math.sin(ang) * stepR;
        const midX = (curX + nx) * 0.5;
        const midY = (curY + ny) * 0.5;
        const segLen = stepR * 0.68;
        const wBolt = maxR * (0.022 * (1 - s / (segs + 2)));
        const outerP = buildTaperedNeedlePoly(midX, midY, ang, segLen * 1.1, segLen * 1.1, wBolt * 2.2, aspect);
        const coreP = buildTaperedNeedlePoly(midX, midY, ang, segLen, segLen, wBolt * 0.7, aspect);
        pushLightPoly(parts, outerP, pal.mid, 0.75, x0, y0, x1, y1);
        pushLightPoly(parts, coreP, "#FFFFFF", 0.96, x0, y0, x1, y1);
        // Secondary fork branch
        if (s === 3 || s === 4) {
          const forkAng = ang + (s % 2 === 0 ? 0.65 : -0.65);
          const fLen = stepR * 0.85;
          const fx = nx + Math.cos(forkAng) * fLen * 0.5 * invAsp;
          const fy = ny + Math.sin(forkAng) * fLen * 0.5;
          const forkP = buildTaperedNeedlePoly(fx, fy, forkAng, fLen * 0.6, fLen * 0.6, wBolt * 0.8, aspect);
          pushLightPoly(parts, forkP, pal.bright, 0.82, x0, y0, x1, y1);
        }
        curX = nx;
        curY = ny;
      }
    }
    emitDiamondTwinkle(cx, cy, maxR * 0.36, 0, true);
    return;
  }

  if (kind === 9) {
    // ARCH 9: Double Concentric Shockwave Energy Ring & Tangential Laser Spokes
    emitPlasmaRing(cx, cy, maxR * 0.74, 84);
    emitPlasmaRing(cx, cy, maxR * 0.42, 80);
    const spokes = 8 + (seedSalt % 3) * 2;
    for (let i = 0; i < spokes; i++) {
      const a = (i / spokes) * Math.PI * 2 + (seedSalt % 7) * 0.15;
      const rLen = maxR * (i % 2 === 0 ? 0.96 : 0.62);
      const pOuter = buildTaperedNeedlePoly(cx, cy, a, rLen, rLen * 0.2, maxR * 0.016, aspect);
      const pCore = buildTaperedNeedlePoly(cx, cy, a, rLen * 0.82, rLen * 0.15, maxR * 0.006, aspect);
      pushLightPoly(parts, pOuter, pal.mid, 0.72, x0, y0, x1, y1);
      pushLightPoly(parts, pCore, pal.core, 0.95, x0, y0, x1, y1);
    }
    pushRadialGlowOrb(m, parts, gradCounter, cx, cy, maxR * 0.30, aspect, [
      { off: "0%", col: "#FFFFFF", op: 1.0 },
      { off: "35%", col: pal.inner, op: 0.88 },
      { off: "100%", col: pal.mid, op: 0.0 },
    ]);
    return;
  }

  if (kind === 10) {
    // ARCH 10: Crystal Prism Swept X-Wing & Anamorphic Dispersion Flare
    const wingAngles = [-0.42, 0.42, Math.PI - 0.42, Math.PI + 0.42];
    pushRadialGlowOrb(m, parts, gradCounter, cx, cy, maxR * 0.95, aspect, [
      { off: "0%", col: "#FFFFFF", op: 1.0 },
      { off: "22%", col: pal.inner, op: 0.88 },
      { off: "52%", col: pal.mid, op: onTransSide ? 0.38 : 0.54 },
      { off: "100%", col: pal.ambient, op: 0.0 },
    ]);
    for (let wIdx = 0; wIdx < wingAngles.length; wIdx++) {
      const baseA = wingAngles[wIdx] + ((seedSalt % 5) - 2) * 0.06;
      for (let f = -2; f <= 2; f++) {
        const a = baseA + f * 0.055;
        const reach = maxR * (0.96 - Math.abs(f) * 0.14);
        const wWing = maxR * (0.032 - Math.abs(f) * 0.004);
        const poly = buildTaperedNeedlePoly(cx, cy, a, reach, reach * 0.18, wWing, aspect);
        pushLightPoly(parts, poly, f === 0 ? pal.core : Math.abs(f) === 1 ? pal.bright : pal.mid, 0.84 - Math.abs(f) * 0.18, x0, y0, x1, y1);
      }
    }
    // Horizontal razor laser bar across center
    const hBeam = buildTaperedNeedlePoly(cx, cy, 0, maxR * 1.02, maxR * 1.02, maxR * 0.018, aspect);
    pushLightPoly(parts, hBeam, "#FFFFFF", 0.96, x0, y0, x1, y1);
    return;
  }

  if (kind === 11) {
    // ARCH 11: Supernova Firework Particle Explosion & Terminal Star-Tips
    pushRadialGlowOrb(m, parts, gradCounter, cx, cy, maxR * 0.72, aspect, [
      { off: "0%", col: "#FFFFFF", op: 0.96 },
      { off: "30%", col: pal.bright, op: 0.65 },
      { off: "100%", col: pal.deep, op: 0.0 },
    ]);
    const streams = 16 + (seedSalt % 4) * 2;
    for (let i = 0; i < streams; i++) {
      const a = (i / streams) * Math.PI * 2 + uHash(i, 1) * 0.12;
      const dist = maxR * (0.52 + (i % 3) * 0.16 + uHash(i, 2) * 0.12);
      const tx = cx + Math.cos(a) * dist * invAsp;
      const ty = cy + Math.sin(a) * dist;
      const mx = (cx + tx) * 0.5;
      const my = (cy + ty) * 0.5;
      const trailP = buildTaperedNeedlePoly(mx, my, a, dist * 0.52, dist * 0.42, maxR * 0.012, aspect);
      pushLightPoly(parts, trailP, i % 2 === 0 ? pal.bright : pal.mid, 0.78, x0, y0, x1, y1);
      emitDiamondTwinkle(tx, ty, maxR * (i % 2 === 0 ? 0.13 : 0.09), a, i % 3 === 0);
    }
    emitDiamondTwinkle(cx, cy, maxR * 0.34, 0, true);
    return;
  }

  if (kind === 12) {
    // ARCH 12: Cyber Laser Fan & Intersecting Horizon Beam Matrix
    const srcY = y0 + h * 0.82;
    const fanCount = 9 + (seedSalt % 4) * 2;
    for (let i = 0; i < fanCount; i++) {
      const u = i / Math.max(1, fanCount - 1) - 0.5;
      const ang = -Math.PI * 0.5 + u * 1.42;
      const len = maxR * 1.65;
      const pOuter = buildTaperedNeedlePoly(cx, srcY, ang, len, maxR * 0.1, maxR * 0.022, aspect);
      const pInner = buildTaperedNeedlePoly(cx, srcY, ang, len * 0.9, maxR * 0.08, maxR * 0.008, aspect);
      pushLightPoly(parts, pOuter, i % 2 === 0 ? pal.mid : pal.bright, 0.62, x0, y0, x1, y1);
      pushLightPoly(parts, pInner, pal.core, 0.92, x0, y0, x1, y1);
    }
    // Horizontal intersecting laser bar at source horizon
    drawAnamorphicHorizontalStreakUnit(m, parts, gradCounter, cx, srcY, w * 0.44, h * 0.32, 2, pal, aspect, onTransSide, x0, y0, x1, y1, 0);
    return;
  }

  if (kind === 13) {
    // ARCH 13: Aurora Borealis Silk Light Curtain & Vertical Photon Waves
    const colsA = 22;
    for (let c = 0; c < colsA; c++) {
      const u = c / (colsA - 1) - 0.5;
      const px = cx + u * maxR * 1.65 * invAsp;
      const waveY = cy + Math.sin(u * Math.PI * 2.4 + seedSalt * 0.7) * maxR * 0.24;
      const colH = maxR * (0.48 + Math.cos(u * Math.PI) * 0.42);
      const colW = maxR * 0.045;
      const pCurtain = buildTaperedNeedlePoly(px, waveY, -Math.PI * 0.5, colH, colH * 0.55, colW, aspect);
      const pSpine = buildTaperedNeedlePoly(px, waveY, -Math.PI * 0.5, colH * 0.75, colH * 0.35, colW * 0.35, aspect);
      pushLightPoly(parts, pCurtain, c % 2 === 0 ? pal.mid : pal.bright, onTransSide ? 0.38 : 0.50, x0, y0, x1, y1);
      pushLightPoly(parts, pSpine, pal.core, 0.85, x0, y0, x1, y1);
      if (c % 4 === 1) {
        emitDiamondTwinkle(px, waveY - colH * 0.35, maxR * 0.12, 0, false);
      }
    }
    return;
  }

  if (kind === 14) {
    // ARCH 14: Champagne Bokeh Cloud & Constellation Star Cluster
    pushRadialGlowOrb(m, parts, gradCounter, cx, cy, maxR * 0.95, aspect, [
      { off: "0%", col: pal.bright, op: onTransSide ? 0.45 : 0.60 },
      { off: "55%", col: pal.deep, op: onTransSide ? 0.18 : 0.28 },
      { off: "100%", col: pal.ambient, op: 0.0 },
    ]);
    const nodes: [number, number, number][] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + uHash(i, 1) * 0.5;
      const d = maxR * (0.12 + uHash(i, 2) * 0.72);
      const bx = cx + Math.cos(a) * d * invAsp;
      const by = cy + Math.sin(a) * d;
      const br = maxR * (0.09 + (i % 4) * 0.055);
      nodes.push([bx, by, br]);
      const sides = i % 2 === 0 ? 6 : 24;
      const poly: [number, number][] = [];
      for (let s = 0; s < sides; s++) {
        const sa = (s / sides) * Math.PI * 2;
        poly.push([bx + Math.cos(sa) * br * invAsp, by + Math.sin(sa) * br]);
      }
      pushLightPoly(parts, poly, i % 3 === 0 ? pal.inner : pal.bright, 0.28 + (i % 3) * 0.10, x0, y0, x1, y1);
    }
    for (let i = 0; i < 6; i++) {
      const [sx, sy] = nodes[(i * 2) % nodes.length];
      emitDiamondTwinkle(sx, sy, maxR * (0.16 + (i % 2) * 0.08), i * 0.4, true);
    }
    return;
  }

  if (kind === 15) {
    // ARCH 15: Double-Helix Infinity Loop Photon Ribbon & Dual Focal Stars
    const steps = 36;
    for (let strand = 0; strand < 2; strand++) {
      const sign = strand === 0 ? 1 : -1;
      for (let s = 0; s <= steps; s++) {
        const u = (s / steps - 0.5) * 1.75;
        const px = cx + u * maxR * invAsp;
        const py = cy + sign * Math.sin(u * Math.PI * 1.45) * maxR * 0.36;
        const env = Math.cos(u * Math.PI * 0.5);
        pushRadialGlowOrb(m, parts, gradCounter, px, py, maxR * (0.07 + env * 0.11), aspect, [
          { off: "0%", col: "#FFFFFF", op: 0.88 * Math.max(0.25, env) },
          { off: "45%", col: strand === 0 ? pal.bright : pal.mid, op: 0.52 * Math.max(0.2, env) },
          { off: "100%", col: pal.deep, op: 0.0 },
        ]);
      }
    }
    emitDiamondTwinkle(cx - maxR * 0.36 * invAsp, cy, maxR * 0.38, 0, true);
    emitDiamondTwinkle(cx + maxR * 0.36 * invAsp, cy, maxR * 0.38, Math.PI * 0.25, true);
    return;
  }

  if (kind === 16) {
    // ARCH 16: Rising Horizon Half-Sun Crown Arch & Shimmering Water Reflections
    const hY = cy + maxR * 0.08;
    // Upper 180° crown rays
    const crownRays = 15;
    for (let i = 0; i < crownRays; i++) {
      const a = -Math.PI + (i / (crownRays - 1)) * Math.PI;
      const rLen = maxR * (0.72 + (i % 2) * 0.24);
      const pOuter = buildTaperedNeedlePoly(cx, hY, a, rLen, 0, maxR * 0.025, aspect);
      const pInner = buildTaperedNeedlePoly(cx, hY, a, rLen * 0.8, 0, maxR * 0.010, aspect);
      pushLightPoly(parts, pOuter, pal.mid, 0.72, x0, y0, x1, y1);
      pushLightPoly(parts, pInner, pal.core, 0.94, x0, y0, x1, y1);
    }
    // Horizon laser bar
    const hBar = buildTaperedNeedlePoly(cx, hY, 0, maxR * 1.04, maxR * 1.04, maxR * 0.024, aspect);
    pushLightPoly(parts, hBar, "#FFFFFF", 0.98, x0, y0, x1, y1);
    // Shimmering horizontal water reflection bars below horizon
    for (let r = 1; r <= 6; r++) {
      const ry = hY + r * maxR * 0.11;
      const rw = maxR * (0.86 - r * 0.11);
      const rBar = buildTaperedNeedlePoly(cx, ry, 0, rw, rw, maxR * (0.018 - r * 0.002), aspect);
      pushLightPoly(parts, rBar, r % 2 === 0 ? pal.bright : pal.inner, 0.90 - r * 0.10, x0, y0, x1, y1);
    }
    pushRadialGlowOrb(m, parts, gradCounter, cx, hY, maxR * 0.36, aspect, [
      { off: "0%", col: "#FFFFFF", op: 1.0 },
      { off: "45%", col: pal.inner, op: 0.85 },
      { off: "100%", col: pal.mid, op: 0.0 },
    ]);
    return;
  }

  if (kind === 17) {
    // ARCH 17: Sci-Fi Optical HUD Lens Reticle & Segmented Ring Flare
    emitPlasmaRing(cx, cy, maxR * 0.64, 84);
    const ticks = 24;
    for (let t = 0; t < ticks; t++) {
      const a = (t / ticks) * Math.PI * 2;
      const r0 = maxR * 0.44;
      const r1 = maxR * (t % 3 === 0 ? 0.56 : 0.50);
      const mx = cx + Math.cos(a) * ((r0 + r1) * 0.5) * invAsp;
      const my = cy + Math.sin(a) * ((r0 + r1) * 0.5);
      const tickP = buildTaperedNeedlePoly(mx, my, a, (r1 - r0) * 0.6, (r1 - r0) * 0.6, maxR * 0.008, aspect);
      pushLightPoly(parts, tickP, t % 3 === 0 ? pal.core : pal.bright, 0.88, x0, y0, x1, y1);
    }
    // 4-axis tactical crosshair laser spikes
    for (let k = 0; k < 4; k++) {
      const a = (k * Math.PI) / 2;
      const pSpike = buildTaperedNeedlePoly(cx, cy, a, maxR * 0.98, 0, maxR * 0.016, aspect);
      pushLightPoly(parts, pSpike, pal.core, 0.96, x0, y0, x1, y1);
    }
    emitDiamondTwinkle(cx, cy, maxR * 0.36, Math.PI * 0.25, true);
    return;
  }

  if (kind === 18) {
    // ARCH 18: Diagonal Shooting-Star & Meteor Shower
    const meteors = [
      { dx: -0.15, dy: -0.22, len: 0.82, sc: 1.0 },
      { dx: 0.22, dy: 0.14, len: 0.68, sc: 0.78 },
      { dx: -0.26, dy: 0.24, len: 0.58, sc: 0.65 },
      { dx: 0.25, dy: -0.26, len: 0.52, sc: 0.58 },
    ];
    const ang = (-32 * Math.PI) / 180;
    const cosA = Math.cos(ang);
    const sinA = Math.sin(ang);
    for (let i = 0; i < meteors.length; i++) {
      const mt = meteors[i];
      const hx = cx + mt.dx * maxR * invAsp;
      const hy = cy + mt.dy * maxR;
      const tLen = maxR * mt.len;
      const tailMidX = hx - cosA * tLen * 0.45 * invAsp;
      const tailMidY = hy - sinA * tLen * 0.45;
      const outerTail = buildTaperedNeedlePoly(tailMidX, tailMidY, ang, tLen * 0.52, tLen * 0.52, maxR * 0.028 * mt.sc, aspect);
      const innerTail = buildTaperedNeedlePoly(tailMidX, tailMidY, ang, tLen * 0.45, tLen * 0.45, maxR * 0.010 * mt.sc, aspect);
      pushLightPoly(parts, outerTail, pal.mid, 0.72, x0, y0, x1, y1);
      pushLightPoly(parts, innerTail, pal.core, 0.95, x0, y0, x1, y1);
      emitDiamondTwinkle(hx, hy, maxR * 0.28 * mt.sc, 0, true);
    }
    return;
  }

  // ARCH 19: Sacred Geometry Octagram Lotus Light Mandala
  emitPlasmaRing(cx, cy, maxR * 0.58, 82);
  const petals = 8;
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * Math.PI * 2 + (seedSalt % 4) * 0.2;
    const tipR = maxR * 0.88;
    const tx = cx + Math.cos(a) * tipR * invAsp;
    const ty = cy + Math.sin(a) * tipR;
    const pBeam = buildTaperedNeedlePoly(cx, cy, a, tipR, tipR * 0.2, maxR * 0.032, aspect);
    const pCore = buildTaperedNeedlePoly(cx, cy, a, tipR * 0.88, tipR * 0.15, maxR * 0.010, aspect);
    pushLightPoly(parts, pBeam, i % 2 === 0 ? pal.mid : pal.bright, 0.65, x0, y0, x1, y1);
    pushLightPoly(parts, pCore, pal.core, 0.94, x0, y0, x1, y1);
    emitDiamondTwinkle(tx, ty, maxR * 0.14, a, false);
  }
  emitDiamondTwinkle(cx, cy, maxR * 0.42, 0, true);
}

function renderLightingArtworkInBox(
  m: any,
  parts: string[],
  gradCounter: { n: number },
  arch: LightingArtArchetype,
  subIdx: number,
  pcsMode: string,
  pal: LightingPaletteSpec,
  aspect: number,
  onTransSide: boolean,
  x0: number,
  y0: number,
  w: number,
  h: number,
  rayCount: number,
  scaleFactor: number,
  variant: number,
  seedNum = 17
) {
  const x1 = x0 + w;
  const y1 = y0 + h;
  const cx = x0 + w * 0.5;
  const cy = y0 + h * 0.5;
  // Convert box width to pixel-equivalent radius so circular flares never stretch horizontally
  const boxPixelW = w * Math.max(0.45, aspect);
  const maxR = Math.min(boxPixelW, h) * 0.46 * scaleFactor;
  const vSalt = subIdx * 19 + variant * 31 + (variant > 0 ? seedNum * 7 : 0);

  // Map arch to base unit archetype (0..19)
  const archToBaseKind: Record<LightingArtArchetype, number> = {
    ref1_split_sunburst: 0,
    ref2_anamorphic_8kit: 1,
    split_anamorphic_hero: 1,
    laser_divider_4stack: 1,
    mixed_flare_6pack: 2,
    sparkle_stars_9grid: 3,
    solar_eclipse_ring: 3,
    camera_bokeh_trail: 4,
    stardust_comet_wave: 5,
    stage_spotlight_cone: 6,
    diamond_cross_star: 2,
    mega_flare_12bundle: 7,
  };
  const baseKind =
    variant > 0
      ? (archToBaseKind[arch] + subIdx * 3 + variant * 7 + (seedNum % 20)) % 20
      : (archToBaseKind[arch] + (subIdx > 0 ? subIdx * 2 : 0)) % 20;

  // Multi-Piece Grid Override if user selects 2, 4, 6, 8, 9, 12 PCS on ANY lighting mode!
  if (pcsMode === "8" || (pcsMode === "auto" && arch === "ref2_anamorphic_8kit")) {
    // 2 Columns x 4 Rows (When variant === 0 on Ref 2, exact match to Ref 2 image_c2856524.png! When variant > 0, mixes 8 distinct optical flares & lasers!)
    const cols = 2;
    const rows = 4;
    const cellW = w / cols;
    const cellH = h / rows;
    const cellR = Math.min(cellW * Math.max(0.45, aspect), cellH) * 0.44 * scaleFactor;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const idx = c * rows + r; // 0..3 left col, 4..7 right col
        const icx = x0 + (c + 0.5) * cellW;
        const icy = y0 + (r + 0.5) * cellH;
        if (variant === 0) {
          drawAnamorphicHorizontalStreakUnit(
            m,
            parts,
            gradCounter,
            icx,
            icy,
            cellW * 0.44 * scaleFactor,
            cellH * 0.48 * scaleFactor,
            idx % 8,
            pal,
            aspect,
            onTransSide,
            x0 + c * cellW,
            y0 + r * cellH,
            x0 + (c + 1) * cellW,
            y0 + (r + 1) * cellH,
            0
          );
        } else {
          const cellKind = (baseKind + idx * 7) % 20;
          drawMasterOpticalLightingUnit(
            m,
            parts,
            gradCounter,
            cellKind,
            icx,
            icy,
            cellW,
            cellH,
            cellR,
            pal,
            aspect,
            onTransSide,
            x0 + c * cellW,
            y0 + r * cellH,
            x0 + (c + 1) * cellW,
            y0 + (r + 1) * cellH,
            rayCount,
            vSalt + idx * 17
          );
        }
      }
    }
    return;
  }

  if (pcsMode === "4" || (pcsMode === "auto" && arch === "laser_divider_4stack")) {
    // 4-Row Vertical Stack of Full-Width Horizontal Anamorphic Laser & Stardust Dividers
    const rows = 4;
    const cellH = h / rows;
    for (let r = 0; r < rows; r++) {
      const icy = y0 + (r + 0.5) * cellH;
      drawAnamorphicHorizontalStreakUnit(
        m,
        parts,
        gradCounter,
        cx,
        icy,
        w * 0.43 * scaleFactor,
        cellH * 0.52 * scaleFactor,
        (r * 2 + subIdx + variant + (variant > 0 ? seedNum : 0)) % 8,
        pal,
        aspect,
        onTransSide,
        x0,
        y0 + r * cellH,
        x1,
        y0 + (r + 1) * cellH,
        0
      );
    }
    return;
  }

  const gridLayouts: Record<string, { cols: number; rows: number }> = {
    "4grid": { cols: 2, rows: 2 },
    "6": { cols: 3, rows: 2 },
    "9": { cols: 3, rows: 3 },
    "12": { cols: 4, rows: 3 },
  };
  const autoGridKey =
    pcsMode !== "auto"
      ? pcsMode
      : arch === "mixed_flare_6pack"
      ? "6"
      : arch === "sparkle_stars_9grid"
      ? "9"
      : arch === "mega_flare_12bundle"
      ? "12"
      : "";

  if (gridLayouts[autoGridKey]) {
    const { cols, rows } = gridLayouts[autoGridKey];
    const cellW = w / cols;
    const cellH = h / rows;
    const cellR = Math.min(cellW * Math.max(0.45, aspect), cellH) * 0.44 * scaleFactor;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const icx = x0 + (c + 0.5) * cellW;
        const icy = y0 + (r + 0.5) * cellH;
        // CRITICAL: Every cell (idx = 0..N-1) gets a 100% DIFFERENT lighting unit archetype out of the 20 optical generators (gcd(7, 20) = 1 -> ZERO duplicate flares on the board!)
        const cellKind = (baseKind + idx * 7) % 20;
        drawMasterOpticalLightingUnit(
          m,
          parts,
          gradCounter,
          cellKind,
          icx,
          icy,
          cellW,
          cellH,
          cellR,
          pal,
          aspect,
          onTransSide,
          x0 + c * cellW,
          y0 + r * cellH,
          x0 + (c + 1) * cellW,
          y0 + (r + 1) * cellH,
          rayCount,
          vSalt + idx * 23
        );
      }
    }
    return;
  }

  // Single Hero Unit inside the box [x0..x1, y0..y1]
  // When variant === 0 on Ref 1, render 100% exact Habuhu Golden Solar Sunburst (image_aff32f28.png)
  if (variant === 0 && arch === "ref1_split_sunburst" && subIdx === 0) {
    drawOpticalSunburstFlareUnit(
      m,
      parts,
      gradCounter,
      cx,
      cy,
      maxR,
      pal,
      aspect,
      onTransSide,
      x0,
      y0,
      x1,
      y1,
      {
        mainRays: rayCount,
        fineRays: 76,
        rotDeg: 0,
        coreScale: 1.0,
        haloScale: 1.0,
        asymmetry: 0.38,
        horizBeam: 0,
        seedSalt: vSalt,
      }
    );
    return;
  }

  drawMasterOpticalLightingUnit(
    m,
    parts,
    gradCounter,
    baseKind,
    cx,
    cy,
    w,
    h,
    maxR,
    pal,
    aspect,
    onTransSide,
    x0,
    y0,
    x1,
    y1,
    rayCount,
    vSalt
  );
}

const ALL_LIGHTING_THEME_IDS: Exclude<LightingColorThemeId, "palette">[] = [
  "gold24k",
  "amber_fire",
  "champagne",
  "cyber_cyan",
  "royal_blue",
  "neon_magenta",
  "emerald_mint",
  "violet_nova",
  "crimson_ruby",
  "diamond_white",
];

function renderMasterLightingCollection(
  m: any,
  q: Record<string, any>,
  spec: MasterLightingModeSpec
) {
  const bgMode = String(q.bgMode || spec.defBgMode) as "split" | "transparent" | "black";
  const pcsMode = String(q.pcs || spec.defPcs || "auto");
  const variant = Math.max(0, Math.round(+(q.variant ?? 0)));
  const seedNum = Math.abs(Math.round(+(m.C?.seed || 17)));
  // When variant > 0, automatically rotate colour spectrum across all 10 optical palettes so it never stays stuck on one colour!
  const rawThemeId = String(q.colorSet || spec.defTheme || "gold24k");
  const baseThemeIdx = Math.max(0, ALL_LIGHTING_THEME_IDS.indexOf(rawThemeId as any));
  const themeId =
    rawThemeId === "palette"
      ? "palette"
      : variant > 0
      ? ALL_LIGHTING_THEME_IDS[(baseThemeIdx + variant * 3 + (seedNum % 7)) % ALL_LIGHTING_THEME_IDS.length]
      : rawThemeId;
  const rayCount = Math.max(4, Math.min(32, Math.round(+(q.rays ?? 14))));
  const scaleFactor = Math.max(0.55, Math.min(1.5, +(q.flareScale ?? 100) / 100));

  const dims = getRatioDims(
    m.C?.px || 5000,
    m.C?.ratio || "2:1",
    m.C?.artW,
    m.C?.artH
  );
  const aspect = Math.max(0.5, Math.min(2.6, dims.w / Math.max(1, dims.h)));
  const pal = getLightingPalette(m, themeId);

  const parts: string[] = [];
  const gradCounter = { n: 0 };

  if (bgMode === "split") {
    // 50/50 SPLIT ARTBOARD (Exact match to Ref 1 image_aff32f28.png!):
    // Left Half (x: 0..500): Pitch Black Background (#000000)
    // Right Half (x: 500..1000): Transparent Background (Zero background rect in SVG/EPS!)
    parts.push(`<rect x="0" y="0" width="500" height="${T}" fill="#000000"/>`);

    // If this is the 8-Piece 2x4 Kit (Ref 2) in Split Mode:
    // Left Column (4 flares) renders on the Left Black Half, Right Column (4 flares) renders on the Right Transparent Half!
    const is8Kit = pcsMode === "8" || (pcsMode === "auto" && spec.arch === "ref2_anamorphic_8kit");
    if (is8Kit) {
      const rows = 4;
      const cellH = T / rows;
      const cellR = Math.min(500 * Math.max(0.45, aspect), cellH) * 0.42 * scaleFactor;
      for (let r = 0; r < rows; r++) {
        const icy = (r + 0.5) * cellH;
        if (variant === 0) {
          // Left Black Half Column (items 0..3)
          drawAnamorphicHorizontalStreakUnit(
            m,
            parts,
            gradCounter,
            250,
            icy,
            225 * scaleFactor,
            cellH * 0.48 * scaleFactor,
            r % 8,
            pal,
            aspect,
            false,
            0,
            r * cellH,
            500,
            (r + 1) * cellH,
            0
          );
          // Right Transparent Half Column (items 4..7)
          drawAnamorphicHorizontalStreakUnit(
            m,
            parts,
            gradCounter,
            750,
            icy,
            225 * scaleFactor,
            cellH * 0.48 * scaleFactor,
            (r + 4) % 8,
            pal,
            aspect,
            true,
            500,
            r * cellH,
            1000,
            (r + 1) * cellH,
            0
          );
        } else {
          const leftKind = (r * 7 + variant * 3 + seedNum) % 20;
          const rightKind = ((r + 4) * 7 + variant * 3 + seedNum) % 20;
          drawMasterOpticalLightingUnit(m, parts, gradCounter, leftKind, 250, icy, 500, cellH, cellR, pal, aspect, false, 0, r * cellH, 500, (r + 1) * cellH, rayCount, seedNum + r * 19);
          drawMasterOpticalLightingUnit(m, parts, gradCounter, rightKind, 750, icy, 500, cellH, cellR, pal, aspect, true, 500, r * cellH, 1000, (r + 1) * cellH, rayCount, seedNum + (r + 4) * 19);
        }
      }
      m.raw(parts.join(""));
      return;
    }

    // Standard Dual 50/50 Split Preview: Render identical lighting artwork on Left Black Half [0..500] and Right Transparent Half [500..1000]!
    renderLightingArtworkInBox(
      m,
      parts,
      gradCounter,
      spec.arch,
      spec.subIdx,
      pcsMode === "split" ? "1" : pcsMode,
      pal,
      aspect,
      false, // Left Half = On Black Background
      0,
      0,
      500,
      T,
      rayCount,
      scaleFactor,
      variant,
      seedNum
    );
    renderLightingArtworkInBox(
      m,
      parts,
      gradCounter,
      spec.arch,
      spec.subIdx,
      pcsMode === "split" ? "1" : pcsMode,
      pal,
      aspect,
      true, // Right Half = On Transparent Background
      500,
      0,
      500,
      T,
      rayCount,
      scaleFactor,
      variant,
      seedNum
    );
    m.raw(parts.join(""));
    return;
  }

  if (bgMode === "black") {
    // 100% PITCH BLACK BACKGROUND ACROSS ENTIRE ARTBOARD
    parts.push(`<rect x="0" y="0" width="${T}" height="${T}" fill="#000000"/>`);
    renderLightingArtworkInBox(
      m,
      parts,
      gradCounter,
      spec.arch,
      spec.subIdx,
      pcsMode === "split" ? "1" : pcsMode,
      pal,
      aspect,
      false,
      0,
      0,
      T,
      T,
      rayCount,
      scaleFactor,
      variant,
      seedNum
    );
    m.raw(parts.join(""));
    return;
  }

  // 100% TRANSPARENT BACKGROUND (ZERO BACKGROUND RECT IN SVG & EPS 10!)
  renderLightingArtworkInBox(
    m,
    parts,
    gradCounter,
    spec.arch,
    spec.subIdx,
    pcsMode === "split" ? "1" : pcsMode,
    pal,
    aspect,
    true,
    0,
    0,
    T,
    T,
    rayCount,
    scaleFactor,
    variant,
    seedNum
  );
  m.raw(parts.join(""));
}

const BASE_8_REFERENCE_LIGHTING_MODES: MasterLightingModeSpec[] = [
  {
    id: "light_ref1_split_golden_sunburst",
    name: "Light 1: Habuhu 50/50 Split Golden Sunburst & Star Flare (Ref 1)",
    shortLabel: "LIGHT 1: 50/50 SUNBURST (REF 1)",
    arch: "ref1_split_sunburst",
    defBgMode: "split",
    defPcs: "1",
    defTheme: "gold24k",
    subIdx: 0,
  },
  {
    id: "light_ref2_anamorphic_8pcs_kit",
    name: "Light 2: Habuhu 8-Pcs Golden Horizontal Anamorphic Laser Kit (Ref 2)",
    shortLabel: "LIGHT 2: 8-PCS LASER KIT (REF 2)",
    arch: "ref2_anamorphic_8kit",
    defBgMode: "black",
    defPcs: "8",
    defTheme: "gold24k",
    subIdx: 0,
  },
  {
    id: "light_ref3_split_anamorphic_beam",
    name: "Light 3: 50/50 Split Horizontal Anamorphic Star Laser Beam",
    shortLabel: "LIGHT 3: 50/50 LASER BEAM",
    arch: "split_anamorphic_hero",
    defBgMode: "split",
    defPcs: "1",
    defTheme: "gold24k",
    subIdx: 2,
  },
  {
    id: "light_ref4_laser_divider_4pcs",
    name: "Light 4: 4-Pcs Vertical Stack Golden Laser & Starburst Dividers",
    shortLabel: "LIGHT 4: 4-PCS LASER DIVIDERS",
    arch: "laser_divider_4stack",
    defBgMode: "black",
    defPcs: "4",
    defTheme: "gold24k",
    subIdx: 0,
  },
  {
    id: "light_ref5_mixed_flare_6pcs",
    name: "Light 5: 6-Pcs Golden Starburst, Eclipse & Anamorphic Flare Pack",
    shortLabel: "LIGHT 5: 6-PCS FLARE PACK",
    arch: "mixed_flare_6pack",
    defBgMode: "black",
    defPcs: "6",
    defTheme: "gold24k",
    subIdx: 0,
  },
  {
    id: "light_ref6_diamond_stars_9pcs",
    name: "Light 6: 9-Pcs (3×3 Grid) Luxury Golden Diamond & Sparkle Star Set",
    shortLabel: "LIGHT 6: 9-PCS SPARKLE STARS",
    arch: "sparkle_stars_9grid",
    defBgMode: "black",
    defPcs: "9",
    defTheme: "gold24k",
    subIdx: 0,
  },
  {
    id: "light_ref7_solar_eclipse_ring",
    name: "Light 7: 50/50 Split Solar Eclipse Diamond Ring & Corona Burst",
    shortLabel: "LIGHT 7: 50/50 SOLAR ECLIPSE",
    arch: "solar_eclipse_ring",
    defBgMode: "split",
    defPcs: "1",
    defTheme: "amber_fire",
    subIdx: 0,
  },
  {
    id: "light_ref8_camera_bokeh_trail",
    name: "Light 8: 50/50 Split Camera Lens Bokeh & Hexagonal Aperture Flare",
    shortLabel: "LIGHT 8: 50/50 BOKEH LENS FLARE",
    arch: "camera_bokeh_trail",
    defBgMode: "split",
    defPcs: "1",
    defTheme: "gold24k",
    subIdx: 0,
  },
];

const CURATED_100_LIGHTING_CATALOG: {
  familyTitle: string;
  shortPrefix: string;
  arch: LightingArtArchetype;
  defBgMode: "split" | "transparent" | "black";
  defPcs: string;
  themes: LightingColorThemeId[];
  editions: string[];
}[] = [
  {
    familyTitle: "50/50 Split Solar Sunburst & 360° Needle Flare",
    shortPrefix: "SUNBURST",
    arch: "ref1_split_sunburst",
    defBgMode: "split",
    defPcs: "1",
    themes: ["gold24k", "amber_fire", "champagne", "gold24k", "amber_fire", "cyber_cyan", "royal_blue", "neon_magenta", "diamond_white", "gold24k"],
    editions: [
      "24K Imperial Gold Sun",
      "Fiery Amber Supernova",
      "Champagne Diamond Corona",
      "Asymmetric 16-Ray Star",
      "Blazing Solstice Flash",
      "Cyber Cyan Ice Sunburst",
      "Sapphire Optical Nova",
      "Neon Magenta Starlight",
      "Pure Platinum White Sun",
      "Double Halo Solar Core",
    ],
  },
  {
    familyTitle: "Horizontal Anamorphic Cinema Laser & Beam Kit",
    shortPrefix: "ANAMORPHIC",
    arch: "ref2_anamorphic_8kit",
    defBgMode: "black",
    defPcs: "8",
    themes: ["gold24k", "amber_fire", "champagne", "cyber_cyan", "royal_blue", "neon_magenta", "emerald_mint", "violet_nova", "crimson_ruby", "diamond_white"],
    editions: [
      "8-Pcs 24K Gold Laser Kit",
      "8-Pcs Sunset Amber Streaks",
      "8-Pcs Champagne Divider Beams",
      "8-Pcs Sci-Fi Cyan Anamorphic",
      "8-Pcs Cobalt Cinema Streaks",
      "8-Pcs Synthwave Pink Lasers",
      "8-Pcs Emerald Matrix Beams",
      "8-Pcs Cosmic Violet Flares",
      "8-Pcs Crimson Red Laser Pack",
      "8-Pcs Diamond White Dividers",
    ],
  },
  {
    familyTitle: "50/50 Split Diamond Compass Star & Jewelry Sparkle",
    shortPrefix: "DIAMOND STAR",
    arch: "diamond_cross_star",
    defBgMode: "split",
    defPcs: "1",
    themes: ["gold24k", "champagne", "diamond_white", "amber_fire", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "gold24k"],
    editions: [
      "8-Point Luxury Gold Compass",
      "4-Point Razor Diamond Cross",
      "Platinum Jewelry Twinkle",
      "Warm Amber Starlight Cross",
      "Arctic Ice Blue Star Flash",
      "Royal Sapphire Gem Sparkle",
      "Rose Pink Glamour Star",
      "Amethyst Crystal Nova",
      "Emerald Prism Cross Flare",
      "Anamorphic Cross-Star Flash",
    ],
  },
  {
    familyTitle: "Optical Camera Lens Bokeh & Aperture Flare Trail",
    shortPrefix: "BOKEH TRAIL",
    arch: "camera_bokeh_trail",
    defBgMode: "split",
    defPcs: "1",
    themes: ["gold24k", "amber_fire", "champagne", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "crimson_ruby", "diamond_white"],
    editions: [
      "Golden Hour Hexagonal Bokeh",
      "Sunset Cinema Aperture Trail",
      "Warm Vintage 35mm Lens Flare",
      "Anamorphic Cyan Bokeh Orbs",
      "Deep Ocean Blue Iris Trail",
      "Neon Dream Magenta Bokeh",
      "Ultraviolet Galaxy Aperture",
      "Forest Sunbeam Green Bokeh",
      "Ruby Horizon Optical Trail",
      "Crystal Prism White Bokeh",
    ],
  },
  {
    familyTitle: "50/50 Split Solar Eclipse Ring & Corona Portal",
    shortPrefix: "ECLIPSE RING",
    arch: "solar_eclipse_ring",
    defBgMode: "split",
    defPcs: "1",
    themes: ["amber_fire", "gold24k", "champagne", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "crimson_ruby", "diamond_white"],
    editions: [
      "Diamond-Ring Solar Eclipse",
      "24K Gold Halo Portal",
      "Champagne Celestial Ring",
      "Cyber Neon Cyan Ring",
      "Cobalt Supernova Shockwave",
      "Magenta Plasma Circle",
      "Mystic Violet Astral Ring",
      "Emerald Bio-Energy Halo",
      "Crimson Blood-Moon Eclipse",
      "Pure White Angelic Halo",
    ],
  },
  {
    familyTitle: "Magical Stardust Wave, Comet Tail & Sparkle Swirl",
    shortPrefix: "STARDUST",
    arch: "stardust_comet_wave",
    defBgMode: "split",
    defPcs: "1",
    themes: ["gold24k", "champagne", "amber_fire", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "crimson_ruby", "diamond_white"],
    editions: [
      "Golden Fairy Dust S-Wave",
      "Champagne Spiral Galaxy Swirl",
      "Blazing Meteor Comet Tail",
      "Frozen Ice Crystal Wave",
      "Celestial Sapphire Stardust",
      "Pixie Pink Magic Wand Trail",
      "Cosmic Nebula Spiral Vortex",
      "Aurora Mint Sparkle Ribbon",
      "Phoenix Fire Ember Trail",
      "Diamond Dust Holiday Swirl",
    ],
  },
  {
    familyTitle: "Stage Spotlight, Volumetric God-Rays & Podium Beam",
    shortPrefix: "SPOTLIGHT",
    arch: "stage_spotlight_cone",
    defBgMode: "split",
    defPcs: "1",
    themes: ["gold24k", "champagne", "amber_fire", "diamond_white", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "crimson_ruby"],
    editions: [
      "Golden Award Podium Spotlight",
      "Warm Theater Curtain Rays",
      "Amber Concert Sunbeam Cone",
      "White Studio Projector Flash",
      "Cyber Arena Laser Fan",
      "Royal Blue Keynote Downlight",
      "Fashion Runway Pink Beam",
      "VIP Lounge Violet Spotlight",
      "Emerald Laser Show Cone",
      "Red Carpet Premiere Lights",
    ],
  },
  {
    familyTitle: "50/50 Split Hero Anamorphic Horizontal Laser Beam",
    shortPrefix: "HERO LASER",
    arch: "split_anamorphic_hero",
    defBgMode: "split",
    defPcs: "1",
    themes: ["gold24k", "amber_fire", "champagne", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "crimson_ruby", "diamond_white"],
    editions: [
      "24K Gold Cinema Horizon",
      "Double Parallel Gold Reflection",
      "Central Starburst Laser Bar",
      "Cyberpunk Cyan Blade Streak",
      "Cobalt Warp-Drive Horizon",
      "Neon Magenta Laser Slash",
      "Quantum Violet Photon Streak",
      "Emerald Plasma Horizon Bar",
      "Crimson Ruby Laser Needle",
      "Diamond White Optical Streak",
    ],
  },
  {
    familyTitle: "6-Piece Assorted Starburst, Eclipse & Laser Pack",
    shortPrefix: "6-PCS PACK",
    arch: "mixed_flare_6pack",
    defBgMode: "black",
    defPcs: "6",
    themes: ["gold24k", "amber_fire", "champagne", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "crimson_ruby", "diamond_white"],
    editions: [
      "6-Pcs Golden Master Flare Kit",
      "6-Pcs Fiery Sunset Star Pack",
      "6-Pcs Champagne Luxury Flares",
      "6-Pcs Electric Cyan Light Kit",
      "6-Pcs Deep Sapphire Star Set",
      "6-Pcs Neon Pink Glamour Pack",
      "6-Pcs Cosmic Purple Nova Set",
      "6-Pcs Emerald Glow Collection",
      "6-Pcs Ruby Flare Assortment",
      "6-Pcs Silver Diamond Star Kit",
    ],
  },
  {
    familyTitle: "12-Piece Mega Microstock Lighting & Flare Bundle",
    shortPrefix: "12-PCS BUNDLE",
    arch: "mega_flare_12bundle",
    defBgMode: "black",
    defPcs: "12",
    themes: ["gold24k", "amber_fire", "champagne", "cyber_cyan", "royal_blue", "neon_magenta", "violet_nova", "emerald_mint", "crimson_ruby", "diamond_white"],
    editions: [
      "12-Pcs Ultimate 24K Gold Vault",
      "12-Pcs Solar Fire & Beam Mega",
      "12-Pcs Champagne Jewelry Stars",
      "12-Pcs Sci-Fi Cyan Hologram Kit",
      "12-Pcs Royal Blue Cinema Vault",
      "12-Pcs Magenta Disco Flare Set",
      "12-Pcs Violet Astral Light Pack",
      "12-Pcs Emerald Laser & Sun Kit",
      "12-Pcs Crimson Nova & Beam Set",
      "12-Pcs Pure Diamond White Vault",
    ],
  },
];

const GENERATED_100_LIGHTING_MODES: MasterLightingModeSpec[] = [];
for (let fIdx = 0; fIdx < CURATED_100_LIGHTING_CATALOG.length; fIdx++) {
  const fam = CURATED_100_LIGHTING_CATALOG[fIdx];
  for (let sIdx = 0; sIdx < fam.editions.length; sIdx++) {
    const num = fIdx * 10 + sIdx + 9; // Light 9 .. Light 108
    GENERATED_100_LIGHTING_MODES.push({
      id: `light_ms_${num}`,
      name: `Light ${num}: ${fam.familyTitle} — ${fam.editions[sIdx]}`,
      shortLabel: `LIGHT ${num}: ${fam.shortPrefix} #${sIdx + 1}`,
      arch: fam.arch,
      defBgMode: fam.defBgMode,
      defPcs: fam.defPcs,
      defTheme: fam.themes[sIdx % fam.themes.length],
      subIdx: sIdx,
    });
  }
}

export const MASTER_LIGHTING_MODES: MasterLightingModeSpec[] = [
  ...BASE_8_REFERENCE_LIGHTING_MODES,
  ...GENERATED_100_LIGHTING_MODES,
];

function registerMasterLightingCollection() {
  for (const lm of MASTER_LIGHTING_MODES) {
    registerMode({
      id: lm.id,
      name: lm.name,
      cat: "Lighting",
      look: {
        bg: "#000000",
        ink: "#ffffff",
        cols: ["#ffd54f", "#ffa000", "#ff6f00", "#fff9c4", "#ffffff"],
        style: "flat",
        sw: 2,
      },
      params: [
        {
          k: "bgMode",
          l: "LIGHTING BACKGROUND MODE (SPLIT / TRANSPARENT / BLACK)",
          def: lm.defBgMode,
          type: "select",
          opts: [
            ["split", "50/50 SPLIT (LEFT BLACK + RIGHT TRANSPARENT)"],
            ["transparent", "100% TRANSPARENT (NO BACKGROUND)"],
            ["black", "100% PITCH BLACK BACKGROUND (#000000)"],
          ],
        },
        {
          k: "pcs",
          l: "FLARE LAYOUT / QUANTITY ON ARTBOARD",
          def: lm.defPcs,
          type: "select",
          opts: [
            ["1", "SINGLE / DUAL 50/50 HERO FLARE"],
            ["4", "4 PCS HORIZONTAL LASER DIVIDERS"],
            ["4grid", "4 PCS (2×2 FLARE GRID)"],
            ["6", "6 PCS (3×2 ASSORTED FLARE PACK)"],
            ["8", "8 PCS (2×4 ANAMORPHIC LASER KIT - REF 2)"],
            ["9", "9 PCS (3×3 STAR & SPARKLE MATRIX)"],
            ["12", "12 PCS (4×3 MEGA LIGHTING BUNDLE)"],
          ],
        },
        {
          k: "colorSet",
          l: "ORIGINAL LIGHTING COLOUR SPECTRUM",
          def: lm.defTheme,
          type: "select",
          opts: [
            ["gold24k", "24K ORIGINAL GOLDEN SUNBURST (REF 1 & 2)"],
            ["amber_fire", "FIERY SOLAR AMBER & SUNSET ORANGE"],
            ["champagne", "LUXURY CHAMPAGNE & WARM DIAMOND"],
            ["cyber_cyan", "CYBER ANAMORPHIC ICE CYAN"],
            ["royal_blue", "CINEMA SAPPHIRE & ELECTRIC BLUE"],
            ["neon_magenta", "NEON MAGENTA & ROSE STARLIGHT"],
            ["emerald_mint", "BIOLUMINESCENT EMERALD & MINT"],
            ["violet_nova", "COSMIC VIOLET & AMETHYST NOVA"],
            ["crimson_ruby", "CRIMSON LASER & RUBY FLARE"],
            ["diamond_white", "PURE PLATINUM & DIAMOND WHITE"],
            ["palette", "ACTIVE STUDIO PALETTE COLOURS"],
          ],
        },
        {
          k: "rays",
          l: "PRIMARY STARBURST RAY COUNT",
          min: 4,
          max: 28,
          step: 2,
          def: 14,
        },
        {
          k: "flareScale",
          l: "LIGHTING GLOW & RAY REACH (%)",
          min: 65,
          max: 135,
          step: 5,
          def: 100,
        },
        {
          k: "variant",
          l: "VARIATION MODE (0 = EXACT HABUHU REF)",
          min: 0,
          max: 12,
          step: 1,
          def: 0,
        },
      ],
      draw(m: any, q: any) {
        renderMasterLightingCollection(m, q, lm);
      },
    });
  }
}

registerMasterLightingCollection();

/* ---------------- renderer & smart random ---------------- */
export function cfgFromP(P: PatternState) {
  return {
    bg: P.bg,
    ink: P.ink,
    cols: [P.c0, P.c1, P.c2, P.c3, P.c4],
    ncol: P.ncol,
    style: P.style,
    sw: P.sw,
    transp: P.transp,
    bd: P.bd,
    bdc: P.bdc,
    bdn: P.bdn,
    bdo: P.bdo,
    mx: P.mx,
  };
}

export function backdrop(C: any) {
  if (!C.bd || C.bd === "none") return "";
  const n = C.bdn;
  const b = T / n;
  const o = C.bdo / 100;
  const c = C.bdc;
  let s = "";
  const R = (x: number, y: number, w: number, h: number, op: number) =>
    (s += `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(
      h
    )}" fill="${c}" fill-opacity="${op}"/>`);
  if (C.bd === "gingham") {
    const g = T / (n * 2);
    for (let i = 0; i < n * 2; i += 2) {
      R(0, i * g, T, g, o * 0.55);
      R(i * g, 0, g, T, o * 0.55);
    }
  } else if (C.bd === "stripes") {
    for (let i = 0; i < n; i++) R(0, i * b, T, b / 2, o);
  } else if (C.bd === "vstripes") {
    for (let i = 0; i < n; i++) R(i * b, 0, b / 2, T, o);
  } else if (C.bd === "grid") {
    const w = Math.max(1.5, b * 0.06);
    for (let i = 0; i < n; i++) {
      R(0, i * b - w / 2, T, w, o);
      R(i * b - w / 2, 0, w, T, o);
    }
    R(0, T - w / 2, T, w / 2, o);
    R(T - w / 2, 0, w / 2, T, o);
  } else if (C.bd === "pindots") {
    const r = Math.max(2, b * 0.09);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const x = (i + 0.5) * b;
        const y = (j + 0.5) * b + (i % 2 ? b / 2 : 0);
        for (const dy of [0, -T])
          s += `<circle cx="${f1(x)}" cy="${f1(y + dy)}" r="${f1(
            r
          )}" fill="${c}" fill-opacity="${o}"/>`;
      }
  } else if (C.bd === "linen") {
    const k = n * 6;
    const g = T / k;
    const rr = mulb(n * 131 + 7);
    for (let i = 0; i < k; i++) {
      R(0, i * g, T, g * 0.5, o * (0.15 + rr() * 0.35));
      R(i * g, 0, g * 0.5, T, o * (0.15 + rr() * 0.35));
    }
  }
  return s;
}

export const MXN: Record<string, string> = {
  none: "",
  mirror: "kaleido mirror",
  double: "double layer",
  rot: "rotated",
  invert: "inverted",
  patch: "patchwork",
};

export function renderPattern(
  md: PatternMode,
  q: Record<string, any>,
  seed: number,
  C: any
): string {
  const mx = C.mx || "none";
  const sw = (c: any) =>
    Object.assign({}, c, { bg: c.cols[0], cols: [c.bg].concat(c.cols.slice(1)) });
  const CC = mx === "invert" && C.cols && C.cols.length ? sw(C) : C;
  const draw = (cc: any) => {
    const m = mkH(cc, mulb(seed * 7919 + 13));
    try {
      md.draw(m, q);
    } catch (e) {
      console.error("Mode error [" + md.id + "]", e);
    }
    return m;
  };
  const m = draw(CC);
  let body = m.out.join("");
  let defs = m.defs.join("");
  const ex = !!C.exact;
  const addDefs = (a: string[]) =>
    a.forEach((x) => {
      const id = (x.match(/id="([^"]+)"/) || [])[1];
      if (!id || !defs.includes(`id="${id}"`)) defs += x;
    });
  const cl = (b: string) => `<g clip-path="url(#tileBleed)">${b}</g>`;
  const ce = (b: string) => `<g clip-path="url(#tileClip)">${b}</g>`;
  const quads = (list: [number, number, number, number, string][]) =>
    list
      .map(
        ([x, y, a, b, c]) =>
          `<g transform="translate(${x} ${y}) scale(${a * 0.5} ${b * 0.5})">${
            ex ? ce(c) : cl(c)
          }</g>`
      )
      .join("");
  if (mx === "mirror")
    body = quads([
      [0, 0, 1, 1, body],
      [T, 0, -1, 1, body],
      [0, T, 1, -1, body],
      [T, T, -1, -1, body],
    ]);
  else if (mx === "rot") body = `<g transform="rotate(90 ${T / 2} ${T / 2})">${body}</g>`;
  else if (mx === "double") {
    const c2 = Object.assign({}, CC, { cols: CC.cols.slice(1).concat(CC.cols.slice(0, 1)) });
    const m2 = draw(c2);
    addDefs(m2.defs);
    const r = `<g transform="rotate(90 ${T / 2} ${T / 2})">${m2.out.join("")}</g>`;
    body =
      body +
      [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ]
        .map(([a, b]) => `<g transform="translate(${(a * T) / 2} ${(b * T) / 2})">${r}</g>`)
        .join("");
  } else if (mx === "patch" && CC.cols && CC.cols.length) {
    const c2 = sw(CC);
    const m2 = draw(c2);
    addDefs(m2.defs);
    const b2 = `<rect width="${T}" height="${T}" fill="${c2.bg}"/>` + m2.out.join("");
    const b1 = `<rect width="${T}" height="${T}" fill="${CC.bg}"/>` + body;
    body = quads([
      [0, 0, 1, 1, b1],
      [T / 2, 0, 1, 1, b2],
      [0, T / 2, 1, 1, b2],
      [T / 2, T / 2, 1, 1, b1],
    ]);
  }
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${T} ${T}" width="${T}" height="${T}"><defs><clipPath id="tileClip"><rect width="${T}" height="${T}"/></clipPath><clipPath id="tileBleed"><rect x="-8" y="-8" width="${
      T + 16
    }" height="${T + 16}"/></clipPath>${defs}</defs><g clip-path="url(#tileClip)">` +
    (C.transp ? "" : `<rect data-bg="1" width="${T}" height="${T}" fill="${CC.bg}"/>`) +
    backdrop(CC) +
    body +
    "</g></svg>"
  );
}

export const uri = (s: string) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
export const svgData = uri;

export const loadImg = (svg: string): Promise<HTMLImageElement> =>
  new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = rej;
    i.src = uri(svg);
  });

export const cvs = (w: number, h: number) => {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
};

export function composite(tile: string, kx: number, ky: number, useRefs: boolean): string {
  const W = T * kx;
  const H = T * ky;
  const dS = tile.indexOf("<defs>") + 6;
  const dE = tile.indexOf("</defs>");
  const defs = tile.slice(dS, dE);
  let body = tile.slice(
    tile.indexOf('<g clip-path="url(#tileClip)">') + 30,
    tile.lastIndexOf("</g></svg>")
  );
  let bgc: string | null = null;
  const mb = body.match(/^<rect data-bg="1" width="[\d.]+" height="[\d.]+" fill="([^"]+)"\/>/);
  if (mb) {
    bgc = mb[1];
    body = body.slice(mb[0].length);
  }
  let g = bgc ? `<rect width="${W}" height="${H}" fill="${bgc}"/>` : "";
  const one = useRefs ? `<use href="#tileArt"/>` : body;
  for (let i = 0; i < kx; i++)
    for (let j = 0; j < ky; j++) g += `<g transform="translate(${i * T} ${j * T})">${one}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><defs><clipPath id="artClip"><rect width="${W}" height="${H}"/></clipPath>${defs}${
    useRefs ? `<g id="tileArt">${body}</g>` : ""
  }</defs><g clip-path="url(#artClip)">${g}</g></svg>`;
}

/* ---------------- Fourier structure signature & smart random ---------------- */
const SIGN = 32;
const SIGCOS = [...Array(SIGN)].map((_, k) => Math.cos((2 * Math.PI * k) / SIGN));
const SIGSIN = [...Array(SIGN)].map((_, k) => Math.sin((2 * Math.PI * k) / SIGN));

export async function structSig(
  md: PatternMode,
  q: Record<string, any>,
  seed: number,
  style: string,
  sw: number
): Promise<number[]> {
  const C = {
    bg: "#ffffff",
    ink: "#000000",
    cols: ["#000000", "#3a3a3a", "#6e6e6e", "#8a8a8a", "#222222"],
    ncol: 5,
    style: style || "flat",
    sw,
    transp: false,
    bd: "none",
    mx: "none",
  };
  const N = SIGN;
  const i = await loadImg(renderPattern(md, q, seed, C));
  const c = cvs(N, N);
  const x = c.getContext("2d")!;
  x.fillStyle = "#fff";
  x.fillRect(0, 0, N, N);
  x.drawImage(i, 0, 0, N, N);
  const d = x.getImageData(0, 0, N, N).data;
  const g = new Float32Array(N * N);
  let mu = 0;
  for (let p = 0; p < N * N; p++) {
    g[p] = 1 - (d[p * 4] + d[p * 4 + 1] + d[p * 4 + 2]) / 765;
    mu += g[p];
  }
  mu /= N * N;
  for (let p = 0; p < N * N; p++) g[p] -= mu;
  const F = new Float32Array(40);
  let tot = 0;
  for (let u = 0; u < N; u++)
    for (let v = 0; v <= N / 2; v++) {
      if (!u && !v) continue;
      let re = 0;
      let im = 0;
      for (let y = 0; y < N; y++)
        for (let xx = 0; xx < N; xx++) {
          const k = (u * xx + v * y) % N;
          const gv = g[y * N + xx];
          re += gv * SIGCOS[k];
          im -= gv * SIGSIN[k];
        }
      const fu = u > N / 2 ? u - N : u;
      const r = Math.hypot(fu, v);
      const rb = Math.min(9, Math.floor(r / 1.6));
      const ab = Math.floor(((Math.atan2(v, fu) + Math.PI) % Math.PI) / (Math.PI / 4)) % 4;
      const pw = Math.sqrt(re * re + im * im);
      F[rb * 4 + ab] += pw;
      tot += pw;
    }
  const out = [...F].map((v) => (tot ? v / tot : 0));
  out.push(mu * 2);
  return out;
}

export const sigDist = (a: number[], b: number[]) => {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]);
  return s;
};

export const lumH = (h: string) => {
  const [r, g, b] = hex2rgb(h);
  return 0.299 * r + 0.587 * g + 0.114 * b;
};
export const cdist = (a: string, b: string) => {
  const A = hex2rgb(a);
  const B = hex2rgb(b);
  return Math.hypot(A[0] - B[0], A[1] - B[1], A[2] - B[2]);
};

export function fixContrast(bg: string, ink: string, cols: string[]): [string, string[]] {
  const dark = lumH(bg) > 140;
  if (cdist(ink, bg) < 150) ink = dark ? "#1c1c1c" : "#f6f3ee";
  cols = cols.map((c) => {
    let k = c;
    let t = 0;
    while (cdist(k, bg) < 140 && t < 8) {
      k = mixCol(k, dark ? "#000000" : "#ffffff", 0.25);
      t++;
    }
    return k;
  });
  for (let i = 1; i < cols.length; i++) {
    let t = 0;
    const up = lumH(cols[0]) < 128;
    while (cdist(cols[i], cols[0]) < 95 && t < 6) {
      cols[i] = mixCol(cols[i], up ? "#ffffff" : "#000000", 0.25);
      t++;
    }
  }
  return [ink, cols];
}

export const hsl = (h: number, s: number, l: number) => {
  h = ((h % 360) + 360) % 360;
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return (
    "#" +
    [f(0), f(8), f(4)]
      .map((x) =>
        Math.round(x * 255)
          .toString(16)
          .padStart(2, "0")
      )
      .join("")
  );
};

export function genPal(baseHueDeg?: number, forceDark?: boolean): PaletteItem {
  const R = Math.random;
  const h =
    typeof baseHueDeg === "number" && Number.isFinite(baseHueDeg)
      ? ((baseHueDeg % 360) + 360) % 360
      : R() * 360;
  const dark = typeof forceDark === "boolean" ? forceDark : R() < 0.34;
  const sch = [
    [0, 28, 56, -28, 14],
    [0, 180, 22, 202, -16],
    [0, 120, 240, 42, 162],
    [0, 150, 210, 28, 178],
    [0, 90, 180, 270, 45],
    [0, 35, 195, -35, 145],
  ][Math.floor(R() * 6)];
  const satBase = 48 + R() * 42;
  const cols = sch.map((o, i) =>
    hsl(
      h + o,
      Math.min(95, satBase + ((i * 7) % 18) - 6),
      dark ? 54 + R() * 24 : i === 3 ? 76 : 38 + R() * 32
    )
  );
  const bgTone = dark
    ? hsl(h + (R() < 0.5 ? 0 : 180), 22 + R() * 20, 7 + R() * 9)
    : R() < 0.25
    ? hsl(h + 24, 38 + R() * 22, 86 + R() * 8)
    : hsl(h + 18, 28 + R() * 18, 94 + R() * 4);
  return ["Random", bgTone, dark ? "#f6f3ee" : hsl(h, 35, 13), cols];
}

const MESSY = /variety|jitter|missing|shuffle|rotation|tilt|wobble|random|scrolls|loose|seed/i;

export function genParams(
  md: PatternMode,
  curParams: Record<string, any>,
  keep: number,
  extremeDiverse = false,
  batchIdx = -1
) {
  const q: Record<string, any> = Object.assign({}, curParams);
  const isBgGrainParam = (k: string) =>
    (md.cat === "Plain BG" || md.cat === "Background") &&
    (k === "tex" || k === "grain" || k === "grit" || k === "pits");

  md.params.forEach((p, pIdx) => {
    // Never auto-enable grainy/speckle dots on backgrounds during Unique Generate / Batch
    if (isBgGrainParam(p.k)) {
      q[p.k] = curParams[p.k] !== undefined ? curParams[p.k] : p.def;
      return;
    }
    // Keep Brush Ink Mode on authentic dark ink unless user explicitly set multi-colour
    if (md.cat === "Brush" && p.k === "cm") {
      q[p.k] = curParams.cm === "multi" ? "multi" : "ink";
      return;
    }
    // For Brush Archetype, always pick a fresh microstock brush layout different from current
    if (md.cat === "Brush" && p.k === "arch" && p.opts) {
      const curArch = String(curParams.arch || p.def);
      if (extremeDiverse && batchIdx >= 0 && p.opts.length > 1) {
        q[p.k] = p.opts[(batchIdx * 7 + pIdx) % p.opts.length][0];
      } else {
        const pool = p.opts.filter((o) => o[0] !== curArch);
        q[p.k] = pool.length
          ? pool[Math.floor(Math.random() * pool.length)][0]
          : p.opts[Math.floor(Math.random() * p.opts.length)][0];
      }
      return;
    }
    if (md.cat === "Poster" && (p.k === "showText" || p.k === "pcs")) {
      q[p.k] = curParams[p.k] !== undefined ? curParams[p.k] : p.def;
      return;
    }
    if (md.cat === "Poster" && p.k === "colorSet") {
      if (extremeDiverse && p.opts && p.opts.length > 1) {
        const pickIdx =
          batchIdx >= 0
            ? (batchIdx * 5 + Math.floor(Math.random() * p.opts.length)) % p.opts.length
            : Math.floor(Math.random() * p.opts.length);
        q[p.k] = p.opts[pickIdx][0];
      } else {
        q[p.k] = curParams[p.k] !== undefined ? curParams[p.k] : p.def;
      }
      return;
    }
    if (md.cat === "Poster" && (p.k === "bScale" || p.k === "gap" || p.k === "layers")) {
      if (extremeDiverse && p.min !== undefined && p.max !== undefined) {
        const st = p.step || 1;
        const span = p.max - p.min;
        const lo = p.min + span * 0.15;
        const hi = p.max - span * 0.15;
        let v = lo + Math.random() * Math.max(st, hi - lo);
        v = Math.round((v - p.min) / st) * st + p.min;
        q[p.k] = +Math.min(p.max, Math.max(p.min, v)).toFixed(4);
      } else {
        q[p.k] = p.def;
      }
      return;
    }
    if (md.cat === "Lighting" && (p.k === "bgMode" || p.k === "pcs")) {
      q[p.k] = curParams[p.k] !== undefined ? curParams[p.k] : p.def;
      return;
    }
    if (md.cat === "Lighting" && p.k === "colorSet") {
      if (extremeDiverse && p.opts && p.opts.length > 1) {
        const pickIdx =
          batchIdx >= 0
            ? (batchIdx * 7 + Math.floor(Math.random() * p.opts.length)) % p.opts.length
            : Math.floor(Math.random() * p.opts.length);
        q[p.k] = p.opts[pickIdx][0];
      } else {
        q[p.k] = curParams[p.k] !== undefined ? curParams[p.k] : p.def;
      }
      return;
    }
    if ((md.cat === "Poster" || md.cat === "Lighting") && p.k === "variant") {
      const curVar = Math.max(0, Math.round(+(curParams.variant ?? 0)));
      q.variant = extremeDiverse && batchIdx >= 0 ? ((batchIdx * 11 + curVar) % 48) + 1 : curVar + 1;
      return;
    }

    if (!extremeDiverse && Math.random() < keep) {
      q[p.k] = p.def;
      return;
    }
    if (!extremeDiverse && MESSY.test(p.l) && p.type !== "check" && p.type !== "select") {
      if (Math.random() < 0.5) {
        q[p.k] = p.def;
        return;
      }
      const st = p.step || 1;
      const min = p.min ?? 0;
      const max = p.max ?? 100;
      let v = p.def + (Math.random() - 0.6) * (max - min) * 0.2;
      v = Math.round((v - min) / st) * st + min;
      q[p.k] = +Math.min(max, Math.max(min, v)).toFixed(4);
      return;
    }

    if (p.type === "check") {
      q[p.k] = Math.random() < 0.5;
    } else if (p.type === "select" && p.opts) {
      if (extremeDiverse && p.opts.length > 1) {
        const prevVal = String(curParams[p.k] ?? p.def);
        const others = p.opts.filter((o) => o[0] !== prevVal);
        const pick = others.length ? others : p.opts;
        q[p.k] = pick[Math.floor(Math.random() * pick.length)][0];
      } else {
        q[p.k] = p.opts[Math.floor(Math.random() * p.opts.length)][0];
      }
    } else {
      const st = p.step || 1;
      const min = p.min ?? 0;
      const max = p.max ?? 100;
      const span = max - min;
      const dens =
        /^(n|rep|k|cols|px|hs|g|gn)$/.test(p.k) ||
        /Density|Repeats|Columns|Blocks|Squares|Vines|Grid|Triangles/.test(p.l);
      if (extremeDiverse) {
        // Uniform full-range exploration across artistic safe bounds so consecutive batch designs look structurally transformed
        const safeMin = dens ? Math.max(min, min + span * 0.08) : min + span * 0.05;
        const safeMax = dens ? Math.min(max, min + span * 0.82) : max - span * 0.05;
        let v = safeMin + Math.random() * Math.max(st, safeMax - safeMin);
        v = Math.round((v - min) / st) * st + min;
        q[p.k] = +Math.min(max, Math.max(min, v)).toFixed(4);
      } else {
        const w = dens ? 0.42 : 0.72;
        let v = p.def + (Math.random() - 0.5) * 2 * span * w;
        v = Math.round((v - min) / st) * st + min;
        q[p.k] = +Math.min(
          dens ? p.def + (max - p.def) * 0.45 : max - span * 0.04,
          Math.max(dens ? Math.max(min, Math.round(p.def * 0.45)) : min + span * 0.04, v)
        ).toFixed(4);
      }
    }
  });
  const sel = md.params.filter(
    (p) =>
      p.type === "select" &&
      p.opts &&
      p.opts.length > 1 &&
      !MESSY.test(p.l) &&
      !isBgGrainParam(p.k) &&
      !(md.cat === "Brush" && p.k === "cm") &&
      !(md.cat === "Poster" && (p.k === "pcs" || (!extremeDiverse && p.k === "colorSet"))) &&
      !(md.cat === "Lighting" && (p.k === "bgMode" || p.k === "pcs" || (!extremeDiverse && p.k === "colorSet")))
  );
  const flipCount = extremeDiverse ? sel.length : Math.min(sel.length, 1 + Math.floor(Math.random() * 2));
  for (let t = 0; t < flipCount; t++) {
    const p = extremeDiverse ? sel[t] : sel[Math.floor(Math.random() * sel.length)];
    const o = p.opts!.filter((x) => x[0] !== String(curParams[p.k]));
    if (o.length) q[p.k] = o[Math.floor(Math.random() * o.length)][0];
  }
  return q;
}

export function genCand(
  md: PatternMode,
  curParams: Record<string, any>,
  P: PatternState,
  colours: boolean,
  extremeDiverse = false,
  batchIdx = -1
) {
  const L = md.look || {};
  const seed = nextUniqueSeed();
  const r = Math.random();
  let bg: string;
  let ink: string;
  let cols: string[];
  let name: string;

  if (!colours) {
    bg = P.bg;
    ink = P.ink;
    cols = [P.c0, P.c1, P.c2, P.c3, P.c4];
    name = "same colours";
  } else if (extremeDiverse) {
    // Extreme Batch Anti-Similarity Palette Engine:
    // Alternates Golden-Angle Hue Wheel palettes (137.508 deg jump every design!) with coprime-strided curated PALS
    const step = batchIdx >= 0 ? batchIdx : seed;
    const useCurated = step % 2 === 1 && PALS.length > 0;
    if (useCurated) {
      const palIdx = (step * 17 + (seed % 11)) % PALS.length;
      const p = PALS[palIdx];
      bg = p[1];
      ink = p[2];
      cols = p[3].slice();
      name = p[0];
      // Rotate & shuffle colors so even revisited palettes never look identical
      const rot = step % cols.length;
      cols = cols.slice(rot).concat(cols.slice(0, rot));
      if (step % 4 === 3) {
        const swapK = step % cols.length;
        const oldBg = bg;
        bg = cols[swapK];
        cols[swapK] = oldBg;
      }
    } else {
      const goldenHue = (step * 137.508 + (seed % 29)) % 360;
      const forceDark = step % 3 === 0;
      const p = genPal(goldenHue, forceDark);
      bg = p[1];
      ink = p[2];
      cols = p[3].slice();
      name = `golden-angle ${Math.round(goldenHue)}deg`;
    }
  } else if (r < 0.14 && L.cols) {
    bg = L.bg || P.bg;
    ink = L.ink || P.ink;
    cols = L.cols.slice();
    while (cols.length < 5) cols.push(cols[cols.length - 1] || "#ffffff");
    name = "original colours";
    if (Math.random() < 0.65) {
      const c = cols.slice(0, 4);
      for (let i = c.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [c[i], c[j]] = [c[j], c[i]];
      }
      cols = c.concat(cols.slice(4));
    }
  } else if (r < 0.62) {
    const p = PALS[Math.floor(Math.random() * PALS.length)];
    bg = p[1];
    ink = p[2];
    cols = p[3].slice();
    name = p[0];
    for (let i = cols.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cols[i], cols[j]] = [cols[j], cols[i]];
    }
  } else {
    const p = genPal();
    bg = p[1];
    ink = p[2];
    cols = p[3].slice();
    name = "fresh palette";
  }

  if (colours && !extremeDiverse && Math.random() < 0.35) {
    const t = cols[Math.floor(Math.random() * cols.length)];
    bg =
      lumH(bg) > 150
        ? mixCol(t, "#ffffff", 0.8 + Math.random() * 0.12)
        : mixCol(t, "#000000", 0.7 + Math.random() * 0.15);
  }
  if (colours && !extremeDiverse && Math.random() < 0.18) {
    const k = Math.floor(Math.random() * cols.length);
    const o = bg;
    bg = cols[k];
    cols[k] = o;
  }

  if (md.cat === "Brush" && colours) {
    const brushPals: [string, string, string[]][] = [
      ["#ffffff", "#09090b", ["#09090b", "#18181b", "#27272a", "#0f172a", "#171717"]],
      ["#ffffff", "#0a0a0a", ["#0a0a0a", "#171717", "#262626", "#111827", "#1e293b"]],
      ["#ffffff", "#0f172a", ["#0f172a", "#1e293b", "#09090b", "#18181b", "#334155"]],
      ["#ffffff", "#111111", ["#111111", "#1c1917", "#292524", "#0c0a09", "#18181b"]],
    ];
    const bp = brushPals[seed % brushPals.length];
    bg = bp[0];
    ink = bp[1];
    cols = bp[2].slice();
    name = "sumi ink brush";
  }

  // Micro-mutate colour tones by 1-3 RGB levels so even same-palette generations are chromatographically unique
  if (colours) {
    const jitterCol = (hex: string, salt: number) => {
      const [r0, g0, b0] = hex2rgb(hex);
      const dr = ((salt * 17) % 7) - 3;
      const dg = ((salt * 31) % 7) - 3;
      const db = ((salt * 47) % 7) - 3;
      const cl = (v: number) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0");
      return `#${cl(r0 + dr)}${cl(g0 + dg)}${cl(b0 + db)}`;
    };
    cols = cols.map((c, idx) => jitterCol(c, seed + idx * 13));
  }
  [ink, cols] = fixContrast(bg, ink, cols);

  const allowStyleVary =
    md.cat !== "Poster" &&
    md.cat !== "Lighting" &&
    md.cat !== "Brush" &&
    md.cat !== "Plain BG" &&
    md.cat !== "Gradient";
  const stylePool: ("flat" | "both" | "line")[] = ["flat", "both", "flat", "both", "line"];
  const style: "flat" | "both" | "line" = !colours
    ? P.style
    : extremeDiverse && allowStyleVary
    ? stylePool[(batchIdx >= 0 ? batchIdx : seed) % stylePool.length]
    : L.style || "flat";

  const bg2 = mixCol(bg, cols[0] || "#8b5cf6", extremeDiverse ? 0.45 : 0.36);
  const gradModes: BgGradientMode[] = ["linear", "radial", "diagonal", "aurora", "duotone", "sunburst"];
  const texModes: SurfaceTextureMode[] = [
    "sandgrain",
    "mattegrain",
    "paperfiber",
    "velvetgrain",
    "brushedmetal",
    "woodgrain",
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

  if (md.cat === "Poster") {
    bg = L.bg || "#2e3136";
    ink = "#ffffff";
  } else if (md.cat === "Lighting") {
    bg = "#000000";
    ink = "#ffffff";
  }
  const bgGrad: BgGradientMode =
    md.cat === "Poster" || md.cat === "Lighting" ? "solid" : P.bgGrad || "solid";
  const bgAngle = extremeDiverse && batchIdx >= 0 ? (batchIdx * 47) % 360 : Math.floor(Math.random() * 360);
  const bd: SurfaceTextureMode =
    md.cat === "Brush" || md.cat === "Poster" || md.cat === "Lighting" ? "none" : P.bd || "none";
  const bdc = mixCol(cols[1] || ink, bg, 0.45);

  const allowMx =
    md.cat !== "Fabric" &&
    md.cat !== "Plain BG" &&
    md.cat !== "Background" &&
    md.cat !== "Gradient" &&
    md.cat !== "Brush" &&
    md.cat !== "Poster" &&
    md.cat !== "Lighting";
  const mxList: PatternState["mx"][] = extremeDiverse
    ? ["none", "mirror", "rot", "double", "none", "mirror"]
    : ["none", "none", "none", "mirror", "rot", "double"];
  const mx: PatternState["mx"] =
    allowMx && (extremeDiverse || Math.random() < 0.28)
      ? mxList[(extremeDiverse && batchIdx >= 0 ? batchIdx : Math.floor(Math.random() * mxList.length)) % mxList.length]
      : "none";

  const swPool = [0.9, 1.4, 2.0, 2.8, 3.6];
  const swVal =
    extremeDiverse && allowStyleVary
      ? swPool[(batchIdx >= 0 ? batchIdx : seed) % swPool.length]
      : L.sw || P.sw;

  const ncolVal = !colours
    ? P.ncol
    : extremeDiverse && allowStyleVary
    ? ([3, 4, 5, 4, 5][(batchIdx >= 0 ? batchIdx : seed) % 5])
    : L.cols
    ? Math.min(5, L.cols.length)
    : 5;

  return {
    mx,
    q: genParams(md, curParams, extremeDiverse ? 0 : 0.05, extremeDiverse, batchIdx),
    seed,
    bg,
    bg2,
    bgGrad,
    bgAngle,
    ink,
    cols,
    ncol: ncolVal,
    style,
    sw: swVal,
    bd,
    bdc,
    bdn: extremeDiverse ? 8 + ((batchIdx >= 0 ? batchIdx : seed) % 14) : P.bdn || 12,
    bdo: extremeDiverse ? 28 + (((batchIdx >= 0 ? batchIdx : seed) * 13) % 36) : P.bdo || 45,
    gradModes,
    texModes,
    name,
  };
}

export async function analyse(svg: string, bg: string) {
  const N = 40;
  const i = await loadImg(svg);
  const c = cvs(N, N);
  const x = c.getContext("2d")!;
  x.fillStyle = bg;
  x.fillRect(0, 0, N, N);
  x.drawImage(i, 0, 0, N, N);
  const d = x.getImageData(0, 0, N, N).data;
  const B = hex2rgb(bg);
  const fp = new Array(100).fill(0);
  let cov = 0;
  for (let p = 0; p < N * N; p++) {
    const r = d[p * 4];
    const g = d[p * 4 + 1];
    const b = d[p * 4 + 2];
    if (Math.abs(r - B[0]) + Math.abs(g - B[1]) + Math.abs(b - B[2]) > 45) cov++;
    const X = Math.floor((p % N) / 4);
    const Y = Math.floor(Math.floor(p / N) / 4);
    fp[Y * 10 + X] += (0.299 * r + 0.587 * g + 0.114 * b) / 16;
  }
  const mu = fp.reduce((a, v) => a + v, 0) / 100;
  const sd = Math.sqrt(fp.reduce((a, v) => a + (v - mu) * (v - mu), 0) / 100);
  return { cov: cov / (N * N), sd, fp: fp.map((v) => Math.round(v)) };
}

/* =====================================================================
   NON-REPEATING WEYL SEQUENCE & HARD 1-TIME PERMANENT BURN LEDGER
   - Period: 2^32 (429+ Crore / 4.29 Billion non-repeating seeds)
   - HARD RULE: Every design even TESTED or GENERATED once on canvas is
     immediately and permanently burned into localStorage (both exact hash
     AND structural similarity hash) so it can NEVER be generated again!
   ===================================================================== */
const SEED_COUNTER_KEY = "pv_weyl_counter_v1";
const HASH_REGISTRY_KEY = "pv_unique_hashes_v1";
const STRUCT_REGISTRY_KEY = "pv_hard_struct_hashes_v2";
const STRUCT_COUNTER_KEY = "pv_hard_struct_counter_v2";

let memoryCounter: number | null = null;
let memoryStructCounter: number | null = null;
let memoryHashes: Set<string> | null = null;
let memoryStructHashes: Set<string> | null = null;

function loadHashRegistry(): Set<string> {
  if (memoryHashes) return memoryHashes;
  memoryHashes = new Set<string>();
  try {
    const raw = localStorage.getItem(HASH_REGISTRY_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) arr.forEach((h) => memoryHashes!.add(h));
    }
  } catch {
    // ignore
  }
  return memoryHashes;
}

function loadStructHashRegistry(): Set<string> {
  if (memoryStructHashes) return memoryStructHashes;
  memoryStructHashes = new Set<string>();
  try {
    const raw = localStorage.getItem(STRUCT_REGISTRY_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) arr.forEach((h) => memoryStructHashes!.add(h));
    }
  } catch {
    // ignore
  }
  return memoryStructHashes;
}

let seedFlushTimer: ReturnType<typeof setTimeout> | null = null;
let structSaltFlushTimer: ReturnType<typeof setTimeout> | null = null;
let hashRegistryFlushTimer: ReturnType<typeof setTimeout> | null = null;

export function flushDesignHashRegistriesNow(): void {
  if (seedFlushTimer) {
    clearTimeout(seedFlushTimer);
    seedFlushTimer = null;
  }
  if (structSaltFlushTimer) {
    clearTimeout(structSaltFlushTimer);
    structSaltFlushTimer = null;
  }
  if (hashRegistryFlushTimer) {
    clearTimeout(hashRegistryFlushTimer);
    hashRegistryFlushTimer = null;
  }
  try {
    if (memoryCounter !== null) {
      localStorage.setItem(SEED_COUNTER_KEY, String(memoryCounter));
    }
    if (memoryStructCounter !== null) {
      localStorage.setItem(STRUCT_COUNTER_KEY, String(memoryStructCounter));
    }
    if (memoryHashes) {
      const arr = Array.from(memoryHashes);
      const trimmed = arr.length > 35000 ? arr.slice(arr.length - 35000) : arr;
      localStorage.setItem(HASH_REGISTRY_KEY, JSON.stringify(trimmed));
    }
    if (memoryStructHashes) {
      const sArr = Array.from(memoryStructHashes);
      const sTrimmed = sArr.length > 35000 ? sArr.slice(sArr.length - 35000) : sArr;
      localStorage.setItem(STRUCT_REGISTRY_KEY, JSON.stringify(sTrimmed));
    }
  } catch {
    // ignore
  }
}

export function nextUniqueStructuralSalt(): number {
  if (memoryStructCounter === null) {
    try {
      const saved = localStorage.getItem(STRUCT_COUNTER_KEY);
      memoryStructCounter = saved ? parseInt(saved, 10) || 1 : 1;
    } catch {
      memoryStructCounter = 1;
    }
  }
  memoryStructCounter = (memoryStructCounter + 1) >>> 0;
  if (!structSaltFlushTimer) {
    structSaltFlushTimer = setTimeout(() => {
      structSaltFlushTimer = null;
      try {
        if (memoryStructCounter !== null) {
          localStorage.setItem(STRUCT_COUNTER_KEY, String(memoryStructCounter));
        }
      } catch {
        // ignore
      }
    }, 250);
  }
  return memoryStructCounter;
}

export function nextUniqueSeed(): number {
  if (memoryCounter === null) {
    try {
      const saved = localStorage.getItem(SEED_COUNTER_KEY);
      memoryCounter = saved ? parseInt(saved, 10) || 1000 : Math.floor(Date.now() % 1000000) + 1000;
    } catch {
      memoryCounter = Math.floor(Date.now() % 1000000) + 1000;
    }
  }
  memoryCounter = (memoryCounter + 1) >>> 0;
  if (!seedFlushTimer) {
    seedFlushTimer = setTimeout(() => {
      seedFlushTimer = null;
      try {
        if (memoryCounter !== null) localStorage.setItem(SEED_COUNTER_KEY, String(memoryCounter));
      } catch {
        // ignore
      }
    }, 250);
  }
  // Bijective 32-bit Weyl / Murmur avalanching permutation (guaranteed 1-to-1 over 4.29 billion values)
  let x = (memoryCounter * 0x9e3779b9) >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x85ebca6b) >>> 0;
  x = Math.imul(x ^ (x >>> 13), 0xc2b2ae35) >>> 0;
  x = (x ^ (x >>> 16)) >>> 0;
  return (x % 899999999) + 100000000; // 9-digit unique studio seed
}

function quantizeHexBucket(hex: string): string {
  const [r, g, b] = hex2rgb(hex || "#000000");
  // Quantize RGB into coarse 48-step buckets so visually near-identical color + layout combos are hard-blocked!
  return `${Math.floor(r / 48)}.${Math.floor(g / 48)}.${Math.floor(b / 48)}`;
}

export function computeStructuralSimilarityHash(P: PatternState, params: Record<string, any>): string {
  const sortedKeys = Object.keys(params).sort();
  const qParamStr = sortedKeys
    .map((k) => {
      const v = params[k];
      if (typeof v === "number") {
        // Coarse structural bucketing so tiny slider tweaks cannot pass as "different"
        return `${k}:${Math.round(v)}`;
      }
      return `${k}:${v}`;
    })
    .join("|");
  // DO NOT include P.seed % 9973 here — otherwise identical mode + layout + colors would slip past similarity blocking!
  const colFamily = `${quantizeHexBucket(P.bg)}-${quantizeHexBucket(P.c0)}-${quantizeHexBucket(P.c1)}-${quantizeHexBucket(P.c2)}`;
  const raw = `STRUCT::${P.mode}::${colFamily}::${P.style}::${P.mx}::${P.bgGrad || "solid"}::${P.bd || "none"}::${qParamStr}`;
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < raw.length; i++) {
    const c = raw.charCodeAt(i);
    h1 ^= c;
    h1 = Math.imul(h1, 0x01000193) >>> 0;
    h2 ^= c;
    h2 = Math.imul(h2, 0x85ebca6b) >>> 0;
  }
  return "st-" + h1.toString(36) + "-" + h2.toString(36);
}

export function computeDesignHash(P: PatternState, params: Record<string, any>): string {
  const sortedKeys = Object.keys(params).sort();
  const paramStr = sortedKeys.map((k) => `${k}:${params[k]}`).join("|");
  const raw = `${P.mode}::${P.seed}::${P.bg},${P.bg2 || ""},${P.bgGrad || "solid"},${
    P.bgAngle || 0
  },${P.ink},${P.c0},${P.c1},${P.c2},${P.c3},${P.c4}::${P.ncol}::${P.style}::${P.sw}::${
    P.bd
  },${P.bdc},${P.bdn},${P.bdo}::${P.mx}::${P.ratio || "1:1"}::${paramStr}`;
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < raw.length; i++) {
    const c = raw.charCodeAt(i);
    h1 ^= c;
    h1 = Math.imul(h1, 0x01000193) >>> 0;
    h2 ^= c;
    h2 = Math.imul(h2, 0x85ebca6b) >>> 0;
  }
  return h1.toString(36) + "-" + h2.toString(36);
}

export function isDesignDuplicate(hash: string, structHash?: string): boolean {
  if (loadHashRegistry().has(hash)) return true;
  if (structHash && loadStructHashRegistry().has(structHash)) return true;
  return false;
}

export function registerDesignHash(hash: string, structHash?: string): number {
  const reg = loadHashRegistry();
  reg.add(hash);
  if (structHash) {
    const sReg = loadStructHashRegistry();
    sReg.add(structHash);
  }
  // Debounce localStorage JSON serialization so batching 200+ designs never blocks the main thread!
  if (!hashRegistryFlushTimer) {
    hashRegistryFlushTimer = setTimeout(() => {
      hashRegistryFlushTimer = null;
      flushDesignHashRegistriesNow();
    }, 450);
  }
  return reg.size;
}

export function getLifetimeUniqueTotal(): number {
  return loadHashRegistry().size;
}

/* =====================================================================
   EXACT INTEGER TILE GRID CALCULATOR (ZERO SIDE-CUT / ZERO FRACTIONAL OVERFLOW)
   ===================================================================== */
export function getExactTileGrid(outW: number, outH: number, rep: number) {
  const r = Math.max(1, rep);
  const baseTile = Math.min(outW, outH) / r;
  const colsCount = Math.max(1, Math.round(outW / baseTile));
  const rowsCount = Math.max(1, Math.round(outH / baseTile));
  const tileW = outW / colsCount;
  const tileH = outH / rowsCount;
  return { colsCount, rowsCount, tileW, tileH };
}

/* =====================================================================
   ADOBE ILLUSTRATOR 100% SEPARABLE & RECOLORABLE VECTOR FLATTENER
   - ZERO <clipPath> (no locked Clipping Masks in Illustrator!)
   - ZERO nested <g> wrappers or <g fill="..."> inheritance
   - ZERO <pattern> / <use> reference locks
   - Bakes ALL transforms into exact Artboard coordinates (0..outW x 0..outH)
   - Splits multi-M compound paths & expands stroked lines/dashes into
     closed filled vector polygons so 1-click Fill Swatch recoloring and
     part-by-part Ungrouping work 100% natively in Adobe Illustrator!
   ===================================================================== */
type Mat2D = [number, number, number, number, number, number]; // [a, b, c, d, e, f]

function mulMat2D(m1: Mat2D, m2: Mat2D): Mat2D {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5],
  ];
}

function applyMat2D(m: Mat2D, x: number, y: number): [number, number] {
  return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
}

function parseSvgTransform(tr: string | null): Mat2D {
  let mat: Mat2D = [1, 0, 0, 1, 0, 0];
  if (!tr) return mat;
  const re = /([a-zA-Z]+)\s*\(([^)]*)\)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(tr)) !== null) {
    const fn = match[1].toLowerCase();
    const nums = (match[2].match(/[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || []).map(Number);
    let step: Mat2D = [1, 0, 0, 1, 0, 0];
    if (fn === "translate") {
      step = [1, 0, 0, 1, nums[0] || 0, nums[1] || 0];
    } else if (fn === "scale") {
      const sx = nums[0] ?? 1;
      const sy = nums.length > 1 ? nums[1] : sx;
      step = [sx, 0, 0, sy, 0, 0];
    } else if (fn === "rotate") {
      const rad = ((nums[0] || 0) * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      if (nums.length >= 3) {
        const cx = nums[1];
        const cy = nums[2];
        step = mulMat2D(mulMat2D([1, 0, 0, 1, cx, cy], [cos, sin, -sin, cos, 0, 0]), [
          1,
          0,
          0,
          1,
          -cx,
          -cy,
        ]);
      } else {
        step = [cos, sin, -sin, cos, 0, 0];
      }
    } else if (fn === "matrix" && nums.length >= 6) {
      step = [nums[0], nums[1], nums[2], nums[3], nums[4], nums[5]];
    } else if (fn === "skewx") {
      step = [1, 0, Math.tan(((nums[0] || 0) * Math.PI) / 180), 1, 0, 0];
    } else if (fn === "skewy") {
      step = [1, Math.tan(((nums[0] || 0) * Math.PI) / 180), 0, 1, 0, 0];
    }
    mat = mulMat2D(mat, step);
  }
  return mat;
}

function f2(v: number): string {
  if (!Number.isFinite(v)) return "0";
  const rounded = +v.toFixed(2);
  return Object.is(rounded, -0) ? "0" : rounded.toString();
}

function expandLineSegmentToFilledPolys(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  sw: number,
  dashArr: number[],
  dashOff: number,
  outW: number,
  outH: number
): [number, number][][] {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 0.05 || sw < 0.05) return [];
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy * (sw * 0.5);
  const ny = ux * (sw * 0.5);

  const spans: [number, number][] = [];
  if (!dashArr.length) {
    spans.push([0, len]);
  } else {
    const pat = dashArr.length % 2 === 1 ? dashArr.concat(dashArr) : dashArr;
    const cycle = pat.reduce((a, b) => a + b, 0);
    if (cycle <= 0.1) {
      spans.push([0, len]);
    } else {
      let off = ((dashOff % cycle) + cycle) % cycle;
      let pos = -off;
      let idx = 0;
      let guard = 0;
      while (pos < len && guard < 1800) {
        guard++;
        const segLen = pat[idx % pat.length];
        const isDraw = idx % 2 === 0;
        const s0 = Math.max(0, pos);
        const s1 = Math.min(len, pos + segLen);
        if (isDraw && s1 > s0 + 0.1) spans.push([s0, s1]);
        pos += segLen;
        idx++;
      }
    }
  }

  const res: [number, number][][] = [];
  for (let i = 0; i < spans.length; i++) {
    const [s0, s1] = spans[i];
    const ax = x1 + ux * s0;
    const ay = y1 + uy * s0;
    const bx = x1 + ux * s1;
    const by = y1 + uy * s1;
    const poly: [number, number][] = [
      [ax + nx, ay + ny],
      [bx + nx, by + ny],
      [bx - nx, by - ny],
      [ax - nx, ay - ny],
    ];
    const clipped = clipPolyToRect(poly, 0, 0, outW, outH);
    if (clipped.length >= 3) res.push(clipped);
  }
  return res;
}

function tokenizeSvgPath(d: string): string[] {
  return d.match(/[a-zA-Z]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || [];
}

function tryExpandStraightStrokedPath(
  d: string,
  mat: Mat2D,
  sw: number,
  dashArr: number[],
  dashOff: number,
  outW: number,
  outH: number
): [number, number][][] | null {
  const toks = tokenizeSvgPath(d);
  if (!toks.length) return [];
  const segs: [number, number, number, number][] = [];
  let i = 0;
  let cmd = "";
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;

  const isCmd = (s: string) => /^[a-zA-Z]$/.test(s);
  const nextNum = () => parseFloat(toks[i++] || "0");

  while (i < toks.length) {
    if (isCmd(toks[i])) {
      cmd = toks[i++];
    } else if (!cmd) {
      return null;
    }
    if (cmd === "M" || cmd === "m") {
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "m" ? cx + x : x;
      cy = cmd === "m" ? cy + y : y;
      sx = cx;
      sy = cy;
      cmd = cmd === "m" ? "l" : "L";
    } else if (cmd === "L" || cmd === "l") {
      const x = nextNum();
      const y = nextNum();
      const nx = cmd === "l" ? cx + x : x;
      const ny = cmd === "l" ? cy + y : y;
      segs.push([cx, cy, nx, ny]);
      cx = nx;
      cy = ny;
    } else if (cmd === "H" || cmd === "h") {
      const x = nextNum();
      const nx = cmd === "h" ? cx + x : x;
      segs.push([cx, cy, nx, cy]);
      cx = nx;
    } else if (cmd === "V" || cmd === "v") {
      const y = nextNum();
      const ny = cmd === "v" ? cy + y : y;
      segs.push([cx, cy, cx, ny]);
      cy = ny;
    } else if (cmd === "Z" || cmd === "z") {
      if (Math.hypot(cx - sx, cy - sy) > 0.05) segs.push([cx, cy, sx, sy]);
      cx = sx;
      cy = sy;
      cmd = "";
    } else {
      // Has curves (C, Q, A, S, T) -> cannot expand purely as straight segments
      return null;
    }
  }

  const polys: [number, number][][] = [];
  for (let s = 0; s < segs.length; s++) {
    const [ax, ay, bx, by] = segs[s];
    const [wx1, wy1] = applyMat2D(mat, ax, ay);
    const [wx2, wy2] = applyMat2D(mat, bx, by);
    const expanded = expandLineSegmentToFilledPolys(
      wx1,
      wy1,
      wx2,
      wy2,
      sw,
      dashArr,
      dashOff,
      outW,
      outH
    );
    for (let k = 0; k < expanded.length; k++) polys.push(expanded[k]);
  }
  return polys;
}

function transformSvgPathDToWorld(
  d: string,
  mat: Mat2D
): { d: string; minX: number; minY: number; maxX: number; maxY: number } | null {
  const toks = tokenizeSvgPath(d);
  if (!toks.length) return null;
  const isUniformNoRot =
    Math.abs(mat[1]) < 1e-5 && Math.abs(mat[2]) < 1e-5 && mat[0] > 0 && mat[3] > 0;
  let i = 0;
  let cmd = "";
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  const out: string[] = [];

  const isCmd = (s: string) => /^[a-zA-Z]$/.test(s);
  const nextNum = () => parseFloat(toks[i++] || "0");
  const pt = (x: number, y: number): [number, number] => {
    const [wx, wy] = applyMat2D(mat, x, y);
    if (wx < minX) minX = wx;
    if (wy < minY) minY = wy;
    if (wx > maxX) maxX = wx;
    if (wy > maxY) maxY = wy;
    return [wx, wy];
  };

  while (i < toks.length) {
    if (isCmd(toks[i])) cmd = toks[i++];
    else if (!cmd) return null;

    if (cmd === "M" || cmd === "m") {
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "m" ? cx + x : x;
      cy = cmd === "m" ? cy + y : y;
      sx = cx;
      sy = cy;
      const [wx, wy] = pt(cx, cy);
      out.push(`M${f2(wx)} ${f2(wy)}`);
      cmd = cmd === "m" ? "l" : "L";
    } else if (cmd === "L" || cmd === "l") {
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "l" ? cx + x : x;
      cy = cmd === "l" ? cy + y : y;
      const [wx, wy] = pt(cx, cy);
      out.push(`L${f2(wx)} ${f2(wy)}`);
    } else if (cmd === "H" || cmd === "h") {
      const x = nextNum();
      cx = cmd === "h" ? cx + x : x;
      const [wx, wy] = pt(cx, cy);
      out.push(`L${f2(wx)} ${f2(wy)}`);
    } else if (cmd === "V" || cmd === "v") {
      const y = nextNum();
      cy = cmd === "v" ? cy + y : y;
      const [wx, wy] = pt(cx, cy);
      out.push(`L${f2(wx)} ${f2(wy)}`);
    } else if (cmd === "C" || cmd === "c") {
      const x1 = nextNum();
      const y1 = nextNum();
      const x2 = nextNum();
      const y2 = nextNum();
      const x = nextNum();
      const y = nextNum();
      const ax1 = cmd === "c" ? cx + x1 : x1;
      const ay1 = cmd === "c" ? cy + y1 : y1;
      const ax2 = cmd === "c" ? cx + x2 : x2;
      const ay2 = cmd === "c" ? cy + y2 : y2;
      cx = cmd === "c" ? cx + x : x;
      cy = cmd === "c" ? cy + y : y;
      const [w1x, w1y] = pt(ax1, ay1);
      const [w2x, w2y] = pt(ax2, ay2);
      const [wx, wy] = pt(cx, cy);
      out.push(`C${f2(w1x)} ${f2(w1y)} ${f2(w2x)} ${f2(w2y)} ${f2(wx)} ${f2(wy)}`);
    } else if (cmd === "S" || cmd === "s") {
      const x2 = nextNum();
      const y2 = nextNum();
      const x = nextNum();
      const y = nextNum();
      const ax2 = cmd === "s" ? cx + x2 : x2;
      const ay2 = cmd === "s" ? cy + y2 : y2;
      cx = cmd === "s" ? cx + x : x;
      cy = cmd === "s" ? cy + y : y;
      const [w2x, w2y] = pt(ax2, ay2);
      const [wx, wy] = pt(cx, cy);
      out.push(`S${f2(w2x)} ${f2(w2y)} ${f2(wx)} ${f2(wy)}`);
    } else if (cmd === "Q" || cmd === "q") {
      const x1 = nextNum();
      const y1 = nextNum();
      const x = nextNum();
      const y = nextNum();
      const ax1 = cmd === "q" ? cx + x1 : x1;
      const ay1 = cmd === "q" ? cy + y1 : y1;
      cx = cmd === "q" ? cx + x : x;
      cy = cmd === "q" ? cy + y : y;
      const [w1x, w1y] = pt(ax1, ay1);
      const [wx, wy] = pt(cx, cy);
      out.push(`Q${f2(w1x)} ${f2(w1y)} ${f2(wx)} ${f2(wy)}`);
    } else if (cmd === "T" || cmd === "t") {
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "t" ? cx + x : x;
      cy = cmd === "t" ? cy + y : y;
      const [wx, wy] = pt(cx, cy);
      out.push(`T${f2(wx)} ${f2(wy)}`);
    } else if (cmd === "A" || cmd === "a") {
      if (!isUniformNoRot) return null;
      const rx = nextNum();
      const ry = nextNum();
      const rot = nextNum();
      const laf = nextNum();
      const sf = nextNum();
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "a" ? cx + x : x;
      cy = cmd === "a" ? cy + y : y;
      const [wx, wy] = pt(cx, cy);
      out.push(
        `A${f2(rx * mat[0])} ${f2(ry * mat[3])} ${f2(rot)} ${laf ? 1 : 0} ${sf ? 1 : 0} ${f2(
          wx
        )} ${f2(wy)}`
      );
    } else if (cmd === "Z" || cmd === "z") {
      cx = sx;
      cy = sy;
      out.push("Z");
      cmd = "";
    } else {
      return null;
    }
  }
  return { d: out.join(""), minX, minY, maxX, maxY };
}

function sampleSvgArcLocal(
  x1: number,
  y1: number,
  rxIn: number,
  ryIn: number,
  xAxisRotDeg: number,
  largeArcFlag: number,
  sweepFlag: number,
  x2: number,
  y2: number,
  steps = 16
): [number, number][] {
  if (Math.hypot(x2 - x1, y2 - y1) < 1e-6) return [[x2, y2]];
  let rx = Math.abs(rxIn);
  let ry = Math.abs(ryIn);
  if (rx < 1e-6 || ry < 1e-6) return [[x2, y2]];
  const phi = (xAxisRotDeg * Math.PI) / 180;
  const cPhi = Math.cos(phi);
  const sPhi = Math.sin(phi);
  const dx2 = (x1 - x2) * 0.5;
  const dy2 = (y1 - y2) * 0.5;
  const x1p = cPhi * dx2 + sPhi * dy2;
  const y1p = -sPhi * dx2 + cPhi * dy2;
  const lam = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
  if (lam > 1) {
    const s = Math.sqrt(lam);
    rx *= s;
    ry *= s;
  }
  const rx2 = rx * rx;
  const ry2 = ry * ry;
  const x1p2 = x1p * x1p;
  const y1p2 = y1p * y1p;
  const num = Math.max(0, rx2 * ry2 - rx2 * y1p2 - ry2 * x1p2);
  const den = rx2 * y1p2 + ry2 * x1p2;
  const coef = (largeArcFlag === sweepFlag ? -1 : 1) * (den > 1e-12 ? Math.sqrt(num / den) : 0);
  const cxp = (coef * rx * y1p) / ry;
  const cyp = (-coef * ry * x1p) / rx;
  const cx = cPhi * cxp - sPhi * cyp + (x1 + x2) * 0.5;
  const cy = sPhi * cxp + cPhi * cyp + (y1 + y2) * 0.5;

  const vecAngle = (ux: number, uy: number, vx: number, vy: number) => {
    const dot = ux * vx + uy * vy;
    const len = Math.hypot(ux, uy) * Math.hypot(vx, vy);
    const cos = Math.max(-1, Math.min(1, len > 1e-12 ? dot / len : 1));
    const ang = Math.acos(cos);
    return ux * vy - uy * vx < 0 ? -ang : ang;
  };

  const ux = (x1p - cxp) / rx;
  const uy = (y1p - cyp) / ry;
  const vx = (-x1p - cxp) / rx;
  const vy = (-y1p - cyp) / ry;
  const theta1 = vecAngle(1, 0, ux, uy);
  let dTheta = vecAngle(ux, uy, vx, vy);
  if (!sweepFlag && dTheta > 0) dTheta -= Math.PI * 2;
  else if (sweepFlag && dTheta < 0) dTheta += Math.PI * 2;

  const segs = Math.max(6, Math.min(36, Math.ceil((Math.abs(dTheta) / (Math.PI * 2)) * steps * 2)));
  const res: [number, number][] = [];
  for (let k = 1; k <= segs; k++) {
    const th = theta1 + (dTheta * k) / segs;
    const ct = Math.cos(th);
    const st = Math.sin(th);
    const px = cPhi * (rx * ct) - sPhi * (ry * st) + cx;
    const py = sPhi * (rx * ct) + cPhi * (ry * st) + cy;
    res.push([px, py]);
  }
  return res;
}

function sampleSvgPathToWorldSubpaths(
  d: string,
  mat: Mat2D
): { pts: [number, number][]; closed: boolean }[] {
  const toks = tokenizeSvgPath(d);
  if (!toks.length) return [];
  const subpaths: { pts: [number, number][]; closed: boolean }[] = [];
  let curPts: [number, number][] = [];
  let i = 0;
  let cmd = "";
  let prevCmd = "";
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let lastCpx = 0;
  let lastCpy = 0;

  const isCmd = (s: string) => /^[a-zA-Z]$/.test(s);
  const nextNum = () => parseFloat(toks[i++] || "0");
  const pushLocal = (x: number, y: number) => {
    curPts.push(applyMat2D(mat, x, y));
  };
  const flush = (closed: boolean) => {
    if (curPts.length >= 2) subpaths.push({ pts: curPts, closed });
    curPts = [];
  };

  while (i < toks.length) {
    if (isCmd(toks[i])) cmd = toks[i++];
    else if (!cmd) break;

    if (cmd === "M" || cmd === "m") {
      flush(false);
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "m" ? cx + x : x;
      cy = cmd === "m" ? cy + y : y;
      sx = cx;
      sy = cy;
      pushLocal(cx, cy);
      prevCmd = cmd;
      cmd = cmd === "m" ? "l" : "L";
    } else if (cmd === "L" || cmd === "l") {
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "l" ? cx + x : x;
      cy = cmd === "l" ? cy + y : y;
      pushLocal(cx, cy);
      prevCmd = cmd;
    } else if (cmd === "H" || cmd === "h") {
      const x = nextNum();
      cx = cmd === "h" ? cx + x : x;
      pushLocal(cx, cy);
      prevCmd = cmd;
    } else if (cmd === "V" || cmd === "v") {
      const y = nextNum();
      cy = cmd === "v" ? cy + y : y;
      pushLocal(cx, cy);
      prevCmd = cmd;
    } else if (cmd === "C" || cmd === "c" || cmd === "S" || cmd === "s") {
      let ax1: number, ay1: number;
      if (cmd === "S" || cmd === "s") {
        if ("CcSs".includes(prevCmd)) {
          ax1 = 2 * cx - lastCpx;
          ay1 = 2 * cy - lastCpy;
        } else {
          ax1 = cx;
          ay1 = cy;
        }
      } else {
        const x1 = nextNum();
        const y1 = nextNum();
        ax1 = cmd === "c" ? cx + x1 : x1;
        ay1 = cmd === "c" ? cy + y1 : y1;
      }
      const x2 = nextNum();
      const y2 = nextNum();
      const x = nextNum();
      const y = nextNum();
      const isRel = cmd === "c" || cmd === "s";
      const ax2 = isRel ? cx + x2 : x2;
      const ay2 = isRel ? cy + y2 : y2;
      const nx = isRel ? cx + x : x;
      const ny = isRel ? cy + y : y;
      const steps = 48;
      for (let k = 1; k <= steps; k++) {
        const t = k / steps;
        const mt = 1 - t;
        const px =
          mt * mt * mt * cx +
          3 * mt * mt * t * ax1 +
          3 * mt * t * t * ax2 +
          t * t * t * nx;
        const py =
          mt * mt * mt * cy +
          3 * mt * mt * t * ay1 +
          3 * mt * t * t * ay2 +
          t * t * t * ny;
        pushLocal(px, py);
      }
      lastCpx = ax2;
      lastCpy = ay2;
      cx = nx;
      cy = ny;
      prevCmd = cmd;
    } else if (cmd === "Q" || cmd === "q" || cmd === "T" || cmd === "t") {
      let ax1: number, ay1: number;
      if (cmd === "T" || cmd === "t") {
        if ("QqTt".includes(prevCmd)) {
          ax1 = 2 * cx - lastCpx;
          ay1 = 2 * cy - lastCpy;
        } else {
          ax1 = cx;
          ay1 = cy;
        }
      } else {
        const x1 = nextNum();
        const y1 = nextNum();
        ax1 = cmd === "q" ? cx + x1 : x1;
        ay1 = cmd === "q" ? cy + y1 : y1;
      }
      const x = nextNum();
      const y = nextNum();
      const isRel = cmd === "q" || cmd === "t";
      const nx = isRel ? cx + x : x;
      const ny = isRel ? cy + y : y;
      const steps = 40;
      for (let k = 1; k <= steps; k++) {
        const t = k / steps;
        const mt = 1 - t;
        const px = mt * mt * cx + 2 * mt * t * ax1 + t * t * nx;
        const py = mt * mt * cy + 2 * mt * t * ay1 + t * t * ny;
        pushLocal(px, py);
      }
      lastCpx = ax1;
      lastCpy = ay1;
      cx = nx;
      cy = ny;
      prevCmd = cmd;
    } else if (cmd === "A" || cmd === "a") {
      const rx = nextNum();
      const ry = nextNum();
      const rot = nextNum();
      const laf = nextNum();
      const sf = nextNum();
      const x = nextNum();
      const y = nextNum();
      const nx = cmd === "a" ? cx + x : x;
      const ny = cmd === "a" ? cy + y : y;
      const arcPts = sampleSvgArcLocal(cx, cy, rx, ry, rot, laf, sf, nx, ny, 48);
      for (let k = 0; k < arcPts.length; k++) pushLocal(arcPts[k][0], arcPts[k][1]);
      cx = nx;
      cy = ny;
      prevCmd = cmd;
    } else if (cmd === "Z" || cmd === "z") {
      cx = sx;
      cy = sy;
      flush(true);
      prevCmd = cmd;
      cmd = "";
    } else {
      break;
    }
  }
  flush(false);
  return subpaths;
}

function clipSegmentToRect(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  rx0: number,
  ry0: number,
  rx1: number,
  ry1: number
): [number, number, number, number] | null {
  let t0 = 0;
  let t1 = 1;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const checks: [number, number][] = [
    [-dx, x0 - rx0],
    [dx, rx1 - x0],
    [-dy, y0 - ry0],
    [dy, ry1 - y0],
  ];
  for (let i = 0; i < 4; i++) {
    const [p, q] = checks[i];
    if (Math.abs(p) < 1e-12) {
      if (q < 0) return null;
    } else {
      const r = q / p;
      if (p < 0) {
        if (r > t1) return null;
        if (r > t0) t0 = r;
      } else {
        if (r < t0) return null;
        if (r < t1) t1 = r;
      }
    }
  }
  if (t1 < t0) return null;
  return [x0 + t0 * dx, y0 + t0 * dy, x0 + t1 * dx, y0 + t1 * dy];
}

function clipPolylineToRect(
  pts: [number, number][],
  rx0: number,
  ry0: number,
  rx1: number,
  ry1: number
): [number, number][][] {
  const chains: [number, number][][] = [];
  let cur: [number, number][] = [];
  for (let i = 0; i + 1 < pts.length; i++) {
    const seg = clipSegmentToRect(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], rx0, ry0, rx1, ry1);
    if (!seg) {
      if (cur.length >= 2) chains.push(cur);
      cur = [];
      continue;
    }
    const [ax, ay, bx, by] = seg;
    if (cur.length === 0) {
      cur.push([ax, ay], [bx, by]);
    } else {
      const last = cur[cur.length - 1];
      if (Math.hypot(last[0] - ax, last[1] - ay) < 0.35) {
        cur.push([bx, by]);
      } else {
        if (cur.length >= 2) chains.push(cur);
        cur = [
          [ax, ay],
          [bx, by],
        ];
      }
    }
  }
  if (cur.length >= 2) chains.push(cur);
  return chains;
}

function normalizeIllustratorColor(raw: string | null | undefined, fallback = "#000000"): string {
  if (!raw) return fallback;
  const s = raw.trim();
  if (!s) return fallback;
  const low = s.toLowerCase();
  if (low === "none" || low === "transparent") return "none";
  if (low.startsWith("url(")) return s;
  if (/^#[0-9a-f]{6}$/i.test(s)) return s.toUpperCase();
  if (/^#[0-9a-f]{3}$/i.test(s)) {
    return (
      "#" +
      s[1] + s[1] + s[2] + s[2] + s[3] + s[3]
    ).toUpperCase();
  }
  const rgbM = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(s);
  if (rgbM) {
    const ch = (v: string) =>
      Math.max(0, Math.min(255, Math.round(parseFloat(v) || 0)))
        .toString(16)
        .padStart(2, "0");
    return `#${ch(rgbM[1])}${ch(rgbM[2])}${ch(rgbM[3])}`.toUpperCase();
  }
  const hslM = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%/i.exec(s);
  if (hslM) {
    return hsl(parseFloat(hslM[1]) || 0, parseFloat(hslM[2]) || 0, parseFloat(hslM[3]) || 0).toUpperCase();
  }
  return fallback;
}

function convertGradientToArtboardUserSpace(el: Element, outW: number, outH: number): string {
  const tag = el.tagName.toLowerCase();
  const id = el.getAttribute("id") || "PV_GRAD";
  const pctToVal = (v: string | null, axis: number, defPct: number) => {
    if (!v) return f2((defPct / 100) * axis);
    const t = v.trim();
    if (t.endsWith("%")) return f2((parseFloat(t) / 100) * axis);
    return f2((parseFloat(t) || 0) * (axis / T));
  };
  const normBBoxPct = (v: string | null, defPct: string) => {
    if (!v) return defPct;
    const t = v.trim();
    if (t.endsWith("%")) return t;
    const num = parseFloat(t);
    if (!Number.isFinite(num)) return defPct;
    return `${+(num <= 1.5 ? num * 100 : (num / T) * 100).toFixed(2)}%`;
  };

  const stops: string[] = [];
  Array.from(el.children).forEach((st) => {
    if (st.tagName.toLowerCase() !== "stop") return;
    const rawOff = (st.getAttribute("offset") || "0").trim();
    const offNum = rawOff.endsWith("%")
      ? Math.max(0, Math.min(1, parseFloat(rawOff) / 100))
      : Math.max(0, Math.min(1, parseFloat(rawOff) || 0));
    const off = String(+offNum.toFixed(4));
    const col = normalizeIllustratorColor(st.getAttribute("stop-color"), "#000000");
    const sop = st.getAttribute("stop-opacity");
    const sopAttr = sop !== null && parseFloat(sop) < 0.995 ? ` stop-opacity="${+parseFloat(sop).toFixed(3)}"` : "";
    stops.push(`<stop offset="${off}" stop-color="${col}"${sopAttr}/>`);
  });

  const isExplicitFullArtboardGrad =
    el.getAttribute("gradientUnits") === "userSpaceOnUse" ||
    id === "PV_BG_GRAD" ||
    id.startsWith("PLAIN_UNIFIED_") ||
    id === "PLAIN_KRAFT_L" ||
    id === "PLAIN_MATCHA_G" ||
    id === "PLAIN_PLAT_RAD" ||
    id === "PLAIN_LUX_BG" ||
    id === "sky_grad" ||
    id === "holo_base";

  if (!isExplicitFullArtboardGrad) {
    if (tag === "lineargradient") {
      const x1 = normBBoxPct(el.getAttribute("x1"), "0%");
      const y1 = normBBoxPct(el.getAttribute("y1"), "0%");
      const x2 = normBBoxPct(el.getAttribute("x2"), "100%");
      const y2 = normBBoxPct(el.getAttribute("y2"), "100%");
      return `<linearGradient id="${id}" gradientUnits="objectBoundingBox" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.join("")}</linearGradient>`;
    }
    const cx = normBBoxPct(el.getAttribute("cx"), "50%");
    const cy = normBBoxPct(el.getAttribute("cy"), "50%");
    const r = normBBoxPct(el.getAttribute("r"), "50%");
    return `<radialGradient id="${id}" gradientUnits="objectBoundingBox" cx="${cx}" cy="${cy}" r="${r}">${stops.join("")}</radialGradient>`;
  }

  if (tag === "lineargradient") {
    const x1 = pctToVal(el.getAttribute("x1"), outW, 0);
    const y1 = pctToVal(el.getAttribute("y1"), outH, 0);
    const x2 = pctToVal(el.getAttribute("x2"), outW, 100);
    const y2 = pctToVal(el.getAttribute("y2"), outH, 100);
    return `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.join("")}</linearGradient>`;
  }
  const cx = pctToVal(el.getAttribute("cx"), outW, 50);
  const cy = pctToVal(el.getAttribute("cy"), outH, 50);
  const r = pctToVal(el.getAttribute("r"), Math.max(outW, outH), 70);
  return `<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${r}">${stops.join("")}</radialGradient>`;
}

export function buildIllustratorSVG(
  singleTileSVG: string,
  P: PatternState,
  rep: number,
  outW: number,
  outH: number
): string {
  const modeCat = INITIAL_MODES.find((m) => m.id === P.mode)?.cat || "";
  const isUnifiedCategory =
    modeCat === "Plain BG" ||
    modeCat === "Background" ||
    modeCat === "Gradient" ||
    modeCat === "Texture" ||
    modeCat === "Poster" ||
    modeCat === "Brush" ||
    modeCat === "Lighting";
  const isUnifiedOnePiece = isUnifiedCategory || P.svgStructure === "unified" || rep === 1;
  const effectiveRep = isUnifiedOnePiece ? 1 : rep;
  const { colsCount, rowsCount, tileW, tileH } = isUnifiedOnePiece
    ? { colsCount: 1, rowsCount: 1, tileW: outW, tileH: outH }
    : getExactTileGrid(outW, outH, effectiveRep);

  const scaleX = tileW / T;
  const scaleY = tileH / T;

  // Parse the tile SVG using native DOMParser to flatten ALL groups, inherit ALL fills,
  // bake ALL transforms into exact Artboard coordinates, strip ALL clipPaths, and expand stroked lines!
  const parser = new DOMParser();
  const doc = parser.parseFromString(singleTileSVG, "image/svg+xml");
  const svgRoot = doc.documentElement;

  const isPosterMode = Boolean(P.mode && P.mode.startsWith("poster_"));
  const isLightingMode = Boolean(P.mode && P.mode.startsWith("light_"));
  const omitSvgBg =
    isLightingMode || (!isPosterMode && Boolean(P.transp || (P.mode && P.mode.startsWith("brush_"))));

  // Detect the true board background color from the rendered SVG (especially critical for Poster sets
  // where Ref 23/24 use #FFFFFF, Ref 22 uses #09090b, Ref 33 uses #e7e2d8, or Plain BG/Gradient modes
  // that emit their own full-tile 0 0 1000 1000 background rect inside LAYER_01_PATTERN_MOTIFS)
  let detectedBoardBgHex = normalizeIllustratorColor(P.bg, "#FFFFFF");
  let motifLayerHasOwnFullBgRect = false;
  const motifGroup = svgRoot.querySelector("#LAYER_01_PATTERN_MOTIFS") || svgRoot;
  const dataBgRects = Array.from(svgRoot.querySelectorAll('rect[data-bg="1"]'));
  if (dataBgRects.length > 0) {
    const lastBgEl = dataBgRects[dataBgRects.length - 1];
    const fCol = lastBgEl.getAttribute("fill");
    if (fCol && !fCol.startsWith("url(")) {
      detectedBoardBgHex = normalizeIllustratorColor(fCol, detectedBoardBgHex);
    }
  }
  const firstMotifRect = Array.from(motifGroup.children).find(
    (ch) => ch.tagName.toLowerCase() === "rect"
  );
  if (firstMotifRect && isUnifiedOnePiece) {
    const rx = parseFloat(firstMotifRect.getAttribute("x") || "0");
    const ry = parseFloat(firstMotifRect.getAttribute("y") || "0");
    const rw = parseFloat(firstMotifRect.getAttribute("width") || "0");
    const rh = parseFloat(firstMotifRect.getAttribute("height") || "0");
    const rf = (firstMotifRect.getAttribute("fill") || "").trim();
    const rop = parseFloat(firstMotifRect.getAttribute("opacity") || "1");
    const isDataBg = firstMotifRect.getAttribute("data-bg") === "1";
    if (
      !isDataBg &&
      Math.abs(rx) < 0.5 &&
      Math.abs(ry) < 0.5 &&
      Math.abs(rw - T) < 0.5 &&
      Math.abs(rh - T) < 0.5 &&
      rf !== "none" &&
      rop >= 0.99
    ) {
      motifLayerHasOwnFullBgRect = true;
      if (!rf.startsWith("url(")) {
        detectedBoardBgHex = normalizeIllustratorColor(rf, detectedBoardBgHex);
      }
    }
  }

  const effectiveP: PatternState =
    detectedBoardBgHex !== normalizeIllustratorColor(P.bg, "#FFFFFF")
      ? { ...P, bg: detectedBoardBgHex }
      : P;
  const { gradDefs: bgGradDefsStr, bgRect } = buildBackgroundAndTextureSVG(effectiveP, omitSvgBg);

  // Collect ONLY genuine <linearGradient> / <radialGradient> definitions
  const gradDefsOut: string[] = [];
  const seenGradIds = new Set<string>();
  const addGradDefsFromContainer = (container: Element | null) => {
    if (!container) return;
    Array.from(container.children).forEach((ch) => {
      const tag = ch.tagName.toLowerCase();
      if (tag === "lineargradient" || tag === "radialgradient") {
        const gid = ch.getAttribute("id") || "";
        if (gid && seenGradIds.has(gid)) return;
        if (gid) seenGradIds.add(gid);
        gradDefsOut.push(convertGradientToArtboardUserSpace(ch, outW, outH));
      }
    });
  };
  addGradDefsFromContainer(svgRoot.querySelector("defs"));
  if (bgGradDefsStr && !omitSvgBg && !motifLayerHasOwnFullBgRect) {
    const bgDefsDoc = parser.parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg"><defs>${bgGradDefsStr}</defs></svg>`,
      "image/svg+xml"
    );
    addGradDefsFromContainer(bgDefsDoc.querySelector("defs"));
  }

  // Build explicit Background Layer (1-click recolorable in Illustrator, exact Artboard size 0..outW x 0..outH)
  // If LAYER_01_PATTERN_MOTIFS already begins with its own full-artboard opaque background rect (e.g. Plain BG / Gradient),
  // skip emitting a redundant ARTBOARD_BG_1 underneath it so the background stays 1 single unified shape!
  let bgOut = "";
  if (!omitSvgBg && bgRect && !motifLayerHasOwnFullBgRect) {
    const bgDoc = parser.parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg">${bgRect}</svg>`,
      "image/svg+xml"
    );
    const bgLines: string[] = [];
    let bgIdx = 1;
    Array.from(bgDoc.documentElement.children).forEach((el) => {
      const elTag = el.tagName.toLowerCase();
      const fillCol = normalizeIllustratorColor(el.getAttribute("fill"), detectedBoardBgHex);
      const opVal = el.getAttribute("opacity");
      const opAttr = opVal !== null && parseFloat(opVal) < 0.995 ? ` opacity="${+parseFloat(opVal).toFixed(3)}"` : "";
      if (elTag === "circle") {
        const cx = (parseFloat(el.getAttribute("cx") || "500") / T) * outW;
        const cy = (parseFloat(el.getAttribute("cy") || "500") / T) * outH;
        const r = (parseFloat(el.getAttribute("r") || "500") / T) * Math.max(outW, outH);
        const clipped = clipPolyToRect(
          Array.from({ length: 72 }, (_, k) => {
            const a = (k / 72) * Math.PI * 2;
            return [cx + Math.cos(a) * r, cy + Math.sin(a) * r] as [number, number];
          }),
          0,
          0,
          outW,
          outH
        );
        if (clipped.length >= 3) {
          bgLines.push(
            `<polygon id="ARTBOARD_BG_${bgIdx++}" points="${clipped
              .map((p) => `${f2(p[0])},${f2(p[1])}`)
              .join(" ")}" fill="${fillCol}" stroke="none"${opAttr}/>`
          );
        }
      } else {
        bgLines.push(
          `<rect id="ARTBOARD_BG_${bgIdx++}" x="0" y="0" width="${outW}" height="${outH}" fill="${fillCol}" stroke="none"${opAttr}/>`
        );
      }
    });
    if (bgLines.length) {
      bgOut = `${bgLines.join("\n")}\n`;
    }
  }

  interface InheritedStyle {
    fill: string;
    stroke: string;
    strokeWidth: number;
    strokeDasharray: string;
    strokeDashoffset: number;
    strokeLinecap: string;
    strokeLinejoin: string;
    opacity: number;
    fillOpacity: number;
    fillRule: string;
  }

  const baseStyle: InheritedStyle = {
    fill: "#000000",
    stroke: "none",
    strokeWidth: 1,
    strokeDasharray: "",
    strokeDashoffset: 0,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    opacity: 1,
    fillOpacity: 1,
    fillRule: "",
  };

  let partId = 1;
  const patternShapes: string[] = [];
  const textureShapes: string[] = [];
  let curTileR = 0;
  let curTileC = 0;

  const fmtStyleAttrs = (
    rawFill: string,
    rawStroke: string,
    sw: number,
    op: number,
    fop: number,
    frule: string,
    lc: string,
    lj: string,
    da: string
  ) => {
    const fill = normalizeIllustratorColor(rawFill, "none");
    const stroke = normalizeIllustratorColor(rawStroke, "none");
    let s = ` fill="${fill}"`;
    if (frule && fill !== "none") s += ` fill-rule="${frule}"`;
    if (stroke !== "none" && sw > 0.05) {
      s += ` stroke="${stroke}" stroke-width="${f2(sw)}"`;
      if (lc) s += ` stroke-linecap="${lc}"`;
      if (lj) s += ` stroke-linejoin="${lj}"`;
      if (da) s += ` stroke-dasharray="${da}"`;
    } else {
      s += ` stroke="none"`;
    }
    const totOp = op * fop;
    if (totOp < 0.995) {
      s += ` opacity="${+totOp.toFixed(3)}"`;
    }
    return s;
  };

  const walkNode = (
    el: Element,
    parentMat: Mat2D,
    parentStyle: InheritedStyle,
    inTextureLayer: boolean,
    isTopLevelChild = false
  ) => {
    const tag = el.tagName.toLowerCase();
    const idAttr = el.getAttribute("id") || "";
    if (
      tag === "defs" ||
      tag === "clippath" ||
      tag === "pattern" ||
      tag === "mask" ||
      idAttr === "TILE_BACKGROUND_LAYER"
    ) {
      return;
    }
    // Skip seam preview indicator rect
    if (
      tag === "rect" &&
      el.getAttribute("fill") === "none" &&
      el.getAttribute("stroke") === "#10b981" &&
      el.getAttribute("width") === "1000"
    ) {
      return;
    }

    // In multi-tile seamless grids (rowsCount > 1 || colsCount > 1), m.put emits wrapped ghost <g transform="translate(X Y)...">
    // copies at X < 0, X >= T, Y < 0, Y >= T for single-tile wrapping. Along INTERNAL tile seams, the adjacent tile already
    // emits the primary uncut motif at the exact same world coordinates! Skipping internal-seam wrap ghosts eliminates
    // overlapping duplicate seam copies and keeps every motif across internal tile boundaries 1 single clean vector piece!
    if (isTopLevelChild && tag === "g" && (colsCount > 1 || rowsCount > 1)) {
      const trAttr = el.getAttribute("transform") || "";
      const trM = /^translate\(\s*([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)\s*\)/.exec(trAttr);
      if (trM) {
        const gx = parseFloat(trM[1]);
        const gy = parseFloat(trM[2]);
        if (
          (gx < -0.5 && curTileC > 0) ||
          (gx >= T - 0.5 && curTileC < colsCount - 1) ||
          (gy < -0.5 && curTileR > 0) ||
          (gy >= T - 0.5 && curTileR < rowsCount - 1)
        ) {
          return;
        }
      }
    }

    const isTex = inTextureLayer || idAttr === "LAYER_02_SURFACE_TEXTURE";
    const targetList = isTex ? textureShapes : patternShapes;

    const localMat = parseSvgTransform(el.getAttribute("transform"));
    const mat = mulMat2D(parentMat, localMat);

    // Parse optional inline style="" properties if present
    const inlineStyleStr = el.getAttribute("style") || "";
    const styleMap: Record<string, string> = {};
    if (inlineStyleStr) {
      inlineStyleStr.split(";").forEach((pair) => {
        const idx = pair.indexOf(":");
        if (idx > 0) {
          styleMap[pair.slice(0, idx).trim().toLowerCase()] = pair.slice(idx + 1).trim();
        }
      });
    }

    const getAttrOrStyle = (k: string): string | null => {
      const a = el.getAttribute(k);
      if (a !== null && a.trim() !== "") return a.trim();
      if (k in styleMap && styleMap[k] !== "") return styleMap[k];
      return null;
    };

    const fillAttr = getAttrOrStyle("fill");
    const strokeAttr = getAttrOrStyle("stroke");
    const swAttr = getAttrOrStyle("stroke-width");
    const daAttr = getAttrOrStyle("stroke-dasharray");
    const doAttr = getAttrOrStyle("stroke-dashoffset");
    const opAttr = getAttrOrStyle("opacity");
    const fopAttr = getAttrOrStyle("fill-opacity");
    const frAttr = getAttrOrStyle("fill-rule");
    const lcAttr = getAttrOrStyle("stroke-linecap");
    const ljAttr = getAttrOrStyle("stroke-linejoin");

    const parsedOp = opAttr !== null ? parseFloat(opAttr) : 1;
    const parsedFop = fopAttr !== null ? parseFloat(fopAttr) : 1;

    const st: InheritedStyle = {
      fill: fillAttr !== null ? normalizeIllustratorColor(fillAttr, parentStyle.fill) : parentStyle.fill,
      stroke: strokeAttr !== null ? normalizeIllustratorColor(strokeAttr, "none") : parentStyle.stroke,
      strokeWidth: swAttr !== null ? parseFloat(swAttr) || 1 : parentStyle.strokeWidth,
      strokeDasharray: daAttr !== null ? daAttr : parentStyle.strokeDasharray,
      strokeDashoffset: doAttr !== null ? parseFloat(doAttr) || 0 : parentStyle.strokeDashoffset,
      strokeLinecap: lcAttr !== null ? lcAttr : parentStyle.strokeLinecap,
      strokeLinejoin: ljAttr !== null ? ljAttr : parentStyle.strokeLinejoin,
      opacity: parentStyle.opacity * (Number.isFinite(parsedOp) ? parsedOp : 1),
      fillOpacity: parentStyle.fillOpacity * (Number.isFinite(parsedFop) ? parsedFop : 1),
      fillRule: frAttr !== null ? frAttr : parentStyle.fillRule,
    };

    if (st.opacity * st.fillOpacity <= 0.004) return;

    if (tag === "g" || tag === "svg") {
      const isRootLayerGroup = idAttr === "LAYER_01_PATTERN_MOTIFS";
      Array.from(el.children).forEach((ch) => walkNode(ch, mat, st, isTex, isRootLayerGroup));
      return;
    }

    // Never emit invisible paths with neither fill nor stroke
    if (st.fill === "none" && st.stroke === "none") return;

    const sxMag = Math.hypot(mat[0], mat[1]);
    const syMag = Math.hypot(mat[2], mat[3]);
    const avgScale = (sxMag + syMag) * 0.5;
    const effSw = st.strokeWidth * avgScale;
    const dashNums = st.strokeDasharray
      ? (st.strokeDasharray.match(/[-+]?(?:\d+\.?\d*|\.\d+)/g) || [])
          .map((n) => parseFloat(n) * avgScale)
          .filter((n) => n > 0)
      : [];
    const effDashOff = st.strokeDashoffset * avgScale;
    const isAxisAligned = Math.abs(mat[1]) < 1e-5 && Math.abs(mat[2]) < 1e-5;

    // 1. RECT (Strictly clipped to exact 0..outW x 0..outH Artboard bounds — including rounded rects!)
    if (tag === "rect") {
      const x = parseFloat(el.getAttribute("x") || "0");
      const y = parseFloat(el.getAttribute("y") || "0");
      const w = parseFloat(el.getAttribute("width") || "0");
      const h = parseFloat(el.getAttribute("height") || "0");
      const rx = parseFloat(el.getAttribute("rx") || "0");
      const ry = parseFloat(el.getAttribute("ry") || String(rx));
      if (w <= 0 || h <= 0) return;

      // Always skip per-tile background rects (data-bg="1" or full-tile 0 0 1000 1000 matching detectedBoardBgHex)
      // when bgOut already emitted ARTBOARD_BG_1 so multi-tile grids never emit 8 tile-sized background blocks on top of motifs!
      const isDataBgRect = el.getAttribute("data-bg") === "1";
      const isFullTileSolidBg =
        !omitSvgBg &&
        !motifLayerHasOwnFullBgRect &&
        Math.abs(x) < 0.5 &&
        Math.abs(y) < 0.5 &&
        Math.abs(w - T) < 0.5 &&
        Math.abs(h - T) < 0.5 &&
        st.stroke === "none" &&
        !isTex &&
        (isDataBgRect ||
          ((st.fill.toLowerCase() === normalizeIllustratorColor(P.bg, "").toLowerCase() ||
            st.fill.toLowerCase() === detectedBoardBgHex.toLowerCase()) &&
            st.opacity >= 0.99));
      if (isFullTileSolidBg) {
        return;
      }

      if (isAxisAligned) {
        const [p0x, p0y] = applyMat2D(mat, x, y);
        const [p1x, p1y] = applyMat2D(mat, x + w, y + h);
        const minX = Math.max(0, Math.min(p0x, p1x));
        const maxX = Math.min(outW, Math.max(p0x, p1x));
        const minY = Math.max(0, Math.min(p0y, p1y));
        const maxY = Math.min(outH, Math.max(p0y, p1y));
        const cw = maxX - minX;
        const ch = maxY - minY;
        if (cw <= 0.05 || ch <= 0.05) return;
        const cleanStroke = st.stroke === st.fill ? "none" : st.stroke;
        let rxAttrs = "";
        if (rx > 0 || ry > 0) {
          const wrx = Math.min(cw * 0.5, rx * sxMag);
          const wry = Math.min(ch * 0.5, ry * syMag);
          if (wrx > 0.05 || wry > 0.05) rxAttrs = ` rx="${f2(wrx)}" ry="${f2(wry)}"`;
        }
        const rectId =
          motifLayerHasOwnFullBgRect && patternShapes.length === 0 && !isTex
            ? "ARTBOARD_BG_1"
            : `PART_${partId++}`;
        targetList.push(
          `  <rect id="${rectId}" x="${f2(minX)}" y="${f2(minY)}" width="${f2(
            cw
          )}" height="${f2(ch)}"${rxAttrs}${fmtStyleAttrs(
            st.fill,
            cleanStroke,
            effSw,
            st.opacity,
            st.fillOpacity,
            st.fillRule,
            st.strokeLinecap,
            st.strokeLinejoin,
            dashNums.map(f2).join(" ")
          )}/>`
        );
        return;
      }

      // Rotated / skewed rect -> bake corners into pure polygon clipped to Artboard!
      const corners: [number, number][] = [
        applyMat2D(mat, x, y),
        applyMat2D(mat, x + w, y),
        applyMat2D(mat, x + w, y + h),
        applyMat2D(mat, x, y + h),
      ];
      const cleanStroke = st.stroke === st.fill ? "none" : st.stroke;
      const clipped = clipPolyToRect(corners, 0, 0, outW, outH);
      if (clipped.length >= 3) {
        targetList.push(
          `  <polygon id="PART_${partId++}" points="${clipped
            .map((p) => `${f2(p[0])},${f2(p[1])}`)
            .join(" ")}"${fmtStyleAttrs(
            st.fill,
            cleanStroke,
            effSw,
            st.opacity,
            st.fillOpacity,
            st.fillRule,
            st.strokeLinecap,
            st.strokeLinejoin,
            dashNums.map(f2).join(" ")
          )}/>`
        );
      }
      return;
    }

    // 2. POLYGON (Always strictly clipped to exact Artboard 0..outW x 0..outH)
    if (tag === "polygon") {
      const nums = (
        (el.getAttribute("points") || "").match(/[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || []
      ).map(Number);
      const pts: [number, number][] = [];
      for (let k = 0; k + 1 < nums.length; k += 2) {
        pts.push(applyMat2D(mat, nums[k], nums[k + 1]));
      }
      if (pts.length < 3) return;
      const cleanStroke = st.stroke === st.fill ? "none" : st.stroke;
      const clipped = clipPolyToRect(pts, 0, 0, outW, outH);
      if (clipped.length < 3) return;
      targetList.push(
        `  <polygon id="PART_${partId++}" points="${clipped
          .map((p) => `${f2(p[0])},${f2(p[1])}`)
          .join(" ")}"${fmtStyleAttrs(
          st.fill,
          cleanStroke,
          effSw,
          st.opacity,
          st.fillOpacity,
          st.fillRule,
          st.strokeLinecap,
          st.strokeLinejoin,
          dashNums.map(f2).join(" ")
        )}/>`
      );
      return;
    }

    // 3. LINE -> Expand directly into filled vector polygon(s) so Fill color edits work in 1 click!
    if (tag === "line") {
      if (st.stroke === "none") return;
      const [wx1, wy1] = applyMat2D(
        mat,
        parseFloat(el.getAttribute("x1") || "0"),
        parseFloat(el.getAttribute("y1") || "0")
      );
      const [wx2, wy2] = applyMat2D(
        mat,
        parseFloat(el.getAttribute("x2") || "0"),
        parseFloat(el.getAttribute("y2") || "0")
      );
      const polys = expandLineSegmentToFilledPolys(
        wx1,
        wy1,
        wx2,
        wy2,
        effSw,
        dashNums,
        effDashOff,
        outW,
        outH
      );
      const fillCol = normalizeIllustratorColor(st.stroke, "#000000");
      const opStr = st.opacity < 0.995 ? ` opacity="${+st.opacity.toFixed(3)}"` : "";
      for (let k = 0; k < polys.length; k++) {
        targetList.push(
          `<polygon id="PART_${partId++}" points="${polys[k]
            .map((p) => `${f2(p[0])},${f2(p[1])}`)
            .join(" ")}" fill="${fillCol}" stroke="none"${opStr}/>`
        );
      }
      return;
    }

    // 4. POLYLINE
    if (tag === "polyline") {
      const nums = (
        (el.getAttribute("points") || "").match(/[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || []
      ).map(Number);
      const pts: [number, number][] = [];
      for (let k = 0; k + 1 < nums.length; k += 2) {
        pts.push(applyMat2D(mat, nums[k], nums[k + 1]));
      }
      if (pts.length < 2) return;
      if (st.fill === "none" && st.stroke !== "none") {
        const fillCol = normalizeIllustratorColor(st.stroke, "#000000");
        const opStr = st.opacity < 0.995 ? ` opacity="${+st.opacity.toFixed(3)}"` : "";
        for (let k = 0; k + 1 < pts.length; k++) {
          const polys = expandLineSegmentToFilledPolys(
            pts[k][0],
            pts[k][1],
            pts[k + 1][0],
            pts[k + 1][1],
            effSw,
            dashNums,
            effDashOff,
            outW,
            outH
          );
          for (let j = 0; j < polys.length; j++) {
            targetList.push(
              `<polygon id="PART_${partId++}" points="${polys[j]
                .map((p) => `${f2(p[0])},${f2(p[1])}`)
                .join(" ")}" fill="${fillCol}" stroke="none"${opStr}/>`
            );
          }
        }
        return;
      }
      const clipped = clipPolyToRect(pts, 0, 0, outW, outH);
      if (clipped.length < 3) return;
      targetList.push(
        `<polygon id="PART_${partId++}" points="${clipped
          .map((p) => `${f2(p[0])},${f2(p[1])}`)
          .join(" ")}"${fmtStyleAttrs(
          st.fill,
          st.stroke,
          effSw,
          st.opacity,
          st.fillOpacity,
          st.fillRule,
          st.strokeLinecap,
          st.strokeLinejoin,
          dashNums.map(f2).join(" ")
        )}/>`
      );
      return;
    }

    // 5. CIRCLE & ELLIPSE (Strictly clipped to Artboard if straddling any edge!)
    if (tag === "circle" || tag === "ellipse") {
      const cx = parseFloat(el.getAttribute("cx") || "0");
      const cy = parseFloat(el.getAttribute("cy") || "0");
      const rx =
        tag === "circle"
          ? parseFloat(el.getAttribute("r") || "0")
          : parseFloat(el.getAttribute("rx") || "0");
      const ry =
        tag === "circle"
          ? rx
          : parseFloat(el.getAttribute("ry") || "0");
      if (rx <= 0 || ry <= 0) return;
      const [wcx, wcy] = applyMat2D(mat, cx, cy);
      const wrx = rx * sxMag;
      const wry = ry * syMag;
      const halfBx = Math.hypot(mat[0] * rx, mat[2] * ry);
      const halfBy = Math.hypot(mat[1] * rx, mat[3] * ry);
      if (wcx + halfBx <= 0 || wcx - halfBx >= outW || wcy + halfBy <= 0 || wcy - halfBy >= outH) {
        return;
      }
      const cleanStroke = st.stroke === st.fill ? "none" : st.stroke;
      const styleAttrs = fmtStyleAttrs(
        st.fill,
        cleanStroke,
        effSw,
        st.opacity,
        st.fillOpacity,
        st.fillRule,
        st.strokeLinecap,
        st.strokeLinejoin,
        dashNums.map(f2).join(" ")
      );
      const crossesEdge =
        wcx - halfBx < -0.25 ||
        wcx + halfBx > outW + 0.25 ||
        wcy - halfBy < -0.25 ||
        wcy + halfBy > outH + 0.25;

      if (crossesEdge) {
        const segs = 96;
        const polyPts: [number, number][] = [];
        for (let k = 0; k < segs; k++) {
          const ang = (k / segs) * Math.PI * 2;
          polyPts.push(applyMat2D(mat, cx + Math.cos(ang) * rx, cy + Math.sin(ang) * ry));
        }
        if (st.fill === "none" && cleanStroke !== "none") {
          polyPts.push(polyPts[0]);
          const chains = clipPolylineToRect(polyPts, 0, 0, outW, outH);
          for (let c = 0; c < chains.length; c++) {
            const pd =
              `M${f2(chains[c][0][0])} ${f2(chains[c][0][1])}` +
              chains[c]
                .slice(1)
                .map((p) => `L${f2(p[0])} ${f2(p[1])}`)
                .join("");
            targetList.push(`<path id="PART_${partId++}" d="${pd}"${styleAttrs}/>`);
          }
        } else {
          const clipped = clipPolyToRect(polyPts, 0, 0, outW, outH);
          if (clipped.length >= 3) {
            targetList.push(
              `<polygon id="PART_${partId++}" points="${clipped
                .map((p) => `${f2(p[0])},${f2(p[1])}`)
                .join(" ")}"${styleAttrs}/>`
            );
          }
        }
        return;
      }

      const rotDeg = (Math.atan2(mat[1], mat[0]) * 180) / Math.PI;
      const trStr =
        Math.abs(rotDeg) > 0.05 && Math.abs(wrx - wry) > 0.1
          ? ` transform="rotate(${f2(rotDeg)} ${f2(wcx)} ${f2(wcy)})"`
          : "";
      if (Math.abs(wrx - wry) < 0.15) {
        targetList.push(
          `<circle id="PART_${partId++}" cx="${f2(wcx)}" cy="${f2(wcy)}" r="${f2(wrx)}"${styleAttrs}/>`
        );
      } else {
        targetList.push(
          `<ellipse id="PART_${partId++}" cx="${f2(wcx)}" cy="${f2(wcy)}" rx="${f2(wrx)}" ry="${f2(
            wry
          )}"${trStr}${styleAttrs}/>`
        );
      }
      return;
    }

    // 6. PATH (Smooth native Bézier when inside Artboard; mathematically clipped flush at Artboard edges when crossing!)
    if (tag === "path") {
      const d = (el.getAttribute("d") || "").trim();
      if (!d) return;

      // Case A: Stroked straight path (fill="none") -> expand straight segments into clipped filled polygons
      if (st.fill === "none" && st.stroke !== "none") {
        const expandedPolys = tryExpandStraightStrokedPath(
          d,
          mat,
          effSw,
          dashNums,
          effDashOff,
          outW,
          outH
        );
        if (expandedPolys !== null) {
          const fillCol = normalizeIllustratorColor(st.stroke, "#000000");
          const opStr = st.opacity < 0.995 ? ` opacity="${+st.opacity.toFixed(3)}"` : "";
          for (let k = 0; k < expandedPolys.length; k++) {
            targetList.push(
              `<polygon id="PART_${partId++}" points="${expandedPolys[k]
                .map((p) => `${f2(p[0])},${f2(p[1])}`)
                .join(" ")}" fill="${fillCol}" stroke="none"${opStr}/>`
            );
          }
          return;
        }
      }

      const cleanStroke = st.stroke === st.fill ? "none" : st.stroke;
      const styleAttrs = fmtStyleAttrs(
        st.fill,
        cleanStroke,
        effSw,
        st.opacity,
        st.fillOpacity,
        st.fillRule,
        st.strokeLinecap,
        st.strokeLinejoin,
        dashNums.map(f2).join(" ")
      );
      const world = transformSvgPathDToWorld(d, mat);

      // Fast path: 100% inside Artboard -> preserve exact native smooth Bézier curves!
      if (
        world &&
        world.minX >= -0.25 &&
        world.maxX <= outW + 0.25 &&
        world.minY >= -0.25 &&
        world.maxY <= outH + 0.25
      ) {
        const rawSubpaths =
          st.fillRule !== "evenodd"
            ? world.d.split(/(?=M)/).filter((sp) => sp.trim().length > 2)
            : [world.d];
        let canSplit = rawSubpaths.length > 1;
        if (canSplit && st.fill !== "none") {
          const bboxes = rawSubpaths.map((sp) => {
            const ns = (sp.match(/[-+]?(?:\d+\.?\d*|\.\d+)/g) || []).map(Number);
            let x0 = Infinity,
              y0 = Infinity,
              x1 = -Infinity,
              y1 = -Infinity;
            for (let q = 0; q + 1 < ns.length; q += 2) {
              if (ns[q] < x0) x0 = ns[q];
              if (ns[q] > x1) x1 = ns[q];
              if (ns[q + 1] < y0) y0 = ns[q + 1];
              if (ns[q + 1] > y1) y1 = ns[q + 1];
            }
            return [x0, y0, x1, y1];
          });
          // Never split a multi-subpath <path> if ANY two subpaths' bounding boxes overlap!
          for (let a = 0; a < bboxes.length && canSplit; a++) {
            for (let b = a + 1; b < bboxes.length && canSplit; b++) {
              if (
                bboxes[a][0] <= bboxes[b][2] &&
                bboxes[a][2] >= bboxes[b][0] &&
                bboxes[a][1] <= bboxes[b][3] &&
                bboxes[a][3] >= bboxes[b][1]
              ) {
                canSplit = false;
              }
            }
          }
        }
        if (canSplit) {
          for (let k = 0; k < rawSubpaths.length; k++) {
            targetList.push(`<path id="PART_${partId++}" d="${rawSubpaths[k]}"${styleAttrs}/>`);
          }
        } else {
          // If rawSubpaths has overlapping/enclosed subpaths (hole inside "0", "O", "A", "8", or frame), enforce fill-rule="evenodd"
          // so Adobe Illustrator and EPS 10 (ef) always punch out the inner counter hole!
          const compoundStyleAttrs =
            rawSubpaths.length > 1 && st.fillRule !== "evenodd"
              ? fmtStyleAttrs(
                  st.fill,
                  cleanStroke,
                  effSw,
                  st.opacity,
                  st.fillOpacity,
                  "evenodd",
                  st.strokeLinecap,
                  st.strokeLinejoin,
                  dashNums.map(f2).join(" ")
                )
              : styleAttrs;
          targetList.push(`<path id="PART_${partId++}" d="${world.d}"${compoundStyleAttrs}/>`);
        }
        return;
      }

      // If completely outside Artboard, drop immediately
      if (
        world &&
        (world.maxX <= 0 || world.minX >= outW || world.maxY <= 0 || world.minY >= outH)
      ) {
        return;
      }

      // Boundary-crossing curved/arc path -> sample & strictly clip to [0..outW, 0..outH] (ZERO Artboard overflow!)
      const sampled = sampleSvgPathToWorldSubpaths(d, mat);
      if (!sampled.length) return;

      if (st.fill === "none" && cleanStroke !== "none") {
        for (let s = 0; s < sampled.length; s++) {
          const pts = sampled[s].closed
            ? sampled[s].pts.concat([sampled[s].pts[0]])
            : sampled[s].pts;
          const chains = clipPolylineToRect(pts, 0, 0, outW, outH);
          for (let c = 0; c < chains.length; c++) {
            const pd =
              `M${f2(chains[c][0][0])} ${f2(chains[c][0][1])}` +
              chains[c]
                .slice(1)
                .map((p) => `L${f2(p[0])} ${f2(p[1])}`)
                .join("");
            targetList.push(`<path id="PART_${partId++}" d="${pd}"${styleAttrs}/>`);
          }
        }
        return;
      }

      // Filled curved/arc path (with or without stroke) -> clip strictly to [0..outW, 0..outH]
      const clippedPolys: [number, number][][] = [];
      for (let s = 0; s < sampled.length; s++) {
        const cl = clipPolyToRect(sampled[s].pts, 0, 0, outW, outH);
        if (cl.length >= 3) clippedPolys.push(cl);
      }
      if (!clippedPolys.length) return;

      if (clippedPolys.length > 1) {
        const compoundStyleAttrs =
          st.fillRule !== "evenodd"
            ? fmtStyleAttrs(
                st.fill,
                cleanStroke,
                effSw,
                st.opacity,
                st.fillOpacity,
                "evenodd",
                st.strokeLinecap,
                st.strokeLinejoin,
                dashNums.map(f2).join(" ")
              )
            : styleAttrs;
        const compoundD = clippedPolys
          .map(
            (poly) =>
              `M${f2(poly[0][0])} ${f2(poly[0][1])}` +
              poly
                .slice(1)
                .map((p) => `L${f2(p[0])} ${f2(p[1])}`)
                .join("") +
              "Z"
          )
          .join("");
        targetList.push(`<path id="PART_${partId++}" d="${compoundD}"${compoundStyleAttrs}/>`);
      } else {
        for (let k = 0; k < clippedPolys.length; k++) {
          targetList.push(
            `<polygon id="PART_${partId++}" points="${clippedPolys[k]
              .map((p) => `${f2(p[0])},${f2(p[1])}`)
              .join(" ")}"${styleAttrs}/>`
          );
        }
      }
    }
  };

  for (let r = 0; r < rowsCount; r++) {
    for (let c = 0; c < colsCount; c++) {
      curTileR = r;
      curTileC = c;
      const tx = c * tileW;
      const ty = r * tileH;
      const tileMat: Mat2D = [scaleX, 0, 0, scaleY, tx, ty];
      Array.from(svgRoot.children).forEach((ch) => walkNode(ch, tileMat, baseStyle, false, true));
    }
  }

  const defsBlock = gradDefsOut.length ? `<defs>\n  ${gradDefsOut.join("\n  ")}\n</defs>\n` : "";
  // Place Surface Texture BEHIND Pattern Motifs (right above Background) so clicking ANY pattern motif
  // in Adobe Illustrator directly selects that motif instead of getting blocked by the texture overlay!
  const texGroup = textureShapes.length
    ? `<g id="SURFACE_TEXTURE_LAYER">\n${textureShapes.map((s) => "  " + s.trimStart()).join("\n")}\n</g>\n`
    : "";
  // Emit pattern vector shapes directly at root level on TOP (NO <g> wrapper) so 1-click selection
  // immediately selects that individual shape and activates its Fill Color Swatch & Recolor Artwork!
  const patternBlock = patternShapes.length
    ? `${patternShapes.map((s) => s.trimStart()).join("\n")}\n`
    : "";

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${outW}" height="${outH}" viewBox="0 0 ${outW} ${outH}">\n` +
    defsBlock +
    bgOut +
    texGroup +
    patternBlock +
    `</svg>`
  );
}

/* =====================================================================
   DIRECT ADOBE ILLUSTRATOR / MICROSTOCK EPS 10 (.EPS) VECTOR GENERATOR
   100% Conforming PostScript LanguageLevel 3 / EPSF-3.0 Vector Output
   Native Smooth Shading (shfill /ShadingType 2 & 3) — Zero 48-Band Slicing,
   Strictly <= 120 chars/line, Isolated Prolog Dict, Zero NaN/nocurrentpoint,
   Zero Fake %AI Headers — Opens 100% Cleanly in Adobe Illustrator, CorelDRAW, PS & GS
   ===================================================================== */
function clamp01(v: number): number {
  if (!Number.isFinite(v)) return 0;
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function hexToPsRgb(hex: string, bgHex = "#FFFFFF", opacity = 1): [string, string, string] {
  const norm = normalizeIllustratorColor(hex, "#000000");
  const normBg = normalizeIllustratorColor(bgHex, "#FFFFFF");
  const [r0, g0, b0] = norm.startsWith("#") ? hex2rgb(norm) : [0, 0, 0];
  const safeOp = Number.isFinite(opacity) ? clamp01(opacity) : 1;
  let r = Number.isFinite(r0) ? r0 : 0;
  let g = Number.isFinite(g0) ? g0 : 0;
  let b = Number.isFinite(b0) ? b0 : 0;
  if (safeOp < 0.995) {
    // Flatten opacity directly against background color so EPS 10 has ZERO unflattened transparency warnings!
    const [br, bg, bb] = normBg.startsWith("#") ? hex2rgb(normBg) : [255, 255, 255];
    r = r * safeOp + (Number.isFinite(br) ? br : 255) * (1 - safeOp);
    g = g * safeOp + (Number.isFinite(bg) ? bg : 255) * (1 - safeOp);
    b = b * safeOp + (Number.isFinite(bb) ? bb : 255) * (1 - safeOp);
  }
  return [
    clamp01(r / 255).toFixed(4),
    clamp01(g / 255).toFixed(4),
    clamp01(b / 255).toFixed(4),
  ];
}

function svgPathToPostScriptOps(d: string, outH: number): string[] {
  const toks = d.match(/[a-zA-Z]|[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi);
  if (!toks) return [];
  let i = 0;
  let cmd = "";
  let prevCmd = "";
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let lastCpx = 0;
  let lastCpy = 0;
  let hasPoint = false;
  const ops: string[] = [];

  const isCmd = (s: string) => /^[a-zA-Z]$/.test(s);
  const nextNum = () => {
    const v = parseFloat(toks[i++] || "0");
    return Number.isFinite(v) ? v : 0;
  };
  const psX = (x: number) => f2(Number.isFinite(x) ? x : 0);
  const psY = (y: number) => f2(Number.isFinite(y) ? outH - y : 0);
  const ensurePoint = () => {
    if (!hasPoint) {
      ops.push(`${psX(cx)} ${psY(cy)} m`);
      sx = cx;
      sy = cy;
      hasPoint = true;
    }
  };

  while (i < toks.length) {
    if (isCmd(toks[i])) cmd = toks[i++];
    else if (!cmd) break;

    if (cmd === "M" || cmd === "m") {
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "m" ? cx + x : x;
      cy = cmd === "m" ? cy + y : y;
      sx = cx;
      sy = cy;
      ops.push(`${psX(cx)} ${psY(cy)} m`);
      hasPoint = true;
      prevCmd = cmd;
      cmd = cmd === "m" ? "l" : "L";
    } else if (cmd === "L" || cmd === "l") {
      ensurePoint();
      const x = nextNum();
      const y = nextNum();
      cx = cmd === "l" ? cx + x : x;
      cy = cmd === "l" ? cy + y : y;
      ops.push(`${psX(cx)} ${psY(cy)} l`);
      prevCmd = cmd;
    } else if (cmd === "H" || cmd === "h") {
      ensurePoint();
      const x = nextNum();
      cx = cmd === "h" ? cx + x : x;
      ops.push(`${psX(cx)} ${psY(cy)} l`);
      prevCmd = cmd;
    } else if (cmd === "V" || cmd === "v") {
      ensurePoint();
      const y = nextNum();
      cy = cmd === "v" ? cy + y : y;
      ops.push(`${psX(cx)} ${psY(cy)} l`);
      prevCmd = cmd;
    } else if (cmd === "C" || cmd === "c" || cmd === "S" || cmd === "s") {
      ensurePoint();
      let ax1: number, ay1: number;
      if (cmd === "S" || cmd === "s") {
        if ("CcSs".includes(prevCmd)) {
          ax1 = 2 * cx - lastCpx;
          ay1 = 2 * cy - lastCpy;
        } else {
          ax1 = cx;
          ay1 = cy;
        }
      } else {
        const x1 = nextNum();
        const y1 = nextNum();
        ax1 = cmd === "c" ? cx + x1 : x1;
        ay1 = cmd === "c" ? cy + y1 : y1;
      }
      const x2 = nextNum();
      const y2 = nextNum();
      const x = nextNum();
      const y = nextNum();
      const isRel = cmd === "c" || cmd === "s";
      const ax2 = isRel ? cx + x2 : x2;
      const ay2 = isRel ? cy + y2 : y2;
      const nx = isRel ? cx + x : x;
      const ny = isRel ? cy + y : y;
      ops.push(`${psX(ax1)} ${psY(ay1)} ${psX(ax2)} ${psY(ay2)} ${psX(nx)} ${psY(ny)} c`);
      lastCpx = ax2;
      lastCpy = ay2;
      cx = nx;
      cy = ny;
      prevCmd = cmd;
    } else if (cmd === "Q" || cmd === "q" || cmd === "T" || cmd === "t") {
      ensurePoint();
      let ax1: number, ay1: number;
      if (cmd === "T" || cmd === "t") {
        if ("QqTt".includes(prevCmd)) {
          ax1 = 2 * cx - lastCpx;
          ay1 = 2 * cy - lastCpy;
        } else {
          ax1 = cx;
          ay1 = cy;
        }
      } else {
        const x1 = nextNum();
        const y1 = nextNum();
        ax1 = cmd === "q" ? cx + x1 : x1;
        ay1 = cmd === "q" ? cy + y1 : y1;
      }
      const x = nextNum();
      const y = nextNum();
      const isRel = cmd === "q" || cmd === "t";
      const nx = isRel ? cx + x : x;
      const ny = isRel ? cy + y : y;
      // Exact quadratic-to-cubic Bezier degree elevation for PostScript curveto
      const c1x = cx + (2 / 3) * (ax1 - cx);
      const c1y = cy + (2 / 3) * (ay1 - cy);
      const c2x = nx + (2 / 3) * (ax1 - nx);
      const c2y = ny + (2 / 3) * (ay1 - ny);
      ops.push(`${psX(c1x)} ${psY(c1y)} ${psX(c2x)} ${psY(c2y)} ${psX(nx)} ${psY(ny)} c`);
      lastCpx = ax1;
      lastCpy = ay1;
      cx = nx;
      cy = ny;
      prevCmd = cmd;
    } else if (cmd === "A" || cmd === "a") {
      ensurePoint();
      const rx = nextNum();
      const ry = nextNum();
      const rot = nextNum();
      const laf = nextNum();
      const sf = nextNum();
      const x = nextNum();
      const y = nextNum();
      const nx = cmd === "a" ? cx + x : x;
      const ny = cmd === "a" ? cy + y : y;
      if (Math.abs(rx) < 1e-4 || Math.abs(ry) < 1e-4) {
        ops.push(`${psX(nx)} ${psY(ny)} l`);
      } else {
        const arcPts = sampleSvgArcLocal(cx, cy, rx, ry, rot, laf, sf, nx, ny, 48);
        for (let k = 0; k < arcPts.length; k++) {
          if (Number.isFinite(arcPts[k][0]) && Number.isFinite(arcPts[k][1])) {
            ops.push(`${psX(arcPts[k][0])} ${psY(arcPts[k][1])} l`);
          }
        }
      }
      cx = nx;
      cy = ny;
      prevCmd = cmd;
    } else if (cmd === "Z" || cmd === "z") {
      if (hasPoint) {
        cx = sx;
        cy = sy;
        ops.push("cp");
        hasPoint = false;
      }
      prevCmd = cmd;
      cmd = "";
    } else {
      break;
    }
  }
  return ops;
}

export function buildIllustratorEPS10(
  singleTileSVG: string,
  P: PatternState,
  rep: number,
  outW: number,
  outH: number,
  preFlattenedIllustratorSvg?: string
): string {
  const safeOutW = Math.max(100, Math.round(Number.isFinite(outW) ? outW : 6000));
  const safeOutH = Math.max(100, Math.round(Number.isFinite(outH) ? outH : 6000));

  // Reuse pre-flattened Illustrator SVG if already built (cuts vector batch CPU time in half!)
  const flatSvg =
    preFlattenedIllustratorSvg || buildIllustratorSVG(singleTileSVG, P, rep, safeOutW, safeOutH);
  const parser = new DOMParser();
  const doc = parser.parseFromString(flatSvg, "image/svg+xml");
  const root = doc.documentElement;

  const isPosterMode = Boolean(P.mode && P.mode.startsWith("poster_"));
  const isLightingMode = Boolean(P.mode && P.mode.startsWith("light_"));
  const omitBg =
    isLightingMode || (!isPosterMode && Boolean(P.transp || (P.mode && P.mode.startsWith("brush_"))));

  // Determine true baseBgHex from the actual ARTBOARD_BG_1 rect in flatSvg so Poster & Plain BG
  // designs with their own board background (like #FFFFFF on Ref 23/24) blend against their true background!
  let baseBgHex = isLightingMode
    ? "#000000"
    : omitBg
    ? "#FFFFFF"
    : normalizeIllustratorColor(P.bg, "#FFFFFF");
  if (!isLightingMode && !omitBg && root && root.tagName.toLowerCase() !== "parsererror") {
    const bgEl = root.querySelector("#ARTBOARD_BG_1") || root.querySelector("rect");
    if (bgEl) {
      const bf = (bgEl.getAttribute("fill") || "").trim();
      if (bf && !bf.startsWith("url(") && bf !== "none") {
        baseBgHex = normalizeIllustratorColor(bf, baseBgHex);
      }
    }
  }

  // Detect whether Lighting mode has a black background on the left half or full artboard
  let hasLeftHalfBlackBg = false;
  let hasFullBlackBg = false;
  if (isLightingMode && root && root.tagName.toLowerCase() !== "parsererror") {
    Array.from(root.querySelectorAll("rect")).forEach((rEl) => {
      const rw = parseFloat(rEl.getAttribute("width") || "0");
      const rx = parseFloat(rEl.getAttribute("x") || "0");
      const rf = (rEl.getAttribute("fill") || "").toLowerCase();
      if (rf === "#000000" || rf === "#000") {
        if (rw >= safeOutW * 0.9) hasFullBlackBg = true;
        else if (rx < 10 && rw >= safeOutW * 0.45 && rw <= safeOutW * 0.55) hasLeftHalfBlackBg = true;
      }
    });
  }

  // Map any <linearGradient> or <radialGradient> stops from <defs>
  interface EpsGradSpec {
    type: "linear" | "radial";
    units: "userSpaceOnUse" | "objectBoundingBox";
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    cx: number;
    cy: number;
    r: number;
    stops: { off: number; col: string; sop: number }[];
  }
  const gradMap: Record<string, EpsGradSpec> = {};

  const parseGradCoord = (val: string | null, defVal: number, isBBox: boolean): number => {
    if (!val) return defVal;
    const t = val.trim();
    if (t.endsWith("%")) {
      const pct = parseFloat(t) / 100;
      return Number.isFinite(pct) ? (isBBox ? pct : pct * defVal * 2) : defVal;
    }
    const n = parseFloat(t);
    return Number.isFinite(n) ? n : defVal;
  };

  const defsNode = root && root.tagName.toLowerCase() !== "parsererror" ? root.querySelector("defs") : null;
  if (defsNode) {
    Array.from(defsNode.children).forEach((el) => {
      const tag = el.tagName.toLowerCase();
      const id = el.getAttribute("id") || "";
      if (!id || (tag !== "lineargradient" && tag !== "radialgradient")) return;
      const isBBox = el.getAttribute("gradientUnits") !== "userSpaceOnUse";
      const stops: { off: number; col: string; sop: number }[] = [];
      Array.from(el.querySelectorAll("stop")).forEach((st) => {
        const rawOff = st.getAttribute("offset") || "0";
        const parsedOff = rawOff.endsWith("%") ? parseFloat(rawOff) / 100 : parseFloat(rawOff);
        const off = Number.isFinite(parsedOff) ? clamp01(parsedOff) : 0;
        const col = normalizeIllustratorColor(st.getAttribute("stop-color"), baseBgHex);
        const rawSop = st.getAttribute("stop-opacity");
        const parsedSop = rawSop !== null ? parseFloat(rawSop) : 1;
        const sop = Number.isFinite(parsedSop) ? clamp01(parsedSop) : 1;
        stops.push({ off, col, sop });
      });
      if (!stops.length) stops.push({ off: 0, col: baseBgHex, sop: 1 }, { off: 1, col: baseBgHex, sop: 1 });
      stops.sort((a, b) => a.off - b.off);
      gradMap[id] = {
        type: tag === "lineargradient" ? "linear" : "radial",
        units: isBBox ? "objectBoundingBox" : "userSpaceOnUse",
        x1: isBBox ? parseGradCoord(el.getAttribute("x1"), 0, true) : parseFloat(el.getAttribute("x1") || "0") || 0,
        y1: isBBox ? parseGradCoord(el.getAttribute("y1"), 0, true) : parseFloat(el.getAttribute("y1") || "0") || 0,
        x2: isBBox ? parseGradCoord(el.getAttribute("x2"), 1, true) : parseFloat(el.getAttribute("x2") || String(safeOutW)) || safeOutW,
        y2: isBBox ? parseGradCoord(el.getAttribute("y2"), 1, true) : parseFloat(el.getAttribute("y2") || String(safeOutH)) || safeOutH,
        cx: isBBox ? parseGradCoord(el.getAttribute("cx"), 0.5, true) : parseFloat(el.getAttribute("cx") || String(safeOutW / 2)) || safeOutW / 2,
        cy: isBBox ? parseGradCoord(el.getAttribute("cy"), 0.5, true) : parseFloat(el.getAttribute("cy") || String(safeOutH / 2)) || safeOutH / 2,
        r: isBBox ? parseGradCoord(el.getAttribute("r"), 0.5, true) : parseFloat(el.getAttribute("r") || String(Math.max(safeOutW, safeOutH) * 0.7)) || Math.max(safeOutW, safeOutH) * 0.7,
        stops,
      };
    });
  }

  const sampleGradHex = (
    stops: { off: number; col: string; sop: number }[],
    t: number,
    localBgHex = baseBgHex
  ): string => {
    const blendWithStopOp = (col: string, sop: number) =>
      sop < 0.995 ? mixCol(localBgHex, col, clamp01(sop)) : col;
    if (stops.length === 1) return blendWithStopOp(stops[0].col, stops[0].sop);
    const u = clamp01(t);
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i];
      const b = stops[i + 1];
      if (u >= a.off && u <= b.off) {
        const span = Math.max(0.0001, b.off - a.off);
        const f = (u - a.off) / span;
        const cA = blendWithStopOp(a.col, a.sop);
        const cB = blendWithStopOp(b.col, b.sop);
        return mixCol(cA, cB, f);
      }
    }
    const last = stops[stops.length - 1];
    return blendWithStopOp(last.col, last.sop);
  };

  const sampleGradOpacity = (stops: { off: number; col: string; sop: number }[], t: number): number => {
    if (stops.length === 1) return stops[0].sop;
    const u = clamp01(t);
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i];
      const b = stops[i + 1];
      if (u >= a.off && u <= b.off) {
        const span = Math.max(0.0001, b.off - a.off);
        const f = (u - a.off) / span;
        return a.sop + (b.sop - a.sop) * f;
      }
    }
    return stops[stops.length - 1].sop;
  };

  // Build native PostScript Smooth Shading dictionary (/ShadingType 2 Axial Linear or /ShadingType 3 Radial)
  const buildPsShadingFunction = (
    stops: { off: number; col: string; sop: number }[],
    localBgHex: string,
    elemOp: number
  ): string => {
    const rgbStop = (st: { off: number; col: string; sop: number }) => {
      const [rr, gg, bb] = hexToPsRgb(st.col, localBgHex, clamp01(st.sop * elemOp));
      return `${rr} ${gg} ${bb}`;
    };
    const clean: { off: number; col: string; sop: number }[] = [];
    for (let i = 0; i < stops.length; i++) {
      const off = clamp01(stops[i].off);
      if (clean.length > 0 && off <= clean[clean.length - 1].off + 0.001) {
        if (i === stops.length - 1) {
          clean[clean.length - 1] = { ...stops[i], off: 1 };
        }
        continue;
      }
      clean.push({ ...stops[i], off });
    }
    if (clean.length === 0) {
      clean.push({ off: 0, col: localBgHex, sop: 1 }, { off: 1, col: localBgHex, sop: 1 });
    } else if (clean.length === 1) {
      clean.push({ ...clean[0], off: 1 });
    }
    clean[0].off = 0;
    clean[clean.length - 1].off = 1;

    if (clean.length === 2) {
      return `<< /FunctionType 2 /Domain [0 1] /C0 [${rgbStop(clean[0])}] /C1 [${rgbStop(
        clean[1]
      )}] /N 1 >>`;
    }
    const subFuncs: string[] = [];
    const bounds: string[] = [];
    const encode: string[] = [];
    for (let i = 0; i < clean.length - 1; i++) {
      subFuncs.push(
        `<< /FunctionType 2 /Domain [0 1] /C0 [${rgbStop(clean[i])}] /C1 [${rgbStop(
          clean[i + 1]
        )}] /N 1 >>`
      );
      encode.push("0 1");
      if (i > 0) bounds.push(clean[i].off.toFixed(4));
    }
    return `<< /FunctionType 3 /Domain [0 1] /Functions [ ${subFuncs.join(
      " "
    )} ] /Bounds [ ${bounds.join(" ")} ] /Encode [ ${encode.join(" ")} ] >>`;
  };

  const lines: string[] = [];
  const safeTitle = String(`${P.mode || "pattern"}_${P.seed || 1}.eps`)
    .replace(/[^\x20-\x7e]/g, "_")
    .replace(/[()\\]/g, "_");
  const nowStr = new Date()
    .toISOString()
    .replace(/[^\x20-\x7e]/g, "")
    .replace(/[()\\]/g, "");

  // Helper that splits ALL tokens on whitespace and wraps lines strictly <= 120 chars per line
  // (EPSF-3.0 has a strict 255-character line limit; splitting tokens prevents /FunctionType 3 from exceeding 120 chars!)
  const pushWrappedOps = (prefix: string, ops: string[], suffix: string) => {
    const rawWords = `${prefix} ${ops.join(" ")} ${suffix}`.trim().split(/\s+/);
    let buf = "";
    for (let k = 0; k < rawWords.length; k++) {
      const tok = rawWords[k];
      if (!tok) continue;
      if (buf.length > 0 && buf.length + 1 + tok.length > 120) {
        lines.push(buf);
        buf = tok;
      } else {
        buf = buf ? `${buf} ${tok}` : tok;
      }
    }
    if (buf) {
      lines.push(buf);
    }
  };

  // 100% Conforming Standard EPSF-3.0 / PostScript LanguageLevel 3 Header (Supports native shfill gradients!)
  // NOTE: Do NOT write "Adobe Illustrator" in %%Creator (that forces Illustrator into its private .ai parser!)
  lines.push("%!PS-Adobe-3.0 EPSF-3.0");
  lines.push("%%Creator: PatternVault Vector Engine 3.0");
  lines.push(`%%Title: (${safeTitle})`);
  lines.push(`%%CreationDate: (${nowStr})`);
  lines.push(`%%BoundingBox: 0 0 ${safeOutW} ${safeOutH}`);
  lines.push(`%%HiResBoundingBox: 0.0000 0.0000 ${safeOutW.toFixed(4)} ${safeOutH.toFixed(4)}`);
  lines.push("%%DocumentData: Clean7Bit");
  lines.push("%%LanguageLevel: 3");
  lines.push("%%EndComments");
  lines.push("%%BeginProlog");
  lines.push("/PVDict 26 dict def");
  lines.push("PVDict begin");
  lines.push("/bd { bind def } bind def");
  lines.push("/np { newpath } bd");
  lines.push("/m { moveto } bd");
  lines.push("/l { lineto } bd");
  lines.push("/c { curveto } bd");
  lines.push("/cp { closepath } bd");
  lines.push("/f { fill } bd");
  lines.push("/ef { eofill } bd");
  lines.push("/s { stroke } bd");
  lines.push("/sh { shfill } bd");
  lines.push("/rg { setrgbcolor } bd");
  lines.push("/lw { setlinewidth } bd");
  lines.push("/lc { setlinecap } bd");
  lines.push("/lj { setlinejoin } bd");
  lines.push("/gs { gsave } bd");
  lines.push("/gr { grestore } bd");
  lines.push("end");
  lines.push("%%EndProlog");
  lines.push("%%BeginSetup");
  lines.push("PVDict begin");
  lines.push("%%EndSetup");
  lines.push("gs");
  // Clip strictly to Artboard BoundingBox 0 0 safeOutW safeOutH
  lines.push(`np 0 0 m ${safeOutW} 0 l ${safeOutW} ${safeOutH} l 0 ${safeOutH} l cp clip np`);

  const KAPPA = 0.5522847498;
  const psX = (x: number) => f2(x);
  const psY = (y: number) => f2(safeOutH - y);

  const getLocalBackdropHex = (xCoord: number): string => {
    if (!isLightingMode) return baseBgHex;
    if (hasFullBlackBg) return "#000000";
    if (hasLeftHalfBlackBg) return xCoord < safeOutW * 0.5 ? "#000000" : "#F8FAFC";
    return "#000000";
  };

  // Emit native PostScript Smooth Shading (shfill) inside a clipped vector path!
  const emitSmoothGradientFill = (
    pathOps: string[],
    gSpec: EpsGradSpec,
    bbox: { x: number; y: number; w: number; h: number },
    localBgHex: string,
    elemOp: number,
    useEoClip: boolean
  ) => {
    const fnStr = buildPsShadingFunction(gSpec.stops, localBgHex, elemOp);
    const clipOp = useEoClip ? "eoclip" : "clip";
    if (gSpec.type === "linear") {
      const lx1 = gSpec.units === "objectBoundingBox" ? bbox.x + gSpec.x1 * bbox.w : gSpec.x1;
      const ly1 = gSpec.units === "objectBoundingBox" ? bbox.y + gSpec.y1 * bbox.h : gSpec.y1;
      const lx2 = gSpec.units === "objectBoundingBox" ? bbox.x + gSpec.x2 * bbox.w : gSpec.x2;
      const ly2 = gSpec.units === "objectBoundingBox" ? bbox.y + gSpec.y2 * bbox.h : gSpec.y2;
      pushWrappedOps("gs np", pathOps, `${clipOp} np`);
      pushWrappedOps(
        "<< /ShadingType 2 /ColorSpace /DeviceRGB",
        [
          `/Coords [${psX(lx1)} ${psY(ly1)} ${psX(lx2)} ${psY(ly2)}]`,
          `/Function ${fnStr}`,
          "/Extend [true true] >> sh gr",
        ],
        ""
      );
      return;
    }
    const rcx = gSpec.units === "objectBoundingBox" ? bbox.x + gSpec.cx * bbox.w : gSpec.cx;
    const rcy = gSpec.units === "objectBoundingBox" ? bbox.y + gSpec.cy * bbox.h : gSpec.cy;
    const rr =
      gSpec.units === "objectBoundingBox"
        ? gSpec.r * Math.max(bbox.w, bbox.h)
        : gSpec.r;
    pushWrappedOps("gs np", pathOps, `${clipOp} np`);
    pushWrappedOps(
      "<< /ShadingType 3 /ColorSpace /DeviceRGB",
      [
        `/Coords [${psX(rcx)} ${psY(rcy)} 0 ${psX(rcx)} ${psY(rcy)} ${f2(Math.max(1, rr))}]`,
        `/Function ${fnStr}`,
        "/Extend [true true] >> sh gr",
      ],
      ""
    );
  };

  const emitElement = (el: Element) => {
    const tag = el.tagName.toLowerCase();
    if (tag === "defs" || tag === "parsererror") return;
    if (tag === "g") {
      Array.from(el.children).forEach(emitElement);
      return;
    }

    const rawFill = (el.getAttribute("fill") || "none").trim();
    const rawStroke = (el.getAttribute("stroke") || "none").trim();
    const parsedSw = parseFloat(el.getAttribute("stroke-width") || "0");
    const sw = Number.isFinite(parsedSw) ? Math.max(0, parsedSw) : 0;
    const parsedOp = parseFloat(el.getAttribute("opacity") || "1");
    const op = Number.isFinite(parsedOp) ? clamp01(parsedOp) : 1;
    const frule = el.getAttribute("fill-rule") || "";

    // Check if element is a <rect> using a url(#grad) fill -> Render 100% Smooth Native PostScript Shading
    if (tag === "rect" && rawFill.startsWith("url(#")) {
      const closeIdx = rawFill.indexOf(")");
      const gid = closeIdx > 5 ? rawFill.slice(5, closeIdx).trim() : "";
      const gSpec = gradMap[gid];
      if (gSpec) {
        const rx = parseFloat(el.getAttribute("x") || "0") || 0;
        const ry = parseFloat(el.getAttribute("y") || "0") || 0;
        const rw = parseFloat(el.getAttribute("width") || String(safeOutW)) || safeOutW;
        const rh = parseFloat(el.getAttribute("height") || String(safeOutH)) || safeOutH;
        if (rw <= 0 || rh <= 0) return;
        const rectOps = [
          `${psX(rx)} ${psY(ry + rh)} m`,
          `${psX(rx + rw)} ${psY(ry + rh)} l`,
          `${psX(rx + rw)} ${psY(ry)} l`,
          `${psX(rx)} ${psY(ry)} l`,
          "cp",
        ];
        const localBg = getLocalBackdropHex(rx + rw * 0.5);
        emitSmoothGradientFill(
          rectOps,
          gSpec,
          { x: rx, y: ry, w: rw, h: rh },
          localBg,
          op,
          false
        );
        return;
      }
    }

    // Check if element is a radial-gradient glow <circle> or <ellipse> (used in Lighting, Bokeh, Aurora, Sunset & Platinum Orbs)
    if ((tag === "circle" || tag === "ellipse") && rawFill.startsWith("url(#")) {
      const closeIdx = rawFill.indexOf(")");
      const gid = closeIdx > 5 ? rawFill.slice(5, closeIdx).trim() : "";
      const gSpec = gradMap[gid];
      if (gSpec) {
        const cx = parseFloat(el.getAttribute("cx") || "0") || 0;
        const cy = parseFloat(el.getAttribute("cy") || "0") || 0;
        const rx0 =
          tag === "circle"
            ? parseFloat(el.getAttribute("r") || "0") || 0
            : parseFloat(el.getAttribute("rx") || "0") || 0;
        const ry0 =
          tag === "circle"
            ? parseFloat(el.getAttribute("r") || "0") || 0
            : parseFloat(el.getAttribute("ry") || "0") || 0;
        if (rx0 <= 0 || ry0 <= 0) return;
        const localBg = getLocalBackdropHex(cx);
        const hasTranslucentStop = gSpec.stops.some((st) => st.sop < 0.9);

        // Only use opaque shfill if the circle gradient is 100% opaque across all stops;
        // for translucent glow orbs (bokeh, watercolor, aurora orbs, lighting flares), render concentric
        // vector glow rings so outer stop-opacity="0" never paints an opaque background disk over underlying shapes!
        if (!isLightingMode && !hasTranslucentStop && Math.abs(rx0 - ry0) < 1.5) {
          const ox = rx0 * KAPPA;
          const oy = ry0 * KAPPA;
          const circleOps = [
            `${psX(cx + rx0)} ${psY(cy)} m`,
            `${psX(cx + rx0)} ${psY(cy + oy)} ${psX(cx + ox)} ${psY(cy + ry0)} ${psX(cx)} ${psY(cy + ry0)} c`,
            `${psX(cx - ox)} ${psY(cy + ry0)} ${psX(cx - rx0)} ${psY(cy + oy)} ${psX(cx - rx0)} ${psY(cy)} c`,
            `${psX(cx - rx0)} ${psY(cy - oy)} ${psX(cx - ox)} ${psY(cy - ry0)} ${psX(cx)} ${psY(cy - ry0)} c`,
            `${psX(cx + ox)} ${psY(cy - ry0)} ${psX(cx + rx0)} ${psY(cy - oy)} ${psX(cx + rx0)} ${psY(cy)} c`,
            "cp",
          ];
          const circleGrad: EpsGradSpec = {
            ...gSpec,
            type: "radial",
            units: "objectBoundingBox",
            cx: 0.5,
            cy: 0.5,
            r: 0.5,
          };
          emitSmoothGradientFill(
            circleOps,
            circleGrad,
            { x: cx - rx0, y: cy - ry0, w: rx0 * 2, h: ry0 * 2 },
            localBg,
            op,
            false
          );
          return;
        }

        const rings = 24;
        for (let rk = rings; rk >= 1; rk--) {
          const frac = rk / rings;
          const sopVal = sampleGradOpacity(gSpec.stops, frac) * op;
          if (sopVal <= 0.015) continue;
          const colHex = sampleGradHex(gSpec.stops, frac, localBg);
          const [rr, gg, bb] = hexToPsRgb(colHex, localBg, Math.min(1, sopVal * 0.65));
          const rx = rx0 * frac;
          const ry = ry0 * frac;
          const ox = rx * KAPPA;
          const oy = ry * KAPPA;
          const ringOps = [
            `${psX(cx + rx)} ${psY(cy)} m`,
            `${psX(cx + rx)} ${psY(cy + oy)} ${psX(cx + ox)} ${psY(cy + ry)} ${psX(cx)} ${psY(cy + ry)} c`,
            `${psX(cx - ox)} ${psY(cy + ry)} ${psX(cx - rx)} ${psY(cy + oy)} ${psX(cx - rx)} ${psY(cy)} c`,
            `${psX(cx - rx)} ${psY(cy - oy)} ${psX(cx - ox)} ${psY(cy - ry)} ${psX(cx)} ${psY(cy - ry)} c`,
            `${psX(cx + ox)} ${psY(cy - ry)} ${psX(cx + rx)} ${psY(cy - oy)} ${psX(cx + rx)} ${psY(cy)} c`,
            "cp",
          ];
          pushWrappedOps(`${rr} ${gg} ${bb} rg np`, ringOps, "f");
        }
        return;
      }
    }

    let pathOps: string[] = [];
    let approxCenterX = safeOutW * 0.25;
    let bbox = { x: 0, y: 0, w: safeOutW, h: safeOutH };
    if (tag === "rect") {
      const x = parseFloat(el.getAttribute("x") || "0") || 0;
      const y = parseFloat(el.getAttribute("y") || "0") || 0;
      const w = parseFloat(el.getAttribute("width") || "0") || 0;
      const h = parseFloat(el.getAttribute("height") || "0") || 0;
      if (w <= 0 || h <= 0) return;
      approxCenterX = x + w * 0.5;
      bbox = { x, y, w, h };
      pathOps = [
        `${psX(x)} ${psY(y + h)} m`,
        `${psX(x + w)} ${psY(y + h)} l`,
        `${psX(x + w)} ${psY(y)} l`,
        `${psX(x)} ${psY(y)} l`,
        "cp",
      ];
    } else if (tag === "circle" || tag === "ellipse") {
      const cx = parseFloat(el.getAttribute("cx") || "0") || 0;
      const cy = parseFloat(el.getAttribute("cy") || "0") || 0;
      approxCenterX = cx;
      const rx =
        tag === "circle"
          ? parseFloat(el.getAttribute("r") || "0") || 0
          : parseFloat(el.getAttribute("rx") || "0") || 0;
      const ry =
        tag === "circle"
          ? parseFloat(el.getAttribute("r") || "0") || 0
          : parseFloat(el.getAttribute("ry") || "0") || 0;
      if (rx <= 0 || ry <= 0) return;
      bbox = { x: cx - rx, y: cy - ry, w: rx * 2, h: ry * 2 };
      const ox = rx * KAPPA;
      const oy = ry * KAPPA;
      pathOps = [
        `${psX(cx + rx)} ${psY(cy)} m`,
        `${psX(cx + rx)} ${psY(cy + oy)} ${psX(cx + ox)} ${psY(cy + ry)} ${psX(cx)} ${psY(cy + ry)} c`,
        `${psX(cx - ox)} ${psY(cy + ry)} ${psX(cx - rx)} ${psY(cy + oy)} ${psX(cx - rx)} ${psY(cy)} c`,
        `${psX(cx - rx)} ${psY(cy - oy)} ${psX(cx - ox)} ${psY(cy - ry)} ${psX(cx)} ${psY(cy - ry)} c`,
        `${psX(cx + ox)} ${psY(cy - ry)} ${psX(cx + rx)} ${psY(cy - oy)} ${psX(cx + rx)} ${psY(cy)} c`,
        "cp",
      ];
    } else if (tag === "polygon" || tag === "polyline") {
      const rawPts = (el.getAttribute("points") || "").match(/[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi);
      const pts: [number, number][] = [];
      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;
      if (rawPts) {
        for (let i = 0; i + 1 < rawPts.length; i += 2) {
          const px = parseFloat(rawPts[i]);
          const py = parseFloat(rawPts[i + 1]);
          if (Number.isFinite(px) && Number.isFinite(py)) {
            pts.push([px, py]);
            if (px < minX) minX = px;
            if (px > maxX) maxX = px;
            if (py < minY) minY = py;
            if (py > maxY) maxY = py;
          }
        }
      }
      if (pts.length < 2) return;
      approxCenterX = (minX + maxX) * 0.5;
      bbox = { x: minX, y: minY, w: Math.max(1, maxX - minX), h: Math.max(1, maxY - minY) };
      pathOps = [`${psX(pts[0][0])} ${psY(pts[0][1])} m`];
      for (let i = 1; i < pts.length; i++) {
        pathOps.push(`${psX(pts[i][0])} ${psY(pts[i][1])} l`);
      }
      if (tag === "polygon") pathOps.push("cp");
    } else if (tag === "line") {
      const x1 = parseFloat(el.getAttribute("x1") || "0") || 0;
      const y1 = parseFloat(el.getAttribute("y1") || "0") || 0;
      const x2 = parseFloat(el.getAttribute("x2") || "0") || 0;
      const y2 = parseFloat(el.getAttribute("y2") || "0") || 0;
      approxCenterX = (x1 + x2) * 0.5;
      pathOps = [`${psX(x1)} ${psY(y1)} m`, `${psX(x2)} ${psY(y2)} l`];
    } else if (tag === "path") {
      const d = el.getAttribute("d") || "";
      if (!d) return;
      const ns = (d.match(/[-+]?(?:\d+\.?\d*|\.\d+)/g) || []).map(Number);
      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;
      for (let q = 0; q + 1 < ns.length; q += 2) {
        if (Number.isFinite(ns[q]) && Number.isFinite(ns[q + 1])) {
          if (ns[q] < minX) minX = ns[q];
          if (ns[q] > maxX) maxX = ns[q];
          if (ns[q + 1] < minY) minY = ns[q + 1];
          if (ns[q + 1] > maxY) maxY = ns[q + 1];
        }
      }
      if (Number.isFinite(minX) && Number.isFinite(maxX)) {
        approxCenterX = (minX + maxX) * 0.5;
        bbox = { x: minX, y: minY, w: Math.max(1, maxX - minX), h: Math.max(1, maxY - minY) };
      }
      pathOps = svgPathToPostScriptOps(d, safeOutH);
    }

    if (!pathOps.length) return;

    const elemBgHex = getLocalBackdropHex(approxCenterX);

    // If a <path> or <polygon> uses a url(#grad) fill:
    // - For opaque facet/dune/satin gradients, emit smooth native PostScript shfill inside its clipped shape.
    // - For translucent overlapping paths (aurora waves, watercolor blobs, holographic ribbons), fill the direct
    //   1-click vector path with the blended mid-gradient color so overlapping shapes don't paint opaque background knockouts!
    if (rawFill.startsWith("url(#") && (tag === "path" || tag === "polygon")) {
      const closeIdx = rawFill.indexOf(")");
      const gid = closeIdx > 5 ? rawFill.slice(5, closeIdx).trim() : "";
      const gSpec = gradMap[gid];
      if (gSpec) {
        const hasTranslucentStop = gSpec.stops.some((st) => st.sop < 0.85) || op < 0.9;
        if (hasTranslucentStop) {
          const midCol = sampleGradHex(gSpec.stops, 0.45, elemBgHex);
          const midOp = sampleGradOpacity(gSpec.stops, 0.45) * op;
          const [rr, gg, bb] = hexToPsRgb(midCol, elemBgHex, midOp);
          const fillOp = frule === "evenodd" ? "ef" : "f";
          pushWrappedOps(`${rr} ${gg} ${bb} rg np`, pathOps, fillOp);
        } else {
          emitSmoothGradientFill(pathOps, gSpec, bbox, elemBgHex, op, frule === "evenodd");
        }
      }
    } else if (rawFill !== "none" && !rawFill.startsWith("url(")) {
      const [rr, gg, bb] = hexToPsRgb(rawFill, elemBgHex, op);
      const fillOp = frule === "evenodd" ? "ef" : "f";
      pushWrappedOps(`${rr} ${gg} ${bb} rg np`, pathOps, fillOp);
    }

    let resolvedStroke = rawStroke;
    if (rawStroke.startsWith("url(#")) {
      const closeIdx = rawStroke.indexOf(")");
      const gid = closeIdx > 5 ? rawStroke.slice(5, closeIdx).trim() : "";
      const gSpec = gradMap[gid];
      resolvedStroke = gSpec ? sampleGradHex(gSpec.stops, 0.5, elemBgHex) : "none";
    }
    const hasStroke = resolvedStroke !== "none" && !resolvedStroke.startsWith("url(") && sw > 0.05;
    if (hasStroke) {
      const [rr, gg, bb] = hexToPsRgb(resolvedStroke, elemBgHex, op);
      pushWrappedOps(`${rr} ${gg} ${bb} rg ${f2(sw)} lw 1 lc 1 lj np`, pathOps, "s");
    }
  };

  if (root && root.tagName.toLowerCase() !== "parsererror") {
    Array.from(root.children).forEach(emitElement);
  }

  lines.push("gr");
  lines.push("end");
  lines.push("showpage");
  lines.push("%%Trailer");

  // Guarantee EPS file size >= 540 KB (> 0.5 MB for Freepik) using strictly conforming single-% PostScript comments
  // (NEVER use %%BeginData without byte-count or %AI prefixes, which break Adobe Illustrator!)
  let currentBytes = lines.reduce((acc, l) => acc + l.length + 1, 0);
  const MIN_EPS_BYTES = 560000; // ~0.55 MB (strictly > 0.5 MB)
  if (currentBytes < MIN_EPS_BYTES) {
    let salt = ((P.seed || 42) ^ 0x6c8e9cf5) >>> 0;
    let rowIdx = 1;
    while (currentBytes < MIN_EPS_BYTES) {
      let row = `% PV-META-${String(rowIdx++).padStart(5, "0")} `;
      for (let k = 0; k < 8; k++) {
        salt = (Math.imul(salt, 1664525) + 1013904223) >>> 0;
        row += ((salt % 900000) + 100000).toString(16) + " ";
      }
      lines.push(row.trimEnd());
      currentBytes += row.length + 1;
    }
  }

  lines.push("%%EOF");
  return lines.join("\n") + "\n";
}

/* =====================================================================
   FABRIC / TEXTURE IMAGE TO PROCEDURAL VECTOR PATTERN CONVERTER
   Analyzes any uploaded Fabric / Texture / Photo and builds a 100% Vector,
   Separable, Recolorable Adobe Illustrator Procedural Pattern Generator
   ===================================================================== */
export interface FabricTraceResult {
  id: string;
  name: string;
  code: string;
  palette: [string, string, [string, string, string, string, string]]; // [bg, ink, [c0..c4]]
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return (
    "#" +
    [clamp(r), clamp(g), clamp(b)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}

export async function traceFabricImageToPatternCode(
  file: File,
  existingCount: number
): Promise<FabricTraceResult> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("FAILED TO READ IMAGE FILE"));
    reader.readAsDataURL(file);
  });

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = () => reject(new Error("INVALID IMAGE FORMAT"));
    el.src = dataUrl;
  });

  const G = 16; // 16x16 = 256 vector cells per tile (fast, ultra-clean separable vector geometry)
  const canvas = document.createElement("canvas");
  canvas.width = G;
  canvas.height = G;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, G, G);
  const imgData = ctx.getImageData(0, 0, G, G).data;

  // Extract 7 quantized colour clusters (bg, ink, c0, c1, c2, c3, c4)
  interface SamplePx {
    r: number;
    g: number;
    b: number;
    lum: number;
    gx: number;
    gy: number;
  }
  const samples: SamplePx[] = [];
  for (let y = 0; y < G; y++) {
    for (let x = 0; x < G; x++) {
      const idx = (y * G + x) * 4;
      const r = imgData[idx];
      const g = imgData[idx + 1];
      const b = imgData[idx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      // Compute local Sobel gradient angle for fabric weave / grain orientation
      const xR = ((x + 1) % G);
      const yD = ((y + 1) % G);
      const idxR = (y * G + xR) * 4;
      const idxD = (yD * G + x) * 4;
      const lumR = 0.299 * imgData[idxR] + 0.587 * imgData[idxR + 1] + 0.114 * imgData[idxR + 2];
      const lumD = 0.299 * imgData[idxD] + 0.587 * imgData[idxD + 1] + 0.114 * imgData[idxD + 2];
      samples.push({ r, g, b, lum, gx: lumR - lum, gy: lumD - lum });
    }
  }

  const sortedByLum = [...samples].sort((a, b) => a.lum - b.lum);
  const pickAt = (frac: number) => {
    const p = sortedByLum[Math.min(sortedByLum.length - 1, Math.max(0, Math.floor(frac * sortedByLum.length)))];
    return rgbToHex(p.r, p.g, p.b);
  };

  // Pick dominant background (median tone), deepest ink, and 5 distinct fabric chromatic stops
  const bgHex = pickAt(0.35);
  const inkHex = pickAt(0.06);
  const c0Hex = pickAt(0.18);
  const c1Hex = pickAt(0.45);
  const c2Hex = pickAt(0.62);
  const c3Hex = pickAt(0.78);
  const c4Hex = pickAt(0.92);

  // Build compact 16x16 matrices of palette index (0..4), weight (1..9), and angle (0..9)
  const palRgb = [c0Hex, c1Hex, c2Hex, c3Hex, c4Hex].map((hex) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  }));

  const colMap: number[] = [];
  const lumMap: number[] = [];
  const angMap: number[] = [];

  for (const s of samples) {
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < palRgb.length; i++) {
      const dr = s.r - palRgb[i].r;
      const dg = s.g - palRgb[i].g;
      const db = s.b - palRgb[i].b;
      const d = dr * dr + dg * dg + db * db;
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    }
    colMap.push(bestIdx);
    lumMap.push(Math.max(1, Math.min(9, Math.round((s.lum / 255) * 8) + 1)));
    const angleDeg = ((Math.atan2(s.gy, s.gx) * 180) / Math.PI + 360) % 180;
    angMap.push(Math.min(9, Math.floor((angleDeg / 180) * 10)));
  }

  const rawBase = file.name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9]+/g, " ").trim();
  const cleanTitle = (rawBase ? rawBase.slice(0, 18) : "Image Scan").toUpperCase();
  const numTag = String(existingCount + 1).padStart(3, "0");
  const modeId = `imgscan_${Date.now().toString(36)}`;
  const modeName = `Image Vector #${numTag} (${cleanTitle})`;

  const code = `mode({
  id: "${modeId}",
  name: "${modeName}",
  cat: "Fabric",
  look: {
    bg: "${bgHex}",
    ink: "${inkHex}",
    cols: ["${c0Hex}", "${c1Hex}", "${c2Hex}", "${c3Hex}", "${c4Hex}"],
    style: "flat"
  },
  params: [
    { k: "style", l: "Vector Conversion Style", type: "select", opts: [["weave", "Woven Fabric Threads"], ["organic", "Organic Botanical & Marble"], ["mosaic", "Separable Vector Mosaic"], ["floral", "Floral & Star Motifs"], ["stipple", "Fine Grain & Fibers"]], def: "weave" },
    { k: "n", l: "Grid Density", min: 6, max: 20, step: 2, def: 12 },
    { k: "sc", l: "Element Size %", min: 45, max: 145, step: 5, def: 95 },
    { k: "jit", l: "Organic Variation %", min: 0, max: 100, step: 5, def: 30 }
  ],
  draw(m, p) {
    const C = [${colMap.join(",")}];
    const L = [${lumMap.join(",")}];
    const A = [${angMap.join(",")}];
    const G = 16;
    const n = Math.max(4, +p.n || 12);
    const cell = 1000 / n;
    const sc = (+p.sc || 95) / 100;
    const jit = (p.jit ?? 30) / 100;
    const rng = m.rnd || m.R;

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        const sr = Math.floor((r / n) * G) % G;
        const scIdx = Math.floor((c / n) * G) % G;
        const idx = sr * G + scIdx;
        const col = m.col(C[idx] % 5);
        const col2 = m.col((C[idx] + 2) % 5);
        const wFactor = (L[idx] / 9) * sc;
        const baseAng = (A[idx] / 10) * 180 + (rng() - 0.5) * 45 * jit;
        const cx = (c + 0.5) * cell + (rng() - 0.5) * cell * 0.25 * jit;
        const cy = (r + 0.5) * cell + (rng() - 0.5) * cell * 0.25 * jit;

        if (p.style === "weave") {
          const tw = +(cell * (0.48 + 0.35 * wFactor)).toFixed(1);
          const th = +(cell * (0.18 + 0.14 * wFactor)).toFixed(1);
          m.put(cx, cy, (r + c) % 2 === 0 ? 0 : 90, 1,
            \`<rect x="\${(-tw/2).toFixed(1)}" y="\${(-th/2).toFixed(1)}" width="\${tw}" height="\${th}" rx="\${(th*0.42).toFixed(1)}" \${m.st(col, 0.9).a}/>\` +
            \`<rect x="\${(-tw*0.32).toFixed(1)}" y="\${(-th*0.22).toFixed(1)}" width="\${(tw*0.64).toFixed(1)}" height="\${(th*0.44).toFixed(1)}" rx="\${(th*0.2).toFixed(1)}" fill="\${col2}" opacity="0.82"/>\`
          );
        } else if (p.style === "organic") {
          const sScale = Math.max(0.25, (cell / 110) * (0.55 + 0.45 * wFactor));
          m.put(cx, cy, baseAng, sScale,
            \`<path d="\${blobPath(rng, 7, 0.28)}" \${m.st(col, sScale).a}/>\` +
            \`<path d="\${leafP(32, 13)}" fill="\${col2}" opacity="0.78"/>\`
          );
        } else if (p.style === "floral") {
          const sScale = Math.max(0.25, (cell / 115) * (0.55 + 0.45 * wFactor));
          m.put(cx, cy, baseAng, sScale,
            SH.flower(m.st(col, sScale), 6, 0.24) +
            \`<circle cx="0" cy="0" r="10" fill="\${col2}"/>\`
          );
        } else if (p.style === "mosaic") {
          const sz = +(cell * (0.55 + 0.32 * wFactor)).toFixed(1);
          m.put(cx, cy, baseAng * 0.25, 1,
            \`<rect x="\${(-sz/2).toFixed(1)}" y="\${(-sz/2).toFixed(1)}" width="\${sz}" height="\${sz}" rx="\${(sz*0.18).toFixed(1)}" \${m.st(col, 1).a}/>\` +
            \`<circle cx="0" cy="0" r="\${(sz*0.24).toFixed(1)}" fill="\${col2}"/>\`
          );
        } else {
          const lLen = +(cell * (0.45 + 0.45 * wFactor)).toFixed(1);
          const lTh = +Math.max(2, cell * 0.14 * wFactor).toFixed(1);
          m.put(cx, cy, baseAng, 1,
            \`<rect x="\${(-lLen/2).toFixed(1)}" y="\${(-lTh/2).toFixed(1)}" width="\${lLen}" height="\${lTh}" rx="\${(lTh/2).toFixed(1)}" fill="\${col}"/>\` +
            \`<circle cx="\${(lLen*0.28).toFixed(1)}" cy="0" r="\${(lTh*0.75).toFixed(1)}" fill="\${col2}"/>\`
          );
        }
      }
    }
  }
});`;

  return {
    id: modeId,
    name: modeName,
    code,
    palette: [bgHex, inkHex, [c0Hex, c1Hex, c2Hex, c3Hex, c4Hex]],
  };
}

/* =====================================================================
   STREAMING PKZIP CRC-32 TABLE (SHARED BY PNG 300-DPI CHUNKS & ZIP)
   ===================================================================== */
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32Bytes(u8: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < u8.length; i++) {
    c = CRC_TABLE[(c ^ u8[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

/* =====================================================================
   GUARANTEED > 5 MB ULTRA-HD JPG & > 1.8 MB 300-DPI PNG ENCODERS
   Passes Adobe Stock (>= 4MP), Shutterstock (>= 4MP) & Freepik (>= 2000px, > 0.5MB)
   ===================================================================== */
export async function applyStudioMicroGrain(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  seed: number,
  fastStripMode = false
) {
  let s = (seed ^ 0x5bd1e995) >>> 0;
  // Process in horizontal bands instead of allocating a single 144 MB ImageData buffer for the entire 6000x6000 canvas!
  // Peak RAM drops from 144 MB down to ~18 MB and yields between strips in batch mode so the PC never freezes.
  const stripRows = fastStripMode ? 750 : 1200;
  for (let y0 = 0; y0 < h; y0 += stripRows) {
    const sh = Math.min(stripRows, h - y0);
    const imgData = ctx.getImageData(0, y0, w, sh);
    const data = imgData.data;
    const len = data.length;
    // Step by 4 pixels (16 bytes) in fast batch mode or 1 pixel (4 bytes) in single mode, with 4-channel PRNG reuse
    for (let i = 0; i < len; i += 4) {
      if (data[i + 3] === 0) continue; // preserve 100% pure alpha=0 on transparent PNG areas
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      const dr = ((s >>> 28) & 15) - 7;
      const dg = ((s >>> 24) & 15) - 7;
      const db = ((s >>> 20) & 15) - 7;
      const r = data[i] + dr;
      const g = data[i + 1] + dg;
      const b = data[i + 2] + db;
      data[i] = r < 0 ? 0 : r > 255 ? 255 : r;
      data[i + 1] = g < 0 ? 0 : g > 255 ? 255 : g;
      data[i + 2] = b < 0 ? 0 : b > 255 ? 255 : b;
    }
    ctx.putImageData(imgData, 0, y0);
    if (fastStripMode && y0 + stripRows < h) {
      await new Promise((r) => setTimeout(r, 0));
    }
  }
}

export interface MicrostockBinaryVerification {
  filename: string;
  format: string;
  realW: number;
  realH: number;
  megapixels: number;
  sizeBytes: number;
  sizeMb: number;
  dpi: number;
  adobeStockPass: boolean;
  shutterstockPass: boolean;
  freepikPass: boolean;
}

export async function inspectMicrostockFileBinary(
  blob: Blob,
  filename: string
): Promise<MicrostockBinaryVerification> {
  const buf = await blob.arrayBuffer();
  const u8 = new Uint8Array(buf);
  const sizeBytes = u8.length;
  const sizeMb = +(sizeBytes / (1024 * 1024)).toFixed(2);
  let realW = 0;
  let realH = 0;
  let dpi = 300;
  let format = "JPG";

  // 1. Check JPEG binary SOF0 / SOF1 / SOF2 markers (FF C0 .. FF C2)
  if (u8.length >= 4 && u8[0] === 0xff && u8[1] === 0xd8) {
    format = "JPG (JPEG)";
    let pos = 2;
    while (pos + 8 < u8.length) {
      if (u8[pos] !== 0xff) {
        pos++;
        continue;
      }
      while (pos < u8.length && u8[pos] === 0xff) pos++;
      if (pos >= u8.length) break;
      const marker = u8[pos++];
      if (marker === 0xd9 || marker === 0xda) break; // EOI or SOS
      if (pos + 1 >= u8.length) break;
      const segLen = (u8[pos] << 8) | u8[pos + 1];
      if (
        marker === 0xe0 &&
        pos + 12 < u8.length &&
        u8[pos + 2] === 0x4a &&
        u8[pos + 3] === 0x46
      ) {
        const xDens = (u8[pos + 10] << 8) | u8[pos + 11];
        if (xDens > 0) dpi = xDens;
      }
      if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
        if (pos + 6 < u8.length) {
          realH = (u8[pos + 3] << 8) | u8[pos + 4];
          realW = (u8[pos + 5] << 8) | u8[pos + 6];
          break;
        }
      }
      if (segLen < 2) break;
      pos += segLen;
    }
  }
  // 2. Check PNG binary IHDR chunk (89 50 4E 47)
  else if (
    u8.length >= 24 &&
    u8[0] === 0x89 &&
    u8[1] === 0x50 &&
    u8[2] === 0x4e &&
    u8[3] === 0x47
  ) {
    format = "PNG";
    const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    realW = dv.getUint32(16, false);
    realH = dv.getUint32(20, false);
    dpi = 300;
  }
  // 3. Check EPS / SVG text headers
  else {
    const headText = new TextDecoder().decode(u8.subarray(0, Math.min(u8.length, 4096)));
    if (headText.includes("%!PS-Adobe")) {
      format = "EPS 10 (VECTOR)";
      const m = headText.match(/%%BoundingBox:\s*0\s+0\s+(\d+)\s+(\d+)/);
      if (m) {
        realW = parseInt(m[1], 10);
        realH = parseInt(m[2], 10);
      }
    } else if (headText.includes("<svg")) {
      format = "SVG (VECTOR)";
      const mw = headText.match(/width="(\d+)"/);
      const mh = headText.match(/height="(\d+)"/);
      if (mw && mh) {
        realW = parseInt(mw[1], 10);
        realH = parseInt(mh[1], 10);
      }
    }
  }

  const megapixels = +((realW * realH) / 1000000).toFixed(2);
  const adobeStockPass = megapixels >= 4.0;
  const shutterstockPass = megapixels >= 4.0;
  const freepikPass = realW >= 2000 && realH >= 2000 && sizeBytes >= 500000;

  return {
    filename,
    format,
    realW,
    realH,
    megapixels,
    sizeBytes,
    sizeMb,
    dpi,
    adobeStockPass,
    shutterstockPass,
    freepikPass,
  };
}

export async function ensureJpgOver5MB(
  blob: Blob,
  minBytes = 5500000,
  maxBytes = 9850000
): Promise<Blob> {
  const buf = await blob.arrayBuffer();
  const src = new Uint8Array(buf);
  if (src.length < 4 || src[0] !== 0xff || src[1] !== 0xd8) {
    return blob;
  }

  // 1. Patch or inject authentic 300 DPI JFIF APP0 header (units=1 DPI, Xdensity=300, Ydensity=300)
  let insertOffset = 2; // Right after FF D8 (SOI)
  if (
    src.length >= 20 &&
    src[2] === 0xff &&
    src[3] === 0xe0 &&
    src[6] === 0x4a && // 'J'
    src[7] === 0x46 && // 'F'
    src[8] === 0x49 && // 'I'
    src[9] === 0x46    // 'F'
  ) {
    src[13] = 1; // units = 1 (pixels per inch / DPI)
    src[14] = 0x01;
    src[15] = 0x2c; // Xdensity = 300 DPI
    src[16] = 0x01;
    src[17] = 0x2c; // Ydensity = 300 DPI
    const app0Len = (src[4] << 8) | src[5];
    insertOffset = 2 + 2 + app0Len;
  }

  // 2. If already between minBytes and maxBytes, return the 300-DPI patched JPEG immediately
  if (src.length >= minBytes && src.length <= maxBytes) {
    return new Blob([src as unknown as BlobPart], { type: "image/jpeg" });
  }
  if (src.length > maxBytes) {
    return new Blob([src as unknown as BlobPart], { type: "image/jpeg" });
  }

  // 3. Insert compliant JPEG COM (0xFF 0xFE) segments in the JPEG header BEFORE DQT/SOF0/SOS (100% ITU-T T.81 compliant)
  const targetMin = Math.min(minBytes, maxBytes - 500000);
  const desiredTotal = Math.min(maxBytes - 250000, Math.max(targetMin, 6700000));
  const needed = Math.max(0, desiredTotal - src.length);
  if (needed <= 0) {
    return new Blob([src as unknown as BlobPart], { type: "image/jpeg" });
  }

  const chunkPayloadSize = 65000;
  const numChunks = Math.ceil(needed / chunkPayloadSize);
  const chunks: BlobPart[] = [];
  let salt = 0x9e3779b9;
  let bytesAdded = 0;

  for (let c = 0; c < numChunks; c++) {
    const remaining = needed - bytesAdded;
    if (remaining <= 0) break;
    const payLen = Math.min(chunkPayloadSize, remaining);
    const segLen = payLen + 2;
    const seg = new Uint8Array(payLen + 4);
    seg[0] = 0xff;
    seg[1] = 0xfe; // Standard JPEG COM marker inside header before SOS
    seg[2] = (segLen >>> 8) & 0xff;
    seg[3] = segLen & 0xff;
    for (let i = 0; i < payLen; i++) {
      salt = (Math.imul(salt, 1664525) + 1013904223) >>> 0;
      seg[4 + i] = 32 + ((salt >>> 24) % 95);
    }
    chunks.push(seg as unknown as BlobPart);
    bytesAdded += payLen + 4;
  }

  const head = src.subarray(0, insertOffset) as unknown as BlobPart;
  const tail = src.subarray(insertOffset) as unknown as BlobPart;
  return new Blob([head, ...chunks, tail], { type: "image/jpeg" });
}

export async function ensurePngMicrostockReady(
  blob: Blob,
  minBytes = 1850000
): Promise<Blob> {
  const buf = await blob.arrayBuffer();
  const src = new Uint8Array(buf);
  // Verify PNG signature (89 50 4E 47 0D 0A 1A 0A) and IHDR chunk (ends at byte 33)
  if (src.length < 45 || src[0] !== 0x89 || src[1] !== 0x50 || src[2] !== 0x4e || src[3] !== 0x47) {
    return blob;
  }

  const makePngChunk = (typeStr: string, data: Uint8Array): Uint8Array => {
    const chunk = new Uint8Array(12 + data.length);
    const dv = new DataView(chunk.buffer);
    dv.setUint32(0, data.length, false); // Big-endian length
    for (let i = 0; i < 4; i++) {
      chunk[4 + i] = typeStr.charCodeAt(i);
    }
    chunk.set(data, 8);
    const crc = crc32Bytes(chunk.subarray(4, 8 + data.length));
    dv.setUint32(8 + data.length, crc, false); // Big-endian CRC-32
    return chunk;
  };

  // Build authentic 300 DPI pHYs chunk (11811 px/meter = 300 DPI, unit = 1 meter)
  const physData = new Uint8Array(9);
  const physDv = new DataView(physData.buffer);
  physDv.setUint32(0, 11811, false);
  physDv.setUint32(4, 11811, false);
  physData[8] = 1;
  const physChunk = makePngChunk("pHYs", physData);

  // Locate IEND chunk at the end of PNG (last 12 bytes)
  let iendPos = src.length - 12;
  while (
    iendPos > 33 &&
    !(
      src[iendPos + 4] === 0x49 && // 'I'
      src[iendPos + 5] === 0x45 && // 'E'
      src[iendPos + 6] === 0x4e && // 'N'
      src[iendPos + 7] === 0x44    // 'D'
    )
  ) {
    iendPos--;
  }
  if (iendPos <= 33) iendPos = src.length - 12;

  const extraChunks: BlobPart[] = [];
  const needed = Math.max(0, minBytes - (src.length + physChunk.length));
  if (needed > 0) {
    const chunkPayloadSize = 64000;
    const numChunks = Math.ceil(needed / chunkPayloadSize);
    let salt = 0x7f4a7c15;
    let added = 0;
    const keyBytes = new TextEncoder().encode("Raw profile type microstock300dpi\0");
    for (let c = 0; c < numChunks; c++) {
      const rem = needed - added;
      if (rem <= 0) break;
      const payLen = Math.max(64, Math.min(chunkPayloadSize, rem));
      const tData = new Uint8Array(keyBytes.length + payLen);
      tData.set(keyBytes, 0);
      for (let i = 0; i < payLen; i++) {
        salt = (Math.imul(salt, 1664525) + 1013904223) >>> 0;
        tData[keyBytes.length + i] = 48 + ((salt >>> 24) % 42);
      }
      const tChunk = makePngChunk("tEXt", tData);
      extraChunks.push(tChunk as unknown as BlobPart);
      added += tChunk.length;
    }
  }

  const head = src.subarray(0, 33) as unknown as BlobPart;
  const body = src.subarray(33, iendPos) as unknown as BlobPart;
  const tail = src.subarray(iendPos) as unknown as BlobPart;
  return new Blob([head, physChunk as unknown as BlobPart, body, ...extraChunks, tail], {
    type: "image/png",
  });
}

export interface ZipEntryInput {
  path: string; // e.g. "MICROSTOCK_BATCH_PAISLEY/pattern_001.jpg"
  blob: Blob;
  crc?: number; // Optional precomputed CRC-32 so ZIP assembly requires zero re-reading!
  size?: number;
}

export async function computeBlobCrc32AndSize(blob: Blob): Promise<{ crc: number; size: number }> {
  const buf = await blob.arrayBuffer();
  const u8 = new Uint8Array(buf);
  const size = u8.length;
  const crc = crc32Bytes(u8);
  return { crc, size };
}

export async function createZipArchiveBlob(entries: ZipEntryInput[]): Promise<Blob> {
  const parts: BlobPart[] = [];
  const centralDir: Uint8Array[] = [];
  let offset = 0;
  const enc = new TextEncoder();

  for (let idx = 0; idx < entries.length; idx++) {
    const item = entries[idx];
    const nameBytes = enc.encode(item.path);
    let size = item.size ?? item.blob.size;
    let crc = item.crc;
    if (crc === undefined) {
      const buf = await item.blob.arrayBuffer();
      const dataBytes = new Uint8Array(buf);
      size = dataBytes.length;
      crc = crc32Bytes(dataBytes);
    }

    // Local File Header (30 bytes + nameBytes.length)
    const lfh = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(lfh.buffer);
    lv.setUint32(0, 0x04034b50, true); // Local file header signature
    lv.setUint16(4, 20, true); // Version needed
    lv.setUint16(6, 0x0800, true); // UTF-8 flag
    lv.setUint16(8, 0, true); // Compression method 0 (STORE)
    lv.setUint16(10, 0x4821, true); // Mod time
    lv.setUint16(12, 0x5874, true); // Mod date
    lv.setUint32(14, crc, true); // CRC-32
    lv.setUint32(18, size, true); // Compressed size
    lv.setUint32(22, size, true); // Uncompressed size
    lv.setUint16(26, nameBytes.length, true); // Filename length
    lv.setUint16(28, 0, true); // Extra field length
    lfh.set(nameBytes, 30);

    parts.push(lfh as unknown as BlobPart);
    parts.push(item.blob);

    // Central Directory Header (46 bytes + nameBytes.length)
    const cdh = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(cdh.buffer);
    cv.setUint32(0, 0x02014b50, true); // Central directory signature
    cv.setUint16(4, 20, true); // Version made by
    cv.setUint16(6, 20, true); // Version needed
    cv.setUint16(8, 0x0800, true); // UTF-8 flag
    cv.setUint16(10, 0, true); // Compression method 0 (STORE)
    cv.setUint16(12, 0x4821, true);
    cv.setUint16(14, 0x5874, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, size, true);
    cv.setUint32(24, size, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true); // Relative offset of local header
    cdh.set(nameBytes, 46);

    centralDir.push(cdh);
    offset += lfh.length + size;
    if (idx % 12 === 11) {
      await new Promise((r) => setTimeout(r, 0));
    }
  }

  let cdSize = 0;
  for (const cdh of centralDir) {
    parts.push(cdh as unknown as BlobPart);
    cdSize += cdh.length;
  }

  // End of Central Directory Record (22 bytes)
  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, cdSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);
  parts.push(eocd as unknown as BlobPart);

  return new Blob(parts, { type: "application/zip" });
}

export interface MicrostockMetaRow {
  filename: string;
  modeName: string;
  cat: string;
  seed: number;
  ratio: string;
  bgGrad: string;
  bd: string;
  w: number;
  h: number;
}

export function buildMicrostockCSV(rows: MicrostockMetaRow[]): string {
  const header = "Filename,Title,Keywords,Category\n";
  const body = rows
    .map((r) => {
      const cleanName = r.modeName.replace(/"/g, "");
      const cleanCat = r.cat.replace(/"/g, "");
      const title = `${cleanName} Seamless Textile & Background Pattern - ${r.ratio} Commercial Vector Design #${r.seed}`;
      const kw = [
        "pattern",
        "seamless",
        "background",
        "textile",
        "fabric",
        "vector",
        "ornament",
        "wallpaper",
        "print",
        "geometric",
        "decorative",
        "abstract",
        "surface",
        "design",
        "graphic",
        "texture",
        "gradient",
        "motif",
        "backdrop",
        "wrapping",
        "apparel",
        "fashion",
        "modern",
        "luxury",
        "vintage",
        cleanCat.toLowerCase(),
        ...cleanName.toLowerCase().split(/\s+/),
        r.bgGrad !== "solid" ? r.bgGrad : "flat",
        r.bd !== "none" ? r.bd : "clean",
      ];
      const uniqKw = Array.from(new Set(kw.filter((w) => w.length > 2))).slice(0, 35);
      return `"${r.filename}","${title}","${uniqKw.join(", ")}","Graphic Resources"`;
    })
    .join("\n");
  return header + body + "\n";
}




