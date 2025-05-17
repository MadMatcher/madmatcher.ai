import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import examplepic from '../images/magellan_tech_about_image.png';

const About = () => (
  <Main title="About" description="About MagellanTech.">
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>About</h2>
        </div>
      </header>

      <section>
        <h3>Entity Matching</h3>
        <span className="image right">
          <img
            src={examplepic}
            alt="Diagram illustrating blocking and matching in entity matching"
          />
        </span>
        <p>
          Entity Matching (EM) is the problem of finding data instances that refer to the same
          real‑world entity. For example, given the two tables A and B shown here, find all tuple
          pairs (a in A, b in B) that match, such as (Dave Smith, Madison, WI) and (David D. Smith,
          Madison, WI). We call these pairs “matches".
        </p>
        <p>
          This problem often arises in data science and AI. Many such projects must combine multiple
          datasets into a single clean unified dataset, then analyze it to extract insights or use
          it to train AI. To combine multiple datasets, we often must solve the EM problem.
        </p>
        <p>
          This problem is challenging for two reasons. First, data instances that match often appear
          in different forms, using different words, making it difficult to achieve high matching
          accuracy. Second, Tables A and B are often very large, having 100M to 500M tuples or more,
          making it difficult to achieve reasonable runtime.
        </p>
      </section>

      <section>
        <h3>Blocking and Matching</h3>
        <p>
          Considering all pairs between Tables A and B is practically infeasible for large tables.
          So EM is typically performed in two steps: blocking and matching (and the Magellan project
          develops software for both steps). The blocking step uses heuristics to quickly remove a
          large number of pairs judged unlikely to match. The matching step applies a rule‑ or
          ML‑based matcher to each remaining pair, to predict match or non‑match.
        </p>
        <p>
          For example, in the above figure, the blocking step keeps only those pairs that share the
          same state (this can be done quickly using an index on Column “State”). Then the matching
          step applies a matcher that predicts pairs (a1,b1) and (a3,b2) to be matches.
        </p>
      </section>

      <section>
        <h3>Variations of EM and Related Problems</h3>
        <p>
          Variations of EM are known as entity resolution, record linkage, deduplication, and more.
          We use the term “entity matching” because there are many other related problems, and their
          names all end with “matching.”
        </p>
        <p>
          Specifically, string matching finds strings that refer to the same real-world concept,
          such as "UW-Madison" and "Univ of Wisc Madison". Schema matching finds similar columns
          across tables, such as "address" and "location". Ontology matching finds similar concepts
          across ontologies, such as "car" and "automobile". Other related problems include matching
          between ontology concepts and table columns, matching tables, and more.{' '}
        </p>
        <p>
          While Magellan is designed primarily for EM, it can also be used for these related
          matching problems.
        </p>
      </section>

      <section>
        <h3>The Magellan Project</h3>
        <p>
          This project was started in 2015 at the University of Wisconsin‑Madison. By that time,
          even though numerous publications on EM existed, we had not found any industrial‑strength
          EM software. So our goal has been to develop industrial‑strength open‑source software for
          EM, work with customers to evaluate these products, use the evaluations to refine the
          products, and publish the findings.
        </p>
        <p>
          The goal is to release EM software that can find widespread use. Publishing findings is an
          important part of the project, but is viewed as a side effect of executing the
          software-customer cycle. We refer to this template as the "academic startup" template.
        </p>
      </section>

      <section>
        <h3>Team and Contact</h3>
        <p>
          Over the years many people have contributed to Magellan. Their names are listed in the
          "Research" section. The current team (as of April 2025) consists of Derek Paulsen, Dev
          Ahluwalia, Anson Doan, and AnHai Doan, who are working on the SparkMatcher software.
        </p>
        <p>To contact us with any requests, please email entitymatchinginfo@gmail.com.</p>
      </section>
    </article>
  </Main>
);

export default About;
