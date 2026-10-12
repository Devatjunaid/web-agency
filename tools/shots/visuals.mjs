// Imagery used inside the portfolio mini-sites. Everything is drawn in code (SVG/HTML) — no stock photos.

export function rng(seed) {
  let s = 0;
  for (const c of String(seed)) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
const mix = (a, b, t) => {
  const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [r1, g1, b1] = p(a), [r2, g2, b2] = p(b);
  const h = (v) => Math.round(v).toString(16).padStart(2, '0');
  return `#${h(r1 + (r2 - r1) * t)}${h(g1 + (g2 - g1) * t)}${h(b1 + (b2 - b1) * t)}`;
};
let uid = 0;
const id = (p) => `${p}${++uid}`;

function ridge(r, w, base, amp, rough, steps = 60) {
  let d = `M0,${base}`;
  let y = base;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * w;
    y = base - amp * (0.5 + 0.5 * Math.sin(i * rough + r() * 0.8)) * (0.6 + r() * 0.5);
    d += ` L${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return d;
}

const SKIES = {
  dawn: ['#F6C9A7', '#F3E3D3', '#FBEEDF', '#E9A27C'],
  day: ['#8EC5E8', '#CFE6F3', '#F4F1E8', '#FFE7A3'],
  dusk: ['#2C2551', '#C76C6C', '#F2B07B', '#FFD08A'],
  night: ['#060B1E', '#16244A', '#2B3A6B', '#E7EEFF'],
  mist: ['#A9B8C2', '#D7DEE0', '#EEF0EE', '#FFFFFF'],
};

/** Layered landscape — mountains | coast | forest | desert | city */
export function scene(kind = 'mountains', time = 'dusk', seed = 'x', { w = 1200, h = 800, tint } = {}) {
  const r = rng(seed + kind);
  const [s1, s2, s3, sun] = SKIES[time];
  const far = tint || mix(s2, '#3A4A6B', 0.35);
  const near = time === 'night' ? '#05070F' : mix(far, '#0B1410', 0.85);
  const g = id('sky'), f = id('fog'), b = id('blur');
  let layers = '';
  if (kind === 'mountains' || kind === 'forest') {
    const n = 5;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const base = h * (0.42 + t * 0.14);
      const col = mix(far, near, Math.pow(t, 0.9));
      layers += `<path d="${ridge(r, w, base, h * (0.22 - t * 0.03), 0.18 + r() * 0.25)} L${w},${h} L0,${h}Z" fill="${col}"/>`;
      if (kind === 'forest' && i >= 2) {
        let trees = '';
        for (let x = 0; x < w; x += 14 + r() * 22) {
          const th = (40 + r() * 70) * (0.6 + t);
          const ty = base - 10 + r() * 30;
          trees += `<path d="M${x},${ty - th} L${x + th * 0.22},${ty} L${x - th * 0.22},${ty}Z" fill="${col}"/>`;
        }
        layers += trees;
      }
      if (i < n - 1) layers += `<rect y="${base - 40}" width="${w}" height="${h * 0.25}" fill="url(#${f})" opacity="${0.55 - t * 0.3}"/>`;
    }
  } else if (kind === 'coast') {
    layers += `<rect y="${h * 0.58}" width="${w}" height="${h * 0.42}" fill="${mix(s1, '#0B3A5A', 0.55)}"/>`;
    for (let i = 0; i < 26; i++) {
      const y = h * 0.6 + i * i * 0.55;
      const ww = 30 + r() * 140 - i;
      layers += `<rect x="${w * 0.68 - ww / 2 + (r() - 0.5) * 60}" y="${y}" width="${ww}" height="${1.5 + i * 0.12}" rx="1" fill="${sun}" opacity="${0.7 - i * 0.022}"/>`;
    }
    layers += `<path d="${ridge(r, w * 0.5, h * 0.5, h * 0.18, 0.35, 30)} L${w * 0.5},${h * 0.62} L${w * 0.42},${h} L0,${h}Z" fill="${mix(far, near, 0.6)}"/>`;
    layers += `<path d="M0,${h * 0.7} Q${w * 0.2},${h * 0.62} ${w * 0.34},${h * 0.78} T${w * 0.5},${h} L0,${h}Z" fill="${near}"/>`;
  } else if (kind === 'desert') {
    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      const y = h * (0.55 + t * 0.1);
      layers += `<path d="M0,${y} C${w * 0.3},${y - 80 * (1 - t)} ${w * 0.5},${y + 60} ${w},${y - 40 + r() * 60} L${w},${h} L0,${h}Z" fill="${mix('#E8B98A', '#8A4B2A', t)}"/>`;
    }
  } else if (kind === 'city') {
    for (let l = 0; l < 3; l++) {
      const t = l / 2;
      let x = -20;
      while (x < w) {
        const bw = 40 + r() * 90, bh = h * (0.15 + r() * 0.35) * (1 - t * 0.35);
        const by = h * 0.82 - bh + t * 60;
        layers += `<rect x="${x}" y="${by}" width="${bw}" height="${h}" fill="${mix(far, near, 0.35 + t * 0.6)}"/>`;
        if (l === 2 || (l === 1 && r() > 0.5)) {
          for (let wy = by + 12; wy < h * 0.95; wy += 16) for (let wx = x + 8; wx < x + bw - 8; wx += 13) if (r() > 0.55) layers += `<rect x="${wx}" y="${wy}" width="6" height="8" fill="${sun}" opacity="${0.35 + r() * 0.5}"/>`;
        }
        x += bw + 4;
      }
    }
  }
  const sx = w * (0.62 + r() * 0.15), sy = h * (time === 'day' ? 0.2 : 0.36);
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s1}"/><stop offset=".55" stop-color="${s2}"/><stop offset="1" stop-color="${s3}"/></linearGradient>
<linearGradient id="${f}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s3}" stop-opacity="0"/><stop offset=".5" stop-color="${s3}" stop-opacity=".9"/><stop offset="1" stop-color="${s3}" stop-opacity="0"/></linearGradient>
<filter id="${b}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40"/></filter></defs>
<rect width="${w}" height="${h}" fill="url(#${g})"/>
<circle cx="${sx}" cy="${sy}" r="${h * 0.22}" fill="${sun}" opacity=".45" filter="url(#${b})"/>
<circle cx="${sx}" cy="${sy}" r="${time === 'night' ? 22 : 46}" fill="${sun}" opacity="${time === 'night' ? 0.9 : 0.95}"/>
${time === 'night' ? Array.from({ length: 80 }, () => `<circle cx="${r() * w}" cy="${r() * h * 0.5}" r="${r() * 1.4}" fill="#fff" opacity="${0.3 + r() * 0.6}"/>`).join('') : ''}
${layers}
</svg>`;
}

/** Warm interior room — hotels, furniture, real estate */
export function interior(c = {}, seed = 'room') {
  const wall = c.wall || '#E9DED0', floor = c.floor || '#B98A62', sofa = c.sofa || '#7A8B6F', accent = c.accent || '#C8693A';
  const r = rng(seed);
  const gid = id('wl'), lb = id('lb'), sh = id('sh'), fl = id('fl');
  return `<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
<defs>
<linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${mix(wall, '#000000', 0.12)}"/><stop offset=".6" stop-color="${wall}"/><stop offset="1" stop-color="${mix(wall, '#ffffff', 0.15)}"/></linearGradient>
<linearGradient id="${fl}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${mix(floor, '#000', 0.2)}"/><stop offset="1" stop-color="${floor}"/></linearGradient>
<linearGradient id="${lb}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6E0" stop-opacity=".55"/><stop offset="1" stop-color="#FFF6E0" stop-opacity="0"/></linearGradient>
<radialGradient id="${sh}"><stop offset="0" stop-color="#000" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="800" fill="url(#${gid})"/>
<rect y="590" width="1200" height="210" fill="url(#${fl})"/>
${Array.from({ length: 14 }, (_, i) => `<line x1="${i * 100 - 300}" y1="800" x2="${i * 80 - 100}" y2="590" stroke="#000" stroke-opacity=".06"/>`).join('')}
<rect x="700" y="110" width="330" height="420" rx="4" fill="#F7F1E6" stroke="${mix(wall, '#000', 0.25)}" stroke-width="10"/>
${scene('mountains', 'day', seed, { w: 330, h: 420 }).replace('<svg ', '<svg x="700" y="110" width="330" height="420" ')}
<line x1="865" y1="110" x2="865" y2="530" stroke="${mix(wall, '#000', 0.25)}" stroke-width="8"/>
<polygon points="700,530 1030,530 880,800 380,800" fill="url(#${lb})"/>
<ellipse cx="520" cy="700" rx="420" ry="40" fill="url(#${sh})"/>
<ellipse cx="560" cy="690" rx="330" ry="60" fill="${mix(accent, wall, 0.55)}"/>
<rect x="250" y="470" width="520" height="150" rx="40" fill="${mix(sofa, '#000', 0.15)}"/>
<rect x="270" y="400" width="480" height="120" rx="36" fill="${sofa}"/>
<rect x="290" y="500" width="230" height="90" rx="28" fill="${mix(sofa, '#fff', 0.12)}"/>
<rect x="530" y="500" width="230" height="90" rx="28" fill="${mix(sofa, '#fff', 0.08)}"/>
<rect x="225" y="455" width="70" height="160" rx="30" fill="${mix(sofa, '#000', 0.05)}"/><rect x="725" y="455" width="70" height="160" rx="30" fill="${mix(sofa, '#000', 0.05)}"/>
<rect x="330" y="430" width="90" height="70" rx="20" fill="${accent}" transform="rotate(-8 375 465)"/>
<rect x="600" y="436" width="80" height="64" rx="18" fill="#F1E7D6" transform="rotate(6 640 468)"/>
<rect x="250" y="610" width="12" height="40" fill="#3B2A1E"/><rect x="760" y="610" width="12" height="40" fill="#3B2A1E"/>
<ellipse cx="560" cy="700" rx="110" ry="22" fill="#2D241D"/><rect x="455" y="650" width="210" height="50" rx="12" fill="#3B2F25"/>
<rect x="500" y="630" width="40" height="26" rx="4" fill="${accent}"/><circle cx="600" cy="640" r="16" fill="#E9E1D2"/>
<g transform="translate(110 380)">${Array.from({ length: 9 }, (_, i) => `<ellipse cx="${30 + (r() - 0.5) * 90}" cy="${60 + i * 18}" rx="${16 + r() * 18}" ry="7" fill="${mix('#4E6B3A', '#7FA05A', r())}" transform="rotate(${(r() - 0.5) * 70} 30 ${60 + i * 18})"/>`).join('')}<path d="M0 210 h70 l-10 70 h-50z" fill="#C9B79C"/></g>
<line x1="980" y1="250" x2="980" y2="610" stroke="#2D241D" stroke-width="5"/><path d="M940 250 h80 l-18 -60 h-44z" fill="#F3E6C8"/><ellipse cx="980" cy="610" rx="40" ry="8" fill="#2D241D"/>
<rect x="390" y="190" width="220" height="150" fill="#F5EFE4" stroke="#2D241D" stroke-width="6"/><circle cx="470" cy="270" r="38" fill="${accent}"/><rect x="500" y="230" width="70" height="90" fill="${sofa}" opacity=".8"/>
</svg>`;
}

/** Studio product renders — bottle | jar | sneaker | pouch | chair | bouquet | dress | bag | bike | headphones */
export function product(kind, color = '#E8C9B0', { bg = 'none', label = '' } = {}) {
  const dark = mix(color, '#000000', 0.45), light = mix(color, '#ffffff', 0.55);
  const cyl = id('cy'), hl = id('hl'), sh = id('sh');
  const defs = `<defs><linearGradient id="${cyl}" x1="0" x2="1"><stop offset="0" stop-color="${dark}"/><stop offset=".28" stop-color="${color}"/><stop offset=".42" stop-color="${light}"/><stop offset=".6" stop-color="${color}"/><stop offset="1" stop-color="${dark}"/></linearGradient>
  <radialGradient id="${hl}" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="${light}"/><stop offset=".6" stop-color="${color}"/><stop offset="1" stop-color="${dark}"/></radialGradient>
  <radialGradient id="${sh}"><stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>`;
  const shadow = (cx, cy, rx) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.14}" fill="url(#${sh})"/>`;
  let body = '';
  switch (kind) {
    case 'bottle':
      body = `${shadow(200, 372, 90)}<rect x="168" y="40" width="64" height="58" rx="8" fill="#1d1d1f"/><rect x="176" y="40" width="10" height="58" fill="#fff" opacity=".18"/><rect x="130" y="92" width="140" height="280" rx="34" fill="url(#${cyl})"/><rect x="146" y="190" width="108" height="110" rx="6" fill="#fff" opacity=".9"/><text x="200" y="232" text-anchor="middle" font-family="serif" font-size="17" fill="#222">${label || 'SÉRUM'}</text><text x="200" y="256" text-anchor="middle" font-family="sans-serif" font-size="9" letter-spacing="2" fill="#666">30 ML · 1 FL OZ</text><rect x="152" y="110" width="12" height="240" rx="6" fill="#fff" opacity=".35"/>`;
      break;
    case 'jar':
      body = `${shadow(200, 340, 120)}<rect x="96" y="150" width="208" height="40" rx="10" fill="#222"/><rect x="88" y="186" width="224" height="152" rx="30" fill="url(#${cyl})"/><rect x="118" y="230" width="164" height="60" rx="4" fill="#fff" opacity=".85"/><text x="200" y="266" text-anchor="middle" font-family="serif" font-size="18" fill="#222">${label || 'Cream'}</text>`;
      break;
    case 'pouch':
      body = `${shadow(200, 372, 110)}<path d="M110 70 h180 l14 300 h-208z" fill="url(#${cyl})"/><path d="M110 70 h180 v18 h-180z" fill="${dark}"/><rect x="132" y="170" width="136" height="130" rx="6" fill="#F7F0E6"/><text x="200" y="215" text-anchor="middle" font-family="serif" font-size="20" fill="#2a1a10">${label || 'Ethiopia'}</text><text x="200" y="240" text-anchor="middle" font-family="sans-serif" font-size="9" letter-spacing="2" fill="#7a5a40">SINGLE ORIGIN · 250G</text><circle cx="200" cy="272" r="12" fill="${color}"/>`;
      break;
    case 'sneaker':
      body = `${shadow(205, 318, 175)}
      <path d="M44 232 C40 206 58 196 84 192 L150 182 C172 160 196 132 214 118 C226 108 244 110 256 120 L270 134 C282 148 300 156 322 166 C352 178 370 196 372 222 C374 244 366 258 350 262 L66 270 C52 270 46 252 44 232Z" fill="url(#${hl})"/>
      <path d="M214 118 C230 104 252 102 268 112 L262 140 C250 128 234 122 214 126Z" fill="${dark}"/>
      <path d="M40 252 C44 278 60 292 88 292 L344 286 C366 286 380 274 380 252 C380 244 376 238 372 234 C366 254 352 262 336 263 L66 270 C54 270 46 262 40 252Z" fill="#F7F5F1"/>
      <path d="M40 270 C50 296 70 304 96 304 L348 298 C368 296 382 286 384 266" stroke="#2a2a2a" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M92 252 C160 236 240 232 330 236" stroke="#E4E0D8" stroke-width="3" fill="none"/>
      <path d="M118 214 C170 196 236 196 300 212 C318 218 330 226 340 236" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" opacity=".9"/>
      ${[0, 1, 2, 3, 4].map((i) => `<path d="M${168 + i * 16} ${172 - i * 8} l18 10" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`).join('')}
      <circle cx="300" cy="200" r="6" fill="#fff" opacity=".7"/>`;
      break;
    case 'chair':
      body = `${shadow(200, 372, 140)}<path d="M110 120 C110 80 290 80 290 120 L280 250 L120 250Z" fill="url(#${hl})"/><rect x="92" y="230" width="216" height="62" rx="26" fill="url(#${cyl})"/><path d="M120 290 L100 370 M280 290 L300 370 M160 292 L150 360 M240 292 L250 360" stroke="#3A2A1E" stroke-width="10" stroke-linecap="round"/>`;
      break;
    case 'lamp':
      body = `${shadow(200, 372, 80)}<path d="M120 170 L170 60 h60 L280 170z" fill="url(#${cyl})"/><line x1="200" y1="170" x2="200" y2="360" stroke="#2a2a2a" stroke-width="8"/><ellipse cx="200" cy="364" rx="60" ry="12" fill="#2a2a2a"/>`;
      break;
    case 'bouquet':
      body = `${shadow(200, 380, 90)}<path d="M160 250 L200 380 L240 250Z" fill="#E9DCC6"/><path d="M175 300 L200 380 L225 300" fill="#D7C6A9"/>${[[150, 170, '#F2A7B6'], [230, 160, '#F7D4C8'], [195, 120, '#E86F8B'], [120, 220, '#FBE3E7'], [270, 215, '#F2A7B6'], [200, 200, '#FFF3E8'], [165, 110, '#F9C6D0'], [245, 105, '#E86F8B']].map(([x, y, c]) => `${Array.from({ length: 6 }, (_, k) => `<ellipse cx="${x}" cy="${y - 18}" rx="15" ry="22" fill="${c}" transform="rotate(${k * 60} ${x} ${y})" opacity=".92"/>`).join('')}<circle cx="${x}" cy="${y}" r="10" fill="${mix(c, '#7a2a3a', 0.4)}"/>`).join('')}${[[110, 260], [290, 255], [140, 140], [270, 140]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="34" ry="12" fill="#6E8B5A" transform="rotate(${x < 200 ? -35 : 35} ${x} ${y})"/>`).join('')}`;
      break;
    case 'dress':
      body = `${shadow(200, 384, 100)}<path d="M200 18 c-10 0 -12 12 -4 16 l4 4" stroke="#8a8a8a" stroke-width="4" fill="none"/><path d="M200 38 L120 66 h160z" stroke="#8a8a8a" stroke-width="5" fill="none" stroke-linejoin="round"/><path d="M160 64 c6 22 10 34 12 46 h56 c2 -12 6 -24 12 -46 c-14 10 -26 14 -40 14 s-26 -4 -40 -14z" fill="url(#${cyl})"/><path d="M172 110 h56 l10 14 c30 70 50 150 62 250 c-60 14 -140 14 -200 0 c12 -100 32 -180 62 -250z" fill="url(#${cyl})"/><path d="M172 112 h56" stroke="${dark}" stroke-width="5"/>${[150, 185, 220, 255].map((x, i) => `<path d="M${200 + (x - 200) * 0.2} 130 Q${x} 260 ${x + (x - 200) * 0.35} 370" stroke="${dark}" stroke-opacity=".22" stroke-width="3" fill="none"/>`).join('')}`;
      break;
    case 'bag':
      body = `${shadow(200, 360, 140)}<path d="M150 150 C150 80 250 80 250 150" stroke="${dark}" stroke-width="14" fill="none"/><path d="M90 150 h220 l20 210 h-260z" fill="url(#${cyl})"/><rect x="185" y="190" width="30" height="20" rx="4" fill="#D4B26A"/>`;
      break;
    case 'headphones':
      body = `${shadow(200, 370, 130)}<path d="M100 230 C100 110 300 110 300 230" stroke="url(#${cyl})" stroke-width="26" fill="none" stroke-linecap="round"/><rect x="70" y="210" width="80" height="140" rx="36" fill="url(#${hl})"/><rect x="250" y="210" width="80" height="140" rx="36" fill="url(#${hl})"/>`;
      break;
    case 'bike':
      body = `${shadow(200, 330, 170)}<circle cx="100" cy="270" r="62" fill="none" stroke="#222" stroke-width="10"/><circle cx="300" cy="270" r="62" fill="none" stroke="#222" stroke-width="10"/><path d="M100 270 L170 170 L270 170 L300 270 M170 170 L200 270 L270 170 M200 270 L100 270" stroke="${color}" stroke-width="12" fill="none" stroke-linejoin="round"/><path d="M160 150 h40 M262 150 l10 20" stroke="#222" stroke-width="10" stroke-linecap="round"/>`;
      break;
    case 'charger':
      body = `${shadow(200, 380, 90)}<rect x="140" y="40" width="120" height="330" rx="26" fill="url(#${cyl})"/><rect x="160" y="70" width="80" height="60" rx="10" fill="#0d1a12"/><text x="200" y="108" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="20" fill="${light}">82%</text><circle cx="200" cy="170" r="14" fill="${light}"/><path d="M260 220 C330 240 330 330 270 350" stroke="#1d1d1f" stroke-width="10" fill="none"/>`;
      break;
    default:
      body = `${shadow(200, 360, 110)}<circle cx="200" cy="220" r="120" fill="url(#${hl})"/>`;
  }
  return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">${defs}${bg !== 'none' ? `<rect width="400" height="400" fill="${bg}"/>` : ''}${body}</svg>`;
}

