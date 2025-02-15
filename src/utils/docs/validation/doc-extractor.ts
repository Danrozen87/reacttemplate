
import { ParsedDocumentation } from './types';
import { extractTag, extractArrayTag } from './tag-extractor';
import { extractProps } from './props-extractor';

/**
 * Extracts documentation from JSDoc comments
 */
export function extractDocumentation(source: string): ParsedDocumentation {
  return {
    component: extractTag(source, 'component'),
    version: extractTag(source, 'version'),
    category: extractTag(source, 'category') as ParsedDocumentation['category'],
    description: extractTag(source, 'description'),
    example: extractTag(source, 'example'),
    interface: {
      props: extractProps(source),
      exports: extractArrayTag(source, 'interface-exports')
    },
    accessibility: {
      role: extractTag(source, 'accessibility-role'),
      aria: extractArrayTag(source, 'accessibility-aria'),
      keyboardInteractions: extractArrayTag(source, 'accessibility-keyboard')
    },
    i18n: {
      supportedLanguages: extractArrayTag(source, 'i18n-languages'),
      requiredKeys: extractArrayTag(source, 'i18n-keys'),
      rtlSupport: extractTag(source, 'i18n-rtl') === 'true'
    },
    testing: {
      coverage: parseInt(extractTag(source, 'testing-coverage')) || 0,
      priority: extractArrayTag(source, 'testing-priority'),
      scenarios: extractArrayTag(source, 'testing-scenarios')
    },
    styling: {
      themeTokens: extractArrayTag(source, 'styling-tokens'),
      responsive: extractTag(source, 'styling-responsive') === 'true',
      darkMode: extractTag(source, 'styling-darkMode') === 'true'
    }
  };
}
