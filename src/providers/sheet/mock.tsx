import React from 'react';

import { SheetContext } from './index';
import { SheetService } from './mock-service';

export function SheetMock({ children }) {
  return (
    <SheetContext.Provider value={new SheetService({})}>
      {children}
    </SheetContext.Provider>
  );
}

export default SheetMock;
