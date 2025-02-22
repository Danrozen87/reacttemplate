# Toast Notification Component

## Usage
A toast notification component for displaying brief status messages.

```tsx
import { ToastNotification } from "@/components/molecules/toast-notification";

function DisplayToast() {
  return (
    <ToastNotification
      type="success"
      message="Operation completed successfully!"
      duration={3000}
    />
  );
}
```

## Props Interface
```typescript
interface ToastNotificationProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  onClose?: () => void;
}
```

## Features
- Multiple notification types
- Customizable duration
- Animated transitions
- User role awareness
- i18n support
- Keyboard accessibility
- Screen reader announcements

## Accessibility
- Role: alert
- ARIA attributes:
  - aria-live: assertive
  - aria-atomic: true
- Keyboard navigation
- Focus management
- Screen reader optimization

## i18n
Required translation keys:
```json
{
  "toast": {
    "success": "Success",
    "error": "Error",
    "warning": "Warning",
    "info": "Information",
    "close": "Close notification"
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Test scenarios:
- Renders correctly
- Shows/hides properly
- Handles all variants
- Respects user roles
- Manages translations
- Animation states
- Keyboard interactions
- Screen reader announcements
- Focus management
- Theme compatibility

## Styling
- Theme tokens:
  - colors.toast
  - typography.toast
  - spacing.toast
- Responsive: true
- Dark mode support: true
