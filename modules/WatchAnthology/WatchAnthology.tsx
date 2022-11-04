import { CustomLink } from "components/link";
import { IMovieDetails } from "types";
import styles from "./watchAnthology.module.scss";

interface WatchAnthologyProps {
  detailMovie: any;
  detailCurrentPlay: any;
}

const WatchAnthology = ({ detailMovie, detailCurrentPlay }: WatchAnthologyProps) => {
  console.log("detailMovie: ", detailMovie);
  return (
    <div className={styles.anthology}>
      {detailMovie.episodeVo.map(({ seriesNo, id }: any) => {
        const href = `/watch/${detailMovie.id}?cate=${detailMovie.category}&ep=${id}`;
        const active = seriesNo === detailCurrentPlay.seriesNo ? "is-active" : undefined;
        return (
          <CustomLink href={href} key={id}>
            <button className={active} type="button">
              {seriesNo}
            </button>
          </CustomLink>
        );
      })}
    </div>
  );
};

export default WatchAnthology;
