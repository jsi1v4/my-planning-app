import { IAuthService } from './types';

export class AuthService implements IAuthService {
  constructor(private api: unknown) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setPersistence(persist = false) {
    return new Promise<unknown>((resolve) => resolve({}));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signIn(username: string, password: string) {
    return new Promise<unknown>((resolve) => resolve({}));
  }

  async signOut() {
    return new Promise<unknown>((resolve) => resolve({}));
  }
}

export default AuthService;
