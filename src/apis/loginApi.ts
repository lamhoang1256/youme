import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";

export const loginAPi = async (user: { email: string; password: string }) => {
  try {
    const { email, password } = user;
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};
