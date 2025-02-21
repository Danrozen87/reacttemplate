
/**
 * @component AuthFormState
 * @description Custom hook for managing authentication form state
 */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/toast";

export function useAuthFormState() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecoveryMode, setIsRecoveryMode] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);

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
      });
    } catch (error) {
      toast({
        title: t("auth.loginError"),
        description: t("auth.tryAgain"),
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    isSubmitting,
    isRecoveryMode,
    setIsRecoveryMode,
    isSignUpMode,
    setIsSignUpMode,
    handleSubmit,
  };
}
