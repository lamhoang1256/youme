import { Link } from "react-router-dom";
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
  return (
    <StyledHeaderMenu className={`${showMenu ? "active" : ""}`}>
      {menuLinks.map((link) => (
        <li className="menu-item" key={link.id}>
          <Link to={link.path} className="menu-link" onClick={handleToggleMenu}>
            {link.display}
          </Link>
        </li>
      ))}
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
