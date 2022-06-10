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
    font-size: 2.8rem;
    font-weight: 800;
    ${TextGradient.primary}
  }
  .description {
    font-size: 1.8rem;
    color: #f6eafb;
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
}

const Nothing = ({ titleButton, heading, description, redirect }: NothingProps) => {
  const { t } = useTranslation();
  return (
    <StyledNothing>
      {/* <img src={image} alt="nothing" /> */}
      <h3 className="heading">{t(heading)}</h3>
      <span className="description">{t(description)}</span>
      <Link to={redirect}>
        <ButtonGradient className="button">{t(titleButton)}</ButtonGradient>
      </Link>
    </StyledNothing>
  );
};

export default Nothing;
