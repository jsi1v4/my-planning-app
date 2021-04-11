import { createApp } from './firebase';
import { AuthInstance } from './auth';
import { ApiInstance } from './api';

export function initializeApp() {
  const app = createApp();
  const auth = app.auth();
  const api = app.firestore();
  return {
    app,
    auth: new AuthInstance(auth),
    api: new ApiInstance(api)
  };
}

export default initializeApp;
