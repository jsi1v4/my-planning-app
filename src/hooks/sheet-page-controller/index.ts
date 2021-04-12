import { useCallback, useEffect, useState } from 'react';

import { useSheetContext } from 'src/providers/sheet';
import { BugetRow, ForecastRow } from 'src/providers/sheet/types';

export function useSheetPageController() {
  const context = useSheetContext();

  const [bugetData, setBugetData] = useState<BugetRow[]>();
  const [forecastData, setForecastData] = useState<ForecastRow[]>();

  const fetchData = useCallback(() => {
    setBugetData(undefined);
    setForecastData(undefined);

    context.getBuget().then(setBugetData).catch(console.error);
    context.getForecast().then(setForecastData).catch(console.error);
  }, [context]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    bugetData,
    forecastData
  };
}

export default useSheetPageController;
