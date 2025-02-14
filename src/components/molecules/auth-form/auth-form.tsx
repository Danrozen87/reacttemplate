
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
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
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecoveryMode, setIsRecoveryMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mockAuthResponse = {
        role: email.includes('admin') ? 'admin' : 
              email.includes('manager') ? 'manager' : 'user'
      };

      toast({
        title: t("auth.loginSuccess"),
        description: t(`auth.roleAssigned.${mockAuthResponse.role}`),
        duration: 3000,
        variant: "default",
        className: "bg-background text-foreground border-accent",
        "aria-live": "polite",
      });

    } catch (error) {
      toast({
        title: t("auth.loginError"),
        description: t("auth.tryAgain"),
        variant: "destructive",
        duration: 3000,
        "aria-live": "assertive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
