# NavBar

Main navigation component that includes theme switching and branding.

## Usage
```tsx
import { NavBar } from "@/components/molecules/nav-bar"

function Layout() {
  return <NavBar />
}
```

## Animation Implementation
- Uses `animate-fade-in` for smooth entry
- Implements blur backdrop effect using our animation system
- Responsive transitions for all child components
- Dark mode support with smooth transitions

## Accessibility
- Semantic HTML: `<nav>` element
- ARIA landmark: navigation
- Keyboard navigation: Full support
- Focus management: Trapped within navigation when menu is open
- Proper contrast in both light and dark modes

## Responsive Design
- Mobile-first approach
- Proper spacing with consistent padding (px-4 sm:px-6 lg:px-8)
- Container usage for centered content
- Dynamic text sizing for different breakpoints

## Requirements
- Must use our centralized animation system
- Must implement proper blur effects
- Must support dark mode
- Must follow mobile-first approach
- Must use container class for centered content

## Testing
Coverage requirements: 90%
Test scenarios:
- Renders all navigation items
- Theme switcher functions correctly
- Responsive design works as expected
- Keyboard navigation works correctly
- Animations work as expected
- Dark mode transitions properly
