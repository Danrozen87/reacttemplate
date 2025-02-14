
/**
 * @module logger-types
 * @description Type definitions for the logging and toast notification system
 */

export type LogLevel = "info" | "warn" | "error";

/**
 * @description Defines the types of errors that can occur in the application
 */
export type ErrorType = 
  | "generic"     // General errors
  | "network"     // Network-related errors
  | "validation"  // Form validation errors
  | "unauthorized" // Authentication errors
  | "notFound"    // Resource not found
  | "server"      // Server-side errors
  | "timeout"     // Request timeout
  | "rateLimited" // API rate limit exceeded
  | "database"    // Database errors
  | "sync"        // Synchronization errors
  | "upload"      // File upload errors
  | "download"    // File download errors
  | "format"      // Data format errors
  | "conflict"    // Data conflict errors
  | "maintenance"; // System maintenance

/**
 * @interface ToastOptions
 * @description Configuration options for toast notifications
 */
export interface ToastOptions {
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * @interface LogOptions
 * @description Configuration options for logging
 */
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
