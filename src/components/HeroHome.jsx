import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HeroHome = () => (
  <section className="hero">
    <div className="hero-container">
      <div className="hero-content animate-fade-in">
        <h1 className="hero-title">
          Fast & Accurate
          <br />
          Entity Matching
        </h1>

        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary btn-lg">
            Explore Products
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="hero-image animate-fade-in">
        <img src={logo} alt="MadMatcher Logo" />
      </div>
    </div>
  </section>
);

export default HeroHome;
