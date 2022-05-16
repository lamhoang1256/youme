import { MovieBeingWatched, MovieDetail } from "interfaces/api";
import { Link } from "react-router-dom";
import { StyledDetailContent } from "./detailContent.style";

interface DetailContentProps {
  detail: {
    dataDetailMovie: MovieDetail;
    dataCurrentEpisode: MovieBeingWatched;
  };
}

const DetailContent = ({ detail }: DetailContentProps) => {
  const { dataDetailMovie, dataCurrentEpisode } = detail;
  return (
    <StyledDetailContent>
      <h2>
        {dataDetailMovie.name} - Ep {dataCurrentEpisode.seriesNo}
      </h2>
      <p>Score: {dataDetailMovie.score}</p>
      <p>Year: {dataDetailMovie.year}</p>
      <div className="detail-areas">
        {dataDetailMovie.areaList.map((area) => (
          <span key={area.id}>{area.name}</span>
        ))}
      </div>
      <div className="detail-categories">
        {dataDetailMovie.tagList.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      <div className="detail-episodes">
        {dataDetailMovie.episodeVo.map((episode) => {
          const active = episode.seriesNo === dataCurrentEpisode.seriesNo ? "is-active" : undefined;
          return (
            <Link
              to={`/watch/${dataDetailMovie.id}?cate=${dataDetailMovie.category}&ep=${episode.id}`}
              key={episode.id}
            >
              <button className={active} type="button">
                {episode.seriesNo}
              </button>
            </Link>
          );
        })}
      </div>
      <p>{dataDetailMovie.introduction}</p>
    </StyledDetailContent>
  );
};

export default DetailContent;
