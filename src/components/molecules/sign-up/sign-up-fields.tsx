
import { useTranslation } from "react-i18next";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SignUpFieldsProps {
  isSubmitting: boolean;
}

export function SignUpFields({ isSubmitting }: SignUpFieldsProps) {
  const { t } = useTranslation("sign-up-form");
  
  const companySizes = [
    { value: "0-10", label: "0-10" },
    { value: "10-50", label: "10-50" },
    { value: "50-100", label: "50-100" },
    { value: "100+", label: "100+" },
  ];

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
                {`${size.label} ${t("auth.signup.employees")}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
