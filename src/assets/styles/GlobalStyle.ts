import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --primary-color: #8a3cff;
    --dark-color: #080f28;
    --darker-color:#210e37;
    --bg-load-image: #191a1f;
    --bg-skeleton: #656871;
    --max-width-container: 1500px;
    --gradient-primary:linear-gradient(270deg, #c042ff, #8a3cff);
    --gradient-secondary:linear-gradient(to right top, #fc6c8f, #ffb86c);
    --zIndex-header-dropdown:20;
    --zIndex-search-result:25;
    --zIndex-popular-list:40;
    --zIndex-searchbar-mobile:50;
    --zIndex-overplay: 50;
    --zIndex-header-menu: 100;
  }
  .container {
    width: 100%;
    max-width: 1470px;
    padding: 0 15px;
    margin: 0 auto;
    @media screen and (max-width: 1023.98px) {
      padding: 0 25px;
    }
    @media screen and (max-width: 767.98px) {
      padding: 0 15px;
    }
  }
  .label-small{
    font-weight: 700;
    padding-right: 10px;
  }
`;
