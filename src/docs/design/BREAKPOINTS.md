
# Breakpoint System Documentation

## Overview
Our responsive design system follows a mobile-first approach with granular breakpoints for precise control over layouts at different viewport sizes.

## Core Breakpoints

| Name | Size (px) | Description |
|------|-----------|-------------|
| xs   | 320       | Small phones |
| sm   | 480       | Large phones |
| md   | 768       | Tablets |
| lg   | 1024      | Laptops/Desktops |
| xl   | 1280      | Large Desktops |
| 2xl  | 1536      | Extra Large Screens |

## Implementation Guidelines

1. **Mobile-First Approach**
   - Start with base styles for mobile
   - Add breakpoint modifiers for larger screens
   - Use min-width queries by default

2. **Consistent Usage**
   - Always use Tailwind classes when possible
   - Use MEDIA_QUERIES constant for custom CSS
   - Reference BREAKPOINT_VALUES for JavaScript logic

3. **Layout Considerations**
   - Content width constraints
   - Typography scaling
   - Component spacing
   - Navigation patterns
   - Grid systems

4. **Performance**
   - Optimize images for breakpoints
   - Consider conditional loading
   - Monitor bundle size impact

5. **Testing**
   - Test at each breakpoint
   - Verify smooth transitions
   - Check content readability
   - Validate interactive elements

## Examples

### Responsive Component
```tsx
<div className="
  p-4           // Base padding
  sm:p-6        // More padding on larger phones
  md:p-8        // Even more on tablets
  lg:p-12       // Maximum padding on desktop
">
```

### Grid Layout
```tsx
<div className="
  grid
  grid-cols-1    // Single column on mobile
  sm:grid-cols-2 // Two columns on larger phones
  md:grid-cols-3 // Three columns on tablets
  lg:grid-cols-4 // Four columns on desktop
  gap-4
">
```

### Typography
```tsx
<h1 className="
  text-2xl      // Base size
  sm:text-3xl   // Larger on phones
  md:text-4xl   // Even larger on tablets
  lg:text-5xl   // Largest on desktop
">
```