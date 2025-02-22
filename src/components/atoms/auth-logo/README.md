
# AuthLogo Component

## Usage
A consistent brand logo component for authentication views with animation support.

```tsx
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo"

function Header() {
  return <AuthLogo size="large" animated />
}
```

## Props Interface
```typescript
interface AuthLogoProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  className?: string;
}
```

## Variants
- Size variations:
  - Small: Compact version for mobile
  - Medium: Default size for most views
  - Large: Hero section display
- Animation states:
  - Static: No animation
  - Animated: Entry animation on mount

## Accessibility
- Role: img
- ARIA attributes:
  - aria-label: "Company logo"
  - aria-hidden: true (decorative only)
- Color contrast: Meets WCAG 2.1 AA standards
- Reduced motion support
- Screen reader optimization

## i18n
- No text content requiring translation
- RTL layout support: true
- Image alt text translations:
  - English: "Company logo"
  - Swedish: "Företagslogotyp"
  - Danish: "Firmalogo"
  - Dutch: "Bedrijfslogo"

## Testing
Coverage requirement: 90%
Key scenarios:
- Renders all size variants
- Applies animation classes
- Maintains proper styling
- Handles theme changes
- Accessibility compliance
- RTL layout support
- Responsive behavior

## Styling
- Theme tokens:
  - colors.brand.primary
  - colors.brand.secondary
  - sizing.logo
  - animation.logo
- Responsive: true
- Dark mode support: true
