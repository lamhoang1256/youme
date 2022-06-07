import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import { IDetailMovie } from "interfaces/detail";
import { IDetailCurrentPlay } from "interfaces/watch";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { StyledWatchInfo } from "./watchInfo.style";

interface WatchInfoProps {
  detailMovie: IDetailMovie;
  detailCurrentPlay: IDetailCurrentPlay;
}

const WatchInfo = ({ detailMovie, detailCurrentPlay }: WatchInfoProps) => {
  const { t } = useTranslation();
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const { seriesNo } = detailCurrentPlay;
  const {
    name,
    score,
    areaList,
    episodeCount,
    year,
    tagList,
    updateInfo,
    introduction,
    episodeVo,
  } = detailMovie;

  return (
    <StyledWatchInfo>
      <h2>
        {name} - {t("Ep")} {seriesNo}
      </h2>
      <ul className="watch-properties">
        <li>
          <IonIcon name="star-outline" /> {score}
        </li>
        <li className="watch-areas">
          {areaList.map((area) => (
            <span key={area.id}>{area.name}</span>
          ))}
        </li>
        {episodeCount && (
          <li>
            {t("EP")} {episodeVo.length}/ {episodeCount}
          </li>
        )}
        <li>{year}</li>
      </ul>
      <div className="watch-categories">
        {tagList.map((tag) => (
          <Link to={`/category/${tag.id}`} key={tag.id} className="watch-category">
            {tag.name}
          </Link>
        ))}
      </div>
      {updateInfo?.updatePeriod && (
        <div className="watch-upcoming">
          <span className="label-small">{t("Upcoming")}:</span>
          {t("New episode is updated on")}{" "}
          {` ${updateInfo.updatePeriod.substring(updateInfo.updatePeriod.indexOf(",") + 1)} `}
          {t("every week")}
        </div>
      )}
      <div>
        <span className="label-small">{t("Summary")} : </span>
        {showMoreDesc ? introduction : `${introduction.substring(0, 200)}...`}
        <button type="button" className="show-more" onClick={() => setShowMoreDesc(!showMoreDesc)}>
          {showMoreDesc ? "Show Less" : "Show More"}
        </button>
      </div>
    </StyledWatchInfo>
  );
};

export default WatchInfo;
