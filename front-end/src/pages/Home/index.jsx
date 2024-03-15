import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useLoaderData } from 'react-router-dom';
import ClientCard from './components/clientCard';

export default function Home() {
  const { data } = useLoaderData();

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
        <div className="m-5">
          <Button className="button-orange px-3 p-2">
            <span className="text-white fs-5">
              Novo Cliente
            </span>
          </Button>
        </div>
      </div>
      <div>
        {data ? data.map((client) => (
          <ClientCard key={ client.id } client={ client } />
        )) : <div>Carregando...</div>}
      </div>
      <div className="mb-5">
        <span className="fs-5 text-secondary">
          {`Exibindo ${data.length} clientes`}
        </span>
      </div>
    </div>
  );
}
