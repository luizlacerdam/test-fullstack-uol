import React from 'react';
import logoUol from '../../assets/logo/uol-logo.svg';

export default function NavbarComponent() {
  return (
    <div className="navbar d-flex justify-content-center">
      <img src={ logoUol } alt="UOL Logo" />
    </div>
  );
}
