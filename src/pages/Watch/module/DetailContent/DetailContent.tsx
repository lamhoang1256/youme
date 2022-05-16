import { MovieBeingWatched, MovieDetail } from "interfaces/api";
import { Link } from "react-router-dom";
import { StyledDetailContent } from "./detailContent.style";

interface DetailContentProps {
  detail: {
    detailMovie: MovieDetail;
    // detailWatch: MovieMedia;
    currentEpisode: MovieBeingWatched;
  };
}

const DetailContent = ({ detail }: DetailContentProps) => {
  const { detailMovie, currentEpisode } = detail;
  return (
    <StyledDetailContent>
      <h3>
        {detailMovie.name} - Ep {currentEpisode.seriesNo}
      </h3>
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
            <button className={active} type="button" key={episode.id}>
              <Link to={`/watch/${detailMovie.id}?cate=${detailMovie.category}&ep=${episode.id}`}>
                {episode.seriesNo}
              </Link>
            </button>
          );
        })}
      </div>
      <p>{detailMovie.introduction}</p>
    </StyledDetailContent>
  );
};

export default DetailContent;
