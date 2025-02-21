
# Internationalization (i18n) Strategy

## Structure Overview

Our i18n implementation follows an atomic design pattern, with translations organized by component level:

```
i18n/
├── components/
│   ├── atoms/
│   │   └── [component-name]/
│   │       ├── en.json
│   │       ├── da.json
│   │       ├── sv.json
│   │       └── nl.json
│   ├── molecules/
│   └── organisms/
└── config.ts
```

## Key Principles

1. **Atomic Organization**
   - Each component has its own translation files
   - Follows atomic design hierarchy (atoms, molecules, organisms)
   - Maximum of 20 keys per file for maintainability

2. **Type Safety**
   - All translations are strictly typed
   - Component-specific translation interfaces
   - No use of "any" type

3. **Namespace Convention**
   - Namespaces match component paths
   - Clear, predictable naming patterns
   - Avoid namespace collisions

4. **Required Languages**
   - English (en) - Base language
   - Danish (da)
   - Swedish (sv)
   - Dutch (nl)

5. **File Structure**
   - One translation file per language per component
   - Consistent JSON structure across languages
   - Clear key hierarchy

## Usage Example

```typescript
// In a component
const { t } = useTranslation("auth-label");
const label = t("auth.label.email");
```

## Adding New Translations

1. Create JSON files for all required languages
2. Add translation type to `config.ts`
3. Add namespace to resources and namespaces array
4. Update component to use new namespace

## Maintenance

- Regular validation of unused keys
- Consistency checks across languages
- Type generation updates
