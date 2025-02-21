
import { useTranslation } from "react-i18next";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { CompanySizeSelect } from "./company-size-select";

interface SignUpFieldsProps {
  isSubmitting: boolean;
}

export function SignUpFields({ isSubmitting }: SignUpFieldsProps) {
  const { t } = useTranslation("sign-up-form");

  return (
    <>
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

      <CompanySizeSelect isSubmitting={isSubmitting} />
    </>
  );
}
