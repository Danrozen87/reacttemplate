
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
    console.log("Starting login process for:", email);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const password = formData.get('password') as string;
      const rememberMe = formData.get('remember') === 'on';

      console.log("Attempting to sign in...");
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
          data: { remember_me: rememberMe }
        }
      });

      if (error) {
        console.error("Login error:", error);
        
        if (error.message.includes('Too many auth attempts')) {
          toast({
            title: t("auth.rateLimitExceeded"),
            description: t("auth.tryAgainLater"),
            variant: "destructive",
            duration: 5000,
          });
        } else if (error.message.includes('Invalid login credentials')) {
          toast({
            title: t("auth.invalidCredentials"),
            description: t("auth.checkEmailPassword"),
            variant: "destructive",
            duration: 3000,
          });
        } else {
          toast({
            title: t("auth.loginError"),
            description: error.message || t("auth.tryAgain"),
            variant: "destructive",
            duration: 3000,
          });
        }
        return;
      }

      console.log("Login successful, user:", data.user?.id);

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

      navigate("/dashboard");
    } catch (error: any) {
      console.error('Unexpected auth error:', error);
      toast({
        title: t("auth.unexpectedError"),
        description: t("auth.tryAgainLater"),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecovery = async (email: string): Promise<boolean> => {
    console.log("Starting password recovery for:", email);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        console.error("Recovery error:", error);
        
        if (error.message.includes('Too many auth attempts')) {
          toast({
            title: t("auth.rateLimitExceeded"),
            description: t("auth.tryAgainLater"),
            variant: "destructive",
            duration: 5000,
          });
        } else {
          toast({
            title: t("auth.recovery.error"),
            description: error.message || t("auth.recovery.tryAgain"),
            variant: "destructive",
          });
        }
        return false;
      }

      console.log("Recovery email sent successfully");
      toast({
        title: t("auth.recovery.emailSent"),
        description: t("auth.recovery.checkInbox"),
        duration: 5000,
      });

      return true;
    } catch (error: any) {
      console.error('Unexpected recovery error:', error);
      toast({
        title: t("auth.recovery.error"),
        description: error.message || t("auth.recovery.tryAgain"),
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSignUp = async (email: string, password: string): Promise<boolean> => {
    console.log("Starting signup process for:", email);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            email: email
          }
        }
      });

      if (error) {
        console.error("Signup error:", error);
        
        if (error.message.includes('Too many auth attempts')) {
          toast({
            title: t("auth.rateLimitExceeded"),
            description: t("auth.tryAgainLater"),
            variant: "destructive",
            duration: 5000,
          });
        } else if (error.message.includes('already registered')) {
          toast({
            title: t("auth.signup.userExists"),
            description: t("auth.signup.tryLogin"),
            variant: "destructive",
          });
        } else {
          toast({
            title: t("auth.signup.error"),
            description: error.message || t("auth.signup.tryAgain"),
            variant: "destructive",
          });
        }
        return false;
      }

      console.log("Signup successful, user:", data.user?.id);
      toast({
        title: t("auth.signup.success"),
        description: t("auth.signup.checkEmail"),
        duration: 5000,
      });

      return true;
    } catch (error: any) {
      console.error('Unexpected signup error:', error);
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
