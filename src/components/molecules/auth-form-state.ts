
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/toast";
import type { AuthFormState, AuthResponse, AuthToastConfig, UserRole } from "./auth-form/types";
import type { ToasterToast } from "@/hooks/toast/toast-types";

export const useAuthFormState = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isRecoveryMode, setIsRecoveryMode] = useState<boolean>(false);
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mockAuthResponse: AuthResponse = {
        role: determineUserRole(email)
      };

      const toastConfig: Omit<ToasterToast, "id"> = {
        title: t("auth.loginSuccess"),
        description: t(`auth.roleAssigned.${mockAuthResponse.role}`),
        duration: 3000,
        variant: "default",
        className: "bg-background text-foreground border-accent",
        "aria-live": "polite",
      };

      toast(toastConfig);
    } catch (error) {
      const errorToastConfig: Omit<ToasterToast, "id"> = {
        title: t("auth.loginError"),
        description: t("auth.tryAgain"),
        variant: "destructive",
        duration: 3000,
        "aria-live": "assertive",
      };

      toast(errorToastConfig);
    } finally {
      setIsSubmitting(false);
    }
  };

  const determineUserRole = (email: string): UserRole => {
    if (email.includes('admin')) return 'admin';
    if (email.includes('manager')) return 'manager';
    return 'user';
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
};
