
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/test-utils';
import { NavBar } from '../nav-bar';

describe('NavBar', () => {
  it('renders navigation bar with branding', () => {
    render(<NavBar />);
    const brand = screen.getByText('Clean Slate');
    expect(brand).toBeInTheDocument();
  });

  it('renders theme switcher', () => {
    render(<NavBar />);
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeButton).toBeInTheDocument();
  });

  it('has correct semantic structure', () => {
    render(<NavBar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('border-b');
  });

  it('maintains responsive container', () => {
    render(<NavBar />);
    const container = screen.getByRole('navigation').querySelector('.container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('flex', 'h-14');
  });
});
