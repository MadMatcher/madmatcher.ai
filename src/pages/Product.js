import React from 'react';

const products = [
  {
    id: 'sparkly',
    name: 'Sparkly',
    subtitle:
      'Uses TF/IDF–based similarity to block, and has been shown to outperform many state-of-the-art blocking approaches.',
    github: 'https://github.com/MadMatcher/sparkly',
    apiDocs: 'https://sparkly.madmatcher.ai/',
    examples: 'https://github.com/MadMatcher/sparkly/tree/main/examples',
  },
  {
    id: 'delex',
    name: 'Delex',
    subtitle:
      ' Enables users to combine multiple blocking strategies within a single workflow. It provides a declarative language for specifying blocking rules, allowing users to express complex blocking logic in a concise and flexible way.',
    github: 'https://github.com/MadMatcher/delex',
    apiDocs: 'https://delex.madmatcher.ai/',
    examples: 'https://github.com/MadMatcher/delex/tree/main/examples',
  },
  {
    id: 'matchflow',
    name: 'MatchFlow',
    subtitle:
      'Enables users to create a wide range of workflows for the matching step, across different runtime environments. It provides modular components that can be composed into flexible matching pipelines.  It also provides workflows for fast and effective labeling of training data.',

    github: 'https://github.com/MadMatcher/MatchFlow',
    apiDocs: 'https://matchflow.madmatcher.ai/',
    examples: 'https://github.com/MadMatcher/MatchFlow/tree/main/examples',
  },
  // {
  //   id: 'consulting',
  //   name: 'Consulting Services',
  //   subtitle:
  //     'The MadMatcher team will help you understand where and how to implement entity matching in your data pipeline.',
  // },
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
      <section className="use-cases-header" style={headerStyle}>
        <div className="container">
          <div className="text-center">
            <h1>MadMatcher Products</h1>
            <p className="section-intro">
              MadMatcher provides three open-source packages that support end-to-end EM workflows at
              scale.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section
        className="section bg-gray-50"
        id="products"
        style={{ paddingTop: 'var(--spacing-lg)' }}
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-xl">
            {products.map((product, index) => (
              <React.Fragment key={product.id}>
                {index === 0 && (
                  <h1 className="text-center" style={{ fontSize: 'var(--text-2xl)' }}>
                    Blocking
                  </h1>
                )}
                {index === 2 && (
                  <h1 className="text-center" style={{ fontSize: 'var(--text-2xl)' }}>
                    Matching
                  </h1>
                )}
                <div
                  id={product.id}
                  className="card animate-fade-in scroll-margin-for-nav"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {product.id === 'consulting' ? (
                    // Consulting card - simplified layout
                    <div className="text-center">
                      <h2 className="product-name mb-sm">{product.name}</h2>
                      <p
                        className="product-description mb-lg"
                        style={{ color: 'var(--color-primary)' }}
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
                          <h2 className="product-name mb-sm">{product.name}</h2>
                          <p
                            className="product-description mb-0"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            {product.subtitle}
                          </p>
                        </div>

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
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
