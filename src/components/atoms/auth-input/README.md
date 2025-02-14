
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
- ARIA attributes for validation states
- Error message association
- Proper focus management
- Screen reader compatibility

## i18n
- Supports placeholder text translation
- Error message translation
- RTL language support

## Testing
Coverage requirement: 100%
Key scenarios:
- Input value changes
- Error state rendering
- Disabled state behavior
- Accessibility compliance
- RTL layout support
