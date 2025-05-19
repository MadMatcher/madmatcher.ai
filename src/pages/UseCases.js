import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const UseCases = () => (
  <Main title="Use Cases" description="Explore our use cases">
    <article className="post" id="use-cases">
      <header>
        <div className="title">
          <h2>Use Cases</h2>
        </div>
      </header>

      <section id="use-case-1">
        <h3>Use Case 1: Customer Data Integration</h3>
        <p>How we helped a financial institution integrate customer data from multiple sources.</p>
        <ul>
          <li>Challenge: Merging customer records from 5 different systems</li>
          <li>Solution: Custom matching algorithm with 99.9% accuracy</li>
          <li>Result: 40% reduction in duplicate records</li>
          <li>Technology: SparkMatcher with custom rules engine</li>
        </ul>
      </section>

      <section id="use-case-2">
        <h3>Use Case 2: Product Catalog Matching</h3>
        <p>E-commerce platform product catalog integration case study.</p>
        <ul>
          <li>Challenge: Matching products across multiple vendors</li>
          <li>Solution: Machine learning-based matching system</li>
          <li>Result: 95% matching accuracy with 10x faster processing</li>
          <li>Technology: CloudMatcher with ML pipeline</li>
        </ul>
      </section>

      <section id="use-case-3">
        <h3>Use Case 3: Healthcare Records Matching</h3>
        <p>Patient record matching for a healthcare provider network.</p>
        <ul>
          <li>Challenge: HIPAA-compliant patient record matching</li>
          <li>Solution: Secure, privacy-preserving matching system</li>
          <li>Result: 99.5% matching accuracy with full compliance</li>
          <li>Technology: Custom solution with privacy guarantees</li>
        </ul>
      </section>
    </article>
  </Main>
);

export default UseCases;
