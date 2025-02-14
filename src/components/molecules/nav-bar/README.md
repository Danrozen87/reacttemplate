
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

## i18n Requirements
### Translation Keys
```json
{
  "components": {
    "navbar": {
      "brand": "Clean Slate",
      "home": "Home",
      "menu": {
        "open": "Open menu",
        "close": "Close menu"
      },
      "search": {
        "placeholder": "Search...",
        "button": "Search"
      }
    }
  }
}
```

### Supported Languages
- English (en)
- Swedish (sv)
- Danish (da)
- Dutch (nl)

### Language-Specific Considerations
- Maintain consistent branding across languages
- Account for navigation item text length variations
- Ensure proper spacing in mobile view for all languages
- Support RTL languages in future implementations

### Implementation Examples
```typescript
// English
{
  "components": {
    "navbar": {
      "brand": "Clean Slate",
      "home": "Home"
    }
  }
}

// Danish
{
  "components": {
    "navbar": {
      "brand": "Clean Slate",
      "home": "Hjem"
    }
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
- Verifies correct translations for all supported languages
- Tests RTL support for future language additions
