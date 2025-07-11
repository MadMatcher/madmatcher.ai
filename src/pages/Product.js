import React from 'react';

const products = [
  {
    id: 'sparkly',
    name: 'Sparkly',
    subtitle:
      'A TF/IDF top-k blocking system for entity matching built on Apache Spark and PyLucene',
    icon: '⚡',
    features: [
      'Top-k blocking using BM25 scoring',
      'Built on Apache Spark for distributed computation',
      'PyLucene-based indexing and search',
      'Simple configuration API for index fields',
      'Support for n-gram tokenization',
      'Handles large-scale datasets efficiently',
    ],
    useCases: [
      'Blocking for large entity matching tasks',
      'Distributed search across massive datasets',
      'High quality candidate pair generation',
    ],
    github: 'https://github.com/anhaidgroup/sparkly',
    docs: 'https://github.com/anhaidgroup/sparkly/tree/main/doc',
    apiDocs: 'https://github.com/anhaidgroup/sparkly#api-docs',
    examples: 'https://github.com/anhaidgroup/sparkly/tree/main/examples',
  },
  {
    id: 'delex',
    name: 'Delex',
    subtitle:
      'Delex allows the user to create blocking predicates, allowing users with domain knowledge to create blocking rules that are specific to their data.',
    icon: '🔍',
    features: [
      'Built-in scoring functions for comparing text',
      'User-defined blocking rules and predicates',
      'Tokenizers for text standardization',
      'Rule-based blocking with keep/drop logic',
      'Customizable blocking strategies',
      'Efficient predicate evaluation',
    ],
    useCases: [
      'Domain-specific blocking rules',
      'Flexible predicate combinations for custom blocking logic',
      'Efficient blocking for high-volume data processing',
    ],
    github: 'https://github.com/anhaidgroup/delex',
    docs: 'https://github.com/anhaidgroup/delex/tree/main/doc',
    apiDocs: 'https://github.com/anhaidgroup/delex#api-docs',
    examples: 'https://github.com/anhaidgroup/delex/tree/main/examples',
  },
  {
    id: 'mm-tools',
    name: 'MadMatcher Matching Tools',
    subtitle:
      'A comprehensive suite of tools to create, customize, and deploy your own entity matching workflows. Build powerful matching solutions with our modular components.',
    icon: '🛠️',
    features: [
      'Modular component architecture',
      'Use built-in or custom similarity functions and tokenizers',
      'Adaptable for most SparkML or SKLearn models',
      'Active learning capabilities',
    ],
    useCases: [
      'Labeling data using Active Learning so you label the most informative exmples',
      'Featurizing your data efficiently with Spark',
      'Building specialized matching pipelines',
    ],
    github: 'https://github.com/madmatcher/mm-tools',
    docs: 'https://docs.madmatcher.com/mm-tools',
    apiDocs: 'https://api.madmatcher.com/mm-tools',
    examples: 'https://examples.madmatcher.com/mm-tools',
  },
  {
    id: 'consulting',
    name: 'Consulting Services',
    subtitle:
      'The MadMatcher team will help you understand where and how to implement entity matching in your data pipeline.',
  },
];

// Add this style override at the top of the Product component
const headerStyle = {
  marginBottom: 0,
  paddingBottom: '16px',
};

const Product = () => {
  return (
    <>
      {/* Header Section */}
      <section className="case-studies-header" style={headerStyle}>
        <div className="container">
          <div className="text-center">
            <h1>MadMatcher Products</h1>
            <p className="section-intro">
              Comprehensive entity matching solutions with Pandas or Spark
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-gray-50" id="products">
        <div className="container">
          <div className="grid grid-cols-1 gap-xl">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id} // Add id for anchor links
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {product.id === 'consulting' ? (
                  // Consulting card - simplified layout
                  <div className="text-center">
                    <h2
                      className="text-primary mb-sm"
                      style={{ fontSize: '1.8rem', fontWeight: '700' }}
                    >
                      {product.name}
                    </h2>
                    <p
                      className="text-secondary mb-lg"
                      style={{ fontSize: '1.1rem', fontWeight: '500' }}
                    >
                      {product.subtitle}
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/contact"
                        className="btn btn-primary btn-sm"
                        style={{
                          minWidth: '80px',
                          height: '36px',
                          fontSize: '0.9rem',
                        }}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                ) : (
                  // Standard layout for other products
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
                    {/* Product Info - Left side */}
                    <div className="lg:col-span-6 flex flex-col">
                      <div className="mb-lg text-center">
                        <h2
                          className="text-primary mb-sm"
                          style={{ fontSize: '1.8rem', fontWeight: '700' }}
                        >
                          {product.name}
                        </h2>
                        <p
                          className="text-secondary mb-0"
                          style={{ fontSize: '1.1rem', fontWeight: '500' }}
                        >
                          {product.subtitle}
                        </p>
                      </div>

                      <p
                        className="mb-xs"
                        style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: 'var(--color-gray-600)',
                        }}
                      >
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-sm justify-center">
                        {product.github && (
                          <a
                            href={product.github}
                            className="btn btn-primary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              minWidth: '80px',
                              height: '36px',
                              fontSize: '0.9rem',
                            }}
                          >
                            GitHub
                          </a>
                        )}
                        {product.docs && product.id !== 'delex' && (
                          <a
                            href={product.docs}
                            className="btn btn-secondary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              minWidth: '80px',
                              height: '36px',
                              fontSize: '0.9rem',
                            }}
                          >
                            Docs
                          </a>
                        )}
                        {product.apiDocs && (
                          <a
                            href={product.apiDocs}
                            className="btn btn-secondary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              minWidth: '80px',
                              height: '36px',
                              fontSize: '0.9rem',
                            }}
                          >
                            API
                          </a>
                        )}
                        {product.examples && (
                          <a
                            href={product.examples}
                            className="btn btn-secondary btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              minWidth: '80px',
                              height: '36px',
                              fontSize: '0.9rem',
                            }}
                          >
                            Examples
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Features and Use Cases - Right side */}
                    <div className="lg:col-span-6">
                      <div className="flex justify-center">
                        <div className="flex gap-xl" style={{ maxWidth: '800px' }}>
                          {/* Features */}
                          <div className="flex-1">
                            <h4
                              className="text-primary mb-md text-center"
                              style={{ fontSize: '1.4rem', fontWeight: '600' }}
                            >
                              Key Features
                            </h4>
                            <ul className="space-y-sm">
                              {product.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-sm"
                                  style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-gray-700)',
                                  }}
                                >
                                  <span
                                    style={{
                                      color: 'var(--color-secondary)',
                                      fontSize: '1.2rem',
                                    }}
                                  >
                                    ✓
                                  </span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Use Cases */}
                          <div className="flex-1">
                            <h4
                              className="text-primary mb-md text-center"
                              style={{ fontSize: '1.4rem', fontWeight: '600' }}
                            >
                              Use Cases
                            </h4>
                            <ul className="space-y-sm">
                              {product.useCases.map((useCase, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-sm"
                                  style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--color-gray-600)',
                                  }}
                                >
                                  <span
                                    style={{
                                      color: 'var(--color-secondary)',
                                      fontSize: '1.1rem',
                                    }}
                                  >
                                    →
                                  </span>
                                  {useCase}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2>Ready to Get Started?</h2>
              <p className="hero-subtitle mb-lg">
                Explore our open-source tools or get in touch with our team to discuss your entity
                matching needs.
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
                <a
                  href="/contact"
                  className="btn btn-secondary btn-lg"
                  style={{
                    minWidth: '200px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
