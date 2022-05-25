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
  .header-action {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .header-action {
    display: flex;
    gap: 20px;
  }
  button {
    padding: 10px 20px;
    border-radius: 8px;
  }
  button.primary {
    background-color: var(--primary-color);
    color: var(--white);
  }
  .header-mobile {
    display: none;
    gap: 20px;
  }
  .header-search {
    display: none;
  }
  .header-open {
    display: flex;
    font-size: 3rem;
    z-index: 100;
    background-color: #3d6ef7;
    color: #fff;
    padding: 8px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1023.98px) {
    .header-overplay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.8);
    }
    .header-search {
      display: block;
    }
    .header-auth {
      display: none;
    }
  }
  @media screen and (max-width: 767.98px) {
    .header-container.show-search {
      margin-bottom: calc(var(--header-height) / 100 * 70);
    }
    .header-action {
      display: none;
    }
    .header-mobile {
      display: flex;
    }
    .header-search {
      display: block;
    }
  }
`;
