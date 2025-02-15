
import { ErrorObject } from "ajv";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  details?: {
    field: string;
    message: string;
    value?: unknown;
  }[];
  propValidation?: PropValidationResult;
}

export interface ParsedProp {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface PropValidationResult {
  isValid: boolean;
  mismatches: PropMismatch[];
}

export interface PropMismatch {
  propName: string;
  documentedType: string;
  actualType: string;
  issue: 'type_mismatch' | 'missing_in_code' | 'missing_in_docs' | 'required_mismatch';
}

export interface ParsedDocumentation {
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
