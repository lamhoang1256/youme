import { StyledHomeCard } from "./homeCard.style";
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
  const IDandCate = movie.jumpAddress.split("?id=")[1];
  const id = Number(IDandCate.split("&type=")[0]);
  const category = Number(IDandCate.split("&type=")[1]);
  const url = `/detail/${id}?cate=${category}`;
  const type = Number.isNaN(category) ? "actor" : "movie";
  return (
    <StyledHomeCard>
      <div className="card">
        <HomeCardUI type={type} url={url}>
          <img className="card-thumb" src={movie.imageUrl} alt="Thumbnail card" />
        </HomeCardUI>
        <HomeCardUI type={type} url={url}>
          <p className="card-name">{movie.title}</p>
        </HomeCardUI>
      </div>
    </StyledHomeCard>
  );
};

export default HomeCard;
