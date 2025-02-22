
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
