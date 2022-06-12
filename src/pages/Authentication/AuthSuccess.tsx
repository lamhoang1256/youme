import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ButtonGradient from "components/button/ButtonGradient";

const StyledAuthSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  .image {
    margin: 0 auto;
    height: 120px;
  }
`;

const AuthSuccess = () => {
  const { t } = useTranslation();
  return (
    <StyledAuthSuccess>
      <img src="images/success-check.png" alt="success" className="image" />
      <h2>{t("You are logged in")}</h2>
      <ButtonGradient to="/" kind="secondary">
        {t("Return Home")}
      </ButtonGradient>
    </StyledAuthSuccess>
  );
};

export default AuthSuccess;
