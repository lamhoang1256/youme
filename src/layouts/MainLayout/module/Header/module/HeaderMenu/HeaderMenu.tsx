import { useAppSelector } from "App/store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledHeaderMenu } from "./headerMenu.style";

const menuLinks = [
  { id: 1, display: "Explore", path: "/explore" },
  { id: 2, display: "History", path: "/history" },
  { id: 3, display: "Favorites", path: "/favorites" },
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
      <div className="menu-header">
        <img src={`${process.env.REACT_APP_PUBLIC}/images/header-avatar.webp`} alt="Avatar" />
        <span>
          {t("Hello")}, {currentUser ? currentUser.username : "Guest"}
        </span>
      </div>
      {menuLinks.map((link) => (
        <li className="menu-item" key={link.id}>
          <Link to={link.path} className="menu-link" onClick={handleToggleMenu}>
            {t(link.display)}
          </Link>
        </li>
      ))}
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
