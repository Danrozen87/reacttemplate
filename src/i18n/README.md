
# Internationalization (i18n)

This directory contains all internationalization configurations and translation files for the application.

## Structure
```
i18n/
├── locales/
│   ├── en/
│   │   ├── common.json
│   │   ├── components.json
│   │   └── pages.json
│   ├── sv/
│   ├── da/
│   └── nl/
├── config.ts
└── README.md
```

## Guidelines

### Translation File Organization
1. **Common Translations** (`common.json`)
   - Global strings used across multiple components
   - Error messages
   - Button labels
   - Form validations

2. **Component Translations** (`components.json`)
   - Component-specific strings
   - Organized by component hierarchy
   - Follows atomic design structure

3. **Page Translations** (`pages.json`)
   - Page-specific content
   - Meta titles and descriptions
   - Page-specific instructions

### Naming Conventions
- Use kebab-case for all translation keys
- Group related translations under common parents
- Use descriptive, hierarchical key names

### Required Languages
- English (en) - Base language
- Swedish (sv)
- Danish (da)
- Dutch (nl)

### Implementation Rules
1. All text content must be internationalized
2. No hardcoded strings in components
3. Maintain consistent key structure across all language files
4. Include language-specific formatting (dates, numbers, currency)
5. Document special considerations for each language

### Testing Requirements
- 100% translation coverage for all supported languages
- Validation of translation key presence
- Format string verification
- RTL layout testing where applicable

### Example Structure
```json
{
  "components": {
    "atomic": {
      "button": {},
      "input": {},
      "theme-switcher": {}
    },
    "molecular": {
      "nav-bar": {},
      "footer": {},
      "search-bar": {}
    }
  }
}
```
