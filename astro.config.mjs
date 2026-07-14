import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/TypoCraft',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
