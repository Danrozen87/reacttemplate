
/**
 * @utility logger
 * @description Centralized logging utility for consistent error handling and monitoring
 */

import { useTranslation } from 'react-i18next';
import { toast } from '@/components/ui/use-toast';

type LogLevel = 'info' | 'warn' | 'error';
type ErrorType = 'generic' | 'network' | 'validation' | 'unauthorized' | 'notFound' | 'server';

interface LogOptions {
  context?: string;
  data?: Record<string, unknown>;
  timestamp?: boolean;
  errorType?: ErrorType;
  showToast?: boolean;
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

// Error tracking service (replace with your preferred service)
const errorTrackingService = {
  captureError: (error: Error | string, context?: Record<string, unknown>) => {
    if (isProduction) {
      // Integration point for services like Sentry, LogRocket, etc.
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
        variant: "default"
      });
    }
  },
  
  warn: (message: string, options?: LogOptions) => {
    console.warn(formatMessage('warn', message, options), options?.data || '');
    
    if (options?.showToast) {
      toast({
        title: message,
        variant: "default" // Changed from "warning" to "default"
      });
    }
  },
  
  error: (message: string, options?: LogOptions) => {
    const formattedMessage = formatMessage('error', message, options);
    console.error(formattedMessage, options?.data || '');
    
    // Capture error in tracking service
    errorTrackingService.captureError(formattedMessage, options?.data);
    
    if (options?.showToast) {
      toast({
        title: message,
        variant: "destructive"
      });
    }
  }
} as const;

// React hook for using logger with i18n
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

// Type for consuming code
export type Logger = typeof logger;
