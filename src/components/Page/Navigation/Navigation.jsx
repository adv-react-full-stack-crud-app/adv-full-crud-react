// import React from 'react'

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="auth">Auth</NavLink>
      <NavLink to="authform">AuthForm</NavLink>
    </nav>
  );
}
