
/// <reference types="vitest" />
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from '../auth-form';
import { useToast } from '@/hooks/use-toast';

// Mock the toast hook
vi.mock('@/hooks/use-toast', () => ({
  useToast: vi.fn(() => ({
    toast: vi.fn(),
  })),
}));

describe('AuthForm', () => {
  it('renders login form by default', () => {
    render(<AuthForm />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('shows recovery form when forgot password is clicked', () => {
    render(<AuthForm />);
    const forgotPasswordButton = screen.getByRole('button', { name: /forgot password/i });
    fireEvent.click(forgotPasswordButton);
    expect(screen.getByText(/reset password/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const mockToast = vi.fn();
    (useToast as unknown as vi.Mock).mockImplementation(() => ({
      toast: mockToast,
    }));

    render(<AuthForm />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'admin@example.com' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
      title: expect.any(String),
      variant: 'default',
    }));
  });
});
