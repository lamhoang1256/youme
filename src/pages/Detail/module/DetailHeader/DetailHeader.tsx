import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "constants/resizeImage";
import { IMovieDetail } from "interfaces/detail";
import IonIcon from "@reacticons/ionicons";
import { StyledDetailHeader } from "./detailHeader.style";

interface DetailHeaderProps {
  detail: IMovieDetail;
}

const DetailHeader = ({ detail }: DetailHeaderProps) => {
  const url = `/watch/${detail?.id}?cate=${detail?.category}`;

  return (
    <StyledDetailHeader>
      <div className="detail-thumb">
        <LazyLoadImage
          src={resizeImage(detail?.coverVerticalUrl, "220px", "310px")}
          alt="Thumbnail"
          effect="opacity"
        />
      </div>
      <div className="detail-main">
        <div className="detail-header">
          <h2 className="detail-heading">{detail?.name}</h2>
          <div className="detail-score">
            <IonIcon name="star-outline" />
            {detail?.score}
          </div>
        </div>
        <div className="detail-introduction">{detail?.introduction}</div>
        <div className="detail-categoríes">
          <h4>Categories: </h4>
          {detail?.tagList.map((tag) => (
            <Link to={`/category/${tag.id}`} key={tag.id} className="detail-category">
              {tag.name}
            </Link>
          ))}
        </div>
        <div className="detail-action">
          <Link to={url}>
            <button type="button" className="detail-watch">
              Watch Now
            </button>
          </Link>
          <button type="button" className="detail-button detail-favorite">
            <IonIcon name="heart" />
          </button>
          <button type="button" className="detail-button detail-share">
            <IonIcon name="share-social-outline" />
          </button>
        </div>
      </div>
    </StyledDetailHeader>
  );
};

export default DetailHeader;
