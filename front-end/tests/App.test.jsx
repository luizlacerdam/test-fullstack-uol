// src/App.test.tsx

import { render, screen } from '@testing-library/react';

import { usersMock } from './mocks/users.mock';
import Home from '../src/pages/Home';

vi.mock('react-router-dom', () => {
  const originalModule = vi.importActual('react-router-dom');
  return {
    ...originalModule,
    useLoaderData: () => ({ data: usersMock }),
    useNavigate: () => vi.fn(),
  };
});

it('should find text in home page', () => {
  render(

    <Home />,

  );
  expect(screen.getByText(/Listagem de usuários/i)).toBeInTheDocument();
  expect(screen.getByText(/Escolha um cliente para visializar os detalhes/i)).toBeInTheDocument();
});
