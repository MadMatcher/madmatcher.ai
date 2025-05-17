import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Student = ({ data }) => (
  <div
    className="student-card"
    style={{
      width: '100%',
      maxWidth: '240px',
      textAlign: 'center',
      fontFamily: 'inherit',
    }}
  >
    <div className="image-wrapper" style={{ position: 'relative' }}>
      <img
        src={data.image}
        alt={data.name}
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'cover',
          borderRadius: '8px',
          display: 'block',
        }}
      />
      <div className="hover-overlay">
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={data.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={`mailto:${data.email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>

    <h3 style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#111827' }}>{data.name}</h3>
    <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: 0 }}>{data.bio}</p>

    {/* 💡 Injected style to make overlay and hover work */}
    <style>{`
      .image-wrapper {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
      }

      .hover-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.65);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 8px;
      }

      .image-wrapper:hover .hover-overlay {
        opacity: 1;
      }

      .hover-overlay a {
        color: white;
        font-size: 1.5rem;
      }
    `}</style>
  </div>
);

Student.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Student;
