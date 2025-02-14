
/**
 * @module logger-types
 * @description Type definitions for the logging system
 */

import type { ToastOptions } from "@/types/toast";

export type LogLevel = "info" | "warn" | "error";

export type ErrorType = 
  | "generic"
  | "network"
  | "validation"
  | "unauthorized"
  | "notFound"
  | "server"
  | "timeout"
  | "rateLimited"
  | "database"
  | "sync"
  | "upload"
  | "download"
  | "format"
  | "conflict"
  | "maintenance";

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
