
# Toast Hook

## Usage
A custom hook for managing toast notifications with support for different variants and actions.

```tsx
import { useToast, toast } from "@/hooks/toast";

function MyComponent() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Success",
      description: "Operation completed",
      variant: "default",
    });
  };

  return <button onClick={showToast}>Show Toast</button>;
}
```

## Features
- Multiple toast variants
- Customizable duration
- Action support
- Queue management
- Automatic dismissal
- Accessibility announcements

## API
```typescript
interface ToastOptions {
  title?: string;
  description?: string;
  action?: ToastAction;
  variant?: "default" | "destructive";
  duration?: number;
}

function useToast(): {
  toast: (options: ToastOptions) => void;
  dismiss: (toastId?: string) => void;
  toasts: ToasterToast[];
};
```

## Accessibility
- ARIA live regions
- Role: alert/status
- Screen reader announcements
- Keyboard dismissal
- Focus management

## Testing
Coverage requirement: 100%
Key scenarios:
- Toast creation
- Toast dismissal
- Queue management
- Action handling
- Duration timing
- Screen reader support
- Keyboard interaction

## Integration
- Works with Radix UI Toast primitive
- Supports Tailwind CSS styling
- Theme aware
- Responsive design

## Performance
- Optimized re-renders
- Memory leak prevention
- Queue size limitation
- Automatic cleanup
