
/**
 * @module DocumentationValidation
 * @description Utilities for validating component documentation against schema
 */

import Ajv from "ajv";
import schema from "@/components/atoms/.docs-schema.json";

const ajv = new Ajv();
const validate = ajv.compile(schema);

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

interface ParsedProp {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface ParsedDocumentation {
  component: string;
  version: string;
  category: "atom" | "molecule" | "organism";
  description: string;
  example: string;
  interface: {
    props: ParsedProp[];
    exports: string[];
  };
  accessibility: {
    role: string;
    aria: string[];
    keyboardInteractions: string[];
  };
  i18n: {
    supportedLanguages: string[];
    requiredKeys: string[];
    rtlSupport: boolean;
  };
  testing: {
    coverage: number;
    priority: string[];
    scenarios: string[];
  };
  styling: {
    themeTokens: string[];
    responsive: boolean;
    darkMode: boolean;
  };
}

/**
 * Extracts a specific tag value from JSDoc comment
 */
function extractTag(source: string, tag: string): string {
  const regex = new RegExp(`@${tag}\\s+([^@]*?)(?=\\s*@|\\s*\\*/|$)`, 's');
  const match = source.match(regex);
  return (match?.[1] || '').trim();
}

/**
 * Extracts an array of values from a JSDoc tag that contains a list
 */
function extractArrayTag(source: string, tag: string): string[] {
  const content = extractTag(source, tag);
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('-'))
    .map(line => line.slice(1).trim());
}

/**
 * Extracts interface properties from JSDoc comment
 */
function extractProps(source: string): ParsedProp[] {
  const interfaceContent = extractTag(source, 'interface');
  const propsRegex = /(\w+):\s*{([^}]+)}/g;
  const props: ParsedProp[] = [];

  let match;
  while ((match = propsRegex.exec(interfaceContent)) !== null) {
    const [_, name, details] = match;
    const required = !details.includes('?:');
    const type = details.match(/:\s*([^;]+)/)?.[1] || 'any';
    const description = details.match(/@description\s+(.+)/)?.[1] || '';

    props.push({ name, type, required, description });
  }

  return props;
}

/**
 * Validates component documentation against the schema
 */
export function validateDocumentation(documentation: unknown): ValidationResult {
  const valid = validate(documentation);
  
  return {
    isValid: valid,
    errors: valid ? [] : (validate.errors?.map(err => 
      `${err.instancePath} ${err.message}`
    ) ?? [])
  };
}

/**
 * Extracts documentation from JSDoc comments
 */
export function extractDocumentation(source: string): ParsedDocumentation {
  const componentName = extractTag(source, 'component');
  const version = extractTag(source, 'version');
  const category = extractTag(source, 'category') as ParsedDocumentation['category'];
  const description = extractTag(source, 'description');
  const example = extractTag(source, 'example');

  const accessibility = {
    role: extractTag(source, 'accessibility-role'),
    aria: extractArrayTag(source, 'accessibility-aria'),
    keyboardInteractions: extractArrayTag(source, 'accessibility-keyboard')
  };

  const i18n = {
    supportedLanguages: extractArrayTag(source, 'i18n-languages'),
    requiredKeys: extractArrayTag(source, 'i18n-keys'),
    rtlSupport: extractTag(source, 'i18n-rtl') === 'true'
  };

  const testing = {
    coverage: parseInt(extractTag(source, 'testing-coverage')) || 0,
    priority: extractArrayTag(source, 'testing-priority'),
    scenarios: extractArrayTag(source, 'testing-scenarios')
  };

  const styling = {
    themeTokens: extractArrayTag(source, 'styling-tokens'),
    responsive: extractTag(source, 'styling-responsive') === 'true',
    darkMode: extractTag(source, 'styling-darkMode') === 'true'
  };

  return {
    component: componentName,
    version,
    category,
    description,
    example,
    interface: {
      props: extractProps(source),
      exports: extractArrayTag(source, 'interface-exports')
    },
    accessibility,
    i18n,
    testing,
    styling
  };
}

/**
 * Validates a component's documentation
 */
export function validateComponent(source: string): ValidationResult {
  const documentation = extractDocumentation(source);
  return validateDocumentation(documentation);
}
