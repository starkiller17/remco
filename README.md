# REMCO SLP

Sitio web de Reductores, Motores y Controles SLP — https://remcoslp.com

Vite + React + Tailwind. El sitio se prerenderiza a HTML estático en el build con `vite-react-ssg`.

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (prerenderizado) en `dist/`
- `npm run preview` — sirve `dist/` localmente

## SEO

- Metadatos, canonical y JSON-LD (`LocalBusiness`) en `index.html`
- `public/robots.txt` y `public/sitemap.xml` (actualizar `lastmod` al publicar cambios)
- Si cambia el dominio, actualizar la URL en `index.html`, `robots.txt` y `sitemap.xml`
