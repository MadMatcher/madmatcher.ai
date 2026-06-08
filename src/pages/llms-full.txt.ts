/**
 * /llms-full.txt — the full text of the site's content in one file, so an AI
 * engine can ingest everything in a single fetch. Built from content bodies.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, PRODUCTS, CITATION } from '../consts';

export const GET: APIRoute = async () => {
  const [glossary, useCases, docs, blog] = await Promise.all([
    getCollection('glossary', ({ data }) => !data.draft),
    getCollection('useCases', ({ data }) => !data.draft),
    getCollection('docs', ({ data }) => !data.draft),
    getCollection('blog', ({ data }) => !data.draft),
  ]);

  const out: string[] = [];
  const rule = () => out.push('\n\n---\n');

  out.push(`# ${SITE.name}: full content`);
  out.push('');
  out.push(`> ${SITE.description}`);
  out.push('');
  out.push('## What MadMatcher is');
  out.push(
    'MadMatcher resolves records that refer to the same real-world entity across large, messy datasets. It pairs benchmarked blocking with a matcher you train to your own domain. It runs on Apache Spark (or pandas for small data), inside the customer’s own infrastructure.'
  );
  out.push('');
  out.push('### Components');
  for (const p of PRODUCTS) {
    out.push(`- ${p.name} (${p.role}): ${p.summary} ${p.highlight}`);
  }
  out.push('');
  out.push(`### Research`);
  out.push(`${CITATION.title}. ${CITATION.short}. ${CITATION.url}`);

  const dump = (title: string, items: { heading: string; body: string }[]) => {
    rule();
    out.push(`# ${title}`);
    for (const it of items) {
      out.push('');
      out.push(`## ${it.heading}`);
      out.push('');
      out.push(it.body.trim());
    }
  };

  dump(
    'Glossary',
    glossary
      .sort((a, b) => a.data.term.localeCompare(b.data.term))
      .map((g) => ({ heading: g.data.term, body: `${g.data.definition}\n\n${g.body ?? ''}` }))
  );

  dump(
    'Use cases',
    useCases
      .sort((a, b) => a.data.order - b.data.order)
      .map((u) => ({ heading: u.data.title, body: u.body ?? '' }))
  );

  dump(
    'Docs',
    docs
      .sort((a, b) => a.data.order - b.data.order)
      .map((d) => ({ heading: d.data.title, body: d.body ?? '' }))
  );

  dump(
    'Blog',
    blog
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((b) => ({ heading: b.data.title, body: b.body ?? '' }))
  );

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
