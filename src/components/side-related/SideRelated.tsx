import IonIcon from "@reacticons/ionicons";
import { resizeImage } from "constants/resizeImage";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideRelated = styled.div`
  position: sticky;
  top: 20px;
  left: 0;
  right: 0;
  .movie-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    max-height: 90vh;
    overflow: auto;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-right: 10px;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(-45deg, #6a5af9, #d66efd);
      border-radius: 50px;
    }
  }
  .movie-item {
    display: flex;
    gap: 10px;
  }
  .movie-thumb {
    width: 30%;
    background-color: var(--bg-skeleton);
    border-radius: 6px;
    overflow: hidden;
    aspect-ratio: auto 170/238;
  }
  .movie-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
  .movie-name {
    color: var(--white);
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
  .movie-categories {
    display: flex;
    gap: 10px;
    margin-top: 6px;
    span {
      font-size: 1.5rem;
      color: #818185;
    }
  }
  .movie-bottom {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.4rem;
  }
  .movie-rate {
    margin-top: 10px;
    color: #edb709;
  }
  @media screen and (max-width: 1023.98px) {
    .movie-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 767.98px) {
    .movie-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 540.98px) {
    .movie-list {
      grid-template-columns: repeat(1, 1fr);
    }
    .movie-name {
      font-size: 2rem;
    }
    .movie-categories span {
      font-size: 1.7rem;
    }
  }
`;

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
  const { t } = useTranslation();
  return (
    <StyledSideRelated>
      <h3>{t("You may like")}</h3>
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
