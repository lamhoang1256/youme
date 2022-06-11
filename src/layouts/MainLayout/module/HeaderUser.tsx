import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import { useAppSelector } from "App/store";
import ButtonGradient from "components/button/ButtonGradient";

const StyledHeaderUser = styled.div`
  position: relative;
  .user {
    min-width: 270px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: 20;
    top: 130%;
    right: 0;
    background-color: #4c505c;
    padding: 20px 10px;
    border-radius: 4px;
    transition: all 0.25s linear;
    &-header {
      display: flex;
      align-items: center;
      gap: 8px;
      width: max-content;
    }
    &-avatar {
      width: 45px;
      height: 45px;
      border-radius: 100rem;
    }
    &-info {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 6px;
    }
    &-username {
      font-weight: 700;
    }
    &-list {
      margin-top: 15px;
    }
    &-item {
      padding: 12px 10px;
      border-radius: 6px;
    }
    &-item:hover {
      background-color: #303339;
    }
    &-link {
      display: flex !important;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: var(--white);
      transition: all 0.25s linear;
    }
  }
  &:hover .user {
    opacity: 1;
    visibility: visible;
  }
`;

const HeaderUser = () => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
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
              <ButtonGradient kind="secondary" onClick={handleLogout}>
                <IonIcon name="log-out-outline" />
                <span>{t("Logout")}</span>
              </ButtonGradient>
            ) : (
              <ButtonGradient to="/sign-in" kind="primary">
                {t("Sign In")}
              </ButtonGradient>
            )}
          </li>
        </ul>
      </div>
    </StyledHeaderUser>
  );
};

export default HeaderUser;
