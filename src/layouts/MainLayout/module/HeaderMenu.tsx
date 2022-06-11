import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "App/store";

const menuLinks = [
  { id: 1, display: "Explore", path: "/explore" },
  { id: 2, display: "Favorites", path: "/favorites" },
  { id: 3, display: "History", path: "/history" },
  { id: 4, display: "News", path: "/articles" },
  { id: 5, display: "Community", path: "/community" },
];

interface HeaderMenuProps {
  showMenu: boolean;
  handleToggleMenu: () => void;
}

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
      opacity: 0;
      visibility: hidden;
      position: absolute;
      content: "";
      bottom: -10px;
      left: 0;
      right: 0;
      height: 3px;
      transition: all 0.25s linear;
      border-radius: 10px;
      background-color: var(--primary-color);
    }
    &.active::after {
      opacity: 1;
      visibility: visible;
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

const HeaderMenu = ({ showMenu, handleToggleMenu }: HeaderMenuProps) => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <StyledHeaderMenu className={`${showMenu ? "active" : ""}`}>
      <li className="menu-header">
        <img src="/images/header-avatar.webp" alt="avatar" />
        <span>
          {t("Hello")}, {currentUser ? currentUser.username : t("Guest")}
        </span>
      </li>
      {menuLinks.map((link) => (
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
