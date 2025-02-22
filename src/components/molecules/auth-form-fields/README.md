
# AuthFormFields Component

## Usage
Container component for authentication form fields with validation and state management.

```tsx
import { AuthFormFields } from "@/components/molecules/auth-form-fields";

function LoginForm() {
  const [email, setEmail] = useState("");
  return (
    <AuthFormFields
      email={email}
      setEmail={setEmail}
      isSubmitting={false}
      onForgotPassword={() => {}}
    />
  );
}
```

## Props Interface
```typescript
interface AuthFormFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  onForgotPassword: () => void;
}
```

## Features
- Form field organization
- Submit state handling
- Password visibility toggle
- Remember me checkbox
- Forgot password link

## Accessibility
- Role: group
- ARIA attributes:
  - aria-busy: during submission
  - aria-labelledby: form fields group
- Keyboard navigation
- Focus trapping
- Loading state announcements

## i18n
Required translation keys:
```json
{
  "auth": {
    "loginFields": "Login form fields",
    "rememberMe": "Remember me",
    "forgotPassword": "Forgot password?",
    "forgotPasswordAria": "Reset your password",
    "signingIn": "Signing in...",
    "signIn": "Sign in"
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Form submission
- Field validation
- State management
- Loading states
- Password visibility
- Remember me toggle
- Accessibility compliance

## Styling
- Theme tokens:
  - spacing.form
  - colors.form
  - animation.form
- Responsive: true
- Dark mode support: true
