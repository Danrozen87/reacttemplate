
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
        animations.modal.content.enter
      )}
      role="complementary"
      aria-label={t("auth.heroSection")}
    >
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/dec206da-ce5b-47f3-bf86-10af90d620a6.png"
          alt={t("auth.heroImageAlt")}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div 
        className={cn(
          "relative z-20 h-full flex flex-col justify-end",
          "p-6 sm:p-8 md:p-10",
          "bg-gradient-to-t from-black/50 to-transparent",
          animations.modal.content.enter
        )}
      >
        <blockquote className="space-y-2 max-w-lg">
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed">
            &ldquo;{t("auth.heroQuote")}&rdquo;
          </p>
          <footer className="text-sm sm:text-base text-white/90">
            &mdash; {t("auth.heroAuthor")}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
