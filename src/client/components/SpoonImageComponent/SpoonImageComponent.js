import React from 'react';
import './SpoonImageComponent.styles.css';

import SpoonImage from '../../assets/images/icons/spoon_3x.png';

export default function SpoonImageComponent() {
  return (
    <div className="spoon-image">
      <img src={SpoonImage} alt="Spoon" />
    </div>
  );
}
