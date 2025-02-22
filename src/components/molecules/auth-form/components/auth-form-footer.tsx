
import { useTranslation } from "react-i18next";
import { AuthSocialButtons } from "../../auth-social-buttons";
import type { AuthFormFooterProps } from "../types";

export function AuthFormFooter({ onSignUp }: AuthFormFooterProps) {
  const { t } = useTranslation("auth-form-footer");

  return (
    <div className="space-y-4">
      <AuthSocialButtons />
      <div className="text-center text-sm">
        <button
          type="button"
          onClick={onSignUp}
          className="text-primary hover:underline font-poppins"
        >
          {t("auth.form.footer.signUp")}
        </button>
      </div>
    </div>
  );
}
