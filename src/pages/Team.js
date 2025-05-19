import React from 'react';
import Main from '../layouts/Main';

const Team = () => (
  <Main title="Team" description="Meet our team.">
    <article className="post" id="team">
      <header>
        <div className="title">
          <h2>Team</h2>
        </div>
      </header>
      <section>
        <p>This is the Team page.</p>
      </section>
    </article>
  </Main>
);

export default Team;
