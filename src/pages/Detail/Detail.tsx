import configAPI from "apis/configAPI";
import { MovieDetail } from "interfaces/api";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledDetail } from "./detail.style";

const Detail = () => {
  const id = Number(useParams().id);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = Number(searchParams.get("category"));

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<MovieDetail>();

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
  }, [id, category]);

  return (
    <StyledDetail>
      <div className="container">
        {isLoading && "Loading"}
        {!isLoading && (
          <div className="detail-info">
            <div className="detail-thumb">
              <img src={detail?.coverVerticalUrl} alt="Thumbnail" />
            </div>
            <div className="detail-content">
              <div className="detail-top">
                <h2 className="detail-heading">{detail?.name}</h2>
                <div className="detail-rate">{detail?.score}</div>
              </div>
              <div className="detail-main">
                <p>{detail?.introduction}</p>
              </div>
              <div className="detail-categoríes">
                {detail?.tagNameList.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button type="button">Watch Now</button>
            </div>
          </div>
        )}
      </div>
    </StyledDetail>
  );
};

export default Detail;
