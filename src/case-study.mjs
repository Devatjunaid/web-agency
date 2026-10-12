// Case-study page + portfolio card templates (used by build.mjs)
import { CATS } from './portfolio.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function workCard(p, i) {
  const href = p.caseStudy ? `/work/${p.slug}` : `/assets/img/work/${p.slug}.jpg`;
  const attrs = p.caseStudy ? `data-cursor="Case study"` : `data-lightbox data-title="${esc(p.name)}" data-meta="${esc(p.type)} · ${esc(p.stack)} · ${p.year}" data-cursor="Preview"`;
  return `<a href="${href}" class="work" data-cat="${p.cat}" data-reveal ${attrs}>
  <div class="work__media"><img src="/assets/img/work/${p.slug}.jpg" alt="${esc(p.name)} — ${esc(p.type)} designed and developed by The Fast Designs" width="1440" height="900" loading="${i < 4 ? 'eager' : 'lazy'}"></div>
  <div class="work__info"><div><h3>${esc(p.name)}</h3><p>${esc(p.type)} · ${esc(p.industry)}</p></div><span class="work__year">${p.caseStudy ? '<b class="work__badge">Case study</b>' : p.year}</span></div>
</a>`;
}

export function portfolioFilters(list) {
  const count = (c) => String(list.filter((p) => c === 'all' || p.cat === c).length).padStart(2, '0');
  return `<button class="filter is-active" data-filter="all" aria-pressed="true">All work<sup>${count('all')}</sup></button>` +
    Object.entries(CATS).map(([k, v]) => `<button class="filter" data-filter="${k}" aria-pressed="false">${v}<sup>${count(k)}</sup></button>`).join('');
}

export function caseCard(p) {
  const c = p.caseStudy;
  return `<a href="/work/${p.slug}" class="ccase" data-reveal data-cursor="Read">
  <div class="ccase__media"><img src="/assets/img/work/${p.slug}.jpg" alt="${esc(p.name)} website" width="1440" height="900" loading="lazy"></div>
  <div class="ccase__body"><p class="ccase__tag">${esc(p.industry)} · ${esc(c.services.slice(0, 2).join(', '))}</p><h2>${esc(p.name)}</h2><p>${esc(c.title)}</p>
  <div class="ccase__kpis">${c.kpis.slice(0, 2).map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('')}</div><span class="link-arrow"><span>Read case study</span></span></div>
</a>`;
}

export function caseStudyPage(p, next) {
  const c = p.caseStudy;
  const fam = (f) => encodeURIComponent(f);
  const fontLink = `<link href="https://fonts.googleapis.com/css2?family=${fam(c.type[0])}:wght@400;500;600;700&family=${fam(c.type[1])}:wght@400;500&display=swap" rel="stylesheet">`;
  const meta = {
    route: `/work/${p.slug}`, slug: 'case', crumb: p.name, parent: ['Case Studies', '/case-studies'], priority: 0.7,
    title: `${p.name} Case Study — ${p.type} | The Fast Designs`,
    description: `${c.summary.split('. ')[0]}. See the process, design system and results.`.slice(0, 158),
    extraHead: fontLink,
    schema: [{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, about: p.name, image: `/assets/img/work/${p.slug}.jpg`, author: { '@type': 'Organization', name: 'The Fast Designs' } }],
  };
  const body = `
<section class="phero cs-hero">
  <div class="phero__bg"><div class="grid-bg"></div></div>
  <div class="container">
    <ol class="crumbs" data-reveal><li><a href="/">Home</a></li><li><a href="/case-studies">Case Studies</a></li><li aria-current="page">${esc(p.name)}</li></ol>
    <p class="eyebrow" data-reveal>Case study · ${esc(p.industry)}</p>
    <h1 class="h-lg cs-title" data-split>${esc(c.title)}</h1>
    <div class="cs-intro">
      <p class="lead" data-reveal style="--d:.3s">${esc(c.summary)}</p>
      <dl class="cs-meta" data-stagger=".05">
        <div><dt>Client</dt><dd>${esc(c.client)}</dd></div>
        <div><dt>Industry</dt><dd>${esc(p.industry)}</dd></div>
        <div><dt>Timeline</dt><dd>${esc(c.timeline)}</dd></div>
        <div><dt>Year</dt><dd>${p.year}</dd></div>
        <div class="cs-meta__wide"><dt>Services</dt><dd>${c.services.map(esc).join(' · ')}</dd></div>
        <div class="cs-meta__wide"><dt>Platform</dt><dd>${esc(c.platform)}</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="cs-shot container" data-reveal="scale">
  <div class="screen"><img src="/assets/img/work/${p.slug}.jpg" alt="${esc(p.name)} homepage designed by The Fast Designs" width="1440" height="900"></div>
</section>

<section class="section--tight">
  <div class="container">
    <div class="cs-kpis" data-stagger=".08">${c.kpis.map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('')}</div>
  </div>
</section>

<section class="section">
  <div class="container cs-two">
    <div><p class="eyebrow" data-reveal>01 — The challenge</p><h2 class="h-md" data-split>What stood in the way</h2></div>
    <div data-reveal>
      <p class="cs-text">${esc(c.challenge)}</p>
      <h3 class="cs-h3">Project goals</h3>
      <ol class="cs-goals">${c.goals.map((g, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${esc(g)}</li>`).join('')}</ol>
    </div>
  </div>
</section>

