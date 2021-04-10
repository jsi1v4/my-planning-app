import React from 'react';
import 'antd/dist/antd.dark.css';

import { initializeApp } from 'src/lib';
import { I18nProvider } from 'src/i18n';
import { I18nMessagesProvider } from 'src/i18n/messages';
import { GlobalStyles } from 'src/styles';
import { AuthenticationProvider } from 'src/providers/authentication';
import { AppLayout } from 'src/components/app-layout';
import { AppMenu } from 'src/components/app-menu';
import { Signoff } from 'src/components/app-signoff';
import { I18nSwitch } from 'src/components/app-i18n-switch';

export function App({ Component, pageProps }) {
  const app = initializeApp();
  return (
    <I18nProvider>
      <I18nMessagesProvider>
        <GlobalStyles />
        <AuthenticationProvider api={app.auth}>
          <AppLayout
            menu={<AppMenu />}
            extra={[<I18nSwitch key={0} />]}
            extraWhenAuth={[<Signoff key={0} />]}
          >
            <Component {...pageProps} />
          </AppLayout>
        </AuthenticationProvider>
      </I18nMessagesProvider>
    </I18nProvider>
  );
}

export default App;