/** Top-down plated dish on a table */
export function plate(seed = 'dish', { table = '#3A2418', sauce = '#B8432A' } = {}) {
  const r = rng(seed);
  const w = id('wd'), p = id('pl'), s = id('sh');
  return `<svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
<defs><linearGradient id="${w}" x1="0" y1="0" x2="1" y2="0">${Array.from({ length: 12 }, (_, i) => `<stop offset="${i / 11}" stop-color="${mix(table, i % 2 ? '#000000' : '#6b4630', 0.12 + r() * 0.12)}"/>`).join('')}</linearGradient>
<radialGradient id="${p}" cx=".45" cy=".4"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".8" stop-color="#EFEAE2"/><stop offset="1" stop-color="#D9D2C6"/></radialGradient>
<radialGradient id="${s}"><stop offset=".7" stop-color="#000" stop-opacity=".45"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
<rect width="800" height="800" fill="url(#${w})"/>
<circle cx="415" cy="425" r="300" fill="url(#${s})"/>
<circle cx="400" cy="400" r="280" fill="url(#${p})"/><circle cx="400" cy="400" r="200" fill="none" stroke="#E4DDD2" stroke-width="3"/>
<path d="M300 420 C320 330 460 300 510 380 C540 440 480 500 400 500 C340 500 290 470 300 420Z" fill="${sauce}" opacity=".9"/>
<ellipse cx="410" cy="410" rx="110" ry="70" fill="#8A4A2A" transform="rotate(-18 410 410)"/>
<ellipse cx="400" cy="398" rx="100" ry="58" fill="#A8603A" transform="rotate(-18 410 410)"/>
${Array.from({ length: 7 }, (_, i) => `<path d="M${380 + i * 6} ${360 + (i % 2) * 6} l60 -18" stroke="#5A2E18" stroke-width="5" stroke-linecap="round" opacity=".6"/>`).join('')}
${Array.from({ length: 14 }, () => { const x = 300 + r() * 220, y = 320 + r() * 180; return `<ellipse cx="${x}" cy="${y}" rx="${8 + r() * 10}" ry="${4 + r() * 4}" fill="${r() > 0.5 ? '#6E9B4A' : '#9CC26B'}" transform="rotate(${r() * 180} ${x} ${y})"/>`; }).join('')}
${Array.from({ length: 8 }, () => `<circle cx="${320 + r() * 200}" cy="${330 + r() * 160}" r="${5 + r() * 6}" fill="#E4572E"/>`).join('')}
<rect x="40" y="120" width="26" height="520" rx="13" fill="#C9C2B6"/><rect x="736" y="140" width="22" height="500" rx="11" fill="#C9C2B6"/>
<circle cx="700" cy="110" r="70" fill="#F2E9D8" opacity=".9"/><circle cx="700" cy="110" r="52" fill="#7A1F2B" opacity=".85"/>
</svg>`;
}

