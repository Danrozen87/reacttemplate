
/**
 * @component AuthForm
 * @description Authentication form with role-based access control
 */
import { AuthFormContainer } from "./auth-form-container";
import { AuthFormHeader } from "../auth-form-header";
import { AuthFormFields } from "../auth-form-fields";
import { AuthFormFooter } from "../auth-form-footer";
import { PasswordRecoveryForm } from "../password-recovery-form";
import { SignUpForm } from "../sign-up/sign-up-form"; // Updated import path

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
      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border border-border">
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
