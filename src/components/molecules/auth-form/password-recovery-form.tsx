
/**
 * @component PasswordRecoveryForm
 * @description Handles the password recovery flow with email verification
 */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MailIcon, ArrowLeft } from "lucide-react";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { animations } from "@/utils/animations";

interface PasswordRecoveryFormProps {
  onBack: () => void;
}

export function PasswordRecoveryForm({ onBack }: PasswordRecoveryFormProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock recovery email send
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: t("auth.recovery.emailSent"),
        description: t("auth.recovery.checkInbox"),
        duration: 5000,
      });
      onBack();
    } catch (error) {
      toast({
        title: t("auth.recovery.error"),
        description: t("auth.recovery.tryAgain"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`space-y-6 ${animations.modal.content.enter}`}>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight font-poppins">
          {t("auth.recovery.title")}
        </h1>
        <p className="text-sm text-muted-foreground font-poppins font-light">
          {t("auth.recovery.description")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <AuthLabel htmlFor="recovery-email" required>
            {t("auth.email")}
          </AuthLabel>
          <AuthInput
            id="recovery-email"
            type="email"
            placeholder={t("auth.recovery.emailPlaceholder")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          className="w-full font-poppins"
          disabled={isSubmitting}
        >
          <MailIcon className="mr-2 h-4 w-4" />
          {t("auth.recovery.sendInstructions")}
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="w-full font-poppins"
          onClick={onBack}
          disabled={isSubmitting}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("auth.recovery.backToLogin")}
        </Button>
      </form>
    </div>
  );
}
