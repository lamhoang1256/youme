import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "App/store";
import Button from "components/button/Button";
import ButtonGradient from "components/button/ButtonGradient";
import HeaderUser from "./HeaderUser";
import { useHeaderContext } from "./header-context";

const StyledHeaderAuth = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  .header-signin {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: 767.98px) {
    .header-signin {
      font-size: 1.4rem;
      padding: 8px 8px;
    }
  }
`;

const HeaderAuth = () => {
  const { t } = useTranslation();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { handleToggleMenu } = useHeaderContext();

  return (
    <StyledHeaderAuth>
      <Button onClick={handleToggleMenu} className="header-button">
        <IonIcon name="reorder-four-outline" />
      </Button>
      {currentUser ? (
        <HeaderUser />
      ) : (
        <ButtonGradient to="/sign-in" kind="primary" className="header-signin">
          {t("Sign In")}
        </ButtonGradient>
      )}
    </StyledHeaderAuth>
  );
};

export default HeaderAuth;
