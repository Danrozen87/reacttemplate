
import { ToasterToast, ToastAction } from "@/types/toast";

export type { ToasterToast, ToastAction };

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
      type: keyof ActionTypes;
      toast: ToasterToast;
    }
  | {
      type: keyof ActionTypes;
      toast: Partial<ToasterToast>;
    }
  | {
      type: keyof ActionTypes;
      toastId?: string;
    };
