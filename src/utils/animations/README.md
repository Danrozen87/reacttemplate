
# Animation System

## Usage
The animation system provides consistent animations and blur effects across the application, with built-in support for reduced motion preferences.

### Basic Implementation
```tsx
import { animations } from '@/utils/animations';

// Using modal animations
<div className={`${animations.modal.overlay.base} ${animations.modal.overlay.enter}`}>
  <div className={`${animations.modal.content.base} ${animations.modal.content.enter}`}>
    Modal content
  </div>
</div>

// Using blur effects
<div className={animations.blur.sm}>
  Content with blur
</div>

// Using element animations
<div className={animations.element.fadeIn}>
  Fading content
</div>
```

## Variants
- Modal animations (overlay and content)
- Menu animations (overlay and content)
- Page transitions
- Element animations (fade, scale, slide)
- Blur effects (sm to 3xl)

## Accessibility
- All animations respect `prefers-reduced-motion`
- Motion-safe animations only play when reduced motion is not preferred
- Proper focus management during transitions
- ARIA attributes are preserved during animations

## Testing
- Coverage requirements: 90%
- Test scenarios:
  - Animation class application
  - Reduced motion preferences
  - Blur effect application
