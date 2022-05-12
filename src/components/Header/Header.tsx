import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="header-container ">
          <Link to="/" className="header-logo">
            LOGO
          </Link>
          <ul className="menu">
            {[0, 1, 2, 3].map((item) => (
              <li className="menu-item" key={item}>
                <a href="#!" className="menu-link">
                  Home
                </a>
              </li>
            ))}
          </ul>
          <div className="header-action">
            <div className="header-search">
              <input type="text" placeholder="Search..." />
              <div className="search-icon">
                <IonIcon name="search-outline" />
              </div>
            </div>
            <div className="header-auth">
              <button type="button">Sign Up</button>
              <button type="button" className="primary">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
