
import { ErrorObject } from "ajv";

/**
 * Formats validation errors into user-friendly messages
 */
export function formatValidationError(error: ErrorObject): string {
  const field = error.instancePath.replace(/^\//, '') || 'root';
  const value = error.data;
  
  switch (error.keyword) {
    case 'required':
      return `Missing required field: ${error.params.missingProperty}`;
    case 'enum':
      return `Invalid value for ${field}. Allowed values: ${error.params.allowedValues.join(', ')}`;
    case 'pattern':
      return `Invalid format for ${field}. Must match pattern: ${error.params.pattern}`;
    case 'minItems':
      return `${field} must have at least ${error.params.limit} items`;
    case 'type':
      return `Invalid type for ${field}. Expected ${error.params.type}`;
    default:
      return `${field} ${error.message}`;
  }
}