/** Architectural facade at golden hour */
export function building(seed = 'arch', { tone = '#D8CFC3', variant = 'tower' } = {}) {
  if (variant === 'house') return house(seed, tone);
  const r = rng(seed);
  const sky = id('sk'), gl = id('gl');
  let panes = '';
  for (let y = 0; y < 9; y++) for (let x = 0; x < 7; x++) panes += `<rect x="${330 + x * 74}" y="${150 + y * 60}" width="66" height="52" fill="url(#${gl})" opacity="${0.75 + r() * 0.25}"/>`;
  return `<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
<defs><linearGradient id="${sky}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9DB7C9"/><stop offset="1" stop-color="#F1D9BE"/></linearGradient>
<linearGradient id="${gl}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2C4356"/><stop offset=".5" stop-color="#9FB9C8"/><stop offset="1" stop-color="#3B5568"/></linearGradient></defs>
<rect width="1200" height="800" fill="url(#${sky})"/>
<polygon points="300,120 860,120 860,720 300,720" fill="${tone}"/><polygon points="860,120 980,170 980,720 860,720" fill="${mix(tone, '#000', 0.25)}"/>
${panes}
${Array.from({ length: 10 }, (_, i) => `<rect x="300" y="${144 + i * 60}" width="560" height="6" fill="${mix(tone, '#fff', 0.2)}"/>`).join('')}
${Array.from({ length: 9 }, (_, i) => `<rect x="${862 + 0}" y="${170 + i * 60}" width="118" height="4" fill="${mix(tone, '#000', 0.35)}"/>`).join('')}
<rect y="720" width="1200" height="80" fill="#8E8A80"/><rect y="716" width="1200" height="6" fill="#B7B1A5"/>
${[120, 1060, 200].map((x, i) => `<g transform="translate(${x} ${560 + i * 10})"><rect x="-6" y="40" width="12" height="130" fill="#4A3B2E"/>${Array.from({ length: 10 }, () => `<circle cx="${(r() - 0.5) * 120}" cy="${(r() - 0.5) * 100}" r="${30 + r() * 30}" fill="${mix('#4F6B3C', '#8BA567', r())}"/>`).join('')}</g>`).join('')}
<polygon points="300,720 980,720 1200,800 0,800" fill="#000" opacity=".12"/>
${variant === 'crane' ? `<g stroke="#F5B700" stroke-width="10" fill="none"><path d="M1060 720 V60 M1060 60 H560 M1060 60 H1160 M1060 120 L600 62"/>${Array.from({ length: 13 }, (_, i) => `<path d="M1048 ${700 - i * 50} L1072 ${676 - i * 50}"/>`).join('')}</g><line x1="700" y1="60" x2="700" y2="300" stroke="#333" stroke-width="3"/><rect x="660" y="300" width="80" height="30" fill="#8A6A3A"/><rect x="1130" y="60" width="50" height="60" fill="#555"/><rect y="560" width="300" height="160" fill="#E2DED6"/><rect x="0" y="560" width="300" height="12" fill="#F5B700"/>` : ''}
</svg>`;
}

