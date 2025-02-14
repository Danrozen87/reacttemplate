
import { describe, it, expect, vi } from 'vitest';
import { logger } from '../logger';

describe('logger utility', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    
    // Mock console methods
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
});
