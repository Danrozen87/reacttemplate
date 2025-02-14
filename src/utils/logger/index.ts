
import { useTranslation } from 'react-i18next';
import { LogOptions } from './types';
import { formatMessage } from './format-utils';
import { showToast } from './toast-utils';
import { errorTrackingService } from './error-tracking';

export const logger = {
  info: (message: string, options?: LogOptions) => {
    console.info(formatMessage('info', message, options), options?.data || '');
    
    if (options?.showToast) {
      showToast(message, options.toastOptions);
    }
  },
  
  warn: (message: string, options?: LogOptions) => {
    console.warn(formatMessage('warn', message, options), options?.data || '');
    
    if (options?.showToast) {
      showToast(message, options.toastOptions);
    }
  },
  
  error: (message: string, options?: LogOptions) => {
    const formattedMessage = formatMessage('error', message, options);
    console.error(formattedMessage, options?.data || '');
    
    errorTrackingService.captureError(formattedMessage, options?.data);
    
    if (options?.showToast) {
      showToast(message, options.toastOptions, 'destructive');
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

export type { LogLevel, ErrorType, ToastOptions, LogOptions, Logger } from './types';
