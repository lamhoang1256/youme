import styled from "styled-components";

export const StyledHeaderUser = styled.div`
  z-index: 100;
  .header-avatar {
    width: 45px;
    height: 45px;
    border-radius: 100rem;
    overflow: hidden;
  }

  .navbar {
    height: var(--nav-size);
    background-color: var(--bg);
    padding: 0 1rem;
    border-bottom: var(--border);
  }

  /* <ul> */
  .navbar-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  /* <li> */
  .nav-item {
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon Button */
  .icon-button {
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
  }

  .icon-button:hover {
    filter: brightness(1.2);
  }

  .icon-button svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }

  /* Dropdown Menu */

  .dropdown {
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translateX(-45%);
    background-color: var(--bg);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
    transition: height var(--speed) ease;
  }

  .menu {
    width: 100%;
  }

  .menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
  }

  .menu-item .icon-button {
    margin-right: 0.5rem;
  }

  .menu-item .icon-button:hover {
    filter: none;
  }

  .menu-item:hover {
    background-color: #525357;
  }

  .icon-right {
    margin-left: auto;
  }

  /* CSSTransition classes  */
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
`;
