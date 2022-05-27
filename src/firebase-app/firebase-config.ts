import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3XOeB5YuJ75LzFsnxfhQ3U3Px_fj4zfA",
  authDomain: "mopie-6d385.firebaseapp.com",
  projectId: "mopie-6d385",
  storageBucket: "mopie-6d385.appspot.com",
  messagingSenderId: "897819083495",
  appId: "1:897819083495:web:98c3a928f2d8e8e59c5842",
  measurementId: "G-LC992GS3E0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
