import React from 'react';
import { render } from '@testing-library/react';

import { MockApiInstance } from 'src/lib/api';
import { SheetProvider } from './index';

describe('SheetProvider', () => {
  it('should render providers', () => {
    const { asFragment } = render(
      <SheetProvider api={new MockApiInstance({}) as never}>
        <></>
      </SheetProvider>
    );
    expect(asFragment()).toBeDefined();
  });
});
