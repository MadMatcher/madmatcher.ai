import React from 'react';
import mmHero from '../assets/mm-hero-optimized.jpg';

const HeroHome = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Scalable & Accurate
            <br />
            Entity Matching
          </h1>

          <div className="hero-actions">
            <p className="hero-blurb">For data teams working with large, messy datasets.</p>
            <p className="hero-blurb">
              Built on{' '}
              <a href="https://anhaidgroup.github.io/magellan/" style={{ textDecoration: 'none' }}>
                10+ years of research
              </a>{' '}
              at UW-Madison.
            </p>
            <p className="hero-blurb">Proven in research and real production workflows.</p>
            <a
              href="#get-started"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('get-started');
              }}
              className="btn btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="hero-image animate-fade-in">
          <img src={mmHero} alt="Entity Matching Network" />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
