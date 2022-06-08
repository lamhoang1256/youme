import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IDetailMovie } from "interfaces/detail";
import { getMovieDetail } from "apis/configAPI";
import styled from "styled-components";
import SideRelated from "components/SideRelated/SideRelated";
import SkeletonSideRelated from "components/Skeleton/SkeletonSideRelated";
import Nothing from "components/notification/Nothing";
import Comment from "components/Comment/Comment";
import TwoColumnLayout from "layouts/TwoColumnLayout/TwoColumnLayout";
import DetailContent from "../../module/detail/DetailContent";
import DetailSkeleton from "../../module/detail/DetailSkeleton";

const StyledDetail = styled.div`
  .notfound {
    text-align: center;
  }
`;

const Detail = () => {
  const id = Number(useParams().id);
  const [searchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));
  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<IDetailMovie>(Object);

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
    if (!detail?.name) {
      document.title = `Youme`;
      return;
    }
    document.title = `Youme: ${detail.name}`;
  }, [detail]);

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
        <TwoColumnLayout>
          <div className="main-column">
            {!loading && (
              <>
                <DetailContent detail={detail} />
                <Comment id={String(id)} />
              </>
            )}
            {loading && <DetailSkeleton />}
          </div>
          <div className="second-column">
            {!loading && <SideRelated listSuggest={detail.likeList} />}
            {loading && <SkeletonSideRelated />}
          </div>
        </TwoColumnLayout>
      </div>
    </StyledDetail>
  );
};

export default Detail;
