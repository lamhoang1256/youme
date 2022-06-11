import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import HeaderMenu from "./HeaderMenu";
import HeaderLanguage from "./HeaderLanguage";
import HeaderUser from "./HeaderUser";

const StyledHeader = styled.header`
  --header-height: 100px;
  .header {
    &-container {
      position: relative;
      height: var(--header-height);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-img {
      height: 40px;
    }
    @media screen and (max-width: 1023.98px) {
      &-container.show-search {
        margin-bottom: calc(var(--header-height) / 100 * 70);
      }
      &-overplay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 50;
      }
    }
  }
`;
const StyledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .header {
    &-auth {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &-search {
      display: block;
    }
  }
  @media screen and (max-width: 1023.98px) {
    gap: 20px;
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
