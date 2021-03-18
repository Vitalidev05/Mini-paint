import { Button, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { auth } from '../../initfirebase';
import { HOME_ROUTE } from '../../ulits';

const NavBar = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const { deleteState } = useActions();

  const signOut = async () => {
    await auth?.signOut();
    deleteState();
  };

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container justify="flex-end">
          {user ? (
            <Button onClick={signOut} variant="outlined">
              Выйти
            </Button>
          ) : (
            <NavLink to={HOME_ROUTE}>
              <Button variant="outlined">Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
