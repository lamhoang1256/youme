import { useState } from "react";
import styles from "./watchSummary.module.scss";

interface WatchSummaryProps {
  introduction: string;
}

const WatchSummary = ({ introduction }: WatchSummaryProps) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div>
      <h4 className={styles.summary}>Summary :</h4>
      <span className={styles.introduction}>
        {isShowMore ? introduction : `${introduction.substring(0, 150)}...`}
      </span>
      <button type="button" className={styles.toggle} onClick={toggleReadMore}>
        {isShowMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default WatchSummary;
