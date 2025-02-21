
# ErrorBoundary Component

## Overview
A robust error boundary component that catches JavaScript errors anywhere in the child component tree and displays a fallback UI.

## Usage
```tsx
import { ErrorBoundary } from "@/components/atoms/error-boundary/error-boundary";

<ErrorBoundary fallback={<ErrorFallback />}>
  <YourComponent />
</ErrorBoundary>
```

## Props Interface
```typescript
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  resetKeys?: Array<unknown>;
  onReset?: () => void;
}
```

## Features
- Catches runtime errors in components
- Prevents UI from completely breaking
- Provides fallback UI during errors
- Supports error logging and monitoring
- Allows component reset on prop changes

## Error Handling Strategy
1. **Capture Phase**: Catches errors during:
   - Rendering
   - Lifecycle methods
   - Event handlers
   
2. **Recovery Options**:
   - Auto-reset on prop changes
   - Manual reset functionality
   - Configurable fallback UI

3. **Monitoring Integration**:
   - Error logging support
   - Performance tracking
   - Analytics integration

## Accessibility
- Announces errors to screen readers
- Maintains focus management
- Provides keyboard navigation in fallback UI

## i18n
- Error messages support translation
- Fallback UI supports RTL languages
- Localized error descriptions

## Testing
Coverage requirement: 100%
Key scenarios:
- Error catching and display
- Recovery functionality
- Accessibility compliance
- i18n support
- Performance impact

## Best Practices
1. Place at logical component boundaries
2. Provide meaningful error messages
3. Include reset functionality
4. Log errors for monitoring
5. Maintain good UX during errors