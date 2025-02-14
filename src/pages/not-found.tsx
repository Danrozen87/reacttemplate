
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground transition-colors duration-300">
      <div className={`text-center px-4 sm:px-6 lg:px-8 max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] ${animations.modal.content.enter}`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground dark:text-foreground">
          {t("pages.notFound.title")}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground mb-4">
          {t("pages.notFound.message")}
        </p>
        <a 
          href="/" 
          className="text-primary hover:text-primary/80 underline transition-colors duration-200"
        >
          {t("pages.notFound.returnHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
