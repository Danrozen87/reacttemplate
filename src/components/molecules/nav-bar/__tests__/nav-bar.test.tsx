
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../../test/test-utils';
import { NavBar } from '../nav-bar';

describe('NavBar', () => {
  it('renders navigation landmark', () => {
    render(<NavBar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('includes theme switcher', () => {
    render(<NavBar />);
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeButton).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<NavBar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label');
  });
});
