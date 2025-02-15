
/**
 * @module DocumentationValidation
 * @description Entry point for documentation validation utilities
 */

export { validateDocumentation } from './schema-validator';
export { extractDocumentation } from './doc-extractor';
export { type ValidationResult, type ParsedDocumentation } from './types';

/**
 * Validates a component's documentation
 */
export function validateComponent(source: string): ValidationResult {
  const documentation = extractDocumentation(source);
  return validateDocumentation(documentation);
}
