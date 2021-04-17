import React, { useState } from 'react';
import { Card, Table, Button } from 'antd';
import {
  CloseOutlined,
  EditOutlined,
  PlusOutlined,
  SaveOutlined
} from '@ant-design/icons';

import { useI18nMessage } from 'src/i18n';
import { useFormatter } from 'src/i18n/formatter';
import { BugetRow } from 'src/providers/sheet/types';
import { TagCurrency } from 'src/components/custom-tag-currency';

import { FlexCol, Input, Space, ButtonLabel } from './styles';

export interface SheetBugetTableProps {
  data?: BugetRow[];
  onSave?: (item: BugetRow) => Promise<void>;
}

export function SheetBugetTable({ data, onSave }: SheetBugetTableProps) {
  const t = useI18nMessage();
  const { monthLongFormatter, currencyFormatter } = useFormatter();

  const [selected, setSelected] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const handleSave = (item: BugetRow) => {
    setIsLoading(true);
    onSave?.(item)
      .then(() => setSelected(undefined))
      .finally(() => setIsLoading(false));
  };

  const handleEdit = (key: string) => {
    if (!isLoading) {
      setSelected(key);
    }
  };

  const handleCancel = () => {
    setIsLoading(false);
    setSelected(undefined);
  };

  const BugetHeader = (
    <FlexCol>
      {t('sheet-buget-table-buget')}
      <EditOutlined />
    </FlexCol>
  );

  const BugetEditableCell = ({ item }) => {
    const [value, setValue] = useState<number>(item.buget);
    return (
      <FlexCol>
        <Input
          type="number"
          size="small"
          value={value}
          onChange={(v) => setValue(Number(v))}
        />
        <Space>
          <Button
            key="0"
            type="link"
            size="small"
            loading={isLoading}
            onClick={() =>
              handleSave({
                ...item,
                buget: value
              })
            }
            icon={<SaveOutlined />}
          />
          <Button
            key="1"
            type="link"
            size="small"
            onClick={handleCancel}
            icon={<CloseOutlined />}
          />
        </Space>
      </FlexCol>
    );
  };

  const BugetCell = ({ key, buget, ...props }) => {
    return selected === key ? (
      <BugetEditableCell item={{ key, buget, ...props }} />
    ) : (
      <ButtonLabel
        key={key}
        type="link"
        size="small"
        onClick={() => handleEdit(key)}
      >
        {currencyFormatter(buget)}
      </ButtonLabel>
    );
  };

  const CostCell = ({ cost }) => <TagCurrency value={cost} />;

  const RemainingCell = ({ remaining }) => (
    <TagCurrency value={remaining} validate />
  );

  const ProfitCell = ({ profit }) => (
    <TagCurrency value={profit} withicon validate />
  );

  const actions = [
    <Button key="0" type="primary" icon={<PlusOutlined />}>
      {t('sheet-buget-button-new')}
    </Button>
  ];

  return (
    <Card bordered={false} actions={actions}>
      <Table
        dataSource={data}
        loading={!data}
        columns={[
          {
            title: t('sheet-buget-table-year'),
            dataIndex: 'year',
            width: 100
          },
          {
            title: t('sheet-buget-table-month'),
            dataIndex: 'month',
            width: 120,
            render: monthLongFormatter
          },
          {
            title: BugetHeader,
            width: 180,
            render: BugetCell
          },
          {
            title: t('sheet-buget-table-cost'),
            width: 120,
            render: CostCell
          },
          {
            title: t('sheet-buget-table-remaining'),
            width: 120,
            render: RemainingCell
          },
          {
            title: t('sheet-buget-table-profit'),
            width: 120,
            render: ProfitCell
          }
        ]}
        pagination={{
          defaultPageSize: 12,
          showSizeChanger: true,
          hideOnSinglePage: true
        }}
        size="small"
        bordered
      />
    </Card>
  );
}

export default SheetBugetTable;
