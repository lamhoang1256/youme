import { auth, db } from "firebase-app/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { slugify } from "helpers/slugify";

export const registerApi = async (user: {
  fullname: string;
  email: string;
  password: string;
  photoURL: string;
}) => {
  const { fullname, email, password, photoURL } = user;
  await createUserWithEmailAndPassword(auth, email, password);
  if (!auth.currentUser) return;
  await updateProfile(auth.currentUser, {
    displayName: fullname,
    photoURL,
  });
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    fullname,
    email,
    password,
    username: slugify(fullname),
    avatar:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
