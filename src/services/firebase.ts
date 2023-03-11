import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPVWxUb8OTzyR9x8C1L2dk4uKXRFpTnn0",
  authDomain: "duda-doces.firebaseapp.com",
  projectId: "duda-doces",
  storageBucket: "duda-doces.appspot.com",
  messagingSenderId: "1012506733693",
  appId: "1:1012506733693:web:507af36f7c8c6892e51514",
  measurementId: "G-SK5GX7DR76"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);