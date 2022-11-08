import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "../styles/reset.scss";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) return null;
  if (typeof window === "undefined") return <></>;
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
