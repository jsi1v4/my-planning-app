import React from 'react';

import { AuthenticationContext } from './index';

export function AuthenticationMock({ children }) {
  return (
    <AuthenticationContext.Provider
      value={{
        isAuth: true,
        session: null,
        authOn: jest.fn(),
        authOff: jest.fn()
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationMock;
