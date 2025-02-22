
# AuthInput Component

## Usage
A foundational input component specifically designed for authentication forms with built-in accessibility and styling.

```tsx
import { AuthInput } from "@/components/atoms/auth-input/auth-input";

<AuthInput
  id="email"
  type="email"
  placeholder="Enter your email"
  required
  error="Invalid email format"
/>
```

## Props Interface
```typescript
interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;  // Error message for validation feedback
}
```

## Variants
- Default: Standard input with consistent styling
- Error: Input with error state styling
- Disabled: Input with reduced opacity and disabled interaction

## Accessibility
- Role: textbox
- ARIA attributes:
  - aria-invalid: true when error state is active
  - aria-describedby: links to error message when present
  - aria-required: true for required fields
- Keyboard navigation:
  - Tab: Focus/unfocus input
  - Enter: Submit form (when within form context)
- Focus management with visible focus ring
- High contrast support
- Screen reader announcements for errors

## i18n
- Supports placeholder text translation
- Error message translation
- RTL language support
- Required translation keys:
  - input.placeholder
  - input.error.required
  - input.error.invalid

## Testing
Coverage requirement: 100%
Key scenarios:
- Input value changes
- Error state rendering
- Disabled state behavior
- Accessibility compliance
- RTL layout support
- Focus management
- Screen reader compatibility
- Form integration

## Styling
- Theme tokens:
  - colors.input.border
  - colors.input.background
  - colors.input.text
  - colors.input.error
- Responsive: true
- Dark mode support: true
