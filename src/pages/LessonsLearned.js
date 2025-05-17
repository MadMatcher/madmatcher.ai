import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import lessons from '../data/lessons';
import Lesson from '../components/Lessons/Lesson';

const LessonsLearned = () => (
  <Main
    title="Lessons Learned"
    description="Insights from developing MagellanTech tools and deploying them in the real world."
  >
    <article className="post" id="lessons">
      <header>
        <div className="title">
          <h2>Lessons Learned</h2>
        </div>
      </header>
      <section>
        <p>
          In this page we describe the main lessons learned and how they have been driving our work
          in the Magellan project.
        </p>
      </section>
      <section>
        <h3>Blocking</h3>
      </section>
      <section>
        <h3>Matching</h3>
      </section>
    </article>
  </Main>
);

export default LessonsLearned;
