import React from 'react';
import HeaderTitle from './Title';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Header Title',
  subtitle: 'Sub Title',
  decorators: [withKnobs],
};

export const MemoryTitle = () => {
  const title = text('title', 'Title');
  const subtitle = text('subtitle', 'Subtitle');

  return <HeaderTitle title={title} subtitle={subtitle} />;
};
