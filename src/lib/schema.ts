/**
 * Reusable schema.org JSON-LD builders.
 * Used by the layouts/pages so structured data stays consistent and DRY.
 */
import { SITE, SOCIAL, CITATION } from '../consts';

const abs = (path: string) => new URL(path, SITE.url).href;

/** Organization — emitted site-wide so search/AI engines learn the entity. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: abs('/og/logo.png'),
    description: SITE.description,
    foundingDate: SITE.founded,
    founder: { '@type': 'Person', name: 'Dev Ahluwalia' },
    sameAs: [SOCIAL.github, SOCIAL.linkedin].filter(Boolean),
  };
}

/** WebSite — enables sitelinks/search semantics. */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

/** SoftwareApplication — describes the engine itself. */
export function softwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform (Apache Spark)',
    description: SITE.description,
    url: SITE.url,
    softwareRequirements: 'Apache Spark',
    // The open-source core (Sparkly, Delex, MatchFlow) is free; Pro + consulting sit on top.
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description:
        'Open-source core (Sparkly, Delex, MatchFlow). MadMatcher-Pro and consulting available commercially.',
    },
    citation: scholarlyArticleSchema(),
  };
}

/** ScholarlyArticle — surfaces the VLDB 2023 Sparkly paper. */
export function scholarlyArticleSchema() {
  return {
    '@type': 'ScholarlyArticle',
    name: CITATION.title,
    headline: CITATION.title,
    url: CITATION.url,
    datePublished: '2023',
    isPartOf: {
      '@type': 'PublicationVolume',
      name: 'Proceedings of the VLDB Endowment',
      volumeNumber: '16',
      issueNumber: '6',
    },
    author: { '@type': 'Person', name: 'Derek Paulsen' },
  };
}

/** Article — for blog posts. */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image ? abs(opts.image) : abs('/og/default.png'),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Person', name: opts.author ?? 'Dev Ahluwalia', url: abs('/about/team') },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.url) },
    ...(opts.keywords && opts.keywords.length ? { keywords: opts.keywords.join(', ') } : {}),
  };
}

/** FAQPage — Q→A pairs that answer engines ingest cleanly. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}

/** BreadcrumbList — better SERP breadcrumbs + navigation context. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** DefinedTerm — for glossary entries (strong GEO signal). */
export function definedTermSchema(opts: { term: string; definition: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: opts.term,
    description: opts.definition,
    url: abs(opts.url),
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'MadMatcher Entity Matching Glossary',
      url: abs('/glossary'),
    },
  };
}
