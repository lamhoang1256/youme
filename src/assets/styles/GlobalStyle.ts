import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --primary-color:#007aff;
    --dark-color:#080f28;
    --max-width-container:1500px;
  }
  .container {
    width: 100%;
    max-width: 1600px;
    padding: 0 50px;
    margin: 0 auto;
    @media screen and (max-width: 1023.98px) {
      padding: 0 25px;
      
    }
    @media screen and (max-width: 767.98px) {
      padding: 0 15px;
    }
    
    
    

}
`;
