import axiosClient from "apis/axiosClient";
import configAPI from "apis/configAPI";
import { MovieDetail, MovieMedia, MovieBeingWatched } from "interfaces/api";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledWatch } from "./watch.style";
import DetailContent from "./module/DetailContent/DetailContent";
import VideoPlayer from "./module/VideoPlayer/VideoPlayer";

type WatchParams = {
  id: string;
};

const Watch = () => {
  const { id } = useParams<WatchParams>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const cate = searchParams.get("cate");
  const ep = searchParams.get("ep");
  const [detail, setDetail] = useState<MovieDetail>();
  const [mediaBeingWatched, setMediaBeingWatched] = useState<MovieMedia>();
  const [dataOfEpBeingWatched, setDataOfEpBeingWatched] = useState<MovieBeingWatched>();
  const playerRef = useRef<HTMLVideoElement>(null);

  const fetchMovieMedia = async (category: number, contentId: number, episodeId: number) => {
    try {
      const { data } = await axiosClient.get(
        configAPI.getMovieMedia(category, contentId, episodeId),
      );
      const movieMedia = detail?.episodeVo.filter(
        (episode) => String(episode.id) === data.data.episodeId,
      );
      if (movieMedia !== undefined) {
        setDataOfEpBeingWatched(movieMedia[0]);
      }
      setMediaBeingWatched(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieDetail = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosClient.get(
        configAPI.getMovieDetail("movieDrama", Number(id), Number(cate)),
      );
      setDetail(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [cate, ep]);

  useEffect(() => {
    if (detail !== undefined) {
      fetchMovieMedia(detail.category, Number(detail.id), detail.episodeVo[Number(ep) - 1].id);
    }
  }, [detail]);

  return (
    <StyledWatch>
      <div className="container">
        {isLoading && "Loading"}
        {!isLoading && detail && dataOfEpBeingWatched && cate && id && (
          <StyledWrapperLayout>
            <div className="wrapper-main">
              <VideoPlayer playerRef={playerRef} src={mediaBeingWatched?.mediaUrl || ""} />
              <DetailContent
                detail={detail}
                dataOfEpBeingWatched={dataOfEpBeingWatched}
                id={id}
                cate={cate}
              />
            </div>
            <div className="wrapper-side">Side</div>
          </StyledWrapperLayout>
        )}
      </div>
    </StyledWatch>
  );
};

export default Watch;
