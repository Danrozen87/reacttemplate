
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  isSubmitting: boolean;
  onBack: () => void;
}

/**
 * @component FormActions
 * @description Action buttons for the signup form
 */
export function FormActions({ isSubmitting, onBack }: FormActionsProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <Button
        type="submit"
        className="w-full font-poppins"
        disabled={isSubmitting}
      >
        {isSubmitting ? t("auth.signup.creating") : t("auth.signup.create")}
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
    </div>
  );
}
