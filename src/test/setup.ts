
/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend expect with testing-library matchers
expect.extend(matchers);

// We don't need to redeclare vi since it's already available from vitest/globals
// Just augment the types that aren't included by default
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ImportMetaEnv extends Partial<ImportMetaEnv> {}
}

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});
