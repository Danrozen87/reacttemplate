
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";
import { cn } from "@/lib/utils";

export function AuthHero() {
  const { t } = useTranslation("auth-hero");

  return (
    <div 
      className={cn(
        "relative h-full flex-col p-10 text-white",
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
          "relative z-20 mt-auto",
          animations.modal.content.enter
        )}
      >
        <blockquote className="space-y-2">
          <p className="text-lg">
            {t("auth.heroQuote")}
          </p>
          <footer className="text-sm">
            - {t("auth.heroAuthor")}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
