import React from 'react';
import { Link } from 'react-router-dom';

import { MY_DRAWINGS_ROUTE, PUBLIC_DRAWINGS_ROUTE } from '../../ulits';

import style from './Home.scss';

const Home = () => (
  <div className={style.container}>
    <Link to={MY_DRAWINGS_ROUTE}>
      <div>my drawings</div>
    </Link>
    <Link to={PUBLIC_DRAWINGS_ROUTE}>
      <div>public drawings</div>
    </Link>
  </div>
);

export default Home;
