import React from 'react';
import { render } from '@testing-library/react';

import { MockApiInstance } from 'src/lib/api';
import { FinancesProvider } from './index';

describe('FinancesProvider', () => {
  it('should render providers', () => {
    const { asFragment } = render(
      <FinancesProvider api={new MockApiInstance({}) as never}>
        <></>
      </FinancesProvider>
    );
    expect(asFragment()).toBeDefined();
  });
});
