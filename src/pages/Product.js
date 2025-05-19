import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Product = () => (
  <Main title="Product" description="Learn about our products">
    <article className="post" id="product">
      <header>
        <div className="title">
          <h2>Our Products</h2>
        </div>
      </header>

      <section id="open-source">
        <h3>Open-Source Solutions</h3>
        <p>Our open-source tools provide powerful data matching capabilities for the community.</p>
        <ul>
          <li>PyMatcher - A package for string matching in Python</li>
          <li>Sparkly - Entity matching using Spark</li>
          <li>Delex - Advanced entity matching algorithms</li>
          <li>ActiveMatcher - Interactive matching solutions</li>
        </ul>
      </section>

      <section id="sparkmatcher">
        <h3>SparkMatcher</h3>
        <p>Enterprise-grade entity matching solution built on Apache Spark.</p>
        <ul>
          <li>Scalable to billions of records</li>
          <li>Real-time matching capabilities</li>
          <li>Advanced machine learning algorithms</li>
          <li>Enterprise support and maintenance</li>
        </ul>
      </section>

      <section id="cloudmatcher">
        <h3>CloudMatcher</h3>
        <p>Cloud-based entity matching solution for modern enterprises.</p>
        <ul>
          <li>Fully managed cloud service</li>
          <li>Pay-as-you-go pricing</li>
          <li>Automatic scaling</li>
          <li>Enterprise-grade security</li>
        </ul>
      </section>

      <section id="consulting">
        <h3>Consulting Services</h3>
        <p>Expert consulting services to help you implement the right matching solution.</p>
        <ul>
          <li>Solution architecture</li>
          <li>Implementation support</li>
          <li>Performance optimization</li>
          <li>Custom development</li>
        </ul>
      </section>
    </article>
  </Main>
);

export default Product;
