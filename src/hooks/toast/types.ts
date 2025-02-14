
import { ToasterToast, ToastAction } from "@/types/toast";

export type { ToasterToast, ToastAction };

export interface State {
  toasts: ToasterToast[];
}

export const TOAST_LIMIT = 1;
export const TOAST_REMOVE_DELAY = 5000;

export type ActionType = {
  ADD_TOAST: "ADD_TOAST";
  UPDATE_TOAST: "UPDATE_TOAST";
  DISMISS_TOAST: "DISMISS_TOAST";
  REMOVE_TOAST: "REMOVE_TOAST";
};

export type Action =
  | {
      type: "ADD_TOAST";
      toast: ToasterToast;
    }
  | {
      type: "UPDATE_TOAST";
      toast: Partial<ToasterToast>;
    }
  | {
      type: "DISMISS_TOAST";
      toastId?: string;
    }
  | {
      type: "REMOVE_TOAST";
      toastId?: string;
    };
