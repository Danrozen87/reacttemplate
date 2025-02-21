
# CompanySizeSelect Component

## Usage
A reusable select component for choosing company size ranges.

```tsx
import { CompanySizeSelect } from "@/components/atoms/company-size-select/company-size-select";

<CompanySizeSelect
  value={selectedSize}
  onChange={handleSizeChange}
/>
```

## Props Interface
```typescript
interface CompanySizeSelectProps {
  value: string;
  onChange: (value: string) => void;
}
```

## Variants
- Default: Standard select dropdown
- Open: Expanded select options
- Disabled: Reduced opacity state

## Accessibility
- Keyboard navigation support
- ARIA attributes for select state
- Screen reader compatibility
- Focus management

## i18n
- Option text supports translation
- RTL language support

## Testing
Coverage requirement: 100%
Key scenarios:
- Value selection
- Change event handling
- Keyboard interaction
- Accessibility compliance