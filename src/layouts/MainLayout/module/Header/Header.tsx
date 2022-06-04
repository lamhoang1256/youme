import { useState } from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import HeaderMenu from "./module/HeaderMenu/HeaderMenu";
import HeaderDropdown from "./module/HeaderDropdown/HeaderDropdown";
import { StyledHeaderButton, StyledHeader, StyledHeaderActions } from "./header.style";

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
            <img
              src={`${process.env.REACT_APP_PUBLIC}/images/logo.png`}
              alt="logo"
              className="logo-img"
            />
          </Link>
          <HeaderMenu showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
          <StyledHeaderActions>
            <Link to="/search">
              <StyledHeaderButton className="header-search">
                <IonIcon name="search-outline" />
              </StyledHeaderButton>
            </Link>
            <StyledHeaderButton onClick={handleToggleMenu}>
              <IonIcon name="reorder-four-outline" />
            </StyledHeaderButton>
            <HeaderDropdown />
          </StyledHeaderActions>
        </div>
      </div>
      {showMenu && <switch className="header-overplay" onClick={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
