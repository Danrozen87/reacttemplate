
/**
 * @component AuthForm
 * @description Authentication form with role-based access control
 */
import { AuthFormContainer } from "./auth-form-container";
import { AuthFormHeader } from "./auth-form-header";
import { AuthFormContent } from "./auth-form-content";
import { PasswordRecoveryForm } from "../password-recovery-form";
import { SignUpForm } from "../sign-up-form";
import { useAuthFormState } from "./auth-form-state";

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
      <AuthFormContent 
        email={email}
        setEmail={setEmail}
        isSubmitting={isSubmitting}
        setIsRecoveryMode={setIsRecoveryMode}
        setIsSignUpMode={setIsSignUpMode}
        handleSubmit={handleSubmit}
      />
    </AuthFormContainer>
  );
}
