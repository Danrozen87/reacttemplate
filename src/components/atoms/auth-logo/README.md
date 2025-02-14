
# AuthLogo Component

## Usage
```tsx
import { AuthLogo } from "@/components/atoms/auth-logo/auth-logo"

function Header() {
  return <AuthLogo />
}
```

## Variants
- Default: Logo with text
- Future variants may include size variations

## Accessibility
- ARIA: Decorative element, no specific ARIA needed
- Color contrast: Meets WCAG 2.1 AA standards
- Screen reader: Text is readable

## i18n
No translations required - brand name remains consistent across languages

## Testing
Coverage target: 90%
Test scenarios:
- Renders correctly
- Applies animation classes
- Maintains proper styling in both light and dark modes
