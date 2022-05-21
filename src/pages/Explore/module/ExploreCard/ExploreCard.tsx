import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "constants/resizeImage";
import { IExploreCard } from "pages/Explore/Explore";
import { StyledHomeCard } from "pages/Home/module/HomeCard/homeCard.style";

interface ExploreCardProps {
  explore: IExploreCard;
}

const ExploreCard = ({ explore }: ExploreCardProps) => {
  const { id, domainType, name, coverVerticalUrl } = explore;
  const url = `/detail/${id}?cate=${domainType}`;
  return (
    <StyledHomeCard>
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
    </StyledHomeCard>
  );
};

export default ExploreCard;
