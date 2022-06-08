import ButtonGradient from "components/buttonTest/ButtonGradient";
import { PUBLIC_IMAGE } from "constants/path";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAuthSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  .success-image {
    margin: 0 auto;
    width: 70px;
    height: 70px;
  }
`;

const AuthSuccess = () => {
  const { t } = useTranslation();
  return (
    <StyledAuthSuccess>
      <img src={`${PUBLIC_IMAGE}/success-check.png`} alt="success" className="success-image" />
      <h2 className="success--heading">{t("You are logged in")}</h2>
      <Link to="/">
        <ButtonGradient className="secondary">{t("Return Home")}</ButtonGradient>
      </Link>
    </StyledAuthSuccess>
  );
};

export default AuthSuccess;
