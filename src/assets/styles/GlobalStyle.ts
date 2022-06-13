import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --primary-color: #8a3cff;
    --dark-color: #080f28;
    --gray-color: #c4c1ea;
    --darker-color:#210e37;
    --bg-load-image: #191a1f;
    --bg-skeleton: #656871;
    --height-header:100px;
    --max-width-container: 1500px;
    --gradient-primary:linear-gradient(270deg, #c042ff, #8a3cff);
    --gradient-secondary:linear-gradient(to right top, #fc6c8f, #ffb86c);
  }
`;
