import React from 'react';
import { Button, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

export function Signoff({ userName, signOut }) {
  return (
    <Tooltip title={userName} placement="bottomRight">
      <Button
        type="text"
        shape="circle"
        data-testid="sign-out"
        icon={<LogoutOutlined />}
        onClick={signOut}
      />
    </Tooltip>
  );
}

export default Signoff;
