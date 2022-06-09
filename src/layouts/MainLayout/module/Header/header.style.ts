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
      height: 40px;
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
  align-items: center;
  gap: 30px;
  .header {
    &-auth {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &-search {
      display: block;
    }
  }
  @media screen and (max-width: 1023.98px) {
    gap: 20px;
  }
  @media screen and (max-width: 767.98px) {
    gap: 14px;
  }
`;

export const StyledHeaderButton = styled.button`
  display: none;
  font-size: 2.6rem;
  color: #fff;
  background-color: transparent;
  @media screen and (max-width: 1023.98px) {
    display: block;
  }
`;
