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
  .menu-link {
    color: var(--white);
    transition: all 0.35s linear;
    font-size: 1.7rem;
    font-weight: 600;
    &:hover {
      color: var(--primary-color);
    }
  }

  @media screen and (max-width: 1023.98px) {
    position: fixed;
    width: 300px;
    background-color: var(--dark-color);
    height: 100vh;
    top: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: all 0.25s linear;
    will-change: transform;
    z-index: var(--zIndex-header-menu);
    .menu-header {
      display: flex;
    }
    &.active {
      transform: translateX(0);
    }
    .menu-item {
      width: 100%;
      padding: 0 20px;
    }
    .menu-link {
      color: var(--white);
    }
  }
`;
