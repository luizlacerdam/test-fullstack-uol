import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className="container">
      <div className="d-flex flex-direction-row justify-content-between">
        <div>
          <h4
            className="text-secondary"
          >
            Listagem de usuários
          </h4>
          <span className="text-secondary fs-5">
            Escolha um cliente para visializar os detalhes
          </span>
        </div>
        <div>
          <Button className="button-orange">
            <span className="text-white fs-5">
              Novo Cliente
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
