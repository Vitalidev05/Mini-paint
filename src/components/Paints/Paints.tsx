import { CardMedia, Card, CardActionArea, CardHeader, Button } from '@material-ui/core';
import { Share } from '@material-ui/icons';
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
  const { getDocumentDataByUid, updateShareThunk, sendDrawingToPublic } = useActions();
  const { privatePaints } = useStates(x => x.privatePaints);

  useEffect(() => {
    if (privatePaints.length === 0 && user) {
      getDocumentDataByUid(user.uid);
    }
  }, []);

  const sendPaintToPublic = (dataUrl: string, paintId: string, paintName: string) => {
    if (user && user.displayName) {
      updateShareThunk(user.uid, true, paintId);
      sendDrawingToPublic(user.displayName, dataUrl, paintId, paintName);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        {privatePaints.map(x => (
          <Card key={x.id} className={style.card} variant="outlined">
            <CardHeader subheader={x.name} />
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
            <Button onClick={() => sendPaintToPublic(x.dataUrl, x.id, x.name)}>
              <Share />
            </Button>
          </Card>
        ))}
        <AddNewPaint />
      </div>
    </div>
  );
};

export default Paints;
