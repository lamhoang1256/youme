import { Link } from "react-router-dom";
import styled from "styled-components";
import { resizeImage } from "constants/resizeImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PUBLIC_IMAGE } from "constants/path";
import { IMovieCard } from "types/components";
import MovieTitle from "./MovieTitle";

interface MovieCardProps {
  movie: IMovieCard;
}

const StyledMovieCard = styled.div`
  .card-media {
    position: relative;
    padding-top: 140%;
    background-color: var(--bg-load-image);
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.25s linear;
  }
  .card-poster {
    height: 100%;
  }
  .lazy-load-image-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }
  .card-play {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    transition: all 0.25s linear;
  }
  &:hover {
    .card-poster {
      filter: brightness(0.4);
    }
    .card-play {
      opacity: 1;
      visibility: visible;
    }
    .card-title {
      color: var(--primary-color);
    }
  }
`;

const MovieCard = ({ movie }: MovieCardProps) => {
  const { id, domainType, name, coverVerticalUrl } = movie;
  const url = `/detail/${id}?cate=${domainType}`;
  return (
    <StyledMovieCard>
      <Link to={url}>
        <div className="card-media">
          <LazyLoadImage
            src={resizeImage(coverVerticalUrl, "180")}
            alt="Thumbnail Card"
            effect="opacity"
            className="card-poster"
          />
          <img src={`${PUBLIC_IMAGE}/play-movie.png`} alt="play" className="card-play" />
        </div>
      </Link>
      <MovieTitle to={url} title={name} className="card-title" />
    </StyledMovieCard>
  );
};

export default MovieCard;
