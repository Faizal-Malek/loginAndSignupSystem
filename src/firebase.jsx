import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDFSsWY9LF-vkyWmgks58vOsTOKwOs-BLQ",
  authDomain: "libex-learning-platform-dev.firebaseapp.com",
  projectId: "libex-learning-platform-dev",
  storageBucket: "libex-learning-platform-dev.appspot.com",
  messagingSenderId: "248730584713",
  appId: "1:248730584713:web:574e0dd3723fb11115e858",
  measurementId: "G-BP6G4XYKYN",
});

export const auth = app.auth();
export default app;
