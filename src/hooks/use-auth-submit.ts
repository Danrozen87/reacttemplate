
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "./use-toast";

interface UseAuthSubmitReturn {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

/**
 * @hook useAuthSubmit
 * @description Custom hook to handle authentication form submission logic
 * @returns {UseAuthSubmitReturn} Auth form state and handlers
 */
export function useAuthSubmit(): UseAuthSubmitReturn {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return {
    email,
    setEmail,
    isSubmitting,
    handleSubmit,
  };
}
