
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MailIcon, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { animations } from "@/utils/animations";
import { useAuthSubmit } from "@/hooks/use-auth-submit";

interface PasswordRecoveryFormProps {
  onBack: () => void;
}

export function PasswordRecoveryForm({ onBack }: PasswordRecoveryFormProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleRecovery } = useAuthSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await handleRecovery(email);
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
          {t("auth.recovery.title")}
        </h1>
        <p className="text-sm text-muted-foreground font-poppins font-light">
          {t("auth.recovery.description")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            id="email"
            type="email"
            placeholder={t("auth.recovery.emailPlaceholder")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-poppins"
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
