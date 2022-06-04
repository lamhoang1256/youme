import { StyledMovieCard } from "components/MovieCard/movieCard.style";
import { PUBLIC_IMAGE } from "constants/path";
import { resizeImage } from "constants/resizeImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HomeCardUI from "./HomeCardUI";

interface HomeCardProps {
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

const HomeCard = ({ movie }: HomeCardProps) => {
  const IDandCate = movie.jumpAddress?.split("?id=")[1];
  const id = Number(IDandCate?.split("&type=")[0]);
  const category = Number(IDandCate?.split("&type=")[1]);
  const url = `/detail/${id}?cate=${category}`;
  const type = Number.isNaN(category) ? "actor" : "movie";
  return (
    <StyledMovieCard>
      <HomeCardUI type={type} url={url}>
        <div className="card-poster">
          <LazyLoadImage
            src={resizeImage(movie.imageUrl, "180")}
            alt="Poster Card"
            effect="opacity"
            className="poster"
          />
          <img src={`${PUBLIC_IMAGE}/play-movie.png`} alt="play" className="card-play" />
        </div>
      </HomeCardUI>
      <HomeCardUI type={type} url={url}>
        <p className="card-name">{movie.title}</p>
      </HomeCardUI>
    </StyledMovieCard>
  );
};

export default HomeCard;
