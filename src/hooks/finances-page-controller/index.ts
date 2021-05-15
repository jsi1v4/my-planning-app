import { useCallback, useEffect, useState } from 'react';

import { useFinancesContext } from 'src/providers/finances';
import { BugetRow, ForecastRow } from 'src/providers/finances/types';

export function useFinancesPageController() {
  const context = useFinancesContext();

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [bugetData, setBugetData] = useState<BugetRow[]>();
  const [forecastData, setForecastData] = useState<ForecastRow[]>();

  const fetchBuget = useCallback(() => {
    setBugetData(undefined);
    context.getBuget(year).then(setBugetData).catch(console.error);
  }, [year, context]);

  const fetchForecast = useCallback(() => {
    setForecastData(undefined);
    context.getForecast(year).then(setForecastData).catch(console.error);
  }, [year, context]);

  const bugetOnSave = useCallback(
    async (items: BugetRow[]) => {
      return context
        .putBuget(items)
        .then(() => fetchBuget())
        .catch(console.error);
    },
    [context, fetchBuget]
  );

  const bugetOnAddYear = useCallback(async () => {
    return context
      .addYearBuget(year)
      .then(() => fetchBuget())
      .catch(console.error);
  }, [year, context, fetchBuget]);

  const bugetOnRemYear = useCallback(async () => {
    const keys = bugetData?.map((t) => t.key);
    return context
      .remYearBuget(keys)
      .then(() => fetchBuget())
      .catch(console.error);
  }, [bugetData, context, fetchBuget]);

  const handleYear = (value: number) => {
    setYear(value);
  };

  useEffect(() => {
    fetchBuget();
    fetchForecast();
  }, [fetchBuget, fetchForecast, year]);

  return {
    bugetData,
    bugetOnSave,
    bugetOnAddYear,
    bugetOnRemYear,
    forecastData,
    year,
    handleYear
  };
}

export default useFinancesPageController;
