
import { animations } from "@/utils/animations";
import { AuthFormFields } from "./auth-form-fields";
import { AuthFormFooter } from "./auth-form-footer";
import type { AuthFormContentProps } from "./types";

export function AuthFormContent({
  email,
  setEmail,
  isSubmitting,
  setIsRecoveryMode,
  setIsSignUpMode,
  handleSubmit,
}: AuthFormContentProps) {
  return (
    <form 
      onSubmit={handleSubmit} 
      className={`space-y-4 bg-card p-6 rounded-lg border border-border ${animations.modal.content.enter}`}
    >
      <AuthFormFields 
        email={email}
        setEmail={setEmail}
        isSubmitting={isSubmitting}
        onForgotPassword={() => setIsRecoveryMode(true)}
      />
      <AuthFormFooter onSignUp={() => setIsSignUpMode(true)} />
    </form>
  );
}
