import React from 'react';
import { render } from '@testing-library/react';

import { MockAuthInstance } from 'src/lib/auth';
import { AuthenticationProvider } from './index';

describe('AuthenticationProvider', () => {
  it('should render providers', () => {
    const { asFragment } = render(
      <AuthenticationProvider api={new MockAuthInstance({}) as never}>
        <></>
      </AuthenticationProvider>
    );
    expect(asFragment()).toBeDefined();
  });
});
