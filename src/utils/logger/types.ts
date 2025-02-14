
export type LogLevel = 'info' | 'warn' | 'error';

export type ErrorType = 
  | 'generic' 
  | 'network' 
  | 'validation' 
  | 'unauthorized' 
  | 'notFound' 
  | 'server'
  | 'timeout'
  | 'rateLimited'
  | 'database'
  | 'sync'
  | 'upload'
  | 'download'
  | 'format'
  | 'conflict'
  | 'maintenance';

export interface ToastOptions {
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface LogOptions {
  context?: string;
  data?: Record<string, unknown>;
  timestamp?: boolean;
  errorType?: ErrorType;
  showToast?: boolean;
  toastOptions?: ToastOptions;
}

export type Logger = {
  info: (message: string, options?: LogOptions) => void;
  warn: (message: string, options?: LogOptions) => void;
  error: (message: string, options?: LogOptions) => void;
};
