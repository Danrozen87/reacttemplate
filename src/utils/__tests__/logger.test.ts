
import { describe, it, expect, vi } from 'vitest';
import { logger, useLogger } from '../logger';
import { renderHook } from '@testing-library/react';
import { toast } from '@/components/ui/use-toast';

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

// Mock toast
vi.mock('@/components/ui/use-toast', () => ({
  toast: vi.fn(),
}));

describe('logger utility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'info').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should log info messages with correct format', () => {
    const message = 'Test info message';
    logger.info(message);
    expect(console.info).toHaveBeenCalledWith('[INFO] Test info message', '');
  });

  it('should include context when provided', () => {
    const message = 'Test with context';
    const context = 'UserService';
    logger.warn(message, { context });
    expect(console.warn).toHaveBeenCalledWith('[WARN] [UserService] Test with context', '');
  });

  it('should include timestamp when requested', () => {
    const message = 'Test with timestamp';
    logger.error(message, { timestamp: true });
    expect(console.error).toHaveBeenCalledWith(
      expect.stringMatching(/\[ERROR\] \[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z\] Test with timestamp/),
      ''
    );
  });

  it('should handle data objects correctly', () => {
    const message = 'Test with data';
    const data = { userId: 123, action: 'test' };
    logger.info(message, { data });
    expect(console.info).toHaveBeenCalledWith('[INFO] Test with data', { userId: 123, action: 'test' });
  });

  it('should show toast when showToast option is true', () => {
    const message = 'Test toast message';
    logger.info(message, { showToast: true });
    expect(toast).toHaveBeenCalledWith({
      title: message,
      variant: 'default'
    });
  });

  it('should translate error messages when errorType is provided', () => {
    const { result } = renderHook(() => useLogger());
    const message = 'Test error';
    result.current.error(message, { errorType: 'network', showToast: true });
    
    expect(console.error).toHaveBeenCalledWith(
      '[ERROR] logger.errors.network',
      ''
    );
    
    expect(toast).toHaveBeenCalledWith({
      title: 'logger.errors.network',
      variant: 'destructive'
    });
  });
});
