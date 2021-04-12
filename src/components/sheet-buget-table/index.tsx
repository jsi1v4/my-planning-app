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
  onSave?: (key: number, value: number) => Promise<void>;
}

export function SheetBugetTable({ data, onSave }: SheetBugetTableProps) {
  const t = useI18nMessage();
  const {
    monthLongFormatter,
    yearFormatter,
    currencyFormatter
  } = useFormatter();

  const [selected, setSelected] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const handleSave = (key: number, value: number) => {
    setIsLoading(true);
    onSave?.(key, value).finally(() => setIsLoading(false));
  };

  const handleEdit = (key: number) => {
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

  const CostCell = ({ cost }) => <TagCurrency value={cost} />;

  const RemainingCell = ({ remaining }) => (
    <TagCurrency value={remaining} validate />
  );

  const ProfitCell = ({ profit }) => (
    <TagCurrency value={profit} withicon validate />
  );

  const BugetEditableCell = ({ keyRow, buget }) => {
    const [value, setValue] = useState<number>(buget);
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
            onClick={() => handleSave(keyRow, value)}
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

  const BugetCell = ({ key, buget }) => {
    return selected === key ? (
      <BugetEditableCell keyRow={key} buget={buget} />
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
            dataIndex: 'date',
            width: 100,
            render: yearFormatter
          },
          {
            title: t('sheet-buget-table-month'),
            dataIndex: 'date',
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
