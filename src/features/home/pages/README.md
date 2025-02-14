
# Authentication Page

## Usage
The authentication page serves as the entry point for user login and registration.

```tsx
import HomePage from "./pages/index"

function App() {
  return <HomePage />
}
```

## Components
- AuthForm: Handles user input and authentication
- AuthHero: Displays hero image and quote
- AuthLogo: Branding component

## Features
- Focus management with focus-trap-react
- Loading state animations
- Keyboard shortcuts:
  - Alt + L: Focus language switcher

## Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- High contrast in both light and dark modes
- Screen reader announcements for loading states

## i18n Requirements
### Required Translations
```json
{
  "auth": {
    "welcome": "Welcome back",
    "loading": "Loading authentication page",
    "signInToContinue": "Sign in to continue",
    "emailOrPhone": "Email or phone number",
    "password": "Password",
    "rememberMe": "Remember me",
    "forgotPassword": "Forgot password?",
    "signIn": "Sign in",
    "orContinueWith": "Or continue with",
    "signInWithGoogle": "Sign in with Google",
    "noAccount": "Don't have an account?",
    "signUpNow": "Sign up now",
    "heroImageAlt": "Hero image",
    "heroQuote": "Innovation is the ability to see change as an opportunity - not a threat",
    "heroAuthor": "Steve Jobs"
  }
}
```

### Supported Languages
- English (en)
- Swedish (sv)
- Danish (da)
- Dutch (nl)

## Testing
Coverage requirement: 90%

Test scenarios:
- Loading state display
- Form submission
- Form validation
- Social login integration
- Responsive layout
- Dark mode toggle
- Accessibility compliance
- i18n rendering
- Animation transitions
- Focus trap functionality
- Keyboard shortcuts
