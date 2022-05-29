import { Link } from "react-router-dom";
import ButtonGradient from "components/Button/ButtonGradient";
import { StyledNothing } from "./nothing.style";

interface NothingProps {
  titleButton: string;
  heading: string;
  description: string;
  redirect: string;
  image: string;
}

const Nothing = ({ titleButton, heading, description, redirect, image }: NothingProps) => {
  return (
    <StyledNothing>
      <img src={image} alt="nothing" />
      <h3 className="heading">{heading}</h3>
      <span className="description">{description}</span>
      <Link to={redirect}>
        <ButtonGradient className="add-movie">{titleButton}</ButtonGradient>
      </Link>
    </StyledNothing>
  );
};

export default Nothing;
