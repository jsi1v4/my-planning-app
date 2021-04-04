import React from 'react';
import { Button, Popover, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import { useI18nMessage } from 'src/i18n';
import { useNotifications } from 'src/providers/notifications';

interface IconProps {
  count: number;
}

function Icon({ count }: IconProps) {
  return (
    <Badge count={count}>
      <BellOutlined data-testid="icon" />
    </Badge>
  );
}

interface ContentProps {
  data: string[];
}

function Content({ data }: ContentProps) {
  return (
    <div data-testid="content">
      {data.map((n) => (
        <p key={n} data-testid="content-item">
          {n}
        </p>
      ))}
    </div>
  );
}

export function Notifications() {
  const { data } = useNotifications();
  const t = useI18nMessage();

  return (
    <Popover
      content={<Content data={data} />}
      title={t('app_notification')}
      trigger="click"
      placement="leftBottom"
    >
      <Button
        type="text"
        shape="circle"
        icon={<Icon count={data.length} />}
        data-testid="notes"
      />
    </Popover>
  );
}

Notifications.Icon = Icon;
Notifications.Content = Content;

export default Notifications;
