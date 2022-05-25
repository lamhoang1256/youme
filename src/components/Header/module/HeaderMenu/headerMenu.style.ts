import styled from "styled-components";

export const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 40px;
  .menu-link {
    color: var(--white);
    transition: all 0.35s linear;
    font-size: 1.7rem;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
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
    padding-top: 100px;
    transform: translateX(100%);
    transition: all 0.25s linear;
    will-change: transform;
    z-index: 100;
    &.active {
      transform: translateX(0);
    }
    .menu-link {
      color: #000;
    }
  }
`;
