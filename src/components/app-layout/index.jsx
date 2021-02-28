import React from 'react';
import { Layout } from 'antd';

import { LOGO } from '../../config';
import { useI18n } from '../../i18n';
import { Logo, FullPage, Header, Content, Centered } from './styles';

export function AppLayout({ menu, extra, children }) {
  const t = useI18n();

  return (
    <Layout data-testid="app-layout">
      <Layout.Sider>
        <Centered>
          <Logo src={LOGO} />
        </Centered>
        {menu}
      </Layout.Sider>
      <FullPage>
        <Header title={t('app_title')} extra={extra} />
        <Content>{children}</Content>
      </FullPage>
    </Layout>
  );
}

export default AppLayout;
