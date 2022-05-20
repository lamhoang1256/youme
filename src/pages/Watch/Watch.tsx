import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { MovieDetail } from "interfaces/api";
import { getWatchMedia } from "apis/configAPI";
import SuggestSide from "components/SuggestSide/SuggestSide";
import SuggestSideSkeleton from "components/SuggestSide/SuggestSideSkeleton";
import { StyledWatch } from "./watch.style";
import WatchPlayer from "./module/WatchPlayer/WatchPlayer";
import WatchInfo from "./module/WatchInfo/WatchInfo";
import WatchAnthology from "./module/WatchAnthology/WatchAnthology";
import WatchPlayerSkeleton from "./module/WatchSkeleton/WatchPlayerSkeleton";
import WatchInfoSkeleton from "./module/WatchSkeleton/WatchInfoSkeleton";
import WatchAnthologySkeleton from "./module/WatchSkeleton/WatchAnthologySkeleton";

interface IWatch {
  detailMovie: MovieDetail;
  detailCurrentPlay: any;
}

const Watch = () => {
  const id = Number(useParams().id);
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));
  const episode = Number(searchParams.get("ep"));
  const [watch, setWatch] = useState<IWatch>(Object);
  const playerRef = useRef<HTMLVideoElement>(null);

  const fetchWatchMovie = async () => {
    setLoading(true);
    try {
      const response = await getWatchMedia({
        category,
        contentId: id,
        episodeId: episode,
      });
      setWatch(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchMovie();
  }, [category, episode]);

  return (
    <StyledWatch>
      <div className="container">
        {loading && (
          <StyledWrapperLayout>
            <div className="wrapper-main">
              <WatchPlayerSkeleton />
              <WatchInfoSkeleton />
            </div>
            <div className="wrapper-side">
              <WatchAnthologySkeleton />
              <SuggestSideSkeleton />
            </div>
          </StyledWrapperLayout>
        )}

        {!loading && (
          <StyledWrapperLayout>
            <div className="wrapper-main">
              <WatchPlayer
                subtitles={watch.detailCurrentPlay.subtitlingList}
                qualities={watch.detailCurrentPlay.qualities}
                playerRef={playerRef}
              />
              <WatchInfo detail={watch} />
            </div>
            <div className="wrapper-side">
              <WatchAnthology
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
