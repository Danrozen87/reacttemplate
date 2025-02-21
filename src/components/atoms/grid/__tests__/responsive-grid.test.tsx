
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ResponsiveGrid } from '../responsive-grid';

describe('ResponsiveGrid', () => {
  const renderGrid = (props = {}) => 
    render(<ResponsiveGrid {...props}><div>Item</div></ResponsiveGrid>);

  it('applies default classes correctly', () => {
    const { container } = renderGrid();
    const grid = container.firstChild;

    ['grid', 'gap-4', 'grid-cols-1', 'sm:grid-cols-2', 
     'md:grid-cols-3', 'lg:grid-cols-4'].forEach(className => {
      expect(grid).toHaveClass(className);
    });
  });

  it('applies correct ARIA attributes', () => {
    const { container } = renderGrid({
      gridLabel: 'Custom grid label',
      gridRole: 'list'
    });
    
    const grid = container.firstChild;
    expect(grid).toHaveAttribute('role', 'list');
    expect(grid).toHaveAttribute('aria-label', 'Custom grid label');
  });

  it('uses default grid role when not specified', () => {
    const { container } = renderGrid();
    expect(container.firstChild).toHaveAttribute('role', 'grid');
  });

  it('applies custom gap class', () => {
    const { container } = renderGrid({ gap: 'lg' });
    expect(container.firstChild).toHaveClass('gap-6');
  });

  it('merges custom className', () => {
    const { container } = renderGrid({ className: 'test-class' });
    expect(container.firstChild).toHaveClass('test-class');
  });
});
