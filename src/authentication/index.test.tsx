import React from 'react';
import { render } from '@testing-library/react';

import { AuthenticationContext } from './index';

describe('AuthenticationProvider component', () => {
  it('should render providers', () => {
    const { asFragment } = render(
      <AuthenticationContext.Provider
        value={{
          isAuth: true,
          userName: 'John Doe',
          authOn: jest.fn(),
          authOff: jest.fn()
        }}
      />
    );
    expect(asFragment()).toBeDefined();
  });
});
