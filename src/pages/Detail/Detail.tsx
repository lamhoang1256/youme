import IonIcon from "@reacticons/ionicons";
import configAPI from "apis/configAPI";
import { MovieDetail } from "interfaces/api";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { StyledDetail } from "./detail.style";

const Detail = () => {
  const id = Number(useParams().id);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchMovieDetail();
  }, [id, category]);

  return (
    <StyledDetail>
      <StyledWrapperLayout className="container">
        <div className="wrapper-main">
          {isLoading && "Loading"}
          {!isLoading && (
            <>
              <div className="detail-top">
                <div className="detail-thumb">
                  <img src={detail?.coverVerticalUrl} alt="Thumbnail" />
                </div>
                <div className="detail-content">
                  <div className="detail-header">
                    <h2 className="detail-heading">{detail?.name}</h2>
                    <div className="detail-score">
                      <IonIcon name="star-outline" />
                      {detail?.score}
                    </div>
                  </div>
                  <div className="detail-introduction">{detail?.introduction}</div>
                  <div className="detail-categoríes">
                    <h4>Categories: </h4>
                    {detail?.tagNameList.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link to={`/watch/${detail?.id}?cate=${detail?.category}`}>
                    <button type="button" className="detail-watch">
                      Watch Now
                    </button>
                  </Link>
                </div>
              </div>
              <div className="detail-bottom">
                <div className="detail-summary">
                  <span className="label">Summary: </span>
                  {detail?.introduction}
                </div>
                <img src={detail?.coverHorizontalUrl} alt="Banner" className="detail-banner" />
              </div>
            </>
          )}
        </div>
        <div className="wrapper-side">Side</div>
      </StyledWrapperLayout>
    </StyledDetail>
  );
};

export default Detail;
