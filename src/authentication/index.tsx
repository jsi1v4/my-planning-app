import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { onStateChanged, setPersistence, signIn, signOut } from 'src/lib/auth';
import { LoginProps, Session, IAuthenticationContext } from './types';

export const AuthenticationContext = createContext<IAuthenticationContext>(
  null as never
);

export const useAuth = () => useContext(AuthenticationContext);

export function AuthenticationProvider({ children }) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  const authOn = async (props: LoginProps) => {
    await setPersistence(props.remember);
    await signIn(props.username, props.password);
  };

  const authOff = () => signOut();

  useEffect(() => {
    const unsubscribe = onStateChanged(async (state) => {
      setIsAuth(!!state);
      if (state) {
        setSession({
          displayName: state.displayName,
          email: state.email,
          photoURL: state.photoURL,
          emailVerified: state.emailVerified,
          token: await state.getIdToken()
        });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuth,
        session,
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
    React.memo((props) => {
      const { isAuth } = useAuth();
      const loginAction = useLoginAction();

      useEffect(() => {
        if (isAuth === false) {
          loginAction();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isAuth]);

      if (isAuth) {
        return <Component {...props} />;
      }
      return null;
    });
}
