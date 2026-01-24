import React from 'react';
import styles from './AboutMadMatcher.module.css';
import devHeadshot from '../../assets/dev-ahluwalia-headshot.jpg';
import anhaiHeadshot from '../../assets/anhai-headshot.png';
import derekHeadshot from '../../assets/derek-headshot.jpg';

const AboutMadMatcher = () => {
  return (
    <div className={styles.aboutMadMatcher}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>About MadMatcher</h1>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h2>Our Story</h2>
            <div className={styles.story}>
              <p>
                MadMatcher was founded in July 2025 by Dev Ahluwalia, a student researcher at the
                University of Wisconsin–Madison. While MadMatcher operates independently of the
                university, its core open-source technology builds on more than a decade of research
                and development from Professor AnHai Doan’s group and leverages foundational work
                from the Magellan project, a long-running UW–Madison research initiative that has
                developed practical, scalable entity matching solutions used in real-world
                applications.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Our Goals</h2>
            <div className={styles.mission}>
              <div className={styles.missionCard}>
                <h3>Advance Entity Matching Technology</h3>
                <p>
                  Push the boundaries of EM through modern technologies and machine learning
                  breakthroughs.
                </p>
              </div>
              <div className={styles.missionCard}>
                <h3>Streamline Integration</h3>
                <p>
                  Create intuitive solutions that seamlessly fit into existing enterprise workflows
                  and systems.
                </p>
              </div>
              <div className={styles.missionCard}>
                <h3>Support Open Source</h3>
                <p>
                  Contribute back to the community through open-source tools and resources for
                  entity matching.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Our Team</h2>
            <div className={styles.leadership}>
              <div className={styles.leader}>
                <div className={styles.leaderImage}>
                  <img src={devHeadshot} alt="Dev Ahluwalia" />
                </div>
                <h3>Dev Ahluwalia</h3>
                <p className={styles.title}>Founder, CEO</p>
              </div>
              <div className={styles.leader}>
                <div className={styles.leaderImage}>
                  <img src={anhaiHeadshot} alt="Dr. AnHai Doan" />
                </div>
                <h3>Dr. AnHai Doan</h3>
                <p className={styles.title}>Advisor</p>
              </div>
              <div className={styles.leader}>
                <div className={styles.leaderImage}>
                  <img src={derekHeadshot} alt="Derek Paulsen" />
                </div>
                <h3>Derek Paulsen</h3>
                <p className={styles.title}>Advisor</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMadMatcher;
