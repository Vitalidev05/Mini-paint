import Login from './components/Login';
import Paints from './components/Paint';
import { HOME_ROUTE, LOGIN_ROUTE } from './ulits';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: Paints,
  },
];
