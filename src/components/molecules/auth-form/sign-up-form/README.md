
# SignUp Form Component

## Overview
A comprehensive signup form component with multi-step validation, company information collection, and accessibility features.

## Usage
```tsx
import { SignUpForm } from './sign-up-form';

function RegistrationPage() {
  return (
    <SignUpForm 
      onBack={() => {/* Handle navigation */}} 
    />
  );
}
```

## Props Interface
```typescript
interface SignUpFormProps {
  onBack: () => void;  // Handler for navigation back to login
  className?: string;  // Optional styling override
}
```

## Features
- Progressive form validation
- Company size selection
- Real-time input validation
- Responsive design
- Error handling
- Loading states

## Accessibility
- Form validation announcements
- Required field indicators
- Error message association
- Focus management
- Keyboard navigation
- ARIA labels and descriptions

## i18n Requirements
Namespace: "auth.signup"
```json
{
  "auth": {
    "signup": {
      "title": "Create an Account",
      "description": "Enter your information",
      "firstName": "First Name",
      "lastName": "Last Name",
      "email": "Email",
      "companyName": "Company Name",
      "companySize": "Company Size",
      "submit": "Create Account",
      "back": "Back to Login"
    }
  }
}
```

## Testing
Coverage target: 100%
Key scenarios:
- Form submission
- Input validation
- Company size selection
- Error handling
- i18n rendering
- Accessibility compliance

