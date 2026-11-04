// Blog index + article templates (used by build.mjs)
import { POSTS } from './blog.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
// Resolve the ${link('text')} placeholders used in article bodies
const render = (html) => html.replace(/\$\{link\('([^']+)'\)\}/g, (_, t) => `<a href="/affordable-web-design">${t}</a>`);

function card(p, i) {
  return `<a href="/blog/${p.slug}" class="bcard" data-reveal data-cursor="Read">
  <div class="bcard__top"><span class="bcard__n">${String(i + 1).padStart(2, '0')}</span><span class="bcard__cat">${esc(p.category)}</span></div>
  <h2 class="bcard__title">${esc(p.title)}</h2>
  <p>${esc(p.excerpt)}</p>
  <div class="bcard__meta"><span>${p.readMins} min read</span><span class="link-arrow"><span>Read article</span></span></div>
</a>`;
}

export function blogIndexPage() {
  const meta = {
    route: '/blog', slug: 'blog', crumb: 'Blog', priority: 0.8,
    title: 'Web Design Blog for UK Small Businesses | The Fast Designs',
    description: 'Practical, data-backed guides on website costs, speed, SEO and choosing affordable web design for UK small businesses, from The Fast Designs.',
    schema: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'The Fast Designs Blog', blogPost: POSTS.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `/blog/${p.slug}`, datePublished: p.date })) }],
  };
  const body = `
<section class="phero">
  <div class="phero__bg"><div class="grid-bg"></div></div>
  <div class="container">
    <ol class="crumbs" data-reveal><li><a href="/">Home</a></li><li aria-current="page">Blog</li></ol>
    <div class="phero__grid">
      <div><p class="eyebrow" data-reveal>The Fast Designs blog</p><h1 class="h-xl" data-split>Website advice for <em>small businesses.</em></h1></div>
      <p class="phero__aside" data-reveal style="--d:.3s">Honest, data-backed guides on what websites cost, how to make them fast and how to choose affordable web design without getting caught out. Every statistic is linked to its source.</p>
    </div>
  </div>
</section>
<section class="section--tight" style="padding-top:0;padding-bottom:clamp(80px,10vw,140px)">
  <div class="container"><div class="bgrid">${POSTS.map(card).join('')}</div></div>
</section>`;
  return { meta, body };
}

export function blogPostPage(p) {
  const others = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const meta = {
    route: `/blog/${p.slug}`, slug: 'post', crumb: p.title, parent: ['Blog', '/blog'], priority: 0.7, ogType: 'article',
    title: p.metaTitle, description: p.description,
    schema: [{
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.description, datePublished: p.date, dateModified: p.date,
      author: { '@type': 'Organization', name: 'The Fast Designs' }, publisher: { '@type': 'Organization', name: 'The Fast Designs', logo: { '@type': 'ImageObject', url: '/assets/img/logo.svg' } },
      mainEntityOfPage: `/blog/${p.slug}`, image: '/assets/img/og.png', citation: p.sources.map(([, u]) => u),
    }],
  };
  const body = `
<section class="phero post-hero">
  <div class="phero__bg"><div class="grid-bg"></div></div>
  <div class="container">
    <ol class="crumbs" data-reveal><li><a href="/">Home</a></li><li><a href="/blog">Blog</a></li><li aria-current="page">${esc(p.category)}</li></ol>
    <p class="eyebrow" data-reveal>${esc(p.category)}</p>
    <h1 class="h-lg post-title" data-split>${esc(p.title)}</h1>
    <div class="post-meta" data-reveal><span>By The Fast Designs</span><span>${fmtDate(p.date)}</span><span>${p.readMins} min read</span></div>
  </div>
</section>
<article class="section--tight" style="padding-top:0">
  <div class="container post-wrap">
    <div class="prose">${render(p.body)}
      <aside class="post-cta"><p class="eyebrow">Need a website?</p><h2>Professional websites from £100</h2><p>Fixed prices, mobile-first design and SEO basics included. See our affordable web design packages or get a quick quote.</p><div class="cta__actions" style="justify-content:flex-start"><a href="/affordable-web-design" class="btn btn--primary" data-magnetic><span>View packages</span><i class="btn__arrow" aria-hidden="true">→</i></a><a href="/get-a-quote" class="btn btn--ghost" data-magnetic><span>Get a quick quote</span></a></div></aside>
      <section class="post-sources" aria-labelledby="sources-${p.slug}"><h2 id="sources-${p.slug}">Sources</h2><ol>${p.sources.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}</ol><p class="muted">Third-party prices were checked at the time of writing and can change. Please confirm current pricing on each provider’s website.</p></section>
    </div>
  </div>
</article>
<section class="section--tight" style="padding-bottom:clamp(80px,10vw,140px)">
  <div class="container">
    <h2 class="h-md" data-split style="margin-bottom:30px">More from the blog</h2>
    <div class="bgrid">${others.map((o) => card(o, POSTS.indexOf(o))).join('')}</div>
  </div>
</section>`;
  return { meta, body };
}

export const blogRelatedHtml = () => `
<section class="section--tight">
  <div class="container">
    <div class="shead"><div><p class="eyebrow" data-reveal>From the blog</p><h2 class="h-md" data-split>Guides to help you budget and choose</h2></div><a href="/blog" class="btn btn--ghost" data-magnetic data-reveal><span>All articles</span><i class="btn__arrow" aria-hidden="true">→</i></a></div>
    <div class="bgrid">${POSTS.slice(0, 3).map(card).join('')}</div>
  </div>
</section>`;
