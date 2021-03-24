import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Switch, Redirect } from 'react-router-dom';

// import { useStates } from '../../hooks/useStates';
import { useStates } from '../../hooks/useStates';
import { auth } from '../../initfirebase';
import { privateRoutes, publicRoutes } from '../../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../ulits';
// import NavBar from '../NavBar';
import Paint from '../Paint';

const AppRouter = (): JSX.Element => {
  // const { auth } = useStates(store => store.authFirebase);
  const [user] = useAuthState(auth);
  const { privatePaints } = useStates(x => x.privatePaints);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      {privatePaints.map(x => (
        <Route key={x.id} path={`/myDrawings/${x.id}`} exact>
          <Paint id={x.id} />
        </Route>
      ))}
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
