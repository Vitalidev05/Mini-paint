import React from 'react';

import { useActions } from '../../../../hooks/useActions';

import style from './inputWidth.scss';

const InputWidth = () => {
  const { setLineWidth } = useActions();

  return (
    <div className={style.field}>
      <label htmlFor="line-width">
        Line width
        <input
          type="number"
          id="line-width"
          min={1}
          max={20}
          defaultValue={1}
          onChange={e => setLineWidth(+e.target.value)}
        />
      </label>
    </div>
  );
};

export default InputWidth;
