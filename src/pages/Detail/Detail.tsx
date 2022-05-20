import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { MovieDetail } from "interfaces/api";
import { getMovieDetail } from "apis/configAPI";
import { StyledWrapperLayout } from "pages/Home/home.style";
import SuggestSide from "components/SuggestSide/SuggestSide";
import SuggestSideSkeleton from "components/SuggestSide/SuggestSideSkeleton";
import DetailHeader from "./module/DetailHeader/DetailHeader";
import DetailDescription from "./module/DetailDescription/DetailDescription";
import DetailSkeleton from "./module/DetailSkeleton/DetailSkeleton";
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
      <div className="container">
        <StyledWrapperLayout>
          <div className="wrapper-main">
            {!loading && (
              <>
                <DetailHeader detail={detail} />
                <DetailDescription detail={detail} />
              </>
            )}
            {loading && <DetailSkeleton />}
          </div>
          <div className="wrapper-side">
            {!loading && <SuggestSide listSuggest={detail.likeList} />}
            {loading && <SuggestSideSkeleton />}
          </div>
        </StyledWrapperLayout>
      </div>
    </StyledDetail>
  );
};

export default Detail;
