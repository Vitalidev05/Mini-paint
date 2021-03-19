import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom';

import { auth } from '../../initfirebase';
import AppRouter from '../AppRouter';
import Loader from '../Loader';
import NavBar from '../NavBar';
import './App.scss';

const App = (): JSX.Element => {
  const [, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
