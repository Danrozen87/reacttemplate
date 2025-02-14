
# NavBar

Main navigation component that includes theme switching and branding.

## Usage
```tsx
import { NavBar } from "@/components/molecules/nav-bar"

function Layout() {
  return <NavBar />
}
```

## Props
No props required as the component is self-contained.

## Variants
- Default: Simple navbar with logo and theme switcher
- Future variants may include user profile, search, and additional navigation items

## Accessibility
- Semantic HTML: `<nav>` element
- ARIA landmark: navigation
- Keyboard navigation: Full support
- Focus management: Trapped within navigation when menu is open

## i18n
Required translations:
```json
{
  "nav": {
    "home": "Home",
    "brand": "Clean Slate"
  }
}
```

## Testing
Coverage requirements: 90%
Test scenarios:
- Renders all navigation items
- Theme switcher functions correctly
- Responsive design works as expected
- Keyboard navigation works correctly
