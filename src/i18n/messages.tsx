import React, { useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';

import { CURRENCY, TIMEZONE } from 'src/config';

import enUS from 'antd/lib/locale/en_US';
import ptBR from 'antd/lib/locale/pt_BR';

import enUSe from './lang/en_US.json';
import ptBRe from './lang/pt_BR.json';

import { Locale } from './types';
import { useI18n } from './index';

function buildFormats(currency: string) {
  return {
    number: {
      currency: {
        style: 'currency',
        currency
      }
    }
  };
}

export function I18nMessagesProvider({ children }) {
  const { lang } = useI18n();

  const msgs = useMemo(() => {
    switch (lang) {
      case Locale.PT_BR:
        return {
          antd: ptBR,
          extend: ptBRe,
          formats: buildFormats(CURRENCY),
          timezone: TIMEZONE
        };
      default:
        return {
          antd: enUS,
          extend: enUSe,
          formats: buildFormats(CURRENCY),
          timezone: TIMEZONE
        };
    }
  }, [lang]);

  return (
    <ConfigProvider locale={msgs.antd}>
      <IntlProvider
        locale={lang}
        messages={msgs.extend}
        formats={msgs.formats}
        timeZone={msgs.timezone}
      >
        {children}
      </IntlProvider>
    </ConfigProvider>
  );
}

export default I18nMessagesProvider;
