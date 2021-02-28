import React from 'react';
import { Button, Popover, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import { useI18n } from '../../i18n';

export function Notifications({ data }) {
  const t = useI18n();

  const Content = (
    <div>
      {data.map((n) => (
        <p>{n}</p>
      ))}
    </div>
  );

  const Icon = (
    <Badge count={data.length}>
      <BellOutlined />
    </Badge>
  );

  return (
    <Popover
      content={Content}
      title={t('app_notification')}
      trigger="click"
      placement="leftBottom"
    >
      <Button type="text" shape="circle" icon={Icon} />
    </Popover>
  );
}

export default Notifications;
