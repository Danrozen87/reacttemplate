
# Auth Form Header Component

## Overview
A reusable authentication form header component that provides consistent branding and messaging across different authentication states.

## Usage
```tsx
import { AuthFormHeader } from './auth-form-header';

function LoginForm() {
  return (
    <AuthFormHeader 
      title="Welcome Back"
      description="Sign in to continue"
    />
  );
}
```

## Props Interface
```typescript
interface AuthFormHeaderProps {
  title: string;
  description?: string;
  className?: string;
}
```

## Features
- Consistent typography
- Responsive design
- Dark/light mode support
- Optional description
- Animation support
- Brand logo integration

## Accessibility
- Semantic heading structure
- Color contrast compliance
- Screen reader optimization
- Motion reduction support
- Text scaling support

## i18n Requirements
Uses shared "auth" namespace translations for titles and descriptions.

## Testing
Coverage target: 100%
Key scenarios:
- Rendering with/without description
- Dark/light mode
- Responsive behavior
- i18n rendering
- Accessibility compliance
