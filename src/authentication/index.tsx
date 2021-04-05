import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import { Auth } from 'src/lib/auth';
import { LoginProps, Session, IAuthenticationContext } from './types';

interface ProvidersProps {
  api: Auth;
  children: ReactNode;
}

export const AuthenticationContext = createContext<IAuthenticationContext>(
  null as never
);

export const useAuth = () => useContext(AuthenticationContext);

export function AuthenticationProvider({ api, children }: ProvidersProps) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  const authOn = async (props: LoginProps) => {
    await api.setPersistence(props.remember);
    await api.signIn(props.username, props.password);
  };

  const authOff = () => api.signOut();

  const onStateChanged = async (state) => {
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
  };

  useEffect(() => {
    const unsubscribe = api.onStateChanged(onStateChanged);
    return () => unsubscribe();
  }, [api]);

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
  return () => window.location.replace('/login');
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
      }, [isAuth, loginAction]);

      if (isAuth) {
        return <Component {...props} />;
      }
      return null;
    });
}
