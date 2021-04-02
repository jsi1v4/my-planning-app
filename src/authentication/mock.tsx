import React from 'react';

import { AuthenticationContext } from './index';

export function AuthenticationMock({ children }) {
  return (
    <AuthenticationContext.Provider
      value={{
        isAuth: true,
        userName: 'John Doe',
        authOn: jest.fn(),
        authOff: jest.fn()
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationMock;
