import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Cell from '../components/Code/Cell';
import data from '../data/code';

const Software = () => (
  <Main title="Software" description="Explore MagellanTech’s matching libraries and tools.">
    <article className="post" id="software">
      <header>
        <div className="title">
          <h2>Software</h2>
        </div>
      </header>
      <section>
        <p>
          PyMatcher is an open-source EM software, which uses Python packages on a single machine.
          It was mainly developed from 2015 to 2020, with minimal addition since then.
        </p>
        <p>
          SparkMatcher is our latest open-source EM software, which scales to hundreds of millions
          of tuples, using Spark and AI. It has been developed since 2023.
        </p>
      </section>
      <section>
        <h3>Other Software</h3>
        <p>
          CloudMatcher, developed from 2017 to 2019, is a cloud-based EM software. It was acquired
          by Informatica in 2020.
        </p>
        <p>
          DeepMatcher, developed in 2018, is an EM software that uses deep learning. It is designed
          primarily for researchers to run EM experiments, and has not been maintained since.
        </p>
      </section>
    </article>
  </Main>
);

export default Software;
