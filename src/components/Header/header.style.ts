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
    padding: 8px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 767.98px) {
    .header-action {
      display: none;
    }
    .header-overplay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.8);
    }
    .header-open {
      display: flex;
    }
    .menu {
      position: fixed;
      width: 300px;
      background: #eee;
      height: 100vh;
      top: 0;
      right: 0;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      transform: translateX(100%);
      transition: all 0.25s linear;
      will-change: transform;
      z-index: 100;
      &.active {
        transform: translateX(0);
      }
    }
    .menu-link {
      color: #000;
    }
  }
`;
