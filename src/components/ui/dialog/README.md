
# Dialog Component

## Usage
A modal dialog component with focus management and accessibility features.

```tsx
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

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
  );
}
```

## Props Interface
```typescript
interface DialogProps {
  defaultOpen?: boolean;
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface DialogContentProps {
  children: React.ReactNode;
  onClose?: () => void;
}
```

## Features
- Focus trapping
- Keyboard navigation
- Backdrop click handling
- Animation support
- Nested dialog support
- Custom close handling

## Accessibility
- Role: dialog
- ARIA attributes:
  - aria-modal: true
  - aria-labelledby: dialog title
  - aria-describedby: dialog description
- Focus trap
- Escape key handling
- Screen reader optimization

## i18n
Required translation keys:
```json
{
  "dialog": {
    "close": "Close dialog",
    "aria": {
      "modal": "Dialog window",
      "description": "Dialog content"
    }
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Opening/closing behavior
- Focus management
- Keyboard navigation
- Backdrop interaction
- Animation states
- Nested dialogs
- Screen reader support

## Styling
- Theme tokens:
  - colors.dialog
  - animation.dialog
  - spacing.dialog
- Responsive: true
- Dark mode support: true
