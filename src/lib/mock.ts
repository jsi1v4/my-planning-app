export class Auth {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAuthStateChanged(fn = () => {}) {
    return () => {};
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setPersistence(persist?: string) {
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

export default Auth;
