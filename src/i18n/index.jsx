import React, { createContext, useState } from 'react';
import { useIntl } from 'react-intl';

import { INIT_LOCALE } from '../config';

export function useI18n() {
  const intl = useIntl();
  return (id, values) => {
    const message = intl.formatMessage({ id }, values);
    return <>{message}</>;
  };
}

export const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLanguage] = useState(INIT_LOCALE);
  const changeLang = (value) => {
    setLanguage(value);
  };

  return (
    <I18nContext.Provider
      value={{
        lang,
        changeLang
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export default I18nProvider;
