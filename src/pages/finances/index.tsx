import React from 'react';
import { compose } from 'ramda';
import { Layout, Tabs } from 'antd';
import { TableOutlined, TransactionOutlined } from '@ant-design/icons';

import { withAuth } from 'src/providers/authentication';
import { useI18nMessage } from 'src/i18n';
import { useFinancesPageController } from 'src/hooks/finances-page-controller';
import { FinancesBugetTable } from 'src/components/finances-buget-table';
import { FinancesForecastTable } from 'src/components/finances-forecast-table';
import { FinancesYearHandler } from 'src/components/finances-year-handler';
import { TabTitle } from 'src/styles/finances';

function Finances() {
  const t = useI18nMessage();

  const {
    bugetData,
    forecastData,
    bugetOnSave,
    bugetOnAddYear,
    bugetOnRemYear,
    year,
    handleYear
  } = useFinancesPageController();

  const titleBuget = (
    <TabTitle>
      <TableOutlined />
      {t('finances-title-buget')}
    </TabTitle>
  );

  const titleForecast = (
    <TabTitle>
      <TransactionOutlined />
      {t('finances-title-forecast')}
    </TabTitle>
  );

  return (
    <Layout.Content>
      <Tabs
        tabBarExtraContent={
          <FinancesYearHandler value={year} onChange={handleYear} />
        }
      >
        <Tabs.TabPane key="0" tab={titleBuget}>
          <FinancesBugetTable
            data={bugetData}
            onSave={bugetOnSave}
            onAddYear={bugetOnAddYear}
            onRemYear={bugetOnRemYear}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="1" tab={titleForecast}>
          <FinancesForecastTable data={forecastData} />
        </Tabs.TabPane>
      </Tabs>
    </Layout.Content>
  );
}

export default compose(withAuth())(Finances);
