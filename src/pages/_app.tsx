import React from 'react';
import 'antd/dist/antd.dark.css';

import { I18nProvider } from 'src/i18n';
import { I18nMessagesProvider } from 'src/i18n/messages';
import { GlobalStyles } from 'src/styles';
import { AuthenticationProvider } from 'src/authentication';
import { NotificationsProvider } from 'src/providers/notifications';
import { AppLayout } from 'src/components/app-layout';
import { AppMenu } from 'src/components/app-menu';
import { Notifications } from 'src/components/app-notifications';
import { Signoff } from 'src/components/app-signoff';
import { I18nSwitch } from 'src/components/app-i18n-switch';

export function App({ Component, pageProps }) {
  return (
    <I18nProvider>
      <I18nMessagesProvider>
        <GlobalStyles />
        <AuthenticationProvider>
          <NotificationsProvider>
            <AppLayout
              menu={<AppMenu />}
              extra={[<I18nSwitch key={0} />]}
              extraWhenAuth={[<Notifications key={1} />, <Signoff key={2} />]}
            >
              <Component {...pageProps} />
            </AppLayout>
          </NotificationsProvider>
        </AuthenticationProvider>
      </I18nMessagesProvider>
    </I18nProvider>
  );
}

export default App;
