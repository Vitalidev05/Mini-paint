import React from 'react';

import Canvas from './Canvas';
import style from './Paint.scss';
// import SettingBar from './SettingBar';
import Toolbar from './Toolbar';

interface IProps {
  id: string;
}

export const Paint = (props: IProps) => {
  const { id } = props;

  return (
    <div className={style.paint}>
      <Toolbar id={id} />
      {/* <SettingBar /> */}
      <Canvas />
    </div>
  );
};
