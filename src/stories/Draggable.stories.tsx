import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Draggable } from '../components/Draggable';
import './Draggable.css';

export default { title: 'Draggable', component: Draggable } as ComponentMeta<typeof Draggable>;

export const Drag: ComponentStory<typeof Draggable> = () => (
  <Draggable><div>Draggable</div></Draggable>
);
