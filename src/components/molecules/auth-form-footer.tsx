
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AuthSocialButtons } from "./auth-social-buttons";

interface AuthFormFooterProps {
  onSignUp?: () => void;
}

/**
 * @component AuthFormFooter
 * @description Footer section of the authentication form with social login and signup link
 */
export function AuthFormFooter({ onSignUp }: AuthFormFooterProps) {
  const { t } = useTranslation();

  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSignUp?.();
  };

  return (
    <>
      <AuthSocialButtons />
      <p className="text-center text-sm text-muted-foreground font-poppins font-light">
        {t("auth.noAccount")}{" "}
        <Button 
          variant="link" 
          className="font-medium text-primary p-0 font-poppins"
          onClick={handleSignUpClick}
        >
          {t("auth.signUpNow")}
        </Button>
      </p>
    </>
  );
}
