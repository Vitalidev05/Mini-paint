import Home from './components/Home';
import Login from './components/Login';
import Paints from './components/Paints';
import { HOME_ROUTE, LOGIN_ROUTE, MY_DRAWINGS_ROUTE } from './ulits';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: MY_DRAWINGS_ROUTE,
    Component: Paints,
  },
];
