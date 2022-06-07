import { Link } from "react-router-dom";
import Image from "components/image/Image";
import { StyledMovieCard } from "components/MovieCard/movieCard.style";
import { PUBLIC_IMAGE } from "constants/path";
import { IPopular } from "interfaces/home";

interface HomeCardProps {
  movie: IPopular;
}

const HomeCard = ({ movie }: HomeCardProps) => {
  const idAndCate = movie.jumpAddress?.split("?id=")[1];
  const id = Number(idAndCate?.split("&type=")[0]);
  const category = Number(idAndCate?.split("&type=")[1]);
  const url = `/detail/${id}?cate=${category}`;
  if (Number.isNaN(category)) return null;

  return (
    <StyledMovieCard>
      <Link to={url}>
        <div className="card-media">
          <Image url={movie.imageUrl} width="180" alt="poster" className="card-poster" />
          <img src={`${PUBLIC_IMAGE}/play-movie.png`} alt="play" className="card-play" />
        </div>
        <p className="card-title">{movie.title}</p>
      </Link>
    </StyledMovieCard>
  );
};

export default HomeCard;
