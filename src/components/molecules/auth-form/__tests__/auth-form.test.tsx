
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from '../auth-form';
import { useToast } from '@/hooks/toast';

// Mock hooks
vi.mock('@/hooks/toast', () => ({
  useToast: vi.fn(() => ({
    toast: vi.fn()
  }))
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn()
    }
  })
}));

describe('AuthForm', () => {
  it('renders auth form with all required fields', () => {
    render(<AuthForm />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    const mockToast = vi.fn();
    (useToast as jest.Mock).mockImplementation(() => ({
      toast: mockToast
    }));

    render(<AuthForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const form = screen.getByRole('form');

    fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
    fireEvent.submit(form);

    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
      title: 'auth.loginSuccess'
    }));
  });

  it('shows recovery form when forgot password is clicked', () => {
    render(<AuthForm />);
    
    const forgotPasswordButton = screen.getByText(/forgot password/i);
    fireEvent.click(forgotPasswordButton);

    expect(screen.getByText(/back to login/i)).toBeInTheDocument();
  });

  it('shows signup form when signup button is clicked', () => {
    render(<AuthForm />);
    
    const signUpButton = screen.getByText(/sign up/i);
    fireEvent.click(signUpButton);

    expect(screen.getByText(/back to login/i)).toBeInTheDocument();
  });
});
