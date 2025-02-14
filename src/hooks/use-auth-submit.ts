
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useToast } from "./use-toast";
import { supabase } from "@/integrations/supabase/client";

interface UseAuthSubmitReturn {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleRecovery: (email: string) => Promise<boolean>;
  handleSignUp: (email: string, password: string) => Promise<boolean>;
}

export function useAuthSubmit(): UseAuthSubmitReturn {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const password = formData.get('password') as string;
      const rememberMe = formData.get('remember') === 'on';

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
          data: { remember_me: rememberMe }
        }
      });

      if (error) throw error;

      // Store the remember me preference
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      toast({
        title: t("auth.loginSuccess"),
        description: t("auth.welcome"),
        duration: 3000,
        variant: "default",
        className: "bg-background text-foreground border-accent",
      });

      // Navigate to dashboard after successful login
      navigate("/dashboard");
    } catch (error: any) {
      console.error('Auth error:', error);
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

  const handleRecovery = async (email: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) throw error;

      toast({
        title: t("auth.recovery.emailSent"),
        description: t("auth.recovery.checkInbox"),
        duration: 5000,
      });

      return true;
    } catch (error: any) {
      console.error('Recovery error:', error);
      toast({
        title: t("auth.recovery.error"),
        description: error.message || t("auth.recovery.tryAgain"),
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSignUp = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        }
      });

      if (error) throw error;

      toast({
        title: t("auth.signup.success"),
        description: t("auth.signup.checkEmail"),
        duration: 5000,
      });

      return true;
    } catch (error: any) {
      console.error('Signup error:', error);
      toast({
        title: t("auth.signup.error"),
        description: error.message || t("auth.signup.tryAgain"),
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
    handleSignUp,
  };
}
