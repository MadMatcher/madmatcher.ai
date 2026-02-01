import React from 'react';

const products = [
  {
    id: 'sparkly',
    name: 'Sparkly',
    subtitle:
      'Uses TF/IDF–based similarity to block, and has been shown to outperform many state-of-the-art blocking approaches.',
    github: 'https://github.com/anhaidgroup/sparkly',
    apiDocs: 'https://anhaidgroup.github.io/sparkly/',
    examples: 'https://github.com/anhaidgroup/sparkly/tree/main/examples',
  },
  {
    id: 'delex',
    name: 'Delex',
    subtitle:
      ' Enables users to combine multiple blocking strategies within a single workflow. It provides a declarative language for specifying blocking rules, allowing users to express complex blocking logic in a concise and flexible way.',
    github: 'https://github.com/anhaidgroup/delex',
    apiDocs: 'https://anhaidgroup.github.io/delex/',
    examples: 'https://github.com/anhaidgroup/delex/tree/main/examples',
  },
  {
    id: 'matchflow',
    name: 'MatchFlow',
    subtitle:
      'Enables users to create a wide range of workflows for the matching step, across different runtime environments. It provides modular components that can be composed into flexible matching pipelines.  It also provides workflows for fast and effective labeling of training data.',

    github: 'https://github.com/madmatcher/matchflow',
    apiDocs: 'https://madmatcher.github.io/MatchFlow/',
    examples: 'https://github.com/madmatcher/matchflow/tree/main/examples',
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
      <section className="section bg-gray-50" id="products" style={{ paddingTop: 'var(--spacing-lg)' }}>
        <div className="container">
          <div className="grid grid-cols-1 gap-xl">
            {products.map((product, index) => (
              <React.Fragment key={product.id}>
                {index === 0 && (
                  <p
                    className="mb-lg text-center"
                    style={{
                      gridColumn: '1 / -1',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                    }}
                  >
                    The following packages support the <strong>blocking</strong> step
                  </p>
                )}
                {index === 2 && (
                  <p
                    className="text-center"
                    style={{
                      gridColumn: '1 / -1',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      marginTop: '2rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    The following package supports the <strong>matching</strong> step
                  </p>
                )}
                <div
                  id={product.id}
                  className="card animate-fade-in scroll-margin-for-nav"
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
