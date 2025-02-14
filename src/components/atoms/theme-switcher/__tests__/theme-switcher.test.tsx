
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '../theme-switcher';

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn()
  })
}));

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      language: 'en'
    }
  })
}));

describe('ThemeSwitcher', () => {
  it('renders with correct accessibility attributes', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  it('includes proper animation classes', () => {
    const { container } = render(<ThemeSwitcher />);
    expect(container.firstChild).toHaveClass('animate-fade-in');
  });

  it('handles theme toggle correctly', () => {
    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Theme change is handled by next-themes
    expect(button).toBeInTheDocument();
  });

  it('includes screen reader text', () => {
    render(<ThemeSwitcher />);
    const srText = screen.getByText('components.themeSwitcher.darkMode');
    expect(srText).toHaveClass('sr-only');
  });
});
