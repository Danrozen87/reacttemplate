
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
        "space-y-6",
        "bg-card p-6 sm:p-8",
        "rounded-xl border border-border",
        "shadow-sm hover:shadow-md",
        "transition-all duration-300 ease-in-out",
        "backdrop-blur-sm bg-background/80",
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
