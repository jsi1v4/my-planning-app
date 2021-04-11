import { AuthInstance, SessionInstance } from 'src/lib/auth';

import { IAuthService } from './types';

export class AuthService implements IAuthService {
  constructor(private api: AuthInstance) {}

  onStateChanged(fn: (session: SessionInstance) => void) {
    return this.api.onAuthStateChanged(fn);
  }

  async setPersistence(persist = false) {
    return this.api.setPersistence(persist);
  }

  async signIn(username: string, password: string) {
    return this.api.signInWithEmailAndPassword(username, password);
  }

  async signOut() {
    return this.api.signOut();
  }
}

export default AuthService;
