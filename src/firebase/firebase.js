//Dependencias
import { GoogleAuthProvider, FacebookAuthProvider  } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

//Configuracion
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

//Iniciar firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const db = getFirestore(app)