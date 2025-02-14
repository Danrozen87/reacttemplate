
# Dialog Component

## Usage
```tsx
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

function Example() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description here.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

## Variants
- Default: Standard modal dialog
- Alert: For important notifications
- Form: For data collection
- Confirmation: For user decisions

## Accessibility
- Uses native dialog role
- Manages focus trap
- Supports keyboard navigation (Esc to close)
- ARIA labels for all interactive elements
- Screen reader announcements

## i18n
Required translations:
```json
{
  "components": {
    "dialog": {
      "close": "Close dialog",
      "aria": {
        "modal": "Dialog window",
        "description": "Dialog content"
      }
    }
  }
}
```

## Testing
Coverage target: 90%
Test scenarios:
- Opens and closes correctly
- Keyboard navigation works
- Focus management
- Screen reader compatibility
- Blur effect application
