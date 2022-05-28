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
    background-image: linear-gradient(270deg, #c042ff, #8a3cff);
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
  .header-avatar {
    position: relative;
  }
  .header-avatar:hover .dropdown {
    opacity: 1;
    visibility: visible;
  }
  .header-avatar img {
    width: 45px;
    height: 45px;
    border-radius: 100rem;
  }
  .dropdown {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: 20;
    top: 110%;
    right: 0;
    background-color: #fff;
    padding: 10px 0;
    border-radius: 4px;
    min-width: 200px;
    transition: all 0.25s linear;
    &-item {
      padding: 12px 40px 12px 30px;
    }
    &-item:hover {
      background-color: #f8f8f8;
    }
    &-link {
      display: flex !important;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: #000;
      transition: all 0.25s linear;
    }
  }
  .logout {
    padding: 0;
    background-color: transparent;
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
