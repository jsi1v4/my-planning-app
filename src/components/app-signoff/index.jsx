import React, { useContext } from 'react';
import { Button, Tooltip, Popconfirm } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { useI18n } from '../../i18n';
import { AuthenticationContext } from '../../providers/authentication';

export function Signoff() {
  const { userName, signOut } = useContext(AuthenticationContext);
  const t = useI18n();

  return (
    <Tooltip title={userName} placement="bottomRight">
      <Popconfirm
        title={t('app_signoff-confirm')}
        onConfirm={signOut}
        okText={t('app_signoff-ok')}
        cancelText={t('app_signoff-cancel')}
        placement="bottomRight"
      >
        <Button
          type="text"
          shape="circle"
          data-testid="sign-out"
          icon={<LogoutOutlined />}
        />
      </Popconfirm>
    </Tooltip>
  );
}

export default Signoff;
