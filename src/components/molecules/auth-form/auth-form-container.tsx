
/**
 * @component AuthFormContainer
 * @description Container component for authentication form with animation
 */
import { type ReactNode } from "react";
import { animations } from "@/utils/animations";

interface AuthFormContainerProps {
  children: ReactNode;
}

export function AuthFormContainer({ children }: AuthFormContainerProps) {
  return (
    <div className={`w-full max-w-md space-y-6 ${animations.modal.content.enter}`}>
      {children}
    </div>
  );
}
