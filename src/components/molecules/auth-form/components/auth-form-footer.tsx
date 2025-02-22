
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AuthSocialButtons } from "../../auth-social-buttons";
import type { AuthFormFooterProps } from "../types";

export function AuthFormFooter({ onSignUp }: AuthFormFooterProps) {
  const { t } = useTranslation("auth-form-fields");

  return (
    <>
      <AuthSocialButtons />
      <p className="text-center text-sm text-muted-foreground font-poppins font-light">
        {t("auth.noAccount")}{" "}
        <Button 
          variant="link" 
          className="font-medium text-primary p-0 font-poppins"
          onClick={onSignUp}
        >
          {t("auth.signUpNow")}
        </Button>
      </p>
    </>
  );
}
