import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButtonScrollTop = styled.button`
  position: relative;
  img {
    transform: rotate(90deg);
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
  }
`;

const URL_PUBLIC_IMG = `${process.env.REACT_APP_PUBLIC}/images`;
const ButtonScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledButtonScrollTop>
      {showTopBtn && (
        <button type="button" onClick={goToTop}>
          <img src={`${URL_PUBLIC_IMG}/arrow-back.svg`} alt="Go Top" />
        </button>
      )}
    </StyledButtonScrollTop>
  );
};
export default ButtonScrollTop;
