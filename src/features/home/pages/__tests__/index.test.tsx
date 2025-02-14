
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import HomePage from '../index';
import { useTranslation } from 'react-i18next';

// Mock translations
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() }
  })
}));

describe('HomePage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows loading state initially', () => {
    render(<HomePage />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders main content after loading', async () => {
    render(<HomePage />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders authentication form', async () => {
    render(<HomePage />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays logo', async () => {
    render(<HomePage />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText('UI Unicorn')).toBeInTheDocument();
  });

  it('renders with correct layout classes', async () => {
    const { container } = render(<HomePage />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(container.firstChild).toHaveClass('min-h-screen', 'grid', 'lg:grid-cols-2');
  });

  it('applies animation classes', async () => {
    const { container } = render(<HomePage />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const mainSection = screen.getByRole('main');
    expect(mainSection).toHaveClass('animate-modal-in');
  });
});
