
import { animations } from "@/utils/animations";
import { AuthFormHeader } from "./auth-form-header";
import { AuthFormFields } from "./auth-form-fields";
import { AuthFormFooter } from "./auth-form-footer";
import { PasswordRecoveryForm } from "./password-recovery-form";
import { useAuthFormState } from "./auth-form-state";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * @component AuthForm
 * @description Authentication form with role-based access control
 * @roles
 * - Admin: Full system access
 * - Manager: Team management access
 * - User: Personal access
 */
export function AuthForm() {
  const {
    email,
    setEmail,
    isSubmitting,
    isRecoveryMode,
    setIsRecoveryMode,
    handleSubmit,
  } = useAuthFormState();

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  if (isRecoveryMode) {
    return (
      <PasswordRecoveryForm 
        onBack={() => setIsRecoveryMode(false)} 
      />
    );
  }

  // We'll show a message for now since signup form is not implemented yet
  if (isSignUpMode) {
    return (
      <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
        <h2 className="text-2xl font-semibold tracking-tight">Sign Up Coming Soon</h2>
        <p className="text-muted-foreground">
          We're working on the signup functionality. Please check back later.
        </p>
        <Button 
          variant="link" 
          onClick={() => setIsSignUpMode(false)}
          className="font-medium text-primary p-0 font-poppins"
        >
          Back to Login
        </Button>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <AuthFormHeader />
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthFormFields 
          email={email}
          setEmail={setEmail}
          isSubmitting={isSubmitting}
          onForgotPassword={() => setIsRecoveryMode(true)}
        />
        <AuthFormFooter onSignUp={() => setIsSignUpMode(true)} />
      </form>
    </div>
  );
}
