# The Fast Designs — Agency Website

A fast, dark, animation-rich website for **The Fast Designs**, a web design and development agency.
It is plain HTML, CSS and JavaScript with **no frameworks and no dependencies**, built for Cloudflare.

**Pages:** Home · Services · Portfolio · Case Studies (4) · Testimonials · Contact · Get a Quote · 404

**SEO landing pages** (`src/landing.mjs`): Web Design London · Manchester · Birmingham · Suffolk · Locations (web design near me) · Web Development · Ecommerce Web Design · Shopify Web Design · WordPress Web Design · Website Redesign · Affordable Web Design.

Prices shown on the site (budget ladder: websites £100 / £250 / £500, stores from £350, web apps from £1,500…) live in `src/landing.mjs`, `src/pages/services.html` and the homepage FAQ — edit them there.

## Features

- **Motion:** preloader, page-to-page panel transitions, a hero "warp-speed" canvas that reacts to the mouse and to scroll speed, a rotating headline, split-text reveals, scroll-scrubbed statement text, a horizontal-scroll process section, parallax, magnetic buttons, a custom cursor, 3D tilt cards, spotlight hover, text scramble, animated counters, Lighthouse-style gauges and marquees.
- **Portfolio:** 26 design concepts for fictional local UK businesses (restaurant, pub, café, dentist, cleaner, roofer, plumber, electrician, estate agent, salon, gym, solicitor, bakery, garage, B&B and more). Each is a real responsive page built in HTML (`tools/shots/`) and captured with a headless browser. All are clearly labelled as concepts on the site.
- **Concept studies:** 4 in-depth pages (`/work/…`) — brief, design principles, approach, design system, desktop + mobile screens and measured Lighthouse scores. No invented client results.
- **SEO:** a unique title and meta description per page, canonical URLs, Open Graph and Twitter cards, JSON-LD schema (ProfessionalService, BreadcrumbList, Service list, FAQPage), an auto-generated `sitemap.xml` and `robots.txt`, semantic HTML and descriptive alt text.
- **Accessibility:** keyboard-friendly, skip link, focus styles, ARIA labels. Respects `prefers-reduced-motion`, which turns animations off.
- **Forms:** a contact form and a 4-step quote form, both with validation. They send email through Web3Forms (free).
- **Performance:** no frameworks, cache headers, lazy-loaded images, and graphics drawn in code.

## Project structure

```
site.config.mjs     ← EDIT: domain, email, phone, WhatsApp, socials, form key
build.mjs           ← builds everything into /dist
serve.mjs           ← local preview server
src/pages/*.html    ← page content (one file per page, SEO meta at the top)
src/portfolio.mjs   ← all portfolio projects + case-study content
src/case-study.mjs  ← case-study page & portfolio card templates
src/art.mjs         ← results-chart generator
tools/shots/        ← builds each portfolio site and screenshots it
public/             ← CSS, JS, favicon, social image (copied as-is)
wrangler.jsonc      ← Cloudflare config
```

## Run locally

```bash
npm run dev        # builds and serves at http://localhost:8080
```

You need Node 18 or newer. There is nothing to install.

## Before going live: checklist

1. **`site.config.mjs`**: set your real `url` (your domain) and social links. The contact email is `info@thefastdesigns.co.uk`.
2. **Forms**: get a free access key at <https://web3forms.com> (enter the email that should receive leads) and paste it into `formAccessKey`. Until you do, the forms open the visitor's email app instead.
3. **Portfolio content**: the businesses in the portfolio are fictional design concepts and are labelled as such. Replace or add real client projects (with permission) as you complete them, and add genuine client reviews to the Reviews page.
4. Rebuild with `npm run build`.

## Deploy to Cloudflare

**Option A: Git integration (recommended, auto-deploys on every push)**

1. Push this folder to its own GitHub repository.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Import a repository** and pick the repo.
3. Set **Build command** to `npm run build` and **Deploy command** to `npx wrangler deploy`. Leave root directory as `/`.
4. Deploy. You'll get a `*.workers.dev` preview URL.
5. In the project open **Settings → Domains & Routes → Add → Custom domain**, enter `yourdomain.com`, then repeat for `www.yourdomain.com`. Cloudflare creates the DNS records and SSL certificate for you, as long as the domain is already active on Cloudflare.

**Option B: From your computer**

```bash
npm run build
npx wrangler login
npx wrangler deploy
```

## Editing content

- **Text:** edit the matching file in `src/pages/`. The JSON block at the top of each file controls its SEO title and description.
- **Portfolio:** add or edit entries in `src/portfolio.mjs` (layout family `saas | shop | editorial | local | listing | app | tech | bold`, colours, fonts and copy). Then run `node tools/shots/render.mjs <slug>` followed by `python3 tools/shots/optimize.py` (converts to responsive WebP) to re-screenshot it (needs Playwright: `npm i -D playwright && npx playwright install chromium`), then `npm run build`. Add a `caseStudy` block to give a project its own case-study page.
- **Colours and fonts:** edit the CSS variables at the top of `public/assets/css/main.css`.
