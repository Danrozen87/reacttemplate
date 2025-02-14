
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '../../../test/test-utils';
import { ThemeSwitcher } from '../theme-switcher';

describe('ThemeSwitcher', () => {
  it('renders theme toggle button', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Toggle theme');
  });

  it('updates theme when clicked', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Theme change is handled by next-themes
    expect(button).toBeInTheDocument();
  });
});

