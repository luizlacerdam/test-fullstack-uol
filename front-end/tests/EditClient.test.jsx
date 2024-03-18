/* eslint-disable sonarjs/no-duplicate-string */
import { fireEvent, render, screen } from '@testing-library/react';
import EditClient from '../src/pages/EditClient';
import { userMock } from './mocks/users.mock';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => {
  const originalModule = vi.importActual('react-router-dom');
  return {
    ...originalModule,
    useLoaderData: () => ({ data: userMock }),
    useNavigate: () => mockNavigate,
  };
});

vi.mock('../src/utils/requests', () => ({
  requestPatch: vi.fn(() => Promise.resolve({ status: 200 })),
}));

describe('3. EditClient', () => {
  beforeEach(() => {
    window.alert = vi.fn();
  });

  it('3.1. Should find text in edit client page', () => {
    render(<EditClient />);
    expect(screen.getByRole('heading', { name: /Editar usuário/i })).toBeInTheDocument();
    expect(screen.getByText(/Informe os campos a seguir para editar usuário:/i)).toBeInTheDocument();
  });

  it('3.2. Should find inputs in create edit page', () => {
    render(<EditClient />);
    expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/CPF/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Telefone/i)).toBeInTheDocument();
  });

  it('3.3. Should interact with the status select input', () => {
    render(<EditClient />);
    const statusSelect = screen.getByRole('combobox');
    fireEvent.change(statusSelect, { target: { value: 'active' } });
    expect(statusSelect.value).toBe('active');
    fireEvent.change(statusSelect, { target: { value: 'waiting_activation' } });
    expect(statusSelect.value).toBe('waiting_activation');
    fireEvent.change(statusSelect, { target: { value: 'inactive' } });
    expect(statusSelect.value).toBe('inactive');
    fireEvent.change(statusSelect, { target: { value: 'desactivated' } });
    expect(statusSelect.value).toBe('desactivated');
  });

  it('3.4. Should go to home page when click on Voltar button', () => {
    render(<EditClient />);
    const cancelButton = screen.getByRole('button', { name: /Voltar/i });
    fireEvent.click(cancelButton);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('3.5. Should return a alert when click on Atualizar with invalid Email', () => {
    render(<EditClient />);
    const updateButton = screen.getByRole('button', { name: /Atualizar/i });
    const cpfInput = screen.getByPlaceholderText(/CPF/i);
    const nameInput = screen.getByPlaceholderText(/Nome/i);
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const telephoneInput = screen.getByPlaceholderText(/Telefone/i);
    const statusSelect = screen.getByRole('combobox');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@emailcom' } });
    fireEvent.change(telephoneInput, { target: { value: '(11) 99999-9999' } });
    fireEvent.change(cpfInput, { target: { value: '123.456.789-00' } });
    fireEvent.change(statusSelect, { target: { value: 'active' } });

    fireEvent.click(updateButton);
    expect(window.alert).toHaveBeenCalledWith('Insira um e-mail válido');
  });

  it('3.6. Should return a alert when click on Atualizar with invalid telephone', () => {
    render(<EditClient />);
    const updateButton = screen.getByRole('button', { name: /Atualizar/i });
    const cpfInput = screen.getByPlaceholderText(/CPF/i);
    const nameInput = screen.getByPlaceholderText(/Nome/i);
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const telephoneInput = screen.getByPlaceholderText(/Telefone/i);
    const statusSelect = screen.getByRole('combobox');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.change(telephoneInput, { target: { value: '(11) 99999-999' } });
    fireEvent.change(cpfInput, { target: { value: '123.456.789-00' } });
    fireEvent.change(statusSelect, { target: { value: 'active' } });

    fireEvent.click(updateButton);
    expect(window.alert).toHaveBeenCalledWith('Insira um telephone válido');
  });

  it('3.7. Should return a alert when click on Atualizar with invalid CPF', () => {
    render(<EditClient />);
    const updateButton = screen.getByRole('button', { name: /Atualizar/i });
    const cpfInput = screen.getByPlaceholderText(/CPF/i);
    const nameInput = screen.getByPlaceholderText(/Nome/i);
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const telephoneInput = screen.getByPlaceholderText(/Telefone/i);
    const statusSelect = screen.getByRole('combobox');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.change(telephoneInput, { target: { value: '(11) 99999-9999' } });
    fireEvent.change(cpfInput, { target: { value: '123.456.789-0' } });
    fireEvent.change(statusSelect, { target: { value: 'active' } });

    fireEvent.click(updateButton);
    expect(window.alert).toHaveBeenCalledWith('Insira um CPF válido');
  });

  it('3.8. Should return a alert when click on Atualizar with invalid status', () => {
    render(<EditClient />);
    const updateButton = screen.getByRole('button', { name: /Atualizar/i });
    const cpfInput = screen.getByPlaceholderText(/CPF/i);
    const nameInput = screen.getByPlaceholderText(/Nome/i);
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const telephoneInput = screen.getByPlaceholderText(/Telefone/i);
    const statusSelect = screen.getByRole('combobox');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.change(telephoneInput, { target: { value: '(11) 99999-9999' } });
    fireEvent.change(cpfInput, { target: { value: '123.456.789-00' } });
    fireEvent.change(statusSelect, { target: { value: 'Status' } });

    fireEvent.click(updateButton);
    expect(window.alert).toHaveBeenCalledWith('Selecione um status');
  });

  it('3.9. Should return a alert when click on Atualizar with valide fields', async () => {
    render(<EditClient />);
    const updateButton = screen.getByRole('button', { name: /Atualizar/i });
    const cpfInput = screen.getByPlaceholderText(/CPF/i);
    const nameInput = screen.getByPlaceholderText(/Nome/i);
    const emailInput = screen.getByPlaceholderText(/E-mail/i);
    const telephoneInput = screen.getByPlaceholderText(/Telefone/i);
    const statusSelect = screen.getByRole('combobox');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.change(telephoneInput, { target: { value: '(11) 99999-9999' } });
    fireEvent.change(cpfInput, { target: { value: '123.456.789-00' } });
    fireEvent.change(statusSelect, { target: { value: 'active' } });

    fireEvent.click(updateButton);
    await vi.waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Usuário atualizado com sucesso');
    });

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
