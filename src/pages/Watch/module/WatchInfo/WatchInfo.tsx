import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import { IMovieDetail } from "interfaces/detail";
import { IMovieBeingWatched } from "interfaces/watch";
import { useTranslation } from "react-i18next";
import { StyledWatchInfo } from "./watchInfo.style";

interface WatchInfoProps {
  detail: {
    detailMovie: IMovieDetail;
    detailCurrentPlay: IMovieBeingWatched;
  };
}

const WatchInfo = ({ detail }: WatchInfoProps) => {
  const { t } = useTranslation();
  const { detailMovie, detailCurrentPlay } = detail;

  return (
    <StyledWatchInfo>
      <h2>
        {detailMovie.name} - {t("Ep")} {detailCurrentPlay.seriesNo}
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
        {detailMovie.episodeCount && (
          <li>
            {t("EP")} {detailMovie.episodeVo.length}/ {detailMovie.episodeCount}
          </li>
        )}
        <li>{detailMovie.year}</li>
      </ul>
      <div className="watch-categories">
        {detailMovie.tagList.map((tag) => (
          <Link to={`/category/${tag.id}`} key={tag.id} className="watch-category">
            {tag.name}
          </Link>
        ))}
      </div>
      {detailMovie.updateInfo?.updatePeriod && (
        <div className="watch-upcoming">
          <span className="label-small">{t("Upcoming")}:</span>
          {t("New episode is updated on")}{" "}
          {` ${detailMovie.updateInfo.updatePeriod.substring(
            detailMovie.updateInfo.updatePeriod.indexOf(",") + 1,
          )} `}
          {t("every week")}
        </div>
      )}
      <div>
        <span className="label-small">{t("Summary")} : </span>
        {detailMovie.introduction}
      </div>
    </StyledWatchInfo>
  );
};

export default WatchInfo;
