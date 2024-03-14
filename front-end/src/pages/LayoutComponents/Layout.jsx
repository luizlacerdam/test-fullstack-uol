import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from './Navbar';

function Layout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default Layout;
