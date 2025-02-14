
# ThemeSwitcher

A theme toggle component that switches between light and dark modes using next-themes.

## Usage
```tsx
import { ThemeSwitcher } from "@/components/atoms/theme-switcher"

function App() {
  return <ThemeSwitcher />
}
```

## Props
No props are required as the component is self-contained.

## Variants
- Default: Icon-only button with Sun/Moon icons
- Future variants may include text labels or custom icons

## Accessibility
- ARIA label: "Toggle theme"
- Keyboard navigable: Yes (Tab + Enter/Space)
- Screen reader: Announces current theme state
- Focus visible styles: Yes

## i18n Requirements
### Translation Keys
```json
{
  "components": {
    "themeSwitcher": {
      "toggle": "Toggle theme",
      "lightMode": "Switch to light mode",
      "darkMode": "Switch to dark mode"
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
- Ensure proper text direction (LTR/RTL) support
- Account for text length variations in different languages
- Maintain proper spacing for all language variations

### Example Implementations
```typescript
// English
{
  "components": {
    "themeSwitcher": {
      "toggle": "Toggle theme",
      "lightMode": "Switch to light mode",
      "darkMode": "Switch to dark mode"
    }
  }
}

// Swedish
{
  "components": {
    "themeSwitcher": {
      "toggle": "Växla tema",
      "lightMode": "Byt till ljust läge",
      "darkMode": "Byt till mörkt läge"
    }
  }
}
```

## Testing
Coverage requirements: 100%
Test scenarios:
- Renders correctly
- Toggles theme on click
- Has correct accessibility attributes
- Handles keyboard navigation
- Verifies i18n translations are loaded correctly
- Tests proper translation rendering for all supported languages
