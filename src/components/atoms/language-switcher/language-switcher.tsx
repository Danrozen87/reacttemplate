
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { animations } from "@/utils/animations";
import { useToast } from "@/hooks/use-toast";
import { logger } from "@/utils/logger";
import { useCallback } from "react";

/**
 * @component LanguageSwitcher
 * @description Language selection dropdown with animation and accessibility support
 */
export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const { toast } = useToast();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'sv', label: 'Svenska' },
    { code: 'da', label: 'Dansk' },
    { code: 'nl', label: 'Nederlands' }
  ];

  const handleLanguageChange = useCallback((langCode: string) => {
    if (i18n.language === langCode) return;

    // Change language
    i18n.changeLanguage(langCode).then(() => {
      // Show success toast after language change
      toast({
        description: t("common.languageChanged"),
      });
      
      logger.info(`Language changed to ${langCode}`, {
        context: 'LanguageSwitcher',
        data: { previousLang: i18n.language, newLang: langCode }
      });
    }).catch((error) => {
      logger.error(`Failed to change language to ${langCode}`, {
        context: 'LanguageSwitcher',
        data: { error }
      });
      
      toast({
        variant: "destructive",
        description: "Failed to change language. Please try again.",
      });
    });
  }, [i18n, t, toast]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`${animations.modal.content.enter}`}
          aria-label={t("common.selectLanguage")}
        >
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`${animations.modal.content.enter} bg-background`}
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer ${
              i18n.language === lang.code ? "bg-accent" : ""
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
