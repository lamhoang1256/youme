import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --primary-color: #007aff;
    --secondary-color: #e62e8f;
    --dark-color: #080f28;
    --bg-load-image: #191a1f;
    --bg-skeleton: #656871;
    --max-width-container: 1500px;
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
