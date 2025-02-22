
# useViewport Hook

## Usage
A comprehensive hook for viewport size detection and responsive design management.

```tsx
import { useViewport } from "@/hooks/use-viewport";

function ResponsiveLayout() {
  const { isMobile, isTablet, isDesktop, viewport } = useViewport();
  
  return (
    <div>
      {viewport === "xs" && <MobileContent />}
      {viewport === "md" && <TabletContent />}
      {viewport === "lg" && <DesktopContent />}
    </div>
  );
}
```

## Features
- Multiple breakpoint detection
- Device type inference
- Orientation awareness
- Window resize handling
- Performance optimization

## API
```typescript
interface ViewportInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  viewport: "xs" | "sm" | "md" | "lg" | "xl";
}

function useViewport(): ViewportInfo;
```

## Testing
Coverage requirement: 100%
Key scenarios:
- Breakpoint detection
- Device type inference
- Resize handling
- Orientation changes
- Memory management
- Browser compatibility

## Integration
- Tailwind breakpoints
- Theme system
- TypeScript support
- No external dependencies

## Performance
- Optimized resize handling
- Minimal re-renders
- Efficient cleanup
- Memory leak prevention
