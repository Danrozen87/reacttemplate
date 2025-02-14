
/**
 * @component ToastViewport
 * @description Viewport container for toast notifications with responsive positioning
 */
import * as React from "react";
import { ToastViewport as RadixToastViewport } from "@/components/ui/toast";
import { animations } from "@/utils/animations";

export function ToastViewport() {
  return (
    <RadixToastViewport
      className={`${animations.blur.DEFAULT} fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 
                 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`}
    />
  );
}
