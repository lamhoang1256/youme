import axiosClient from "apis/axiosClient";
import configAPI from "apis/configAPI";
import { MovieDetail, MovieMedia } from "interfaces/api";
import { StyledWrapperLayout } from "pages/Home/Home.style";
import { useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledDetail } from "./Detail.style";

const Detail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [detail, setDetail] = useState<MovieDetail>();
  const [firstEpisode, setFirstEpisode] = useState<MovieMedia>();

  const ref = useRef<HTMLVideoElement>(null);

  const fetchMovieDetail = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosClient.get(
        `https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${id}&category=${category}`,
      );
      const responseEpisode = await axiosClient.get(
        configAPI.getMovieMedia(data.data?.category, data.data.id, data.data?.episodeVo[0].id),
      );
      console.log(data.data);
      // console.log(responseEpisode.data.data);
      setDetail(data.data);
      setFirstEpisode(responseEpisode.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  // const fetchMovieMedia = async () => {
  //   try {
  //     const responseMedia = await axiosClient.get(
  //       configAPI.getMovieMedia(
  //         detail?.category,
  //         detail?.episodeVo[0].id,
  //         detail?.episodeVo[0].seriesNo,
  //       ),
  //     );
  //     console.log(responseMedia.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchMovieDetail();
    // fetchMovieMedia();
  }, []);

  return (
    <StyledDetail>
      <div className="container">
        {isLoading && "Loading"}
        {!isLoading && (
          <StyledWrapperLayout className="container">
            <div className="wrapper-main">
              <ReactHlsPlayer
                src={firstEpisode?.mediaUrl}
                autoPlay={false}
                controls
                width="100%"
                height="auto"
                playerRef={ref}
              />
              <h3>{detail?.name}</h3>
              <p>{detail?.score}</p>
              <p>{detail?.year}</p>
              <p>
                {detail?.areaList.map((area) => (
                  <span key={area.id}>{area.name}</span>
                ))}
              </p>
              <p>
                {detail?.tagList.map((tag) => (
                  <span key={tag.id}>{tag.name}</span>
                ))}
              </p>
              <p>{detail?.introduction}</p>
              {/* <div className="detail-thumbnail">
                <img src={detail?.coverVerticalUrl} alt="Thumbnail" />
              </div> */}
            </div>
            <div className="wrapper-side">Side</div>
          </StyledWrapperLayout>
        )}
      </div>
    </StyledDetail>
  );
};

export default Detail;
