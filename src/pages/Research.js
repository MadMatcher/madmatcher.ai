import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Research = () => (
  <Main title="Research" description="The research projects under Magellan's umbrella.">
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2>Research</h2>
        </div>
      </header>

      <section>
        <p>
          In this page we describe the research projects that fall under the Magellan umbrella. (If
          you have worked on one of these projects yet do not see your name listed here, please
          accept our apologies and send us an email.)
        </p>
      </section>
      <section>
        <h3>PyMatcher (2015 - Date)</h3>
        <p>
          This project develops an EM platform that uses Python packages on a single machine (e.g.,
          pandas, sklearn). PyMatcher is intended for matching tables of small to medium size (e.g.,
          up to a few million tuples per table). It includes tools to take samples from the tables,
          use the samples to find an accurate EM pipeline, then apply that pipeline to match the
          original tables.
        </p>
        Selected Publications
        <ul>
          {' '}
          <li>test1</li>
          <li>test2</li>
        </ul>
      </section>

      <section>
        <h3>SparkMatcher</h3>
      </section>
      <section>
        <h3>CloudMatcher</h3>
      </section>
      <section>
        <h3>Corleone and Falcone</h3>
      </section>
      <section>
        <h3>Deep Learning</h3>
      </section>
      <section>
        <h3>String Matching, Schema Matching, Ontology Matching, and Others</h3>
      </section>
    </article>
  </Main>
);

export default Research;
