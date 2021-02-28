import React, { useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { IntlProvider, useIntl } from 'react-intl';

import enUS from 'antd/lib/locale/en_US';
import ptBR from 'antd/lib/locale/pt_BR';

import enUSe from './lang/en_US.json';
import ptBRe from './lang/pt_BR.json';

import { PT_BR } from '../config';

export function useI18n() {
  const intl = useIntl();
  return (id, values) => {
    const message = intl.formatMessage({ id }, values);
    return <>{message}</>;
  };
}

export function LocaleConfig({ lang, children }) {
  const locale = useMemo(() => {
    switch (lang) {
      case PT_BR:
        return {
          antd: ptBR,
          extend: ptBRe,
        };
      default:
        return {
          antd: enUS,
          extend: enUSe,
        };
    }
  }, [lang]);

  return (
    <ConfigProvider locale={locale.antd}>
      <IntlProvider locale={lang} messages={locale.extend}>
        {children}
      </IntlProvider>
    </ConfigProvider>
  );
}

export default LocaleConfig;
