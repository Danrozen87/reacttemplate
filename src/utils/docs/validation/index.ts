
/**
 * @module DocumentationValidation
 * @description Entry point for documentation validation utilities
 */

import { validateDocumentation } from './schema-validator';
import { extractDocumentation } from './doc-extractor';
import { type ValidationResult, type ParsedDocumentation } from './types';

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
