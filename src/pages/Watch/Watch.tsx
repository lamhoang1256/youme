import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { IDetailMovie } from "types/detail";
import { getWatchMedia } from "apis/configAPI";
import SideRelated from "components/side-related/SideRelated";
import SkeletonSideRelated from "components/skeleton/SkeletonSideRelated";
import { checkEmptyObj } from "utils/checkEmptyObj";
import Comment from "components/comment/Comment";
import CommentSkeleton from "components/comment/CommentSkeleton";
import TwoColumnLayout from "layouts/TwoColumnLayout/TwoColumnLayout";
import WatchPlayer from "../../module/watch/WatchPlayer";
import WatchInfo from "../../module/watch/WatchInfo";
import WatchAnthology from "../../module/watch/WatchAnthology";
import WatchPlayerSkeleton from "../../module/watch/WatchPlayerSkeleton";
import WatchInfoSkeleton from "../../module/watch/WatchInfoSkeleton";
import WatchAnthologySkeleton from "../../module/watch/WatchAnthologySkeleton";

interface IWatch {
  detailMovie: IDetailMovie;
  detailCurrentPlay: any;
}

const StyledWatch = styled.div`
  .detail-banner {
    object-fit: cover;
    border-radius: 14px;
  }
  .detail-categories,
  .detail-areas {
    display: flex;
    gap: 14px;
  }
`;

const Watch = () => {
  const id = Number(useParams().id);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
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
    if (watch?.detailMovie?.name) {
      document.title = `Youme: ${watch.detailMovie.name}`;
      return;
    }
    document.title = `Youme`;
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
            <div className="main-column">
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
            <div className="second-column">
              <SideRelated listSuggest={watch.detailMovie.likeList} />
            </div>
          </TwoColumnLayout>
        )}
      </div>
    </StyledWatch>
  );
};

export default Watch;
