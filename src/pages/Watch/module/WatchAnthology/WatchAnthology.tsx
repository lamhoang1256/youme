import { Link } from "react-router-dom";
import { MovieDetail } from "interfaces/api";
import { StyledWatchAnthology } from "./watchAnthology.style";

interface WatchAnthologyProps {
  detailMovie: MovieDetail;
  detailCurrentPlay: any;
}

const WatchAnthology = ({ detailMovie, detailCurrentPlay }: WatchAnthologyProps) => {
  return (
    <StyledWatchAnthology>
      {detailMovie.episodeVo.map((ep) => {
        const active = ep.seriesNo === detailCurrentPlay.seriesNo ? "is-active" : undefined;
        return (
          <Link
            to={`/watch/${detailMovie.id}?cate=${detailMovie.category}&ep=${ep.id}`}
            key={ep.id}
          >
            <button className={active} type="button">
              {ep.seriesNo}
            </button>
          </Link>
        );
      })}
    </StyledWatchAnthology>
  );
};

export default WatchAnthology;
