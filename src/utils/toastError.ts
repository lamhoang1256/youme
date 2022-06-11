import { toast } from "react-toastify";

export const toastError = (message: string) => {
  return toast.error(message);
};

export const toastErrorFirebase = (message: string) => {
  return toast.error(message.split("Firebase: ")[1]);
};
