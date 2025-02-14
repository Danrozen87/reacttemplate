
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

export function AuthLogo() {
  const { t } = useTranslation();
  
  return (
    <div className={`flex items-center gap-2 ${animations.modal.content.enter}`}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full" />
      </div>
      <span className="font-monoton text-xl">Plotline</span>
    </div>
  );
}

