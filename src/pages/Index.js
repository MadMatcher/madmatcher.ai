import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';

const Index = () => (
  <Main description="Magellan's Research Website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Fast and Accurate Entity Matching with AI</h2>
        </div>
      </header>

      <section>
        <h3>Latest News</h3>
        <ul>
          <li>
            <i>4/12/2025: MadMatcher, our latest EM startup, is founded by Dev Ahluwalia.</i>
          </li>
          <li>
            <i>
              4/10/2025: Delex, our latest blocker, is released. Delex combines multiple blocking
              techniques and scales to hundreds of millions of tuples, using Spark.
            </i>
          </li>
          <li>
            <i>
              3/15/2025: This site (the new homepage of Magellan) is launched. Still under heavy
              construction.
            </i>
          </li>
        </ul>
      </section>

      <section>
        <p>
          Started in 2015, the Magellan project focuses on entity matching, a pervasive problem in
          data integration, which in turn is often required for data science and AI projects.
        </p>
      </section>

      <section>
        <p>
          Our goal is to develop software, work with customers, and publish our findings. Notable
          results since the project's inception:
        </p>
        <ul>
          <li>
            The PyMatcher software has been widely used by researchers, domain sciences, and
            companies, and parts of it have been incorporated into several popular open-source
            software.
          </li>
          <li>
            The CloudMatcher software led to the creation of GreenBay Tech and its acquisition by
            Informatica in 2020. CloudMatcher was incorporated into several products of Informatica,
            serving thousands of enterprise customers.
          </li>
          <li>
            Lessons from PyMatcher and CloudMatcher led to SparkMatcher, which can efficiently match
            hundreds of millions of data tuples, using Spark and AI.
          </li>
          <li>
            Publications from the project have been cited thousands of times, and have received both
            the SIGMOD and CACM Research Highlight Awards.
          </li>
        </ul>
      </section>

      <section>
        <p>
          In 2025 the project has inspired another startup, MadMatcher, founded by Dev Ahluwalia, a
          CS graduate student at UW-Madison. MadMatcher builds on and extends the Magellan software
          with Generative AI capabilities.
        </p>
      </section>

      <section>
        <p>
          If you need EM software, check out MadMatcher for the polished software offering, or check
          out Magellan (this site) for cutting-edge software still in alpha testing (and the latest
          research findings), or contact us at entitymatchinginfo@gmail.com.
        </p>
      </section>
    </article>
  </Main>
);

export default Index;
