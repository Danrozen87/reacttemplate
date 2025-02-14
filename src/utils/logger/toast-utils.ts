
/**
 * @module toast-utils
 * @description Utility functions for creating and displaying toast notifications
 */

import { ToastActionElement, ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { ToastOptions } from "./types";
import { useTranslation } from "react-i18next";

export const DEFAULT_TOAST_DURATION = 5000;

/**
 * @function createToastAction
 * @description Creates a toast action element with proper accessibility attributes
 */
export const createToastAction = (action: ToastOptions["action"]): ToastActionElement | undefined => {
  if (!action) return undefined;
  
  return ToastAction({
    onClick: action.onClick,
    altText: `Action: ${action.label}`,
    children: action.label,
    "aria-label": action.label
  }) as ToastActionElement;
};

/**
 * @function showToast
 * @description Displays a toast notification with i18n support and proper accessibility
 */
export const showToast = (
  messageKey: string,
  options?: ToastOptions,
  variant: "default" | "destructive" = "default"
) => {
  const { t } = useTranslation();
  
  toast({
    title: t(messageKey),
    description: options?.description ? t(options.description) : undefined,
    duration: options?.duration ?? DEFAULT_TOAST_DURATION,
    action: options?.action ? createToastAction(options.action) : undefined,
    variant,
    "aria-live": variant === "destructive" ? "assertive" : "polite",
    role: variant === "destructive" ? "alert" : "status"
  });
};
