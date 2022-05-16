import { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { MovieDetail } from "interfaces/api";
import { getWatchMedia } from "apis/configAPI";
import { StyledWatch } from "./watch.style";
import DetailContent from "./module/DetailContent/WatchContent";
import WatchPlayer from "./module/VideoPlayer/WatchPlayer";

interface IWatch {
  detailData: MovieDetail;
  currentWatchData: any;
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
                subtitles={watch.currentWatchData.subtitlingList}
                qualities={watch.currentWatchData.qualities}
                playerRef={playerRef}
              />
              <DetailContent detail={watch} />
            </div>
            <div className="wrapper-side">
              <div className="watch-episodes">
                {watch.detailData.episodeVo.map((ep) => {
                  const active =
                    ep.seriesNo === watch.currentWatchData.seriesNo ? "is-active" : undefined;
                  return (
                    <Link
                      to={`/watch/${watch.detailData.id}?cate=${watch.detailData.category}&ep=${ep.id}`}
                      key={ep.id}
                    >
                      <button className={active} type="button">
                        {ep.seriesNo}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </StyledWrapperLayout>
        )}
      </div>
    </StyledWatch>
  );
};

export default Watch;
