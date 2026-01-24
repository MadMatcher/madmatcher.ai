import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';

const Index = () => (
  <Main description="MadMatcher's Website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Scalable and Accurate Entity Matching</h2>
        </div>
      </header>

      <section>
        <p>
          MadMatcher provides solutions for Scalable & Accurate Entity Matching. We build upon key
          ideas from databases, big data, AI/ML, information retrieval, and human interaction.
        </p>
      </section>
    </article>
  </Main>
);

export default Index;
