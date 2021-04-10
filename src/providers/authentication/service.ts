import { AuthInstance } from 'src/lib';

import { IAuthService } from './types';

export class AuthService implements IAuthService {
  constructor(private api: AuthInstance) {}

  async setPersistence(persist = false) {
    return this.api.setPersistence(persist ? 'local' : 'none');
  }

  async signIn(username: string, password: string) {
    return this.api.signInWithEmailAndPassword(username, password);
  }

  async signOut() {
    return this.api.signOut();
  }
}

export default AuthService;
