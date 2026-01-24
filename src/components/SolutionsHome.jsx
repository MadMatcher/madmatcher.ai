import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeSections.module.css';
import EmailSignup from './EmailSignup';

const solutions = [
  {
    category: 'Blocking Products',
    description: 'High-performance blocking to reduce candidate pairs',
    products: [
      {
        name: 'Sparkly',
        description: 'Scalable TF-IDF blocking with Apache Spark',
        features: [
          'High recall with TF-IDF scoring and top-k matching',
          'Tokenization for typos and variations',
          'Scalable distributed processing with Apache Spark',
        ],
        link: '/products#sparkly',
      },
      {
        name: 'Delex',
        description: 'User-driven predicates for blocking',
        features: [
          'Built in scoring functions',
          'Users can define rules that keep pairs and rules that drop pairs',
          'Tokenizers to standardize text',
        ],
        link: '/products#delex',
      },
    ],
  },
  {
    category: 'Matching Product',
    description: 'Advanced matching algorithms and workflows',
    products: [
      {
        name: 'MadLib',
        description: 'Comprehensive entity matching workflow suite',
        features: [
          'Use built-in similarity functions and tokenizers or build your own',
          'Supports passive learning and active learning',
          'Leverage Pandas, Spark on a local machine, or Spark on a cluster',
        ],
        link: '/products#madlib',
      },
    ],
  },
];

const SolutionsHome = () => (
  <section id="our-products" className="section bg-gray-50">
    <div className="container">
      {solutions.map((solution, solutionIndex) => (
        <div key={solution.category} className="solution-category mb-4xl">
          <div className="text-center mb-2xl">
            <h3 className="category-title">{solution.category}</h3>
            <p className="category-description">{solution.description}</p>
          </div>

          <div className={styles['products-grid']}>
            {solution.products.map((product, productIndex) => (
              <div
                key={product.name}
                className={`${styles['product-card']} ${
                  product.name === 'MadMatcher Tools' ? styles['madmatcher-tools'] : ''
                } ${
                  solution.products.length === 1 ? styles['single-product'] : ''
                } animate-fade-in`}
                style={{
                  animationDelay: `${(solutionIndex * 2 + productIndex) * 0.2}s`,
                }}
              >
                <div className="product-header">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                </div>

                <div className="product-features">
                  <h5 className="features-title">Key Features</h5>
                  <ul className="features-list">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-actions">
                  <Link to={product.link} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-4xl">
        <div className="max-w-3xl mx-auto">
          <h2>Ready to Get Started?</h2>

          <div className="flex justify-center gap-lg mt-xl">
            <a
              href="./products"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minWidth: '200px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="flex items-center gap-sm">Explore Our Open-Source Tools</span>
            </a>
          </div>
          <EmailSignup />
          <p style={{ marginTop: '3rem', marginBottom: '-2rem', fontSize: 'var(--text-lg)' }}>
            Contact us using the form below with <strong>questions</strong> or to request{' '}
            <strong>free consulting</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionsHome;
