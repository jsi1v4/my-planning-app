// eslint-disable-next-line max-classes-per-file
import { AuthInstance, Session } from './firebase';

export class Auth {
  constructor(private auth: AuthInstance) {}

  onStateChanged(fn: (session: Session | null) => void) {
    return this.auth.onAuthStateChanged(fn);
  }

  async setPersistence(persist = false) {
    return this.auth.setPersistence(persist ? 'local' : 'none');
  }

  async signIn(username: string, password: string) {
    return this.auth.signInWithEmailAndPassword(username, password);
  }

  async signOut() {
    return this.auth.signOut();
  }
}

export class MockAuth {
  constructor(private auth = jest) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onStateChanged(fn: (session: Session | null) => void) {
    return this.auth.fn();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setPersistence(persist = false) {
    return this.auth.fn();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signIn(username: string, password: string) {
    return this.auth.fn();
  }

  async signOut() {
    return this.auth.fn();
  }
}

export default Auth;
