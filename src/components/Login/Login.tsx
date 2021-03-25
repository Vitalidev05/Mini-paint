import { Button, Container, Grid, Box } from '@material-ui/core';
import React from 'react';

import { useActions } from '../../hooks/useActions';
import 'regenerator-runtime';
// import { useStates } from '../../hooks/useStates';
import { auth } from '../../initfirebase';

const Login = (): JSX.Element => {
  const { authWithGoogle } = useActions();

  const login = () => {
    authWithGoogle(auth);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justify="center"
      >
        <Grid
          style={{ width: 400, background: 'lightgray' }}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
