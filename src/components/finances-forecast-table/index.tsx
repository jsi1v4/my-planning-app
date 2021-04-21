import React from 'react';
import { Card, Table } from 'antd';

import { useI18nMessage } from 'src/i18n';
import { useFormatter } from 'src/i18n/formatter';
import { ForecastRow } from 'src/providers/finances/types';

export interface FinancesForecastTableProps {
  data?: ForecastRow[];
}

export function FinancesForecastTable({ data }: FinancesForecastTableProps) {
  const t = useI18nMessage();
  const { monthYearFormatter, currencyFormatter } = useFormatter();

  const DateOfCell = ({ yearOf, monthOf }) => {
    const date = new Date(yearOf, monthOf - 1);
    return monthYearFormatter(date);
  };

  const DateToCell = ({ yearTo, monthTo }) => {
    const date = new Date(yearTo, monthTo - 1);
    return monthYearFormatter(date);
  };

  return (
    <Card bordered={false}>
      <Table
        dataSource={data}
        loading={!data}
        columns={[
          {
            title: t('finances-forecast-table-description'),
            dataIndex: 'description'
          },
          {
            title: t('finances-forecast-table-dateof'),
            render: DateOfCell
          },
          {
            title: t('finances-forecast-table-dateto'),
            render: DateToCell
          },
          {
            title: t('finances-forecast-table-cost'),
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

export default FinancesForecastTable;
