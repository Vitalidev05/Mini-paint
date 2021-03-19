import { Card, CardActionArea } from '@material-ui/core';
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
      <CardActionArea onClick={() => {}}>
        <p>name:</p>
        <p>{name}</p>
        <p>id:</p>
        <p>{id}</p>
      </CardActionArea>
    </Card>
  );
};

export default PaintRef;
