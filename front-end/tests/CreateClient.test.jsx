/* eslint-disable sonarjs/no-duplicate-string */
import { fireEvent, render, screen } from '@testing-library/react';
import CreateCliente from '../src/pages/CreateCliente';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => {
  const originalModule = vi.importActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: () => mockNavigate,
  };
});

describe('2. CreateCliente', () => {
  beforeEach(() => {
    window.alert = vi.fn();
  });

  it('2.1. Should find text in create client page', () => {
    render(<CreateCliente />);
    expect(screen.getByRole('heading', { name: /Novo usuário/i })).toBeInTheDocument();
    expect(screen.getByText(/Informe os campos a seguir para criar novo usuário:/i)).toBeInTheDocument();
  });

  it('2.2. Should find inputs in create client page', () => {
    render(<CreateCliente />);
    expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/CPF/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Telefone/i)).toBeInTheDocument();
  });

  it('2.3. Should interact with the status select input', () => {
    render(<CreateCliente />);
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

  it('2.4. Should go to home page when click on Voltar button', () => {
    render(<CreateCliente />);
    const cancelButton = screen.getByRole('button', { name: /Voltar/i });
    fireEvent.click(cancelButton);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('2.5. Should return a alert when click on Criar with empty button', () => {
    render(<CreateCliente />);
    const createButton = screen.getByRole('button', { name: /Criar/i });
    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith('Preencha todos os campos');
  });

  it('2.6. Should return a alert when click on Criar with invalid Email', () => {
    render(<CreateCliente />);
    const createButton = screen.getByRole('button', { name: /Criar/i });
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

    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith('Insira um e-mail válido');
  });

  it('2.7. Should return a alert when click on Criar with invalid telephone', () => {
    render(<CreateCliente />);
    const createButton = screen.getByRole('button', { name: /Criar/i });
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

    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith('Insira um telephone válido');
  });

  it('2.8. Should return a alert when click on Criar with invalid CPF', () => {
    render(<CreateCliente />);
    const createButton = screen.getByRole('button', { name: /Criar/i });
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

    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith('Insira um CPF válido');
  });

  it('2.9. Should return a alert when click on Criar with invalid status', () => {
    render(<CreateCliente />);
    const createButton = screen.getByRole('button', { name: /Criar/i });
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

    fireEvent.click(createButton);
    expect(window.alert).toHaveBeenCalledWith('Selecione um status');
  });

  it('2.10. Should return a alert when click on Criar with valide fields', async () => {
    render(<CreateCliente />);
    const createButton = screen.getByRole('button', { name: /Criar/i });
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

    fireEvent.click(createButton);
    await vi.waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Usuário criado com sucesso');
    });

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
