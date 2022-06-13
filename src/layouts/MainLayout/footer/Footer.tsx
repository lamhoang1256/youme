import Image from "components/image/Image";
import { categoryLinks, menuLinksFooter } from "constants/routesLinks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding-top: 80px;
  padding-bottom: 30px;
  .footer-content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    gap: 30px 0;
  }
  .footer-logo {
    height: 40px;
  }
  .footer-column {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 1.75rem;
    color: var(--gray-color);
    h3 {
      color: var(--white);
    }
  }
  .footer-routes {
    flex-direction: row;
  }
  .footer-boxed ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
    a {
      color: var(--gray-color);
    }
  }
  .footer-purpose {
    color: var(--gray-color);
  }
  .footer-author {
    color: #20e6b9;
    font-weight: 600;
  }
  .footer-bottom {
    border-top: 1px solid rgba(81, 95, 130, 0.32);
    padding-top: 30px;
    text-align: center;
    a {
      color: var(--blue-color);
      font-size: 1.65rem;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 1023.98px) {
    padding-top: 0;
  }
  @media screen and (max-width: 767.98px) {
    padding-top: 20px;
    .footer-content {
      flex-direction: column;
    }
    .footer-column {
      width: 100%;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <Image to="/" url="/images/header-logo.png" alt="logo" className="footer-logo" />
            <p className="footer-purpose">
              {t("The website is for research, study and entertainment purposes only")}
            </p>
            <span>
              Web designer:{" "}
              <a href="https://github.com/lamhoang1256" className="footer-author">
                Nguyen Hoang Lam
              </a>
            </span>
          </div>
          <div className="footer-column footer-routes">
            <div className="footer-column footer-boxed">
              <h3>{t("Navigation")}</h3>
              <ul>
                {menuLinksFooter.map((link) => (
                  <Link to={link.path} key={link.id}>
                    {t(link.display)}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="footer-column footer-boxed">
              <h3>{t("Categories")}</h3>
              <ul>
                {categoryLinks.map((link) => (
                  <Link to={`/explore?type=${link.type}`} key={link.type}>
                    {t(link.display)}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2022 Youme. All rights reserved | Designed by{" "}
          <a href="https://github.com/lamhoang1256">Nguyen Hoang Lam</a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
