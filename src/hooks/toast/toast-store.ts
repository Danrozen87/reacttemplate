
/**
 * @module toast-store
 * @description Manages the toast notification state and actions
 */

import { ToasterToast } from "./types";

export const TOAST_LIMIT = 1;
export const TOAST_REMOVE_DELAY = 5000;

type ActionType = typeof actionTypes;

export const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

export interface State {
  toasts: ToasterToast[];
}

export const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * @function addToRemoveQueue
 * @description Adds a toast to the removal queue after a delay
 */
export const addToRemoveQueue = (toastId: string, dispatch: (action: any) => void) => {
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
