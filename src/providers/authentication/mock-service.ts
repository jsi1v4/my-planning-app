import { SessionInstance } from 'src/lib/auth';
import { IAuthService } from './types';

export class AuthService implements IAuthService {
  constructor(private api: unknown) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onStateChanged(fn: (session: SessionInstance) => void) {
    const getIdToken = () => new Promise<string>((r) => r('asdasdasd'));
    fn({
      displayName: 'John Doe',
      email: 'john.doe@test.com',
      emailVerified: true,
      getIdToken
    } as never);
    return () => {};
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setPersistence(persist = false) {
    return new Promise<void>((resolve) => resolve());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signIn(username: string, password: string) {
    return new Promise<unknown>((resolve) => resolve({}));
  }

  async signOut() {
    return new Promise<void>((resolve) => resolve());
  }
}

export default AuthService;
