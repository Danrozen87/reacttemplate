
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
import BaseLayout from '../base-layout';

describe('BaseLayout', () => {
  it('renders children content', () => {
    render(
      <BaseLayout>
        <div data-testid="test-content">Test Content</div>
      </BaseLayout>
    );
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  it('includes navigation bar', () => {
    render(
      <BaseLayout>
        <div>Content</div>
      </BaseLayout>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('wraps content in main tag with correct classes', () => {
    render(
      <BaseLayout>
        <div>Content</div>
      </BaseLayout>
    );
    const main = screen.getByRole('main');
    expect(main).toHaveClass('container', 'mx-auto', 'px-4', 'py-8');
  });

  it('maintains responsive layout structure', () => {
    render(
      <BaseLayout>
        <div>Content</div>
      </BaseLayout>
    );
    const layoutWrapper = screen.getByRole('main').parentElement;
    expect(layoutWrapper).toHaveClass('min-h-screen', 'bg-background');
  });
});
