import { MovieBeingWatched, MovieDetail } from "interfaces/api";
import React from "react";
import { Link } from "react-router-dom";
import { StyledDetailContent } from "./detailContent.style";

interface DetailContentProps {
  detail: MovieDetail;
  dataOfEpBeingWatched: MovieBeingWatched;
  id: number;
  cate: number;
}

const DetailContent = ({ detail, dataOfEpBeingWatched, id, cate }: DetailContentProps) => {
  return (
    <StyledDetailContent>
      <h3>
        {detail?.name} - Ep {dataOfEpBeingWatched?.seriesNo}
      </h3>
      <p>{detail?.score}</p>
      <p>{detail?.year}</p>
      <div className="detail-areas">
        {detail?.areaList.map((area) => (
          <span key={area.id}>{area.name}</span>
        ))}
      </div>
      <div className="detail-categories">
        {detail?.tagList.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      <div className="detail-episodes">
        {detail?.episodeVo.map((episode) => {
          const active =
            episode.seriesNo === dataOfEpBeingWatched?.seriesNo ? "is-active" : undefined;
          return (
            <button className={active} type="button" key={episode.id}>
              <Link to={`/watch/${id}?cate=${cate}&ep=${episode.seriesNo}`}>
                {episode.seriesNo}
              </Link>
            </button>
          );
        })}
      </div>
      <p>{detail?.introduction}</p>
    </StyledDetailContent>
  );
};

export default DetailContent;
