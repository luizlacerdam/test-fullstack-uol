/* eslint-disable sonarjs/prefer-single-boolean-return */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../../utils/requests';

export default function CreateCliente() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone, setTelephone] = useState('');
  const [status, setStatus] = useState('Status');
  const navigate = useNavigate();

  const cpfValidation = (value) => {
    if (value.length !== 14) {
      return false;
    }
    return true;
  };

  const telephoneValidation = (value) => {
    if (value.length !== 15) {
      return false;
    }
    return true;
  };

  const formatCpf = (value) => {
    const cpfNumbers = value.replace(/\D/g, '');
    let formattedCpf = '';

    if (cpfNumbers.length <= 3) {
      formattedCpf = cpfNumbers;
    } else if (cpfNumbers.length <= 6) {
      formattedCpf = `${cpfNumbers.slice(0, 3)}.${cpfNumbers.slice(3)}`;
    } else if (cpfNumbers.length <= 9) {
      formattedCpf = `${cpfNumbers.slice(0, 3)}.${cpfNumbers.slice(3, 6)}.${cpfNumbers.slice(6)}`;
    } else {
      formattedCpf = `${cpfNumbers.slice(0, 3)}.${cpfNumbers.slice(3, 6)}.${cpfNumbers.slice(6, 9)}-${cpfNumbers.slice(9, 11)}`;
    }

    return formattedCpf;
  };

  const formatTelephone = (value) => {
    const phoneNumbers = value.replace(/\D/g, '');
    let formattedPhone = '';

    if (phoneNumbers.length <= 2) {
      formattedPhone = `(${phoneNumbers}`;
    } else if (phoneNumbers.length <= 7) {
      formattedPhone = `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2, 7)}`;
    } else {
      formattedPhone = `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2, 7)}-${phoneNumbers.slice(7, 11)}`;
    }

    return formattedPhone;
  };

  const emailValidation = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value);
  };

  const handleCreate = async () => {
    if (name === '' || email === '' || cpf === '' || telephone === '' || status === '') {
      alert('Preencha todos os campos');
    } else if (!emailValidation(email)) {
      alert('Insira um e-mail válido');
    } else if (!cpfValidation(cpf)) {
      alert('Insira um CPF válido');
    } else if (!telephoneValidation(telephone)) {
      alert('Insira um telephone válido');
    } else if (status === 'Status') {
      alert('Selecione um status');
    } else {
      const result = await requestPost('/user', {
        name,
        email,
        cpf,
        telephone,
        status,
      });
      if (result.status !== 201) {
        alert('Erro ao criar usuário');
      } else {
        alert('Usuário criado com sucesso');
        navigate('/');
      }
    }
  };

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-between">
        <div className="mb-5">
          <h4
            className="text-secondary"
          >
            Novo usuário
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
            onChange={ (e) => setCpf(formatCpf(e.target.value)) }
          />
          <input
            className="form-control mb-3 fs-5 text-secondary p-3"
            placeholder="Telefone"
            type="text"
            value={ telephone }
            onChange={ (e) => setTelephone(formatTelephone(e.target.value)) }
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
            onClick={ handleCreate }
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
