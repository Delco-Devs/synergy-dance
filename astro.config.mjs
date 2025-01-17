import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://www.yourwebsite.com", // update me!
  integrations: [
    sitemap()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  devToolbar: {
    enabled: false
  }
});