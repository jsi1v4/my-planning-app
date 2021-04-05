import React from 'react';
import { render } from '@testing-library/react';

import { MockAuth } from 'src/lib/auth';
import { AuthenticationProvider } from './index';

describe('AuthenticationProvider component', () => {
  it('should render providers', () => {
    const { asFragment } = render(
      <AuthenticationProvider api={new MockAuth() as never}>
        <></>
      </AuthenticationProvider>
    );
    expect(asFragment()).toBeDefined();
  });
});
