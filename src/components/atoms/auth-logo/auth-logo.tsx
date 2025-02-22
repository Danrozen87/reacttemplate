
import { animations } from "@/utils/animations";

export function AuthLogo() {
  return (
    <div className={animations.modal.content.enter}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full" />
      </div>
      <span className="font-bold text-xl">Plotline</span>
    </div>
  );
}
