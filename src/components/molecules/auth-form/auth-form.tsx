
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthPasswordInput } from "./auth-password-input";
import { AuthSocialButtons } from "./auth-social-buttons";
import { animations } from "@/utils/animations";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock authentication - in real implementation, this would verify credentials and role
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

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("auth.welcome")}
        </h2>
        <p className="text-muted-foreground">
          {t("auth.signInToContinue")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t("auth.emailOrPhone")}</Label>
          <Input
            id="email"
            type="text"
            placeholder={t("auth.emailOrPhonePlaceholder")}
            className="bg-muted/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <AuthPasswordInput />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("auth.rememberMe")}
            </label>
          </div>
          <Button
            variant="link"
            className="text-sm font-medium text-primary"
          >
            {t("auth.forgotPassword")}
          </Button>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("auth.signingIn") : t("auth.signIn")}
        </Button>

        <AuthSocialButtons />

        <p className="text-center text-sm text-muted-foreground">
          {t("auth.noAccount")}{" "}
          <Button variant="link" className="font-medium text-primary p-0">
            {t("auth.signUpNow")}
          </Button>
        </p>
      </form>
    </div>
  );
}
