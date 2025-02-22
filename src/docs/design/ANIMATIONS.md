
# Animation System

## Principles
- Use purposeful motion
- Maintain consistency
- Consider performance
- Support reduced motion

## Timing Scale
```css
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-slow: 300ms;
```

## Animation Guidelines

1. **Transitions**
   - Smooth state changes
   - Consistent timing
   - Clear purpose

2. **Loading States**
   - Informative spinners
   - Progress indicators
   - Skeleton screens

3. **Interaction Feedback**
   - Button clicks
   - Form submissions
   - Navigation changes

## Animation Variants

1. **Basic Motions**
   - Fade (in/out)
   - Scale (in/out)
   - Slide (in/out)
   - Bounce
   - Pulse
   - Rotate

2. **Interaction States**
   - Hover effects
   - Focus states
   - Active states
   - Loading states

3. **Combined Effects**
   - Button press
   - Card hover
   - Menu items
   - Link hover

## Usage Examples

```tsx
// Basic animation
<div className={animations.element.fadeIn}>
  Fade in content
</div>

// Interactive element
<button className={animations.combined.buttonPress}>
  Animated Button
</button>

// State change
<div className={animations.state.loading}>
  Loading...
</div>

// Hover effect
<div className={animations.interaction.hover.scale}>
  Hover to scale
</div>
```

## Accessibility

- All animations respect `prefers-reduced-motion`
- Motion-safe queries for animation classes
- Appropriate timing for cognitive processing
- No aggressive or distracting animations

