import React from 'react';
import logoUol from '../../assets/logo/uol-logo.svg';

export default function NavbarComponent() {
  return (
    <div>
      <div className="navbar d-flex justify-content-center">
        <img src={ logoUol } alt="UOL Logo" />
      </div>
      <div
        className="container
       d-flex justify-content-start align-items-baseline mt-5 pt-5 mb-3"
      >
        <i className="fs-1 bi bi-person me-3 " />
        <h1>Painel de clientes</h1>
      </div>
      <div className="container border border-secundery mb-5" />
    </div>
  );
}
