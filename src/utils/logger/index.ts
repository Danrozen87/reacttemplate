
import { LogOptions } from './types';
import { formatMessage } from './format-utils';
import { errorTrackingService } from './error-tracking';

export const logger = {
  info: (message: string, options?: LogOptions) => {
    console.info(formatMessage('info', message, options), options?.data || '');
  },
  
  warn: (message: string, options?: LogOptions) => {
    console.warn(formatMessage('warn', message, options), options?.data || '');
  },
  
  error: (message: string, options?: LogOptions) => {
    const formattedMessage = formatMessage('error', message, options);
    console.error(formattedMessage, options?.data || '');
    errorTrackingService.captureError(formattedMessage, options?.data);
  }
} as const;

export const useLogger = () => {
  return {
    ...logger,
    error: (message: string, options?: LogOptions) => {
      logger.error(message, options);
    }
  };
};

export type { LogLevel, ErrorType, LogOptions, Logger } from './types';
