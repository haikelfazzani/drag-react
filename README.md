# React Draggable Component
A simple and lightweight component for making elements draggable.

### [Demo](https://haikelfazzani.github.io/drag-react)
### [stackblitz](https://stackblitz.com/edit/react-ts-qvltmc?file=index.tsx)

# Installation
```shell
$ npm install drag-react
# yarn add drag-react
```

# Example
```jsx
import { Draggable } from 'drag-react';

<Draggable>
  <div>My element is draggable now</div>
</Draggable>
```

### Props
| name | type | default | description |
| --- | --- | --- | --- |
| children | `any` | `-` | `Some element` |
| className? | `string` | `'drag-react'` | `Class name for drag wrapper` |
| style? | `Object` | `{ position: 'fixed', left: '10px', top: '10px', zIndex: 99999 , cursor: 'move' }` | `css style for drag wrapper` |
| onDragStart? | `(_: DOMRect) => void` | `-` | `Called whenever the user mouses down` |
| onDragEnd? | `(_: DOMRect) => void` | `-` | `Called when dragging stops` |


# License
MIT
