
import { describe, it, expect } from 'vitest';
import {
  validateDocumentation,
  extractDocumentation,
  validateComponent
} from '../validation';

describe('documentation-validation', () => {
  describe('validateDocumentation', () => {
    it('should validate a valid documentation object', () => {
      const validDoc = {
        component: "TestComponent",
        version: "1.0.0",
        category: "atom",
        description: "A test component with comprehensive validation",
        example: "Example usage code block with detailed implementation",
        interface: {
          props: [
            {
              name: "testProp",
              type: "string",
              required: true,
              description: "A test prop with validation"
            },
            {
              name: "optionalProp",
              type: "number",
              required: false,
              description: "An optional numeric prop"
            }
          ],
          exports: ["TestComponent", "TestComponentProps"]
        },
        accessibility: {
          role: "button",
          aria: ["aria-label", "aria-pressed"],
          keyboardInteractions: ["Enter", "Space", "Tab"]
        },
        i18n: {
          supportedLanguages: ["en", "sv", "da", "nl"],
          requiredKeys: ["test.key", "test.description"],
          rtlSupport: true
        },
        testing: {
          coverage: 100,
          priority: ["accessibility", "performance"],
          scenarios: ["renders correctly", "handles user interaction", "supports i18n"]
        },
        styling: {
          themeTokens: ["primary", "secondary"],
          responsive: true,
          darkMode: true
        }
      };

      const result = validateDocumentation(validDoc);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should return detailed errors for invalid documentation', () => {
      const invalidDoc = {
        component: "invalid-name",
        version: "invalid",
        category: "invalid",
        description: 123, // Invalid type
        interface: {
          props: "not-an-array" // Invalid type
        }
      };

      const result = validateDocumentation(invalidDoc);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.details).toBeDefined();
      expect(result.details?.[0]).toHaveProperty('field');
      expect(result.details?.[0]).toHaveProperty('message');
      expect(result.details?.some(d => d.field.includes('description'))).toBe(true);
    });
  });

  describe('extractDocumentation', () => {
    it('should extract documentation from valid JSDoc comments', () => {
      const validJSDoc = `
        /**
         * @component TestComponent
         * @version 1.0.0
         * @category atom
         * @description A test component with enhanced validation
         * @example
         * <TestComponent prop="value" optionalProp={42} />
         * 
         * @interface
         * testProp: { type: string; required: true; @description A test prop with validation }
         * optionalProp: { type: number; required: false; @description An optional numeric prop }
         * 
         * @interface-exports
         * - TestComponent
         * - TestComponentProps
         * 
         * @accessibility-role button
         * @accessibility-aria
         * - aria-label
         * - aria-pressed
         * 
         * @accessibility-keyboard
         * - Enter
         * - Space
         * - Tab
         * 
         * @i18n-languages
         * - en
         * - sv
         * - da
         * - nl
         * 
         * @i18n-keys
         * - test.key
         * - test.description
         * 
         * @i18n-rtl true
         * 
         * @testing-coverage 100
         * @testing-priority
         * - accessibility
         * - performance
         * 
         * @testing-scenarios
         * - renders correctly
         * - handles user interaction
         * - supports i18n
         * 
         * @styling-tokens
         * - primary
         * - secondary
         * 
         * @styling-responsive true
         * @styling-darkMode true
         */
      `;

      const result = extractDocumentation(validJSDoc);
      expect(result.component).toBe("TestComponent");
      expect(result.version).toBe("1.0.0");
      expect(result.category).toBe("atom");
      expect(result.interface.props).toHaveLength(2);
      expect(result.accessibility.aria).toHaveLength(2);
      expect(result.accessibility.keyboardInteractions).toHaveLength(3);
      expect(result.i18n.supportedLanguages).toContain("en");
      expect(result.testing.scenarios).toHaveLength(3);
      expect(result.styling.themeTokens).toHaveLength(2);
    });

    it('should handle empty or malformed JSDoc comments', () => {
      const emptyJSDoc = '/** */';
      const result = extractDocumentation(emptyJSDoc);
      expect(result.component).toBe("");
      expect(result.version).toBe("");
      expect(result.interface.props).toHaveLength(0);
      expect(result.accessibility.aria).toHaveLength(0);
      expect(result.i18n.supportedLanguages).toHaveLength(0);
      expect(result.testing.scenarios).toHaveLength(0);
    });

    it('should handle partially filled JSDoc comments', () => {
      const partialJSDoc = `
        /**
         * @component TestComponent
         * @version 1.0.0
         */
      `;
      const result = extractDocumentation(partialJSDoc);
      expect(result.component).toBe("TestComponent");
      expect(result.version).toBe("1.0.0");
      expect(result.category).toBe("");
      expect(result.interface.props).toHaveLength(0);
    });
  });

  describe('validateComponent', () => {
    it('should validate a component with valid documentation', () => {
      const validComponent = `
        /**
         * @component TestComponent
         * @version 1.0.0
         * @category atom
         * @description A test component with validation
         * @example
         * <TestComponent prop="value" />
         * 
         * @interface
         * testProp: { type: string; required: true; @description A test prop }
         * 
         * @interface-exports
         * - TestComponent
         * 
         * @accessibility-role button
         * @accessibility-aria
         * - aria-label
         * 
         * @accessibility-keyboard
         * - Enter
         * 
         * @i18n-languages
         * - en
         * - sv
         * - da
         * - nl
         * 
         * @i18n-keys
         * - test.key
         * 
         * @i18n-rtl true
         * 
         * @testing-coverage 100
         * @testing-priority
         * - accessibility
         * 
         * @testing-scenarios
         * - renders correctly
         * 
         * @styling-tokens
         * - primary
         * 
         * @styling-responsive true
         * @styling-darkMode true
         */
      `;

      const result = validateComponent(validComponent);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });
});
