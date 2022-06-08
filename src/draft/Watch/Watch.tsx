import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IDetailMovie } from "interfaces/detail";
import { getWatchMedia } from "apis/configAPI";
import SideRelated from "components/side-related/SideRelated";
import SkeletonSideRelated from "components/skeleton/SkeletonSideRelated";
import { checkEmptyObj } from "helpers/checkEmptyObj";
import Comment from "components/comment/Comment";
import CommentSkeleton from "components/comment/CommentSkeleton";
import TwoColumnLayout from "layouts/TwoColumnLayout/TwoColumnLayout";
import WatchPlayer from "./module/WatchPlayer/WatchPlayer";
import WatchInfo from "./module/WatchInfo/WatchInfo";
import WatchAnthology from "./module/WatchAnthology/WatchAnthology";
import WatchPlayerSkeleton from "./module/WatchSkeleton/WatchPlayerSkeleton";
import WatchInfoSkeleton from "./module/WatchSkeleton/WatchInfoSkeleton";
import WatchAnthologySkeleton from "./module/WatchSkeleton/WatchAnthologySkeleton";
import { StyledWatch } from "./watch.style";

interface IWatch {
  detailMovie: IDetailMovie;
  detailCurrentPlay: any;
}

const Watch = () => {
  const id = Number(useParams().id);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
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

  useEffect(() => {
    if (checkEmptyObj(watch)) return;
    const historyLocalStorage = JSON.parse(localStorage.getItem("movie-history") || "[]");
    const history = historyLocalStorage?.filter((movie: any) => movie.id !== `${id}`);
    if (history.length > 60) {
      // if history movies > 60 remove 10 last movies
      history.splice(-10);
    }
    history.unshift({
      id: watch.detailMovie.id,
      name: watch.detailMovie.name,
      coverVerticalUrl: watch.detailMovie.coverVerticalUrl,
      domainType: watch.detailMovie.category,
    });
    localStorage.setItem("movie-history", JSON.stringify(history));
  }, [watch]);

  useEffect(() => {
    if (!watch?.detailMovie?.name) {
      document.title = `Youme`;
      return;
    }
    document.title = `Youme: ${watch.detailMovie.name}`;
  }, [watch]);

  return (
    <StyledWatch>
      <div className="container">
        {loading && (
          <TwoColumnLayout>
            <div className="main-column">
              <WatchPlayerSkeleton />
              <WatchInfoSkeleton />
              <WatchAnthologySkeleton />
              <CommentSkeleton />
            </div>
            <div className="second-column">
              <SkeletonSideRelated />
            </div>
          </TwoColumnLayout>
        )}

        {!loading && (
          <TwoColumnLayout>
            <div>
              <WatchPlayer
                subtitles={watch.detailCurrentPlay.subtitlingList}
                qualities={watch.detailCurrentPlay.qualities}
                playerRef={playerRef}
              />
              <WatchInfo
                detailMovie={watch.detailMovie}
                detailCurrentPlay={watch.detailCurrentPlay}
              />
              <WatchAnthology
                detailMovie={watch.detailMovie}
                detailCurrentPlay={watch.detailCurrentPlay}
              />
              <Comment id={String(id)} />
            </div>
            <div>
              <SideRelated listSuggest={watch.detailMovie.likeList} />
            </div>
          </TwoColumnLayout>
        )}
      </div>
    </StyledWatch>
  );
};

export default Watch;
