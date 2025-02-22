
import type { ToasterToast } from "@/hooks/toast/toast-types";

export interface AuthFormProps {
  className?: string;
}

export interface AuthFormFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  onForgotPassword: () => void;
}

export interface AuthFormFooterProps {
  onSignUp: () => void;
}

export interface AuthFormContentProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  setIsRecoveryMode: (value: boolean) => void;
  setIsSignUpMode: (value: boolean) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export type UserRole = 'admin' | 'manager' | 'user';

export interface AuthResponse {
  role: UserRole;
}

export interface AuthFormState {
  email: string;
  isSubmitting: boolean;
  isRecoveryMode: boolean;
  isSignUpMode: boolean;
}

export type AuthToastConfig = Omit<ToasterToast, "id">;
