import IonIcon from "@reacticons/ionicons";
import Button from "components/button/Button";
import Image from "components/image/Image";
import { useState } from "react";
import styled from "styled-components";
import HeaderAuth from "./HeaderAuth";
import { HeaderProvider } from "./header-context";
import HeaderLanguage from "./HeaderLanguage";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  .header-content {
    height: var(--height-header);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    height: 40px;
  }
  .header-action {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .header-button {
    display: none;
    padding: 0px;
    font-size: 2.45rem;
    align-items: flex-end;
    color: var(--white);
    background-color: transparent !important;
  }
  .header-search {
    display: block;
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
    .header-action {
      gap: 20px;
    }
    .header-button {
      display: flex;
    }
  }
  @media screen and (max-width: 767.98px) {
    .header-logo {
      height: 30px;
    }
    .header-action {
      gap: 14px;
    }
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledHeader>
      <HeaderProvider value={{ handleToggleMenu, showMenu }}>
        <div className="header-content container">
          <Image to="/" url="/images/header-logo.png" alt="logo" className="header-logo" />
          <HeaderMenu />
          <div className="header-action">
            <HeaderLanguage />
            <Button to="/search" className="header-button header-search">
              <IonIcon name="search-outline" />
            </Button>
            <HeaderAuth />
          </div>
        </div>
        {showMenu && (
          <div className="header-overplay" onClick={handleToggleMenu} aria-hidden="true" />
        )}
      </HeaderProvider>
    </StyledHeader>
  );
};

export default Header;
