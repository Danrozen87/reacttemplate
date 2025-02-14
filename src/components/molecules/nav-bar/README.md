# NavBar Component

The main navigation bar component that appears at the top of the application.

## Usage
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

## Features
- Fixed positioning at the top
- Responsive design
- Blur effect on scroll
- Theme switcher integration
- Brand logo display

## Accessibility
- Navigation landmark role
- Proper heading structure
- Keyboard navigation support
- Screen reader announcements for navigation sections

## i18n Requirements
```json
{
  "components": {
    "navbar": {
      "aria": {
        "mainNav": "Main navigation"
      }
    }
  }
}
```

## Testing Requirements
- Coverage target: 90%
- Test scenarios:
  - Renders all child components
  - Maintains proper accessibility attributes
  - Validates responsive behavior
  - Verifies blur effects
  - Tests i18n integration
