import firebase, { createApp } from './firebase';

export type AuthInstance = firebase.auth.Auth;
export type ApiInstance = firebase.firestore.Firestore;
export type SessionUser = firebase.User;

export function initializeApp() {
  const app = createApp();
  const auth = app.auth();
  const api = app.firestore();
  return {
    app,
    auth,
    api
  };
}

export default initializeApp;
