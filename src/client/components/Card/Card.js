import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ text, image, disabled }) {
  const content = (
    <button
      className="card-component"
      type="submit"
      image={image}
      disabled={disabled}
    >
      {text}
    </button>
  );
  return <div className="header-heading">{content}</div>;
}
Card.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
Card.defaultProps = { disabled: false };
