import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Drag } from '../components/Drag';

export default {
  title: 'Drag',
  component: Drag,
} as ComponentMeta<typeof Drag>;

export const Primary: ComponentStory<typeof Drag> = () => (
  <Drag>Child</Drag>
);
