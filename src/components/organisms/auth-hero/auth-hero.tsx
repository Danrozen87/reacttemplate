
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

/**
 * @component AuthHero
 * @description Hero section for the authentication page featuring a background 
 * image and inspirational quote with proper accessibility and responsive design.
 * 
 * @accessibility
 * - Uses semantic HTML structure
 * - Provides ARIA labels for all sections
 * - Ensures proper contrast ratios
 * - Background image is decorative with role="presentation"
 * 
 * @responsive
 * - Hidden on mobile/tablet (<1024px)
 * - Full-height display on desktop
 * - Responsive image loading with proper sizing
 * - Maintains readability across viewport sizes
 * 
 * @theming
 * - Supports dark/light mode with smooth transitions
 * - Uses theme-compliant gradients and overlays
 * - Maintains accessibility in both themes
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
          src="/lovable-uploads/cc2c564c-0d65-46a7-97ae-b00e0abde3d0.png"
          alt={t("auth.heroImageAlt")}
          className="h-full w-full object-cover opacity-90 dark:opacity-70 
            transition-opacity duration-300 ease-in-out"
          role="presentation"
          loading="eager"
          fetchPriority="high"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-background to-background/60 
            dark:from-background dark:to-background/80
            transition-colors duration-300 ease-in-out"
          aria-hidden="true"
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
