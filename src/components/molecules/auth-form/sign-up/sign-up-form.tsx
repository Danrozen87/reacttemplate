
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PersonalInfo } from "./personal-info";
import { CompanyInfo } from "./company-info";
import { FormActions } from "./form-actions";
import { animations } from "@/utils/animations";

interface SignUpFormProps {
  onBack: () => void;
}

/**
 * @component SignUpForm
 * @description Main container component for the signup form, orchestrating all subcomponents
 */
export function SignUpForm({ onBack }: SignUpFormProps) {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Signup logic would go here
    setIsSubmitting(false);
  };

  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight font-poppins">
          {t("auth.signup.title")}
        </h2>
        <p className="text-sm text-muted-foreground font-poppins font-light">
          {t("auth.signup.description")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <PersonalInfo isSubmitting={isSubmitting} />
        <CompanyInfo isSubmitting={isSubmitting} />
        <FormActions isSubmitting={isSubmitting} onBack={onBack} />
      </form>
    </div>
  );
}
