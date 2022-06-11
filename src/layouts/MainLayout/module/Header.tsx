import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import HeaderMenu from "./HeaderMenu";
import HeaderLanguage from "./HeaderLanguage";
import HeaderUser from "./HeaderUser";

const StyledHeader = styled.header`
  --header-height: 100px;
  .header-content {
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    height: 40px;
  }
  @media screen and (max-width: 1023.98px) {
    .header-overplay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 50;
    }
    .header-logo {
      height: 35px;
    }
  }
  @media screen and (max-width: 767.98px) {
    .header-logo {
      height: 30px;
    }
  }
`;
const StyledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .header-auth {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .header-search {
    display: block;
  }
  @media screen and (max-width: 1023.98px) {
    gap: 20px;
    align-items: flex-end;
  }
  @media screen and (max-width: 767.98px) {
    gap: 14px;
  }
`;
const StyledHeaderButton = styled.button`
  display: none;
  font-size: 2.6rem;
  color: #fff;
  background-color: transparent;
  @media screen and (max-width: 1023.98px) {
    display: block;
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledHeader>
      <div className="header-content container">
        <Link to="/">
          <img src="/images/header-logo.png" alt="logo" className="header-logo" />
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
      {showMenu && (
        <div className="header-overplay" onClick={handleToggleMenu} aria-hidden="true" />
      )}
    </StyledHeader>
  );
};

export default Header;
