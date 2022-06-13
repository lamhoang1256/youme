import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "App/store";
import { menuLinksHeader } from "constants/routesLinks";
import { useHeaderContext } from "./header-context";

const StyledHeaderMenu = styled.ul`
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
    span {
      flex: 1;
    }
  }
  .menu-link {
    position: relative;
    color: var(--white);
    transition: all 0.35s linear;
    font-size: 1.7rem;
    font-weight: 600;
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      transition: width 0.5s ease;
      height: 3px;
      background-color: var(--primary-color);
    }
    &.active::after {
      width: 100%;
    }
    &:hover {
      color: var(--primary-color);
      &::after {
        width: 100%;
      }
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
    z-index: 100;
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

const HeaderMenu = () => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { showMenu, handleToggleMenu } = useHeaderContext();

  return (
    <StyledHeaderMenu className={`${showMenu ? "active" : ""}`}>
      <li className="menu-header">
        <img src="/images/header-avatar.webp" alt="avatar" />
        <span>
          {t("Hello")}, {currentUser ? currentUser.username : t("Guest")}
        </span>
      </li>
      {menuLinksHeader.map((link) => (
        <li className="menu-item" key={link.id}>
          <NavLink to={link.path} className="menu-link" onClick={handleToggleMenu}>
            {t(link.display)}
          </NavLink>
        </li>
      ))}
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
