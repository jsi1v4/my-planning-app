export interface LoginProps {
  username?: string;
  password?: string;
  remember?: boolean;
}

export interface Session {
  displayName: string | null;
  email: string;
  photoURL: string | null;
  emailVerified: boolean;
  token: string;
}

export interface IAuthenticationContext {
  isAuth: boolean | null;
  session: Session | null;
  authOn: (props: LoginProps) => Promise<void>;
  authOff: () => Promise<void>;
}
