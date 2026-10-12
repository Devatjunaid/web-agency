// Original, code-generated artwork for The Fast Designs.
// Case-study result charts, drawn as SVG.
import { CASE_STUDIES } from './portfolio.mjs';

const FONT = `font-family="Helvetica Neue, Helvetica, Arial, sans-serif"`;
const SERIF = `font-family="Georgia, 'Times New Roman', serif"`;

// Deterministic pseudo-random so builds are stable
function rng(seed) {
  let s = 0;
  for (const c of seed) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

const rect = (x, y, w, h, fill, rx = 6, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${extra}/>`;
const xml = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const text = (x, y, str, size, fill, weight = 700, extra = '') =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" ${FONT} ${extra}>${xml(str)}</text>`;

function linePath(r, x, y, w, h, n = 12, trend = 0.6) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const v = 0.15 + t * trend + (r() - 0.5) * 0.22;
    pts.push([x + t * w, y + h - Math.max(0.05, Math.min(0.95, v)) * h]);
  }
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const mx = (px + cx) / 2;
    d += ` C${mx.toFixed(1)},${py.toFixed(1)} ${mx.toFixed(1)},${cy.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}`;
  }
  return { d, area: `${d} L${x + w},${y + h} L${x},${y + h} Z`, last: pts[pts.length - 1] };
}

function frame(p, inner, { w = 1200, h = 800 } = {}) {
  const id = p.id;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${xml(p.name)} — ${xml(p.type)} design by The Fast Designs">
<defs>
  <linearGradient id="${id}-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.bg2}"/><stop offset="1" stop-color="${p.bg}"/></linearGradient>
  <linearGradient id="${id}-a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.a}"/><stop offset="1" stop-color="${p.b}"/></linearGradient>
  <linearGradient id="${id}-fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.a}" stop-opacity=".45"/><stop offset="1" stop-color="${p.a}" stop-opacity="0"/></linearGradient>
  <filter id="${id}-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="70"/></filter>
  <filter id="${id}-shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="30" stdDeviation="30" flood-color="#000" flood-opacity=".55"/></filter>
  <pattern id="${id}-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".04"/></pattern>
</defs>
<rect width="${w}" height="${h}" fill="url(#${id}-bg)"/>
<rect width="${w}" height="${h}" fill="url(#${id}-grid)"/>
<circle cx="${w * 0.82}" cy="${h * 0.12}" r="220" fill="${p.a}" opacity=".35" filter="url(#${id}-blur)"/>
<circle cx="${w * 0.1}" cy="${h * 0.95}" r="240" fill="${p.b}" opacity=".28" filter="url(#${id}-blur)"/>
${inner}
</svg>`;
}

/* ---------------- Charts for case studies ---------------- */
function resultChart(p) {
  const { before, after, labels } = p.chart;
  const max = Math.max(...before, ...after) * 1.15;
  const W = 1200, H = 660, x0 = 120, y0 = 120, w = 980, h = 430;
  const bw = w / labels.length;
  const bars = labels
    .map((l, i) => {
      const bx = x0 + i * bw + bw * 0.2;
      const hb = (before[i] / max) * h;
      const ha = (after[i] / max) * h;
      return `${rect(bx, y0 + h - hb, bw * 0.26, hb, '#fff', 8, 'fill-opacity=".18"')}
      ${rect(bx + bw * 0.32, y0 + h - ha, bw * 0.26, ha, `url(#${p.id}c-a)`, 8)}
      ${text(bx + bw * 0.45, y0 + h - ha - 14, '+' + Math.round(((after[i] - before[i]) / before[i]) * 100) + '%', 18, p.a, 800, 'text-anchor="middle"')}
      ${text(bx + bw * 0.29, y0 + h + 40, l, 18, '#fff', 600, 'text-anchor="middle" fill-opacity=".7"')}`;
    })
    .join('');
  return frame(
    { ...p, id: p.id + 'c' },
    `${[0, 1, 2, 3, 4].map((i) => `<line x1="${x0}" x2="${x0 + w}" y1="${y0 + (h / 4) * i}" y2="${y0 + (h / 4) * i}" stroke="#fff" stroke-opacity=".07"/>`).join('')}
    ${text(x0, 70, p.chart.title, 26, '#fff', 800)}
    ${rect(x0 + w - 330, 50, 16, 16, '#fff', 4, 'fill-opacity=".25"')}${text(x0 + w - 306, 64, 'Before', 16, '#fff', 500, 'fill-opacity=".7"')}
    ${rect(x0 + w - 200, 50, 16, 16, p.a, 4)}${text(x0 + w - 176, 64, 'After launch', 16, '#fff', 500, 'fill-opacity=".7"')}
    ${bars}`,
    { w: W, h: H }
  );
}

/* ---------------- Brand assets ---------------- */
const LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D4FF3A"/><stop offset="1" stop-color="#7CFFB2"/></linearGradient></defs><rect width="48" height="48" rx="13" fill="#111217"/><path d="M17 12h20l-3 6H23.6l-1.7 4H31l-3 6h-8.6L15 38h-6.5z" fill="url(#g)"/><path d="M5 20h8M3 26h7M6 32h5" stroke="#D4FF3A" stroke-width="2.4" stroke-linecap="round" opacity=".55"/></svg>`;

const lum = (hex) => { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };

export function renderArt() {
  const out = { 'logo.svg': LOGO };
  for (const p of CASE_STUDIES) {
    const t = p.theme;
    const a = lum(t.accent) < 0.35 ? t.alt : t.accent;
    const b = t.alt && t.alt !== a && lum(t.alt) > 0.35 ? t.alt : a;
    out[`work/${p.slug}-results.svg`] = resultChart({ id: p.slug, name: p.name, type: p.type, bg: '#0B0C12', bg2: '#161823', a, b, chart: { ...p.caseStudy.chart, title: `${p.name} — before vs. after launch` } });
  }
  return out;
}
