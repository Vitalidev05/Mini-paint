import * as React from 'react';

import Canvas from './Canvas';
import style from './Paint.scss';
// import SettingBar from './SettingBar';
import Toolbar from './Toolbar';

export const Paint = () => (
  <div className={style.paint}>
    <Toolbar />
    {/* <SettingBar /> */}
    <Canvas />
  </div>
);
