import Home from './components/Home';
import Login from './components/Login';
import Paints from './components/Paints';
import publicDrawings from './components/publicDrawings';
import { HOME_ROUTE, LOGIN_ROUTE, MY_DRAWINGS_ROUTE, PUBLIC_DRAWINGS_ROUTE } from './ulits';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: PUBLIC_DRAWINGS_ROUTE,
    Component: publicDrawings,
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
  {
    path: PUBLIC_DRAWINGS_ROUTE,
    Component: publicDrawings,
  },
];
