
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AuthSocialButtons } from "./auth-social-buttons";

interface AuthFormFooterProps {
  onSignUpClick: () => void;
}

export function AuthFormFooter({ onSignUpClick }: AuthFormFooterProps) {
  const { t } = useTranslation();

  return (
    <>
      <AuthSocialButtons />
      <p className="text-center text-sm text-muted-foreground font-poppins font-light">
        {t("auth.noAccount")}{" "}
        <Button 
          variant="link" 
          className="font-medium text-primary p-0 font-poppins"
          onClick={onSignUpClick}
        >
          {t("auth.signUpNow")}
        </Button>
      </p>
    </>
  );
}
