
import { animations } from "@/utils/animations";
import { cn } from "@/lib/utils";

interface AuthLogoProps {
  className?: string;
}

export function AuthLogo({ className }: AuthLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", animations.modal.content.enter, className)}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full" />
      </div>
      <span className="font-bold text-xl font-poppins">Plotline</span>
    </div>
  );
}
