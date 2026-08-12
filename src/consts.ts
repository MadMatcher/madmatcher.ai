/** Canonical site facts: single source of truth for copy across the site. */

export const SITE = {
  name: 'MadMatcher',
  legalName: 'MadMatcher LLC',
  url: 'https://madmatcher.ai',
  tagline: 'Accurate entity matching at scale, in your own infrastructure.',
  description:
    'MadMatcher resolves records that refer to the same real-world entity across large, messy datasets. Benchmarked blocking (Sparkly, Delex) and a matcher you train to your own domain (MatchFlow), running on Apache Spark in your own infrastructure.',
  founded: '2026',
  locale: 'en_US',
  twitterHandle: '',
} as const;

export const CONTACT = {
  email: 'hello@madmatcher.ai',
  supportEmail: 'support@madmatcher.ai',
  calendar: 'https://calendar.app.google/XHJRT4dU5NRGfGb79',
} as const;

export const SOCIAL = {
  github: 'https://github.com/MadMatcher',
  linkedin: 'https://www.linkedin.com/company/madmatcher',
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'Products', href: '/products' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Use cases', href: '/use-cases' },
  { label: 'Compare', href: '/compare' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
];

/** Homepage proof points. */
export const PROOF = [
  { value: '100M+', label: 'records per table', sub: 'scales out with your cluster' },
  { value: '8', label: 'leading blockers it beats', sub: 'peer-reviewed, VLDB 2023' },
  { value: '0', label: 'records sent to us', sub: 'runs in your own cloud or cluster' },
] as const;

/** The three components. Summaries mirror each repo's README. */
export const PRODUCTS = [
  {
    slug: 'sparkly',
    name: 'Sparkly',
    role: 'TF/IDF blocking',
    step: 'Blocking',
    status: '',
    summary:
      'Finds candidate matches using top-k TF/IDF similarity (the BM25 variant, via Lucene). It indexes one table and searches it with the other, scaling to hundreds of millions of tuples on Spark.',
    highlight: 'Outperforms eight state-of-the-art blocking solutions (VLDB 2023).',
    github: 'https://github.com/MadMatcher/sparkly',
    docs: 'https://docs.madmatcher.ai/sparkly',
  },
  {
    slug: 'delex',
    name: 'Delex',
    role: 'Multi-strategy blocking',
    step: 'Blocking',
    status: '',
    summary:
      'Combines several blocking strategies (TF/IDF, dictionary blockers, custom rules) in one declarative program, compiled to a Spark DAG. Use it when one blocking strategy is not enough.',
    highlight: 'Start with Sparkly; reach for Delex when you need to combine strategies.',
    github: 'https://github.com/MadMatcher/delex',
    docs: 'https://docs.madmatcher.ai/delex',
  },
  {
    slug: 'matchflow',
    name: 'MatchFlow',
    role: 'Matching',
    step: 'Matching',
    status: '',
    summary:
      'Trains a supervised ML matcher on labeled pairs and applies it to the blocking output. Composable functions for features, labeling, training, and prediction; runs on pandas or Spark.',
    highlight: 'Active learning builds training data from about 600 labeled pairs.',
    github: 'https://github.com/MadMatcher/MatchFlow',
    docs: 'https://docs.madmatcher.ai/matchflow',
  },
] as const;

/** Commercial offerings on top of the open-source core. */
export const PRO = {
  name: 'MadMatcher-Pro',
  tagline: 'Production reliability and semantic accuracy on top of the open-source core.',
  description:
    'The same Sparkly, Delex, and MatchFlow, plus the features a production pipeline needs. Crash recovery and live progress tracking keep a multi-hour run going instead of starting over, and semantic (embedding-based) blocking and matching push accuracy higher on messy, real-world data.',
  // The premium features available today.
  features: ['Crash recovery', 'Progress tracking', 'Semantic blocking', 'Semantic matching feature'],
  docs: 'https://docs.madmatcher.ai/madmatcher-pro',
} as const;

/** The separately licensed real-time serving add-on to Pro. */
export const REALTIME = {
  name: 'Real-Time Serving',
  tagline: 'Single-record matching in milliseconds, from the same pipeline.',
  description:
    'An add-on to MadMatcher-Pro for records that arrive one at a time. Publish a finished batch build as a serving bundle and match each incoming record in milliseconds, in-process, with no Spark job per request. The same blocker and trained matcher answer both ways, so a served match is identical to the batch one.',
  features: [
    'Single records, batches, and micro-batching',
    'Worker pools that scale across cores',
    'Durable source-to-sink streams with crash resume',
    'Zero-downtime bundle hot-swap',
  ],
  docs: 'https://docs.madmatcher.ai/madmatcher-pro',
} as const;

export const CONSULTING = {
  name: 'Consulting',
  tagline: 'Hands-on help with your matching problem.',
  description:
    'Work directly with the team to build and tune an entity matching pipeline on your own data, from blocking strategy to a trained matcher.',
} as const;

export const ANALYTICS = {
  /** PostHog project API key (public, safe to ship). Set PUBLIC_POSTHOG_KEY in .env. */
  posthogKey: import.meta.env.PUBLIC_POSTHOG_KEY,
  /** PostHog Cloud ingestion host. Set PUBLIC_POSTHOG_HOST in .env. */
  posthogHost: import.meta.env.PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
} as const;

/** The research citation. */
export const CITATION = {
  title: 'Sparkly: A Simple yet Surprisingly Strong TF/IDF Blocker for Entity Matching',
  venue: 'VLDB 16(6), 2023',
  url: 'https://pages.cs.wisc.edu/~anhai/papers1/sparkly-vldb2023.pdf',
  short: 'Paulsen et al., VLDB 16(6), 2023',
} as const;
