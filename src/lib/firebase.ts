import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export function createApp() {
  if (firebase.apps.length) {
    return firebase.app();
  }
  return firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL
  });
}

export default firebase;
