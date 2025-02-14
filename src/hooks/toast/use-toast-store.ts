
/**
 * @module use-toast-store
 * @description Custom hook for managing toast notification state
 */
import * as React from "react";
import { ToasterToast } from "./types";
import { addToRemoveQueue, State, actionTypes } from "./toast-store";

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

function dispatch(action: {
  type: keyof typeof actionTypes;
  toast?: Partial<ToasterToast>;
  toastId?: string;
}): void {
  switch (action.type) {
    case "ADD_TOAST":
      if (action.toast) {
        memoryState = {
          ...memoryState,
          toasts: [action.toast as ToasterToast, ...memoryState.toasts].slice(0, 1),
        };
      }
      break;
    case "UPDATE_TOAST":
      if (action.toast) {
        memoryState = {
          ...memoryState,
          toasts: memoryState.toasts.map((t) =>
            t.id === action.toast?.id ? { ...t, ...action.toast } : t
          ),
        };
      }
      break;
    case "DISMISS_TOAST":
      if (action.toastId) {
        addToRemoveQueue(action.toastId, dispatch);
        memoryState = {
          ...memoryState,
          toasts: memoryState.toasts.map((t) =>
            t.id === action.toastId ? { ...t, open: false } : t
          ),
        };
      }
      break;
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        memoryState = {
          ...memoryState,
          toasts: [],
        };
      } else {
        memoryState = {
          ...memoryState,
          toasts: memoryState.toasts.filter((t) => t.id !== action.toastId),
        };
      }
      break;
  }
  
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

export function useToastStore() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    dispatch,
  };
}
