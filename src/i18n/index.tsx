import React, { createContext, useContext, useState } from 'react';
import { useIntl } from 'react-intl';

import { INIT_LOCALE } from 'src/config';
import { II18nContext, Locale } from './types';

export const I18nContext = createContext<II18nContext>(null as never);

export const useI18n = () => useContext(I18nContext);

export function I18nProvider({ children }) {
  const [lang, setLanguage] = useState<Locale>(INIT_LOCALE);
  const changeLang = (value: Locale) => {
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

export function useI18nMessage() {
  const intl = useIntl();
  return (id: string, values?: Record<string, string>) => {
    const message = intl.formatMessage({ id }, values);
    return message;
  };
}
