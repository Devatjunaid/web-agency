// Full-page HTML templates for the portfolio sites. Each project in src/portfolio.mjs
// is rendered to a real, responsive web page and screenshotted by render.mjs.
import { scene, interior, product, plate, building, orbs, molecule, map, avatar, spark, rng } from './visuals.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
const ICONS = {
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>', shield: '<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"/>', chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>', users: '<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6M17 11a3 3 0 1 0 0-6M22 21c0-3-2-5-5-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', heart: '<path d="M12 21s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z"/>', leaf: '<path d="M4 20C4 9 11 4 20 4c0 9-5 16-16 16zM4 20l8-8"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/>', star: '<path d="m12 3 2.7 5.6 6.3.9-4.5 4.4 1 6.1L12 17l-5.5 3 1-6.1L3 9.5l6.3-.9z"/>', code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5"/>',
  home: '<path d="M3 11 12 3l9 8v10H3z"/><path d="M9 21v-6h6v6"/>', map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>', check: '<path d="m5 12 5 5 9-10"/>', truck: '<path d="M2 6h12v10H2zM14 10h4l4 3v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  tooth: '<path d="M7 3c-3 0-4 3-3 6l2 11c.3 1.5 2 1.5 2.4 0L9.5 14h5l1.1 6c.4 1.5 2.1 1.5 2.4 0l2-11c1-3 0-6-3-6-2 0-3 1-5 1S9 3 7 3z"/>', spark: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>', cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
};
const icon = (n, size = 22) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[n] || ICONS.spark}</svg>`;
const stars = (n = 5) => `<span class="stars">${'★'.repeat(n)}</span>`;

/* ---------------- Visual blocks ---------------- */
export function visual(v, p) {
  if (!v) return '';
  const t = p.theme;
  switch (v.kind) {
    case 'scene': return scene(v.scene || 'mountains', v.time || 'dusk', p.slug + (v.seed || ''), { tint: v.tint });
    case 'interior': return interior(v.colors || {}, p.slug + (v.seed || ''));
    case 'plate': return plate(p.slug + (v.seed || ''), v.colors || {});
    case 'building': return building(p.slug + (v.seed || ''), v.colors || {});
    case 'orbs': return orbs(v.colors || [t.accent, t.alt || t.accent, t.fg], p.slug + (v.seed || ''));
    case 'molecule': return molecule(v.color || t.accent, p.slug);
    case 'map': return map(v.colors || {}, p.slug + (v.seed || ''));
    case 'product': return `<div class="prodstage" style="background:${v.bg || t.surface}">${product(v.item, v.color, { label: v.label })}</div>`;
    case 'products': return `<div class="prodstage prodstage--multi" style="background:${v.bg || t.surface}">${v.items.map(([k, c, l]) => `<div>${product(k, c, { label: l })}</div>`).join('')}</div>`;
    case 'dashboard': return dashboard(p, v);
    case 'phones': return phones(p, v);
    case 'terminal': return terminal(p, v);
    default: return '';
  }
}

function dashboard(p, v) {
  const t = p.theme;
  const d = v.data;
  const sp = spark(p.slug, 560, 170, 16, 0.55);
  const sp2 = spark(p.slug + 'b', 560, 170, 16, 0.3);
  return `<div class="dash ${v.light ? 'dash--light' : ''}">
  <aside class="dash__side"><div class="dash__brand">${logoMark(p, 22)}<b>${esc(p.name)}</b></div>
    ${d.menu.map((m, i) => `<div class="dash__mi ${i === 0 ? 'on' : ''}">${icon(['chart', 'card', 'users', 'cal', 'globe', 'lock'][i % 6], 16)}${esc(m)}</div>`).join('')}
    <div class="dash__user">${avatar(d.user.split(' ').map((s) => s[0]).join(''), t.accent, t.alt || t.accent, 30)}<div><b>${esc(d.user)}</b><small>${esc(d.org)}</small></div></div>
  </aside>
  <div class="dash__main">
    <div class="dash__top"><div><h4>${esc(d.title)}</h4><small>${esc(d.subtitle)}</small></div><div class="dash__search">${icon('spark', 14)} Search…<kbd>⌘K</kbd></div></div>
    <div class="dash__kpis">${d.kpis.map(([l, val, ch]) => `<div class="dash__kpi"><small>${esc(l)}</small><b>${esc(val)}</b><span class="${String(ch).startsWith('-') ? 'neg' : ''}">${esc(ch)}</span></div>`).join('')}</div>
    <div class="dash__row">
      <div class="dash__card dash__chart"><div class="dash__ch"><b>${esc(d.chart)}</b><span>Last 12 months</span></div>
        <svg viewBox="0 0 560 190" preserveAspectRatio="none"><defs><linearGradient id="dg-${p.slug}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.accent}" stop-opacity=".35"/><stop offset="1" stop-color="${t.accent}" stop-opacity="0"/></linearGradient></defs>
        ${[0, 1, 2, 3].map((i) => `<line x1="0" x2="560" y1="${20 + i * 45}" y2="${20 + i * 45}" stroke="currentColor" stroke-opacity=".08"/>`).join('')}
        <path d="${sp.area}" transform="translate(0 15)" fill="url(#dg-${p.slug})"/><path d="${sp.d}" transform="translate(0 15)" fill="none" stroke="${t.accent}" stroke-width="2.5"/>
        <path d="${sp2.d}" transform="translate(0 15)" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="2" stroke-dasharray="5 5"/>
        <circle cx="${sp.end[0] - 2}" cy="${sp.end[1] + 15}" r="5" fill="${t.accent}"/></svg>
        <div class="dash__months">${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => `<span>${m}</span>`).join('')}</div>
      </div>
      <div class="dash__card dash__list"><div class="dash__ch"><b>${esc(d.listTitle)}</b><span>View all</span></div>
        ${d.list.map(([n, s, a, st]) => `<div class="dash__li">${avatar(n.split(' ').map((x) => x[0]).join('').slice(0, 2), '#E5E7EB', '#CBD5E1', 30)}<div><b>${esc(n)}</b><small>${esc(s)}</small></div><em>${esc(a)}</em><i class="pill pill--${st === 'Failed' || st === 'Overdue' ? 'bad' : st === 'Pending' || st === 'Review' ? 'wait' : 'ok'}">${esc(st)}</i></div>`).join('')}
      </div>
    </div>
  </div>
