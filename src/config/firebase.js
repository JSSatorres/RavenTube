// podria haber implementado mas metodos como recuperar contraseña
// o registrarse por google pero por falta de tiempo he pensado que
// aporta mas valor a la prueba otras utilidades que implemnar
// mas opciones de firebase quedando demostrado su uso

import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASEREMENT_ID,
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);
