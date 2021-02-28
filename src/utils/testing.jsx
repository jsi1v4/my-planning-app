import React from 'react';

import { LocaleConfig } from '../i18n';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

export function LocaleTesting({ children }) {
  return <LocaleConfig lang="en">{children}</LocaleConfig>;
}

export default LocaleTesting;