</div>`;
}

function phones(p, v) {
  const t = p.theme;
  const screen = (kind) => {
    const sp = spark(p.slug + kind, 200, 70, 10, 0.5);
    if (kind === 'ring') return `<div class="ph__hd"><small>Good morning</small><b>${esc(v.user || 'Alex')}</b></div><div class="ph__ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-opacity=".1" stroke-width="10"/><circle cx="60" cy="60" r="50" fill="none" stroke="${t.accent}" stroke-width="10" stroke-linecap="round" stroke-dasharray="230 400" transform="rotate(-90 60 60)"/><circle cx="60" cy="60" r="36" fill="none" stroke="currentColor" stroke-opacity=".1" stroke-width="8"/><circle cx="60" cy="60" r="36" fill="none" stroke="${t.alt}" stroke-width="8" stroke-linecap="round" stroke-dasharray="150 400" transform="rotate(-90 60 60)"/></svg><div><b>${esc(v.ring || '78%')}</b><small>${esc(v.ringLabel || 'daily goal')}</small></div></div>${(v.items || []).map(([a, b]) => `<div class="ph__item"><i style="background:${t.accent}"></i><div><b>${esc(a)}</b><small>${esc(b)}</small></div><span>›</span></div>`).join('')}`;
    if (kind === 'chart') return `<div class="ph__hd"><small>This week</small><b>${esc(v.chartTitle || 'Progress')}</b></div><div class="ph__big">${esc(v.big || '12,480')}<small>${esc(v.bigLabel || 'total')}</small></div><svg viewBox="0 0 200 80" class="ph__sp"><path d="${sp.area}" fill="${t.accent}" fill-opacity=".18"/><path d="${sp.d}" stroke="${t.accent}" stroke-width="2.5" fill="none"/></svg><div class="ph__bars">${[40, 65, 50, 80, 60, 95, 70].map((h, i) => `<i style="height:${h}%;background:${i === 5 ? t.accent : 'currentColor'};opacity:${i === 5 ? 1 : 0.15}"></i>`).join('')}</div>${(v.items || []).slice(0, 2).map(([a, b]) => `<div class="ph__item"><i style="background:${t.alt}"></i><div><b>${esc(a)}</b><small>${esc(b)}</small></div><span>›</span></div>`).join('')}`;
    return `<div class="ph__hd"><small>${esc(v.listSub || 'Today')}</small><b>${esc(v.listTitle || 'Schedule')}</b></div>${(v.list || v.items || []).map(([a, b], i) => `<div class="ph__card" style="${i === 0 ? `background:${t.accent};color:${t.accentInk}` : ''}"><b>${esc(a)}</b><small>${esc(b)}</small></div>`).join('')}`;
  };
  return `<div class="phones">${['list', 'ring', 'chart'].map((k, i) => `<div class="ph ph--${i}"><div class="ph__notch"></div><div class="ph__status"><span>9:41</span><span>●●● ▮</span></div>${screen(k)}<div class="ph__tab">${['home', 'chart', 'cal', 'users'].map((n, j) => `<span class="${j === 0 ? 'on' : ''}">${icon(n, 16)}</span>`).join('')}</div></div>`).join('')}</div>`;
}

function terminal(p, v) {
  return `<div class="term"><div class="term__bar"><i></i><i></i><i></i><span>${esc(v.file || 'deploy.sh')}</span></div><pre>${v.lines.map((l) => (l.startsWith('$') ? `<span class="t-c">$</span> ${esc(l.slice(2))}` : l.startsWith('✓') ? `<span class="t-ok">${esc(l)}</span>` : l.startsWith('→') ? `<span class="t-acc">${esc(l)}</span>` : `<span class="t-m">${esc(l)}</span>`)).join('\n')}</pre></div>`;
}

function logoMark(p, s = 28) {
  const t = p.theme;
  const shapes = {
    circle: `<circle cx="16" cy="16" r="14" fill="${t.accent}"/><circle cx="21" cy="11" r="6" fill="${t.bg}"/>`,
    square: `<rect x="3" y="3" width="26" height="26" rx="8" fill="${t.accent}"/><path d="M10 21 16 9l6 12" stroke="${t.accentInk}" stroke-width="3" fill="none" stroke-linejoin="round"/>`,
    bolt: `<rect x="2" y="2" width="28" height="28" rx="9" fill="${t.accent}"/><path d="M18 6 9 18h6l-2 8 9-12h-6z" fill="${t.accentInk}"/>`,
    leaf: `<path d="M4 28C4 12 14 4 28 4c0 14-8 24-24 24z" fill="${t.accent}"/><path d="M4 28 18 14" stroke="${t.bg}" stroke-width="2.5"/>`,
    ring: `<circle cx="16" cy="16" r="12" fill="none" stroke="${t.accent}" stroke-width="5"/><circle cx="16" cy="16" r="4" fill="${t.accent}"/>`,
    diamond: `<rect x="7" y="7" width="18" height="18" transform="rotate(45 16 16)" fill="${t.accent}"/>`,
    wave: `<rect x="2" y="2" width="28" height="28" rx="14" fill="${t.accent}"/><path d="M7 18c3-5 6-5 9 0s6 5 9 0" stroke="${t.accentInk}" stroke-width="2.6" fill="none"/>`,
    stack: `<rect x="4" y="5" width="24" height="6" rx="3" fill="${t.accent}"/><rect x="4" y="13" width="24" height="6" rx="3" fill="${t.accent}" opacity=".7"/><rect x="4" y="21" width="24" height="6" rx="3" fill="${t.accent}" opacity=".45"/>`,
  };
  return `<svg width="${s}" height="${s}" viewBox="0 0 32 32">${shapes[p.logo] || shapes.circle}</svg>`;
}
const brand = (p) => `<a class="brand">${p.logoText === false ? '' : logoMark(p)}<span>${esc(p.brandText || p.name)}</span></a>`;
const navLinks = (p) => `<nav class="links">${p.nav.map((n, i) => `<a class="${i === 0 ? 'on' : ''}">${esc(n)}</a>`).join('')}</nav>`;
const btns = (h) => `<div class="btns"><a class="btn btn--p">${esc(h.cta)}${h.ctaArrow === false ? '' : ' <span>→</span>'}</a>${h.cta2 ? `<a class="btn btn--g">${esc(h.cta2)}</a>` : ''}</div>`;
const announce = (p) => (p.announce ? `<div class="announce">${esc(p.announce)}</div>` : '');
const burger = `<button class="burger" aria-label="menu"><i></i><i></i></button>`;
const title = (h) => esc(h.title).replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/\n/g, '<br>');

function header(p, { icons = false, over = false } = {}) {
  return `${announce(p)}<header class="hdr ${over ? 'hdr--over' : ''}"><div class="wrap nav">${brand(p)}${navLinks(p)}<div class="actions">${icons ? `<a class="ic">${icon('spark', 18).replace(ICONS.spark, '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>')}</a><a class="ic">${icon('users', 18)}</a><a class="ic cart">${icon('card', 18).replace(ICONS.card, '<path d="M6 7h12l-1 13H7z"/><path d="M9 7a3 3 0 0 1 6 0"/>')}<b>2</b></a>` : ''}${p.navCta ? `<a class="btn btn--p btn--sm">${esc(p.navCta)}</a>` : ''}${p.navLogin ? `<a class="login">${esc(p.navLogin)}</a>` : ''}${burger}</div></div></header>`;
}

