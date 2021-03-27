import React, { createContext, useState, useContext } from 'react';

export const AuthenticationContext = createContext(null);

export function AuthenticationProvider({ children }) {
  const [userName] = useState('John Doe');
  const [isAuth, setIsAuth] = useState(false);

  const authOn = () => {
    setIsAuth(true);
  };

  const authOff = () => {
    setIsAuth(true);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuth,
        userName,
        authOn,
        authOff
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function withAuth() {
  return ({ children }) => {
    const { isAuth } = useContext(AuthenticationContext);
    if (isAuth) {
      return <>{children}</>;
    }
    return null;
  };
}

export default {
  AuthenticationProvider,
  withAuth
};
