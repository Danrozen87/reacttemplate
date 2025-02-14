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

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthForm } from '../auth-form';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

// Mock the hooks
vi.mock('@/hooks/use-toast', () => ({
  useToast: vi.fn(() => ({
    toast: vi.fn(),
  })),
}));

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(() => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() }
  })),
}));

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
    const mockToast = vi.fn();
    (useToast as unknown as vi.Mock).mockImplementation(() => ({
      toast: mockToast,
    }));

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
    const mockToast = vi.fn();
    (useToast as unknown as vi.Mock).mockImplementation(() => ({
      toast: mockToast,
    }));

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
    
    // Focus should start on email input
    expect(document.activeElement).toBe(screen.getByLabelText(/email/i));
    
    // Tab to password
    await userEvent.tab();
    expect(document.activeElement).toBe(screen.getByLabelText(/password/i));
    
    // Tab to forgot password
    await userEvent.tab();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: /forgot password/i }));
  });

  it('renders in different languages', async () => {
    const mockT = vi.fn((key: string) => `translated_${key}`);
    (useTranslation as unknown as vi.Mock).mockImplementation(() => ({
      t: mockT,
      i18n: { changeLanguage: vi.fn() }
    }));

    render(<AuthForm />);
    expect(screen.getByRole('button', { name: /translated_auth\.login/i })).toBeInTheDocument();
  });

  it('maintains accessibility attributes', () => {
    render(<AuthForm />);
    
    // Check form accessibility
    const form = screen.getByRole('form');
    expect(form).toHaveAttribute('aria-label');
    
    // Check input accessibility
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('aria-required', 'true');
    
    // Check button accessibility
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
