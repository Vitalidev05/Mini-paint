import { CardMedia, Card, CardActionArea, CardHeader } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useStates } from '../../hooks/useStates';
import { auth } from '../../initfirebase';
import AddNewPaint from '../AddNewPaint';

import style from './Paints.scss';

const Paints = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const { getDocumentDataByUid } = useActions();
  const { privatePaints } = useStates(x => x.privatePaints);

  useEffect(() => {
    if (privatePaints.length === 0 && user) {
      getDocumentDataByUid(user.uid);
    }
  }, []);

  return (
    <div className={style.cardContainer}>
      {privatePaints.map(x => (
        <Card key={x.id} className={style.card}>
          <CardHeader subheader={x.name} className={style.cardText} />
          <CardActionArea>
            <Link to={`/myDrawings/${x.id}`}>
              {x.dataUrl ? (
                <CardMedia
                  component="img"
                  alt={x.name}
                  image={x.dataUrl}
                  className={style.cardImg}
                />
              ) : (
                x.name
              )}
            </Link>
          </CardActionArea>
        </Card>
      ))}
      <AddNewPaint />
    </div>
  );
};

export default Paints;
