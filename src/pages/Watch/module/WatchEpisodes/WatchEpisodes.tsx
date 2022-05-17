import { MovieDetail } from "interfaces/api";
import { Link } from "react-router-dom";
import { StyledWatchEpisodes } from "./watchEpisodes.style";

interface WatchEpisodesProps {
  detailMovie: MovieDetail;
  detailCurrentPlay: any;
}

const WatchEpisodes = ({ detailMovie, detailCurrentPlay }: WatchEpisodesProps) => {
  return (
    <StyledWatchEpisodes>
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
    </StyledWatchEpisodes>
  );
};

export default WatchEpisodes;
