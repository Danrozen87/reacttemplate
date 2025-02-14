
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";
import { useEffect, useState } from "react";

/**
 * @component AuthHero
 * @description Hero section for the authentication page featuring alternating background 
 * images and inspirational quote with proper accessibility and responsive design.
 */
export function AuthHero() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState("/lovable-uploads/997c580c-3303-4d43-92b8-157886dca0e7.png");

  useEffect(() => {
    // Get current page load count from localStorage
    const loadCount = parseInt(localStorage.getItem('pageLoadCount') || '0');
    
    // Increment the count
    const newCount = loadCount + 1;
    localStorage.setItem('pageLoadCount', newCount.toString());
    
    // Switch image every 10 loads (0-9 first image, 10-19 second image, etc)
    const shouldUseSecondImage = Math.floor(newCount / 10) % 2 === 1;
    setCurrentImage(shouldUseSecondImage 
      ? "/lovable-uploads/3c06e17b-d40f-4233-9b25-18e27a30107d.png"
      : "/lovable-uploads/997c580c-3303-4d43-92b8-157886dca0e7.png"
    );
  }, []);

  return (
    <div 
      className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r
        transition-all duration-300 ease-in-out"
      role="complementary"
      aria-label={t("auth.heroSection")}
    >
      <div className="absolute inset-0">
        <img
          src={currentImage}
          alt={t("auth.heroImageAlt")}
          className="h-full w-full object-cover"
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
        <blockquote className="space-y-3 bg-black/80 p-8 rounded-xl backdrop-blur-sm border-l-4 border-primary shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <div className="relative">
            <span className="absolute -top-10 -left-6 text-6xl text-primary font-serif rotate-12">"</span>
            <p className="text-xl font-poppins font-light text-white leading-relaxed pl-6 italic">
              {t("auth.heroQuote")}
            </p>
            <span className="absolute bottom-0 right-4 text-6xl text-primary/40 font-serif rotate-12">"</span>
          </div>
          <footer className="text-base font-poppins text-primary/90 pl-6 font-medium">
            — {t("auth.heroAuthor")}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
