
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useViewport } from '../use-viewport';
import { BREAKPOINT_VALUES } from '@/constants/breakpoints';

describe('useViewport', () => {
  const mockResizeEvent = vi.fn();

  beforeEach(() => {
    global.window.innerWidth = BREAKPOINT_VALUES.md;
    global.window.innerHeight = 800;
    
    // Fix: Use correct event listener type
    global.window.addEventListener = vi.fn((
      event: keyof WindowEventMap,
      listener: EventListenerOrEventListenerObject
    ) => {
      if (event === 'resize') {
        mockResizeEvent.mockImplementation(() => {
          if (typeof listener === 'function') {
            listener({} as Event);
          } else {
            listener.handleEvent({} as Event);
          }
        });
      }
    });
    
    global.window.removeEventListener = vi.fn();
  });

  it('detects mobile viewport correctly', () => {
    global.window.innerWidth = BREAKPOINT_VALUES.sm - 1;
    const { result } = renderHook(() => useViewport());
    expect(result.current.isMobile).toBe(true);
    expect(result.current.viewport).toBe('xs');
  });

  it('detects tablet viewport correctly', () => {
    global.window.innerWidth = BREAKPOINT_VALUES.md;
    const { result } = renderHook(() => useViewport());
    expect(result.current.isTablet).toBe(true);
    expect(result.current.viewport).toBe('md');
  });

  it('detects desktop viewport correctly', () => {
    global.window.innerWidth = BREAKPOINT_VALUES.lg;
    const { result } = renderHook(() => useViewport());
    expect(result.current.isDesktop).toBe(true);
    expect(result.current.viewport).toBe('lg');
  });

  it('updates on resize', () => {
    const { result } = renderHook(() => useViewport());
    global.window.innerWidth = BREAKPOINT_VALUES.xl;
    mockResizeEvent();
    expect(result.current.viewport).toBe('xl');
  });

  it('cleans up event listener on unmount', () => {
    const { unmount } = renderHook(() => useViewport());
    unmount();
    expect(global.window.removeEventListener).toHaveBeenCalled();
  });
});
