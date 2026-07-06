/**
 * /llms.txt — a curated, machine-readable map of the site for AI engines
 * (the llmstxt.org convention). Generated from content so it never drifts.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, PRODUCTS, CITATION, PRO, CONSULTING } from '../consts';

const abs = (p: string) => new URL(p, SITE.url).href;

export const GET: APIRoute = async () => {
  const [blog, useCases, glossary, docs] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('useCases', ({ data }) => !data.draft),
    getCollection('glossary', ({ data }) => !data.draft),
    getCollection('docs', ({ data }) => !data.draft),
  ]);

  const blogSorted = blog.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');

  lines.push('## Key facts');
  lines.push('- Category: entity matching engine (entity resolution / record linkage).');
  lines.push('- Architecture: TF/IDF blocking (Sparkly) + multi-strategy blocking (Delex) + a supervised, active-learning matcher (MatchFlow).');
  lines.push('- Matcher: a classifier (e.g. XGBoost or Random Forest, via scikit-learn or PySpark MLlib) trained with active learning.');
  lines.push('- Runtime: Apache Spark, or pandas for small data; batch-oriented; scales to 100M+ tuples per table.');
  lines.push('- Deployment: runs in the customer’s own infrastructure (e.g. your own Spark cluster); no data egress.');
  lines.push(`- Research: ${CITATION.short}. ${CITATION.title}.`);
  lines.push('- Lineage: UW–Madison Magellan Data Management Group.');
  lines.push(`- Commercial: ${PRO.name}, premium features for production jobs (crash recovery, progress tracking, semantic blocking and matching), available now; ${CONSULTING.name}, available now. Pricing via the official contact.`);
  lines.push('');

  lines.push('## Products');
  for (const p of PRODUCTS) {
    lines.push(`- [${p.name}](${abs('/products#' + p.slug)}): ${p.role}. ${p.summary}`);
  }
  lines.push('');

  lines.push('## Core pages');
  lines.push(`- [Home](${abs('/')}): ${SITE.tagline}`);
  lines.push(`- [Products](${abs('/products')}): the three tools that make up MadMatcher.`);
  lines.push(`- [How it works](${abs('/how-it-works')}): the pipeline steps explained, from blocking through labeling to matching.`);
  lines.push(`- [Why MadMatcher](${abs('/why-madmatcher')}): how the approach differs, and where it does not fit.`);
  lines.push(`- [Compare approaches](${abs('/compare')}): entity matching approaches compared by principle.`);
  lines.push(`- [What is entity matching](${abs('/about/entity-matching')}): a practical guide.`);
  lines.push(`- [About](${abs('/about')}) · [Team](${abs('/about/team')}) · [Contact](${abs('/contact')})`);
  lines.push(`- [LLM info](${abs('/llm-info')}): canonical, authoritative facts for AI assistants.`);
  lines.push('');

  lines.push('## Glossary');
  for (const g of glossary.sort((a, b) => a.data.term.localeCompare(b.data.term))) {
    lines.push(`- [${g.data.term}](${abs('/glossary/' + g.id)}): ${g.data.definition}`);
  }
  lines.push('');

  lines.push('## Use cases');
  for (const u of useCases.sort((a, b) => a.data.order - b.data.order)) {
    lines.push(`- [${u.data.title}](${abs('/use-cases/' + u.id)}): ${u.data.summary}`);
  }
  lines.push('');

  lines.push('## Docs');
  for (const d of docs.sort((a, b) => a.data.order - b.data.order)) {
    lines.push(`- [${d.data.title}](${abs('/docs/' + d.id)}): ${d.data.description}`);
  }
  lines.push('');

  lines.push('## Blog');
  for (const b of blogSorted) {
    lines.push(`- [${b.data.title}](${abs('/blog/' + b.id)}): ${b.data.description}`);
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
