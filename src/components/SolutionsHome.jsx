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
      <div className="text-center mb-2xl">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Enterprise-grade entity matching tools designed for scale and accuracy
        </p>
      </div>

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
          <p className="hero-subtitle mb-lg">
            Explore our <strong>open-source tools</strong>, join our <strong>mailing list</strong>,
            or reach out for <strong>free consulting</strong> using the contact form below.
          </p>
          <div className="flex justify-center gap-lg mt-xl">
            <a
              href="https://github.com/madmatcher"
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
              <span className="flex items-center gap-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </span>
            </a>
          </div>
          <EmailSignup />
        </div>
      </div>
    </div>
  </section>
);

export default SolutionsHome;
