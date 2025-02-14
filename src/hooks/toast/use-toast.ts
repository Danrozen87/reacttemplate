
import * as React from "react";
import { ToasterToast } from "./toast-types";
import { reducer } from "./toast-store";
import { createToast, dismissToast, updateToast } from "./toast-actions";

const listeners: Array<(state: { toasts: ToasterToast[] }) => void> = [];
let memoryState: { toasts: ToasterToast[] } = { toasts: [] };

function dispatch(action: any) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

export function toast({ ...props }: Omit<ToasterToast, "id">) {
  const { id, toast: toastData } = createToast(props);

  const update = (props: ToasterToast) =>
    dispatch(updateToast({ ...props, id }));
  const dismiss = () => dispatch(dismissToast(id));

  dispatch({
    type: "ADD_TOAST",
    toast: toastData,
  });

  return {
    id,
    dismiss,
    update,
  };
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

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
    toast,
    dismiss: (toastId?: string) => dispatch(dismissToast(toastId)),
  };
}
