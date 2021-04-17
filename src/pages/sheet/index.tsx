import React from 'react';
import { compose } from 'ramda';
import { Layout, Tabs } from 'antd';
import { ProjectOutlined, TransactionOutlined } from '@ant-design/icons';

import { withAuth } from 'src/providers/authentication';
import { useI18nMessage } from 'src/i18n';
import { useSheetPageController } from 'src/hooks/sheet-page-controller';
import { SheetBugetTable } from 'src/components/sheet-buget-table';
import { SheetForecastTable } from 'src/components/sheet-forecast-table';
import { TabTitle } from 'src/styles/sheet';

function Sheet() {
  const t = useI18nMessage();

  const { bugetData, forecastData, bugetOnSave } = useSheetPageController();

  const titleBuget = (
    <TabTitle>
      <TransactionOutlined />
      {t('sheet-title-buget')}
    </TabTitle>
  );

  const titleForecast = (
    <TabTitle>
      <ProjectOutlined />
      {t('sheet-title-forecast')}
    </TabTitle>
  );

  return (
    <Layout.Content>
      <Tabs>
        <Tabs.TabPane key="0" tab={titleBuget}>
          <SheetBugetTable data={bugetData} onSave={bugetOnSave} />
        </Tabs.TabPane>
        <Tabs.TabPane key="1" tab={titleForecast}>
          <SheetForecastTable data={forecastData} />
        </Tabs.TabPane>
      </Tabs>
    </Layout.Content>
  );
}

export default compose(withAuth())(Sheet);
