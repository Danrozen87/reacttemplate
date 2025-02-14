
/**
 * @constant BREAKPOINTS
 * @description Standardized breakpoints for responsive design
 */
export const BREAKPOINTS = {
  MOBILE: 640,  // sm
  TABLET: 768,  // md
  DESKTOP: 1024, // lg
  WIDE: 1280,   // xl
} as const;

/**
 * @constant QUERIES
 * @description Media queries for responsive design
 */
export const QUERIES = {
  MOBILE: `(max-width: ${BREAKPOINTS.MOBILE - 1}px)`,
  TABLET: `(min-width: ${BREAKPOINTS.MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET - 1}px)`,
  DESKTOP: `(min-width: ${BREAKPOINTS.TABLET}px)`,
} as const;
