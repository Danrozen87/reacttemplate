
# Constants Documentation

## Breakpoints System

Our breakpoint system follows a mobile-first approach with granular control points:

### Core Breakpoints
- xs: 320px (Small phones)
- sm: 480px (Large phones)
- md: 768px (Tablets)
- lg: 1024px (Laptops/Desktops)
- xl: 1280px (Large Desktops)
- 2xl: 1536px (Extra Large Screens)

### Usage Examples

1. **In Tailwind Classes:**
```tsx
<div className="
  w-full          // Mobile base
  sm:w-1/2       // 480px+
  md:w-1/3       // 768px+
  lg:w-1/4       // 1024px+
  xl:w-1/5       // 1280px+
  2xl:w-1/6      // 1536px+
">
```

2. **In Media Queries:**
```tsx
import { MEDIA_QUERIES } from '@/constants/breakpoints';

// Using min-width (mobile-first)
@media ${MEDIA_QUERIES.sm} {
  // Styles for 480px and up
}

// Using max-width (specific range)
@media ${MEDIA_QUERIES.maxMd} {
  // Styles for below 768px
}
```

3. **Programmatic Usage:**
```tsx
import { BREAKPOINT_VALUES } from '@/constants/breakpoints';

if (window.innerWidth >= BREAKPOINT_VALUES.md) {
  // Logic for tablet and up
}
```