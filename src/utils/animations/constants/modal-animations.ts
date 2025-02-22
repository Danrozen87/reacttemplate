
export const modalAnimations = {
  overlay: {
    base: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
    enter: "animate-overlay-in",
    exit: "animate-overlay-out",
  },
  content: {
    base: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg",
    enter: "animate-modal-in",
    exit: "animate-modal-out",
  },
} as const;
