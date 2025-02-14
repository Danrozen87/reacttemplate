
import { AuthFormHeader } from "./auth-form-header";
import { AuthFormContent } from "./auth-form-content";
import { animations } from "@/utils/animations";

/**
 * @component AuthFormContainer
 * @description Container component for authentication form with role-based access control
 */
export function AuthFormContainer() {
  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <AuthFormHeader />
      <AuthFormContent />
    </div>
  );
}

