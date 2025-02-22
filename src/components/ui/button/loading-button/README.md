
# LoadingButton Component

## Usage
An enhanced button component with loading state and progress indication.

```tsx
import { LoadingButton } from "@/components/ui/button/loading-button";

function SubmitForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <LoadingButton 
      loading={isLoading} 
      onClick={handleSubmit}
    >
      Submit Form
    </LoadingButton>
  );
}
```

## Props Interface
```typescript
interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
  spinnerPosition?: 'left' | 'right';
}
```

## Variants
- Default: Standard button styling
- Loading: Shows spinner and loading text
- Disabled: Prevents interaction during loading
- All button variants supported

## Accessibility
- Role: button
- ARIA attributes:
  - aria-busy: true when loading
  - aria-disabled: true when loading/disabled
- Loading state announcements
- Focus management during state changes
- Progress indicator for screen readers

## i18n
Required translation keys:
```json
{
  "button": {
    "loading": "Loading...",
    "aria": {
      "busy": "Processing, please wait"
    }
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Loading state transitions
- Click handling during loading
- Accessibility compliance
- Loading text display
- Spinner animation
- Focus management
- Screen reader support

## Styling
- Theme tokens:
  - colors.button
  - animation.spinner
  - spacing.button
- Responsive: true
- Dark mode support: true
