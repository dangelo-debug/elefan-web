// Sitemap generado en cada build: páginas fijas, soluciones, proyectos y blog.
import projects from '../data/projects.json';
import posts from '../data/blogPosts.json';
import { landings } from '../data/landings.js';

export function GET({ site }) {
  const base = site ?? new URL('https://elefan.cl');
  const rutas = [
    { path: '/', prioridad: '1.0' },
    ...landings.map((l) => ({ path: `/soluciones/${l.slug}/`, prioridad: '0.9' })),
    { path: '/servicios/', prioridad: '0.8' },
    { path: '/somos/', prioridad: '0.6' },
    { path: '/contacto/', prioridad: '0.6' },
    { path: '/blog/', prioridad: '0.5' },
    ...projects.map((p) => ({ path: `/proyectos/${p.slug}/`, prioridad: '0.6' })),
    ...posts.map((p) => ({ path: `/blog/${p.slug}/`, prioridad: '0.4' })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rutas.map((r) => `  <url><loc>${new URL(r.path, base).href}</loc><priority>${r.prioridad}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
