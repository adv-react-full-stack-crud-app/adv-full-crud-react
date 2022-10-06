// import React from 'react'
import './Header.css';

import Navigation from '../Navigation/Navigation';
import styles from './Header.css';
// import { Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <div>
          <Navigation/>
        </div>
      </header>
    </>
  );
}
