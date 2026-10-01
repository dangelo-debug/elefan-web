// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio principal del sitio. Debe coincidir con el "Primary domain" configurado en Netlify.
  site: 'https://elefan.cl',
  vite: {
    plugins: [tailwindcss()]
  }
});
