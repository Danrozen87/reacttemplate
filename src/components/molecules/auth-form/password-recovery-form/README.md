
# Password Recovery Form Component

## Overview
A secure password recovery form component that handles the password reset flow with email verification and proper accessibility features.

## Usage
```tsx
import { PasswordRecoveryForm } from './password-recovery-form';

function RecoveryPage() {
  return (
    <PasswordRecoveryForm 
      onBack={() => {/* Handle navigation */}} 
    />
  );
}
```

## Props Interface
```typescript
interface PasswordRecoveryFormProps {
  onBack: () => void;  // Handler for navigation back to login
}
```

## Features
- Email validation
- Loading states
- Success/error notifications
- Toast feedback
- Responsive design
- Animation support

## Accessibility
- Form validation announcements
- Loading state indicators
- Error message association
- Focus management
- Keyboard navigation
- ARIA labels and descriptions

## i18n Requirements
Namespace: "auth.recovery"
```json
{
  "auth": {
    "recovery": {
      "title": "Reset Password",
      "description": "Enter your email to reset your password",
      "emailPlaceholder": "Enter your email",
      "sendInstructions": "Send Instructions",
      "backToLogin": "Back to Login",
      "emailSent": "Recovery Email Sent",
      "checkInbox": "Please check your inbox",
      "error": "Recovery Error",
      "tryAgain": "Please try again"
    }
  }
}
```

## Testing
Coverage target: 100%
Key scenarios:
- Email validation
- Form submission
- Loading states
- Error handling
- Success notifications
- i18n rendering
- Accessibility compliance
