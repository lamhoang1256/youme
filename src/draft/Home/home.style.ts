import styled from "styled-components";

export const StyledHome = styled.div`
  .see-more {
    padding: 14px 20px;
    width: 100%;
    background-color: var(--primary-color);
    border-radius: 4px;
    color: var(--white);
    font-weight: 600;
  }
`;

export const StyledWrapperLayout = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px !important;
  .wrapper-main {
    flex: 1;
  }
  .wrapper-side {
    width: 310px;
  }
  @media screen and (max-width: 1023.98px) {
    flex-direction: column;
    .wrapper-side {
      width: 100%;
    }
  }
`;
