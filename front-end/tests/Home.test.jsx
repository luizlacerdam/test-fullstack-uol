// src/App.test.tsx

import { fireEvent, render, screen } from '@testing-library/react';

import { usersMock } from './mocks/users.mock';
import Home from '../src/pages/Home';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => {
  const originalModule = vi.importActual('react-router-dom');
  return {
    ...originalModule,
    useLoaderData: () => ({ data: usersMock }),
    useNavigate: () => mockNavigate,
  };
});

describe('1. Home', () => {
  it('1.1. Should find text before user list in home page', () => {
    render(
      <Home />,
    );
    expect(screen.getByText(/Listagem de usuários/i)).toBeInTheDocument();
    expect(screen.getByText(/Escolha um cliente para visializar os detalhes/i)).toBeInTheDocument();
  });

  it('1.2. Should find button to create new user in home page', () => {
    render(
      <Home />,
    );
    expect(screen.getByText(/Novo Cliente/i)).toBeInTheDocument();
  });

  it('1.3. Should find user list in home page', () => {
    render(
      <Home />,
    );

    usersMock.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.cpf)).toBeInTheDocument();
      expect(screen.getByText(user.telephone)).toBeInTheDocument();
    });

    const editButtons = screen.getAllByText('Editar');
    expect(editButtons.length).toBe(usersMock.length);
  });

  it('1.4. Should find number of users in home page', () => {
    render(
      <Home />,
    );
    expect(screen.getByText(`Exibindo ${usersMock.length} clientes`)).toBeInTheDocument();
  });

  it('1.5. Should go to create user page when click on new user button', () => {
    render(
      <Home />,
    );
    const newClientButton = screen.getByText(/Novo Cliente/i);
    fireEvent.click(newClientButton);
    expect(mockNavigate).toHaveBeenCalledWith('/create-client');
  });

  it('1.6. Shoudl go to edit user page when click on edit button', () => {
    render(
      <Home />,
    );

    const editButton = screen.getAllByText('Editar');
    fireEvent.click(editButton[0]);
    expect(mockNavigate).toHaveBeenCalledWith(`/client/${usersMock[0].id}`);
  });
});
