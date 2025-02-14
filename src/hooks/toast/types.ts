
/**
 * @module toast-types
 * @description Type definitions for the toast notification system
 */

import type { ToastProps, ToastActionElement } from "@/components/ui/toast";

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
