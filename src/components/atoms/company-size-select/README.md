
# CompanySizeSelect Component

A reusable select component for choosing company size ranges with proper accessibility support and i18n integration.

## Usage
```tsx
import { CompanySizeSelect } from "@/components/atoms/company-size-select/company-size-select";

<CompanySizeSelect
  value={selectedSize}
  onChange={handleSizeChange}
  error={formErrors.companySize}
  disabled={isSubmitting}
/>
```

## Props Interface
```typescript
interface CompanySizeSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
}
```

## Features
- Full keyboard navigation support
- Screen reader compatibility
- Error state handling
- Loading state support
- i18n integration
- Dark/Light mode support

## Accessibility
- Proper ARIA attributes for validation states
- Keyboard navigation support
- Clear focus indicators
- Screen reader announcements for errors

## i18n
Required translations in sign-up-form namespace:
- company-size-placeholder
- company-size.1-10
- company-size.11-50
- company-size.51-200
- company-size.201-500
- company-size.501+

## Testing
Coverage: 100%
Key test scenarios:
- Renders with placeholder
- Handles error states
- Supports disabled state
- Maintains accessibility in all states
