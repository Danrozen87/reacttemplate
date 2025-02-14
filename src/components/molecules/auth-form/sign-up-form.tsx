
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { animations } from "@/utils/animations";

interface SignUpFormProps {
  onBack: () => void;
}

/**
 * @component SignUpForm
 * @description A comprehensive signup form component that handles new user registration
 * with company information collection. Implements full i18n support and accessibility features.
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

  const companySizes = [
    { value: "0-10", label: "0-10 employees" },
    { value: "10-50", label: "10-50 employees" },
    { value: "50-100", label: "50-100 employees" },
    { value: "100+", label: "100+ employees" },
  ];

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
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <AuthLabel htmlFor="firstName" required>
              {t("auth.signup.firstName")}
            </AuthLabel>
            <AuthInput
              id="firstName"
              placeholder={t("auth.signup.firstNamePlaceholder")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <AuthLabel htmlFor="lastName" required>
              {t("auth.signup.lastName")}
            </AuthLabel>
            <AuthInput
              id="lastName"
              placeholder={t("auth.signup.lastNamePlaceholder")}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <AuthLabel htmlFor="signup-email" required>
            {t("auth.signup.email")}
          </AuthLabel>
          <AuthInput
            id="signup-email"
            type="email"
            placeholder={t("auth.signup.emailPlaceholder")}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <AuthLabel htmlFor="companyName" required>
            {t("auth.signup.companyName")}
          </AuthLabel>
          <AuthInput
            id="companyName"
            placeholder={t("auth.signup.companyNamePlaceholder")}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <AuthLabel htmlFor="companySize" required>
            {t("auth.signup.companySize")}
          </AuthLabel>
          <Select disabled={isSubmitting}>
            <SelectTrigger className="w-full font-poppins bg-input shadow-sm border-input-border">
              <SelectValue placeholder={t("auth.signup.companySizePlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              {companySizes.map((size) => (
                <SelectItem 
                  key={size.value} 
                  value={size.value}
                  className="font-poppins"
                >
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

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
      </form>
    </div>
  );
}
