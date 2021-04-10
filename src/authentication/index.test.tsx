import React from 'react';
import { render } from '@testing-library/react';

import { AuthInstance } from 'src/lib';
import { Auth } from 'src/lib/mock';
import { AuthenticationProvider } from './index';

describe('AuthenticationProvider component', () => {
  it('should render providers', () => {
    const { asFragment } = render(
      <AuthenticationProvider api={new Auth() as AuthInstance}>
        <></>
      </AuthenticationProvider>
    );
    expect(asFragment()).toBeDefined();
  });
});
