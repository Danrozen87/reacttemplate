
# Animation Constants

## Usage
Constants for animation classes and configuration values used throughout the application.

```tsx
import { animations } from './animation-classes';
import { interactionAnimations } from './interaction-classes';
import { loadingAnimations } from './loading-classes';

// Using modal animations
<div className={animations.modal.overlay.base}>
  Modal overlay
</div>

// Using interaction animations
<button className={interactionAnimations.interaction.hover.scale}>
  Hover me
</button>

// Using loading animations
<div className={loadingAnimations.loading.shimmer}>
  Loading content
</div>
```

## File Structure
- `animation-classes.ts`: Core animation utilities
- `interaction-classes.ts`: Interactive element animations
- `loading-classes.ts`: Loading state animations

## Testing
Coverage requirement: 100%
Test scenarios:
- Class string generation
- Class combinations
- Variant application

## Constants Maintenance
- Follow Tailwind naming conventions
- Keep classes atomic and reusable
- Document all class purposes
