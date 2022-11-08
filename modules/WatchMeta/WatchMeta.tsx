import { IconStar } from "components/icons";
import styles from "./watchMeta.module.scss";

interface WatchMetaProps {
  episodeCount: number;
  currentEpisode: number;
  score: number;
  year: number;
  areaList: {
    id: number;
    name: string;
  }[];
}

const WatchMeta = ({ episodeCount, currentEpisode, score, areaList, year }: WatchMetaProps) => {
  return (
    <ul className={styles.meta}>
      <li>
        <IconStar fill="#e8b647" width={16} height={16} />
        {score}
      </li>
      <li className={styles.areas}>
        {areaList.map((area) => (
          <span key={area.id}>{area.name}</span>
        ))}
      </li>
      {currentEpisode && (
        <li>
          Ep {currentEpisode}/ {episodeCount}
        </li>
      )}
      <li>{year}</li>
    </ul>
  );
};

export default WatchMeta;
