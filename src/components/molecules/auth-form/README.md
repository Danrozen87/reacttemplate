
# Auth Form Component

## Usage
The AuthForm component provides user authentication functionality with role-based access control.

```tsx
import { AuthForm } from './auth-form';

function LoginPage() {
  return <AuthForm />;
}
```

## Props Interface
The AuthForm component doesn't accept any props as it manages its own state internally.

## Variants
- Default login form
- Password recovery form (toggled via "Forgot Password" link)

## Accessibility
- ARIA live regions for status updates
- Proper focus management
- Clear error messaging
- Keyboard navigation support

## i18n
Required translations under the "auth" namespace:
- auth.welcome
- auth.signInToContinue
- auth.loginSuccess
- auth.loginError
- auth.tryAgain
- auth.roleAssigned.[role]

## Testing
Coverage requirements: 100% for form logic
Key test scenarios:
- Form rendering
- Input validation
- Password visibility toggle
- Recovery mode toggle
- Success/error states
- Role-based responses
