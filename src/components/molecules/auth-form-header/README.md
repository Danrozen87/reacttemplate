
# AuthFormHeader Component

## Usage
Header component for authentication forms with title and subtitle.

```tsx
import { AuthFormHeader } from "@/components/molecules/auth-form-header";

function LoginForm() {
  return <AuthFormHeader />;
}
```

## Features
- Animated entrance
- Responsive typography
- Localized content
- Theme aware

## Accessibility
- Role: banner
- Semantic heading structure
- Clear visual hierarchy
- High contrast text

## i18n
Required translation keys:
```json
{
  "auth": {
    "welcome": "Welcome back",
    "signInToContinue": "Sign in to continue to your account"
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Content rendering
- Animation presence
- i18n integration
- Theme compatibility
- Responsive layout

## Styling
- Theme tokens:
  - typography.heading
  - typography.subtitle
  - spacing.header
- Responsive: true
- Dark mode support: true
