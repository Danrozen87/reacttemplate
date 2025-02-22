# useViewport Hook

## Usage
A custom hook that detects the current viewport size and device type.

```tsx
import { useViewport } from "@/hooks/use-viewport";

function ResponsiveComponent() {
  const { isMobile, isTablet, isDesktop } = useViewport();
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

## Features
- Real-time viewport detection
- Device type inference
- Window resize handling
- Orientation change detection
- Breakpoint awareness
- Memory leak prevention
- Performance optimization
- SSR support

## API
```typescript
function useViewport(): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  device: 'mobile' | 'tablet' | 'desktop';
  breakpoint: Viewport;
};
```

## Implementation Details
- Uses window.matchMedia
- Updates on resize and orientation change events
- Cleans up event listeners
- Respects system preferences
- Uses theme breakpoints

## Testing
Coverage requirement: 100%
Key scenarios:
- Breakpoint detection
- Device type inference
- Resize handling
- Orientation changes
- Memory management
- Browser compatibility
- SSR support
- Event cleanup
- Multiple hook instances
- Performance impact
- Error handling
- Theme integration

## Integration
- Works with Tailwind breakpoints
- Theme aware
- No external dependencies
- TypeScript support

## Performance
- Debounced resize handling
- Minimal re-renders
- Efficient event cleanup
- Memory optimization
