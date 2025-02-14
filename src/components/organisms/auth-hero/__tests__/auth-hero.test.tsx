
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthHero } from '../auth-hero';

describe('AuthHero', () => {
  it('renders hero image and quote', () => {
    render(<AuthHero />);
    const heroImage = screen.getByRole('presentation');
    const quote = screen.getByText(/auth.heroQuote/);
    
    expect(heroImage).toBeInTheDocument();
    expect(quote).toBeInTheDocument();
  });

  it('applies correct dark mode classes', () => {
    const { container } = render(<AuthHero />);
    const gradientOverlay = container.querySelector('.bg-gradient-to-t');
    
    expect(gradientOverlay).toHaveClass('dark:from-background', 'dark:to-background/80');
  });

  it('maintains accessibility in both themes', () => {
    render(<AuthHero />);
    const heroSection = screen.getByRole('complementary');
    
    expect(heroSection).toHaveAttribute('aria-label', 'auth.heroSection');
  });
});

