import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="dataset-cell">
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    <a href={data.linkUrl} target="_blank" rel="noopener noreferrer" className="dataset-link">
      {data.linkText}
    </a>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    linkUrl: PropTypes.string,
  }).isRequired,
};

export default Cell;
