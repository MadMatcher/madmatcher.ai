import React from 'react';
import styles from './UseCases.module.css';

/* Content from new-use-cases.md */

const INTRO =
  'MadMatcher is designed for teams that need accurate, scalable entity matching as part of real data workflows. Below are common scenarios where MadMatcher is a good fit.';

const USE_CASES = [
  {
    title: 'Enterprise Data Integration',
    body: 'Resolve duplicate or inconsistent entities across CRM, billing, logs, and data warehouses using repeatable, scalable pipelines.',
  },
  {
    title: 'Data Platforms and Catalogs',
    body: 'Provide entity matching as a reusable platform capability that integrates cleanly with modern data stacks and metadata systems.',
  },
  {
    title: 'Customer, Product, and Supplier 360s',
    body: 'Build unified 360° views by resolving entities across fragmented source systems. MadMatcher helps link customer, product, or supplier records across CRM, ERP, commerce, and operational datasets to create consistent, reusable entity representations.',
  },
  {
    title: 'Research at Scale',
    body: 'Support large-scale, reproducible entity matching experiments on datasets such as publications, knowledge graphs, and scientific records.',
  },
  {
    title: 'Government and Public-Sector Data',
    body: 'Link large, heterogeneous datasets with transparent, inspectable matching logic suitable for open and audited environments.',
  },
  {
    title: 'Model Training and Evaluation',
    body: 'Efficiently label data, train matchers, and iterate on features and models within a unified, scalable system.',
  },
  {
    title: 'String, Schema, and Ontology Matching',
    body: 'Match strings, schema elements, or ontology concepts across heterogeneous sources, using configurable similarity measures, rules, and learned matchers.',
  },
];

const GOOD_FIT_ITEMS = [
  'You need entity matching at scale, not one-off scripts',
  'You want a system, not just a model',
  'You need an open-source foundation that evolves with your workflows',
];

const UseCases = () => (
  <div className={styles.wrapper}>
    <section className="use-cases-header">
      <div className="container">
        <div className="text-center">
          <h1>Use Cases</h1>
          <p className="section-intro">{INTRO}</p>
        </div>
      </div>
    </section>

    <section className={styles.useCasesList}>
      <div className="container">
        {USE_CASES.map((uc, idx) => (
          <div key={idx} className={`product-card ${styles.useCaseCard}`}>
            <h2 className={`product-name ${styles.useCaseTitle}`}>{uc.title}</h2>
            <p className={`product-description ${styles.useCaseBody}`}>{uc.body}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="good-fit" className={styles.goodFitSection}>
      <div className="container">
        <div className={`product-card ${styles.goodFitCard}`}>
          <div className="product-header">
            <h4 className="product-name">When MadMatcher Is a Good Fit</h4>
          </div>
          <div className="product-features">
            <ul className="features-list features-list-bulleted">
              {GOOD_FIT_ITEMS.map((item, idx) => (
                <li key={idx} className="feature-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default UseCases;
