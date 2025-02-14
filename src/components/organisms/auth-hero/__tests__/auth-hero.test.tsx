
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthHero } from '../auth-hero';
import { animations } from '@/utils/animations';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: { changeLanguage: vi.fn() }
  })
}));

describe('AuthHero', () => {
  it('renders hero section with correct role', () => {
    render(<AuthHero />);
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('renders hero image with correct alt text', () => {
    render(<AuthHero />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('renders quote and author', () => {
    render(<AuthHero />);
    expect(screen.getByText('auth.heroQuote')).toBeInTheDocument();
    expect(screen.getByText('auth.heroAuthor')).toBeInTheDocument();
  });

  it('applies animation classes', () => {
    const { container } = render(<AuthHero />);
    expect(container.querySelector(`.${animations.modal.content.enter.split(' ')[0]}`)).toBeInTheDocument();
  });
});
