import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import configAPI from "apis/configAPI";
// import { MovieDetail, MovieBeingWatched } from "interfaces/api";
import { StyledWrapperLayout } from "pages/Home/home1.style";
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
  const [watch, setWatch] = useState<any>();
  const playerRef = useRef<HTMLVideoElement>(null);

  const fetchWatchMovie = async () => {
    setIsLoading(true);
    try {
      const response = await configAPI.getWatchMedia({
        category,
        contentId: id,
        episodeId: ep,
        definition: "GROOT_LD",
      });
      setWatch(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchMovie();
  }, [category, ep]);

  return (
    <StyledWatch>
      <div className="container">
        {isLoading && "Loading"}
        {!isLoading && watch && (
          <StyledWrapperLayout>
            <div className="wrapper-main">
              <VideoPlayer playerRef={playerRef} src={watch.detailWatch.mediaUrl || ""} />
              <DetailContent detail={watch} id={id} cate={category} />
            </div>
            <div className="wrapper-side">Side</div>
          </StyledWrapperLayout>
        )}
      </div>
    </StyledWatch>
  );
};

export default Watch;
