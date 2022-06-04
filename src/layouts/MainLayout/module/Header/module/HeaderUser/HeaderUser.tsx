import { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppSelector } from "App/store";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import { PUBLIC_IMAGE } from "constants/path";
import ButtonGradient from "components/Button/ButtonGradient";
import { StyledHeaderUser } from "./headerUser.style";

const HeaderUser = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(localStorage.getItem("language") === "en");
  const avatar = currentUser?.avatar ? currentUser.avatar : `${PUBLIC_IMAGE}/header-avatar.webp`;
  const username = currentUser?.username ? currentUser?.username : "Guest";

  const handleLogout = () => {
    signOut(auth);
  };

  function setLanguage(language: string) {
    localStorage.setItem("language", language);
  }

  function switchLanguage() {
    if (localStorage.getItem("language") === "en") {
      setLanguage("vi");
      setIsEnglish(false);
    } else {
      setLanguage("en");
      setIsEnglish(true);
    }
    window.location.reload();
  }

  return (
    <StyledHeaderUser>
      <img src={avatar} alt="avatar" className="header-avatar" />
      <div className="dropdown">
        <div className="dropdown-header">
          <img src={avatar} alt="avatar" className="dropdown-avatar" />
          <div className="dropdown-user">
            <span className="dropdown-username">{username}</span>
            <span>{t("User")}</span>
          </div>
        </div>
        <ul className="dropdown-list">
          <li className="dropdown-item language">
            <span>{t("English")}</span>
            <div className="language-switcher">
              <input type="checkbox" onChange={switchLanguage} checked={!isEnglish} />
              <span className="slider round" />
            </div>
            <span>{t("Vietnamese")}</span>
          </li>
          <li className="dropdown-item">
            {currentUser ? (
              <ButtonGradient className="header-auth secondary" onClick={handleLogout}>
                <IonIcon name="log-out-outline" />
                <span>{t("Logout")}</span>
              </ButtonGradient>
            ) : (
              <Link to="/sign-in">
                <ButtonGradient className="header-auth primary">{t("Sign In")}</ButtonGradient>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </StyledHeaderUser>
  );
};

export default HeaderUser;
