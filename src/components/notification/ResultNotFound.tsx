import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ButtonGradient from "components/button/ButtonGradient";
import { TextGradient } from "assets/styles/_mixins";

export const StyledResultNotFound = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  gap: 14px;
  img {
    width: 100px;
    height: 100px;
  }
  .heading {
    font-size: 2.6rem;
    font-weight: 700;
    ${TextGradient.primary}
  }
  .description {
    font-size: 1.8rem;
    color: #c4c1ea;
    font-weight: 500;
  }
  .button {
    padding: 10px 30px;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 767.98px) {
    .heading {
      font-size: 2.1rem;
    }
  }
`;

interface ResultNotFoundProps {
  titleButton: string;
  heading: string;
  description: string;
  to: string;
}

const ResultNotFound = ({ titleButton, heading, description, to }: ResultNotFoundProps) => {
  const { t } = useTranslation();
  return (
    <StyledResultNotFound>
      <h3 className="heading">{t(heading)}</h3>
      <span className="description">{t(description)}</span>
      <ButtonGradient to={to} className="button" kind="secondary">
        {t(titleButton)}
      </ButtonGradient>
    </StyledResultNotFound>
  );
};

export default ResultNotFound;
