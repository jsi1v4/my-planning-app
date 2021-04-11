import { SessionInstance } from 'src/lib/auth';

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

export interface IAuthService {
  onStateChanged: (fn: (session: SessionInstance) => void) => void;
  setPersistence: (persist?: boolean) => Promise<unknown>;
  signIn: (username: string, password: string) => Promise<unknown>;
  signOut: () => Promise<unknown>;
}

export interface IAuthenticationContext {
  isAuth: boolean | null;
  session: Session | null;
  authOn: (props: LoginProps) => Promise<void>;
  authOff: () => Promise<void>;
}
