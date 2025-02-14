
import { render, screen } from '@testing-library/react';
import { AuthLogo } from '../auth-logo';

describe('AuthLogo', () => {
  it('renders the logo and brand name', () => {
    render(<AuthLogo />);
    expect(screen.getByText('UI Unicorn')).toBeInTheDocument();
  });

  it('has correct animation classes', () => {
    const { container } = render(<AuthLogo />);
    expect(container.firstChild).toHaveClass('animate-modal-in');
  });
});
