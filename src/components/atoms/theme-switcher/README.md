
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

## i18n
Required translations:
```json
{
  "theme": {
    "toggle": "Toggle theme",
    "light": "Light mode",
    "dark": "Dark mode"
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
