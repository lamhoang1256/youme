import IonIcon from "@reacticons/ionicons";
import { MovieBeingWatched, MovieDetail } from "interfaces/api";
import { StyledWatchContent } from "./watchContent.style";

interface WatchContentProps {
  detail: {
    detailMovie: MovieDetail;
    detailCurrentPlay: MovieBeingWatched;
  };
}

const WatchContent = ({ detail }: WatchContentProps) => {
  const { detailMovie, detailCurrentPlay } = detail;

  return (
    <StyledWatchContent>
      <h2>
        {detailMovie.name} - Ep {detailCurrentPlay.seriesNo}
      </h2>
      <ul className="watch-parameter">
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
          <span key={tag.id}>{tag.name}</span>
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
    </StyledWatchContent>
  );
};

export default WatchContent;
