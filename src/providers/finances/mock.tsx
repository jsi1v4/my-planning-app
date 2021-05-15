import React from 'react';

import { FinancesContext } from './index';
import { FinancesService } from './mock-service';

export function FinancesMock({ children }) {
  return (
    <FinancesContext.Provider value={new FinancesService({})}>
      {children}
    </FinancesContext.Provider>
  );
}

export default FinancesMock;
