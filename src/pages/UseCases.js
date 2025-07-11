import React from "react";
import siteStyles from "./SiteSections.module.css";

const UseCases = () => (
  <>
    <section className={siteStyles["section-bg-white"]}>
      <div className={siteStyles["section-container"]}>
        <div className={siteStyles["card-large"]}>
          <h1 className={siteStyles["card-title"]}>Use Cases</h1>
          <div className={siteStyles["card-content"]}>
            <p>
              MadMatcher is used by organizations to solve a wide range of data
              challenges, including:
            </p>
            <ul>
              <li>Customer and vendor deduplication</li>
              <li>Product catalog integration</li>
              <li>Healthcare record linkage</li>
              <li>Fraud detection and compliance</li>
              <li>Research and academic data cleaning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className={siteStyles["section-bg-gray"]}>
      <div className={siteStyles["section-container"]}>
        <div className={siteStyles["card"]}>
          <h2 className={siteStyles["card-title"]}>
            How can MadMatcher help you?
          </h2>
          <div className={siteStyles["card-content"]}>
            <p>
              Contact us to discuss your specific use case and see how
              MadMatcher can accelerate your data projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default UseCases;