function logos(p) {
  const names = p.logos || ['Northwind', 'Lumen', 'Kinetic', 'Arcadia', 'Polaris', 'Ferro'];
  const fonts = ['Georgia,serif', 'system-ui', '"Courier New",monospace', 'Impact,sans-serif', 'system-ui', 'Georgia,serif'];
  return `<section class="logos"><div class="wrap"><p>${esc(p.logosLabel || 'Trusted by fast-moving teams')}</p><div class="logos__row">${names.map((n, i) => `<span style="font-family:${fonts[i % 6]};${i % 2 ? 'font-weight:800;letter-spacing:-.02em' : 'letter-spacing:.06em;text-transform:uppercase;font-size:15px'}">${esc(n)}</span>`).join('')}</div></div></section>`;
}
function features(p) {
  if (!p.features) return '';
  return `<section class="sec"><div class="wrap"><div class="sec__head"><p class="eyebrow">${esc(p.featuresEyebrow || 'Features')}</p><h2>${esc(p.featuresTitle)}</h2></div><div class="grid3">${p.features.map(([ic, h, tx]) => `<div class="feat"><span class="feat__ic">${icon(ic)}</span><h3>${esc(h)}</h3><p>${esc(tx)}</p><a>Learn more →</a></div>`).join('')}</div></div></section>`;
}
function split(p) {
  if (!p.split) return '';
  const s = p.split;
  return `<section class="sec sec--alt"><div class="wrap split ${s.flip ? 'split--flip' : ''}"><div class="split__media">${visual(s.visual, p)}</div><div><p class="eyebrow">${esc(s.eyebrow)}</p><h2>${esc(s.title)}</h2><p class="lead">${esc(s.text)}</p><ul class="checks">${s.points.map((x) => `<li>${icon('check', 18)}${esc(x)}</li>`).join('')}</ul><a class="btn btn--p">${esc(s.cta || 'Get started')} <span>→</span></a></div></div></section>`;
}
function stats(p) {
  if (!p.stats) return '';
  return `<section class="statband"><div class="wrap statband__in">${p.stats.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div></section>`;
}
function quote(p) {
  if (!p.quote) return '';
  const [q, n, r] = p.quote;
  return `<section class="sec"><div class="wrap quote">${stars()}<blockquote>“${esc(q)}”</blockquote><div class="who">${avatar(n.split(' ').map((x) => x[0]).join(''), p.theme.accent, p.theme.alt || p.theme.accent, 48)}<div><b>${esc(n)}</b><small>${esc(r)}</small></div></div></div></section>`;
}
function cta(p) {
  return `<section class="sec"><div class="wrap"><div class="ctaband"><h2>${esc(p.ctaTitle || 'Ready to get started?')}</h2><p>${esc(p.ctaText || 'Join thousands of customers today.')}</p><a class="btn btn--p">${esc(p.hero.cta)} <span>→</span></a></div></div></section>`;
}
function footer(p) {
  const cols = p.footerCols || [['Product', ['Overview', 'Pricing', 'Customers', 'Changelog']], ['Company', ['About', 'Careers', 'Press', 'Contact']], ['Resources', ['Blog', 'Guides', 'Help centre', 'Status']]];
  return `<footer class="ftr"><div class="wrap"><div class="ftr__grid"><div>${brand(p)}<p>${esc(p.footerText || p.hero.sub)}</p>${p.newsletter ? `<form class="news"><input placeholder="Email address"><button class="btn btn--p btn--sm">Subscribe</button></form>` : ''}</div>${cols.map(([h, ls]) => `<div><h4>${esc(h)}</h4>${ls.map((l) => `<a>${esc(l)}</a>`).join('')}</div>`).join('')}</div><div class="ftr__bot"><span>© ${p.year} ${esc(p.name)}. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div></div></footer>`;
}

