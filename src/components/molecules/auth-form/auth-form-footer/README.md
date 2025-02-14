
# Auth Form Footer Component

## Overview
A flexible authentication form footer component that handles form actions and alternative authentication options.

## Usage
```tsx
import { AuthFormFooter } from './auth-form-footer';

function LoginForm() {
  return (
    <AuthFormFooter 
      primaryAction="Sign In"
      secondaryAction="Create Account"
      onSecondaryAction={() => {/* Handle secondary action */}}
      isSubmitting={false}
    />
  );
}
```

## Props Interface
```typescript
interface AuthFormFooterProps {
  primaryAction: string;
  secondaryAction?: string;
  onSecondaryAction?: () => void;
  isSubmitting?: boolean;
  className?: string;
}
```

## Features
- Primary/secondary actions
- Loading states
- Responsive design
- Consistent spacing
- Animation support
- Dark/light mode support

## Accessibility
- Button role associations
- Loading state announcements
- Focus management
- Keyboard navigation
- High contrast support
- Touch target sizing

## i18n Requirements
Uses shared "auth" namespace for action labels and loading states.

## Testing
Coverage target: 100%
Key scenarios:
- Button interactions
- Loading states
- Secondary action handling
- i18n rendering
- Accessibility compliance
