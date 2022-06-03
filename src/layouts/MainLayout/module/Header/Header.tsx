import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { useMediaQuery } from "hooks/useMediaQuery";
import HeaderSearchBar from "./module/HeaderSearchBar/HeaderSearchBar";
import HeaderMenu from "./module/HeaderMenu/HeaderMenu";
import HeaderUser from "./module/HeaderUser/HeaderUser";
import { HeaderMenuMobile, StyledHeader, StyledHeaderActions } from "./header.style";

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
      <div className="header container">
        <div className={`header-container ${showSearchMobile ? "show-search" : ""}`}>
          <Link to="/" className="header-logo">
            <img
              src={`${process.env.REACT_APP_PUBLIC}/images/logo.png`}
              alt="logo"
              className="logo-img"
            />
          </Link>
          {showSearchMobile && <HeaderSearchBar />}
          <StyledHeaderActions>
            <HeaderMenu showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
            <HeaderMenuMobile>
              <button type="button" onClick={handleToggleSearch}>
                <IonIcon name="search-outline" />
              </button>
              <button type="button" onClick={handleToggleMenu}>
                <IonIcon name="reorder-four-outline" />
              </button>
            </HeaderMenuMobile>
            <HeaderUser />
          </StyledHeaderActions>
        </div>
      </div>
      {showMenu && <switch className="header-overplay" onClick={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
