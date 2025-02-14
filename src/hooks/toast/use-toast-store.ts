
/**
 * @module use-toast-store
 * @description Custom hook for managing toast notification state
 */
import * as React from "react";
import { ToasterToast, State, actionTypes } from "./types";
import { addToRemoveQueue, reducer } from "./toast-store";

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

function dispatch(action: {
  type: keyof typeof actionTypes;
  toast?: Partial<ToasterToast>;
  toastId?: string;
}): void {
  memoryState = reducer(memoryState, {
    ...action,
    toast: action.toast as ToasterToast,
  });
  
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
