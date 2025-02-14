
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from '../auth-form';
import { useToast } from '@/hooks/use-toast';

vi.mock('@/hooks/use-toast', () => ({
  useToast: vi.fn(() => ({
    toast: vi.fn(),
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('AuthForm', () => {
  it('renders login form by default', () => {
    render(<AuthForm />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('shows recovery form when forgot password is clicked', () => {
    render(<AuthForm />);
    fireEvent.click(screen.getByText('auth.forgotPassword'));
    expect(screen.getByTestId('recovery-form')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const { toast } = useToast() as { toast: vi.Mock };
    render(<AuthForm />);
    
    const emailInput = screen.getByRole('textbox');
    fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(toast).toHaveBeenCalledWith(expect.objectContaining({
      title: 'auth.loginSuccess',
    }));
  });
});
