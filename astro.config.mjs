// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://madmatcher.ai',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap({
      // Surface the content pages prominently; lastmod auto-filled.
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  build: {
    // Cleaner URLs: /blog/post/ -> /blog/post (file written as .../index.html)
    format: 'directory',
  },
});
