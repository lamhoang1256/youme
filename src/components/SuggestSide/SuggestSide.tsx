import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import { StyledSuggestSide } from "./suggestSide.style";

interface SuggestSideProps {
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
  countMovieSuggest?: number;
}

const defaultProps = {
  countMovieSuggest: 6,
};

const SuggestSide = ({ listSuggest, countMovieSuggest }: SuggestSideProps) => {
  return (
    <StyledSuggestSide>
      <h3 className="suggest-label">You may like</h3>
      <div className="movie-list">
        {listSuggest.slice(0, countMovieSuggest).map((suggest) => (
          <div className="movie-item" key={suggest.id}>
            <div className="movie-thumb">
              <Link to={`/detail/${suggest?.id}?cate=${suggest?.category}`}>
                <img src={suggest.coverVerticalUrl} alt="Thumbnail" />
              </Link>
            </div>
            <div className="movie-content">
              <div className="movie-top">
                <Link to={`/detail/${suggest?.id}?cate=${suggest?.category}`}>
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
        ))}
      </div>
    </StyledSuggestSide>
  );
};

SuggestSide.defaultProps = defaultProps;

export default SuggestSide;