function house(seed, tone) {
  const r = rng(seed);
  const sky = id('hs'), gl = id('hg'), wd = id('hw');
  return `<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
<defs><linearGradient id="${sky}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9D6DC"/><stop offset="1" stop-color="#F3E3CF"/></linearGradient>
<linearGradient id="${gl}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1F2E38"/><stop offset=".45" stop-color="#7E98A6"/><stop offset=".55" stop-color="#E9D7B8"/><stop offset="1" stop-color="#2A3B46"/></linearGradient>
<pattern id="${wd}" width="16" height="400" patternUnits="userSpaceOnUse"><rect width="16" height="400" fill="#8B5E3C"/><rect width="2" height="400" fill="#5E3E27"/></pattern></defs>
<rect width="1200" height="800" fill="url(#${sky})"/>
${scene('mountains', 'dawn', seed, { w: 1200, h: 560 }).replace('<svg ', '<svg x="0" y="0" width="1200" height="560" opacity=".55" ')}
<rect x="160" y="300" width="560" height="340" fill="url(#${wd})"/>
<rect x="120" y="270" width="900" height="34" fill="#1C1C1C"/>
<rect x="720" y="304" width="300" height="336" fill="${tone}"/>
<rect x="200" y="350" width="470" height="290" fill="url(#${gl})"/>
${[0, 1, 2, 3].map((i) => `<rect x="${200 + i * 118}" y="350" width="6" height="290" fill="#1C1C1C"/>`).join('')}
<rect x="770" y="380" width="200" height="120" fill="url(#${gl})"/>
<rect x="60" y="640" width="1080" height="20" fill="#9D968A"/><rect y="660" width="1200" height="140" fill="#6F8A5A"/>
<rect x="260" y="660" width="360" height="140" fill="#A7B7BE" opacity=".9"/><rect x="260" y="660" width="360" height="8" fill="#E8EEF0"/>
${[90, 1100, 1040].map((x, i) => `<g transform="translate(${x} ${520 + i * 20})"><rect x="-5" y="40" width="10" height="110" fill="#4A3B2E"/>${Array.from({ length: 9 }, () => `<circle cx="${(r() - 0.5) * 110}" cy="${(r() - 0.5) * 90}" r="${26 + r() * 26}" fill="${mix('#4F6B3C', '#8BA567', r())}"/>`).join('')}</g>`).join('')}
</svg>`;
}

