
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import type { AuthFormFooterProps } from "./types";

export function AuthFormFooter({ onSignUp }: AuthFormFooterProps) {
  const { t } = useTranslation("auth-form-footer");

  return (
    <div className="flex flex-col space-y-4 text-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t("auth.orContinueWith")}
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        onClick={onSignUp}
        className="font-poppins"
      >
        {t("auth.signUp")}
      </Button>
    </div>
  );
}