/* ---------------- Families ---------------- */
const F = {
  saas(p) {
    const h = p.hero;
    const center = h.align === 'center';
    return `${header(p)}
<section class="hero ${center ? 'hero--center' : 'hero--split'}"><div class="wrap">
  <div class="hero__copy">${h.badge ? `<a class="badge"><b>${esc(h.badgeTag || 'New')}</b>${esc(h.badge)} →</a>` : ''}<h1>${title(h)}</h1><p class="lead">${esc(h.sub)}</p>${btns(h)}${h.note ? `<p class="note">${esc(h.note)}</p>` : ''}</div>
  <div class="hero__media ${center ? 'hero__media--wide' : ''}">${visual(h.visual, p)}${h.float ? `<div class="float">${h.float}</div>` : ''}</div>
</div></section>
${logos(p)}${features(p)}${split(p)}${stats(p)}${quote(p)}${cta(p)}${footer(p)}`;
  },
  shop(p) {
    const h = p.hero;
    return `${header(p, { icons: true })}
<section class="shophero"><div class="wrap shophero__in">
  <div class="shophero__copy"><p class="eyebrow">${esc(h.eyebrow)}</p><h1>${title(h)}</h1><p class="lead">${esc(h.sub)}</p>${btns(h)}<div class="perks">${(p.perks || ['Free shipping over $75', '30-day returns', 'Secure checkout']).map((x, i) => `<span>${icon(['truck', 'clock', 'lock'][i], 16)}${esc(x)}</span>`).join('')}</div></div>
  <div class="shophero__media">${visual(h.visual, p)}<div class="float float--card"><small>Bestseller</small><b>${esc(p.products[0][0])}</b><span>${stars()} 4.9 <em>(2,184)</em></span></div></div>
</div></section>
<section class="cats"><div class="wrap cats__row">${(p.cats || []).map((c, i) => `<a class="${i === 0 ? 'on' : ''}">${esc(c)}</a>`).join('')}</div></section>
<section class="sec"><div class="wrap"><div class="sec__head sec__head--row"><h2>${esc(p.gridTitle || 'Bestsellers')}</h2><a>Shop all →</a></div><div class="grid4">${p.products.map(([n, pr, k, c, l, tag], i) => `<div class="pcard"><div class="pcard__img" style="background:${p.theme.tile || p.theme.surface}">${tag ? `<i class="tag">${esc(tag)}</i>` : ''}${product(k, c, { label: l })}</div><div class="pcard__info"><div><b>${esc(n)}</b><small>${esc(p.variants?.[i] || 'Available in 3 colours')}</small></div><span>${esc(pr)}</span></div><div class="pcard__rate">${stars()} <em>${[412, 238, 1093, 87][i % 4]} reviews</em></div></div>`).join('')}</div></div></section>
${split(p)}${quote(p)}${footer({ ...p, newsletter: true })}`;
  },
  editorial(p) {
    const h = p.hero;
    return `${announce(p)}<header class="hdr hdr--ed"><div class="wrap nav nav--ed"><nav class="links">${p.nav.slice(0, 3).map((n) => `<a>${esc(n)}</a>`).join('')}</nav>${brand(p)}<div class="actions"><nav class="links">${p.nav.slice(3).map((n) => `<a>${esc(n)}</a>`).join('')}</nav>${p.navCta ? `<a class="btn btn--p btn--sm">${esc(p.navCta)}</a>` : ''}${burger}</div></div></header>
<section class="edhero"><div class="wrap"><p class="eyebrow">${esc(h.eyebrow)}</p><h1>${title(h)}</h1><div class="edhero__grid"><div class="edhero__copy"><p class="lead">${esc(h.sub)}</p>${btns(h)}${h.info ? `<dl class="info">${h.info.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>` : ''}</div><div class="edhero__img">${visual(h.visual, p)}</div></div></div></section>
${p.list ? `<section class="sec sec--alt"><div class="wrap edlist"><div><p class="eyebrow">${esc(p.list.eyebrow)}</p><h2>${esc(p.list.title)}</h2><p class="lead">${esc(p.list.text)}</p></div><div>${p.list.items.map(([a, b, c]) => `<div class="edlist__row"><div><b>${esc(a)}</b><small>${esc(b)}</small></div><span>${esc(c)}</span></div>`).join('')}</div></div></section>` : ''}
${split(p)}${stats(p)}${quote(p)}${footer(p)}`;
  },
  local(p) {
    const h = p.hero;
    return `<div class="topbar"><div class="wrap topbar__in"><span>${icon('clock', 14)} ${esc(p.hours)}</span><span>${icon('map', 14)} ${esc(p.address)}</span><a>${esc(p.topCta || 'Book online')} →</a></div></div>${header(p)}
<section class="hero hero--split hero--local"><div class="wrap">
  <div class="hero__copy"><span class="pill2">${icon('check', 14)} ${esc(h.eyebrow)}</span><h1>${title(h)}</h1><p class="lead">${esc(h.sub)}</p><ul class="checks checks--row">${(h.points || []).map((x) => `<li>${icon('check', 16)}${esc(x)}</li>`).join('')}</ul>${btns(h)}<div class="reviews"><div class="avs">${['JM', 'AK', 'SR', 'LT'].map((x, i) => avatar(x, ['#F9D9C4', '#CDE7F0', '#E2D9F3', '#D9F0D3'][i], ['#F2B48F', '#9CCFE0', '#C5B4E8', '#ACD9A2'][i], 36)).join('')}</div><div>${stars()} <b>4.9</b><small>${esc(h.reviews || 'from 1,200+ Google reviews')}</small></div></div></div>
  <div class="hero__media hero__media--tall">${visual(h.visual, p)}<div class="float float--appt"><span class="float__ic">${icon('cal', 18)}</span><div><small>Next available</small><b>${esc(h.next || 'Tomorrow · 9:30 AM')}</b></div></div></div>
</div></section>
<section class="sec sec--alt"><div class="wrap"><div class="sec__head"><p class="eyebrow">${esc(p.featuresEyebrow || 'Services')}</p><h2>${esc(p.featuresTitle)}</h2></div><div class="grid4">${p.features.map(([ic, a, b]) => `<div class="feat feat--card"><span class="feat__ic">${icon(ic)}</span><h3>${esc(a)}</h3><p>${esc(b)}</p><a>Learn more →</a></div>`).join('')}</div></div></section>
${stats(p)}${split(p)}${quote(p)}${cta(p)}${footer(p)}`;
  },
  listing(p) {
    const h = p.hero;
    return `${header(p, { over: true })}
<section class="lhero"><div class="lhero__bg">${visual(h.visual, p)}</div><div class="wrap lhero__in"><p class="eyebrow">${esc(h.eyebrow)}</p><h1>${title(h)}</h1><p class="lead">${esc(h.sub)}</p>
  <div class="search">${h.search.map(([a, b]) => `<div><small>${esc(a)}</small><b>${esc(b)}</b></div>`).join('')}<a class="btn btn--p">${icon('spark', 16).replace(ICONS.spark, '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>')} ${esc(h.cta)}</a></div></div></section>
<section class="sec"><div class="wrap"><div class="sec__head sec__head--row"><div><p class="eyebrow">${esc(p.gridEyebrow || 'Featured')}</p><h2>${esc(p.gridTitle)}</h2></div><a>View all →</a></div><div class="grid3">${p.listings.map(([a, b, pr, v], i) => `<div class="lcard"><div class="lcard__img">${visual(v, { ...p, slug: p.slug + i })}<i class="tag">${i === 0 ? 'Guest favourite' : i === 1 ? 'New' : 'Popular'}</i><span class="heart">${icon('heart', 18)}</span></div><div class="lcard__info"><div><b>${esc(a)}</b><small>${esc(b)}</small></div><span>★ 4.${9 - (i % 3)}</span></div><p class="lcard__price"><b>${esc(pr)}</b></p></div>`).join('')}</div></div></section>
${split(p)}${stats(p)}${quote(p)}${footer(p)}`;
  },
  app(p) {
    const h = p.hero;
    return `${header(p)}
<section class="hero hero--split hero--app"><div class="wrap">
  <div class="hero__copy">${h.badge ? `<a class="badge"><b>${esc(h.badgeTag || 'New')}</b>${esc(h.badge)} →</a>` : ''}<h1>${title(h)}</h1><p class="lead">${esc(h.sub)}</p>
  <div class="stores"><a class="store"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 4.9c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z"/></svg><div><small>Download on the</small><b>App Store</b></div></a><a class="store"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 2l11 10L3 22z" fill="#34A853"/><path d="M3 2l14 8-3 2z" fill="#4285F4"/><path d="M3 22l14-8-3-2z" fill="#EA4335"/><path d="M17 10l4 2-4 2-3-2z" fill="#FBBC04"/></svg><div><small>Get it on</small><b>Google Play</b></div></a></div>
  <div class="reviews"><div>${stars()} <b>4.8</b><small>${esc(h.reviews || '42,000+ ratings')}</small></div><div class="sep"></div><div><b>${esc(h.downloads || '1M+')}</b><small>downloads</small></div></div></div>
  <div class="hero__media hero__media--phones">${visual(h.visual, p)}</div>
</div></section>
${logos(p)}${features(p)}${split(p)}${stats(p)}${quote(p)}${cta(p)}${footer(p)}`;
  },
  tech(p) {
    const h = p.hero;
    return `${header(p)}
<section class="hero hero--center hero--tech"><div class="glow"></div><div class="wrap">
  <div class="hero__copy">${h.badge ? `<a class="badge"><b>${esc(h.badgeTag || 'New')}</b>${esc(h.badge)} →</a>` : ''}<h1>${title(h)}</h1><p class="lead">${esc(h.sub)}</p>${btns(h)}${h.cmd ? `<div class="cmd"><span>$</span> ${esc(h.cmd)} <i>${icon('card', 14).replace(ICONS.card, '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>')}</i></div>` : ''}</div>
  <div class="hero__media hero__media--wide tech__panel">${visual(h.visual, p)}${h.side ? `<div class="tech__side">${h.side.map(([a, b, c]) => `<div class="metric"><small>${esc(a)}</small><b>${esc(b)}</b><span>${esc(c)}</span></div>`).join('')}</div>` : ''}</div>
</div></section>
${logos(p)}${features(p)}${split(p)}${stats(p)}${quote(p)}${cta(p)}${footer(p)}`;
  },
  bold(p) {
    const h = p.hero;
    return `${header(p)}
<section class="bhero"><div class="bhero__bg">${visual(h.visual, p)}</div><div class="wrap bhero__in"><p class="eyebrow">${esc(h.eyebrow)}</p><h1>${title(h)}</h1><div class="bhero__row"><p class="lead">${esc(h.sub)}</p>${btns(h)}</div></div><div class="ticker"><div>${Array(6).fill(esc(h.ticker)).join(' <i>✦</i> ')}</div></div></section>
${p.list ? `<section class="sec"><div class="wrap"><div class="sec__head sec__head--row"><h2>${esc(p.list.title)}</h2><a>Full line-up →</a></div><div class="lineup">${p.list.items.map(([a, b, c]) => `<div class="lineup__row"><span>${esc(c)}</span><b>${esc(a)}</b><small>${esc(b)}</small><a>Tickets →</a></div>`).join('')}</div></div></section>` : ''}
${split(p)}${stats(p)}${quote(p)}${footer(p)}`;
  },
};

/* ---------------- Page shell ---------------- */
export function renderPage(p) {
  const t = p.theme;
  const fonts = [...new Set([p.fonts.head, p.fonts.body])].map((f) => `family=${encodeURIComponent(f)}:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500`).join('&');
  const dark = t.dark;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(p.name)}</title>
<link href="https://fonts.googleapis.com/css2?${fonts}&display=block" rel="stylesheet">
<style>
:root{--bg:${t.bg};--fg:${t.fg};--muted:${t.muted};--acc:${t.accent};--ink:${t.accentInk};--sf:${t.surface};--line:${t.line};--alt:${t.alt || t.accent};--fh:'${p.fonts.head}',system-ui,sans-serif;--fb:'${p.fonts.body}',system-ui,sans-serif;--r:${p.radius ?? 14}px;--hw:${p.headWeight || 700};--ht:${p.headTrack || '-0.03em'};--sec:${t.section || t.surface}}
*{box-sizing:border-box}html,body{margin:0}body{background:var(--bg);color:var(--fg);font:400 16px/1.6 var(--fb);-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none;cursor:pointer}h1,h2,h3,h4{font-family:var(--fh);font-weight:var(--hw);letter-spacing:var(--ht);line-height:1.05;margin:0}
h1{font-size:${p.h1 || 68}px}h2{font-size:42px}h3{font-size:20px}em{font-style:${p.emItalic ? 'italic' : 'normal'};color:${p.emColor || 'var(--acc)'}}
.wrap{max-width:1240px;margin:0 auto;padding:0 40px}
.lead{font-size:18px;color:var(--muted);max-width:560px;margin:20px 0 0}.eyebrow{font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--acc);margin:0 0 16px}
.btns{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap}.btn{display:inline-flex;align-items:center;gap:8px;height:50px;padding:0 24px;border-radius:${p.btnRadius ?? 999}px;font-weight:600;font-size:15px;white-space:nowrap}
.btn--p{background:var(--acc);color:var(--ink)}.btn--g{border:1px solid var(--line);background:${dark ? 'rgba(255,255,255,.04)' : '#fff'}}.btn--sm{height:40px;padding:0 18px;font-size:14px}
.announce{background:${t.announceBg || 'var(--fg)'};color:${t.announceFg || 'var(--bg)'};text-align:center;font-size:13px;padding:9px;font-weight:500}
.hdr{position:relative;z-index:5;border-bottom:1px solid ${p.navBorder === false ? 'transparent' : 'var(--line)'};background:${t.navBg || 'var(--bg)'}}.hdr--over{position:absolute;left:0;right:0;background:transparent;border:0;color:#fff}
.nav{height:76px;display:flex;align-items:center;gap:40px}.brand{display:flex;align-items:center;gap:10px;font-family:var(--fh);font-weight:${p.brandWeight || 700};font-size:${p.brandSize || 20}px;letter-spacing:${p.brandTrack || '-0.02em'};${p.brandUpper ? 'text-transform:uppercase;' : ''}white-space:nowrap}
.links{display:flex;gap:30px;font-size:15px;color:var(--muted)}.hdr--over .links{color:rgba(255,255,255,.85)}.links a.on{color:var(--fg)}.hdr--over .links a.on{color:#fff}
.actions{margin-left:auto;display:flex;align-items:center;gap:18px}.login{font-size:15px;font-weight:500;order:-1}.ic{display:grid;place-items:center;position:relative}.cart b{position:absolute;top:-8px;right:-9px;background:var(--acc);color:var(--ink);font-size:10px;width:17px;height:17px;border-radius:50%;display:grid;place-items:center}
.burger{display:none;width:40px;height:40px;border:1px solid var(--line);border-radius:10px;background:none;position:relative}.burger i{position:absolute;left:11px;right:11px;height:2px;background:currentColor}.burger i:first-child{top:15px}.burger i:last-child{top:23px}
.nav--ed{display:grid;grid-template-columns:1fr auto 1fr}.nav--ed .actions{justify-content:flex-end}
.hero{padding:${p.heroPad || 84}px 0 90px;position:relative;overflow:hidden}.hero--split .wrap{display:grid;grid-template-columns:1fr 1.08fr;gap:60px;align-items:center}.hero--center{text-align:center}.hero--center .lead{margin-left:auto;margin-right:auto}.hero--center .btns{justify-content:center}
.hero--center .hero__copy{max-width:880px;margin:0 auto}.hero__media{position:relative;border-radius:var(--r);overflow:hidden;min-height:440px;background:var(--sf)}.hero__media--wide{margin-top:64px;min-height:0;overflow:visible;background:none}.hero__media--tall{min-height:540px}
.hero__media--phones{background:none;overflow:visible;min-height:560px}.note{font-size:13px;color:var(--muted);margin-top:16px}
.badge{display:inline-flex;align-items:center;gap:10px;font-size:14px;padding:5px 14px 5px 5px;border-radius:999px;border:1px solid var(--line);background:${dark ? 'rgba(255,255,255,.04)' : '#fff'};margin-bottom:26px;color:var(--muted)}.badge b{background:var(--acc);color:var(--ink);font-size:12px;padding:3px 10px;border-radius:999px}
.float{position:absolute;background:${dark ? 'rgba(20,22,30,.85)' : 'rgba(255,255,255,.95)'};color:var(--fg);backdrop-filter:blur(10px);border:1px solid var(--line);border-radius:14px;padding:14px 18px;box-shadow:0 20px 50px -20px rgba(0,0,0,.35);font-size:14px}
.float--card{left:-24px;bottom:40px;display:flex;flex-direction:column;gap:2px}.float--card small{color:var(--muted);font-size:12px}.float--card em{color:var(--muted);font-style:normal}
.float--appt{left:24px;bottom:24px;display:flex;gap:12px;align-items:center}.float__ic{width:40px;height:40px;border-radius:10px;background:var(--acc);color:var(--ink);display:grid;place-items:center}.float--appt small{display:block;color:var(--muted);font-size:12px}
.stars{color:#F5B301;letter-spacing:1px}
.logos{padding:34px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.logos p{text-align:center;color:var(--muted);font-size:13px;margin:0 0 20px}.logos__row{display:flex;justify-content:space-between;gap:30px;font-size:22px;color:var(--muted);opacity:.85;flex-wrap:wrap}
.sec{padding:96px 0}.sec--alt{background:var(--sec)}.sec__head{max-width:640px;margin-bottom:48px}.sec__head--row{max-width:none;display:flex;justify-content:space-between;align-items:end}.sec__head--row a{font-weight:600}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.feat{padding:30px;border:1px solid var(--line);border-radius:var(--r);background:${dark ? 'rgba(255,255,255,.02)' : '#fff'}}.feat__ic{width:46px;height:46px;border-radius:12px;display:grid;place-items:center;background:${t.iconBg || 'color-mix(in srgb,var(--acc) 15%,transparent)'};color:${t.iconFg || 'var(--acc)'};margin-bottom:22px}.feat h3{margin-bottom:8px}.feat p{color:var(--muted);margin:0 0 18px;font-size:15px}.feat a{font-weight:600;font-size:14px}
.split{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.split--flip .split__media{order:2}.split__media{border-radius:var(--r);overflow:hidden;min-height:420px;background:var(--sf);position:relative}.split__media>svg,.split__media>.dash,.split__media>.prodstage{position:absolute;inset:0}
.checks{list-style:none;padding:0;margin:24px 0 32px;display:grid;gap:12px}.checks li{display:flex;gap:10px;align-items:center}.checks svg{color:var(--acc);flex:0 0 auto}.checks--row{grid-template-columns:1fr 1fr;margin:24px 0 0;font-size:15px}
.statband{background:${t.bandBg || 'var(--fg)'};color:${t.bandFg || 'var(--bg)'};padding:60px 0}.statband__in{display:grid;grid-template-columns:repeat(4,1fr);gap:30px}.statband b{display:block;font:var(--hw) 48px/1 var(--fh);letter-spacing:-.03em}.statband span{opacity:.7;font-size:15px}
.quote{max-width:860px;text-align:center}.quote blockquote{font:500 30px/1.35 var(--fh);letter-spacing:-.01em;margin:18px 0 30px}.who{display:inline-flex;gap:14px;align-items:center;text-align:left}.who small{display:block;color:var(--muted)}
.ctaband{background:var(--acc);color:var(--ink);border-radius:calc(var(--r) + 8px);padding:70px;text-align:center}.ctaband p{opacity:.8;margin:14px 0 28px;font-size:18px}.ctaband .btn--p{background:var(--ink);color:var(--acc)}
.ftr{border-top:1px solid var(--line);padding:70px 0 30px;font-size:15px}.ftr__grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px}.ftr p{color:var(--muted);max-width:340px}.ftr h4{font-size:14px;margin-bottom:16px;font-family:var(--fb)}.ftr__grid a:not(.brand){display:block;color:var(--muted);padding:4px 0}.ftr__bot{display:flex;justify-content:space-between;margin-top:60px;padding-top:24px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
.news{display:flex;gap:8px;margin-top:16px}.news input{flex:1;height:40px;border:1px solid var(--line);border-radius:999px;padding:0 16px;background:transparent;color:inherit}
/* dashboard */
.dash{display:grid;grid-template-columns:200px 1fr;background:#0E1118;color:#E8EAF0;border:1px solid rgba(255,255,255,.1);border-radius:16px;overflow:hidden;text-align:left;font-size:13px;box-shadow:0 40px 80px -30px rgba(0,0,0,.6),0 0 0 6px rgba(255,255,255,.03);height:100%;min-height:440px}
.dash--light{background:#fff;color:#0F172A;border-color:#E5E7EB;box-shadow:0 40px 80px -40px rgba(15,23,42,.35),0 0 0 6px rgba(15,23,42,.03)}
.dash__side{border-right:1px solid rgba(127,127,127,.15);padding:18px 12px;display:flex;flex-direction:column;gap:2px}.dash__brand{display:flex;gap:8px;align-items:center;padding:0 8px 16px;font-size:14px}.dash__mi{display:flex;gap:10px;align-items:center;padding:9px 10px;border-radius:8px;opacity:.7}.dash__mi.on{background:color-mix(in srgb,var(--acc) 18%,transparent);opacity:1;color:var(--acc)}
.dash__user{margin-top:auto;display:flex;gap:10px;align-items:center;padding:10px 6px 0;border-top:1px solid rgba(127,127,127,.15)}.dash__user small{display:block;opacity:.6;font-size:11px}
.dash__main{padding:18px 20px;display:flex;flex-direction:column;gap:14px;min-width:0}.dash__top{display:flex;justify-content:space-between;align-items:center}.dash__top h4{font:600 17px var(--fb);letter-spacing:-.01em}.dash__top small{opacity:.6}
.dash__search{display:flex;gap:8px;align-items:center;border:1px solid rgba(127,127,127,.2);border-radius:8px;padding:6px 10px;opacity:.7;min-width:190px}.dash__search kbd{margin-left:auto;font-size:10px;opacity:.7}
.dash__kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.dash__kpi{border:1px solid rgba(127,127,127,.15);border-radius:10px;padding:12px}.dash__kpi small{opacity:.6;display:block}.dash__kpi b{font-size:20px;display:block;margin:4px 0 2px;letter-spacing:-.02em}.dash__kpi span{font-size:11px;color:#22C55E}.dash__kpi span.neg{color:#EF4444}
.dash__row{display:grid;grid-template-columns:1.5fr 1fr;gap:10px;flex:1}.dash__card{border:1px solid rgba(127,127,127,.15);border-radius:10px;padding:12px 14px}.dash__ch{display:flex;justify-content:space-between;margin-bottom:8px}.dash__ch span{opacity:.5;font-size:12px}
.dash__chart svg{width:100%;height:150px;color:inherit}.dash__months{display:flex;justify-content:space-between;font-size:10px;opacity:.45}
.dash__li{display:grid;grid-template-columns:30px 1fr auto auto;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid rgba(127,127,127,.1)}.dash__li small{display:block;opacity:.55;font-size:11px}.dash__li em{font-style:normal;font-weight:600;color:inherit}
.pill{font-style:normal;font-size:10px;padding:3px 8px;border-radius:999px;font-weight:600}.pill--ok{background:rgba(34,197,94,.15);color:#16A34A}.pill--wait{background:rgba(245,158,11,.15);color:#D97706}.pill--bad{background:rgba(239,68,68,.15);color:#DC2626}
/* phones */
.phones{position:relative;height:560px}.ph{position:absolute;width:250px;height:520px;border-radius:40px;background:${t.phoneBg || (dark ? '#14161D' : '#fff')};color:${dark ? '#F1F2F6' : '#0F172A'};border:9px solid #0B0B0F;box-shadow:0 40px 80px -30px rgba(0,0,0,.5);padding:44px 16px 70px;overflow:hidden;font-size:12px}
.ph--0{left:2%;top:50px;transform:rotate(-7deg)}.ph--1{left:31%;top:0;z-index:2}.ph--2{right:2%;top:60px;transform:rotate(7deg)}
.ph__notch{position:absolute;top:8px;left:50%;width:84px;height:24px;margin-left:-42px;background:#0B0B0F;border-radius:14px}.ph__status{position:absolute;top:12px;left:22px;right:22px;display:flex;justify-content:space-between;font-size:11px;font-weight:600}
.ph__hd small{display:block;opacity:.55}.ph__hd b{font:700 20px/1.2 var(--fh)}.ph__ring{position:relative;margin:16px auto;width:150px}.ph__ring svg{width:150px;height:150px}.ph__ring div{position:absolute;inset:0;display:grid;place-content:center;text-align:center}.ph__ring b{font:700 24px var(--fh)}
.ph__item{display:flex;gap:10px;align-items:center;padding:10px;border-radius:12px;background:${dark ? 'rgba(255,255,255,.05)' : '#F4F5F8'};margin-top:8px}.ph__item i{width:28px;height:28px;border-radius:9px;flex:0 0 auto}.ph__item small{display:block;opacity:.55;font-size:11px}.ph__item span{margin-left:auto;opacity:.4}
.ph__big{font:700 30px var(--fh);margin:14px 0 4px}.ph__big small{display:block;font:400 11px var(--fb);opacity:.55}.ph__sp{width:100%;height:70px}.ph__bars{display:flex;gap:7px;align-items:end;height:90px;margin:12px 0}.ph__bars i{flex:1;border-radius:6px}
.ph__card{padding:14px;border-radius:14px;background:${dark ? 'rgba(255,255,255,.05)' : '#F4F5F8'};margin-top:10px}.ph__card small{display:block;opacity:.7;font-size:11px}
.ph__tab{position:absolute;left:0;right:0;bottom:0;height:60px;display:flex;justify-content:space-around;align-items:center;border-top:1px solid rgba(127,127,127,.15);opacity:.5}.ph__tab .on{color:var(--acc);opacity:1}
.stores{display:flex;gap:12px;margin-top:32px}.store{display:flex;gap:10px;align-items:center;background:${dark ? '#fff' : '#0B0B0F'};color:${dark ? '#0B0B0F' : '#fff'};padding:9px 18px;border-radius:12px}.store small{display:block;font-size:10px;opacity:.8}.store b{font-size:16px;line-height:1}
.reviews{display:flex;gap:16px;align-items:center;margin-top:30px;font-size:14px}.reviews small{display:block;color:var(--muted)}.reviews .sep{width:1px;height:36px;background:var(--line)}.avs{display:flex}.avs>span{margin-left:-10px;border:3px solid var(--bg)}.avs>span:first-child{margin:0}
/* shop */
.shophero{padding:40px 0 70px}.shophero__in{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center}.shophero__media{position:relative;border-radius:var(--r);min-height:560px;background:var(--sf)}.shophero__media>.prodstage{position:absolute;inset:0;border-radius:var(--r)}
.prodstage{display:grid;place-items:center;padding:40px;height:100%}.prodstage>svg{max-width:440px;max-height:440px}.prodstage--multi{grid-template-columns:repeat(${3},1fr);gap:10px;align-items:end}.prodstage--multi>div{height:100%;display:grid;align-items:end}.prodstage--multi>div:nth-child(2){transform:scale(1.25) translateY(-10px)}
.perks{display:flex;gap:22px;margin-top:34px;color:var(--muted);font-size:14px;flex-wrap:wrap}.perks span{display:flex;gap:8px;align-items:center}
.cats{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.cats__row{display:flex;gap:10px;padding:18px 40px;overflow:hidden}.cats__row a{padding:9px 18px;border-radius:999px;border:1px solid var(--line);font-size:14px;white-space:nowrap}.cats__row a.on{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.pcard__img{aspect-ratio:4/5;border-radius:var(--r);display:grid;place-items:center;padding:28px;position:relative}.pcard__info{display:flex;justify-content:space-between;gap:10px;margin-top:14px;font-size:15px}.pcard__info small{display:block;color:var(--muted);font-size:13px}.pcard__rate{font-size:12px;margin-top:4px}.pcard__rate em{color:var(--muted);font-style:normal}
.tag{position:absolute;left:12px;top:12px;font-style:normal;font-size:11px;font-weight:600;padding:4px 10px;border-radius:999px;background:var(--fg);color:var(--bg);z-index:2}
/* editorial */
.edhero{padding:70px 0 90px}.edhero h1{font-size:${p.h1 || 110}px;max-width:1100px}.edhero__grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:60px;margin-top:50px;align-items:end}.edhero__img{border-radius:var(--r);overflow:hidden;height:460px;position:relative}.edhero__img>svg{position:absolute;inset:0}
.info{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:40px 0 0;border-top:1px solid var(--line);padding-top:24px}.info dt{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}.info dd{margin:4px 0 0;font-weight:500}
.edlist{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px}.edlist__row{display:flex;justify-content:space-between;gap:20px;padding:22px 0;border-bottom:1px solid var(--line)}.edlist__row b{font:500 24px var(--fh)}.edlist__row small{display:block;color:var(--muted)}.edlist__row span{font-weight:600;white-space:nowrap}
/* local */
.topbar{background:var(--fg);color:var(--bg);font-size:13px}.topbar__in{display:flex;gap:28px;height:38px;align-items:center}.topbar__in span{display:flex;gap:6px;align-items:center;opacity:.85}.topbar__in a{margin-left:auto;font-weight:600}
.pill2{display:inline-flex;gap:8px;align-items:center;font-size:13px;font-weight:600;padding:7px 14px;border-radius:999px;background:color-mix(in srgb,var(--acc) 14%,transparent);color:var(--acc);margin-bottom:22px}
.feat--card{background:${dark ? 'rgba(255,255,255,.03)' : '#fff'}}
/* listing */
.lhero{position:relative;min-height:700px;display:flex;align-items:flex-end;color:#fff}.lhero__bg{position:absolute;inset:0}.lhero__bg>svg{width:100%;height:100%}.lhero::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.05) 35%,rgba(0,0,0,.55))}
.lhero__in{position:relative;z-index:2;padding-bottom:80px;width:100%}.lhero .lead{color:rgba(255,255,255,.85)}.lhero .eyebrow{color:#fff;opacity:.85}.lhero h1{max-width:900px}
.search{display:flex;align-items:center;background:#fff;color:#111;border-radius:${p.btnRadius ?? 999}px;padding:8px 8px 8px 28px;margin-top:36px;max-width:880px;box-shadow:0 30px 60px -20px rgba(0,0,0,.5)}.search>div{flex:1;padding:6px 18px;border-right:1px solid #e5e5e5}.search>div:first-child{padding-left:0}.search>div:nth-last-child(2){border:0}.search small{display:block;font-size:12px;color:#777}.search b{font-weight:600;font-size:15px}
.lcard__img{aspect-ratio:4/3;border-radius:var(--r);overflow:hidden;position:relative}.lcard__img>svg{position:absolute;inset:0}.heart{position:absolute;right:14px;top:14px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.9);color:#111;display:grid;place-items:center}
.lcard__info{display:flex;justify-content:space-between;margin-top:14px}.lcard__info small{display:block;color:var(--muted)}.lcard__price{margin:6px 0 0}
/* tech */
.hero--tech{padding-top:90px}.glow{position:absolute;left:50%;top:-200px;width:1100px;height:700px;margin-left:-550px;background:radial-gradient(ellipse at center,color-mix(in srgb,var(--acc) 35%,transparent),transparent 65%);pointer-events:none}
.hero--tech h1{background:linear-gradient(180deg,var(--fg) 40%,color-mix(in srgb,var(--fg) 55%,transparent));-webkit-background-clip:text;background-clip:text;color:transparent}.hero--tech h1 em{-webkit-text-fill-color:var(--acc)}
.cmd{display:inline-flex;gap:10px;align-items:center;margin-top:22px;font:500 14px ui-monospace,Menlo,monospace;padding:12px 18px;border:1px solid var(--line);border-radius:10px;background:rgba(255,255,255,.03);color:var(--muted)}.cmd span{color:var(--acc)}
.tech__panel{display:grid;grid-template-columns:1.6fr 1fr;gap:16px;text-align:left}.tech__panel>svg{border-radius:var(--r);min-height:380px;background:var(--sf);border:1px solid var(--line)}.tech__side{display:grid;gap:12px}
.metric{border:1px solid var(--line);border-radius:var(--r);padding:20px;background:rgba(255,255,255,.02)}.metric small{color:var(--muted);display:block}.metric b{font:700 34px/1.1 var(--fh);display:block;margin:6px 0}.metric span{font-size:13px;color:var(--acc)}
.term{border-radius:var(--r);border:1px solid var(--line);background:#07080C;overflow:hidden;box-shadow:0 30px 70px -30px rgba(0,0,0,.7)}.term__bar{display:flex;gap:7px;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.07)}.term__bar i{width:11px;height:11px;border-radius:50%;background:#FF5F57}.term__bar i:nth-child(2){background:#FEBC2E}.term__bar i:nth-child(3){background:#28C840}.term__bar span{margin-left:10px;font-size:12px;color:#8B8FA3}
.term pre{margin:0;padding:22px 24px;font:13.5px/1.75 ui-monospace,'SF Mono',Menlo,monospace;color:#C9CDDB;white-space:pre-wrap}.t-c{color:var(--acc)}.t-ok{color:#4ADE80}.t-acc{color:var(--acc)}.t-m{color:#8B8FA3}
/* bold */
.bhero{position:relative;min-height:820px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden}.bhero__bg{position:absolute;inset:0;opacity:${p.bgOpacity ?? 1}}.bhero__in{position:relative;z-index:2;padding-bottom:50px}.bhero h1{font-size:${p.h1 || 150}px;line-height:.86}.bhero__row{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-top:30px}
.ticker{position:relative;z-index:2;background:var(--acc);color:var(--ink);font:700 22px var(--fh);padding:16px 0;white-space:nowrap;overflow:hidden;text-transform:uppercase}.ticker i{font-style:normal;margin:0 16px}
.lineup__row{display:grid;grid-template-columns:120px 1fr auto auto;gap:30px;align-items:center;padding:24px 0;border-bottom:1px solid var(--line)}.lineup__row b{font:var(--hw) 40px/1 var(--fh);letter-spacing:var(--ht);text-transform:uppercase}.lineup__row span{color:var(--acc);font-weight:600}.lineup__row small{color:var(--muted)}
@media (min-width:761px){.hero--split .dash{grid-template-columns:150px 1fr}.hero--split .dash__search{display:none}.hero--split .dash__kpis{grid-template-columns:repeat(2,1fr)}.hero--split .dash__row{grid-template-columns:1fr}.hero--split .dash__li:nth-child(n+5){display:none}.hero--split .dash__mi{padding:8px}.hero--split .dash__chart svg{height:120px}}
${p.css || ''}
@media (max-width:760px){
 .wrap{padding:0 20px}.links,.actions .btn,.login,.topbar__in span:nth-child(2){display:none}.burger{display:block}.actions{gap:14px}
 h1{font-size:${Math.round((p.h1m || 42))}px!important}h2{font-size:30px}.lead{font-size:16px}
 .hero{padding:44px 0 56px}.hero--split .wrap,.split,.shophero__in,.edhero__grid,.edlist,.ftr__grid{grid-template-columns:1fr;gap:36px}.split--flip .split__media{order:0}
 .grid3,.grid4{grid-template-columns:1fr 1fr;gap:14px}.grid3{grid-template-columns:1fr}.statband__in{grid-template-columns:1fr 1fr}.statband b{font-size:34px}
 .hero__media{min-height:320px}.hero__media--wide{margin-top:40px}.dash{grid-template-columns:1fr;min-height:0}.dash__side,.dash__search,.dash__list{display:none}.dash__kpis{grid-template-columns:1fr 1fr}.dash__row{grid-template-columns:1fr}
 .phones{height:440px;transform:scale(.8);transform-origin:top center;margin:0 -20%}.hero__media--phones{min-height:400px}.ph--0,.ph--2{display:none}.ph--1{left:50%;margin-left:-125px}
 .nav--ed{display:flex}.nav--ed>.links{display:none}.edhero__img{height:320px}.shophero__media{min-height:380px}.float--card{left:12px}
 .search{flex-direction:column;align-items:stretch;border-radius:18px;padding:10px}.search>div{border:0;border-bottom:1px solid #eee;padding:10px 6px}.search .btn{justify-content:center;margin-top:8px}.lhero{min-height:640px}
 .tech__panel{grid-template-columns:1fr}.logos__row{justify-content:center;gap:18px 26px;font-size:18px}.ctaband{padding:40px 24px}.quote blockquote{font-size:22px}.sec{padding:64px 0}
 .bhero{min-height:640px}.bhero__row{flex-direction:column;align-items:flex-start}.lineup__row{grid-template-columns:1fr auto;gap:8px}.lineup__row span,.lineup__row small{display:none}.lineup__row b{font-size:26px}.checks--row{grid-template-columns:1fr}.cats__row{padding:14px 20px}
 .ftr__bot{flex-direction:column;gap:6px}.stores .store{padding:8px 12px}.edhero h1{font-size:${p.h1m || 48}px}.sec__head--row{flex-direction:column;align-items:flex-start;gap:12px}.topbar__in{gap:14px}
}
</style></head><body>${F[p.family](p)}</body></html>`;
}
