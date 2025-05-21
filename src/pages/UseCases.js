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
        <h3>Use Case 1: Product Matching</h3>
        <p>
          <em>Walmart</em>
        </p>
        <ul>
          <li>Challenge: Deployed product-matching system had subpar results</li>
          <li>Result: 34% increase in precision</li>
        </ul>
      </section>

      <section id="use-case-2">
        <h3>Use Case 2: Industry Profiling</h3>
        <p>
          <em>Recruit Holdings</em>
        </p>
        <ul>
          <li>Challenge: Stores, companies, and property names referring to the same entities</li>
          <li>Result: 98.9% accuracy on matching 10K store names</li>
        </ul>
      </section>

      <section id="use-case-3">
        <h3>Use Case 3: Ontology Resolution</h3>
        <p>
          <em>Limnology (UW) - EDI</em>
        </p>
        <ul>
          <li>
            Challenge: Dataset columns collected from several research groups need to be matched
            with ECSO Ontologies
          </li>
          <li>Result: In progress</li>
        </ul>
      </section>
    </article>
  </Main>
);

export default UseCases;
