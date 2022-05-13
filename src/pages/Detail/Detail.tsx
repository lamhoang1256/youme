import axiosClient from "apis/axiosClient";
import configAPI from "apis/configAPI";
import { MovieDetail, MovieMedia, MovieBeingWatched } from "interfaces/api";
import { StyledWrapperLayout } from "pages/Home/Home.style";
import { useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledDetail } from "./Detail.style";

type DetailParams = {
  id: string;
};

const Detail = () => {
  const { id } = useParams<DetailParams>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [detail, setDetail] = useState<MovieDetail>();
  const [mediaBeingWatched, setMediaBeingWatched] = useState<MovieMedia>();
  const [dataOfEpBeingWatched, setDataOfEpBeingWatched] = useState<MovieBeingWatched>();
  const ref = useRef<HTMLVideoElement>(null);

  const fetchMovieMedia = async (cate: number, contentId: number, episodeId: number) => {
    try {
      const { data } = await axiosClient.get(configAPI.getMovieMedia(cate, contentId, episodeId));
      // console.log(data.data);
      const activeId = detail?.episodeVo.filter((ep) => String(ep.id) === data.data.episodeId);
      if (activeId !== undefined) {
        setDataOfEpBeingWatched(activeId[0]);
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
        configAPI.getMovieDetail("movieDrama", Number(id), Number(category)),
      );
      setDetail(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  console.log(dataOfEpBeingWatched);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  useEffect(() => {
    if (detail !== undefined) {
      fetchMovieMedia(detail.category, Number(detail.id), detail.episodeVo[0].id);
    }
  }, [detail]);

  return (
    <StyledDetail>
      <div className="container">
        {isLoading && "Loading"}
        {!isLoading && (
          <StyledWrapperLayout className="container">
            <div className="wrapper-main">
              <ReactHlsPlayer
                src={mediaBeingWatched?.mediaUrl || ""}
                autoPlay={false}
                controls
                width="100%"
                height="auto"
                playerRef={ref}
              />
              <h3>
                {detail?.name} - Ep {dataOfEpBeingWatched?.seriesNo}
              </h3>
              <p>{detail?.score}</p>
              <p>{detail?.year}</p>
              <div className="detail-areas">
                {detail?.areaList.map((area) => (
                  <span key={area.id}>{area.name}</span>
                ))}
              </div>
              <div className="detail-categories">
                {detail?.tagList.map((tag) => (
                  <span key={tag.id}>{tag.name}</span>
                ))}
              </div>
              <div className="detail-episodes">
                {detail?.episodeVo.map((episode) => {
                  const active =
                    episode.seriesNo === dataOfEpBeingWatched?.seriesNo ? "is-active" : undefined;
                  return (
                    <button className={active} type="button" key={episode.id}>
                      {episode.seriesNo}
                    </button>
                  );
                })}
              </div>
              <p>{detail?.introduction}</p>
            </div>
            <div className="wrapper-side">Side</div>
          </StyledWrapperLayout>
        )}
      </div>
    </StyledDetail>
  );
};

export default Detail;
