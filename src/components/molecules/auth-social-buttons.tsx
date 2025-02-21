
/**
 * @component AuthSocialButtons
 * @description Social media login buttons for authentication
 */
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";

export function AuthSocialButtons() {
  const { t } = useTranslation("auth-social-buttons");

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground font-poppins">
            {t("auth.orContinueWith")}
          </span>
        </div>
      </div>

      <Button 
        variant="outline" 
        type="button" 
        className="font-poppins"
      >
        <Github className="mr-2 h-4 w-4" />
        {t("auth.signInWithGithub")}
      </Button>
    </div>
  );
}
