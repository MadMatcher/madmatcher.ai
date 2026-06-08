# MadMatcher website

The marketing + content site for [madmatcher.ai](https://madmatcher.ai). Built with
[Astro](https://astro.build) for fast, **server-rendered HTML** that search engines and
AI answer engines can read without executing JavaScript — the foundation for SEO and GEO.

> The previous Create React App SPA lives in [`legacy-cra/`](./legacy-cra) for reference.

## Stack

- **Astro 5** (static output) — real HTML per page, zero client JS by default
- **MDX content collections** — blog, use-cases, docs, glossary
- **@astrojs/sitemap** — auto `sitemap-index.xml`
- Design system: hand-rolled CSS tokens in [`src/styles/global.css`](./src/styles/global.css)
  (black `#1d1d1f` / red `#db070e` / white — the MadMatcher brand)

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build -> dist/
npm run preview    # serve the build locally
```

## Project structure

```
src/
  consts.ts            # canonical facts (name, products, proof, citation) — single source of truth
  content.config.ts    # content collection schemas
  content/
    blog/              # *.md  — SEO/GEO blog posts
    use-cases/         # *.md  — buyer-intent landing pages
    docs/              # *.md  — quickstart / install / guides
    glossary/          # *.md  — definition pages (GEO citation bait)
  components/          # Header, Footer, BaseHead (SEO), JsonLd, Analytics, ...
  layouts/             # BaseLayout, PostLayout
  lib/schema.ts        # JSON-LD builders (Organization, Article, FAQ, DefinedTerm, ...)
  pages/               # routes (.astro) + llms.txt.ts / llms-full.txt.ts endpoints
public/                # robots.txt, site.webmanifest, icons, og images, /team
```

## Adding content

**A blog post:** create `src/content/blog/my-post.md`:

```md
---
title: 'Post title'
description: 'One-sentence summary (used for meta description + cards).'
pubDate: 2026-06-10
tags: ['entity-matching']
---

Body in Markdown. Use `## Question-style headings` with the answer in the first
sentence — that structure is what gets lifted by AI answer engines (GEO).
```

It auto-appears on `/blog`, gets `Article` + `BreadcrumbList` JSON-LD, an OG/Twitter
card, and an entry in `sitemap.xml` and `llms.txt`. Same pattern for use-cases, docs, and
glossary (see existing files for the frontmatter each expects).

### House rule

**Never name a competitor company anywhere on the site.** Compare by *approach*
("fixed pretrained models", "hand-authored rules", "unsupervised statistical methods"),
never by brand. A guard script can be added to CI; for now, grep before publishing.

## SEO + GEO checklist (already wired)

- Server-rendered HTML on every route (the core fix vs. the old SPA)
- Per-page `<title>`, meta description, canonical, OpenGraph + Twitter cards
- JSON-LD: Organization, WebSite, SoftwareApplication, ScholarlyArticle (VLDB paper),
  Article, FAQPage, BreadcrumbList, DefinedTerm
- `sitemap-index.xml` + `robots.txt` (AI crawlers explicitly allowed)
- `/llms.txt` + `/llms-full.txt` generated from content
- Glossary definition pages for high-value terms

### Follow-ups worth doing

- Generate real 1200×630 OG images per page (e.g. `@vercel/og` / satori) — currently
  `public/og/default.png` (the logo) is used as a fallback.
- Wire the newsletter form ([`src/components/Newsletter.astro`](./src/components/Newsletter.astro))
  to a real provider, and the contact form ([`src/pages/contact.astro`](./src/pages/contact.astro))
  to Formspree/Web3Forms.
- Set the real Cal.com handle in `CONTACT.calendar` ([`src/consts.ts`](./src/consts.ts)).

## Deploy (Vercel)

1. Import the repo in Vercel. It auto-detects Astro (build `astro build`, output `dist/`).
2. `vercel.json` adds security + cache headers.
3. **DNS cutover for `madmatcher.ai`:**
   - In Vercel: Project → Settings → Domains → add `madmatcher.ai` and `www.madmatcher.ai`.
   - At your DNS provider, point the apex `A`/`ALIAS` record (and `www` `CNAME`) to Vercel
     as shown in the dashboard — this replaces the current GitHub Pages records.
   - The `CNAME` file and `gh-pages` deploy script are GitHub Pages artifacts and are not
     used by Vercel.
4. After cutover, submit `https://madmatcher.ai/sitemap-index.xml` in Google Search Console
   and Bing Webmaster Tools.

Until cutover, keep the live GitHub Pages site on `main`; this rebuild lives on the
`redesign` branch and can be previewed on a Vercel preview URL first.
