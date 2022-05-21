import { resizeImage } from "constants/resizeImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledMovieCard } from "./movieCard.style";
import MovieCardUI from "./MovieCardUI";

interface MovieCardProps {
  movie: {
    category: number;
    contentType: string;
    id: number;
    imageUrl: string;
    jumpAddress: string;
    jumpType: string;
    needLogin: boolean;
    resourceNum: number;
    resourceStatus: number;
    showMark: boolean;
    title: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const IDandCate = movie.jumpAddress.split("?id=")[1];
  const id = Number(IDandCate.split("&type=")[0]);
  const category = Number(IDandCate.split("&type=")[1]);
  const url = `/detail/${id}?cate=${category}`;
  const type = Number.isNaN(category) ? "actor" : "movie";
  return (
    <StyledMovieCard>
      <MovieCardUI type={type} url={url}>
        <div className="card-thumb">
          <LazyLoadImage
            src={resizeImage(movie.imageUrl, "180")}
            alt="Thumbnail Card"
            effect="opacity"
          />
        </div>
      </MovieCardUI>
      <MovieCardUI type={type} url={url}>
        <p className="card-name">{movie.title}</p>
      </MovieCardUI>
    </StyledMovieCard>
  );
};

export default MovieCard;
