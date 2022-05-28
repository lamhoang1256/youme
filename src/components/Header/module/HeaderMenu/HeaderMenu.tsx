import { useAppSelector } from "App/store";
import { logout } from "firebase-app/firebase-action";
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
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <StyledHeaderMenu className={`${showMenu ? "active" : ""}`}>
      <div className="menu-header">
        <img src={`${process.env.REACT_APP_PUBLIC}/images/header-avatar.webp`} alt="Avatar" />
        <span>Hello, Guest</span>
      </div>
      {menuLinks.map((link) => (
        <li className="menu-item" key={link.id}>
          <Link to={link.path} className="menu-link" onClick={handleToggleMenu}>
            {link.display}
          </Link>
        </li>
      ))}
      <li className="menu-item">
        {currentUser ? (
          <button type="button" className="header-login" onClick={logout}>
            Logout
          </button>
        ) : (
          <button type="button" className="header-login">
            Sign In
          </button>
        )}
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
