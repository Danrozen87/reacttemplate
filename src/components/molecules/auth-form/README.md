
# Auth Form Component System

## Overview
A comprehensive authentication system that handles login, signup, and password recovery flows with full i18n support and accessibility features.

## Components
- AuthForm: Main authentication container
- SignUpForm: New user registration
- PasswordRecoveryForm: Password reset flow
- AuthFormFields: Reusable form field components
- AuthSocialButtons: Social authentication options

## Usage
```tsx
// Basic implementation
import { AuthForm } from './auth-form';

function LoginPage() {
  return <AuthForm />;
}

// With custom styling
<AuthForm className="max-w-lg mx-auto" />
```

## Features
- Multi-step authentication flow
- Responsive design
- Dark/light mode support
- Social authentication integration
- Password recovery workflow
- Comprehensive form validation
- Real-time feedback

## Accessibility
- ARIA live regions for form status updates
- Focus management between form states
- Clear error announcements
- Keyboard navigation support
- Screen reader optimized content
- High contrast mode support

## i18n Support
Supported languages:
- English (en)
- Swedish (sv)
- Danish (da)
- Dutch (nl)

Required translations namespace: "auth"

```json
{
  "auth": {
    "welcome": "Welcome back",
    "signInToContinue": "Sign in to continue",
    "emailOrPhone": "Email or phone",
    "password": "Password",
    "forgotPassword": "Forgot password?",
    "signIn": "Sign in",
    "createAccount": "Create account",
    "recovery": {
      "title": "Reset password",
      "instructions": "Enter your email"
    }
  }
}
```

## Testing
Coverage requirements: 90%+
Key test scenarios:
- Form validation
- Authentication flow
- i18n rendering
- Accessibility compliance
- Error handling
- State management
