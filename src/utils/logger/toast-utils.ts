/**
 * @module toast-utils
 * @description Utility functions for creating and displaying toast notifications
 */
import { ToastActionElement } from "@/components/ui/toast";
import { toast } from "@/hooks/toast";
import { ToastOptions } from "./types";
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";

export const DEFAULT_TOAST_DURATION = 5000;

interface ToastAccessConfig {
  requiredRole?: "admin" | "manager" | "user";
  userRole?: string;
}

/**
 * @function checkToastAccess
 * @description Verifies if the current user has access to see the toast
 */
const checkToastAccess = ({ requiredRole, userRole }: ToastAccessConfig): boolean => {
  if (!requiredRole || !userRole) return true;
  
  const roleHierarchy = {
    admin: 3,
    manager: 2,
    user: 1,
  };
  
  return roleHierarchy[userRole as keyof typeof roleHierarchy] >= 
         roleHierarchy[requiredRole];
};

/**
 * @function showToast
 * @description Displays a toast notification with i18n support and proper accessibility
 */
export const showToast = (
  messageKey: string,
  options?: ToastOptions & ToastAccessConfig,
  variant: "default" | "destructive" = "default"
) => {
  const { t } = useTranslation();
  
  if (!checkToastAccess({
    requiredRole: options?.requiredRole,
    userRole: options?.userRole,
  })) {
    return;
  }

  toast({
    title: t(messageKey),
    description: options?.description ? t(options.description) : undefined,
    duration: options?.duration ?? DEFAULT_TOAST_DURATION,
    variant,
    className: animations.modal.content.enter,
    "aria-live": variant === "destructive" ? "assertive" : "polite",
    role: variant === "destructive" ? "alert" : "status",
  });
};
