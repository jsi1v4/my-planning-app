import React from 'react';
import 'antd/dist/antd.dark.css';

import { I18nProvider } from '../i18n';
import { I18nMessagesProvider } from '../i18n/messages';
import { GlobalStyles } from '../styles';
import { AuthenticationProvider } from '../authentication';
import { NotificationsProvider } from '../providers/notifications';
import { AppLayout } from '../components/app-layout';
import { AppMenu } from '../components/app-menu';
import { Notifications } from '../components/app-notifications';
import { Signoff } from '../components/app-signoff';
import { I18nSwitch } from '../components/app-i18n-switch';

export function App({ Component, pageProps }) {
  return (
    <I18nProvider>
      <I18nMessagesProvider>
        <GlobalStyles />
        <AuthenticationProvider>
          <NotificationsProvider>
            <AppLayout
              menu={<AppMenu />}
              extra={[
                <I18nSwitch key={0} />,
                <Notifications key={1} />,
                <Signoff key={2} />
              ]}
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
