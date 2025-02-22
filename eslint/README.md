
# ESLint Configuration

This directory contains our modular ESLint configuration files. Each file focuses on a specific aspect of code quality and maintainability.

## Structure

- `rules/component-rules.ts`: Component structure and naming conventions
- `rules/typescript-rules.ts`: TypeScript-specific rules and naming conventions
- `rules/i18n-rules.ts`: Internationalization requirements
- `rules/documentation-rules.ts`: Documentation standards
- `rules/a11y-rules.ts`: Accessibility requirements
- `rules/style-rules.ts`: Styling and Tailwind CSS rules
- `rules/performance-rules.ts`: Performance optimization rules
- `rules/import-rules.ts`: Import organization and structure

## Usage

Rules are imported and combined in the root `eslint.config.js` file. To modify rules:

1. Locate the appropriate category file
2. Make changes while maintaining the established patterns
3. Ensure changes align with our project constraints

## Key Constraints

- Max 68 lines per file
- Kebab-case for file names
- Atomic design structure
- Comprehensive documentation
- Accessibility compliance
