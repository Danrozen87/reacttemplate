
import { ParsedProp } from './types';

/**
 * Extracts interface properties from JSDoc comment
 */
export function extractProps(source: string): ParsedProp[] {
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

// Helper function import
import { extractTag } from './tag-extractor';
