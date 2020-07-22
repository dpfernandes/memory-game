import React from 'react';
import './GameLogoComponent.styles.css';

import GameLogoImage from '../../assets/images/logo/logo_3x.png';

export default function GameLogoComponent() {
  return (
    <div className="game-logo-image">
      <img className="game-logo-image" src={GameLogoImage} alt="Game Logo" />
    </div>
  );
}
