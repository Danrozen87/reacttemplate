
/**
 * @component ToastNotification
 * @description A reusable toast notification component with animation and responsive design
 * @example
 * ```tsx
 * <ToastNotification
 *   title="Success"
 *   description="Operation completed successfully"
 *   variant="default"
 * />
 * ```
 */
import * as React from "react";
import { useTranslation } from "react-i18next";
import { animations } from "@/utils/animations";
import { cn } from "@/lib/utils";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "@/components/ui/toast";

interface ToastNotificationProps {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  onClose?: () => void;
}

export function ToastNotification({
  id,
  title,
  description,
  variant = "default",
  onClose,
}: ToastNotificationProps) {
  const { t } = useTranslation();

  return (
    <Toast
      key={id}
      variant={variant}
      className={cn(
        "font-poppins group pointer-events-auto relative flex w-full items-center justify-between space-x-4",
        "p-6 pr-8 shadow-lg",
        "sm:w-full md:max-w-[420px]",
        animations.modal.content.enter
      )}
      role={variant === "destructive" ? "alert" : "status"}
      aria-live={variant === "destructive" ? "assertive" : "polite"}
    >
      <div className="grid gap-1">
        {title && <ToastTitle className="text-sm font-semibold">{t(title)}</ToastTitle>}
        {description && (
          <ToastDescription className="text-sm opacity-90">
            {t(description)}
          </ToastDescription>
        )}
      </div>
      <ToastClose onClick={onClose} />
    </Toast>
  );
}
