
# Animation Types

## Usage
TypeScript type definitions for the animation system.

```typescript
import { AnimationVariant, LoadingVariant } from './animation-types';

// Using animation variants
const variant: AnimationVariant = 'fade';

// Using loading variants
const loadingState: LoadingVariant = 'shimmer';
```

## Available Types
- `FadeVariant`
- `ScaleVariant`
- `SlideVariant`
- `OverlayVariant`
- `MotionVariant`
- `LoadingVariant`
- `InteractionVariant`
- `AnimationDuration`
- `AnimationTiming`
- `AnimationClassString`
- `AnimationObject`

## Type Safety
- All types are strictly defined
- No use of `any`
- Union types for specific values
- Proper type inference

## Testing
Coverage requirement: 100%
Test scenarios:
- Type assignments
- Type inference
- Type combinations
