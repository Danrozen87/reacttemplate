
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '../../../../test/test-utils';
import { AuthHero } from '../auth-hero';

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
    expect(screen.getByText(/beautiful experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Einstein/i)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<AuthHero />);
    expect(screen.getByRole('complementary')).toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
