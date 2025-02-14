
import { render, screen } from '@testing-library/react';
import { AuthHero } from '../auth-hero';

describe('AuthHero', () => {
  it('renders hero image with correct alt text', () => {
    render(<AuthHero />);
    const image = screen.getByAltText(/serene lighthouse/i);
    expect(image).toBeInTheDocument();
  });

  it('displays quote and author', () => {
    render(<AuthHero />);
    expect(screen.getByText(/Albert Einstein/i)).toBeInTheDocument();
  });

  it('includes logo component', () => {
    render(<AuthHero />);
    expect(screen.getByText('UI Unicorn')).toBeInTheDocument();
  });
});
