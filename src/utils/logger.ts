
/**
 * @utility logger
 * @description Centralized logging utility for consistent error handling
 */
type LogLevel = 'info' | 'warn' | 'error';

interface LogOptions {
  context?: string;
  data?: unknown;
}

export const logger = {
  info: (message: string, options?: LogOptions) => {
    console.info(`[INFO] ${options?.context ? `[${options.context}] ` : ''}${message}`, options?.data || '');
  },
  warn: (message: string, options?: LogOptions) => {
    console.warn(`[WARN] ${options?.context ? `[${options.context}] ` : ''}${message}`, options?.data || '');
  },
  error: (message: string, options?: LogOptions) => {
    console.error(`[ERROR] ${options?.context ? `[${options.context}] ` : ''}${message}`, options?.data || '');
  }
} as const;
