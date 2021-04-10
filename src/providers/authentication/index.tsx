import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { AuthInstance, SessionUser } from 'src/lib';
import { AuthService } from './service';
import { LoginProps, Session, IAuthenticationContext } from './types';

interface ProvidersProps {
  api: AuthInstance;
}

export const AuthenticationContext = createContext<IAuthenticationContext>(
  null as never
);

export const useAuth = () => useContext(AuthenticationContext);

export function AuthenticationProvider({
  api,
  children
}: PropsWithChildren<ProvidersProps>) {
  const service = useMemo(() => new AuthService(api), [api]);

  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  const authOn = useCallback(
    async (props: LoginProps) => {
      await service.setPersistence(props.remember);
      await service.signIn(props.username, props.password);
    },
    [service]
  );

  const authOff = useCallback(async () => {
    await service.signOut();
  }, [service]);

  const onStateChanged = async (state: SessionUser) => {
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
    const unsubscribe = api.onAuthStateChanged(onStateChanged);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isAuth]);

      if (isAuth) {
        return <Component {...props} />;
      }
      return null;
    });
}
