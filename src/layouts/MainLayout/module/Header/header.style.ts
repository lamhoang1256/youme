import styled from "styled-components";

export const StyledHeader = styled.header`
  --header-height: 100px;
  .header {
    &-container {
      position: relative;
      height: var(--header-height);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-logo {
      color: var(--white);
    }
    @media screen and (max-width: 1023.98px) {
      &-container.show-search {
        margin-bottom: calc(var(--header-height) / 100 * 70);
      }
      &-overplay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 50;
      }
    }
  }
`;

export const StyledHeaderActions = styled.div`
  display: flex;
  gap: 40px;
  .header {
    &-mobile {
      display: none;
      gap: 20px;
      align-items: center;
    }
    @media screen and (max-width: 1023.98px) {
      &-mobile {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 767.98px) {
    gap: 20px;
  }
`;

export const StyledHeaderButton = styled.button`
  display: none;
  font-size: 2.6rem;
  color: #fff;
  background-color: transparent;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 1023.98px) {
    display: flex;
  }
`;

export const StyledButonLogin = styled.button`
  font-size: 1.8rem;
  padding: 8px 20px;
  background-image: linear-gradient(270deg, #c042ff, #8a3cff);
  border-radius: 8px;
  color: #fff;
  @media screen and (max-width: 767.98px) {
    font-size: 1.6rem;
  }
`;
