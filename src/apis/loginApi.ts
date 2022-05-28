import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import { toast } from "react-toastify";

export const loginAPi = async (user: { email: string; password: string }) => {
  const { email, password } = user;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return toast.success("Success Sign In");
  } catch (error: any) {
    if (error.message.includes("wrong-password"))
      return toast.error("It seems your password was wrong");
    return toast.error(error.message.split("Firebase: ")[1]);
  }
};
