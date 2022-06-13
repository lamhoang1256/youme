import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useSearchParams } from "react-router-dom";
import { IDetailMovie } from "types/detail";
import { getMovieDetail } from "apis/configAPI";
import SideRelated from "components/side-related/SideRelated";
import SkeletonSideRelated from "components/skeleton/SkeletonSideRelated";
import ResultNotFound from "components/notification/ResultNotFound";
import Comment from "components/comment/Comment";
import TwoColumnLayout from "layouts/TwoColumnLayout/TwoColumnLayout";
import DetailContent from "module/detail/DetailContent";
import DetailSkeleton from "module/detail/DetailSkeleton";

const StyledDetail = styled.div`
  .notfound {
    text-align: center;
  }
`;

const Detail = () => {
  const id = Number(useParams().id);
  const [searchParams] = useSearchParams();
  const category = Number(searchParams.get("cate"));
  const [loading, setLoading] = useState(true);
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
      <ResultNotFound
        heading="This Movie Doesn't Exist Right Now!"
        description="The movie is currently corrupted or does not exist, please try again"
        titleButton="Return Home"
        to="/"
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
