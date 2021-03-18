import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '../AppRouter';
import NavBar from '../NavBar';

const App = (): JSX.Element => (
  <BrowserRouter>
    <NavBar />
    <AppRouter />
  </BrowserRouter>
);

export default App;
