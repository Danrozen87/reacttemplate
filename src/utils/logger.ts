
/**
 * @utility logger
 * @description Centralized logging utility for consistent error handling and monitoring
 */

type LogLevel = 'info' | 'warn' | 'error';

interface LogOptions {
  context?: string;
  data?: Record<string, unknown>;
  timestamp?: boolean;
}

const formatMessage = (level: LogLevel, message: string, options?: LogOptions): string => {
  const parts = [
    `[${level.toUpperCase()}]`,
    options?.timestamp ? `[${new Date().toISOString()}]` : '',
    options?.context ? `[${options.context}]` : '',
    message
  ];
  
  return parts.filter(Boolean).join(' ');
};

const isProduction = process.env.NODE_ENV === 'production';

export const logger = {
  info: (message: string, options?: LogOptions) => {
    console.info(formatMessage('info', message, options), options?.data || '');
  },
  warn: (message: string, options?: LogOptions) => {
    console.warn(formatMessage('warn', message, options), options?.data || '');
  },
  error: (message: string, options?: LogOptions) => {
    // Always log errors, even in production
    console.error(formatMessage('error', message, options), options?.data || '');
    
    // In production, you might want to send errors to an error tracking service
    if (isProduction) {
      // TODO: Integrate with error tracking service
      // errorTrackingService.captureError(message, options?.data);
    }
  }
} as const;

// Type for consuming code
export type Logger = typeof logger;
