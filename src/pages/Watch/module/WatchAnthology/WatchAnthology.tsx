import { Link } from "react-router-dom";
import { IMovieDetail } from "interfaces/detail";
import { StyledWatchAnthology } from "./watchAnthology.style";

interface WatchAnthologyProps {
  detailMovie: IMovieDetail;
  detailCurrentPlay: any;
}

const WatchAnthology = ({ detailMovie, detailCurrentPlay }: WatchAnthologyProps) => {
  return (
    <StyledWatchAnthology>
      {detailMovie.episodeVo.map(({ seriesNo, id }) => {
        const url = `/watch/${detailMovie.id}?cate=${detailMovie.category}&ep=${id}`;
        const active = seriesNo === detailCurrentPlay.seriesNo ? "is-active" : undefined;
        return (
          <Link to={url} key={id}>
            <button className={active} type="button">
              {seriesNo}
            </button>
          </Link>
        );
      })}
    </StyledWatchAnthology>
  );
};

export default WatchAnthology;
