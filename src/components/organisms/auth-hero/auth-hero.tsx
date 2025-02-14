
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
  const [currentImage, setCurrentImage] = useState("/lovable-uploads/4ccb9c72-95ec-4d07-9b1f-64eded2300be.png");

  useEffect(() => {
    // Get current page load count from localStorage
    const loadCount = parseInt(localStorage.getItem('pageLoadCount') || '0');
    
    // Increment the count
    const newCount = loadCount + 1;
    localStorage.setItem('pageLoadCount', newCount.toString());
    
    // Switch image every 10 loads (0-9 first image, 10-19 second image, etc)
    const shouldUseSecondImage = Math.floor(newCount / 10) % 2 === 1;
    setCurrentImage(shouldUseSecondImage 
      ? "/lovable-uploads/dec206da-ce5b-47f3-bf86-10af90d620a6.png"
      : "/lovable-uploads/4ccb9c72-95ec-4d07-9b1f-64eded2300be.png"
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
          style={{ objectPosition: '200px center' }}
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
