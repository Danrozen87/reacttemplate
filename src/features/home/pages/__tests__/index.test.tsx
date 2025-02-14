
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../index';
import { useTranslation } from 'react-i18next';

// Mock translations
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() }
  })
}));

describe('HomePage', () => {
  it('renders authentication form', () => {
    render(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays logo', () => {
    render(<HomePage />);
    expect(screen.getByText('UI Unicorn')).toBeInTheDocument();
  });

  it('renders with correct layout classes', () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toHaveClass('min-h-screen', 'grid', 'lg:grid-cols-2');
  });

  it('applies animation classes', () => {
    const { container } = render(<HomePage />);
    const mainSection = screen.getByRole('main');
    expect(mainSection).toHaveClass('animate-modal-in');
  });
});
