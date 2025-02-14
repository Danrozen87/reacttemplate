
# LanguageSwitcher Component

## Overview
A dropdown component that allows users to switch between supported languages.

## Usage
```tsx
import { LanguageSwitcher } from "./language-switcher";

function Header() {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  );
}
```

## Features
- Supports all required languages (English, Swedish, Danish, Dutch)
- Animated transitions
- Accessible button and menu
- Visual indication of current language
- Keyboard navigation support

## Accessibility
- ARIA labels for language selection
- Keyboard navigation support
- High contrast visual indicators
- Screen reader announcements for language changes

## Testing
Coverage requirement: 90%
- Renders correctly
- Shows language options
- Changes language on selection
- Keyboard navigation works
- Proper ARIA attributes
