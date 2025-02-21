
/**
 * @constant BREAKPOINTS
 * @description Standardized breakpoints following a mobile-first approach
 */
export const BREAKPOINTS = {
  xs: '320px',   // Small phones
  sm: '480px',   // Large phones
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops/Desktops
  xl: '1280px',  // Large Desktops
  '2xl': '1536px' // Extra Large Screens
} as const;

/**
 * @constant BREAKPOINT_VALUES
 * @description Numeric values for programmatic use
 */
export const BREAKPOINT_VALUES = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

/**
 * @constant MEDIA_QUERIES
 * @description Predefined media queries for consistent responsive design
 */
export const MEDIA_QUERIES = {
  xs: `(min-width: ${BREAKPOINTS.xs})`,
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`,
  '2xl': `(min-width: ${BREAKPOINTS['2xl']})`,
  // Max-width queries for specific cases
  maxXs: `(max-width: ${BREAKPOINT_VALUES.xs - 1}px)`,
  maxSm: `(max-width: ${BREAKPOINT_VALUES.sm - 1}px)`,
  maxMd: `(max-width: ${BREAKPOINT_VALUES.md - 1}px)`,
  maxLg: `(max-width: ${BREAKPOINT_VALUES.lg - 1}px)`,
  maxXl: `(max-width: ${BREAKPOINT_VALUES.xl - 1}px)`,
  max2xl: `(max-width: ${BREAKPOINT_VALUES['2xl'] - 1}px)`,
} as const;