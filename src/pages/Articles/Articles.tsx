import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "components/loading/LoadingSpinner";
import PostItem from "module/post/PostItem";
import { useFetchArticles } from "hooks/useFetchArticles";

interface IPostItem {
  coverImg: string;
  createTime: number;
  id: number;
  introduction: string;
  keyword: string[];
  title: string;
}

const StyledArticles = styled.div`
  .articles-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px 30px;
  }
`;

const Articles = () => {
  const { t } = useTranslation();
  const { data, error, setSize } = useFetchArticles();
  useEffect(() => {
    document.title = `Youme - ${t("Articles")}`;
  }, []);

  return (
    <StyledArticles>
      <div className="container">
        <InfiniteScroll
          dataLength={data?.length || 0}
          next={() => setSize((prev: number) => prev + 1)}
          hasMore={!error && data?.slice(-1)?.[0]?.list?.length !== 0}
          loader={<LoadingSpinner />}
        >
          <div className="articles-list">
            {data
              ?.reduce((prevList: any, currList: any) => [...prevList, ...currList.list], [])
              ?.map((post: IPostItem) => (
                <PostItem
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  introduction={post.introduction}
                  image={post.coverImg}
                />
              ))}
          </div>
        </InfiniteScroll>
      </div>
    </StyledArticles>
  );
};

export default Articles;
