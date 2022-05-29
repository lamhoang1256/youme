import styled from "styled-components";

export const StyledHeader = styled.header`
  --header-height: 100px;
  .header-container {
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    color: var(--white);
  }
  button {
    padding: 4px;
  }
  .header-mobile {
    display: none;
    gap: 20px;
    align-items: center;
  }
  .header-search {
    display: none;
  }
  .header-open,
  .header-search {
    font-size: 3rem;
    color: #fff;
    background-color: transparent;
  }
  .header-search {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 1023.98px) {
    .header-container.show-search {
      margin-bottom: calc(var(--header-height) / 100 * 70);
    }
    .header-overplay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 30;
    }
    .header-search {
      display: block;
    }
    .header-mobile {
      display: flex;
    }
  }
  @media screen and (max-width: 767.98px) {
    .header-action {
      display: none;
    }
    .header-search {
      display: block;
    }
  }
`;
