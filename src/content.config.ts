import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Dev Ahluwalia'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Short label for cards / nav. */
    summary: z.string(),
    /** Display order on the index. */
    order: z.number().default(99),
    icon: z.string().optional(),
    /** Q→A pairs rendered as a FAQ section + FAQPage JSON-LD (GEO). */
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    aka: z.array(z.string()).default([]),
    definition: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, useCases, docs, glossary };
