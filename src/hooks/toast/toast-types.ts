
import type { ToastProps } from "@/components/ui/toast";

// Define ToastActionElement type
export type ToastActionElement = React.ReactElement<{
  altText: string;
  onClick: () => void;
  children: React.ReactNode;
}>;

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

export interface State {
  toasts: ToasterToast[];
}

export const TOAST_LIMIT = 1;
export const TOAST_REMOVE_DELAY = 5000;

export type ActionTypes = {
  ADD_TOAST: "ADD_TOAST";
  UPDATE_TOAST: "UPDATE_TOAST";
  DISMISS_TOAST: "DISMISS_TOAST";
  REMOVE_TOAST: "REMOVE_TOAST";
};

export const actionTypes: ActionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

export type Action =
  | {
      type: "ADD_TOAST" | "UPDATE_TOAST";
      toast: ToasterToast;
    }
  | {
      type: "DISMISS_TOAST" | "REMOVE_TOAST";
      toastId?: string;
    };
