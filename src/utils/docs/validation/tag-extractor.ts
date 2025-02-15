
/**
 * Utilities for extracting documentation tags from JSDoc comments
 */

/**
 * Extracts a specific tag value from JSDoc comment
 */
export function extractTag(source: string, tag: string): string {
  const regex = new RegExp(`@${tag}\\s+([^@]*?)(?=\\s*@|\\s*\\*/|$)`, 's');
  const match = source.match(regex);
  return (match?.[1] || '').trim();
}

/**
 * Extracts an array of values from a JSDoc tag that contains a list
 */
export function extractArrayTag(source: string, tag: string): string[] {
  const content = extractTag(source, tag);
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('-'))
    .map(line => line.slice(1).trim());
}
