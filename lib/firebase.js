import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Variables para autenticar proyecto en firebase
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_APPID,
};

// Chequea si no hay una instancia inicializada de firabase, sino la inicia
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Guarda diferentes instancias en constantes para poder exportarlas de forma individual
const app = firebase.app();
// Para autenticar
const auth = firebase.auth();
// Base de datos
const db = firebase.firestore();
// Momento en el que guardo las cosas en la base de datos
const now = firebase.firestore.Timestamp.now();
// Para subir assets
const storage = firebase.storage();

// Exportando todas las constantes
export { auth, db, now, storage, config, app };
