// The 404 page is prerendered from the same index.html template, so it
// inherits homepage-only SEO tags. Strip them so the 404 only carries its own
// <title> and noindex robots tag.
import { readFileSync, writeFileSync } from 'node:fs';

const file = new URL('../dist/404.html', import.meta.url);
let html = readFileSync(file, 'utf8');

html = html
  .replace(/<title>(?![^<]*Página no encontrada)[^<]*<\/title>/, '')
  .replace(/<meta name="robots" content="index[^"]*">/, '')
  .replace(/<meta name="description"[^>]*>/, '')
  .replace(/<link rel="canonical"[^>]*>/, '')
  .replace(/<meta (?:property="og:|name="twitter:)[^>]*>/g, '')
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');

writeFileSync(file, html);
