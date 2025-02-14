
# Sign Up Form Components

## Structure
- `sign-up-form.tsx` - Main container component
- `personal-info.tsx` - Name and email fields
- `company-info.tsx` - Company details fields
- `form-actions.tsx` - Form submission and navigation buttons

## Usage
```tsx
import { SignUpForm } from "./sign-up";

function AuthForm() {
  return <SignUpForm onBack={() => {}} />;
}
```

## Accessibility
- All inputs have associated labels
- Required fields are clearly marked
- Proper ARIA attributes on all interactive elements
- Focus management during form navigation
- Loading states for all interactive elements

## i18n
Required translations under "auth.signup" namespace:
- title
- description
- firstName/LastName
- email
- companyName
- companySize
- create/creating
- backToLogin

## Testing
Coverage requirements: 100%
Key scenarios:
- Form submission
- Validation
- Loading states
- Back navigation
- Accessibility compliance
