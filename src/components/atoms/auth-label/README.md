
# AuthLabel Component

## Usage
A consistent label component for auth form fields with required field indication.

```tsx
import { AuthLabel } from "@/components/atoms/auth-label/auth-label";

<AuthLabel htmlFor="email" required>
  Email Address
</AuthLabel>
```

## Props Interface
```typescript
interface AuthLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;  // Shows required field indicator
}
```

## Variants
- Default: Standard label
- Required: Label with red asterisk
- Disabled: Label with reduced opacity

## Accessibility
- Proper HTML label association
- Required field indication
- Color contrast compliance
- Screen reader optimization

## i18n
- Supports label text translation
- RTL language support

## Testing
Coverage requirement: 100%
Key scenarios:
- Required state rendering
- Label association
- Accessibility compliance
- RTL support


