import React from 'react';
import { Button, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { ColorText } from './styles';

export interface FinancesYearHandlerProps {
  value?: number;
  onChange?: (year: number) => void;
}

export function FinancesYearHandler({
  value,
  onChange
}: FinancesYearHandlerProps) {
  return (
    <Space>
      <Button
        type="link"
        icon={<LeftOutlined />}
        onClick={() => onChange(value - 1)}
      />
      <ColorText>{value}</ColorText>
      <Button
        type="link"
        icon={<RightOutlined />}
        onClick={() => onChange(value + 1)}
      />
    </Space>
  );
}

export default FinancesYearHandler;
