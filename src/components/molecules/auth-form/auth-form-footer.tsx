
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AuthSocialButtons } from "./auth-social-buttons";

/**
 * @component AuthFormFooter
 * @description Footer section of the authentication form with social login and signup link
 */
export function AuthFormFooter() {
  const { t } = useTranslation();

  return (
    <>
      <AuthSocialButtons />
      <p className="text-center text-sm text-muted-foreground font-poppins font-light">
        {t("auth.noAccount")}{" "}
        <Button variant="link" className="font-medium text-primary p-0 font-poppins">
          {t("auth.signUpNow")}
        </Button>
      </p>
    </>
  );
}
