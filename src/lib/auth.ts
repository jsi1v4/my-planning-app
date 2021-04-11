/* eslint-disable max-classes-per-file */
import firebase from './firebase';

export type SessionInstance = firebase.User;

export class AuthInstance {
  constructor(private auth: firebase.auth.Auth) {}

  onAuthStateChanged(fn: (session: SessionInstance) => void) {
    return this.auth.onAuthStateChanged(fn);
  }

  async setPersistence(persist?: boolean) {
    return this.auth.setPersistence(persist ? 'local' : 'none');
  }

  async signInWithEmailAndPassword(username: string, password: string) {
    return this.auth.signInWithEmailAndPassword(username, password);
  }

  async signOut() {
    return this.auth.signOut();
  }
}

export class MockAuthInstance {
  constructor(private api: unknown) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAuthStateChanged(fn: (session: SessionInstance) => void) {
    return () => {};
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setPersistence(persist?: boolean) {
    return new Promise((resolve) => resolve({}));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signInWithEmailAndPassword(username: string, password: string) {
    return new Promise((resolve) => resolve({}));
  }

  async signOut() {
    return new Promise((resolve) => resolve({}));
  }
}

export default AuthInstance;
