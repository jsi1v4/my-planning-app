import { useCallback, useEffect, useState } from 'react';

import { useSheetContext } from 'src/providers/sheet';
import { BugetRow, ForecastRow } from 'src/providers/sheet/types';

export function useSheetPageController() {
  const context = useSheetContext();

  const [bugetData, setBugetData] = useState<BugetRow[]>();
  const [forecastData, setForecastData] = useState<ForecastRow[]>();

  const fetchBuget = useCallback(
    (year?: number) => {
      setBugetData(undefined);
      context.getBuget(year).then(setBugetData).catch(console.error);
    },
    [context]
  );

  const fetchForecast = useCallback(
    (year?: number) => {
      setForecastData(undefined);
      context.getForecast(year).then(setForecastData).catch(console.error);
    },
    [context]
  );

  const bugetOnSave = useCallback(
    async (items: BugetRow[]) => {
      return context
        .putBuget(items)
        .then(() => fetchBuget())
        .catch(console.error);
    },
    [context, fetchBuget]
  );

  const bugetOnAddYear = useCallback(
    async (year: number) => {
      return context
        .addYearBuget(year)
        .then(() => fetchBuget(year))
        .catch(console.error);
    },
    [context, fetchBuget]
  );

  useEffect(() => {
    fetchBuget();
    fetchForecast();
  }, [fetchBuget, fetchForecast]);

  return {
    bugetData,
    bugetOnSave,
    bugetOnAddYear,
    forecastData
  };
}

export default useSheetPageController;
