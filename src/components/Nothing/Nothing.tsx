/* eslint-disable react/require-default-props */
import { Link } from "react-router-dom";
import ButtonGradient from "components/Button/ButtonGradient";
import { StyledNothing } from "./nothing.style";

interface NothingProps {
  titleButton?: string;
  heading?: string;
  description?: string;
  redirect?: string;
  image?: string;
}

const Nothing = ({ titleButton, heading, description, redirect, image }: NothingProps) => {
  return (
    <StyledNothing>
      {image && <img src={image} alt="nothing" />}
      {heading && <h3 className="heading">{heading}</h3>}
      {description && <span className="description">{description}</span>}
      {redirect && (
        <Link to={redirect}>
          <ButtonGradient className="add-movie">{titleButton}</ButtonGradient>
        </Link>
      )}
    </StyledNothing>
  );
};

export default Nothing;
