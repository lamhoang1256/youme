import { useState } from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { StyledHeader, StyledHeaderActions, StyledHeaderButton } from "./header.style";
import HeaderMenu from "./module/HeaderMenu/HeaderMenu";
import HeaderLanguage from "./module/HeaderLanguage/HeaderLanguage";
import HeaderUser from "./module/HeaderUser/HeaderUser";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledHeader>
      <div className="header container">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <img src="/images/header-logo.png" alt="logo" className="logo-img" />
          </Link>
          <HeaderMenu showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
          <StyledHeaderActions>
            <HeaderLanguage />
            <Link to="/search">
              <StyledHeaderButton className="header-search">
                <IonIcon name="search-outline" />
              </StyledHeaderButton>
            </Link>
            <StyledHeaderButton onClick={handleToggleMenu}>
              <IonIcon name="reorder-four-outline" />
            </StyledHeaderButton>
            <HeaderUser />
          </StyledHeaderActions>
        </div>
      </div>
      {showMenu && <switch className="header-overplay" onClick={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
