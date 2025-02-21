
import { useTranslation } from "react-i18next";
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CompanySizeSelectProps {
  isSubmitting: boolean;
}

export function CompanySizeSelect({ isSubmitting }: CompanySizeSelectProps) {
  const { t } = useTranslation("sign-up-form");
  
  const companySizes = [
    { value: "0-10", label: "0-10" },
    { value: "10-50", label: "10-50" },
    { value: "50-100", label: "50-100" },
    { value: "100+", label: "100+" },
  ];

  return (
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
  );
}
