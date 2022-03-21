# React Draggable Component
A simple component for making elements draggable.

### [Demo](https://haikelfazzani.github.io/react-drag/)

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
| children | `any` | empty | `Component or HTMLElement` |
| className | `string` | `'drag-react'` | class name |
| style | `Object` | `{ position: 'fixed', left: '10px', top: '10px' }` | css style |

# License
MIT