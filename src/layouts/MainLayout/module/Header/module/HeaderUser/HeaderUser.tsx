import IonIcon from "@reacticons/ionicons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import { useAppSelector } from "App/store";
import ButtonGradient from "components/button/ButtonGradient";
import { StyledHeaderUser } from "./headerUser.style";

const HeaderUser = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const avatar = currentUser?.avatar ? currentUser.avatar : `/images/header-avatar.webp`;
  const username = currentUser?.username ? currentUser?.username : "Guest";

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <StyledHeaderUser>
      <img src={avatar} alt="avatar" className="user-avatar" />
      <div className="user">
        <div className="user-header">
          <img src={avatar} alt="avatar" className="user-avatar" />
          <div className="user-info">
            <span className="user-username">{username}</span>
            <span>{t("User")}</span>
          </div>
        </div>
        <ul className="user-list">
          <li className="user-item">
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
