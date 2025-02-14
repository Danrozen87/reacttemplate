
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { animations } from "@/utils/animations";
import { ArrowLeft } from "lucide-react";

interface SignUpFormProps {
  onBack: () => void;
}

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
    { value: "0-10", label: t("auth.signup.companySizes.small") },
    { value: "10-50", label: t("auth.signup.companySizes.medium") },
    { value: "50-100", label: t("auth.signup.companySizes.large") },
    { value: "100+", label: t("auth.signup.companySizes.enterprise") },
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
            <Label htmlFor="firstName">{t("auth.signup.firstName")}</Label>
            <Input
              id="firstName"
              placeholder={t("auth.signup.firstNamePlaceholder")}
              required
              disabled={isSubmitting}
              className="font-poppins bg-input shadow-sm border-input-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{t("auth.signup.lastName")}</Label>
            <Input
              id="lastName"
              placeholder={t("auth.signup.lastNamePlaceholder")}
              required
              disabled={isSubmitting}
              className="font-poppins bg-input shadow-sm border-input-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t("auth.signup.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("auth.signup.emailPlaceholder")}
            required
            disabled={isSubmitting}
            className="font-poppins bg-input shadow-sm border-input-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">{t("auth.signup.companyName")}</Label>
          <Input
            id="companyName"
            placeholder={t("auth.signup.companyNamePlaceholder")}
            required
            disabled={isSubmitting}
            className="font-poppins bg-input shadow-sm border-input-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companySize">{t("auth.signup.companySize")}</Label>
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
          {t("auth.recovery.backToLogin")}
        </Button>
      </form>
    </div>
  );
}
