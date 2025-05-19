import React from 'react';
import Main from '../layouts/Main';

const Consulting = () => (
  <Main title="Consulting" description="Consulting services.">
    <article className="post" id="consulting">
      <header>
        <div className="title">
          <h2>Consulting</h2>
        </div>
      </header>
      <section>
        <p>This is the Consulting page.</p>
      </section>
    </article>
  </Main>
);

export default Consulting;
