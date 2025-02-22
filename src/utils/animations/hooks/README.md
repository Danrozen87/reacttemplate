
# Animation Hooks

## Available Hooks

### useAppearAnimation
```tsx
import { useAppearAnimation } from '@/utils/animations/hooks';

function FadeInSection() {
  const { elementRef, isVisible, animationStyle } = useAppearAnimation({
    delay: 200,
    duration: 500,
    threshold: 0.2
  });

  return (
    <div ref={elementRef} style={animationStyle}>
      Content fades in when visible
    </div>
  );
}
```

### useLoadingAnimation
```tsx
import { useLoadingAnimation } from '@/utils/animations/hooks';

function LoadingButton() {
  const [isLoading, setIsLoading] = useLoadingAnimation(2000);

  return (
    <button disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Click me'}
    </button>
  );
}
```

### useScrollAnimation
```tsx
import { useScrollAnimation } from '@/utils/animations/hooks';

function NavBar() {
  const isScrolled = useScrollAnimation(25);

  return (
    <nav className={isScrolled ? 'bg-white shadow' : 'bg-transparent'}>
      Navigation content
    </nav>
  );
}
```

## Testing
Coverage requirement: 100%
Test scenarios:
- Hook initialization
- State changes
- Cleanup on unmount
- Event handling

## Accessibility
- Respects reduced motion preferences
- Provides fallback states
- Maintains focus management
