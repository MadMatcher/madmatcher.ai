import React from 'react';
import PropTypes from 'prop-types';

const Lesson = ({ data }) => (
  <section id={data.id} className="project">
    <h3 className="project-title">{data.title}</h3>
    <p>{data.content}</p>
  </section>
);

Lesson.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Lesson;
