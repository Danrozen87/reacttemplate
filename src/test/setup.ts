
/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend expect with testing-library matchers
expect.extend(matchers);

// Ensure global types are properly declared
declare global {
  var vi: typeof import('vitest')['vi']
}

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});
