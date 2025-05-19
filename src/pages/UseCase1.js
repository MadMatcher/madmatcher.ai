import React from 'react';
import Main from '../layouts/Main';

const UseCase1 = () => (
  <Main title="Use Case 1" description="Use case 1.">
    <article className="post" id="use-case-1">
      <header>
        <div className="title">
          <h2>Use Case 1</h2>
        </div>
      </header>
      <section>
        <p>This is Use Case 1.</p>
      </section>
    </article>
  </Main>
);

export default UseCase1;
