import React, { useState } from 'react';
import styles from './UseCases.module.css';

const CaseStudies = () => {
  const [activeSection, setActiveSection] = useState('datasets');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="use-cases-header">
        <div className="container">
          <div className="text-center">
            <h1>Use Cases</h1>
            <p className="section-intro">
              Performance comparisons of MadMatcher against leading entity matching systems.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <div className="container">
        <nav className="use-cases-nav">
          <button
            className={`btn-nav ${activeSection === 'datasets' ? 'active' : ''}`}
            onClick={() => scrollToSection('datasets')}
          >
            Datasets
          </button>
          <button
            className={`btn-nav ${activeSection === 'performance' ? 'active' : ''}`}
            onClick={() => scrollToSection('performance')}
          >
            Performance Results
          </button>
          <button
            className={`btn-nav ${activeSection === 'systemA' ? 'active' : ''}`}
            onClick={() => scrollToSection('systemA')}
          >
            System A
          </button>
          <button
            className={`btn-nav ${activeSection === 'systemB' ? 'active' : ''}`}
            onClick={() => scrollToSection('systemB')}
          >
            System B
          </button>
        </nav>
      </div>

      {/* Datasets Section */}
      <section id="datasets" className="section" style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div className="content-section">
            <h2 className="section-title">Datasets</h2>
            <p className="section-intro">
              The two datasets used for comparison are the Abt-Buy dataset and the Million Song
              dataset.
            </p>

            {/* Abt-Buy Dataset */}
            <div className="dataset-card">
              <h3 className="card-title">Abt-Buy Dataset</h3>
              <div className="card-content">
                <p>
                  The Abt-Buy dataset contains product listings from abt.com and buy.com. There are
                  1,081 entities in the Abt dataset, 1,092 entities in the Buy dataset, and a total
                  of 1,097 matching entities. The attributes in the data are: name, description, and
                  price.
                </p>

                <div className="example-section">
                  <h4 className="example-title">Matching Example</h4>
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Field</th>
                          <th>Record 1</th>
                          <th>Record 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field-name">name</td>
                          <td>canon silver 8.0 megapixel powershot digital camera sd1100is</td>
                          <td>
                            canon powershot sd1100 is digital elph camera swing silver 2508b001
                          </td>
                        </tr>
                        <tr>
                          <td className="field-name">description</td>
                          <td>
                            canon silver 8.0 megapixel powershot digital camera sd1100is 8.0
                            megapixel 3x optical zoom 2.5 ' color lcd 18 shooting modes red-eye
                            correction face detection technology isaps technology swing silver
                            finish
                          </td>
                          <td>
                            canon powershot sd1100 is 8 megapixels , iso 1600 , 3x optical zoom
                            digital camera swing silver
                          </td>
                        </tr>
                        <tr>
                          <td className="field-name">price</td>
                          <td>NULL</td>
                          <td>NULL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="example-section">
                  <h4 className="example-title">Non-Matching Example</h4>
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Field</th>
                          <th>Record 1</th>
                          <th>Record 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field-name">name</td>
                          <td>canon silver 8.0 megapixel powershot digital camera sd1100is</td>
                          <td>
                            canon powershot sd1100 is digital elph camera rhythm & blue 2512b001
                          </td>
                        </tr>
                        <tr>
                          <td className="field-name">description</td>
                          <td>
                            canon silver 8.0 megapixel powershot digital camera sd1100is 8.0
                            megapixel 3x optical zoom 2.5 ' color lcd 18 shooting modes red-eye
                            correction face detection technology isaps technology swing silver
                            finish
                          </td>
                          <td>
                            canon powershot sd1100 is 8 megapixels , iso 1600 , 3x optical zoom
                            digital camera rhythm & blue
                          </td>
                        </tr>
                        <tr>
                          <td className="field-name">price</td>
                          <td>NULL</td>
                          <td>NULL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="challenges-section">
                  <h4 className="example-title">Dataset Challenges</h4>
                  <p>
                    This example demonstrates some of the challenges in the Abt-Buy dataset. First,
                    in the name field, the name format for one dataset does not directly match the
                    name format in the second dataset (for example where the model number is). Even
                    if they contain some of the same text, the text can be in different orders.
                    Additionally, in the description field, the descriptions may contain more or
                    less information in one dataset than in the other. Further, there are very
                    subtle differences in some of the products. In the matching example, the color
                    in the second record is "swing silver", but in the non-matching example, the
                    color in the second record is "rhythm & blue". Aside from the color difference
                    and the product number in the second records, they refer to the same model of
                    camera, but only the second record in the matching example one is a true match
                    for the first record.
                  </p>
                </div>
              </div>
            </div>

            {/* Million Songs Dataset */}
            <div className="dataset-card">
              <h3 className="card-title">Million Song Dataset (MSD)</h3>
              <div className="card-content">
                <p>
                  The Million Song Dataset contains music data with 1,000,000 entries and serves as
                  a deduplication task, where the entity matching software attempts to find records
                  which refer to the same entity within a single dataset. There are 146,011 matches
                  in this dataset. The attributes in the data are: title, release, artist_name,
                  duration, artist_familiarity, artist_hotttnesss, and year.
                </p>

                <div className="example-section">
                  <h4 className="example-title">Matching Example</h4>
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Field</th>
                          <th>Record 1</th>
                          <th>Record 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field-name">title</td>
                          <td>Cachita</td>
                          <td>Cachita</td>
                        </tr>
                        <tr>
                          <td className="field-name">release</td>
                          <td>Rumba Blanca</td>
                          <td>The Originals - The Authentic Cuban Flavor</td>
                        </tr>
                        <tr>
                          <td className="field-name">artist_name</td>
                          <td>Orquesta Casino De La Playa</td>
                          <td>Orquesta Casino De La Playa</td>
                        </tr>
                        <tr>
                          <td className="field-name">duration</td>
                          <td>161.01832</td>
                          <td>157.88363</td>
                        </tr>
                        <tr>
                          <td className="field-name">artist_familiarity</td>
                          <td>0.426132999505</td>
                          <td>0.426132999505</td>
                        </tr>
                        <tr>
                          <td className="field-name">artist_hotttnesss</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td className="field-name">year</td>
                          <td>1991</td>
                          <td>1991</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="example-section">
                  <h4 className="example-title">Non-Matching Example</h4>
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Field</th>
                          <th>Record 1</th>
                          <th>Record 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field-name">title</td>
                          <td>Cada Beijo</td>
                          <td>Cada Beijo (Thievery Corporation mix)</td>
                        </tr>
                        <tr>
                          <td className="field-name">release</td>
                          <td>Bebel Gilberto</td>
                          <td>Bebel Gilberto Remixed</td>
                        </tr>
                        <tr>
                          <td className="field-name">artist_name</td>
                          <td>Bebel Gilberto</td>
                          <td>Bebel Gilberto</td>
                        </tr>
                        <tr>
                          <td className="field-name">duration</td>
                          <td>266.16118</td>
                          <td>260.49261</td>
                        </tr>
                        <tr>
                          <td className="field-name">artist_familiarity</td>
                          <td>0.717538629239</td>
                          <td>0.717538629239</td>
                        </tr>
                        <tr>
                          <td className="field-name">artist_hotttnesss</td>
                          <td>0.528668584084</td>
                          <td>0.528668584084</td>
                        </tr>
                        <tr>
                          <td className="field-name">year</td>
                          <td>2004</td>
                          <td>2005</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="challenges-section">
                  <h4 className="example-title">Dataset Challenges</h4>
                  <p>
                    Here, the title and release of the first record are contained in the second
                    record, while the duration and year differ as well. The MSD dataset contains
                    structured data without too much noise, but it requires the entity matching
                    systems to understand which fields matter for selecting a match or non-match.
                    For example, an exact match on the title might be more important than an exact
                    match on the year. Additionally, the MSD dataset has non-independent columns,
                    such as artist_name, artist_familiarity, and artist_hotttness, which can pose a
                    problem for some matching models. Non-independent columns are columns where
                    knowing information from one can change the odds of a certain value appearing in
                    another column. For example, the artist_name and artist_familiarity are not
                    independent, since knowing the artist name can give information about their
                    familiarity. Additionally, the MSD dataset is a challenging dataset due to its
                    size. Without blocking, the number of possible pairs that a matcher would need
                    to compare is 499,999,500,000 (all 1,000,000 records compared to each other,
                    resulting in n(n-1)/2 unique pairs). Thus, if the blocking phase does not reduce
                    the search space, the matching phase can use significant computational
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Results */}
      <section id="performance" className="section section-light">
        <div className="container">
          <div className="content-section">
            <h2 className="section-title">Performance Results</h2>

            {/* Abt-Buy Results */}
            <div className="results-section">
              <h3 className="subsection-title">Abt-Buy Dataset</h3>
              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>MadMatcher</th>
                      <th>System A</th>
                      <th>System B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Max Number of Candidate Pairs</td>
                      <td>10,920</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>Labeled Examples</td>
                      <td>500</td>
                      <td>2,194</td>
                      <td>0</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>Precision</td>
                      <td className="best-score">96.45%</td>
                      <td>5.70%</td>
                      <td>14.59%</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>Recall</td>
                      <td className="best-score">86.70%</td>
                      <td>54.15%</td>
                      <td>13.22%</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>F1 Score</td>
                      <td className="best-score">0.91</td>
                      <td>0.10</td>
                      <td>0.14</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Million Songs Results */}
            <div className="results-section">
              <h3 className="subsection-title">Million Songs Dataset</h3>
              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>MadMatcher</th>
                      <th>System A</th>
                      <th>System B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Max Number of Candidate Pairs</td>
                      <td>20,000,000</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>Labeled Examples</td>
                      <td>500</td>
                      <td>505</td>
                      <td>0</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>Precision</td>
                      <td className="best-score">99.13%</td>
                      <td>91.64%</td>
                      <td>100%</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>Recall</td>
                      <td>93.21%</td>
                      <td className="best-score">96.87%</td>
                      <td>79.53%</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>F1 Score</td>
                      <td className="best-score">0.96</td>
                      <td>0.94</td>
                      <td>0.89</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Comparisons */}
      <section className="section">
        <div className="container">
          <div className="content-section">
            <h2 className="section-title">System Comparisons</h2>
            <p className="section-intro">
              Entity matching (EM) refers to the problem of finding matching entities either across
              datasets (Abt-Buy) or within a single dataset (MSD). The EM problem typically consists
              of two phases, blocking and matching. The blocking phase aims to reduce the number of
              pairs that need to be evaluated in the matching phase, while retaining as many true
              pairs as possible. The matching phase is used to make predictions about whether or not
              two entities match each other, and this can be done with either Supervised Machine
              Learning methods or Unsupervised Machine Learning methods. If it is done with
              Supervised Machine Learning, the matching system will need labeled data. Labeled data,
              in the context of entity matching, is usually pairs of records or groups of records
              that are marked with a '1' if the pair or group of records match, or '0' if the pair
              or group of records do not match. Labeled data may also be referred to as training
              data.
            </p>

            {/* System A Comparison */}
            <div id="systemA" className="system-comparison">
              <h3 className="system-title">System A</h3>

              <div className="comparison-section">
                <h4 className="comparison-title">Blocking Overview</h4>
                <p>
                  System A does blocking by using a group of hash functions to group similar records
                  into buckets. Here, similar means records which share characters or
                  characteristics defined by the hash functions. A hash function takes data and puts
                  equal values into the same bucket, and distinct values into distinct buckets. For
                  example, a hash function could group data by their first two letters. If our data
                  values are "foobar" and "foo", then our hash function would group "foobar" and
                  "foo" into the same bucket. However, if our data values were "foobar" and "bar",
                  our hash function would put "foobar" and "bar" into two separate buckets.
                </p>
                <p>
                  By applying these hash functions to the records, System A gets buckets with
                  records that have the same value for every hash function that was applied to them.
                  These buckets are the blocked output. Using the bucket approach reduces the number
                  of comparisons needed in the matching phase because the records in each bucket
                  will only be compared to other records in the same bucket.
                </p>
                <p>
                  Remember that the goal of blocking is to reduce the number of comparisons needed
                  in the matching phase while also keeping as many actual matching pairs as
                  possible. If System A used a random set of hash functions, then the recall could
                  be very low. For this reason, System A uses labeled data to help the system
                  understand how different groups of hash functions will impact the blocking output
                  size and recall in order to create an effective group of hash functions.
                </p>

                <div className="madmatcher-comparison">
                  <h5 className="comparison-subtitle">Comparison with MadMatcher</h5>
                  <p>
                    Although this blocking model can work for data that is likely to be structured
                    with the same formats and ordering of text, it is insufficient for many
                    datasets, like Abt-Buy. By relying on words or characters in certain orders
                    matching, it restricts the ability to find matches when orders are in different
                    orders. As a simple example, let's say we had data with the name “John Smith” in
                    one table and data with the name “Smith, John” in the second table. It would be
                    very difficult to use the hash based blocker to determine that these two
                    entities are the same because the ordering of the first name and last name are
                    different. In Sparkly, this problem is avoided by using tokenizers. A tokenizer
                    breaks the string into smaller chunks, so “John Smith” may be converted into the
                    tokens “John” and “Smith”. Additionally, in a hash based system, if the last
                    name “Smith” was to occur often, many records would be associated in the same
                    bucket. In Sparkly, however, tokens which occur in many records have discounted
                    value. This means that Sparkly will recognize that even though “Smith” may be a
                    shared token among multiple records, it should not be considered as important as
                    two records sharing a token that is more unique, say a first name. To learn more
                    about the specifics of Sparkly’s implementation and blocking strategy, check out
                    this section (link to where we describe Sparkly in the website).
                  </p>
                  <p>
                    In addition to the potential downsides regarding missing matches, hash-based
                    blockers can also lead to variations in the candidate output size. In an extreme
                    example, a set of hash functions could group every single record into the same
                    bucket. In this unlikely scenario, blocking would have left you with the same
                    search space size as before blocking occurred. Although it is unlikely that
                    every record will end up in the same bucket, it is likely that you will end up
                    with a skew in the size of your buckets, where some buckets are much larger than
                    others. In Sparkly, this issue does not occur because the user can set a limit
                    on the maximum number of candidates each record should have, so the blocking
                    output is a predetermined size.
                  </p>
                  <p>
                    Despite the disadvantages hash-based blockers can face, they can be a good
                    choice if you know your data follows a strict format and has very few typos.
                    Additionally, using hash-functions can speed up the blocking process
                    significantly since the functions can be applied without needing to tokenize
                    each record, and hash-functions themselves execute fast.
                  </p>
                </div>
              </div>

              <div className="comparison-section">
                <h4 className="comparison-title">Matching Overview</h4>
                <p>
                  Recall that the output of System A’s blocking output is buckets of records which
                  had the same values across the group of hash functions chosen by System A. In the
                  matching phase, every record will be compared to all other records in its bucket.
                </p>

                <p>
                  System A uses a Supervised Machine Learning method called Logistic Regression to
                  assess whether two candidate entities are a match. First, the candidate entities
                  are created by taking all pairs of records within a bucket. Then, for each
                  candidate (a pair of records), similarity functions are applied to each field in
                  the two records of the candidate. A similarity function takes two pieces of data
                  and computes a score that represents how similar the two pieces of data are. Some
                  similarity functions have a positive correlation between score and similarity,
                  while others have a negative correlation between score and similarity. For
                  example, if our similarity function compared how many characters matched between
                  two records, and we had the data “test” and “text”, our similarity score would be
                  3. When more characters match, the score is higher. However, if our similarity
                  score compared how many characters differed, and we had the data “test” and
                  “text”, our similarity score would be 1. When more characters match, the score
                  would be lower. Whether a similarity function produces scores with a negative
                  correlation or a positive correlation will not impact our results, though, and it
                  will be explained why in the next paragraph. A vector is created containing the
                  similarity scores for each similarity function that was applied to the fields. So,
                  if you have 4 fields, and each has 1 similarity function, the vector would have 4
                  scores.
                </p>
                <p>
                  Once these vectors are computed, System A passes them in as the input to a
                  Logistic Regression model. As a reminder, in the blocking step, the system needed
                  labeled data to decide which group of hash functions to use. In the matching step,
                  the same labeled data will be used to train the Logistic Regression model.
                  However, before being passed into the Logistic Regression model, the pairs of
                  records from the training data will also be converted into vectors using the same
                  similarity functions that the rest of the data used. This step will allow the
                  Logistic Regression model to “understand” how different values in the vector
                  impact the probability that two records are a match. As mentioned in the previous
                  paragraph, whether a similarity score has a positive or negative correlation with
                  how similar two entities are is not relevant. This is the case because the
                  Logistic Regression model uses the labeled data to understand how different values
                  impact the final result, and it can determine, for example, that seeing a high
                  value at index 0 in the vector could increase the probability the entities are a
                  match, while seeing a high value at index 1 in the vector could decrease the
                  probability that the entities are a match. After passing in the vectors into the
                  model, the Logistic Regression model will output its prediction (a number in the
                  range of 0-1) of how likely it is that the two records match.
                </p>
                <p>
                  All pairs of data from the buckets are passed through the model, so each pair will
                  receive a score on how likely it is to be a match. The system defines a threshold
                  value, and if the probability from the model on a pair of records is at or above
                  that threshold, System A will classify them as a match. This threshold value is
                  decided on by using the labeled data, and it is meant to increase the number of
                  actual matches classified as match and the number of actual non-matches to be
                  classified as non-match. If the probability from the model on a pair of records is
                  below that threshold, System A will classify them as a non-match. After each pair
                  receives a classification (match or non-match), System A adds a post-processing
                  step to group matching records together. The post-processing step uses transitive
                  closure which works like this:{' '}
                  <ol>
                    <li>A, B, C, D, and E are all records</li>
                    <li>A matches B, B matches C, and D matches E</li>
                    <li>
                      Since A matches B, and B matches C, A, B, and C will all end up in the same
                      cluster, even if A and C were not directly compared or their result was deemed
                      a non-match
                    </li>
                    <li>
                      D and E will end up in their own cluster since neither D or E matched with A,
                      B, or C
                    </li>
                  </ol>
                  The output of the matching step is groups of clusters, where each cluster contains
                  records the system considers matches.
                </p>
                <div className="madmatcher-comparison">
                  <h5 className="comparison-subtitle">Comparison with MadMatcher</h5>
                  <p>
                    Both System A and MadMatcher approach the matching step using Supervised Machine
                    Learning. However, there are a few differences in the implementations. First, in
                    MadMatcher, the system uses a set of similarity functions and tokenizers to
                    create the features which are used to compute the feature vectors, and it
                    modifies the similarity functions and tokenizers used based on the type and
                    length of the records in the fields it is comparing. System A, on the other
                    hand, allows users to choose a type of field (string, integer, text, etc.) and
                    each field has similarity functions that the user can choose what to use. This
                    restricts the available similarity functions the user has to choose from.
                    Notably, in System A, there is no tokenization when computing the similarity
                    scores. By not tokenizing strings, not dynamically choosing similarity
                    functions, and limiting the users choice of similarity functions, System A can
                    miss features that can be useful to the model for deciding whether two records
                    match. When datasets contain different formatting or subtle differences between
                    the matches and non-matches, it can be important to have more features to
                    capture these nuances.
                  </p>
                  <p>
                    Additionally, System A uses transitive closure for matching, where producing one
                    wrong match can be harmful to the integrity of the whole cluster. For example,
                    as stated earlier, if we had the records A, B, and C, with System A predicting A
                    matches B, B matches C, but A does not match C, A, B, and C would end up in the
                    same cluster. Now, let’s add onto this example and say that C matched 5 other
                    records that were not A or B. These 5 other records would be included in the
                    cluster, implying that A and B also matched these 5 other records. If B and C
                    were not truly matches, then this one mismatch would cause several other
                    mismatches within the cluster. MadMatcher avoids this by outputting the record
                    pairs it believes are matches without clustering them.
                  </p>
                </div>
              </div>
            </div>

            {/* System B Comparison */}
            <div id="systemB" className="system-comparison">
              <h3 className="system-title">System B</h3>

              <div className="comparison-section">
                <h4 className="comparison-title">Blocking Overview</h4>
                <p>
                  System B does blocking by using SQL expressions defined by the user. A SQL
                  expression compares the values of records in a field from A and in the same field
                  from B. The user-defined SQL expression could check for exact matches, like
                  whether two first names are the same, or it can use filtering, like whether the
                  difference between two years is less than 2. A user can define as many of these
                  SQL expressions as they see fit. Each SQL expression is executed between every
                  record in field F from table A and every record in field F from table B. Notably,
                  the SQL equality and filtering checks have a fast runtime, so the blocking system
                  as a whole is fast.
                </p>
                <p>
                  Additionally, System B provides a set of visualization tools which help users see
                  how their SQL expressions change the blocking output size (how many comparisons
                  will need to be made in the matching step), and how the SQL expression could
                  impact recall (what records are filtered out based on a certain expression).
                </p>
                <p>
                  The output of the blocking step is all pairs of records where at least one SQL
                  expression returned True. For example, if you had 3 SQL expressions, say checking
                  for an exact match on first name, exact match on last name, and an age within one
                  year, pairs which pass any of those checks would be candidates in the matching
                  step.
                </p>

                <div className="madmatcher-comparison">
                  <h5 className="comparison-subtitle">Comparison with MadMatcher</h5>
                  <p>
                    Although SQL queries execute quickly, they face similar issues as hash-based
                    functions in System A. They don't account for formatting differences or typos.
                    Sparkly alleviates this by providing tokenizers, which group strings into chunks
                    of data. For example, if you had the text "foobar" and "foobag", a SQL
                    expression for exact match would filter this out, but a tokenizer might create
                    tokens like:
                  </p>
                  <div className="code-example">
                    <p>"foobar": ["foo", "oob", "oba", "bar"]</p>
                    <p>"foobag": ["foo", "oob", "oba", "bag"]</p>
                  </div>
                  <p>
                    Sparkly will see that there are 3 matching sets of tokens, which will be
                    positively factored into the score, even though it is not an exact match.
                  </p>
                  <p>
                    Additionally, in System B the blocking output size could vary drastically based
                    on the rules defined. If we wrote a blocking rule for the Abt-Buy dataset, for
                    example, that compared the first words of two records, then any two records
                    which have the same brand would pass through the filter (brand names are
                    typically the first words in the Abt-Buy dataset) and our blocking output would
                    still be large. On the other hand, if your blocking rules are too strict, then
                    the recall could suffer. Sparkly will not face the same issue because the user
                    will set a limit for how many candidates each record should have after the
                    blocking phase. For example, if you had a dataset of size 1,000 and a limit of
                    20, then your output would have 20,000 pairs (20 candidates for each of the
                    1,000 records).
                  </p>
                  <p>
                    Further, for System B, hand-crafting rules can be very difficult because there
                    could be many discrepancies in the formatting, and a new rule would need to be
                    created for each potential discrepancy. Sparkly Auto addresses this issue by
                    automatically choosing the fields and tokenizers which will be applied to the
                    dataset for blocking. With that being said, we recognize that some users will
                    have a great understanding of how their data is structured as well, so a user is
                    able to manually select their own fields and tokenizers to block on if they
                    choose.
                  </p>
                  <p>
                    Overall, using SQL expressions allows the blocking phase to complete quickly,
                    but it is difficult to find the balance of time spent handcrafting rules,
                    improving recall, and reducing the blocking output size.
                  </p>
                </div>
              </div>

              <div className="comparison-section">
                <h4 className="comparison-title">Matching Overview</h4>
                <p>
                  After blocking, every candidate pair that passed at least one of the user-defined
                  SQL expressions advances to the matching phase. The matching phase in System B
                  consists of three steps:
                </p>
                <ol>
                  <li>Creating a comparison vector between two records</li>
                  <li>Fitting a probabilistic model to the comparison vectors</li>
                  <li>Clustering the results using transitive closure</li>
                </ol>
                <p>
                  For step one, users can create comparisons. In System B, a comparison consists of
                  a similarity function and thresholds. The thresholds define different levels of
                  similarity. For example, in System A we used the example of a similarity function
                  which counts how many characters are the same between two strings. If you have the
                  values “test” and “text”, there are 3 matching characters, but if you have the
                  values “test” and “teal”, there are 2 matching characters. The thresholds for the
                  comparison could be the following: 0, 3, 5, all others. If these were the
                  thresholds, even though “test” and “text” had 3 matching characters and “test” and
                  “teal” had 2 matching characters, they would be in the same level, since they fall
                  in the bucket of 1-3 characters (defined in the threshold). For
                </p>{' '}
                <p>
                  Step two of this process is fitting a probabilistic model to the comparison
                  vectors. System B uses the Felligi-Sunter probabilistic model, which is an
                  unsupervised model for Entity Matching. The Felligi-Sunter model requires three
                  parameters: 𝝺, the probability that any two random records match, u, the
                  probability that two records have a certain level given that they are a match, and
                  m, the probability that two records have a certain level given that they are a
                  non-match. This model is an unsupervised learning model though, which means that
                  it does not use labeled data like System A or MadMatcher. So, the user needs to
                  provide estimates for each of the parameters. Then, System B runs
                  expectation-maximization (if you are interested in the mathematics behind this
                  algorithm, check out this Wikipedia article), which helps the system compute more
                  accurate estimates of what the actual values of each parameter should be. Finally,
                  System B has a probabilistic equation with the three parameters which can be used
                  to compute the likelihood that two records are a match given the levels in the
                  comparison vector, and the equation results in a value between 0 and 1. The user
                  can define a threshold (between 0 and 1) where probabilities greater than or equal
                  to the threshold will be classified as matches, and probabilities less than the
                  threshold will be classified as non-matches.
                </p>
                <p>
                  Like System A, the third step of the matching process is that System B adds a
                  post-processing step to group matching records together. The post-processing step
                  uses transitive closure which works like this:
                  <ol>
                    <li>A, B, C, D, and E are all records</li>
                    <li>A matches B, B matches C, and D matches E</li>
                    <li>
                      Since A matches B, and B matches C, A, B, and C will all end up in the same
                      cluster, even if A and C were not directly compared or their result was deemed
                      a non-match
                    </li>
                    <li>
                      D and E will end up in their own cluster since neither D or E matched with A,
                      B, or C
                    </li>
                  </ol>
                  The output of the matching step is groups of clusters, where each cluster contains
                  records the system considers matches.
                </p>
              </div>

              <div className="madmatcher-comparison">
                <h5 className="comparison-subtitle">Comparison with MadMatcher</h5>
                <p>
                  The probabilistic model used by System B enables pairs to be compared very fast
                  relative to MadMatcher. Additionally, System B is an unsupervised model, meaning
                  that a user does not need to have any labeled data to use the system. Both of
                  these are positives, but they can cause the accuracy to suffer, and we will
                  discuss why.
                </p>
                <p>
                  First, the probabilistic model assumes that each field is independent of all other
                  fields. Fields are independent if the value in one field does not provide
                  information that could change the odds of a particular value occurring in the
                  second field. For example, non-independent fields could be a city and state. If
                  you observe the value ‘Madison’ as a city, then the odds the state column has the
                  value ‘Wisconsin’ is increased. Independent fields, however, could be the color
                  shirt you are wearing and the temperature in Antarctica; knowing one of these does
                  not change the probability of a value in the other. In many domains, it is not the
                  case that there will be independent fields. In Abt-Buy, the name and the
                  description are not independent fields. In fact, the values in descriptions
                  usually have the same brand name that appears in the “name” field. On the other
                  hand, the model that MadMatcher recommends (XGBoost) is a model that does not
                  require independent fields.
                </p>
                <p>
                  Next, the probabilistic model requires the user to have reasonable estimations for
                  the u and m parameters. Although the expectation-maximization algorithm is meant
                  to improve the initial estimations for these parameters, it could converge to
                  incorrect values if the initial estimations are too far off. Additionally, by not
                  requiring labeled data, the system never “sees” what matches or non-matches look
                  like, so it is much harder to find non-linear patterns within the data.
                </p>
                <p>
                  Further, System B faces a similar issue as System A when choosing similarity
                  functions and tokenizers. System B requires that users choose their set of
                  comparison objects and thresholds. Again, this will require tedious work from the
                  user, and the work can still yield suboptimal results. MadMatcher avoids this by
                  using a set of similarity functions and tokenizers to create the features which
                  are used to compute the feature vectors, and it modifies the similarity functions
                  and tokenizers based on the type and length of the records in the fields it is
                  comparing. When datasets contain different formatting or subtle differences
                  between the matches and non-matches, it can be important to have more features to
                  capture these nuances.
                </p>
                <p>
                  Lastly, System B, like System A, uses transitive closure for matching, where
                  producing one wrong match can be harmful to the cluster. For example, as stated
                  earlier, if we had the records A, B, and C, with System A predicting A matches B,
                  B matches C, but A does not match C, A, B, and C would end up in the same cluster.
                  Now, let’s add onto this example and say that C matched 5 other records that were
                  not A or B. These 5 other records would be included in the cluster, implying that
                  A and B also matched these 5 other records. If B and C were not truly matches,
                  then this one mismatch would cause several other mismatches within the cluster.
                  MadMatcher avoids this by outputting the record pairs it believes are matches
                  without clustering them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
