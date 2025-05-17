import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Cell from '../components/Data/Cell';
import datasets from '../data/datasets';

const Data = () => (
  <Main title="Data" description="Explore datasets used for entity matching research.">
    <article className="post" id="data">
      <header>
        <div className="title">
          <h2>Data</h2>
        </div>
      </header>
      <section>
        <p>
          Since the project's inception we have acquired a large number of datasets that can be used
          to evaluate EM software. This includes BigGoat, our latest benchmark for scaling EM. We
          will list those datasets here in the near future.
        </p>
      </section>
    </article>
  </Main>
);

export default Data;
