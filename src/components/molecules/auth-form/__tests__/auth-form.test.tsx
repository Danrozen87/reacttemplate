
/**
 * @group unit
 * @description Comprehensive test suite for AuthForm component
 * @requirements
 * - Must handle form submission
 * - Must support password recovery flow
 * - Must validate inputs
 * - Must be accessible
 * - Must support i18n
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthForm } from '../auth-form';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

// Mock the hooks
const mockToast = vi.fn();
const mockChangeLanguage = vi.fn();

beforeEach(() => {
  vi.mock('@/hooks/use-toast', () => ({
    useToast: () => ({
      toast: mockToast,
    }),
  }));

  vi.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: { changeLanguage: mockChangeLanguage }
    }),
  }));
});

describe('AuthForm', () => {
  it('renders login form by default', () => {
    render(<AuthForm />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('shows recovery form when forgot password is clicked', async () => {
    render(<AuthForm />);
    const forgotPasswordButton = screen.getByRole('button', { name: /forgot password/i });
    await userEvent.click(forgotPasswordButton);
    expect(screen.getByText(/reset password/i)).toBeInTheDocument();
  });

  it('handles form submission with success', async () => {
    render(<AuthForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    await userEvent.type(emailInput, 'admin@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));

    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
      title: expect.any(String),
      variant: 'default',
    }));
  });

  it('handles password recovery submission', async () => {
    render(<AuthForm />);
    await userEvent.click(screen.getByRole('button', { name: /forgot password/i }));
    
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.click(screen.getByRole('button', { name: /reset password/i }));

    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
      title: expect.any(String),
      description: expect.any(String),
    }));
  });

  it('supports keyboard navigation', async () => {
    render(<AuthForm />);
    expect(document.activeElement).toBe(screen.getByLabelText(/email/i));
    await userEvent.tab();
    expect(document.activeElement).toBe(screen.getByLabelText(/password/i));
    await userEvent.tab();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: /forgot password/i }));
  });

  it('maintains accessibility attributes', () => {
    render(<AuthForm />);
    const form = screen.getByRole('form');
    expect(form).toHaveAttribute('aria-label');
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('aria-required', 'true');
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
