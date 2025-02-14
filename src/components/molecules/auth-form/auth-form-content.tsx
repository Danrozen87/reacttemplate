
import { PasswordRecoveryForm } from "./password-recovery-form";
import { SignUpForm } from "./sign-up-form";
import { AuthFormFields } from "./auth-form-fields";
import { AuthFormFooter } from "./auth-form-footer";
import { useAuthFormState } from "./auth-form-state";

/**
 * @component AuthFormContent
 * @description Content component for authentication form handling different modes
 */
export function AuthFormContent() {
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
    <form onSubmit={handleSubmit} className="space-y-4">
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

