import firebase from 'firebase';

import 'firebase/firestore';
import 'regenerator-runtime';

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEAUSREMENT_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
