
# ThemeSwitcher

A theme toggle component that switches between light and dark modes using next-themes, with proper animations and transitions.

## Usage
```tsx
import { ThemeSwitcher } from "@/components/atoms/theme-switcher"

function App() {
  return <ThemeSwitcher />
}
```

## Animation Implementation
- Uses `animate-fade-in` for component entry
- Smooth icon transitions using our animation system
- Proper blur effects on hover
- Dark mode transition support

## Accessibility
- ARIA label: "Toggle theme"
- Keyboard navigable: Yes (Tab + Enter/Space)
- Screen reader: Announces current theme state
- Focus visible styles: Yes
- High contrast in both themes

## Testing
Coverage requirements: 100%
Test scenarios:
- Renders correctly with animations
- Toggles theme on click with proper transitions
- Has correct accessibility attributes
- Handles keyboard navigation
- Verifies animation classes are present
- Tests dark mode transitions

## Props
No props are required as the component is self-contained.

## Variants
- Default: Icon-only button with Sun/Moon icons
- Future variants may include text labels or custom icons

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

