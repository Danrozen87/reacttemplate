
# Sign Up Components

This folder contains all components related to the sign-up functionality.

## Components
- `SignUpForm`: Main form component that orchestrates the sign-up flow
- `SignUpHeader`: Header component with title and description
- `SignUpFields`: Form fields component containing all input fields
- `SignUpActions`: Action buttons component (submit and back)

## Usage
```tsx
import { SignUpForm } from "@/components/molecules/sign-up";

function SignUpPage() {
  const handleBack = () => {
    // Handle back navigation
  };

  return <SignUpForm onBack={handleBack} />;
}
```

## Features
- Company information collection
- Personal information collection
- Form validation
- Loading states
- Error handling
- Back navigation
- Internationalization support

## i18n
Supports:
- English (en)
- Swedish (sv)
- Danish (da)
- Dutch (nl)

## Accessibility
- ARIA labels
- Form validation
- Error messaging
- Loading indicators
- Keyboard navigation

## Testing
Required coverage:
- Unit tests: 90%
- Integration tests: 85%
- Validation tests: 100%
- Error handling: 100%
