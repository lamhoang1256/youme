import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --primary-color:#007aff;
    --dark-color:#080f28;
    --max-width-container:1500px;
  }
  .container{
    width: 100%;
    max-width: var(--max-width-container);
    margin: 0 auto;
  }
`;
