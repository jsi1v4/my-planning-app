import React, { useState } from 'react';
import { Menu } from 'antd';

import { MENU_OPTIONS } from 'src/config';
import { useI18nMessage } from 'src/i18n';

export function AppMenu() {
  const t = useI18nMessage();

  const [selected, setSelected] = useState<string>(window.location.pathname);

  const handleMenuClick = ({ key }) => {
    setSelected(key);
    window.location.replace(key);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      data-testid="menu"
      selectedKeys={[selected]}
      onClick={handleMenuClick}
    >
      {MENU_OPTIONS.map((option) => (
        <Menu.Item key={option.route} icon={<option.icon />}>
          {t(`menu-${option.name}`)}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default AppMenu;
