
import { useState } from "react";
import { useAuthSubmit } from "@/hooks/use-auth-submit";
import { animations } from "@/utils/animations";
import { AuthFormHeader } from "./auth-form-header";
import { AuthFormFields } from "./auth-form-fields";
import { AuthFormFooter } from "./auth-form-footer";
import { PasswordRecoveryForm } from "./password-recovery-form";

/**
 * @component AuthForm
 * @description Authentication form with role-based access control
 * @roles
 * - Admin: Full system access
 * - Manager: Team management access
 * - User: Personal access
 */
export function AuthForm() {
  const [isRecoveryMode, setIsRecoveryMode] = useState(false);
  const { email, setEmail, isSubmitting, handleSubmit } = useAuthSubmit();

  if (isRecoveryMode) {
    return (
      <PasswordRecoveryForm 
        onBack={() => setIsRecoveryMode(false)} 
      />
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
        <AuthFormFooter />
      </form>
    </div>
  );
}
