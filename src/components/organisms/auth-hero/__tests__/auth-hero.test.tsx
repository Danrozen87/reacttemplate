
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthHero } from '../auth-hero';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('AuthHero', () => {
  it('renders hero image with loading state', () => {
    render(<AuthHero />);
    const image = screen.getByRole('presentation');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('opacity-0');
  });

  it('shows image after loading', () => {
    render(<AuthHero />);
    const image = screen.getByRole('presentation');
    fireEvent.load(image);
    expect(image).toHaveClass('opacity-100');
  });

  it('displays quote and author', () => {
    render(<AuthHero />);
    expect(screen.getByText('auth.heroQuote')).toBeInTheDocument();
    expect(screen.getByText('auth.heroAuthor')).toBeInTheDocument();
  });
});
