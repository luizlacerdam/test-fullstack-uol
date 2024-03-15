import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import PropTypes from 'prop-types';

export default function ClientCard({ client }) {
  const statusDictionary = {
    active: { text: 'Ativo', color: 'bg-success' },
    waiting_activation: { text: 'Aguardando ativação', color: 'bg-warning' },
    inactive: { text: 'Inativo', color: 'bg-danger' },
    desactivated: { text: 'Desativado', color: 'bg-secondary' },
  };
  return (
    <div
      className="
    d-flex flex-row justify-content-between p-4 px-5 border mb-5"
    >
      <div className="d-flex flex-column w-25">
        <span className="fs-4 text-secondary">
          {client.name}
        </span>
        <span className="fs-5 text-secondary">
          {client.email}
        </span>
      </div>
      <div className="d-flex flex-column w-25 ms-5">
        <span className="fs-4 text-secondary">
          {client.cpf}
        </span>
        <span className="fs-5 text-secondary">
          {client.telephone}
        </span>
      </div>
      <div className="d-flex flex-row align-items-center w-25 ms-5">
        <div
          className={ `
        ${statusDictionary[client.status].color} p-2 status-dot rounded-circle me-2` }
        />
        <span className="fs-5 text-secondary">
          {statusDictionary[client.status].text}
        </span>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <Button className="h-100 px-5 py-1 button-white">
          <span className="fs-4">
            Editar
          </span>
        </Button>
      </div>
    </div>
  );
}

ClientCard.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    telephone: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
