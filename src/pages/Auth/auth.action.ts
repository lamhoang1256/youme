import { db } from "firebase-app/firebase-config";
import { User } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const createProfileUser = (user: User) => {
  setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    username: user.displayName,
    email: user.email,
    createdAt: serverTimestamp(),
    avatar: user.photoURL,
    favorites: [],
  });
};
