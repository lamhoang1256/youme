import styles from "./castList.module.scss";
import { Cast } from "modules/Cast";
import { ICast } from "types";

interface CastListProps {
  starList: ICast[];
}

const CastList = ({ starList }: CastListProps) => {
  return (
    <div className={styles.castSection}>
      <h4>Casts: </h4>
      <div className={styles.castList}>
        {starList.map((star) => (
          <Cast key={star.starId} name={star.localName} image={star.image} />
        ))}
      </div>
    </div>
  );
};

export default CastList;
