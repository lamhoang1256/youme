import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ButtonGradient from "components/button/ButtonGradient";

export const StyledNothing = styled.div`
  padding-top: 30px;
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
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(270deg, #c042ff, #8a3cff);
    font-weight: 800;
  }
  .description {
    font-size: 1.8rem;
  }
  .button {
    padding: 12px 40px;
    background-image: linear-gradient(to right top, #fc6c8f, #ffb86c);
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
  image: string;
}

const Nothing = ({ titleButton, heading, description, redirect, image }: NothingProps) => {
  const { t } = useTranslation();
  return (
    <StyledNothing>
      <img src={image} alt="nothing" />
      <h3 className="heading">{t(heading)}</h3>
      <span className="description">{t(description)}</span>
      <Link to={redirect}>
        <ButtonGradient className="button">{t(titleButton)}</ButtonGradient>
      </Link>
    </StyledNothing>
  );
};

export default Nothing;
