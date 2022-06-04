import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "App/store";
import { PUBLIC_IMAGE } from "constants/path";
import { StyledHeaderMenu } from "./headerMenu.style";

const menuLinks = [
  { id: 1, display: "Explore", path: "/explore" },
  { id: 2, display: "Favorites", path: "/favorites" },
  { id: 3, display: "History", path: "/history" },
];

interface HeaderMenuProps {
  showMenu: boolean;
  handleToggleMenu: () => void;
}

const HeaderMenu = ({ showMenu, handleToggleMenu }: HeaderMenuProps) => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <StyledHeaderMenu className={`${showMenu ? "active" : ""}`}>
      <li className="menu-header">
        <img src={`${PUBLIC_IMAGE}/header-avatar.webp`} alt="avatar" />
        <span>
          {t("Hello")}, {currentUser ? currentUser.username : "Guest"}
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
