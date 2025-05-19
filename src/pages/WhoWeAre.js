import React from 'react';
import Main from '../layouts/Main';

const WhoWeAre = () => (
  <Main title="Who We Are" description="Learn about who we are.">
    <article className="post" id="who-we-are">
      <header>
        <div className="title">
          <h2>Who We Are</h2>
        </div>
      </header>
      <section>
        <p>This is the Who We Are page.</p>
      </section>
    </article>
  </Main>
);

export default WhoWeAre;
