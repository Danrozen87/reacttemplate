
# AuthForm Component

## Usage
```tsx
import { AuthForm } from "./auth-form"

function LoginPage() {
  return <AuthForm />
}
```

## Features
- Email/password authentication
- Password recovery flow
- Social authentication options
- Role-based access control
- Responsive design
- Animated transitions

## Props Interface
```tsx
interface AuthFormProps {
  // Currently no props required - component is self-contained
}
```

## Variants
- Default login form
- Password recovery form
- Future variants may include registration form

## Accessibility
- ARIA roles and attributes
  - Form has proper role="form"
  - Error messages use aria-live="assertive"
  - Loading states properly announced
- Keyboard Navigation
  - Tab order follows visual layout
  - Enter submits form
  - Escape closes modals
- Screen Reader Considerations
  - All form fields have proper labels
  - Error states announced
  - Success messages properly conveyed

## i18n
Required translations:
```json
{
  "auth": {
    "login": "Log in",
    "email": "Email",
    "password": "Password",
    "forgotPassword": "Forgot password?",
    "resetPassword": "Reset password",
    "backToLogin": "Back to login",
    "loginSuccess": "Successfully logged in",
    "loginError": "Login failed",
    "tryAgain": "Please try again",
    "roleAssigned": {
      "admin": "Logged in as administrator",
      "manager": "Logged in as manager",
      "user": "Logged in as user"
    }
  }
}
```

## Testing
Coverage requirement: 100%

Test scenarios:
- Form submission with valid credentials
- Form submission with invalid credentials
- Password recovery flow
- Role-based access validation
- i18n rendering for all supported languages
- Accessibility compliance
- Animation transitions
- Mobile responsiveness
- Dark/light mode rendering
