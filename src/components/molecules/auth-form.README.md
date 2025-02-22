
# Auth Form Component

## Usage
- Main authentication form component that handles login, signup, and password recovery flows
- Supports role-based access control (Admin, Manager, User)

## Common Use Cases
```tsx
<AuthForm />
```

## Props
None

## Variants
- Login form (default)
- Sign up form
- Password recovery form

## Accessibility
- ARIA roles and attributes for form elements
- Proper focus management
- Clear error messaging
- Loading state indicators

## i18n
Required translations for:
- Form labels
- Button text
- Error messages
- Success messages
- Role-specific messages

## Testing
Coverage requirements:
- Form submission: 100%
- Role-based access: 100%
- State transitions: 100%
- Error handling: 100%
