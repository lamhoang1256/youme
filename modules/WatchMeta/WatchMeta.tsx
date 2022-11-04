import { IconStar } from "components/icons";
import styles from "./watchMeta.module.scss";

interface WatchMetaProps {
  countFullEpisode: number;
  countCurrEpisode: number;
  score: number;
  year: number;
  areaList: {
    id: number;
    name: string;
  }[];
}

const WatchMeta = ({
  countFullEpisode,
  countCurrEpisode,
  score,
  areaList,
  year,
}: WatchMetaProps) => {
  return (
    <div className={styles.meta}>
      <li>
        <IconStar fill="#fff" width={16} height={16} />
        {score}
      </li>
      <li className={styles.areas}>
        {areaList.map((area) => (
          <span key={area.id}>{area.name}</span>
        ))}
      </li>
      {countCurrEpisode && (
        <li>
          Ep {countCurrEpisode}/ {countFullEpisode}
        </li>
      )}
      <li>{year}</li>
    </div>
  );
};

export default WatchMeta;
