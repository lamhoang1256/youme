import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import configAPI from "apis/configAPI";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { MovieDetail } from "interfaces/api";
import { StyledWatch } from "./watch.style";
import DetailContent from "./module/DetailContent/DetailContent";
import WatchPlayer from "./module/VideoPlayer/WatchPlayer";

interface IWatch {
  dataDetailMovie: MovieDetail;
  // detailWatch: MovieMedia;
  dataCurrentEpisode: any;
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
      const response = await configAPI.getWatchMedia({
        category,
        contentId: id,
        episodeId: episode,
      });
      setWatch(response);
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
                subtitles={watch.dataCurrentEpisode.subtitlingList}
                qualities={watch.dataCurrentEpisode.qualities}
                playerRef={playerRef}
              />
              <DetailContent detail={watch} />
            </div>
            <div className="wrapper-side">Side</div>
          </StyledWrapperLayout>
        )}
      </div>
    </StyledWatch>
  );
};

export default Watch;
