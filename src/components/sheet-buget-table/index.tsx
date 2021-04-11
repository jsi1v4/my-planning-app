import React, { useState } from 'react';
import { Card, Table, Button } from 'antd';
import { CloseOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';

import { useI18nMessage } from 'src/i18n';
import { useFormatter } from 'src/i18n/formatter';
import { BugetRow } from 'src/providers/sheet/types';
import { TagCurrency } from 'src/components/custom-tag-currency';

import { FlexCol, Input, Space } from './styles';

export interface SheetBugetTableProps {
  data?: BugetRow[];
  onSave?: () => Promise<void>;
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

  const handleSave = () => {
    setIsLoading(true);
    onSave?.().finally(() => setIsLoading(false));
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

  const costFormatter = ({ cost }) => <TagCurrency value={cost} />;
  const remainingFormatter = ({ remaining }) => (
    <TagCurrency value={remaining} validate />
  );
  const profitFormatter = ({ profit }) => (
    <TagCurrency value={profit} withicon validate />
  );

  const BugetTitle = (
    <FlexCol>
      {t('sheet-buget-table-buget')}
      <EditOutlined />
    </FlexCol>
  );

  const EditableBuget = ({ key, buget }) =>
    selected === key ? (
      <FlexCol key={key}>
        <Input defaultValue={buget} />
        <Space>
          <Button
            key="0"
            type="link"
            size="small"
            loading={isLoading}
            onClick={handleSave}
          >
            <SaveOutlined />
          </Button>
          <Button key="1" type="link" size="small" onClick={handleCancel}>
            <CloseOutlined />
          </Button>
        </Space>
      </FlexCol>
    ) : (
      <Button key={key} type="link" onClick={() => handleEdit(key)}>
        {currencyFormatter(buget)}
      </Button>
    );

  return (
    <Card bordered={false}>
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
            title: BugetTitle,
            width: 180,
            render: EditableBuget
          },
          {
            title: t('sheet-buget-table-cost'),
            width: 120,
            render: costFormatter
          },
          {
            title: t('sheet-buget-table-remaining'),
            width: 120,
            render: remainingFormatter
          },
          {
            title: t('sheet-buget-table-profit'),
            width: 120,
            render: profitFormatter
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
