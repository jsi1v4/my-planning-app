import React from 'react';

import { AuthenticationContext } from './index';

export function AuthenticationMock({ children }) {
  return (
    <AuthenticationContext.Provider
      value={{
        userName: 'John Doe',
        signOut: jest.fn(),
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationMock;
