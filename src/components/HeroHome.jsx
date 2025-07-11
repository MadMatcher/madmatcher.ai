import React from 'react';
import network from '../assets/network.png';

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
            <button
              onClick={() => scrollToSection('our-products')}
              className="btn btn-primary btn-lg"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollToSection('contact-us')}
              className="btn btn-secondary btn-lg"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image animate-fade-in">
          <img src={network} alt="Entity Matching Network" />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
