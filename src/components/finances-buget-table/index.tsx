import React, { useState } from 'react';
import { Card, Table, Button, Space } from 'antd';
import {
  CloseOutlined,
  EditOutlined,
  MinusOutlined,
  PlusOutlined,
  SaveOutlined
} from '@ant-design/icons';

import { useI18nMessage } from 'src/i18n';
import { useFormatter } from 'src/i18n/formatter';
import { BugetRow } from 'src/providers/finances/types';
import { TagCurrency } from 'src/components/custom-tag-currency';

import { FlexCol, Input, ButtonLabel } from './styles';

type KeyList = { [key: string]: BugetRow };

export interface FinancesBugetTableProps {
  data?: BugetRow[];
  onSave?: (items: BugetRow[]) => Promise<void>;
  onAddYear?: () => Promise<void>;
  onRemYear?: () => Promise<void>;
}

export function FinancesBugetTable({
  data,
  onSave,
  onAddYear,
  onRemYear
}: FinancesBugetTableProps) {
  const t = useI18nMessage();
  const { monthLongFormatter, currencyFormatter } = useFormatter();

  const [selected, setSelected] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isYearLoading, setIsYearLoading] = useState<boolean>();
  const [keysWithChanges, setKeysWithChanges] = useState<KeyList>({});

  const handleSave = () => {
    const items = Object.values(keysWithChanges);
    setIsLoading(true);
    onSave?.(items)
      .then(() => {
        setSelected(undefined);
        setKeysWithChanges({});
      })
      .finally(() => setIsLoading(false));
  };

  const handleAddYear = () => {
    setIsYearLoading(true);
    onAddYear?.().finally(() => setIsYearLoading(false));
  };

  const handleRemYear = () => {
    setIsYearLoading(true);
    onRemYear?.().finally(() => setIsYearLoading(false));
  };

  const handleCancel = () => {
    setIsLoading(false);
    setSelected(undefined);
    setKeysWithChanges({});
  };

  const handleEdit = (key: string) => {
    if (!isLoading) {
      setSelected(key);
    }
  };

  const handleEditCancel = (key: string) => {
    setSelected(undefined);
    delete keysWithChanges[key];
  };

  const BugetHeader = (
    <FlexCol>
      {t('finances-buget-table-buget')}
      <EditOutlined />
    </FlexCol>
  );

  const BugetCell = ({ key, buget, ...props }: BugetRow) => {
    const item = keysWithChanges[key];
    return selected === key ? (
      <FlexCol>
        <Input
          type="number"
          size="small"
          defaultValue={item?.buget || buget}
          onChange={(v) => {
            setKeysWithChanges({
              ...keysWithChanges,
              [key]: { ...props, key, buget: Number(v) }
            });
          }}
        />
        <Button
          key="1"
          type="link"
          size="small"
          onClick={() => handleEditCancel(key)}
          icon={<CloseOutlined />}
        />
      </FlexCol>
    ) : (
      <ButtonLabel
        key={key}
        type="link"
        size="small"
        onClick={() => handleEdit(key)}
      >
        {currencyFormatter(item?.buget || buget)}
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

  const Actions = () => {
    if (Object.keys(keysWithChanges).length) {
      return (
        <Space>
          <Button
            key="1"
            type="link"
            icon={<CloseOutlined />}
            onClick={handleCancel}
            danger
          >
            {t('app-cancel')}
          </Button>
          <Button
            key="0"
            type="link"
            icon={<SaveOutlined />}
            loading={isLoading}
            onClick={handleSave}
          >
            {t('app-save')}
          </Button>
        </Space>
      );
    }
    if (data?.length === 0) {
      return (
        <Button
          key="0"
          type="link"
          icon={<PlusOutlined />}
          loading={isYearLoading}
          onClick={handleAddYear}
        >
          {t('app-add')} {t('finances-buget-table-year')}
        </Button>
      );
    }
    if (data?.length > 0) {
      return (
        <Button
          key="0"
          type="link"
          icon={<MinusOutlined />}
          loading={isYearLoading}
          onClick={handleRemYear}
          danger
        >
          {t('app-rem')} {t('finances-buget-table-year')}
        </Button>
      );
    }
    return <></>;
  };

  return (
    <Card bordered={false} actions={[<Actions />]}>
      <Table
        dataSource={data}
        loading={!data}
        columns={[
          {
            title: t('finances-buget-table-year'),
            dataIndex: 'year',
            width: 100
          },
          {
            title: t('finances-buget-table-month'),
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
            title: t('finances-buget-table-cost'),
            width: 120,
            render: CostCell
          },
          {
            title: t('finances-buget-table-remaining'),
            width: 120,
            render: RemainingCell
          },
          {
            title: t('finances-buget-table-profit'),
            width: 120,
            render: ProfitCell
          }
        ]}
        pagination={false}
        size="small"
        bordered
      />
    </Card>
  );
}

export default FinancesBugetTable;
