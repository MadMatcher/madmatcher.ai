import React from 'react';
import { Link } from 'react-router-dom';
import EmailSignup from './EmailSignup';
import sectionStyles from './HomeSections.module.css';
import styles from './HomePageContent.module.css';

/* Content from new-homepage.md — product-card format with bulleted lists */

const PROBLEM_LINES = [
  'Labeled training data is expensive and slow to obtain',
  'Existing tools are difficult to tune and maintain',
  'Most solutions do not integrate cleanly with modern data stacks',
  'There is no scalable, accurate open-source foundation that data teams can build on',
];

const SOLUTION_LINES = [
  'Combines ideas from data management, AI/ML, and Web search to achieve high accuracy',
  'Scales to hundreds of millions of tuples using Apache Spark',
  'Is open source, and easy to customize and extend',
  'Is modular, easy to tune, and designed to integrate into modern data workflows',
  'Enables fast, efficient data labeling to train high-quality matchers',
  'Has been widely cited in academia and proven in real production workflows at research labs and enterprises',
];

const BLOCKING_LINES = [
  'Efficiently generates candidate record pairs using TF-IDF–based similarity, a technique widely used in Web search',
  'Easily extended with additional similarity measures and user-defined heuristic rules',
];

const MATCHING_LINES = [
  'Trains a matcher on labeled data and classifies each candidate pair as match or no-match',
  'Supports a wide range of ML classification models',
];

const LABELING_SCALE_LINES = [
  'If labeled data does not exist, MadMatcher provides workflows to quickly label training data',
  'Both blocking and matching are built on Apache Spark to scale to very large datasets',
];

const WHO_LINES = [
  'Data platform, catalog, and analytics teams',
  'Enterprises, government agencies, and research labs',
  'Practitioners building scalable, production-grade data systems',
];

const WHY_LINES = [
  'Designed as a system, not a collection of scripts or models',
  'Explicitly separates blocking, labeling, and matching, making pipelines easier to tune and evolve',
  'Scales cleanly from research prototypes to production deployments without rewrites',
  'Provides an open-source foundation with research-grade rigor',
];

const HomePageContent = () => (
  <>
    {/* The Problem + The MadMatcher Solution — vertically stacked cards */}
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.homeSectionStack}>
          <div className={`${sectionStyles['product-card']} ${styles.homeContentCard}`}>
            <div className="product-header">
              <h4 className="product-name">The Problem</h4>
              <p className="product-description">
                Entity matching is hard to do accurately, at scale, and in production.
              </p>
            </div>
            <div className="product-features">
              <ul className="features-list features-list-bulleted">
                {PROBLEM_LINES.map((line, idx) => (
                  <li key={idx} className="feature-item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${sectionStyles['product-card']} ${styles.homeContentCard}`}>
            <div className="product-header">
              <h4 className="product-name">The MadMatcher Solution</h4>
              <p className="product-description">
                MadMatcher is a production-ready entity matching system that:
              </p>
            </div>
            <div className="product-features">
              <ul className="features-list features-list-bulleted">
                {SOLUTION_LINES.map((line, idx) => (
                  <li key={idx} className="feature-item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works — section title + Blocking, Matching, Labeling & Scale cards */}
    <section className={`${styles.sectionAlt} section`}>
      <div className="container">
        <div className="text-center mb-2xl">
          <h3 className="category-title">How It Works</h3>
          <p className="category-description">
            MadMatcher performs entity matching in two steps: blocking and matching.
          </p>
        </div>
        <div className={styles.homeSectionStack}>
          <div className={`${sectionStyles['product-card']} ${styles.homeContentCard}`}>
            <div className="product-header">
              <h4 className="product-name">1. Blocking</h4>
            </div>
            <div className="product-features">
              <ul className="features-list features-list-bulleted">
                {BLOCKING_LINES.map((line, idx) => (
                  <li key={idx} className="feature-item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${sectionStyles['product-card']} ${styles.homeContentCard}`}>
            <div className="product-header">
              <h4 className="product-name">2. Matching</h4>
            </div>
            <div className="product-features">
              <ul className="features-list features-list-bulleted">
                {MATCHING_LINES.map((line, idx) => (
                  <li key={idx} className="feature-item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${sectionStyles['product-card']} ${styles.homeContentCard}`}>
            <div className="product-header">
              <h4 className="product-name">Labeling & Scale</h4>
            </div>
            <div className="product-features">
              <ul className="features-list features-list-bulleted">
                {LABELING_SCALE_LINES.map((line, idx) => (
                  <li key={idx} className="feature-item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Who Uses MadMatcher? + Why MadMatcher? — vertically stacked cards (white bg for alternating) */}
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.homeSectionStack}>
          <div className={`${sectionStyles['product-card']} ${styles.homeContentCard}`}>
            <div className="product-header">
              <h4 className="product-name">Who Uses MadMatcher?</h4>
            </div>
            <div className="product-features">
              <ul className="features-list features-list-bulleted">
                {WHO_LINES.map((line, idx) => (
                  <li key={idx} className="feature-item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${sectionStyles['product-card']} ${styles.homeContentCard}`}>
            <div className="product-header">
              <h4 className="product-name">Why MadMatcher?</h4>
            </div>
            <div className="product-features">
              <ul className="features-list features-list-bulleted">
                {WHY_LINES.map((line, idx) => (
                  <li key={idx} className="feature-item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Ready to Get Started? — CTA (no card) */}
    <section id="get-started" className={`${styles.getStartedSection} section`}>
      <div className="container">
        <div className={styles.getStartedContent}>
          <h2 className={styles.getStartedTitle}>Ready to Get Started?</h2>
          <p className={styles.getStartedLead}>
            Explore the solutions, join our mailing list to stay updated, or contact us with
            questions or requests for free consulting.
          </p>
          <div className={styles.ctaButtonWrap}>
            <Link to="/products" className="btn btn-primary">
              Explore the Solutions
            </Link>
          </div>
          <EmailSignup />
          <p className={styles.contactHint}>
            Contact us using the form below with <strong>questions</strong> or to request{' '}
            <strong>free consulting</strong>.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default HomePageContent;
