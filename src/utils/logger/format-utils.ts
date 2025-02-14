
import { LogLevel, LogOptions } from './types';

export const formatMessage = (level: LogLevel, message: string, options?: LogOptions): string => {
  const parts = [
    `[${level.toUpperCase()}]`,
    options?.timestamp ? `[${new Date().toISOString()}]` : '',
    options?.context ? `[${options.context}]` : '',
    message
  ];
  
  return parts.filter(Boolean).join(' ');
};
