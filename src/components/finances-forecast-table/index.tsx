import React, { useEffect, useState } from 'react';
import { Button, Card, Input, Space, Table } from 'antd';
import {
  CloseOutlined,
  DeleteOutlined,
  PlusOutlined,
  SaveOutlined
} from '@ant-design/icons';

import { useI18nMessage } from 'src/i18n';
import { useFormatter } from 'src/i18n/formatter';
import { ForecastRow } from 'src/providers/finances/types';

type KeyList = { [key: string]: ForecastRow };

let i = 0;

const keyNewItem = 'NewItem';

function isNewItem(key: string) {
  return key.includes(keyNewItem);
}

export interface FinancesForecastTableProps {
  data?: ForecastRow[];
  onSave?: (items: ForecastRow[]) => Promise<void>;
  onDelete?: (key: string) => Promise<void>;
}

export function FinancesForecastTable({
  data,
  onSave,
  onDelete
}: FinancesForecastTableProps) {
  const t = useI18nMessage();
  const { monthYearFormatter, currencyFormatter } = useFormatter();

  const [changes, setChanges] = useState<ForecastRow[]>([]);
  const [selected, setSelected] = useState<string>();
  const [isSaveLoading, setIsSaveLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [keysWithChanges, setKeysWithChanges] = useState<KeyList>({});

  useEffect(() => {
    setChanges(data);
  }, [data]);

  const handleSave = () => {
    const items = Object.values(keysWithChanges);
    setIsSaveLoading(true);
    onSave?.(items)
      .then(() => {
        setSelected(undefined);
        setKeysWithChanges({});
      })
      .finally(() => setIsSaveLoading(false));
  };

  const handleDelete = (key: string) => {
    setIsDeleteLoading(true);
    onDelete?.(key)
      .then(() => {
        setSelected(undefined);
        delete keysWithChanges[key];
      })
      .finally(() => setIsDeleteLoading(false));
  };

  const handleCancel = () => {
    setIsSaveLoading(false);
    setIsDeleteLoading(false);
    setSelected(undefined);
    setKeysWithChanges({});
  };

  const handleEdit = (key: string) => {
    if (!isSaveLoading && !isDeleteLoading) {
      setSelected(key);
    }
  };

  const handleEditCancel = (key: string) => {
    setSelected(undefined);
    delete keysWithChanges[key];
  };

  const handleAddNewItem = () => {
    const date = new Date();
    // eslint-disable-next-line no-plusplus
    const key = `${keyNewItem}${++i}`;
    setChanges([
      ...changes,
      {
        key,
        description: t('app-new'),
        yearOf: date.getFullYear(),
        yearTo: date.getFullYear(),
        monthOf: date.getMonth() + 1,
        monthTo: date.getMonth() + 2,
        cost: 0
      }
    ]);
  };

  const handleDeleteNewItem = (key: string) => {
    const items = changes.filter((x) => x.key !== key);
    setChanges(items);
  };

  const DescriptionCell = ({ key, description, ...props }: ForecastRow) => {
    const item = keysWithChanges[key];
    return selected === key ? (
      <Input
        type="text"
        size="small"
        defaultValue={item?.description || description}
        onChange={(v) => {
          setKeysWithChanges({
            ...keysWithChanges,
            [key]: { ...props, key, description: String(v.target.value) }
          });
        }}
      />
    ) : (
      <Button
        key={key}
        type="link"
        size="small"
        onClick={() => handleEdit(key)}
      >
        {item?.description || description}
      </Button>
    );
  };

  const DateOfCell = ({ yearOf, monthOf }) => {
    const date = new Date(yearOf, monthOf - 1);
    return monthYearFormatter(date);
  };

  const DateToCell = ({ yearTo, monthTo }) => {
    const date = new Date(yearTo, monthTo - 1);
    return monthYearFormatter(date);
  };

  const CostCell = ({ key, cost, ...props }: ForecastRow) => {
    const item = keysWithChanges[key];
    return selected === key ? (
      <Input
        type="number"
        size="small"
        defaultValue={item?.cost || cost}
        onChange={(v) => {
          setKeysWithChanges({
            ...keysWithChanges,
            [key]: { ...props, key, cost: Number(v) }
          });
        }}
      />
    ) : (
      <Button
        key={key}
        type="link"
        size="small"
        onClick={() => handleEdit(key)}
      >
        {currencyFormatter(item?.cost || cost)}
      </Button>
    );
  };

  const ActionCell = ({ key }) => {
    return (
      <Space size="small">
        {selected === key && (
          <Button
            type="link"
            size="small"
            icon={<CloseOutlined />}
            onClick={() => handleEditCancel(key)}
          />
        )}
        <Button
          type="link"
          size="small"
          icon={<DeleteOutlined />}
          disabled={isSaveLoading || isDeleteLoading}
          loading={isDeleteLoading}
          onClick={() =>
            isNewItem(key) ? handleDeleteNewItem(key) : handleDelete(key)
          }
        />
      </Space>
    );
  };

  const ActionsCard = () => (
    <Space align="center">
      {Object.keys(keysWithChanges).length ? (
        <>
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
            disabled={isSaveLoading || isDeleteLoading}
            loading={isSaveLoading}
            onClick={handleSave}
          >
            {t('app-save')}
          </Button>
        </>
      ) : (
        <></>
      )}
      <Button
        key="0"
        type="link"
        icon={<PlusOutlined />}
        disabled={isSaveLoading || isDeleteLoading}
        onClick={handleAddNewItem}
      >
        {t('app-add')}
      </Button>
    </Space>
  );

  return (
    <Card bordered={false} actions={[<ActionsCard />]}>
      <Table
        dataSource={changes}
        loading={!data}
        columns={[
          {
            title: t('finances-forecast-table-description'),
            width: 300,
            render: DescriptionCell
          },
          {
            title: t('finances-forecast-table-dateof'),
            width: 120,
            render: DateOfCell
          },
          {
            title: t('finances-forecast-table-dateto'),
            width: 120,
            render: DateToCell
          },
          {
            title: t('finances-forecast-table-cost'),
            width: 120,
            render: CostCell
          },
          {
            width: 40,
            render: ActionCell
          }
        ]}
        pagination={{
          defaultPageSize: 12,
          hideOnSinglePage: true
        }}
        size="small"
        bordered
      />
    </Card>
  );
}

export default FinancesForecastTable;