<section class="section--tight">
  <div class="container">
    <p class="eyebrow" data-reveal>02 — Discovery</p>
    <h2 class="h-md" data-split style="margin-bottom:40px">What the research told us</h2>
    <div class="cs-insights" data-stagger=".1">${c.insights.map(([n, t]) => `<div><b>${esc(n)}</b><p>${esc(t)}</p></div>`).join('')}</div>
  </div>
</section>

<section class="section">
  <div class="container cs-two">
    <div><p class="eyebrow" data-reveal>03 — Approach</p><h2 class="h-md" data-split>Strategy, then pixels</h2></div>
    <div data-reveal>${c.approach.map((t) => `<p class="cs-text">${esc(t)}</p>`).join('')}
      <ul class="cs-steps">${['Discover', 'Define', 'Design', 'Develop', 'Launch & grow'].map((s, i) => `<li><span>${i + 1}</span>${s}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="section--tight">
  <div class="container">
    <p class="eyebrow" data-reveal>04 — Design system</p>
    <h2 class="h-md" data-split style="margin-bottom:40px">A visual language built to scale</h2>
    <div class="cs-ds">
      <div class="cs-palette" data-stagger=".08">${c.palette.map(([n, hex]) => `<div style="--sw:${hex}"><i></i><b>${esc(n)}</b><span>${hex}</span></div>`).join('')}</div>
      <div class="cs-type" data-reveal>
        <div class="cs-type__spec" style="font-family:'${c.type[0]}',serif">Aa</div>
        <div><small>Headings</small><b style="font-family:'${c.type[0]}',serif">${esc(c.type[0])}</b><small>Body</small><b style="font-family:'${c.type[1]}',sans-serif;font-weight:500">${esc(c.type[1])}</b>
        <p style="font-family:'${c.type[1]}',sans-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz 0123456789</p></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="eyebrow" data-reveal>05 — Key screens</p>
    <h2 class="h-md" data-split style="margin-bottom:16px">The finished website</h2>
    <p class="muted" data-reveal style="margin-bottom:40px">Hover over (or scroll) the page to see the full homepage.</p>
    <div class="cs-screens">
      <div class="scroller" data-scroller data-reveal data-cursor="Scroll"><img src="/assets/img/work/${p.slug}-full.jpg" alt="Full ${esc(p.name)} homepage design" width="1440" loading="lazy"></div>
      <div class="cs-phones" data-stagger=".12">${[1, 2, 3].map((i) => `<div class="phone"><img src="/assets/img/work/${p.slug}-m${i}.jpg" alt="${esc(p.name)} mobile screen ${i}" width="390" height="844" loading="lazy"></div>`).join('')}</div>
    </div>
  </div>
</section>

<section class="section--tight">
  <div class="container cs-two">
    <div><p class="eyebrow" data-reveal>06 — Development</p><h2 class="h-md" data-split>Engineered for speed</h2>
      <ul class="stack" data-stagger=".03" style="margin-top:30px">${c.tech.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>
    <div class="cs-perf" data-reveal>
      <div class="cs-perf__head"><span>Lighthouse (mobile)</span><span>Before</span><span>After</span></div>
      ${c.perf.map(([n, a, b]) => `<div class="cs-perf__row"><span>${n}</span><span class="bad">${a}</span><span class="good">${b}</span><div class="cs-perf__bar"><i style="width:${a}%"></i><i style="width:${b}%"></i></div></div>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="eyebrow" data-reveal>07 — Results</p>
    <h2 class="h-md" data-split style="margin-bottom:40px">The impact</h2>
    <div class="cs-results">
      <div class="case__chart" data-reveal="left"><img src="/assets/img/work/${p.slug}-results.svg" alt="${esc(p.name)} results before and after launch" width="1200" height="660" loading="lazy"></div>
      <div class="case__nums" data-stagger=".1">${c.kpis.slice(0, 3).map(([v, l]) => `<div><strong>${esc(v)}</strong><span>${esc(l)}</span></div>`).join('')}</div>
    </div>
    <figure class="cs-quote" data-reveal>
      <blockquote>“${esc(c.quote[0])}”</blockquote>
      <figcaption class="who"><span class="avatar">${c.quote[1].split(' ').map((x) => x[0]).join('')}</span><div><strong>${esc(c.quote[1])}</strong><span>${esc(c.quote[2])}</span></div></figcaption>
    </figure>
  </div>
</section>

<section class="section--tight">
  <div class="container">
    <a href="/work/${next.slug}" class="cs-next" data-reveal data-cursor="Next">
      <div><p class="eyebrow">Next case study</p><h2 class="h-lg">${esc(next.name)}</h2><p class="muted">${esc(next.caseStudy.title)}</p></div>
      <div class="cs-next__img"><img src="/assets/img/work/${next.slug}.jpg" alt="${esc(next.name)} website" width="1440" height="900" loading="lazy"></div>
    </a>
  </div>
</section>

<section class="section--tight" style="padding-bottom:clamp(80px,10vw,140px)">
  <div class="container">
    <div class="cta" data-reveal="scale">
      <p class="eyebrow">Want results like these?</p>
      <h2 class="h-lg">Let’s build your <span class="grad-text">next chapter.</span></h2>
      <p>Tell us about your project and get a fixed-price proposal within 48 hours.</p>
      <div class="cta__actions"><a href="/get-a-quote" class="btn btn--primary btn--lg" data-magnetic><span>Get a Free Quote</span><i class="btn__arrow" aria-hidden="true">→</i></a><a href="/portfolio" class="btn btn--ghost btn--lg" data-magnetic><span>View Portfolio</span></a></div>
    </div>
  </div>
</section>`;
  return { meta, body };
}
