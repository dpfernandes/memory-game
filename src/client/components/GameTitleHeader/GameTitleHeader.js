import React from 'react';
import PropTypes from 'prop-types';
import './GameTitleHeader.css';
import SmallGameLogoImage from '../../assets/images/logo/logo_2x.png';

const Title = ({ title }) => {
  return (
    <div className="title">
      {title} <img src={SmallGameLogoImage} alt="Game Logo" />
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
