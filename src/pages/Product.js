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
    </>
  );
};

export default Product;
