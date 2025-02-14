
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthSubmit } from "@/hooks/use-auth-submit";
import { animations } from "@/utils/animations";
import { AuthFormHeader } from "./auth-form-header";
import { AuthFormFields } from "./auth-form-fields";
import { AuthFormFooter } from "./auth-form-footer";
import { PasswordRecoveryForm } from "./password-recovery-form";
import { SignUpForm } from "./sign-up-form";
import { useTranslation } from "react-i18next";

export function AuthForm() {
  const { t } = useTranslation();
  const [isRecoveryMode, setIsRecoveryMode] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const { email, setEmail, isSubmitting, handleSubmit } = useAuthSubmit();
  const navigate = useNavigate();

  if (isRecoveryMode) {
    return (
      <PasswordRecoveryForm 
        onBack={() => setIsRecoveryMode(false)} 
      />
    );
  }

  if (isSignUpMode) {
    return (
      <SignUpForm
        onBack={() => setIsSignUpMode(false)}
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
        <AuthFormFooter 
          onSignUpClick={() => setIsSignUpMode(true)}
        />
      </form>
    </div>
  );
}
