import React from 'react';
import { Menu } from 'antd';

import { useI18n } from '../../i18n';

export function AppMenu() {
  const t = useI18n();

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">{t('app_menu-home')}</Menu.Item>
    </Menu>
  );
}

export default AppMenu;
