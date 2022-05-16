import { MovieBeingWatched, MovieDetail } from "interfaces/api";
import { Link } from "react-router-dom";
import { StyledDetailContent } from "./detailContent.style";

interface DetailContentProps {
  detail: {
    detailMovie: MovieDetail;
    currentEpisode: MovieBeingWatched;
  };
}

const DetailContent = ({ detail }: DetailContentProps) => {
  const { detailMovie, currentEpisode } = detail;
  return (
    <StyledDetailContent>
      <h2>
        {detailMovie.name} - Ep {currentEpisode.seriesNo}
      </h2>
      <p>Score: {detailMovie.score}</p>
      <p>Year: {detailMovie.year}</p>
      <div className="detail-areas">
        {detailMovie.areaList.map((area) => (
          <span key={area.id}>{area.name}</span>
        ))}
      </div>
      <div className="detail-categories">
        {detailMovie.tagList.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      <div className="detail-episodes">
        {detailMovie.episodeVo.map((episode) => {
          const active = episode.seriesNo === currentEpisode.seriesNo ? "is-active" : undefined;
          return (
            <Link
              to={`/watch/${detailMovie.id}?cate=${detailMovie.category}&ep=${episode.id}`}
              key={episode.id}
            >
              <button className={active} type="button">
                {episode.seriesNo}
              </button>
            </Link>
          );
        })}
      </div>
      <p>{detailMovie.introduction}</p>
    </StyledDetailContent>
  );
};

export default DetailContent;
