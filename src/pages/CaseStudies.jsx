import React, { useState } from 'react';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
  const [activeSection, setActiveSection] = useState('datasets');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="case-studies-wrapper">
      {/* Header Section */}
      <section className="case-studies-header">
        <div className="container">
          <div className="text-center">
            <h1>Case Studies</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="text-center">
            <p style={{ color: 'black' }}>
              We have used the MadMatcher and earlier variants in many real-world applications in
              domain sciences and industry. We will report more details here in the near future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
