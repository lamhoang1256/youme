import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "hooks/useMediaQuery";
// import { useAppSelector } from "App/store";
import { StyledHeader, StyledHeaderActions, StyledHeaderButton } from "./header.style";
import HeaderMenu from "./module/HeaderMenu/HeaderMenu";
import HeaderSearchBar from "./module/HeaderSearchBar/HeaderSearchBar";
import HeaderUser from "./module/HeaderUser/HeaderUser";
// import HeaderUser from "./module/HeaderUser/HeaderUser";

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
      <div className="container header">
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
            <div className="header-mobile">
              <StyledHeaderButton onClick={handleToggleSearch}>
                <IonIcon name="search-outline" />
              </StyledHeaderButton>
              <StyledHeaderButton onClick={handleToggleMenu}>
                <IonIcon name="reorder-four-outline" />
              </StyledHeaderButton>
            </div>
            <HeaderUser />
          </StyledHeaderActions>
        </div>
      </div>
      {showMenu && <switch className="header-overplay" onClick={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
