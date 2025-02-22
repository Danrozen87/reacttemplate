
/**
 * @component AuthForm
 * @description Authentication form with role-based access control
 */
import { AuthFormContainer } from "./auth-form-container";
import { AuthFormHeader } from "./components/auth-form-header";
import { AuthFormFields } from "./components/auth-form-fields";
import { AuthFormFooter } from "./components/auth-form-footer";
import { PasswordRecoveryForm } from "../password-recovery-form";
import { SignUpForm } from "../sign-up-form";
import { useAuthFormState } from "./auth-form-state";
import { animations } from "@/utils/animations";

export function AuthForm() {
  const {
    email,
    setEmail,
    isSubmitting,
    isRecoveryMode,
    setIsRecoveryMode,
    isSignUpMode,
    setIsSignUpMode,
    handleSubmit,
  } = useAuthFormState();

  if (isRecoveryMode) {
    return <PasswordRecoveryForm onBack={() => setIsRecoveryMode(false)} />;
  }

  if (isSignUpMode) {
    return <SignUpForm onBack={() => setIsSignUpMode(false)} />;
  }

  return (
    <AuthFormContainer>
      <AuthFormHeader />
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
    </AuthFormContainer>
  );
}
