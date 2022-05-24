import { useEffect, useState } from "react";

const useScrollingUp = () => {
  let prevScroll: any;
  const [scrollingUp, setScrollingUp] = useState(false);
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll > currScroll;
    setScrollingUp(isScrolled);
    prevScroll = currScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollingUp;
};

export default useScrollingUp;
