import IonIcon from "@reacticons/ionicons";
import { MovieBeingWatched, MovieDetail } from "interfaces/api";
import { Link } from "react-router-dom";
import { StyledWatchInfo } from "./watchInfo.style";

interface WatchInfoProps {
  detail: {
    detailMovie: MovieDetail;
    detailCurrentPlay: MovieBeingWatched;
  };
}

const WatchInfo = ({ detail }: WatchInfoProps) => {
  const { detailMovie, detailCurrentPlay } = detail;

  return (
    <StyledWatchInfo>
      <h2>
        {detailMovie.name} - Ep {detailCurrentPlay.seriesNo}
      </h2>
      <ul className="watch-statistics">
        <li>
          <IonIcon name="star-outline" /> {detailMovie.score}
        </li>
        <li className="watch-areas">
          {detailMovie.areaList.map((area) => (
            <span key={area.id}>{area.name}</span>
          ))}
        </li>
        <li>
          {detailMovie.episodeCount && (
            <span>
              EP {detailMovie.episodeVo.length}/ {detailMovie.episodeCount}
            </span>
          )}
        </li>
        <li>{detailMovie.year}</li>
      </ul>
      <div className="watch-categories">
        {detailMovie.tagList.map((tag) => (
          <Link to={`/category/${tag.id}`} key={tag.id} className="watch-category">
            {tag.name}
          </Link>
        ))}
      </div>
      {detailMovie.updateInfo?.updatePeriod !== "" && (
        <div className="watch-upcoming">
          <span className="label-small">Upcoming:</span>
          {`Episode is updated on ${detailMovie.updateInfo?.updatePeriod} every week`}
        </div>
      )}
      <div>
        <span className="label-small">Summary : </span>
        {detailMovie.introduction}
      </div>
    </StyledWatchInfo>
  );
};

export default WatchInfo;
