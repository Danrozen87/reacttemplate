
# Form Component

## Usage
A form component with validation, error handling, and accessibility features.

```tsx
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  return (
    <Form {...form}>
      <FormField
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
```

## Features
- Form validation
- Error handling
- Field management
- Nested forms
- Dynamic fields
- Form state tracking

## Accessibility
- Role: form
- ARIA attributes:
  - aria-invalid: on error
  - aria-required: required fields
  - aria-describedby: error messages
- Focus management
- Error announcements
- Keyboard navigation

## i18n
Required translation keys:
```json
{
  "form": {
    "required": "Required field",
    "error": {
      "invalid": "Invalid input",
      "required": "This field is required"
    }
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Form submission
- Validation logic
- Error handling
- Field updates
- Reset behavior
- Accessibility features
- i18n support

## Styling
- Theme tokens:
  - colors.form
  - spacing.form
  - typography.form
- Responsive: true
- Dark mode support: true
