import { IconPlay } from "components/icons";
import { CustomLink } from "components/link";
import { PATH } from "constants/path";
import { useRouter } from "next/router";
import { IEpisode, IMovieDetails } from "types";
import styles from "./watchAnthology.module.scss";

interface WatchAnthologyProps {
  detailMovie: IEpisode;
}

const WatchAnthology = ({ detailMovie }: WatchAnthologyProps) => {
  const router = useRouter();
  const { episode = detailMovie.episodeVo[0].id } = router.query;
  return (
    <div className={styles.anthology}>
      {detailMovie.episodeVo.map(({ seriesNo, id }: any) => {
        const href = `${PATH.watch}/${detailMovie.category}/${detailMovie.id}/${id}`;
        const active = id === Number(episode);
        return (
          <CustomLink href={href} key={id}>
            <button>{active ? <IconPlay fill="#8a3cff" /> : seriesNo}</button>
          </CustomLink>
        );
      })}
    </div>
  );
};

export default WatchAnthology;
