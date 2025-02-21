
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

## Props
| Name     | Type           | Default               | Description                    |
|----------|---------------|----------------------|--------------------------------|
| children | ReactNode     | Required             | Content to render             |
| fallback | ReactNode     | undefined            | Fallback content              |
| renderOn | Viewport[]    | All viewports        | Viewports to render content   |

## Accessibility
- Maintains DOM structure
- Preserves focus management
- Screen reader friendly

## Testing
Coverage requirement: 100%
Key scenarios:
- Renders on specified viewports
- Shows fallback when needed
- Handles viewport changes
