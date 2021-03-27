import React, { useContext } from 'react';
import { Layout } from 'antd';

import { LOGO } from '../../config';
import { useI18n } from '../../i18n';
import { AuthenticationContext } from '../../authentication';
import { Logo, FullPage, Header, Content, Centered } from './styles';

export function AppLayout({ menu, extra, extraWhenAuth, children }) {
  const t = useI18n();
  const { isAuth } = useContext(AuthenticationContext);

  return (
    <Layout data-testid="app-layout">
      <Layout.Sider>
        <Centered>
          <Logo src={LOGO} />
        </Centered>
        {isAuth && menu}
      </Layout.Sider>
      <FullPage>
        <Header
          title={t('app_title')}
          extra={[extra, isAuth && extraWhenAuth]}
        />
        <Content>{children}</Content>
      </FullPage>
    </Layout>
  );
}

export default AppLayout;
