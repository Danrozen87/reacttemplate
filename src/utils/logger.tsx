/**
 * @utility logger
 * @description Centralized logging utility for consistent error handling and monitoring
 */

import { useTranslation } from 'react-i18next';
import { toast } from '@/hooks/use-toast';
import { ToastActionElement, ToastAction } from '@/components/ui/toast';

type LogLevel = 'info' | 'warn' | 'error';
type ErrorType = 
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

interface ToastOptions {
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface LogOptions {
  context?: string;
  data?: Record<string, unknown>;
  timestamp?: boolean;
  errorType?: ErrorType;
  showToast?: boolean;
  toastOptions?: ToastOptions;
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

const DEFAULT_TOAST_DURATION = 5000; // 5 seconds

const createToastAction = (action: ToastOptions['action']): ToastActionElement | undefined => {
  if (!action) return undefined;
  
  return (
    <ToastAction 
      onClick={action.onClick}
      altText={`Action: ${action.label}`}
    >
      {action.label}
    </ToastAction>
  );
};

const isProduction = process.env.NODE_ENV === 'production';

const errorTrackingService = {
  captureError: (error: Error | string, context?: Record<string, unknown>) => {
    if (isProduction) {
      console.warn('Error tracking service not implemented:', { error, context });
    }
  }
};

export const logger = {
  info: (message: string, options?: LogOptions) => {
    console.info(formatMessage('info', message, options), options?.data || '');
    
    if (options?.showToast) {
      toast({
        title: message,
        description: options?.toastOptions?.description,
        duration: options?.toastOptions?.duration ?? DEFAULT_TOAST_DURATION,
        action: options?.toastOptions?.action ? createToastAction(options.toastOptions.action) : undefined,
        variant: "default"
      });
    }
  },
  
  warn: (message: string, options?: LogOptions) => {
    console.warn(formatMessage('warn', message, options), options?.data || '');
    
    if (options?.showToast) {
      toast({
        title: message,
        description: options?.toastOptions?.description,
        duration: options?.toastOptions?.duration ?? DEFAULT_TOAST_DURATION,
        action: options?.toastOptions?.action ? createToastAction(options.toastOptions.action) : undefined,
        variant: "default"
      });
    }
  },
  
  error: (message: string, options?: LogOptions) => {
    const formattedMessage = formatMessage('error', message, options);
    console.error(formattedMessage, options?.data || '');
    
    errorTrackingService.captureError(formattedMessage, options?.data);
    
    if (options?.showToast) {
      toast({
        title: message,
        description: options?.toastOptions?.description,
        duration: options?.toastOptions?.duration ?? DEFAULT_TOAST_DURATION,
        action: options?.toastOptions?.action ? createToastAction(options.toastOptions.action) : undefined,
        variant: "destructive"
      });
    }
  }
} as const;

export const useLogger = () => {
  const { t } = useTranslation();
  
  return {
    ...logger,
    error: (message: string, options?: LogOptions) => {
      const translatedMessage = options?.errorType 
        ? t(`logger.errors.${options.errorType}`)
        : message;
        
      logger.error(translatedMessage, options);
    }
  };
};

export type Logger = typeof logger;
