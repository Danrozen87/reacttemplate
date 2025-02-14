
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

/**
 * @component AuthHero
 * @description Hero section for the authentication page with background image and quote
 */
export function AuthHero() {
  const { t } = useTranslation();

  return (
    <div 
      className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r"
      role="complementary"
      aria-label={t("auth.heroSection")}
    >
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/cc2c564c-0d65-46a7-97ae-b00e0abde3d0.png"
          alt={t("auth.heroImageAlt")}
          className="h-full w-full object-cover opacity-90 dark:opacity-70 transition-opacity duration-300"
          role="presentation"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 dark:from-background dark:to-background/80" />
      </div>
      <div className={`relative z-20 mt-auto ${animations.modal.content.enter}`}>
        <blockquote className="space-y-2">
          <p className="text-lg font-poppins font-light">
            {t("auth.heroQuote")}
          </p>
          <footer className="text-sm font-poppins">
            {t("auth.heroAuthor")}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
