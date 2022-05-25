import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./header.style";

const menuLinks = [
  { id: 1, display: "Explore", path: "/explore" },
  { id: 2, display: "History", path: "/history" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledHeader>
      <div className="container">
        <div className="header-container ">
          <Link to="/" className="header-logo">
            LOGO
          </Link>
          <ul className={`menu ${showMenu ? "active" : ""}`}>
            {menuLinks.map((link) => (
              <li className="menu-item">
                <Link to={link.path} className="menu-link" onClick={handleToggleMenu}>
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header-action">
            <div className="header-search">
              <input type="text" placeholder="Search..." />
              <div className="search-icon">
                <IonIcon name="menu-outline" />
              </div>
            </div>
            <div className="header-auth">
              <button type="button">Sign Up</button>
              <button type="button" className="primary">
                Sign In
              </button>
            </div>
          </div>
          <button type="button" onClick={handleToggleMenu} className="header-open">
            <IonIcon name="menu-outline" />
          </button>
        </div>
      </div>
      {showMenu && <switch className="header-overplay" onClick={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
