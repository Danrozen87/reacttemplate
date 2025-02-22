
# AuthSocialButtons Component

## Usage
Social media authentication buttons with consistent styling and accessibility.

```tsx
import { AuthSocialButtons } from "@/components/molecules/auth-social-buttons";

function LoginForm() {
  return <AuthSocialButtons />;
}
```

## Features
- Multiple provider support
- Icon integration
- Loading states
- Error handling
- Animated transitions

## Accessibility
- Role: group
- ARIA attributes:
  - aria-label: social login options
  - aria-busy: during authentication
- Keyboard navigation
- Loading announcements
- Clear button labeling

## i18n
Required translation keys:
```json
{
  "auth": {
    "orContinueWith": "Or continue with",
    "signInWithGithub": "Sign in with Github"
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Button clicks
- Loading states
- Error handling
- i18n rendering
- Accessibility compliance
- Animation states
- Provider integration

## Styling
- Theme tokens:
  - colors.social
  - spacing.buttons
  - animation.buttons
- Responsive: true
- Dark mode support: true
