import { useCallback, useEffect, useState } from 'react';

import { useSheetContext } from 'src/providers/sheet';
import { BugetRow } from 'src/providers/sheet/types';

export function useSheetPageController() {
  const context = useSheetContext();

  const [bugetData, setBugetData] = useState<BugetRow[]>();

  const fetchData = useCallback(() => {
    setBugetData(undefined);
    context.getBuget().then(setBugetData).catch(console.error);
  }, [context]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    bugetData
  };
}

export default useSheetPageController;
