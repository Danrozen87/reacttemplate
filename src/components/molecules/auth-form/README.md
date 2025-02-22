
# Auth Form Component

## Overview
The AuthForm component handles user authentication with role-based access control. It provides login, signup, and password recovery functionality with proper form validation and state management.

## Components
- `AuthForm`: Main container component
- `AuthFormContent`: Form content with fields and actions
- `AuthFormHeader`: Form title and description
- `AuthFormFields`: Input fields for authentication
- `AuthFormFooter`: Additional actions like signup
- `AuthFormContainer`: Layout wrapper component

## Props Interface
```typescript
interface AuthFormProps {
  className?: string;
}
```

## Features
- Email/password authentication
- Password recovery flow
- Sign up option
- Role-based access control
- Responsive design
- Form validation
- Loading states

## Accessibility
- ARIA labels for form elements
- Proper focus management
- Loading state indicators
- Error announcements
- Keyboard navigation support

## i18n Support
Supports all required languages:
- English
- Swedish
- Danish
- Dutch

## Testing
Coverage requirement: 100%
Key test scenarios:
- Form submission
- Field validation
- State transitions
- Role-based access
- Error handling
- Loading states
