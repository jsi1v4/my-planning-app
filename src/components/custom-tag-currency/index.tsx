import React, { useMemo } from 'react';
import { Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

import useFormatter from 'src/i18n/formatter';

export interface TagCurrencyProps {
  value?: number | string;
  validate?: boolean;
  withicon?: boolean;
}

export function TagCurrency({
  value = 0,
  validate = false,
  withicon = false
}: TagCurrencyProps) {
  const { currencyFormatter } = useFormatter();

  const color = useMemo(() => {
    if (validate) {
      if (Number(value) > 0) {
        return 'green';
      }
      if (Number(value) < 0) {
        return 'red';
      }
    }
    return undefined;
  }, [value, validate]);

  const icon = useMemo(() => {
    if (withicon) {
      if (Number(value) > 0) {
        return <ArrowUpOutlined />;
      }
      if (Number(value) < 0) {
        return <ArrowDownOutlined />;
      }
    }
    return undefined;
  }, [value, withicon]);

  return (
    <Tag color={color} icon={icon}>
      {currencyFormatter(value)}
    </Tag>
  );
}

export default TagCurrency;
