import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";

const StyledHeader = styled.header`
  .header-container {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    color: var(--white);
  }
  .menu {
    display: flex;
    gap: 40px;
  }
  .menu-link {
    color: var(--white);
    transition: all 0.35s linear;
    font-size: 1.7rem;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    &:hover {
      color: var(--primary-color);
    }
  }
  .header-action {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .header-search {
    background-color: var(--white);
    border-radius: 30px;
    overflow: hidden;
    height: 40px;
    display: flex;
    align-items: center;
    input {
      background: transparent;
      border: none;
      outline: none;
      padding: 0 20px;
      height: 100%;
      font-size: 1.5rem;
    }
    .search-icon {
      padding-right: 20px;
      font-size: 2rem;
      cursor: pointer;
    }
  }
  .header-auth {
    display: flex;
    gap: 20px;
    button {
      padding: 10px 20px;
      border-radius: 8px;
    }
    button.primary {
      background-color: var(--primary-color);
      color: var(--white);
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="header-container ">
          <div className="header-logo">LOGO</div>
          <ul className="menu">
            {Array(4)
              .fill(0)
              .map((item) => (
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
