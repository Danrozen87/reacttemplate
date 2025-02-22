
export interface AuthFormProps {}

export interface AuthFormFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  onForgotPassword: () => void;
}

export interface AuthFormFooterProps {
  onSignUp: () => void;
}

export interface AuthFormState {
  email: string;
  isSubmitting: boolean;
  isRecoveryMode: boolean;
  isSignUpMode: boolean;
}

export interface AuthResponse {
  role: UserRole;
}

export type UserRole = 'admin' | 'manager' | 'user';

export interface AuthToastConfig {
  title: string;
  description: string;
  duration: number;
  variant: 'default' | 'destructive';
}
