import axiosClient from "apis/axiosClient";
import { MovieDetail, MovieMedia } from "interfaces/api";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import { StyledDetail } from "./Detail.style";

const Detail = () => {
const { id } = useParams();
const [isLoading, setIsLoading] = useState<boolean>(true);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [searchParams, setSearchParams] = useSearchParams();
const [detail, setDetail] = useState<MovieDetail>();
const [media, setMedia] = useState<MovieMedia>();
const category = searchParams.get("category");

const fetchMovieDetail = async () => {
try {
setIsLoading(true);
const response = await axiosClient.get(
`https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${id}&category=${category}`,
);
const response2 = await axiosClient.get(
`https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=0&contentId=15584&episodeId=97058&definition=GROOT_SD`,
);
console.log(response.data.data);
setDetail(response.data.data);
setMedia(response2.data.data);
setIsLoading(false);
} catch (error) {
setIsLoading(false);
console.log(error);
}
};

useEffect(() => {
fetchMovieDetail();
}, []);

if (!isLoading) {
console.log(media);
}
const ref = useRef<HTMLVideoElement>(null);

return (
<StyledDetail>
<div className="container">
{isLoading && "Loading"}
{!isLoading && (
<div className="detail-top">
<img src={detail?.coverHorizontalUrl} className="detail-banner" alt="Banner" />
<ReactHlsPlayer
              src="https://ali-cdn-play.loklok.tv/7f7c6097f09b41a695f0edfa155d4ddd/24a404084c924ddcb1c52291cf83fb72-f53dccdf6aa028a9f51602d38f63a042-sd.m3u8?auth_key=1652353455-7af60aed34bf46fdbcc3d4b0f3d3b071-0-063a37fb5c38cda3f08e37a6f0c82504"
              autoPlay={false}
              controls
              width="60%"
              height="auto"
              playerRef={ref}
            />
</div>
)}
</div>
</StyledDetail>
);
};

export default Detail;
