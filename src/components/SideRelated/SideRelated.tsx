import IonIcon from "@reacticons/ionicons";
import { resizeImage } from "constants/resizeImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { StyledSideRelated } from "./sideRelated.style";

interface SideRelatedProps {
  listSuggest: {
    areaList: [
      {
        id: number;
        name: string;
      },
    ];
    areaNameList: string[];
    category: number;
    coverHorizontalUrl: string;
    coverVerticalUrl: string;
    drameTypeVo?: any;
    id: string;
    name: string;
    score: number;
    tagList: [
      {
        id: number;
        name: string;
      },
    ];
    tagNameList: string[];
    upImgUrl: string;
    upName: string;
    year: number;
  }[];
}

const SideRelated = ({ listSuggest }: SideRelatedProps) => {
  return (
    <StyledSideRelated>
      <h3>You may like</h3>
      <div className="movie-list">
        {listSuggest.map((suggest) => {
          const url = `/detail/${suggest?.id}?cate=${suggest?.category}`;
          return (
            <div className="movie-item" key={suggest.id}>
              <div className="movie-thumb">
                <Link to={url}>
                  <LazyLoadImage
                    src={resizeImage(suggest.coverVerticalUrl, "170")}
                    alt="Thumbnail"
                    effect="opacity"
                  />
                </Link>
              </div>
              <div className="movie-content">
                <div className="movie-top">
                  <Link to={url}>
                    <h4 className="movie-name">{suggest.name}</h4>
                  </Link>
                  <div className="movie-categories">
                    {suggest.tagList.slice(0, 2).map((cate) => (
                      <span key={cate.id}>{cate.name}</span>
                    ))}
                  </div>
                  <div className="movie-rate">
                    <IonIcon name="star" /> {suggest.score} /10
                  </div>
                </div>
                <div className="movie-bottom">
                  <div>{suggest.areaList[0].name}</div>
                  <div>{suggest.year}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledSideRelated>
  );
};

export default SideRelated;
