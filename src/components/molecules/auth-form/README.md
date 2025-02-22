
# Auth Form Component

## Usage
```tsx
import { AuthForm } from "@/components/molecules/auth-form";

function LoginPage() {
  return <AuthForm />;
}
```

## Features
- Role-based authentication
- Password recovery
- Sign-up flow
- Animated transitions
- Toast notifications
- Internationalization

## Components
- `AuthForm`: Main authentication form component
- `AuthFormContainer`: Wrapper component with animations
- `AuthFormState`: Custom hook for form state management

## Common Use Cases
- Main authentication form that handles login, signup, and password recovery flows
- Supports role-based access control (Admin, Manager, User)

## Variants
- Login form (default)
- Sign up form
- Password recovery form

## Accessibility
- ARIA labels for form elements
- Proper focus management
- Screen reader support
- Loading states
- Clear error messaging
- Loading state indicators

## i18n
Required translations for:
- Form labels
- Button text
- Error messages
- Success messages
- Role-specific messages

Supports:
- English (en)
- Swedish (sv)
- Danish (da)
- Dutch (nl)

## Testing
Coverage requirements:
- Form submission: 100%
- Role-based access: 100%
- State transitions: 100%
- Error handling: 100%
- Unit tests: 90%
- Integration tests: 85%
- E2E tests: 80%

## Performance
- Lazy-loaded components
- Optimized re-renders
- Proper error boundaries
