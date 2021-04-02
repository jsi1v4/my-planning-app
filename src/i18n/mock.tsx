import React from 'react';

import { I18nProvider } from './index';
import { I18nMessagesProvider } from './messages';

export function I18nMock({ children }) {
  return (
    <I18nProvider>
      <I18nMessagesProvider>{children}</I18nMessagesProvider>
    </I18nProvider>
  );
}

export default I18nMock;
