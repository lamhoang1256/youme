import styled from "styled-components";

export const StyledHeader = styled.header`
  .header-container {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    color: var(--white);
  }
  .menu {
    display: flex;
    gap: 40px;
  }
  .menu-link {
    color: var(--white);
    transition: all 0.35s linear;
    font-size: 1.7rem;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    &:hover {
      color: var(--primary-color);
    }
  }
  .header-action {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .header-search {
    background-color: var(--white);
    border-radius: 30px;
    overflow: hidden;
    height: 40px;
    display: flex;
    align-items: center;
    input {
      background: transparent;
      border: none;
      outline: none;
      padding: 0 20px;
      height: 100%;
      font-size: 1.5rem;
    }
    .search-icon {
      padding-right: 20px;
      font-size: 2rem;
      cursor: pointer;
    }
  }
  .header-auth {
    display: flex;
    gap: 20px;
    button {
      padding: 10px 20px;
      border-radius: 8px;
    }
    button.primary {
      background-color: var(--primary-color);
      color: var(--white);
    }
  }
  .header-open {
    display: none;
    font-size: 3rem;
    z-index: 100;
    background-color: #3d6ef7;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 767.98px) {
    .header-action {
      display: none;
    }
    .header-open {
      display: block;
    }
    .menu {
      position: fixed;
      width: 300px;
      background: #eee;
      height: 100vh;
      top: 0;
      right: 0;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transform: translateX(300px);
      transition: all 0.25s linear;
      &.active {
        transform: translateX(0);
      }
    }
    .menu-link {
      color: #000;
    }
  }
`;
