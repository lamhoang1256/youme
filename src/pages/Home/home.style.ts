import styled from "styled-components";

export const StyledHome = styled.div``;

export const StyledWrapperLayout = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px !important;
  .wrapper-main {
    flex: 1;
  }
  .wrapper-side {
    width: 310px;
  }
  @media screen and (max-width: 1023.98px) {
    flex-direction: column;
    margin-top: 20px !important;
    .wrapper-side {
      width: 100%;
    }
  }
`;
