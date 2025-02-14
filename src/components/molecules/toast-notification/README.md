
# Toast Notification Component

## Usage
```tsx
import { showToast } from "@/utils/logger/toast-utils";

// Basic usage
showToast("messageKey");

// With options
showToast("messageKey", {
  description: "descriptionKey",
  duration: 5000,
  requiredRole: "admin"
}, "destructive");
```

## Variants
- Default: Informational toasts
- Destructive: Error/warning toasts

## Accessibility
- ARIA roles: status/alert
- Live regions for screen readers
- Keyboard dismissible
- High contrast colors

## i18n
Required translations:
```json
{
  "toast": {
    "errors": {
      "generic": "An error occurred",
      "network": "Network error",
      "unauthorized": "Unauthorized access"
    },
    "success": {
      "generic": "Operation successful",
      "saved": "Changes saved"
    }
  }
}
```

## Testing
Coverage target: 90%
Test scenarios:
- Renders correctly
- Shows/hides properly
- Handles all variants
- Respects user roles
- Manages translations
