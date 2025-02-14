
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { animations } from "@/utils/animations";
import { AuthFormHeader } from "./auth-form-header";
import { AuthFormFields } from "./auth-form-fields";
import { AuthFormFooter } from "./auth-form-footer";
import { PasswordRecoveryForm } from "./password-recovery-form";
import type { AuthFormProps, AuthFormState } from "./types";

/**
 * @component AuthForm
 * @description Authentication form with role-based access control
 * @roles
 * - Admin: Full system access
 * - Manager: Team management access
 * - User: Personal access
 */
export function AuthForm({ className }: AuthFormProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formState, setFormState] = useState<AuthFormState>({
    email: "",
    isSubmitting: false,
    isRecoveryMode: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));

    try {
      const mockAuthResponse = {
        role: formState.email.includes('admin') ? 'admin' : 
              formState.email.includes('manager') ? 'manager' : 'user'
      };

      toast({
        title: t("auth.loginSuccess"),
        description: t(`auth.roleAssigned.${mockAuthResponse.role}`),
        duration: 3000,
        variant: "default",
        className: "bg-background text-foreground border-accent",
      });

    } catch (error) {
      toast({
        title: t("auth.loginError"),
        description: t("auth.tryAgain"),
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  if (formState.isRecoveryMode) {
    return (
      <PasswordRecoveryForm 
        onBack={() => setFormState(prev => ({ ...prev, isRecoveryMode: false }))} 
      />
    );
  }

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter} ${className || ''}`}>
      <AuthFormHeader />
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthFormFields 
          email={formState.email}
          setEmail={(email) => setFormState(prev => ({ ...prev, email }))}
          isSubmitting={formState.isSubmitting}
          onForgotPassword={() => setFormState(prev => ({ ...prev, isRecoveryMode: true }))}
        />
        <AuthFormFooter />
      </form>
    </div>
  );
}
