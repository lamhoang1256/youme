import IonIcon from "@reacticons/ionicons";
import { MovieBeingWatched, MovieDetail } from "interfaces/api";
import { StyledWatchContent } from "./watchContent.style";

interface WatchContentProps {
  detail: {
    detailData: MovieDetail;
    currentWatchData: MovieBeingWatched;
  };
}

const WatchContent = ({ detail }: WatchContentProps) => {
  const { detailData, currentWatchData } = detail;
  console.log(detailData, currentWatchData);
  return (
    <StyledWatchContent>
      <h2>
        {detailData.name} - Ep {currentWatchData.seriesNo}
      </h2>
      <ul className="watch-parameter">
        <li>
          <IonIcon name="star-outline" /> {detailData.score}
        </li>
        <li className="watch-areas">
          {detailData.areaList.map((area) => (
            <span key={area.id}>{area.name}</span>
          ))}
        </li>
        <li>
          {detailData.episodeCount && (
            <span>
              EP {detailData.episodeVo.length}/ {detailData.episodeCount}
            </span>
          )}
        </li>
        <li>{detailData.year}</li>
      </ul>
      <div className="watch-categories">
        {detailData.tagList.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      {detailData.updateInfo.updatePeriod !== "" && (
        <div className="watch-upcoming">
          <span className="label-small">Upcoming:</span>
          {`Episode is updated on ${detailData.updateInfo.updatePeriod} every week`}
        </div>
      )}
      <div>
        <span className="label-small">Summary : </span>
        {detailData.introduction}
      </div>
    </StyledWatchContent>
  );
};

export default WatchContent;
