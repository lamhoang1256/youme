import { auth, db } from "firebase-app/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const registerApi = async (user: { username: string; email: string; password: string }) => {
  const { username, email, password } = user;
  await createUserWithEmailAndPassword(auth, email, password);
  if (!auth.currentUser) return;
  await updateProfile(auth.currentUser, {
    displayName: username,
  });
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    username,
    email,
    password,
    createdAt: serverTimestamp(),
    favorites: [
      {
        coverVerticalUrl:
          "https://img.netpop.app/cover/20211026/1635241278885_4cda94d6c593b088e0ca04cb4dffefa0bljXY2zZSD6poD4dOPwIxQkFTUB.jpg",
        domainType: 0,
        id: "4555",
        name: "Sonic the Hedgehog",
      },
    ],
  });
};
