
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "./use-toast";
import { supabase } from "@/integrations/supabase/client";

interface UseAuthSubmitReturn {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleRecovery: (email: string) => Promise<void>;
}

/**
 * @hook useAuthSubmit
 * @description Custom hook to handle authentication form submission logic with Supabase
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
      const formData = new FormData(e.target as HTMLFormElement);
      const password = formData.get('password') as string;

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: t("auth.loginSuccess"),
        description: t("auth.welcome"),
        duration: 3000,
        variant: "default",
        className: "bg-background text-foreground border-accent",
      });
    } catch (error: any) {
      toast({
        title: t("auth.loginError"),
        description: error.message || t("auth.tryAgain"),
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecovery = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/auth/reset-password',
      });

      if (error) throw error;

      toast({
        title: t("auth.recovery.emailSent"),
        description: t("auth.recovery.checkInbox"),
        duration: 5000,
      });

      return true;
    } catch (error: any) {
      toast({
        title: t("auth.recovery.error"),
        description: error.message || t("auth.recovery.tryAgain"),
        variant: "destructive",
      });
      return false;
    }
  };

  return {
    email,
    setEmail,
    isSubmitting,
    handleSubmit,
    handleRecovery,
  };
}
