import React from 'react';
import { Card, Table } from 'antd';

import { useI18nMessage } from 'src/i18n';
import { useFormatter } from 'src/i18n/formatter';
import { ForecastRow } from 'src/providers/sheet/types';

export interface SheetForecastTableProps {
  data?: ForecastRow[];
}

export function SheetForecastTable({ data }: SheetForecastTableProps) {
  const t = useI18nMessage();
  const { monthYearFormatter, currencyFormatter } = useFormatter();

  return (
    <Card bordered={false}>
      <Table
        dataSource={data}
        loading={!data}
        columns={[
          {
            title: t('sheet-forecast-table-description'),
            dataIndex: 'description'
          },
          {
            title: t('sheet-forecast-table-dateof'),
            dataIndex: 'dateOf',
            render: monthYearFormatter
          },
          {
            title: t('sheet-forecast-table-dateto'),
            dataIndex: 'dateTo',
            render: monthYearFormatter
          },
          {
            title: t('sheet-forecast-table-cost'),
            dataIndex: 'cost',
            render: currencyFormatter
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

export default SheetForecastTable;
