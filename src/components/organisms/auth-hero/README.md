
# AuthHero Component

## Overview
Hero section component for the authentication page featuring a background image and inspirational quote.

## Usage
```tsx
import { AuthHero } from "./auth-hero";

function LoginPage() {
  return (
    <div>
      <AuthHero />
    </div>
  );
}
```

## Features
- Responsive design (hidden on mobile, visible on desktop)
- Animated entrance
- Accessible image and text content
- Dark mode support
- Gradient overlay for better text readability

## Accessibility
- Proper ARIA roles and labels
- Background image marked as presentational
- High contrast text
- Screen reader support

## i18n
Required translations:
```json
{
  "auth": {
    "heroSection": "Authentication hero section",
    "heroImageAlt": "Hero background image",
    "heroQuote": "Innovation is the ability to see change as an opportunity - not a threat",
    "heroAuthor": "Steve Jobs"
  }
}
```

## Testing
Coverage requirement: 90%
Test scenarios:
- Renders correctly
- Handles translations
- Responsive display
- Animation classes
- Accessibility compliance
