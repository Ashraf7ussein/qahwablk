import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC7eSeMaK45NtFJXkfxAhAZ2r9JBWzWLs",
  authDomain: "qahwablk-website.firebaseapp.com",
  projectId: "qahwablk-website",
  storageBucket: "qahwablk-website.appspot.com",
  messagingSenderId: "639542813952",
  appId: "1:639542813952:web:9e951566e82070c0067fe5",
  measurementId: "G-VR1VV5ETBQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
