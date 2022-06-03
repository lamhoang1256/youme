import { toast } from "react-toastify";

export const toastErrorFirebase = (message: string) => {
  return toast.error(message.split("Firebase: ")[1]);
};
