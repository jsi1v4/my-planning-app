import firebase from './firebase';

const auth = firebase.auth();

export type State = firebase.User;

export function onStateChanged(fn: (user: State | null) => void) {
  return auth.onAuthStateChanged(fn);
}

export async function setPersistence(persist = false) {
  return auth.setPersistence(persist ? 'local' : 'none');
}

export async function signIn(username: string, password: string) {
  return auth.signInWithEmailAndPassword(username, password);
}

export async function signOut() {
  return auth.signOut();
}

export default auth;
