import React from 'react';
import PropTypes from 'prop-types';

const EmailLink = ({ email }) => {
  const validateText = (text) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text);
  };

  const localPart = email.split('@')[0];
  const domain = email.split('@')[1];

  return (
    <div className="inline-container" style={validateText(localPart) ? {} : { color: 'red' }}>
      <a href={`mailto:${email}`}>
        <span>{localPart}</span>
        <span>@{domain}</span>
      </a>
    </div>
  );
};

EmailLink.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailLink;
