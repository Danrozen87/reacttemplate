
/// <reference types="vitest" />
import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend expect with testing-library matchers
expect.extend(matchers);

// Properly augment the global scope for Vitest
declare module 'vitest' {
  interface TestContext {
    // Add any custom test context if needed
  }
}

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});
