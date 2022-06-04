import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IMovieDetail } from "interfaces/detail";
import { getMovieDetail } from "apis/configAPI";
import { StyledWrapperLayout } from "pages/Home/home.style";
import SideRelated from "components/SideRelated/SideRelated";
import SkeletonSideRelated from "components/Skeleton/SkeletonSideRelated";
import Nothing from "components/Nothing/Nothing";
import Comment from "components/Comment/Comment";
import DetailContent from "./module/DetailContent/DetailContent";
import DetailSkeleton from "./module/DetailSkeleton/DetailSkeleton";
import { StyledDetail } from "./detail.style";

const Detail = () => {
  const { t } = useTranslation();
  const id = Number(useParams().id);
  const [searchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));
  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<IMovieDetail>(Object);

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

  useEffect(() => {
    document.title = t("Youme - Detail");
  }, []);

  if (!detail) {
    return (
      <Nothing
        image={`${process.env.REACT_APP_PUBLIC}/images/not-found-404.png`}
        heading="This Movie Doesn't Exist Right Now!"
        description="The movie is currently corrupted or does not exist, please try again"
        titleButton="Return Home"
        redirect="/"
      />
    );
  }

  return (
    <StyledDetail>
      <div className="container">
        <StyledWrapperLayout>
          <div className="wrapper-main">
            {!loading && (
              <>
                <DetailContent detail={detail} />
                <Comment id={String(id)} />
              </>
            )}
            {loading && <DetailSkeleton />}
          </div>
          <div className="wrapper-side">
            {!loading && <SideRelated listSuggest={detail.likeList} />}
            {loading && <SkeletonSideRelated />}
          </div>
        </StyledWrapperLayout>
      </div>
    </StyledDetail>
  );
};

export default Detail;
