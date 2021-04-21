import React from 'react';
import { compose } from 'ramda';
import { Layout, Tabs } from 'antd';
import { TableOutlined, TransactionOutlined } from '@ant-design/icons';

import { withAuth } from 'src/providers/authentication';
import { useI18nMessage } from 'src/i18n';
import { useFinancesPageController } from 'src/hooks/finances-page-controller';
import { FinancesBugetTable } from 'src/components/finances-buget-table';
import { FinancesForecastTable } from 'src/components/finances-forecast-table';
import { TabTitle } from 'src/styles/finances';

function Finances() {
  const t = useI18nMessage();

  const {
    bugetData,
    forecastData,
    bugetOnSave,
    bugetOnAddYear
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
      <Tabs>
        <Tabs.TabPane key="0" tab={titleBuget}>
          <FinancesBugetTable
            data={bugetData}
            onSave={bugetOnSave}
            onAddYear={bugetOnAddYear}
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
