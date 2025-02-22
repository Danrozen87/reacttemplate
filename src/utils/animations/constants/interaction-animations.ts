
export const interactionAnimations = {
  hover: {
    scale: "hover:scale-105 active:scale-95",
    glow: "hover:shadow-lg hover:shadow-primary/25",
    lift: "hover:-translate-y-1",
  },
  focus: {
    ring: "focus:ring-2 focus:ring-primary/50",
    scale: "focus:scale-[1.02]",
  },
} as const;
