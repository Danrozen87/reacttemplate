
# AuthFormEmail Component

## Usage
Email input field for authentication forms with validation and i18n support.

```tsx
import { AuthFormEmail } from "@/components/molecules/auth-form-email";

function LoginForm() {
  const [email, setEmail] = useState("");
  return (
    <AuthFormEmail
      email={email}
      setEmail={setEmail}
      disabled={false}
    />
  );
}
```

## Props Interface
```typescript
interface AuthFormEmailProps {
  email: string;
  setEmail: (email: string) => void;
  disabled?: boolean;
}
```

## Features
- Email validation
- Controlled input handling
- Disabled state support
- i18n integration
- Accessibility compliance

## Accessibility
- Role: group
- ARIA attributes:
  - aria-required: true
  - aria-invalid: when validation fails
  - aria-describedby: for error messages
- Keyboard support:
  - Tab: Focus input
  - Enter: Submit form
- Error announcements
- Focus management

## i18n
Required translation keys:
```json
{
  "auth": {
    "emailOrPhone": "Email or phone number",
    "emailOrPhonePlaceholder": "Enter your email or phone number"
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Email input validation
- State management
- Disabled state handling
- i18n rendering
- Accessibility compliance
- Error state display
- Focus management

## Styling
- Theme tokens:
  - colors.input
  - typography.input
  - spacing.form
- Responsive: true
- Dark mode support: true
