
/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect method with testing-library matchers
expect.extend(matchers);

// Declare vitest utility type without circular reference
declare global {
  // eslint-disable-next-line no-var
  var vi: import('vitest').Vi;
}

// Assign vi to global scope
globalThis.vi = vi;

// Cleanup after each test case
afterEach(() => {
  cleanup();
});
