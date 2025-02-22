
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthLogo } from '../auth-logo';

describe('AuthLogo', () => {
  it('renders the logo and brand name', () => {
    render(<AuthLogo />);
    expect(screen.getByText('Plotline')).toBeInTheDocument();
  });

  it('has correct animation classes', () => {
    const { container } = render(<AuthLogo />);
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('animate-modal-in');
  });

  it('contains gradient background', () => {
    const { container } = render(<AuthLogo />);
    const gradientElement = container.querySelector('.bg-gradient-to-br');
    expect(gradientElement).toBeInTheDocument();
  });
});
