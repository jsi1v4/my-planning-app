import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { GlobalOutlined, TranslationOutlined } from '@ant-design/icons';

import { useI18n, useI18nMessage } from 'src/i18n';
import { Locale } from 'src/i18n/types';

export function I18nSwitch() {
  const { lang, changeLang } = useI18n();
  const t = useI18nMessage();

  const nameFormatter = (value?: string) =>
    String(value).toLowerCase().replace(/_/g, '-');

  const handleMenu = (e: ClickParam) => {
    changeLang(e.key as Locale);
  };

  const menu = (
    <Menu theme="dark" selectedKeys={[lang]} onClick={handleMenu}>
      {Object.entries(Locale).map(([key, value]) => (
        <Menu.Item key={value} icon={<GlobalOutlined />}>
          {t(`i18n-${nameFormatter(key)}`)}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button
        type="text"
        shape="circle"
        data-testid="i18n"
        icon={<TranslationOutlined />}
      />
    </Dropdown>
  );
}

export default I18nSwitch;
