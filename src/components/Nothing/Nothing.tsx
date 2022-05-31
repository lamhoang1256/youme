/* eslint-disable react/require-default-props */
import { Link } from "react-router-dom";
import ButtonGradient from "components/Button/ButtonGradient";
import { useTranslation } from "react-i18next";
import { StyledNothing } from "./nothing.style";

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
        <ButtonGradient className="add-movie">{t(titleButton)}</ButtonGradient>
      </Link>
    </StyledNothing>
  );
};

export default Nothing;
