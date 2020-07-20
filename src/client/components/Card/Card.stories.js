import React from 'react';
import Card from './Card';
import { withKnobs, text } from '@storybook/addon-knobs';
import image from '../../assets/images/smorrebrod/Aeg/Aeg.png';

export default { color: 'green', image: 'image', decorators: [withKnobs] };

export const GreenCard = () => {
  const color = text('title', '#4caf50');
  return <Card color={color} image={image} />;
};
