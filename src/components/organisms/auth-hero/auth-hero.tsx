
import { useTranslation } from "react-i18next";
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo";
import { animations } from "@/utils/animations";

export function AuthHero() {
  const { t } = useTranslation();

  return (
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/cc2c564c-0d65-46a7-97ae-b00e0abde3d0.png"
          alt={t("auth.heroImageAlt")}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60" />
      </div>
      <div className="relative z-20 flex items-center text-lg font-medium">
        <AuthLogo />
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">
            {t("auth.heroQuote")}
          </p>
          <footer className="text-sm">{t("auth.heroAuthor")}</footer>
        </blockquote>
      </div>
    </div>
  );
}
