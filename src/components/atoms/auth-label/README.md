
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
- Role: label
- ARIA attributes:
  - aria-hidden: false (ensures screen readers read the label)
- Required field indication visible and announced
- Color contrast ratio: Meets WCAG 2.1 Level AA
- Font size adjusts with system settings
- Screen reader optimization for required state

## i18n
- Supports label text translation
- RTL language support
- Required translation keys:
  - label.required
  - label.optional
- Supports all required languages:
  - English
  - Swedish
  - Danish
  - Dutch

## Testing
Coverage requirement: 100%
Key scenarios:
- Required state rendering
- Label association with input
- Accessibility compliance
- RTL support
- Screen reader announcement
- Theme consistency
- Responsive behavior

## Styling
- Theme tokens:
  - colors.label.text
  - colors.label.required
  - typography.label
- Responsive: true
- Dark mode support: true
