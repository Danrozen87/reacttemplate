
# Documentation Validation Tools

This directory contains utilities for validating component documentation against our schema.

## Features

1. **Schema Validation**
   - JSON Schema for component documentation
   - Automated validation tools
   - Clear error reporting

2. **Documentation Extraction**
   - JSDoc parsing utilities
   - Structured documentation objects
   - Type-safe documentation handling

3. **Integration**
   - CI/CD pipeline integration
   - Pre-commit hooks
   - IDE integration

## Usage

```typescript
import { validateDocumentation, extractDocumentation } from '@/utils/docs/validation';

// Extract documentation from source
const docs = extractDocumentation(sourceCode);

// Validate documentation
const { isValid, errors } = validateDocumentation(docs);

if (!isValid) {
  console.error('Documentation validation failed:', errors);
}
```

## Schema Requirements

1. **Component Metadata**
   - Name format: PascalCase
   - Version: Semantic versioning
   - Category: atom | molecule | organism

2. **Documentation Sections**
   - Description (max 500 chars)
   - Interface definition
   - Accessibility requirements
   - i18n support
   - Testing requirements
   - Styling specifications

3. **Validation Rules**
   - All required fields must be present
   - Values must match specified formats
   - Arrays must meet minimum requirements

## Integration Guidelines

1. **CI/CD Pipeline**
   ```yaml
   documentation:
     script:
       - npm run validate-docs
   ```

2. **Git Hooks**
   ```json
   {
     "pre-commit": "npm run validate-docs"
   }
   ```

3. **IDE Setup**
   - VSCode extension configuration
   - Documentation snippets
   - Real-time validation

