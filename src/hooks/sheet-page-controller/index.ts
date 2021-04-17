import { useCallback, useEffect, useState } from 'react';

import { useSheetContext } from 'src/providers/sheet';
import { BugetRow, ForecastRow } from 'src/providers/sheet/types';

export function useSheetPageController() {
  const context = useSheetContext();

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [bugetData, setBugetData] = useState<BugetRow[]>();
  const [forecastData, setForecastData] = useState<ForecastRow[]>();

  const fetchBuget = useCallback(() => {
    setBugetData(undefined);
    context.getBuget(year).then(setBugetData).catch(console.error);
  }, [context, year]);

  const fetchForecast = useCallback(() => {
    setForecastData(undefined);
    context.getForecast(year).then(setForecastData).catch(console.error);
  }, [context, year]);

  const bugetOnSave = useCallback(
    (item: BugetRow) => {
      return context
        .putBuget(item)
        .then(() => {
          fetchBuget();
        })
        .catch(console.error);
    },
    [context, fetchBuget]
  );

  const handleYear = (value: number) => {
    setYear(value);
  };

  useEffect(() => {
    fetchBuget();
    fetchForecast();
  }, [fetchBuget, fetchForecast]);

  return {
    bugetData,
    bugetOnSave,
    forecastData,
    handleYear
  };
}

export default useSheetPageController;
