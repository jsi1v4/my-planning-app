import { createApp } from './firebase';
import { Auth } from './auth';

export function initializeApp() {
  const app = createApp();
  const auth = new Auth(app.auth());
  return {
    app,
    auth
  };
}

export default initializeApp;
