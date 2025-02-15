
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
        description: "A test component",
        example: "Example usage code block",
        interface: {
          props: [
            {
              name: "testProp",
              type: "string",
              required: true,
              description: "A test prop"
            }
          ],
          exports: ["TestComponent"]
        },
        accessibility: {
          role: "button",
          aria: ["aria-label"],
          keyboardInteractions: ["Enter", "Space"]
        },
        i18n: {
          supportedLanguages: ["en", "sv", "da", "nl"],
          requiredKeys: ["test.key"],
          rtlSupport: true
        },
        testing: {
          coverage: 100,
          priority: ["accessibility"],
          scenarios: ["renders correctly"]
        },
        styling: {
          themeTokens: ["primary"],
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
        category: "invalid"
      };

      const result = validateDocumentation(invalidDoc);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.details).toBeDefined();
      expect(result.details?.[0]).toHaveProperty('field');
      expect(result.details?.[0]).toHaveProperty('message');
    });
  });

  describe('extractDocumentation', () => {
    it('should extract documentation from valid JSDoc comments', () => {
      const validJSDoc = `
        /**
         * @component TestComponent
         * @version 1.0.0
         * @category atom
         * @description A test component
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
         * - Space
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

      const result = extractDocumentation(validJSDoc);
      expect(result.component).toBe("TestComponent");
      expect(result.version).toBe("1.0.0");
      expect(result.category).toBe("atom");
      expect(result.interface.props).toHaveLength(1);
      expect(result.accessibility.role).toBe("button");
      expect(result.i18n.supportedLanguages).toContain("en");
      expect(result.styling.responsive).toBe(true);
    });

    it('should handle empty or malformed JSDoc comments', () => {
      const emptyJSDoc = '/** */';
      const result = extractDocumentation(emptyJSDoc);
      expect(result.component).toBe("");
      expect(result.version).toBe("");
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
         * @description A test component
         * @example
         * <TestComponent />
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
