import React, { PropsWithChildren, createContext, useContext } from 'react';

import { ApiInstance } from 'src/lib/api';
// import { FinancesService } from './service';
import { FinancesService } from './mock-service';
import { IFinancesContext } from './types';

interface ProvidersProps {
  api: ApiInstance;
}

export const FinancesContext = createContext<IFinancesContext>(null as never);

export const useFinancesContext = () => useContext(FinancesContext);

export function FinancesProvider({
  api,
  children
}: PropsWithChildren<ProvidersProps>) {
  return (
    <FinancesContext.Provider value={new FinancesService(api)}>
      {children}
    </FinancesContext.Provider>
  );
}
