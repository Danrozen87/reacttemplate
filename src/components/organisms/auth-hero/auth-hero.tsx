
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";
import { cn } from "@/lib/utils";

export function AuthHero() {
  const { t } = useTranslation("auth-hero");

  return (
    <div 
      className={cn(
        "relative h-full flex-col text-white",
        "bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5",
        "overflow-hidden",
        animations.modal.content.enter
      )}
      role="complementary"
      aria-label={t("auth.heroSection")}
    >
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/dec206da-ce5b-47f3-bf86-10af90d620a6.png"
          alt={t("auth.heroImageAlt")}
          className={cn(
            "h-full w-full object-cover",
            "scale-105 hover:scale-100",
            "transition-transform duration-700 ease-in-out"
          )}
          loading="eager"
        />
      </div>
      <div 
        className={cn(
          "relative z-20 h-full flex flex-col justify-end",
          "p-8 sm:p-10",
          "bg-gradient-to-t from-black/60 via-black/40 to-transparent",
          animations.modal.content.enter
        )}
      >
        <blockquote className={cn(
          "space-y-3 max-w-lg",
          "transform transition-all duration-500",
          "hover:translate-x-2"
        )}>
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            &ldquo;{t("auth.heroQuote")}&rdquo;
          </p>
          <footer className="text-base sm:text-lg text-white/90">
            &mdash; {t("auth.heroAuthor")}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
