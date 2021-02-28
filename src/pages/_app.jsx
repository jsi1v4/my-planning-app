import React from 'react';
import 'antd/dist/antd.dark.css';

import { LocaleConfig } from '../i18n';
import { GlobalStyles } from '../styles';
import { AppLayout } from '../components/app-layout';
import { AppMenu } from '../components/app-menu';
import { Notifications } from '../components/app-notifications';
import { Signoff } from '../components/app-signoff';
import { I18nSwitch } from '../components/app-i18n-switch';
import { useAppController } from '../hooks/app-controller';

export default function MyApp({ Component, pageProps }) {
  const {
    locale,
    handleLocale,
    userName,
    signOut,
    notesData,
  } = useAppController();

  return (
    <LocaleConfig lang={locale}>
      <GlobalStyles />
      <AppLayout
        menu={<AppMenu />}
        extra={[
          <I18nSwitch key={0} value={locale} onChange={handleLocale} />,
          <Notifications key={1} data={notesData} />,
          <Signoff key={2} userName={userName} signOut={signOut} />,
        ]}
      >
        <Component {...pageProps} />
      </AppLayout>
    </LocaleConfig>
  );
}
