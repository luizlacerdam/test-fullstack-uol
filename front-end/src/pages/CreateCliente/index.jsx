import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function CreateCliente() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone, setTelephone] = useState('');
  const [status, setStatus] = useState('Status');
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-between">
        <div className="mb-5">
          <h4
            className="text-secondary"
          >
            Listagem de usuários
          </h4>
          <span className="text-secondary fs-5">
            Informe os campos a seguir para criar novo usuário:
          </span>
        </div>
        <div className="d-flex flex-column w-25">
          <input
            className="form-control mb-3 fs-5 text-secondary p-3"
            placeholder="Nome"
            type="text"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
          <input
            className="form-control mb-3 fs-5 text-secondary p-3"
            placeholder="E-mail"
            type="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            className="form-control mb-3 fs-5 text-secondary p-3"
            placeholder="CPF"
            type="text"
            value={ cpf }
            onChange={ (e) => setCpf(e.target.value) }
          />
          <input
            className="form-control mb-3 fs-5 text-secondary p-3"
            placeholder="Telefone"
            type="text"
            value={ telephone }
            onChange={ (e) => setTelephone(e.target.value) }
          />
          <select
            className="form-select mb-3 fs-5 p-3 text-secondary"
            value={ status }
            onChange={ (e) => setStatus(e.target.value) }
          >
            <option className="d-none">Status</option>
            <option value="active">Ativo</option>
            <option value="waiting_activation">Aguardando ativação</option>
            <option value="inactive">Inativo</option>
            <option value="desactivated">Desativado</option>
          </select>
        </div>
        <div className="w-50 d-flex mt-5">
          <Button
            className="button-orange p-2 px-5 me-4"
          >
            <span
              className="fs-5"
            >
              Criar
            </span>
          </Button>
          <Button
            className="button-white px-5 ms-4"
            onClick={ () => navigate('/') }
          >
            <span
              className="fs-5"
            >
              Voltar
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
