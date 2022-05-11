import styled from "styled-components";

export const StyledHome = styled.div``;

export const StyledWrapperLayout = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 50px !important;
  min-height: 100vh;
  .wrapper-main {
    flex: 1;
  }
  .wrapper-side {
    width: 300px;
  }
  @media screen and (max-width: 1023.98px) {
    flex-direction: column;
  }
`;
