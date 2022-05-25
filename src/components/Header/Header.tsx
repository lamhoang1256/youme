import IonIcon from "@reacticons/ionicons";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./header.style";
import HeaderMenu from "./module/HeaderMenu/HeaderMenu";
import HeaderSearch from "./module/HeaderSearch/HeaderSearch";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:767.98px)");
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(!isMobile);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleToggleSearch = () => {
    setShowSearchMobile(!showSearchMobile);
  };

  return (
    <StyledHeader>
      <div className="container">
        <div className={`header-container ${showSearchMobile ? "show-search" : ""}`}>
          <Link to="/" className="header-logo">
            LOGO
          </Link>
          <HeaderMenu showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
          {showSearchMobile && <HeaderSearch />}
          <button className="header-search primary" type="button" onClick={handleToggleSearch}>
            <IonIcon name="search-outline" />
          </button>
          <div className="header-action">
            <button type="button">Sign Up</button>
            <button type="button" className="primary">
              Sign In
            </button>
          </div>
          <div className="header-mobile">
            <button type="button" onClick={handleToggleMenu} className="header-open">
              <IonIcon name="menu-outline" />
            </button>
          </div>
        </div>
      </div>
      {showMenu && <switch className="header-overplay" onClick={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
