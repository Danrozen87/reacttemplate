
import { animations } from "@/utils/animations";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthFormContainerProps {
  children: ReactNode;
}

export function AuthFormContainer({ children }: AuthFormContainerProps) {
  return (
    <div className={cn(
      "w-full max-w-[420px] space-y-8",
      "px-4 sm:px-6",
      "relative",
      "before:absolute before:-inset-1 before:bg-gradient-to-r",
      "before:from-primary/10 before:via-accent/5 before:to-secondary/10",
      "before:rounded-xl before:blur-xl before:opacity-0",
      "hover:before:opacity-100 before:transition-opacity before:duration-500",
      "before:-z-10",
      animations.modal.content.enter
    )}>
      {children}
    </div>
  );
}
