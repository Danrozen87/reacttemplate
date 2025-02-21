
# Button Component

## Overview
An atomic button component that serves as the foundation for all button variants in the application.

## Usage
```tsx
import { Button } from "@/components/ui/button/button"

// Default button
<Button>Click me</Button>

// Variant examples
<Button variant="destructive">Delete</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Menu</Button>
```

## Props
- `variant`: Appearance style ('default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link')
- `size`: Button size ('default' | 'sm' | 'lg' | 'icon')
- `asChild`: Boolean to forward props to child component
- All standard button HTML attributes

## Accessibility
- Proper focus states with visible ring
- ARIA attributes inherited from native button
- Color contrast compliant in all themes
- Keyboard navigation support

## i18n
No direct text content - should be provided by parent components

## Testing Coverage: 90%+
Key test scenarios:
- Renders all variants correctly
- Handles click events
- Maintains accessibility features
- Proper prop forwarding
- Theme compatibility