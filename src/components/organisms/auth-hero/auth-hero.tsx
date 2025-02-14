
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

/**
 * @component AuthHero
 * @description Hero section for the authentication page featuring alternating background 
 * images and inspirational quote with proper accessibility and responsive design.
 */
export function AuthHero() {
  const { t } = useTranslation();

  return (
    <div 
      className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r
        transition-all duration-300 ease-in-out"
      role="complementary"
      aria-label={t("auth.heroSection")}
    >
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/dec206da-ce5b-47f3-bf86-10af90d620a6.png"
          alt={t("auth.heroImageAlt")}
          className="h-full w-full object-cover"
          style={{ objectPosition: '-300px center' }}
          role="presentation"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div 
        className={`relative z-20 mt-auto ${animations.modal.content.enter}`}
        role="region"
        aria-label={t("auth.heroQuoteSection")}
      >
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
