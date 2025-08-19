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
            Fast & Accurate
            <br />
            Entity Matching
          </h1>

          <div className="hero-actions">
            <p className="hero-blurb">
              MadMatcher delivers state-of-the-art entity matching solutions for enterprises and
              researchers. Our open-source tools are designed for scalability, accuracy, and ease of
              integration.
            </p>
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
