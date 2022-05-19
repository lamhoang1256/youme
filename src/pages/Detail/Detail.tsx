import IonIcon from "@reacticons/ionicons";
import { getMovieDetail } from "apis/configAPI";
import SuggestSide from "components/SuggestSide/SuggestSide";
import SuggestSideSkeleton from "components/SuggestSide/SuggestSideSkeleton";
import { MovieDetail } from "interfaces/api";
import { StyledWrapperLayout } from "pages/Home/home.style";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { StyledDetail } from "./detail.style";

const Detail = () => {
  const id = Number(useParams().id);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));
  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<MovieDetail>(Object);

  const fetchMovieDetail = async () => {
    setLoading(true);
    try {
      const { data } = await getMovieDetail({ id, category });
      setDetail(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
          {loading && "Loading"}
          {!loading && (
            <>
              <div className="detail-top">
                <div className="detail-thumb">
                  <LazyLoadImage src={detail?.coverVerticalUrl} alt="Thumbnail" effect="opacity" />
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
                  <div className="detail-action">
                    <Link to={`/watch/${detail?.id}?cate=${detail?.category}`}>
                      <button type="button" className="detail-watch">
                        Watch Now
                      </button>
                    </Link>
                    <button type="button" className="detail-button detail-favorite">
                      <IonIcon name="heart" />
                    </button>
                    <button type="button" className="detail-button detail-share">
                      <IonIcon name="share-social-outline" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="detail-bottom">
                <div className="detail-summary">
                  <span className="label-small">Summary : </span>
                  {detail?.introduction}
                </div>
                <LazyLoadImage
                  src={detail?.coverHorizontalUrl}
                  className="detail-banner"
                  alt="Banner"
                  effect="opacity"
                />
              </div>
            </>
          )}
        </div>
        <div className="wrapper-side">
          {loading && <SuggestSideSkeleton />}
          {!loading && <SuggestSide listSuggest={detail.likeList} />}
        </div>
      </StyledWrapperLayout>
    </StyledDetail>
  );
};

export default Detail;
