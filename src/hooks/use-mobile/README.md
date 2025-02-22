
# useMobile Hook

## Usage
A custom hook that detects mobile viewport sizes for responsive behavior.

```tsx
import { useIsMobile } from "@/hooks/use-mobile";

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

## Features
- Real-time viewport detection
- Window resize handling
- Breakpoint awareness
- Memory leak prevention
- Performance optimization

## API
```typescript
function useIsMobile(): boolean;
```

## Implementation Details
- Uses window.matchMedia
- Updates on resize events
- Cleans up event listeners
- Respects system preferences

## Testing
Coverage requirement: 100%
Key scenarios:
- Initial detection
- Resize handling
- Cleanup on unmount
- Browser compatibility
- Memory leak prevention

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
