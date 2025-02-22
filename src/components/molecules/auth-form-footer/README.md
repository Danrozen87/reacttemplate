
# AuthFormFooter Component

## Usage
Footer component for authentication forms with social login options and signup link.

```tsx
import { AuthFormFooter } from "@/components/molecules/auth-form-footer";

function LoginForm() {
  return (
    <AuthFormFooter onSignUp={() => navigate("/signup")} />
  );
}
```

## Props Interface
```typescript
interface AuthFormFooterProps {
  onSignUp?: () => void;
}
```

## Features
- Social login buttons
- Sign up link
- Responsive layout
- Animated transitions

## Accessibility
- Role: contentinfo
- ARIA attributes:
  - aria-label: form footer
- Keyboard navigation
- Focus management
- Clear button labeling

## i18n
Required translation keys:
```json
{
  "auth": {
    "noAccount": "Don't have an account?",
    "signUpNow": "Sign up now"
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Social button clicks
- Sign up navigation
- i18n rendering
- Accessibility compliance
- Responsive layout
- Animation states

## Styling
- Theme tokens:
  - colors.social
  - spacing.footer
  - typography.footer
- Responsive: true
- Dark mode support: true
