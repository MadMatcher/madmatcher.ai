import React from 'react';
import PropTypes from 'prop-types';

const Case = ({ data }) => (
  <section id={data.id} className="project">
    <h3 className="project-title">{data.title}</h3>
    <h4 className="project-subtitle">{data.subtitle}</h4>
    <ul className="project-stats">
      {data.stats.map((stat) => (
        <li key={stat.label}>
          <strong>{stat.label}:</strong> {stat.value}
        </li>
      ))}
    </ul>
    {data.link && (
      <a href={data.link} className="project-link" target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    )}
  </section>
);

Case.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    link: PropTypes.string,
  }).isRequired,
};

export default Case;
