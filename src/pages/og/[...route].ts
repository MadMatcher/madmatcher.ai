/**
 * Per-page Open Graph images, generated at build time from each content
 * entry's title + description. Produces /og/<collection>/<slug>.png (1200×630),
 * referenced by the page templates so social/AI previews show real, page-specific
 * cards instead of one shared logo. Branded: white card, red edge, the wordmark.
 */
import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const [blog, useCases, glossary, docs] = await Promise.all([
  getCollection('blog', ({ data }) => !data.draft),
  getCollection('useCases', ({ data }) => !data.draft),
  getCollection('glossary', ({ data }) => !data.draft),
  getCollection('docs', ({ data }) => !data.draft),
]);

// Key each page by its public path (minus leading slash); the route appends .png.
const pages: Record<string, { title: string; description: string }> = {};
for (const e of blog) pages[`blog/${e.id}`] = { title: e.data.title, description: e.data.description };
for (const e of useCases) pages[`use-cases/${e.id}`] = { title: e.data.title, description: e.data.description };
for (const e of glossary) pages[`glossary/${e.id}`] = { title: e.data.term, description: e.data.definition };
for (const e of docs) pages[`docs/${e.id}`] = { title: e.data.title, description: e.data.description };

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: { path: './public/og/logo.png', size: [300] },
    bgGradient: [[255, 255, 255]],
    border: { color: [219, 7, 14], width: 24, side: 'inline-start' },
    padding: 80,
    font: {
      title: { color: [29, 29, 31], size: 60, lineHeight: 1.15, weight: 'ExtraBold', families: ['Inter'] },
      description: { color: [99, 99, 104], size: 31, lineHeight: 1.4, families: ['Inter'] },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/inter/latin-800-normal.ttf',
    ],
  }),
});
