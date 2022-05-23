import { Link } from "react-router-dom";
import { resizeImage } from "constants/resizeImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledMovieCard } from "./movieCard.style";

interface MovieCardProps {
  movie: {
    coverVerticalUrl: string;
    domainType: number;
    id: string;
    name: string;
    sort: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { id, domainType, name, coverVerticalUrl } = movie;
  const url = `/detail/${id}?cate=${domainType}`;
  return (
    <StyledMovieCard>
      <Link to={url}>
        <div className="card-thumb">
          <LazyLoadImage
            src={resizeImage(coverVerticalUrl, "180")}
            alt="Thumbnail Card"
            effect="opacity"
          />
        </div>
      </Link>
      <Link to={url}>
        <p className="card-name">{name}</p>
      </Link>
    </StyledMovieCard>
  );
};

export default MovieCard;
