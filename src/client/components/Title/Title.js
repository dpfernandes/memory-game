import React from 'react';
import PropTypes from 'prop-types';
import './Title.styles.css';

export default function HeaderTitle({ title, subtitle }) {
  const content = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </span>
    </div>
  );
  return <div className="header-heading">{content}</div>;
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