/** Studio-lit abstract 3D orbs */
export function orbs(colors = ['#7C5CFF', '#22D3EE', '#F472B6'], seed = 'orbs') {
  const r = rng(seed);
  const items = colors.concat(colors).slice(0, 5).map((c, i) => {
    const g = id('ob');
    const cx = 200 + r() * 800, cy = 150 + r() * 500, rad = 60 + r() * 160;
    return { def: `<radialGradient id="${g}" cx=".32" cy=".28" r=".8"><stop offset="0" stop-color="${mix(c, '#fff', 0.7)}"/><stop offset=".35" stop-color="${c}"/><stop offset="1" stop-color="${mix(c, '#000', 0.65)}"/></radialGradient>`, el: `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="url(#${g})"/>` };
  });
  const bl = id('bl');
  return `<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block"><defs>${items.map((i) => i.def).join('')}<filter id="${bl}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="60"/></filter></defs>${items.map((i) => i.el.replace('/>', ` filter="url(#${bl})" opacity=".5"/>`)).join('')}${items.map((i) => i.el).join('')}</svg>`;
}

/** Molecule / science graphic */
export function molecule(c = '#2DD4BF', seed = 'mol') {
  const r = rng(seed);
  const nodes = Array.from({ length: 16 }, () => [150 + r() * 900, 120 + r() * 560, 14 + r() * 30]);
  const g = id('mg');
  let lines = '';
  nodes.forEach((a, i) => nodes.slice(i + 1).forEach((b) => { if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 260) lines += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-opacity=".35" stroke-width="3"/>`; }));
  return `<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block"><defs><radialGradient id="${g}" cx=".3" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="${c}"/><stop offset="1" stop-color="${mix(c, '#000', 0.6)}"/></radialGradient></defs>${lines}${nodes.map(([x, y, s]) => `<circle cx="${x}" cy="${y}" r="${s}" fill="url(#${g})"/>`).join('')}</svg>`;
}

/** Stylised map with pins */
export function map(c = {}, seed = 'map') {
  const r = rng(seed);
  const land = c.land || '#EDE8DF', water = c.water || '#BFD9E6', road = c.road || '#FFFFFF', pin = c.pin || '#E5484D';
  let roads = '';
  for (let i = 0; i < 14; i++) roads += `<path d="M${r() * 1200},0 C${r() * 1200},${r() * 400} ${r() * 1200},${400 + r() * 400} ${r() * 1200},800" stroke="${road}" stroke-width="${3 + r() * 8}" fill="none"/>`;
  for (let i = 0; i < 10; i++) roads += `<path d="M0,${r() * 800} C${r() * 400},${r() * 800} ${800 + r() * 400},${r() * 800} 1200,${r() * 800}" stroke="${road}" stroke-width="${2 + r() * 5}" fill="none"/>`;
  return `<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block"><rect width="1200" height="800" fill="${land}"/><path d="M0 560 C200 520 300 640 520 600 S900 700 1200 620 V800 H0Z" fill="${water}"/>${Array.from({ length: 8 }, () => `<rect x="${r() * 1100}" y="${r() * 500}" width="${60 + r() * 120}" height="${40 + r() * 80}" rx="8" fill="${c.park || '#CFE3C4'}"/>`).join('')}${roads}${Array.from({ length: c.pins || 9 }, () => { const x = 100 + r() * 1000, y = 80 + r() * 500; return `<g transform="translate(${x} ${y})"><circle r="22" fill="${pin}" opacity=".2"/><path d="M0 8 C-14 -6 -14 -26 0 -26 C14 -26 14 -6 0 8Z" fill="${pin}"/><circle cy="-15" r="5" fill="#fff"/></g>`; }).join('')}</svg>`;
}

/** Initials avatar */
export const avatar = (txt, a = '#ddd', b = '#bbb', size = 40) =>
  `<span style="display:inline-grid;place-items:center;width:${size}px;height:${size}px;border-radius:50%;background:linear-gradient(135deg,${a},${b});color:#111;font:600 ${Math.round(size * 0.38)}px/1 system-ui;flex:0 0 auto">${txt}</span>`;

/** Smooth line chart path */
export function spark(seed, w, h, n = 14, up = 0.6) {
  const r = rng(seed);
  const pts = Array.from({ length: n }, (_, i) => [(i / (n - 1)) * w, h - (0.15 + (i / (n - 1)) * up + (r() - 0.5) * 0.2) * h]);
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < n; i++) { const [px, py] = pts[i - 1], [x, y] = pts[i], mx = (px + x) / 2; d += ` C${mx},${py} ${mx},${y} ${x},${y}`; }
  return { d, area: `${d} L${w},${h} L0,${h}Z`, end: pts[n - 1] };
}
