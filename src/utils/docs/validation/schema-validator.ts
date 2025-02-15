
import Ajv from "ajv";
import schema from "@/components/atoms/.docs-schema.json";
import { ValidationResult } from './types';
import { formatValidationError } from './error-formatter';

const ajv = new Ajv();
const validate = ajv.compile(schema);

/**
 * Validates component documentation against the schema
 */
export function validateDocumentation(documentation: unknown): ValidationResult {
  const valid = validate(documentation);
  
  if (!valid && validate.errors) {
    const formattedErrors = validate.errors.map(formatValidationError);
    const details = validate.errors.map(error => ({
      field: error.instancePath.replace(/^\//, '') || 'root',
      message: formatValidationError(error),
      value: error.data
    }));

    return {
      isValid: false,
      errors: formattedErrors,
      details
    };
  }

  return {
    isValid: true,
    errors: []
  };
}
