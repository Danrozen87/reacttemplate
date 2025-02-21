
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResponsiveGrid } from '../responsive-grid';

describe('ResponsiveGrid', () => {
  it('renders children correctly', () => {
    render(
      <ResponsiveGrid>
        <div>Item 1</div>
        <div>Item 2</div>
      </ResponsiveGrid>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies correct default classes', () => {
    const { container } = render(
      <ResponsiveGrid>
        <div>Item</div>
      </ResponsiveGrid>
    );

    const grid = container.firstChild;
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('gap-4');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('sm:grid-cols-2');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('lg:grid-cols-4');
  });

  it('applies custom gap class', () => {
    const { container } = render(
      <ResponsiveGrid gap="lg">
        <div>Item</div>
      </ResponsiveGrid>
    );

    expect(container.firstChild).toHaveClass('gap-6');
  });

  it('applies custom columns configuration', () => {
    const { container } = render(
      <ResponsiveGrid
        columns={{
          xs: 2,
          md: 4,
          xl: 6
        }}
      >
        <div>Item</div>
      </ResponsiveGrid>
    );

    const grid = container.firstChild;
    expect(grid).toHaveClass('grid-cols-2');
    expect(grid).toHaveClass('md:grid-cols-4');
    expect(grid).toHaveClass('xl:grid-cols-6');
  });

  it('merges custom className', () => {
    const { container } = render(
      <ResponsiveGrid className="custom-class">
        <div>Item</div>
      </ResponsiveGrid>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});
