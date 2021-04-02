import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { IAuthenticationContext } from './types';

export const AuthenticationContext = createContext<IAuthenticationContext>(
  null as never
);

export function AuthenticationProvider({ children }) {
  const [userName] = useState<string>('John Doe');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const authOn = () => {
    setIsAuth(true);
  };

  const authOff = () => {
    setIsAuth(false);
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

export function useLoginAction() {
  const router = useRouter();
  return () => router.push('/login');
}

export function withAuth() {
  return (Component) =>
    React.memo(function AuthWrappedComponent(props) {
      const { isAuth } = useContext(AuthenticationContext);
      const loginAction = useLoginAction();

      useEffect(() => {
        if (!isAuth) {
          loginAction();
        }
      }, [isAuth, loginAction]);

      if (isAuth) {
        return <Component {...props} />;
      }
      return null;
    });
}
