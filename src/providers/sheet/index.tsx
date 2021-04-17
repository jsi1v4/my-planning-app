import React, { PropsWithChildren, createContext, useContext } from 'react';

import { ApiInstance } from 'src/lib/api';
import { SheetService } from './service';
// import { SheetService } from './mock-service';
import { ISheetContext } from './types';

interface ProvidersProps {
  api: ApiInstance;
}

export const SheetContext = createContext<ISheetContext>(null as never);

export const useSheetContext = () => useContext(SheetContext);

export function SheetProvider({
  api,
  children
}: PropsWithChildren<ProvidersProps>) {
  return (
    <SheetContext.Provider value={new SheetService(api)}>
      {children}
    </SheetContext.Provider>
  );
}
