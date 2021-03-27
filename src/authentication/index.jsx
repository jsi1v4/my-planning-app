import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export const AuthenticationContext = createContext(null);

export function AuthenticationProvider({ children }) {
  const [userName] = useState('John Doe');
  const [isAuth, setIsAuth] = useState(false);

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
