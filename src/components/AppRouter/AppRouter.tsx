import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Switch, Redirect } from 'react-router-dom';

import { auth } from '../../initfirebase';
import { privateRoutes, publicRoutes } from '../../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../ulits';

// import NavBar from '../NavBar';
import PaintChild from './PaintChild';

const AppRouter = (): JSX.Element => {
  // const { auth } = useStates(store => store.authFirebase);
  const [user] = useAuthState(auth);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Route path="/myDrawings/:id" children={<PaintChild />} exact />
      <Redirect to={HOME_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
