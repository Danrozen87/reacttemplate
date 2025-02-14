
import { useTranslation } from "react-i18next";
import { AuthInput } from "@/components/atoms/auth-input/auth-input";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CompanyInfoProps {
  isSubmitting: boolean;
}

/**
 * @component CompanyInfo
 * @description Company information form fields for user registration
 */
export function CompanyInfo({ isSubmitting }: CompanyInfoProps) {
  const { t } = useTranslation();

  const companySizes = [
    { value: "0-10", label: "0-10 employees" },
    { value: "10-50", label: "10-50 employees" },
    { value: "50-100", label: "50-100 employees" },
    { value: "100+", label: "100+ employees" },
  ];

  return (
    <div className="space-y-4">
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
    </div>
  );
}
