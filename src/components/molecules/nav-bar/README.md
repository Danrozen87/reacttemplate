
# NavBar Component

## Usage
The main navigation bar component that appears at the top of the application.

```tsx
import { NavBar } from "@/components/molecules/nav-bar"

function Layout() {
  return (
    <div>
      <NavBar />
      {/* other content */}
    </div>
  )
}
```

## Props Interface
```typescript
interface NavBarProps {
  transparent?: boolean;
  sticky?: boolean;
  className?: string;
}
```

## Features
- Fixed positioning at the top
- Responsive design
- Blur effect on scroll
- Theme switcher integration
- Brand logo display

## Accessibility
- Role: navigation
- ARIA attributes:
  - aria-label: "Main navigation"
  - aria-expanded: for mobile menu
  - aria-controls: for dropdown menus
- Keyboard navigation:
  - Tab: Navigate between items
  - Enter/Space: Activate items
  - Esc: Close dropdowns
- Focus trap in mobile menu
- Skip link support
- Screen reader announcements

## i18n
Required translation keys:
```json
{
  "components": {
    "navbar": {
      "aria": {
        "mainNav": "Main navigation",
        "menuButton": "Toggle menu",
        "closeMenu": "Close menu"
      },
      "links": {
        "home": "Home",
        "about": "About",
        "contact": "Contact"
      }
    }
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Renders all child components
- Maintains proper accessibility attributes
- Validates responsive behavior
- Verifies blur effects
- Tests i18n integration
- Mobile menu functionality
- Keyboard navigation
- Theme switching
- Link activation
- Focus management

## Styling
- Theme tokens:
  - colors.navbar.background
  - colors.navbar.text
  - colors.navbar.hover
  - sizes.navbar.height
  - blur.navbar
- Responsive: true
- Dark mode support: true
