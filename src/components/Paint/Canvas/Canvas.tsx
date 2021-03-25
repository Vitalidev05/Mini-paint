import React, { useRef, useEffect } from 'react';

import { useActions } from '../../../hooks/useActions';

import style from './Canvas.scss';

export const Canvas = () => {
  const canvasRefer = useRef<HTMLCanvasElement | null>(null);
  const { setRef, pushToUndo } = useActions();

  useEffect(() => {
    setRef(canvasRefer.current);
  }, []);

  function onMouseDownHandler() {
    if (canvasRefer.current?.toDataURL) {
      pushToUndo(canvasRefer.current.toDataURL());
    }
  }

  return (
    <div className={style.canvasBlock}>
      <canvas
        onMouseDown={onMouseDownHandler}
        ref={canvasRefer}
        className={style.canvas}
        width={600}
        height={400}
      />
    </div>
  );
};
