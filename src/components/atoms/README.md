
# Atomic Components

## Overview
This directory contains atomic-level components - the smallest, indivisible UI elements of our application.

## Components

### AuthInput
- Purpose: Base input component for authentication forms
- Props: Extends standard input props plus error handling
- Usage: Login, registration, and password recovery forms

### AuthLabel
- Purpose: Standardized form label with required field support
- Props: Extends standard label props plus required indicator
- Usage: Form field labels across auth flows

### AuthLogo
- Purpose: Application branding component
- Props: Optional className for styling customization
- Usage: Header and authentication screens

## Guidelines
- Each component must be a single file at root level
- No nested folders allowed
- Maximum 68 lines per file
- Full i18n support required
- Must include proper TypeScript definitions
- Must follow accessibility best practices

## Testing
- Unit tests required for all components
- Test files co-located in __tests__ directory
- Coverage requirements: 90%+

## i18n Support
- All text must be internationalized
- Support for en, sv, da, nl locales
- Translation keys follow component hierarchy

## Accessibility
- ARIA attributes required
- Keyboard navigation support
- Screen reader optimization
- Color contrast compliance

