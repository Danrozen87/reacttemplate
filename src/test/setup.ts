
/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

declare global {
  // eslint-disable-next-line no-var
  var vi: typeof vi;
}

// Extend Vitest's expect method with testing-library matchers
expect.extend(matchers);

// Make vi available globally
global.vi = vi;

// Cleanup after each test case
afterEach(() => {
  cleanup();
});
