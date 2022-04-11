import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Draggable } from '../components/Draggable';
import './Draggable.css';

export default { title: 'Draggable', component: Draggable } as ComponentMeta<typeof Draggable>;

export const Single: ComponentStory<typeof Draggable> = () => (
  <Draggable
    onDragEnd={(rect: DOMRect) => { console.log(rect) }}
  >
    <div>Draggable</div>
  </Draggable>
);

export const Multiple: ComponentStory<typeof Draggable> = () => (
  <main>
    <Draggable onDragStart={(rect: DOMRect) => { console.log(rect) }}>
      <div>Draggable 1</div>
    </Draggable>

    <Draggable
      style={{ left: '200px', top: '200px' }}
    >
      <div style={{ backgroundColor: '#2196f3' }}>Draggable 2</div>
    </Draggable>
  </main>
);