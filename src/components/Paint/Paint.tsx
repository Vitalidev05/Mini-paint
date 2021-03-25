import React from 'react';
import { Redirect } from 'react-router-dom';

import { useStates } from '../../hooks/useStates';
import { MY_DRAWINGS_ROUTE } from '../../ulits';

import Canvas from './Canvas';
import style from './Paint.scss';
// import SettingBar from './SettingBar';
import Toolbar from './Toolbar';

interface IProps {
  id: string;
}

export const Paint = (props: IProps) => {
  const { id } = props;
  const { privatePaints } = useStates(x => x.privatePaints);

  if (privatePaints.findIndex(x => x.id === id) === -1) {
    return <Redirect to={MY_DRAWINGS_ROUTE} />;
  }

  return (
    <div className={style.paint}>
      <Toolbar id={id} />
      {/* <SettingBar /> */}
      <Canvas />
    </div>
  );
};
