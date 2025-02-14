
# Navigation Component

A fully accessible, responsive navigation system with theme support and blur effects.

## Usage
```tsx
import { Navigation, NavigationList, NavigationItem } from "@/components/ui/navigation"

function Example() {
  return (
    <Navigation>
      <NavigationList>
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/dashboard">Dashboard</NavigationItem>
      </NavigationList>
    </Navigation>
  )
}
```

## Features
- Responsive design with mobile menu
- Dark/light mode support
- Blur effects on scroll
- Keyboard navigation
- Active state management
- Smooth animations

## Accessibility
- ARIA landmark roles
- Keyboard navigation support
- Focus management
- Screen reader announcements
- Proper heading structure

## i18n Requirements
```json
{
  "components": {
    "navigation": {
      "aria": {
        "mainNav": "Main navigation",
        "mobileMenu": "Mobile menu",
        "closeMenu": "Close menu",
        "openMenu": "Open menu"
      }
    }
  }
}
```

## Testing
Coverage target: 90%
Test scenarios:
- Renders all navigation items
- Mobile menu functionality
- Active state management
- Keyboard navigation
- Theme switching
- Blur effect on scroll
