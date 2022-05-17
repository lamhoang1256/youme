import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { MovieDetail } from "interfaces/api";
import { getWatchMedia } from "apis/configAPI";
import SuggestSide from "components/SuggestSide/SuggestSide";
import { StyledWatch } from "./watch.style";
import WatchPlayer from "./module/WatchPlayer/WatchPlayer";
import WatchContent from "./module/WatchContent/WatchContent";
import WatchEpisodes from "./module/WatchEpisodes/WatchEpisodes";

interface IWatch {
  detailMovie: MovieDetail;
  detailCurrentPlay: any;
}

const Watch = () => {
  const id = Number(useParams().id);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));
  const episode = Number(searchParams.get("ep"));
  const [watch, setWatch] = useState<IWatch>();
  const playerRef = useRef<HTMLVideoElement>(null);

  const fetchWatchMovie = async () => {
    setIsLoading(true);
    try {
      const response = await getWatchMedia({
        category,
        contentId: id,
        episodeId: episode,
      });
      setWatch(response);
      console.log(response.detailMovie);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchMovie();
  }, [category, episode]);

  return (
    <StyledWatch>
      <div className="container">
        {isLoading && "Loading"}
        {!isLoading && watch && (
          <StyledWrapperLayout>
            <div className="wrapper-main">
              <WatchPlayer
                subtitles={watch.detailCurrentPlay.subtitlingList}
                qualities={watch.detailCurrentPlay.qualities}
                playerRef={playerRef}
              />
              <WatchContent detail={watch} />
            </div>
            <div className="wrapper-side">
              <WatchEpisodes
                detailMovie={watch.detailMovie}
                detailCurrentPlay={watch.detailCurrentPlay}
              />
              <SuggestSide listSuggest={watch.detailMovie.likeList} />
            </div>
          </StyledWrapperLayout>
        )}
      </div>
    </StyledWatch>
  );
};

export default Watch;
