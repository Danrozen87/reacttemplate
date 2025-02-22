
import { animations } from "@/utils/animations";
import { AuthFormFields } from "./auth-form-fields";
import { AuthFormFooter } from "./auth-form-footer";
import type { AuthFormContentProps } from "./types";
import { cn } from "@/lib/utils";

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
      className={cn(
        "space-y-4 bg-card p-4 sm:p-6",
        "rounded-lg border border-border",
        "shadow-sm hover:shadow-md transition-shadow duration-200",
        animations.modal.content.enter
      )}
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
