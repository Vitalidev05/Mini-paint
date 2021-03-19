import { Card, CardContent, TextField, CardActions, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useActions } from '../../hooks/useActions';
import { auth } from '../../initfirebase';

import style from './AddNewPaint.scss';

const AddNewPaint = (): JSX.Element => {
  const { createPaint } = useActions();
  const [name, setName] = useState('');
  const [user] = useAuthState(auth);

  const sendPaint = () => {
    if (user) {
      createPaint(user.uid, name);
    }
  };

  return (
    <Card className={style.Card}>
      <CardContent>
        <TextField
          variant="outlined"
          label="Paint name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={sendPaint}>
          Add Paint
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddNewPaint;
