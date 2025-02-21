
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AuthFormContainer } from '../auth-form-container';

describe('AuthFormContainer', () => {
  it('renders children with correct styling', () => {
    const { container } = render(
      <AuthFormContainer>
        <div data-testid="test-child">Test Content</div>
      </AuthFormContainer>
    );

    expect(container.firstChild).toHaveClass('w-full', 'max-w-md', 'space-y-6');
    expect(container.firstChild).toHaveClass(expect.stringContaining('animate'));
  });

  it('maintains accessibility attributes', () => {
    const { container } = render(
      <AuthFormContainer>
        <button>Test Button</button>
      </AuthFormContainer>
    );

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
