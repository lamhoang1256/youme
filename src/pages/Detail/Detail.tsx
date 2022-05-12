import axiosClient from "apis/axiosClient";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { StyledDetail } from "./Detail.style";

const Detail = () => {
  // const { id } = useParams();

  const fetchMovieDetail = async () => {
    try {
      const response = await axiosClient.get(
        "https://ga-mobile-api.loklok.tv/cms/web/pc/homePage/banners?size=10",

        // `https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${id}&category=0`,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <StyledDetail>
      <div className="container">Detail</div>
    </StyledDetail>
  );
};

export default Detail;
