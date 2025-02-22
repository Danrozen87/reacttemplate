
import { animations } from "@/utils/animations";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthFormContainerProps {
  children: ReactNode;
}

export function AuthFormContainer({ children }: AuthFormContainerProps) {
  return (
    <div className={cn(
      "w-full max-w-[400px] space-y-6",
      "px-4 sm:px-0",
      animations.modal.content.enter
    )}>
      {children}
    </div>
  );
}
