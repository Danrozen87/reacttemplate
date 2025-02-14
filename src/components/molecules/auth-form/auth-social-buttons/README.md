
# Auth Social Buttons Component

## Overview
A collection of social authentication buttons supporting multiple providers with consistent styling and accessibility features.

## Usage
```tsx
import { AuthSocialButtons } from './auth-social-buttons';

function LoginForm() {
  return (
    <AuthSocialButtons 
      onSocialAuth={(provider) => {/* Handle social auth */}} 
      disabled={false}
    />
  );
}
```

## Props Interface
```typescript
interface AuthSocialButtonsProps {
  onSocialAuth: (provider: 'google' | 'github' | 'twitter') => void;
  disabled?: boolean;
  className?: string;
}
```

## Features
- Multiple provider support
- Consistent button styling
- Loading states
- Provider icons
- Responsive design
- Hover effects

## Accessibility
- ARIA labels for each provider
- Loading state indicators
- Focus management
- Keyboard navigation
- High contrast support
- Screen reader optimization

## i18n Requirements
Namespace: "auth.social"
```json
{
  "auth": {
    "social": {
      "continueWith": "Continue with {{provider}}",
      "google": "Google",
      "github": "GitHub",
      "twitter": "Twitter",
      "or": "or"
    }
  }
}
```

## Testing
Coverage target: 100%
Key scenarios:
- Button interactions
- Provider callbacks
- Loading states
- Disabled states
- i18n rendering
- Accessibility compliance
