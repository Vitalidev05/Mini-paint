import { Card } from '@material-ui/core';
import React from 'react';

import style from './PaintRef.scss';

interface IProps {
  name: string;
  id: string;
}

const PaintRef = (props: IProps): JSX.Element => {
  const { id, name } = props;
  return (
    <Card className={style.Card}>
      <p>{name}</p>
      <p>{id}</p>
    </Card>
  );
};

export default PaintRef;
