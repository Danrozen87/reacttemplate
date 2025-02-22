# usePerformanceTracking Hook

## Usage
A custom hook for tracking component render performance and identifying potential bottlenecks.

```tsx
import { usePerformanceTracking } from "@/hooks/use-performance-tracking";

function MyComponent() {
  usePerformanceTracking("MyComponent");

  return <div>My Component</div>;
}
```

## Features
- Measures render time
- Detects excessive renders
- Identifies performance bottlenecks
- Provides detailed performance metrics
- Supports multiple components
- Integrates with development tools
- Reduces performance regressions
- Improves user experience

## API
```typescript
function usePerformanceTracking(componentName: string): void;
```

## Implementation Details
- Uses `React.useRef` to store start time
- Uses `React.useEffect` to track mount and unmount
- Calculates render duration
- Logs performance metrics to console
- Employs `requestAnimationFrame` for accurate timing
- Cleans up resources on unmount
- Respects development mode settings

## Testing
Coverage requirement: 100%
Key scenarios:
- Timing accuracy
- Memory leak prevention
- Multiple component tracking
- Error handling
- Cleanup verification
- Browser compatibility
- Performance overhead
- Data persistence
- Edge cases
- Error boundaries
- SSR compatibility
- Resource cleanup

## Integration
- Works with React components
- No external dependencies
- TypeScript support
- Compatible with performance monitoring tools

## Performance
- Minimal overhead
- Efficient timing mechanisms
- Asynchronous logging
- Memory optimization
