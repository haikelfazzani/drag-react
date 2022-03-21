import React, { useEffect, useRef } from 'react';

interface IDraggable {
  style?: Object,
  className?: string,
  children: any
}

function Draggable({ children, style, className }: IDraggable) {
  const dragRef = useRef<any>();
  let isDown = false;
  let offset = [0, 0];

  const onMouseDown = (e: MouseEvent) => {
    isDown = true;
    offset = [
      dragRef.current.offsetLeft - e.clientX,
      dragRef.current.offsetTop - e.clientY
    ];
    document.addEventListener('mousemove', onMouseMove, true);
  }

  const onMouseUp = (e: MouseEvent) => {
    isDown = false;
    document.removeEventListener('mousemove', onMouseMove, true);
  }

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    //let rect = dragRef.current?.getBoundingClientRect();

    if (isDown && dragRef.current) {
      dragRef.current.style.left = (e.clientX + offset[0]) + 'px';
      dragRef.current.style.top = (e.clientY + offset[1]) + 'px';
    }
  }

  useEffect(() => {
    const dragDiv = dragRef.current;

    if (dragDiv) {
      dragDiv.addEventListener('mousedown', onMouseDown, true);
      document.addEventListener('mouseup', onMouseUp, true);
    }

    return () => {
      dragDiv?.removeEventListener('mousedown', onMouseDown, true);
      document.removeEventListener('mouseup', onMouseUp, true);
      document.removeEventListener('mousemove', onMouseMove, true);
    }
  }, []);

  return <div
    ref={dragRef}
    className={className || "drag-react"}
    style={{ position: 'fixed', left: '10px', top: '10px', zIndex: 99999, cursor: 'move', ...style }}
  >{children}</div>
}

export { Draggable }
