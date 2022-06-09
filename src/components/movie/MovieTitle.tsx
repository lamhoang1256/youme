import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextClamp } from "assets/styles/_mixins";

interface MovieTitleProps {
  to: string;
  title: string;
  [x: string]: any;
}

const StyledMovieTitle = styled(Link)`
  font-weight: 500;
  text-align: center;
  padding-top: 10px;
  color: var(--white);
  ${TextClamp.multilines(2)};
  transition: all 0.25s linear;
  &:hover {
    color: var(--primary-color);
  }
`;

const MovieTitle = ({ to, title, ...props }: MovieTitleProps) => {
  return (
    <StyledMovieTitle to={to} {...props}>
      {title}
    </StyledMovieTitle>
  );
};

export default MovieTitle;
