import React from 'react';
import './ForkImageComponent.styles.css';

import ForkImage from '../../assets/images/icons/fork_3x.png';

export default function ForkImageComponent() {
  return (
    <div className="fork-image">
      <img src={ForkImage} alt="Fork" />
    </div>
  );
}
