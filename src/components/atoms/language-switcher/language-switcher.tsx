
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

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    toast({
      description: t("common.languageChanged"),
      duration: 3000,
      className: "bg-background text-foreground border-accent",
      // Adding proper accessibility attributes
      ariaLive: "polite",
      role: "status",
    });
  };

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
              i18n.language === lang.code ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
