import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ButtonGradient from "components/button/ButtonGradient";
import { TextGradient } from "assets/styles/_mixins";

export const StyledNothing = styled.div`
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
    background-image: var(--gradient-secondary);
  }
  @media screen and (max-width: 767.98px) {
    .heading {
      font-size: 2.1rem;
    }
  }
`;

interface NothingProps {
  titleButton: string;
  heading: string;
  description: string;
  redirect: string;
}

const Nothing = ({ titleButton, heading, description, redirect }: NothingProps) => {
  const { t } = useTranslation();
  return (
    <StyledNothing>
      <h3 className="heading">{t(heading)}</h3>
      <span className="description">{t(description)}</span>
      <Link to={redirect}>
        <ButtonGradient className="button">{t(titleButton)}</ButtonGradient>
      </Link>
    </StyledNothing>
  );
};

export default Nothing;
