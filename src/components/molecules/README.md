
# Molecular Components

## Overview
This directory contains molecular-level components - combinations of atoms that form distinct UI sections.

## Components

### AuthForm
- Purpose: Complete authentication form with email and password
- Composition: AuthInput, AuthLabel, and form layout
- Features: Form validation, submission handling

### PasswordRecoveryForm
- Purpose: Password reset request form
- Composition: AuthInput, AuthLabel, and status messages
- Features: Email validation, recovery flow

### SignUpForm
- Purpose: New user registration
- Composition: Multiple AuthInputs, validation logic
- Features: Multi-step registration process

## Guidelines
- Components should combine atoms only
- Maximum 68 lines per file
- Full i18n support required
- Proper TypeScript definitions
- Accessibility compliance

## Testing
- Unit tests for all components
- Integration tests for form submissions
- Coverage requirement: 90%+

## i18n Support
- All text must be internationalized
- Support for en, sv, da, nl locales
- Proper translation key hierarchy

## Accessibility
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Error state handling
