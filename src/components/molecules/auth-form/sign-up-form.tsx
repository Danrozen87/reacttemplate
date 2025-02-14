
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { animations } from "@/utils/animations";
import { useAuthSubmit } from "@/hooks/use-auth-submit";

interface SignUpFormProps {
  onBack: () => void;
}

export function SignUpForm({ onBack }: SignUpFormProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSignUp } = useAuthSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const success = await handleSignUp(email, password);
      if (success) {
        onBack();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`space-y-6 ${animations.modal.content.enter}`}>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight font-poppins">
          {t("auth.signup.title")}
        </h1>
        <p className="text-sm text-muted-foreground font-poppins font-light">
          {t("auth.signup.description")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
        <div className="space-y-2">
          <Input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t("auth.signup.emailPlaceholder")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-poppins"
            disabled={isSubmitting}
            aria-label={t("auth.signup.emailPlaceholder")}
          />
        </div>

        <div className="space-y-2">
          <Input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder={t("auth.signup.passwordPlaceholder")}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-poppins"
            disabled={isSubmitting}
            aria-label={t("auth.signup.passwordPlaceholder")}
            minLength={6}
          />
        </div>

        <Button
          type="submit"
          className="w-full font-poppins"
          disabled={isSubmitting}
        >
          {t("auth.signup.submit")}
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="w-full font-poppins"
          onClick={onBack}
          disabled={isSubmitting}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("auth.signup.backToLogin")}
        </Button>
      </form>
    </div>
  );
}
