import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';

const Index = () => (
  <Main description="MadMatcher's Website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Fast and Accurate Entity Matching with AI</h2>
        </div>
      </header>

      <section>
        <p>
          MadMatcher provides solutions for Fast & Accurate Entity Matching. We take advantage of
          modern Machine Learning and Artificial Intelligence algorithms along with Spark to achieve
          this.
        </p>
      </section>
    </article>
  </Main>
);

export default Index;
