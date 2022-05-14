import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import configAPI from "apis/configAPI";
import { MovieDetail, MovieMedia, MovieBeingWatched } from "interfaces/api";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { StyledWatch } from "./watch.style";
import DetailContent from "./module/DetailContent/DetailContent";
import VideoPlayer from "./module/VideoPlayer/VideoPlayer";

const Watch = () => {
  const id = Number(useParams().id);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));
  const ep = Number(searchParams.get("ep"));
  const [detail, setDetail] = useState<MovieDetail>();
  const [mediaBeingWatched, setMediaBeingWatched] = useState<MovieMedia>();
  const [dataOfEpBeingWatched, setDataOfEpBeingWatched] = useState<MovieBeingWatched>();
  const playerRef = useRef<HTMLVideoElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const fetchMovieMedia = async (category: number, contentId: number, episodeId: number) => {
    try {
      const { data } = await configAPI.getMovieMedia({
        category,
        contentId,
        episodeId,
        definition: "GROOT_LD",
      });
      const movieMedia = detail?.episodeVo.filter(
        (episode) => String(episode.id) === data.episodeId,
      );
      if (movieMedia !== undefined) {
        setDataOfEpBeingWatched(movieMedia[0]);
      }
      setMediaBeingWatched(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieDetail = async () => {
    try {
      setIsLoading(true);
      const { data } = await configAPI.getMovieDetail({ id, category });
      setDetail(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [category, ep]);

  useEffect(() => {
    if (detail !== undefined) {
      fetchMovieMedia(detail.category, Number(detail.id), detail.episodeVo[Number(ep) - 1].id);
    }
  }, [detail]);

  return (
    <StyledWatch>
      <div className="container">
        {isLoading && "Loading"}
        {!isLoading && detail && dataOfEpBeingWatched && (
          <StyledWrapperLayout>
            <div className="wrapper-main">
              <VideoPlayer playerRef={playerRef} src={mediaBeingWatched?.mediaUrl || ""} />
              <DetailContent
                detail={detail}
                dataOfEpBeingWatched={dataOfEpBeingWatched}
                id={id}
                cate={category}
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
