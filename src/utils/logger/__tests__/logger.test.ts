
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { logger, useLogger } from '../index';
import { renderHook } from '@testing-library/react';
import { toast } from '@/hooks/use-toast';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

vi.mock('@/hooks/use-toast', () => ({
  toast: vi.fn(),
}));

describe('logger utility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'info').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('Basic logging', () => {
    it('logs info messages with correct format', () => {
      const message = 'Test info message';
      logger.info(message);
      expect(console.info).toHaveBeenCalledWith('[INFO] Test info message', '');
    });

    it('includes context when provided', () => {
      const message = 'Test with context';
      logger.warn(message, { context: 'UserService' });
      expect(console.warn).toHaveBeenCalledWith('[WARN] [UserService] Test with context', '');
    });

    it('includes timestamp when requested', () => {
      const message = 'Test with timestamp';
      logger.error(message, { timestamp: true });
      expect(console.error).toHaveBeenCalledWith(
        expect.stringMatching(/\[ERROR\] \[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z\] Test with timestamp/),
        ''
      );
    });
  });

  describe('Toast functionality', () => {
    it('shows toast when showToast is true', () => {
      const message = 'Test toast message';
      logger.info(message, { showToast: true });
      expect(toast).toHaveBeenCalledWith({
        title: message,
        duration: 5000,
        variant: 'default'
      });
    });

    it('includes toast description when provided', () => {
      const message = 'Test toast message';
      const description = 'Additional details';
      logger.info(message, { 
        showToast: true,
        toastOptions: { description }
      });
      expect(toast).toHaveBeenCalledWith({
        title: message,
        description,
        duration: 5000,
        variant: 'default'
      });
    });
  });

  describe('Translation integration', () => {
    it('translates error messages when errorType is provided', () => {
      const { result } = renderHook(() => useLogger());
      const message = 'Test error';
      result.current.error(message, { errorType: 'network', showToast: true });
      
      expect(console.error).toHaveBeenCalledWith(
        '[ERROR] logger.errors.network',
        ''
      );
      
      expect(toast).toHaveBeenCalledWith({
        title: 'logger.errors.network',
        duration: 5000,
        variant: 'destructive'
      });
    });
  });
});
