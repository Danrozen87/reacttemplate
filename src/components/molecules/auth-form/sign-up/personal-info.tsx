
import { useTranslation } from "react-i18next";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";

interface PersonalInfoProps {
  isSubmitting: boolean;
}

/**
 * @component PersonalInfo 
 * @description Personal information form fields for user registration
 */
export function PersonalInfo({ isSubmitting }: PersonalInfoProps) {
  const { t } = useTranslation();

  return (
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
      <div className="col-span-2 space-y-2">
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
    </div>
  );
}
