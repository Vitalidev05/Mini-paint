import { Button, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { auth } from '../../initfirebase';
import { HOME_ROUTE } from '../../ulits';

import style from './NavBar.scss';

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
            <div className={style.buttonGroup}>
              <Link to="/">
                <Button variant="outlined">Home</Button>
              </Link>
              <Link to="/myDrawings">
                <Button variant="outlined">My drawings</Button>
              </Link>
              <Button onClick={signOut} variant="outlined">
                Выйти
              </Button>
            </div>
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
