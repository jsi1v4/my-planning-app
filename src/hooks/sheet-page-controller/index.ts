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

    const year = new Date().getFullYear();

    context.getBuget(year).then(setBugetData).catch(console.error);
    context.getForecast(year).then(setForecastData).catch(console.error);
  }, [context]);

  const bugetOnSave = useCallback(
    (key: number, value: number) => {
      console.log(key, value);
      return context.putBuget(key, value).catch(console.error);
    },
    [context]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    bugetData,
    bugetOnSave,
    forecastData
  };
}

export default useSheetPageController;
