
import type { ToastProps } from "@/components/ui/toast";

export interface ToasterToast extends Omit<ToastProps, "title" | "description"> {
  id: string;
  title?: string;
  description?: string;
  action?: ToastActionElement;
  "aria-live"?: "polite" | "assertive";
  role?: "status" | "alert";
}

export interface ToastAction {
  label: string;
  onClick: () => void;
  altText?: string;
}

export type ToastOptions = {
  description?: string;
  duration?: number;
  action?: ToastAction;
};
