
/**
 * @module toast-store
 * @description Manages the toast notification state and actions
 */

import { ToasterToast } from "./types";

export const TOAST_LIMIT = 1;
export const TOAST_REMOVE_DELAY = 5000;

export const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

export type ToastAction = {
  type: keyof typeof actionTypes;
  toast?: ToasterToast;
  toastId?: string;
};

export interface State {
  toasts: ToasterToast[];
}

export const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * @function addToRemoveQueue
 * @description Adds a toast to the removal queue after a delay
 * @returns {void}
 */
export const addToRemoveQueue = (toastId: string, dispatch: (action: ToastAction) => void): void => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};
