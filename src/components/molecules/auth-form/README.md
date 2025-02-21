
# Auth Form Component

## Usage
```tsx
import { AuthForm } from "@/components/molecules/auth-form";

function LoginPage() {
  return <AuthForm />;
}
```

## Components
- `AuthForm`: Main authentication form component
- `AuthFormContainer`: Wrapper component with animations
- `AuthFormState`: Custom hook for form state management

## Features
- Role-based authentication
- Password recovery
- Sign-up flow
- Animated transitions
- Toast notifications
- Internationalization

## Accessibility
- ARIA labels for form elements
- Proper focus management
- Screen reader support
- Loading states

## i18n
Supports:
- English (en)
- Swedish (sv)
- Danish (da)
- Dutch (nl)

## Testing
Coverage requirements:
- Unit tests: 90%
- Integration tests: 85%
- E2E tests: 80%

## Performance
- Lazy-loaded components
- Optimized re-renders
- Proper error boundaries
