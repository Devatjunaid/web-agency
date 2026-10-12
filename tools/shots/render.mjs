// Renders every portfolio site to real browser screenshots.
// Usage: node tools/shots/render.mjs [slug ...]
// Requires Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PORTFOLIO } from '../../src/portfolio.mjs';
import { renderPage } from './templates.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = path.join(ROOT, 'public/assets/img/work');
const TMP = path.join(ROOT, 'tools/shots/.html');

let chromium;
try { ({ chromium } = await import('playwright')); } catch { ({ chromium } = await import(process.env.PLAYWRIGHT_PATH || '/opt/node-tools/node_modules/playwright/index.mjs')); }

async function fontHref(fonts) {
  const parts = [];
  for (const fam of [...new Set([fonts.head, fonts.body])]) {
    const f = encodeURIComponent(fam);
    for (const axis of [':ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500', ':wght@400;500;600;700;800', ':ital,wght@0,400;1,400', ':wght@400;700', '']) {
      const res = await fetch(`https://fonts.googleapis.com/css2?family=${f}${axis}`).catch(() => null);
      if (res?.ok) { parts.push(`family=${f}${axis}`); break; }
    }
  }
  return `https://fonts.googleapis.com/css2?${parts.join('&')}&display=block`;
}

const only = process.argv.slice(2);
const list = only.length ? PORTFOLIO.filter((p) => only.includes(p.slug)) : PORTFOLIO;
await fs.mkdir(OUT, { recursive: true });
await fs.mkdir(TMP, { recursive: true });
const browser = await chromium.launch();

for (const p of list) {
  const href = await fontHref(p.fonts);
  const html = renderPage(p).replace(/<link href="https:\/\/fonts\.googleapis\.com[^"]+" rel="stylesheet">/, `<link href="${href}" rel="stylesheet">`);
  const file = path.join(TMP, `${p.slug}.html`);
  await fs.writeFile(file, html);

  // Desktop thumbnail (above the fold)
  const d = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await d.goto('file://' + file, { waitUntil: 'networkidle' });
  await d.evaluate(() => document.fonts.ready);
  await d.waitForTimeout(250);
  await d.screenshot({ path: path.join(OUT, `${p.slug}.jpg`), type: 'jpeg', quality: 84 });

  if (p.caseStudy) {
    await d.screenshot({ path: path.join(OUT, `${p.slug}-full.jpg`), type: 'jpeg', quality: 80, fullPage: true });
    const m = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await m.goto('file://' + file, { waitUntil: 'networkidle' });
    await m.evaluate(() => document.fonts.ready);
    const H = await m.evaluate(() => document.documentElement.scrollHeight);
    const stops = [0, Math.round(H * 0.3), Math.round(H * 0.58)];
    for (let i = 0; i < stops.length; i++) {
      await m.evaluate((y) => window.scrollTo(0, y), stops[i]);
      await m.waitForTimeout(150);
      await m.screenshot({ path: path.join(OUT, `${p.slug}-m${i + 1}.jpg`), type: 'jpeg', quality: 80 });
    }
    await m.close();
  }
  await d.close();
  console.log('✓', p.slug);
}
await browser.close();
