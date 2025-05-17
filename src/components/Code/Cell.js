import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

const Cell = ({ data }) => (
  <div className="project-cell">
    <h3>{data.title}</h3>
    <p>{data.subtitle}</p>
    {data.links.length > 0 && (
      <ul className="subitem-list">
        {data.links.map((link) => (
          <li key={link.label}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label} <FaGithub />
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Cell;
