import styled from "styled-components";

export const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  .menu-header {
    display: none;
    align-items: center;
    gap: 10px;
    height: 140px;
    width: 100%;
    padding: 0 20px;
    background-image: url("/images/header-bg-user.webp");
    background-repeat: no-repeat;
    background-size: cover;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
  .header-login {
    font-size: 18px;
    padding: 10px 20px;
    background-color: #3d6ef7;
    border-radius: 8px;
    color: #fff;
  }
  .menu-link {
    color: var(--white);
    transition: all 0.35s linear;
    font-size: 1.7rem;
    &:hover {
      color: var(--primary-color);
    }
  }
  @media screen and (max-width: 1023.98px) {
    position: fixed;
    width: 300px;
    background: #eee;
    height: 100vh;
    top: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: all 0.25s linear;
    will-change: transform;
    z-index: 100;
    .menu-header {
      display: flex;
    }
    .header-login {
      width: 100%;
    }
    &.active {
      transform: translateX(0);
    }
    .menu-item {
      width: 100%;
      padding: 0 20px;
    }
    .menu-link {
      color: #000;
    }
  }
`;
