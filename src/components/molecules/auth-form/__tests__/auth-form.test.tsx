
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from '../auth-form';

describe('AuthForm', () => {
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
});
