import IonIcon from "@reacticons/ionicons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "hooks/useMediaQuery";
import { StyledHeader } from "./header.style";
import HeaderMenu from "./module/HeaderMenu/HeaderMenu";
import HeaderSearch from "./module/HeaderSearch/HeaderSearch";

const Header = () => {
  const isTablet = useMediaQuery("(max-width:1023.98px)");
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(!isTablet);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleToggleSearch = () => {
    setShowSearchMobile(!showSearchMobile);
  };

  useEffect(() => {
    setShowSearchMobile(!isTablet);
  }, [isTablet]);

  return (
    <StyledHeader>
      <div className="container">
        <div className={`header-container ${showSearchMobile ? "show-search" : ""}`}>
          <Link to="/" className="header-logo">
            LOGO
          </Link>
          <HeaderMenu showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
          {showSearchMobile && <HeaderSearch />}
          <button type="button" className="header-auth primary">
            Sign In
          </button>
          <div className="header-mobile">
            <button className="header-search primary" type="button" onClick={handleToggleSearch}>
              <IonIcon name="search-outline" />
            </button>
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
