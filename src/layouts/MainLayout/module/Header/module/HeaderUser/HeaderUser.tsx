import IonIcon from "@reacticons/ionicons";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledHeaderUser } from "./headerUser.style";

interface HeaderUserProps {
  username: string;
  avatar: string;
}

const HeaderUser = ({ username, avatar }: HeaderUserProps) => {
  const { t } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(localStorage.getItem("language") === "en");
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
            <span>Vietnamese</span>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="language-switcher">
              <input type="checkbox" onChange={switchLanguage} checked={isEnglish} />
              <span className="slider round" />
            </label>
            <span>English</span>
          </li>
          <li className="dropdown-item">
            <button type="button" className="dropdown-link logout" onClick={handleLogout}>
              <IonIcon name="log-out-outline" />
              <span>{t("Logout")}</span>
            </button>
          </li>
        </ul>
      </div>
    </StyledHeaderUser>
  );
};

export default HeaderUser;
