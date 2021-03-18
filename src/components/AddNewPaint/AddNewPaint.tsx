import { Card, CardContent, TextField, CardActions, Button } from '@material-ui/core';
import React, { useState } from 'react';

// import { useActions } from '../../hooks/useActions';

import style from './AddNewPaint.scss';

const AddNewPaint = (): JSX.Element => {
  // const { addPaint } = useActions();
  const [name, setName] = useState('');
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
        <Button variant="contained">Add Paint</Button>
      </CardActions>
    </Card>
  );
};

export default AddNewPaint;
