// import React from 'react'
import './Header.css';

import Navigation from '../Navigation/Navigation';
import styles from './Header.css';
// import { Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <h1>My Portfolio</h1>
        <div>
          <Navigation/>
        </div>
      </header>
      {/* <Outlet/> */}
    </>
  );
}
