
import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAuthFormState } from '../auth-form-state';

vi.mock('@/hooks/toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str
  })
}));

describe('useAuthFormState', () => {
  it('initializes with default values', () => {
    const { result } = renderHook(() => useAuthFormState());

    expect(result.current.email).toBe('');
    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.isRecoveryMode).toBe(false);
    expect(result.current.isSignUpMode).toBe(false);
  });

  it('updates email value', () => {
    const { result } = renderHook(() => useAuthFormState());

    act(() => {
      result.current.setEmail('test@example.com');
    });

    expect(result.current.email).toBe('test@example.com');
  });

  it('handles form submission', async () => {
    const { result } = renderHook(() => useAuthFormState());
    const mockEvent = { preventDefault: vi.fn() };

    await act(async () => {
      await result.current.handleSubmit(mockEvent as any);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(result.current.isSubmitting).toBe(false);
  });

  it('toggles recovery mode', () => {
    const { result } = renderHook(() => useAuthFormState());

    act(() => {
      result.current.setIsRecoveryMode(true);
    });

    expect(result.current.isRecoveryMode).toBe(true);
  });
});
