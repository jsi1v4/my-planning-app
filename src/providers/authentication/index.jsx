import React, { createContext, useState } from 'react';

export const AuthenticationContext = createContext(null);

export function AuthenticationProvider({ children }) {
  const [userName] = useState('John Doe');

  const signOut = () => {
    console.log('SIGNOUT');
  };

  return (
    <AuthenticationContext.Provider
      value={{
        userName,
        signOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
