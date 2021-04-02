import React, { useContext, useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';

import enUS from 'antd/lib/locale/en_US';
import ptBR from 'antd/lib/locale/pt_BR';

import enUSe from './lang/en_US.json';
import ptBRe from './lang/pt_BR.json';

import { Locale } from './types';
import { I18nContext } from './index';

export function I18nMessagesProvider({ children }) {
  const { lang } = useContext(I18nContext);

  const msgs = useMemo(() => {
    switch (lang) {
      case Locale.PT_BR:
        return {
          antd: ptBR,
          extend: ptBRe
        };
      default:
        return {
          antd: enUS,
          extend: enUSe
        };
    }
  }, [lang]);

  return (
    <ConfigProvider locale={msgs.antd}>
      <IntlProvider locale={lang} messages={msgs.extend}>
        {children}
      </IntlProvider>
    </ConfigProvider>
  );
}

export default I18nMessagesProvider;
