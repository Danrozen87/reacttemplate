
import { ReactNode } from 'react';

export interface AuthFormProps {
  children?: ReactNode;
  className?: string;
}

export type UserRole = 'admin' | 'manager' | 'user';

export interface AuthFormState {
  email: string;
  isSubmitting: boolean;
  isRecoveryMode: boolean;
  isSignUpMode: boolean;
}

export interface AuthResponse {
  role: UserRole;
  token?: string;
}

export interface AuthFormFields {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  onForgotPassword: () => void;
}

export interface AuthFormContainerProps {
  children: ReactNode;
  className?: string;
}

// Matching the allowed toast variants from shadcn/ui
export type ToastVariant = 'default' | 'destructive';

export interface AuthToastConfig {
  title: string;
  description?: string;
  duration?: number;
  variant: ToastVariant;
  className?: string;
  'aria-live': 'polite' | 'assertive';
}
