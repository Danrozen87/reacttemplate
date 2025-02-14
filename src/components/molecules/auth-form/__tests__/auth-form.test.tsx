
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from '../auth-form';
import { useToast } from '@/hooks/use-toast';

// Mock translations
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() }
  })
}));

// Mock toast hook
vi.mock('@/hooks/use-toast', () => ({
  useToast: vi.fn()
}));

describe('AuthForm', () => {
  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue({
      toast: vi.fn()
    });
  });

  it('renders all form elements', () => {
    render(<AuthForm />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('toggles password visibility', () => {
    render(<AuthForm />);
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);
    const toggleButton = screen.getByRole('button', { name: /show password/i });

    expect(passwordInput).toHaveAttribute('type', 'password');
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  it('switches to recovery mode when forgot password is clicked', () => {
    render(<AuthForm />);
    const forgotPasswordButton = screen.getByRole('button', { name: /forgot password/i });
    fireEvent.click(forgotPasswordButton);
    expect(screen.getByText(/reset your password/i)).toBeInTheDocument();
  });

  it('shows success toast for admin login', async () => {
    const { toast } = useToast() as { toast: jest.Mock };
    render(<AuthForm />);
    
    const emailInput = screen.getByRole('textbox');
    fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
    
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(submitButton);

    expect(toast).toHaveBeenCalledWith(expect.objectContaining({
      title: 'auth.loginSuccess'
    }));
  });
});
