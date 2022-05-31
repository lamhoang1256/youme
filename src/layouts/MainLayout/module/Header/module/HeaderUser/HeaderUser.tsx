import IonIcon from "@reacticons/ionicons";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import { StyledHeaderUser } from "./headerUser.style";

interface HeaderUserProps {
  username: string;
  avatar: string;
}

const HeaderUser = ({ username, avatar }: HeaderUserProps) => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <StyledHeaderUser>
      <img src={avatar} alt="avatar" className="header-avatar" />
      <div className="dropdown">
        <div className="dropdown-header">
          <img src={avatar} alt="avatar" className="dropdown-avatar" />
          <div className="dropdown-user">
            <span className="dropdown-username">{username}</span>
            <span>User</span>
          </div>
        </div>
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <button type="button" className="dropdown-link logout" onClick={handleLogout}>
              <IonIcon name="log-out-outline" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </StyledHeaderUser>
  );
};

export default HeaderUser;
