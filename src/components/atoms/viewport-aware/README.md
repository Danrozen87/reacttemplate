
# ViewportAware Component

## Usage
A component that conditionally renders content based on viewport size.

```tsx
import { ViewportAware } from "./viewport-aware";

// Only render on mobile and tablet
<ViewportAware renderOn={["xs", "sm", "md"]}>
  <MobileContent />
</ViewportAware>

// Render different content based on viewport
<ViewportAware 
  renderOn={["xs", "sm"]} 
  fallback={<DesktopContent />}
>
  <MobileContent />
</ViewportAware>
```

## Props Interface
```typescript
interface ViewportAwareProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  renderOn?: Viewport[];
}
```

## Variants
- Basic: Shows/hides content based on viewport
- With Fallback: Shows alternative content on non-matching viewports
- Multi-viewport: Supports multiple viewport sizes

## Accessibility
- Role: none (uses native div role)
- ARIA attributes:
  - aria-hidden: automatically managed based on viewport
- Maintains DOM structure for assistive technologies
- Preserves focus management
- Screen reader friendly content switching

## i18n
- Component text content supports translation
- RTL layout support
- Supports all required languages:
  - English
  - Swedish
  - Danish
  - Dutch
- Required translation keys:
  - viewport.hidden
  - viewport.visible

## Testing
Coverage requirement: 100%
Key scenarios:
- Renders on specified viewports
- Shows fallback when needed
- Handles viewport changes
- Maintains accessibility
- RTL layout compliance
- Focus management
- Performance impact

## Styling
- Theme tokens:
  - breakpoints.xs
  - breakpoints.sm
  - breakpoints.md
  - breakpoints.lg
  - breakpoints.xl
- Responsive: true
- Dark mode support: true
