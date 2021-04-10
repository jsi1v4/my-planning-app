import React, { useState } from 'react';
import { Menu } from 'antd';

import { MENU_OPTIONS } from 'src/config';
import { useI18nMessage } from 'src/i18n';

export function AppMenu() {
  const t = useI18nMessage();

  const [selected, setSelected] = useState<string>(window.location.pathname);

  const nameFormatter = (value?: string) => String(value).replace(/\//g, '-');

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
      {MENU_OPTIONS.map((Option) => (
        <Menu.Item key={Option.Route} icon={<Option.Icon />}>
          {t(`menu${nameFormatter(Option.Route)}`)}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default AppMenu;
