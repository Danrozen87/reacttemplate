
# Input Component

## Overview
An atomic input component that serves as the foundation for all text input fields in the application.

## Usage
```tsx
import { Input } from "@/components/ui/reference/atoms/input/input"

// Default input
<Input placeholder="Enter text" />

// With error state
<Input error="This field is required" />

// Different types
<Input type="email" />
<Input type="password" />
```

## Props
- Extends all native HTML input attributes
- `error`: Optional error message string
- All standard input HTML attributes

## Accessibility
- Proper ARIA attributes for error states
- Focus states with visible ring
- Color contrast compliant
- Screen reader support for error messages

## i18n
No direct text content - placeholder and error messages should be provided by parent components

## Testing Coverage: 90%+
Key test scenarios:
- Renders correctly with default props
- Handles different input types
- Displays error states appropriately
- Maintains accessibility features
- Theme compatibility
