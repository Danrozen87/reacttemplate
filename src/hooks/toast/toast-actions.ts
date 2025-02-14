
import { ToasterToast, Action } from "./toast-types";

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Toast = Omit<ToasterToast, "id">;

export function createToast({ ...props }: Toast) {
  const id = genId();

  return {
    id,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismissToast(id);
      },
    },
  };
}

export function updateToast(props: ToasterToast): Action {
  return {
    type: "UPDATE_TOAST",
    toast: props,
  };
}

export function dismissToast(toastId?: string): Action {
  return {
    type: "DISMISS_TOAST",
    toastId,
  };
}

export function removeToast(toastId?: string): Action {
  return {
    type: "REMOVE_TOAST",
    toastId,
  };
}

export function addToast(toast: ToasterToast): Action {
  return {
    type: "ADD_TOAST",
    toast,
  };
}
