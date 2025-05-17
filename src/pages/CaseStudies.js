import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import caseData from '../data/caseStudies';
import Case from '../components/CaseStudies/Case';

const CaseStudies = () => (
  <Main title="Case Studies" description="Real-world examples of MagellanTech deployments.">
    <article className="post" id="case-studies">
      <header>
        <div className="title">
          <h2>Case Studies</h2>
        </div>
      </header>
      <section>
        <p>In this page we describe case studies with many customers.</p>
      </section>
      <section>
        <h3>Companies</h3>
      </section>
      <section>
        <h3>Domain Sciences</h3>
      </section>
      <section>
        <h3>GreenBay and Informatica</h3>
      </section>
    </article>
  </Main>
);

export default CaseStudies;
