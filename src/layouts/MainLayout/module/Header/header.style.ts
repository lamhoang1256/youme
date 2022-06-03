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
    .logo-img {
      height: 35px;
      transform: translateY(15%);
    }
    @media screen and (max-width: 1023.98px) {
      &-container.show-search {
        margin-bottom: calc(var(--header-height) / 100 * 70);
      }
      &-overplay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: var(--zIndex-overplay);
      }
    }
    @media screen and (max-width: 767.98px) {
      .logo-img {
        height: 30px;
        transform: translateY(20%);
      }
    }
  }
`;

export const StyledHeaderActions = styled.div`
  display: flex;
  gap: 40px;
  .header {
    &-auth {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 767.98px) {
    gap: 20px;
  }
`;

export const HeaderMenuMobile = styled.div`
  display: none;
  gap: 20px;
  align-items: center;
  button {
    display: none;
    font-size: 2.6rem;
    color: #fff;
    background-color: transparent;
    height: 100%;
    align-items: center;
  }
  @media screen and (max-width: 1023.98px) {
    display: flex;
    button {
      display: flex;
    }
  }
`;
